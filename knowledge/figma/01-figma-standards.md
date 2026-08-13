# Figma Handoff Standards

## Purpose
This document standardizes how AI assistants must read, interpret, and extract values from a Figma design file before implementation begins. It ensures that every token, asset, and specification is correctly mapped to Frontend OS conventions before a single line of code is written.

## Principles

- **Extract before building**: The AI must complete full token extraction before writing any HTML or CSS.
- **Precision over assumption**: If a value is ambiguous in Figma (e.g., a spacing that looks like 24px but could be 20px), the AI must flag it rather than guess.
- **Token-first**: Every value extracted from Figma must be mapped to a CSS custom property. No raw values are ever written directly into component CSS.

## Engineering Rules

### Rule 1: Token Extraction Order
When reading a Figma file, always extract tokens in this order:
1. **Colors** — Map all Figma color styles to token names using the format `--color-[category]-[variant]`
   - e.g., `--color-brand-primary`, `--color-text-secondary`, `--color-surface`, `--color-border`
2. **Typography** — Map all Figma text styles to tokens
   - Font size: `--font-size-[scale]` (e.g., `--font-size-h1`, `--font-size-lg`, `--font-size-sm`)
   - Font weight: `--font-weight-bold`, `--font-weight-regular`
   - Line height: `--line-height-tight`, `--line-height-base`, `--line-height-loose`
   - Letter spacing: `--tracking-tight`, `--tracking-normal`, `--tracking-wide`
3. **Spacing** — Map all spacing values to a scale based on a 4px base unit
   - `--space-xs: 4px`, `--space-sm: 8px`, `--space-md: 16px`, `--space-lg: 24px`, `--space-xl: 32px`, `--space-2xl: 48px`, `--space-3xl: 64px`, `--space-4xl: 96px`
4. **Border Radius** — `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`
5. **Shadows** — `--shadow-sm`, `--shadow-md`, `--shadow-lg`
6. **Z-index** — `--z-index-base: 0`, `--z-index-dropdown: 10`, `--z-index-sticky: 50`, `--z-index-header: 100`, `--z-index-modal: 200`, `--z-index-toast: 300`
7. **Motion** — `--duration-fast: 150ms`, `--duration-base: 300ms`, `--duration-slow: 600ms`, `--easing-standard: cubic-bezier(0.4, 0, 0.2, 1)`

### Rule 2: Figma Layer Reading Protocol
When analyzing a Figma page or section:
1. Read the **page name** — this becomes the HTML `<section>` or `<main>` landmark
2. Identify every **top-level frame** — these are the sections of the page
3. For each frame, identify:
   - Layout type (single column, 2-col grid, 3-col grid, asymmetric split)
   - All text elements and their Figma text style names
   - All images and icons (note their dimensions and intended format)
   - All interactive elements (buttons, links, inputs, toggles)
   - All states (hover, active, disabled, error, empty)
4. Note any **components** in Figma — these map directly to reusable HTML+CSS components

### Rule 3: Asset Identification
For every image or icon in the Figma file:
- Record the intended export format: SVG (icons, logos), WebP (photos, illustrations)
- Assign a kebab-case name following the pattern: `[project]-[section]-[description].[format]`
  - ✅ `stemage-hero-background.webp`
  - ✅ `stemage-feature-icon-analytics.svg`
  - ❌ `Group 482.png`
  - ❌ `image.jpg`
- Log all assets in the Design Analysis Report before requesting exports

### Rule 4: Responsive Reading
Always check the Figma file for:
- Mobile frame (usually 375px or 390px wide)
- Tablet frame (usually 768px or 1024px wide)
- Desktop frame (usually 1440px wide)

If only a desktop frame exists, the AI must flag this and request mobile designs before proceeding. Never invent responsive behavior — derive it from the design.

### Rule 5: Gap Detection
After reading all Figma frames, the AI must identify and report:
- Missing states (e.g., button has no hover state defined)
- Missing breakpoints (e.g., no mobile frame provided)
- Ambiguous spacing (e.g., spacing between elements not aligned to the 4px grid)
- Untitled layers that make asset export difficult
- Missing assets (referenced images not provided)

All gaps must be listed in the Design Analysis Report and resolved before implementation begins.

### Rule 6: variables.css Output
After completing token extraction, the AI must produce a `variables.css` file structured as follows:

```css
/* =====================================================
   PROJECT: [Project Name]
   EXTRACTED FROM: [Figma File Name / Link]
   DATE: [Date]
   ===================================================== */

:root {

  /* ── Colors ────────────────────────────────────── */
  --color-brand-primary: #0A0A0A;
  --color-brand-secondary: #F5F5F5;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #6B7280;
  --color-surface: #FFFFFF;
  --color-border: #E5E7EB;
  --color-error: #DC2626;
  --color-success: #16A34A;

  /* ── Typography ─────────────────────────────────── */
  --font-family-base: 'Inter', sans-serif;
  --font-family-heading: 'Inter', sans-serif;
  --font-size-h1: clamp(2rem, 5vw, 4rem);
  --font-size-h2: clamp(1.5rem, 3.5vw, 2.5rem);
  --font-size-h3: clamp(1.25rem, 2.5vw, 1.75rem);
  --font-size-lg: 1.125rem;
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-xs: 0.75rem;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --line-height-tight: 1.2;
  --line-height-base: 1.6;
  --line-height-loose: 1.8;

  /* ── Spacing (4px base scale) ───────────────────── */
  --space-xs: 0.25rem;   /* 4px  */
  --space-sm: 0.5rem;    /* 8px  */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */
  --space-3xl: 4rem;     /* 64px */
  --space-4xl: 6rem;     /* 96px */
  --section-padding: clamp(3rem, 8vw, 7rem);

  /* ── Border Radius ──────────────────────────────── */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* ── Shadows ────────────────────────────────────── */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.10);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);

  /* ── Z-index ────────────────────────────────────── */
  --z-index-base: 0;
  --z-index-dropdown: 10;
  --z-index-sticky: 50;
  --z-index-header: 100;
  --z-index-modal: 200;
  --z-index-toast: 300;

  /* ── Motion ─────────────────────────────────────── */
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 600ms;
  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-enter: cubic-bezier(0, 0, 0.2, 1);
  --easing-exit: cubic-bezier(0.4, 0, 1, 1);

}
```

## Best Practices

- Always extract tokens from the Figma Styles panel first, not by eyeballing the design
- Use the Figma MCP plugin to get exact px values — do not estimate from screenshots
- When a Figma design uses a 4px grid, map all spacing to the `--space-*` scale above
- If the project has a dark mode variant in Figma, add a `[data-theme="dark"]` block to `variables.css`

## Common Mistakes

- ❌ Hardcoding `color: #0A0A0A` in a component CSS file instead of `color: var(--color-text-primary)`
- ❌ Using `margin-top: 24px` instead of `margin-top: var(--space-lg)`
- ❌ Extracting tokens from one Figma frame but missing tokens defined on other pages
- ❌ Naming tokens after their visual appearance (`--color-dark-blue`) instead of their role (`--color-brand-primary`)
- ❌ Starting component implementation before `variables.css` is complete and reviewed

## Related Knowledge

- [Design Tokens Standard](../design-tokens/01-design-tokens.md)
- [CSS Standards](../css/01-css-standards.md)
- [Asset Naming — Architecture Law #8](../../docs/architecture.md)

## Version History

- v1.0 — Initial Creation — 2026-08-13
