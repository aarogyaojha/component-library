# Aarogya Design System 🎨

A premium, production-grade UI component library built with **Next.js 15+**, **TypeScript**, and **Tailwind CSS v4**. Aarogya (Sanskrit for "Overall Health/Wellbeing") focuses on soft aesthetics, high accessibility, and a seamless developer experience.

![Documentation Preview](https://img.shields.io/badge/Aesthetics-Premium-blueviolet)
![Next.js](https://img.shields.io/badge/Next.js-15+-black)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![Radix UI](https://img.shields.io/badge/Radix_UI-Headless-6b21a8)
![Storybook](https://img.shields.io/badge/Storybook-v8-ff4785)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)

## ✨ Features

- **Soft Modern Aesthetic**: Curated color palette (Cream, Soft Sand, Soft Pink) with premium shadows and micro-animations.
- **Tailwind CSS v4**: Built on the latest CSS-first engine for maximum performance.
- **Accessible (WAI-ARIA)**: Built on top of Radix UI primitives for keyboard navigation and screen reader support.
- **Framer Motion**: Smooth entry animations, layout transitions, and interactive feedback.
- **Developer First**: Comprehensive documentation with interactive examples, API references, and copy-paste CLI integration.
- **Fully Typed**: Strict TypeScript definitions for all props and variants.
- **Interactive Docs**: Built-in scroll spying, dynamic pagination, and responsive layouts.

## 🚀 Quick Start

### Installation via CLI (Recommended)

The easiest way to integrate Aarogya is via our CLI tool. It automatically configures Tailwind, installs dependencies, and copies the components you need into your project.

```bash
npx aarogya-ui@latest init
```

### Manual Setup

If you prefer to set up manually:

1. **Install Dependencies**:
   ```bash
   npm install lucide-react clsx tailwind-merge class-variance-authority framer-motion @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-select @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-radio-group
   ```

2. **Tailwind Config**:
   Ensure your `globals.css` (or `app/globals.css`) uses Tailwind v4 structure:
   ```css
   @import "tailwindcss";
   @import "./tokens.css"; /* Make sure to define your design tokens here */
   ```

## 📂 Component Suite

### UI & Data Display
- **Button**: Multi-variant, size-aware interactive element.
- **Badge**: Status indicators with soft/outline variants.
- **Card**: Structured content containers with premium elevation.
- **Table**: Responsive tabular data presentation.
- **Tabs**: Smooth-transitioning navigation with underline indicators.
- **Accordion**: Stacked collapsible content regions.

### Forms & Controls
- **Input & Textarea**: Refined text entry with validation states.
- **Checkbox & Radio Group**: Accessible selection with description support.
- **Select**: Sophisticated dropdowns with grouping.
- **Switch**: Clean toggle interfaces for binary settings.

### Feedback & Overlays
- **Alert**: High-visibility feedback for success, info, and errors.
- **Dialog**: Accessible modal overlays with background blur.
- **Loading**: Spinner and Skeleton states for async operations.

## 🧱 Usage Example

Here's an example of how to use the Button and Dialog components together:

```tsx
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/feedback/dialog";

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Premium Modals</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            Are you sure you want to perform this operation?
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
```

## 🏗️ Project Structure

The repository is organized into several key directories:

- `app/`: Next.js 15 App Router application containing the interactive documentation site (e.g. `app/docs/`).
- `components/`: The core UI components categorized by domain (`ui/`, `forms/`, `layout/`, `feedback/`, `navigation/`).
- `cli/`: The `aarogya-ui` CLI source code for code generation and project initialization.
- `.storybook/`: Storybook configuration for isolated component development.

## 🛠️ Development commands

Start the documentation site:
```bash
npm run dev
```

Run Storybook for component development:
```bash
npm run storybook
```

Run linter:
```bash
npm run lint
```

## 🎨 Theming

Aarogya utilizes CSS variables for theming. You can customize the look and feel by modifying the variables in your `tokens.css` or `globals.css`. By default, we use a soft cream/sand theme with robust dark mode support via `next-themes`.

See `app/globals.css` and `tailwind` configuration for more details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to add new components, tests, and documentation. See [Architecture](docs/ARCHITECTURE.md) for design decisions.

## 📄 License

MIT © [Aarogya Ojha](https://github.com/aarogyaojha)
