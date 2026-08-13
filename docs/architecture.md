# Frontend OS

Project Intake
        │
        ▼
Design Analysis → Figma Token Extraction
        │
        ▼
Experience Analysis
        │
        ▼
Engineering Specification
        │
        ▼
Engineering Plan
        │
        ▼
Implementation Plan
        │
        ▼
HTML Engineer
CSS Engineer
JavaScript Engineer
Motion Engineer
        │
        ▼
Integration
        │
        ▼
QA Review
        │
        ▼
Production (WordPress Handoff / Webflow / Other)

Every project follows this lifecycle.

No implementation begins before Design Analysis and Interaction Analysis are completed.

Every stage produces a document consumed by the next stage.

Frontend OS is documentation-driven rather than prompt-driven.

## Law #1

No implementation begins until a Design Analysis Report exists.

## Law #2

No interaction is implemented until an Interaction Specification exists.

## Law #3

No implementation begins until a `variables.css` file exists for the project. This file must define all design tokens (colors, spacing, typography, radius, z-index, motion) extracted directly from the Figma design. The AI must never hardcode a color, spacing value, or font size. Every value must reference a CSS custom property via `var(--token-name)`.

## Law #4

No implementation role may begin until an Engineering Plan has been approved.

## Law #5

No implementation role may begin until an approved Implementation Plan exists.

## Law #6

Every implementation task must produce a complete production-ready component. Partial implementations are not accepted.

## Law #7

No Production Component may be merged until it has passed the Review Pipeline.

## Law #8

All image and media assets must follow the naming standard before implementation begins.
- The AI must use the Figma MCP server to automatically extract, download, and save assets directly to the project's local `/assets/` directory.
- Format: `kebab-case-descriptive-name.webp` (e.g., `stemage-hero-banner.webp`, `feature-icon-analytics.svg`).
- Never use generic names: `image1.png`, `Group-482.png`, `photo.jpg`.
- The AI must configure the export format to WebP or AVIF (or SVG for icons) via the MCP.
- The manual burden of exporting and renaming images must not fall on the human developer.

## Law #9

Every component delivered for WordPress handoff must be self-contained.
- One HTML file per component
- One CSS file per component (no cross-component CSS dependencies)
- One JS file per component (if required)
- Zero framework dependencies — plain HTML, CSS, JavaScript only
- All class names must use BEM with underscore notation: `block_element--modifier`
- The WordPress integration team must be able to drop the component into a theme without modifying the component's own code
