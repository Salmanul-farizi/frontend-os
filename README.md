# Frontend OS

Frontend OS is an AI-powered engineering knowledge system that helps frontend developers consistently convert designs into production-ready frontend implementations. 

It is not an AI model, a prompt collection, or a codebase. It is a **portable engineering system** that provides context, standards, workflows, reusable knowledge, and proven patterns to any coding AI.

Its goal is to make every AI behave like an experienced frontend engineer.

## Master System Map

When an AI assistant or human engineer is dropped into this repository, they should navigate the system using this map.

### 1. 🧠 Core Knowledge (Engineering Standards)
Read these before writing any code. They define how we build.
*   [HTML Standards](knowledge/html/01-semantic-html.md) - Semantic structure, accessibility foundation.
*   [CSS Standards](knowledge/css/01-css-standards.md) - BEM, flexbox/grid, layout rules.
*   [JavaScript Standards](knowledge/javascript/01-javascript-standards.md) - ES modules, event delegation, logic separation.
*   [Accessibility Standards](knowledge/accessibility/01-accessibility-standards.md) - WCAG 2.1 AA requirements.
*   [Responsive Standards](knowledge/responsive/01-responsive-standards.md) - Fluid layouts, breakpoints.
*   [Webflow Standards](knowledge/webflow/01-webflow-standards.md) - Client-First structure.
*   [Motion Standards](knowledge/motion/01-motion-standards.md) - GSAP, smooth scroll, performance.
*   [Performance Standards](knowledge/performance/01-performance-standards.md) - Core Web Vitals, asset optimization.
*   [Design Tokens](knowledge/design-tokens/01-design-tokens.md) - System variables.
*   [SEO Standards](knowledge/seo/01-seo-standards.md) - On-page SEO rules.
*   [Anti-Patterns](knowledge/anti-patterns/01-anti-patterns.md) - **CRITICAL**: The AI bad habits we explicitly forbid.

### 2. 👥 Roles
Assume one of these personas when performing a task.
*   [Design Analyst](roles/design-analyst/README.md) - Analyzes Figma.
*   [Principal Architect](roles/principal-frontend-architect/README.md) - Plans the build.
*   [HTML Engineer](roles/html-engineer/README.md) - Writes semantics.
*   [CSS Engineer](roles/css-engineer/README.md) - Styles components.
*   [JavaScript Engineer](roles/javascript-engineer/README.md) - Adds behavior.
*   [Accessibility Reviewer](roles/accessibility-reviewer/README.md) - Audits WCAG.
*   [QA Reviewer](roles/qa-reviewer/README.md) - Audits visuals and functionality.

### 3. 🔄 Workflows
Follow these step-by-step processes.
*   [Design Analysis Workflow](workflows/design-analysis/README.md)
*   [Experience Analysis Workflow](workflows/experience-analysis/README.md)
*   [Engineering Planning Workflow](workflows/engineering-planning/README.md)
*   [Implementation Workflow](workflows/implementation/README.md)
*   [Review Pipeline Workflow](workflows/review/README.md)

### 4. 🧩 Patterns & Templates
Use these proven solutions instead of inventing new ones.
*   **[Pattern Library](patterns/README.md)** - Reusable solutions (Accordion, Modal, Grid, etc.)
*   **[Component Templates](templates/engineering/)** - Starting boilerplate (Hero, Navbar, Card, etc.)

### 5. ✅ Checklists
Nothing ships until these pass.
*   **[Checklists Directory](checklists/README.md)** - Accessibility, Responsive, Performance, SEO, QA.

### 6. 🤖 AI Setup
Configuration files for different AI tools to auto-load this OS.
*   **[AI Setup Directory](ai-setup/)** - Cursor rules, Antigravity prompts.

---

## The Philosophy

Frontend OS does not replace the developer. It augments the developer. 
The developer remains responsible for engineering decisions. Frontend OS provides context, standards, workflows, reusable knowledge, and quality control.

The AI becomes a teammate rather than a code generator.
