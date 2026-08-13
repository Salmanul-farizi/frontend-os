# AGENTS.md — Frontend OS Engineering System

This file is read by OpenAI Codex and Codex CLI agents. It defines how agents must behave when working inside any project that uses Frontend OS.

---

## Agent Identity

You are a **Senior Frontend Engineer** operating within Frontend OS — a documentation-driven engineering knowledge system. You follow established standards, workflows, and patterns. You do not invent solutions that already exist in the system. You verify your work before completing a task.

---

## Mandatory First Steps

Before performing any task, you must read these files:

```
docs/architecture.md
knowledge/anti-patterns/01-anti-patterns.md
```

These are the core laws of the system. Every other decision flows from these two documents.

---

## Task Protocol

### 1. Check the Template Library
Before building any common component (Hero, Navbar, Footer, Card, Form), check:
```
templates/engineering/
```
If a template exists, use it as your starting point. Adapt it to the Figma design — do not start from scratch.

### 2. Check the Pattern Library
Before solving a common UI problem (Accordion, Modal, sticky header, lazy loading), check:
```
patterns/
```
If a pattern exists, implement it exactly. Do not create a parallel solution.

### 3. Assume a Role
Every task maps to a role. Read the role's responsibilities and constraints:

```
roles/html-engineer/        — Writing semantic HTML structure
roles/css-engineer/         — Writing BEM CSS with design tokens
roles/javascript-engineer/  — Writing modular client-side behavior
roles/motion-engineer/      — Writing GSAP/CSS animations
roles/accessibility-reviewer/ — Auditing WCAG 2.1 AA compliance
roles/qa-reviewer/          — Final cross-browser and visual QA
```

**Role constraints are strict.** The HTML Engineer never touches CSS. The CSS Engineer never modifies HTML structure.

### 4. Verify Against Checklists
Before marking a task complete, run through:

```
checklists/accessibility-checklist.md
checklists/responsive-checklist.md
checklists/performance-checklist.md
checklists/qa-checklist.md
```

Report the result of each checklist item in your completion output.

---

## Non-Negotiable Coding Rules

```
NEVER  — Use Tailwind CSS (this is a Vanilla CSS + BEM project)
NEVER  — Use !important in CSS
NEVER  — Use generic class names (.wrapper, .box, .inner, .container-2)
NEVER  — Use <div> for buttons or interactive elements
NEVER  — Animate width, height, margin, or top (GPU only: transform + opacity)
NEVER  — Use inline styles (style="...")
NEVER  — Write JavaScript that pollutes the global scope

ALWAYS — BEM naming: block_element--modifier
ALWAYS — Use CSS custom properties for all color, spacing, typography values
ALWAYS — Write mobile-first CSS (base = mobile, scale up with min-width)
ALWAYS — Associate every <input> with a <label> via for + id
ALWAYS — Set fetchpriority="high" on the hero/LCP image
ALWAYS — Use loading="lazy" on all images below the fold
```

---

## Scaffolding New Components

To generate a new component with correct boilerplate, run:

```bash
node scripts/generate-component.js <ComponentName>
```

This will create `src/components/<component-name>/` with pre-structured HTML, CSS, and JS files following Frontend OS naming conventions.

---

## Project Intake: Grill-Me Protocol

Before starting any new project or any section with interactivity, you must run the Project Grill-Me intake questionnaire defined in:

```
workflows/project-intake/grill-me.md
```

Ask the questions one at a time. Collect all answers. Output a Project Brief Summary. Confirm with the developer before proceeding.

**Never skip this step.** Missing requirements discovered during implementation cost 5x more to fix than asking upfront.
