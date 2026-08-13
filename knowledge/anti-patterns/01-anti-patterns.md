# Anti-Patterns

## Purpose
This document standardizes our approach to avoiding common, detrimental coding practices (anti-patterns). Specifically, it targets bad habits frequently introduced by automated tools, AI assistants, and rushed development, ensuring clean, maintainable, and accessible codebases.

## Principles
- **Readability over Cleverness**: Code must be easy to read and understand. Avoid overly clever one-liners that obscure intent.
- **Maintainability First**: Write code for the developers who will maintain it tomorrow, not just for the feature required today.
- **Accessibility is Non-Negotiable**: Never sacrifice accessibility for visual design or development speed.
- **Semantic correctness**: Use the right tool for the job. Do not misuse frameworks or languages.

## Engineering Rules
- **Rule: Avoid Hallucinating Utility Classes (e.g., Tailwind)**
  - Never invent utility classes that do not exist in the configured design system or Tailwind configuration.
  - Always rely on established design tokens and explicitly defined utility classes. Validate classes before committing.
- **Rule: Prevent Over-Nesting**
  - Limit HTML and CSS nesting to a maximum of 3 levels deep whenever possible.
  - Avoid "div soup" (excessive use of `<div>` tags). Use semantic HTML or CSS Grid/Flexbox to flatten DOM structures.
  - In JavaScript, avoid nested callbacks or deep `if/else` structures. Use early returns and async/await.
- **Rule: Do Not Ignore Accessibility**
  - Never use a `<div>` or `<span>` with an `onClick` handler. Always use a `<button>` for actions and `<a>` for navigation.
  - Never remove focus outlines (`outline: none`) without providing a distinct visual alternative for keyboard users.
  - Never ignore ARIA roles when building custom interactive components.
- **Rule: Avoid Prop Drilling**
  - Do not pass props through multiple layers of components that do not use them.
  - Use Context, state management libraries, or component composition to provide data directly to the components that need it.
- **Rule: Stop Hardcoding Data**
  - Never hardcode configuration values, API URLs, or environment-specific data in the application code. Use environment variables.
  - Never hardcode English strings if the application requires localization; use a translation library.
- **Rule: Do Not Mutate State Directly**
  - In frameworks like React, never mutate state variables directly (e.g., `state.value = 'new'`). Always use the provided setter functions.

## Best Practices
- Run linting and formatting on every commit to catch anti-patterns automatically.
- Review AI-generated code rigorously; treat it as an untrusted junior developer's PR.
- Use early returns to reduce cognitive load in functions.

## Common Mistakes
- ❌ Hallucinating Tailwind classes like `text-brand-color` without defining it in `tailwind.config.js`.
- ❌ Wrapping every single element in an unnecessary `<div>` just to apply flexbox.
- ❌ Adding `tabindex="0"` to non-interactive elements just to make them focusable without adding keyboard event handlers.
- ❌ Creating monolithic files thousands of lines long instead of breaking them into focused modules.

## Related Knowledge
- [Accessibility Standards](../accessibility/README.md)
- [CSS Standards](../css/README.md)
- [JavaScript Standards](../javascript/README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
