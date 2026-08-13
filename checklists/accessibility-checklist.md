# Accessibility Checklist (WCAG 2.1 AA)

Before any component is marked as complete, the following accessibility checks must pass.

## 1. Keyboard Navigation
- [ ] All interactive elements (links, buttons, form fields) are reachable via `Tab` key.
- [ ] Focus order is logical and follows the visual layout.
- [ ] No "keyboard traps" exist (user can `Tab` in and out of all widgets, including modals).
- [ ] Dropdowns, accordions, and modals can be closed with the `Escape` key.

## 2. Focus States
- [ ] Every interactive element has a highly visible focus indicator (e.g., `outline: 3px solid var(--focus-ring-color)`).
- [ ] `outline: none` is NEVER used without a custom `:focus-visible` replacement.

## 3. Screen Reader Semantics
- [ ] Buttons use `<button>`, links use `<a>`. Do not use `<div onclick="...">`.
- [ ] Buttons that toggle state (like accordions or menus) use `aria-expanded="true/false"`.
- [ ] Custom interactive elements (like custom checkboxes) use appropriate `role` attributes and handle keyboard events (`Space`/`Enter`).
- [ ] Hidden content is properly hidden from screen readers using `hidden` or `visibility: hidden` (not just `opacity: 0`).

## 4. Text & Content
- [ ] The page has exactly one `<h1>`.
- [ ] Heading levels (`<h2>`, `<h3>`, etc.) are not skipped.
- [ ] All functional images have descriptive `alt` text.
- [ ] Decorative images have `alt=""` and `aria-hidden="true"`.
- [ ] Form inputs have properly associated `<label>` elements (using `for` matching the input `id`).

## 5. Color & Contrast
- [ ] Normal text has a minimum contrast ratio of 4.5:1 against its background.
- [ ] Large text and UI components (icons, input borders) have a minimum contrast ratio of 3:1.
- [ ] Information is never conveyed by color alone (e.g., an error state must have text or an icon, not just a red border).

## 6. Motion
- [ ] All non-essential animations respect `@media (prefers-reduced-motion: reduce)` by disabling or simplifying the transition.
