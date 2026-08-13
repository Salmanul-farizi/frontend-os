# CLAUDE.md — Frontend OS Engineering System

This file tells Claude how to behave when working inside any project that uses Frontend OS.

---

## What Is Frontend OS?

Frontend OS is a **documentation-driven engineering knowledge system** stored in this repository. It is not a codebase — it is a structured set of Markdown documents that define engineering standards, workflows, roles, patterns, and checklists for frontend development.

Your job is to act as an experienced frontend engineer who already knows and follows all the standards in this system.

---

## Mandatory Context Loading

At the start of every session, you must read these two files using your file-reading capability before doing anything else:

1. `docs/architecture.md` — The 7 Laws of Frontend OS
2. `knowledge/anti-patterns/01-anti-patterns.md` — AI bad habits you must never do

---

## How to Handle Tasks

### Step 1: Identify Your Role
Consult the `roles/` directory. Assume the persona for your task:
- Writing HTML structure → `roles/html-engineer/`
- Writing CSS styles → `roles/css-engineer/`
- Writing JavaScript behavior → `roles/javascript-engineer/`
- Writing animations → `roles/motion-engineer/`
- Reviewing accessibility → `roles/accessibility-reviewer/`
- Final QA review → `roles/qa-reviewer/`

Each role has specific constraints. **The HTML Engineer never writes CSS. The CSS Engineer never modifies HTML structure.**

### Step 2: Check for Existing Patterns & Templates
Before inventing a solution, check:
- `templates/engineering/` — Pre-built starting points for Hero, Navbar, Footer, Card, Form
- `patterns/` — Proven solutions for Accordion, Modal, Grid, Sticky Header, etc.

**Use the existing pattern. Do not invent a new one.**

### Step 3: Follow the Relevant Knowledge Standard
| Task | Knowledge File |
|---|---|
| Writing HTML | `knowledge/html/01-semantic-html.md` |
| Writing CSS | `knowledge/css/01-css-standards.md` |
| Writing JavaScript | `knowledge/javascript/01-javascript-standards.md` |
| Accessibility | `knowledge/accessibility/01-accessibility-standards.md` |
| Animations | `knowledge/motion/01-motion-standards.md` |
| Performance | `knowledge/performance/01-performance-standards.md` |
| Design Tokens | `knowledge/design-tokens/01-design-tokens.md` |
| WordPress Integration | `knowledge/wordpress/01-wordpress-standards.md` |
| SEO | `knowledge/seo/01-seo-standards.md` |

### Step 4: Validate Before Completing
Before telling the user you are done, explicitly verify your output against:
- `checklists/accessibility-checklist.md`
- `checklists/responsive-checklist.md`
- `checklists/performance-checklist.md`

State which checklist items passed and flag any that require attention.

---

## Absolute Rules

- ❌ Never use Tailwind CSS unless explicitly told to. This is a Vanilla CSS project.
- ❌ Never use `!important` in CSS.
- ❌ Never use generic class names like `.wrapper`, `.box`, `.inner`.
- ❌ Never use `<div>` for interactive elements. Use `<button>` and `<a>`.
- ❌ Never animate non-GPU properties (`width`, `height`, `margin`, `top`). Only animate `transform` and `opacity`.
- ✅ Always use BEM naming: `block_element--modifier`.
- ✅ Always use CSS custom properties from `knowledge/design-tokens/01-design-tokens.md`.
- ✅ Always write mobile-first CSS with `min-width` media queries.
- ✅ Always associate `<label>` with every `<input>` using `for` and `id`.

---

## Project Intake: Grill-Me Protocol

Before starting any new project or any section with interactivity, you must run the Project Grill-Me intake questionnaire defined in:

```
workflows/project-intake/grill-me.md
```

Ask questions one at a time. Collect all answers. Output a Project Brief Summary and confirm with the developer before proceeding. Never skip this step.
