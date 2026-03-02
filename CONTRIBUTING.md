# Contributing to Aarogya Design System

First off, thank you for considering contributing to Aarogya Design System! It's people like you that make Aarogya such a great tool for the community.

## 🛠️ Setup for Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aarogyaojha/component-library.git
   cd component-library
   ```

2. **Install dependencies:**
   Ensure you are using Node.js >= 18.0.0.
   ```bash
   npm install
   ```

3. **Start the documentation site:**
   ```bash
   npm run dev
   ```

4. **Start Storybook (for isolated component development):**
   ```bash
   npm run storybook
   ```

## 🧩 Adding a New Component

When adding a new component, please follow these steps:

1. **Create the Component:**
   Place the new component in the appropriate subdirectory under `components/` (e.g., `components/ui/`, `components/forms/`, `components/feedback/`).

2. **Styling & Anatomy:**
   - Use **Tailwind CSS v4** for styling.
   - Utilize `clsx` and `tailwind-merge` (`cn` utility) for dynamic classes.
   - For complex interactive components, lean on **Radix UI primitives** to ensure WAI-ARIA compliance and keyboard accessibility.
   - Keep the design aesthetic soft, modern, and premium.

3. **Writing Stories:**
   Create a `.stories.tsx` file alongside your component (e.g., `button.stories.tsx`). Document all variants and states.

4. **Tests (Vitest):**
   We aim for high test coverage. Write unit and component tests using Vitest and React Testing Library.

5. **Update Documentation:**
   - Create a new documentation page in `app/docs/components/<your-component>/page.tsx`.
   - Update `app/docs/components/page.tsx` reference to include your new component in the grid.

## ✅ Pull Request Process

1. Create a feature branch from `main` (e.g., `feature/awesome-new-component`).
2. Make your changes and commit them with clear, descriptive commit messages.
3. Push your branch and open a Pull Request.
4. Ensure all CI checks (linting, tests) are passing.
5. Request review from the maintainers.
