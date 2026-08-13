# Figma Knowledge Domain

This domain standardizes how AI assistants read, interpret, and extract values from Figma design files before any implementation begins.

## What This Domain Covers

- **Token extraction protocol** — the exact order and format for extracting colors, typography, spacing, and motion values from Figma into a `variables.css` file
- **Layer reading protocol** — how to systematically scan a Figma page: section by section, component by component
- **Asset naming** — how to rename Figma exports to kebab-case, SEO-friendly, WebP-formatted files
- **Gap detection** — how to identify and report missing states, missing breakpoints, and ambiguous designs before implementation starts
- **variables.css output format** — the exact file structure and token naming conventions the AI must produce

## Related Law

This domain enforces **Architecture Law #3**: No implementation begins until a `variables.css` file exists for the project.

## Files

| File | Purpose |
|---|---|
| `01-figma-standards.md` | The complete Figma reading and extraction standard |
