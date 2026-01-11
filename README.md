# React TypeScript Vite Template

![Vite Logo](./public/vite.svg)

A modern, fast, and minimal React template with TypeScript, Vite, TailwindCSS, and pnpm.

## Features

- **Vite** - Lightning-fast development server and build tool
- **React 18** - Latest React with hooks support
- **TypeScript** - Type-safe development experience
- **TailwindCSS** - Utility-first CSS framework for rapid UI development
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Production Ready** - Optimized build configuration

## Tech Stack

- **React** `^18.3.1` - UI library
- **TypeScript** `~5.6.2` - Type safety
- **Vite** `^5.4.10` - Build tool and dev server
- **TailwindCSS** `^3.4.14` - Styling
- **pnpm** - Package manager
- **ESLint** - Linting
- **Prettier** - Code formatting

## Prerequisites

Make sure you have **pnpm** installed. If not, install it globally:

```bash
npm install -g pnpm
```

## Getting Started

### 1. Clone or use this template

```bash
git clone <your-repo-url>
cd react-ts-vite-tailwind-pnpm-template
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start development server

```bash
pnpm dev
```

The app will be running at `http://localhost:5173`

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint to check code quality |
| `pnpm format` | Format code with Prettier |

## Project Structure

```
react-ts-vite-tailwind-pnpm-template/
├── public/              # Static assets
│   └── vite.svg        # Vite logo
├── src/
│   ├── assets/         # Project assets
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Application entry point
│   ├── index.css       # Global styles with Tailwind directives
│   └── vite-env.d.ts   # Vite type definitions
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # TailwindCSS configuration
├── postcss.config.js   # PostCSS configuration
└── eslint.config.js    # ESLint configuration
```

## Styling with TailwindCSS

This template uses TailwindCSS for styling. You can use utility classes directly in your components:

```

## Configuration

### TypeScript

TypeScript configuration is split into three files:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node/Vite-specific settings

### Vite

Modify `vite.config.ts` to customize your build configuration.

### TailwindCSS

Customize your design system in `tailwind.config.js`.

## Installing Additional Packages

Use pnpm to install additional dependencies:

```bash
pnpm add <package-name>
```

For dev dependencies:

```bash
pnpm add -D <package-name>
```

## Building for Production

Create an optimized production build:

```bash
pnpm build
```

The built files will be in the `dist` directory.

Preview the production build locally:

```bash
pnpm preview
```

## Code Quality

### Linting

Run ESLint to check for code issues:

```bash
pnpm lint
```

### Formatting

Format your code with Prettier:

```bash
pnpm format

---

**Happy Coding!**
