# Aero UI

[![Live Demo](https://img.shields.io/badge/Live%20Demo-component--library--ashy.vercel.app-blue?style=flat-square)](https://component-library-ashy.vercel.app)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square)](https://component-library-ashy.vercel.app)

An open-source React component library built with Next.js 15, TypeScript, Tailwind CSS v4, and Radix UI primitives. Ships with a custom CLI tool for scaffolding components directly into any project, Storybook 8 for isolated development, and Vitest for unit testing.

**[View live demo →](https://component-library-ashy.vercel.app)**

---

## Install via CLI

```bash
npx aarogya-ui@latest init
```

The CLI configures Tailwind, installs dependencies, and copies only the components you need into your project. No lock-in — the components live in your codebase.

---

## Components

**UI & display**
Button, Badge, Card, Table, Tabs, Accordion

**Forms & controls**
Input, Textarea, Checkbox, Radio Group, Select, Switch

**Feedback & overlays**
Alert, Dialog, Loading (Spinner + Skeleton)

All components are built on Radix UI primitives — keyboard navigation and screen reader support out of the box.

---

## Usage example

```tsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/feedback/dialog";

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogDescription>
            Are you sure you want to proceed?
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
```

---

## Manual setup

```bash
npm install lucide-react clsx tailwind-merge class-variance-authority framer-motion \
  @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-select \
  @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-radio-group
```

Add to your `globals.css`:
```css
@import "tailwindcss";
@import "./tokens.css";
```

---

## Project structure

```
aero-ui/
├── app/              # Next.js 15 interactive documentation site
├── components/       # Core components: ui/, forms/, layout/, feedback/, navigation/
├── cli/              # aarogya-ui CLI source
├── .storybook/       # Storybook 8 configuration
└── lib/              # Utilities, cn(), design tokens
```

---

## Development

```bash
npm run dev        # documentation site
npm run storybook  # isolated component development
npm run lint       # linter
```

---

## Theming

Aero UI uses CSS variables for theming. Customize by modifying your `tokens.css`. Default theme is a soft cream/sand palette with full dark mode support via `next-themes`.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Contributions, new components, and bug reports are welcome.

---

## License

MIT © Aarogya Ojha
