# Aarogya Architecture & Design Decisions

This document outlines the high-level architecture of Aarogya Design System and the rationale behind key technical choices.

## 🎨 Core Design Philosophy

Aarogya is built with a specific aesthetic in mind: "Soft Modern". We stray away from overly harsh borders and stark contrasts in favor of:
- Soft shadows (`shadow-premium`)
- Smooth, micro-interaction animations
- Highly readable typography
- A curated, calming color palette (Cream, Soft Sand, Soft Pink)

This aesthetic is enforced through a strict set of Tailwind design tokens.

## 🛠️ Technology Stack Breakdown

### Next.js 15+ (App Router)
The documentation site and interactive examples are built on the latest Next.js App Router. This provides us with Server Components, optimized image loading, and a robust routing mechanism for our complex nested documentation.

### Tailwind CSS v4
We adopted Tailwind CSS v4 to leverage the new CSS-first engine. This provides massive performance improvements during development and build times, and simplifies our configuration allowing us to rely more heavily on native CSS features like `@theme` and `@import`.

### Radix UI (Headless Primitives)
Accessibility is paramount. Instead of building complex interactive components (Select, Dialog, Tabs) from scratch, we use Radix UI. Radix provides the unstyled, WAI-ARIA compliant functionality (keyboard navigation, focus management, screen reader support), and we apply our Aarogya Tailwind styles on top.

### Framer Motion
For animations, we utilize Framer Motion. This allows us to orchestrate complex layout animations and entry transitions that would be difficult to manage with CSS alone.

## 💻 The CLI (`aarogya-ui`)

The Aarogya CLI (`cli/` directory) is heavily inspired by tools like `shadcn-ui`.

**How it works:**
1. **Interactive Prompts**: Built with `commander` and `prompts`, the CLI asks the user what they want to initialize or install.
2. **File System Operations**: Instead of being an NPM dependency, Aarogya components are *owned* by the consumer. The CLI copies the raw `.tsx` files directly into the user's project folder (e.g., `components/ui/button.tsx`).
3. **Dependency Injection**: When adding a component, the CLI reads a registry (or internal configuration) to install required third-party packages (like `lucide-react` or `@radix-ui/react-dialog`) automatically.

This "copy-paste" architecture ensures that developers have full control over the component source code, allowing them to tweak the components exactly to their needs without fighting against library constraints.

## 🧪 Testing and Quality Assurance

- **Storybook**: Used for isolated visual testing and component development.
- **Vitest & Playwright**: For fast unit testing and browser-based component testing.
- **ESLint**: Strict Next.js and typical React linting rules.
