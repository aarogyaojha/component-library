# Aarogya Design System 🎨

A premium, production-grade UI component library built with **Next.js 15+**, **TypeScript**, and **Tailwind CSS v4**. Aarogya (Sanskrit for "Overall Health/Wellbeing") focuses on soft aesthetics, high accessibility, and a seamless developer experience.

![Documentation Preview](https://img.shields.io/badge/Aesthetics-Premium-blueviolet)
![Next.js](https://img.shields.io/badge/Next.js-15+-black)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![Radix UI](https://img.shields.io/badge/Radix_UI-Headless-6b21a8)

## ✨ Features

- **Soft Modern Aesthetic**: Curated color palette (Cream, Soft Sand, Soft Pink) with premium shadows and micro-animations.
- **Tailwind CSS v4**: Built on the latest CSS-first engine for maximum performance.
- **Accessible (WAI-ARIA)**: Built on top of Radix UI primitives for keyboard navigation and screen reader support.
- **Developer First**: Comprehensive documentation with interactive examples, API references, and copy-paste CLI integration.
- **Fully Typed**: Strict TypeScript definitions for all props and variants.
- **Interactive Docs**: Built-in scroll spying, dynamic pagination, and responsive layouts.

## 🚀 Quick Start

### Installation

The easiest way to integrate Aarogya is via our CLI:

```bash
npx aarogya-ui@latest init
```

### Manual Setup

1. **Install Dependencies**:
   ```bash
   npm install lucide-react clsx tailwind-merge class-variance-authority framer-motion @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-select @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-radio-group
   ```

2. **Tailwind Config**:
   Ensure your `globals.css` uses Tailwind v4:
   ```css
   @import "tailwindcss";
   @import "./tokens.css";
   ```

## 📂 Component Suite

### UI & Data Display
- **Button**: Multi-variant, size-aware interactive element.
- **Badge**: Status indicators with soft/outline variants.
- **Card**: Structured content containers with premium elevation.
- **Table**: Responsive tabular data presentation.
- **Tabs**: Smooth-transitioning navigation with underline indicators.

### Forms & Controls
- **Input & Textarea**: Refined text entry with validation states.
- **Checkbox & Radio Group**: Accessible selection with description support.
- **Select**: Sophisticated dropdowns with grouping.
- **Switch**: Clean toggle interfaces for binary settings.

### Feedback & Overlays
- **Alert**: High-visibility feedback for success, info, and errors.
- **Dialog**: Accessible modal overlays with background blur.
- **Loading**: Spinner and Skeleton states for async operations.

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Headless UI**: Radix UI
- **Documentation**: Markdown + Custom Doc Layout

## 📄 License

MIT © Aarogya Ojha
