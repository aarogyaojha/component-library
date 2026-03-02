#!/usr/bin/env node

import { Command } from "commander";
import prompts from "prompts";
import chalk from "chalk";
import ora from "ora";
import fs from "fs-extra";
import path from "path";
import { execa } from "execa";
import https from "https";

const program = new Command();

const GITHUB_RAW_BASE =
  "https://raw.githubusercontent.com/aarogyaojha/component-library/master";

// Map of all available components and their source paths in the repo
const COMPONENTS_MAP = {
  // UI Primitives
  button:   { src: "components/ui/button.tsx",        dest: "components/ui/button.tsx",        deps: [] },
  badge:    { src: "components/ui/badge.tsx",          dest: "components/ui/badge.tsx",          deps: [] },
  table:    { src: "components/ui/table.tsx",          dest: "components/ui/table.tsx",          deps: [] },
  // Layout
  card:     { src: "components/layout/card.tsx",       dest: "components/layout/card.tsx",       deps: [] },
  // Feedback
  alert:    { src: "components/feedback/alert.tsx",    dest: "components/feedback/alert.tsx",    deps: [] },
  dialog:   { src: "components/feedback/dialog.tsx",   dest: "components/feedback/dialog.tsx",   deps: ["button"] },
  // Forms
  input:    { src: "components/forms/input.tsx",       dest: "components/forms/input.tsx",       deps: [] },
  textarea: { src: "components/forms/textarea.tsx",    dest: "components/forms/textarea.tsx",    deps: [] },
  checkbox: { src: "components/forms/checkbox.tsx",    dest: "components/forms/checkbox.tsx",    deps: [] },
  select:   { src: "components/forms/select.tsx",      dest: "components/forms/select.tsx",      deps: [] },
  switch:   { src: "components/forms/switch.tsx",      dest: "components/forms/switch.tsx",      deps: [] },
  // Navigation
  tabs:     { src: "components/navigation/tabs.tsx",   dest: "components/navigation/tabs.tsx",   deps: [] },
};

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Downloads a single file from a URL to a local path, following redirects. */
function downloadFile(url, targetPath) {
  return new Promise((resolve, reject) => {
    const get = (u) =>
      https.get(u, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          return get(res.headers.location);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} for ${u}`));
        }
        const stream = fs.createWriteStream(targetPath);
        res.pipe(stream);
        stream.on("finish", () => { stream.close(); resolve(); });
        stream.on("error", reject);
      }).on("error", reject);
    get(url);
  });
}

/** Adds a component (and its deps) to the user's project. */
async function installComponent(name, rootDir, spinner) {
  const info = COMPONENTS_MAP[name.toLowerCase()];
  if (!info) throw new Error(`Unknown component: ${name}`);

  // Install deps first
  for (const dep of info.deps) {
    await installComponent(dep, rootDir, spinner);
  }

  const targetPath = path.join(rootDir, info.dest);
  if (await fs.pathExists(targetPath)) {
    spinner.info(chalk.dim(`  ${name} already exists, skipping.`));
    spinner.start();
    return;
  }

  spinner.text = `Downloading ${chalk.cyan(name)}...`;
  await fs.ensureDir(path.dirname(targetPath));
  const url = `${GITHUB_RAW_BASE}/${info.src}`;
  await downloadFile(url, targetPath);
  spinner.succeed(chalk.green(`  ✔ ${name}`) + chalk.dim(` → ${info.dest}`));
  spinner.start();
}

// ─── Commands ────────────────────────────────────────────────────────────────

program
  .name("aarogya-ui")
  .description(chalk.magenta("Aarogya UI") + " — a premium React component library.")
  .version("0.1.0");

// ── init ──────────────────────────────────────────────────────────────────────
program
  .command("init")
  .description("Set up Aarogya UI in your project (installs deps, creates utils).")
  .action(async () => {
    console.log(
      chalk.bold.magenta("\n  ╔═══════════════════════════╗\n") +
      chalk.bold.magenta("  ║    Aarogya UI  v0.1.0     ║\n") +
      chalk.bold.magenta("  ╚═══════════════════════════╝\n")
    );

    const { confirm } = await prompts({
      type: "confirm",
      name: "confirm",
      message: "Initialise Aarogya UI in the current directory?",
      initial: true,
    });

    if (!confirm) {
      console.log(chalk.yellow("\nAborted.\n"));
      return;
    }

    const spinner = ora("Starting…").start();

    try {
      const rootDir = process.cwd();

      // 1. Install npm dependencies
      spinner.text = "Installing npm packages…";
      const deps = [
        "@radix-ui/react-slot",
        "@radix-ui/react-dialog",
        "@radix-ui/react-tabs",
        "@radix-ui/react-select",
        "@radix-ui/react-checkbox",
        "@radix-ui/react-switch",
        "@radix-ui/react-radio-group",
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
        "lucide-react",
        "next-themes",
      ];
      await execa("npm", ["install", ...deps], { cwd: rootDir });

      // 2. Create lib/utils.ts
      spinner.text = "Creating lib/utils.ts…";
      const libDir = path.join(rootDir, "lib");
      await fs.ensureDir(libDir);
      await fs.writeFile(
        path.join(libDir, "utils.ts"),
        `import { clsx, type ClassValue } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}\n`
      );

      // 3. Download globals.css (design tokens)
      spinner.text = "Downloading design token CSS…";
      const appDir = path.join(rootDir, "app");
      await fs.ensureDir(appDir);
      const cssTarget = path.join(appDir, "globals.css");
      if (!(await fs.pathExists(cssTarget))) {
        await downloadFile(`${GITHUB_RAW_BASE}/app/globals.css`, cssTarget);
      } else {
        spinner.info(chalk.dim("  globals.css already exists — skipping."));
        spinner.start();
      }

      spinner.stop();
      console.log(chalk.green.bold("\n  ✓ Aarogya UI initialised!\n"));
      console.log(chalk.cyan("  Next steps:"));
      console.log(`  ${chalk.dim("1.")} Make sure ${chalk.bold("@import 'tailwindcss'")} is at the top of your globals.css`);
      console.log(`  ${chalk.dim("2.")} Add components with ${chalk.bold("npx aarogya-ui add <name>")}`);
      console.log(`  ${chalk.dim("3.")} See all components with   ${chalk.bold("npx aarogya-ui list")}\n`);

    } catch (err) {
      spinner.fail(chalk.red("Initialisation failed."));
      console.error(err);
      process.exit(1);
    }
  });

// ── add ───────────────────────────────────────────────────────────────────────
program
  .command("add")
  .description("Add one or more components to your project.")
  .argument("<components...>", "Component name(s) to add")
  .action(async (names) => {
    const rootDir = process.cwd();
    const spinner = ora("Preparing…").start();

    try {
      for (const name of names) {
        if (!COMPONENTS_MAP[name.toLowerCase()]) {
          spinner.warn(chalk.yellow(`Unknown component: "${name}". Run ${chalk.bold("aarogya-ui list")} for options.`));
          continue;
        }
        await installComponent(name.toLowerCase(), rootDir, spinner);
      }
      spinner.stop();
      console.log(chalk.green.bold("\n  ✓ Done!\n"));
    } catch (err) {
      spinner.fail(chalk.red("Failed to add component."));
      console.error(err);
      process.exit(1);
    }
  });

// ── list ──────────────────────────────────────────────────────────────────────
program
  .command("list")
  .description("List all available components.")
  .action(() => {
    console.log(chalk.bold.magenta("\n  Available components:\n"));
    const groups = {
      "UI Primitives": ["button", "badge", "table"],
      "Layout":        ["card"],
      "Feedback":      ["alert", "dialog"],
      "Forms":         ["input", "textarea", "checkbox", "select", "switch"],
      "Navigation":    ["tabs"],
    };
    for (const [group, items] of Object.entries(groups)) {
      console.log(chalk.cyan(`  ${group}`));
      for (const item of items) {
        console.log(`    ${chalk.white("·")} ${item}`);
      }
      console.log("");
    }
    console.log(chalk.dim(`  Add with: npx aarogya-ui add <name>\n`));
  });

program.parse();
