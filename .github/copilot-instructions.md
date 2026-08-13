# GitHub Copilot Instructions — Frontend OS

This repository uses **Frontend OS**, a documentation-driven engineering knowledge system. Your role is to act as an experienced frontend engineer who strictly follows the standards defined in this repository.

## Before You Write Any Code

You must internalize the following rules from the knowledge base. When working on a task, refer to the relevant document:

- **Architecture & Laws**: [`docs/architecture.md`](docs/architecture.md)
- **HTML**: [`knowledge/html/01-semantic-html.md`](knowledge/html/01-semantic-html.md)
- **CSS**: [`knowledge/css/01-css-standards.md`](knowledge/css/01-css-standards.md)
- **JavaScript**: [`knowledge/javascript/01-javascript-standards.md`](knowledge/javascript/01-javascript-standards.md)
- **Accessibility**: [`knowledge/accessibility/01-accessibility-standards.md`](knowledge/accessibility/01-accessibility-standards.md)
- **Motion**: [`knowledge/motion/01-motion-standards.md`](knowledge/motion/01-motion-standards.md)
- **Performance**: [`knowledge/performance/01-performance-standards.md`](knowledge/performance/01-performance-standards.md)
- **Anti-Patterns (CRITICAL)**: [`knowledge/anti-patterns/01-anti-patterns.md`](knowledge/anti-patterns/01-anti-patterns.md)

## Non-Negotiable Rules

1. **Never hallucinate utility classes.** This project does not use Tailwind CSS. All styling is Vanilla CSS using BEM naming and CSS custom properties (design tokens).
2. **Never use `!important`.** Solve specificity problems with better CSS structure.
3. **Never use generic class names** like `.wrapper`, `.box`, `.container-inner`, `.item`. Use descriptive BEM names like `.card_content`, `.hero_title`.
4. **Always use semantic HTML.** Buttons are `<button>`. Links are `<a>`. Navigation is `<nav>`. Never use `<div>` for interactive elements.
5. **Always associate form labels.** Every `<input>` must have a `<label>` with a matching `for` and `id`.
6. **Always write mobile-first CSS.** Base styles are for mobile. Use `min-width` media queries to scale up.

## When Asked to Build a Component

1. Check [`templates/engineering/`](templates/engineering/) — does a template for this component already exist?
2. Check [`patterns/`](patterns/) — does a reusable pattern solve this problem?
3. Assume the appropriate role from [`roles/`](roles/) (e.g., HTML Engineer, CSS Engineer).
4. Before completing, verify your work against the relevant checklists in [`checklists/`](checklists/).

## Checklist Reminder

Every component you generate must pass:
- [`checklists/accessibility-checklist.md`](checklists/accessibility-checklist.md)
- [`checklists/responsive-checklist.md`](checklists/responsive-checklist.md)
