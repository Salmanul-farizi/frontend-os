# Design Tokens Standards

## Purpose
This document standardizes the creation, management, and usage of design tokens. Design tokens are the single source of truth to name and store design decisions, ensuring consistency across platforms, themes, and components.

## Principles
- **Single Source of Truth**: All styling values (colors, spacing, typography) must be defined as tokens first.
- **Semantic Naming**: Tokens must describe their intent or purpose, not their absolute value.
- **Platform Agnostic**: Tokens should be defined in a format (like JSON) that can be translated into CSS variables, SASS variables, iOS, or Android formats.
- **Scalable**: The token architecture must support theming (e.g., light/dark mode) and brand variations easily.

## Engineering Rules
- **Rule: Token Tiering Architecture**
  - Must use a multi-tiered architecture:
    - **Global/Core Tokens**: The primitive values (e.g., `color-blue-500: #007bff`).
    - **Semantic/Alias Tokens**: Relate primitives to a specific context (e.g., `color-primary: {color-blue-500}`).
    - **Component Tokens** (Optional): Specific to a component (e.g., `button-bg-color: {color-primary}`).
  - Components must only consume Semantic or Component tokens, never Global primitive tokens directly.
- **Rule: Naming Convention**
  - Follow a strict naming convention: `[category]-[property]-[concept]-[modifier]`.
  - Example: `color-background-primary-hover`.
  - Be consistent with categories (color, spacing, font-size, border-radius).
- **Rule: CSS Variables Implementation**
  - Tokens must be compiled into CSS Custom Properties (variables) for web usage.
  - Prefix CSS variables with a specific namespace to prevent collisions (e.g., `--os-color-primary`).
- **Rule: Responsive and Thematic Tokens**
  - Use media queries or data attributes to redefine semantic tokens for different themes (e.g., `[data-theme="dark"] { --os-color-background: var(--os-color-gray-900); }`).
  - Never duplicate component CSS for themes; only swap token values.
- **Rule: Avoid Hardcoded Values**
  - Hardcoded values (e.g., `padding: 16px`, `color: #333`) are strictly forbidden in component styles. Always use tokens.

## Best Practices
- Use tools like Style Dictionary or Tokens Studio to manage and transform tokens.
- Document all tokens in a central design system or Storybook instance.
- Keep the token taxonomy as flat as possible while maintaining clarity.
- Define a base spacing unit (e.g., 4px or 8px) and derive all spacing tokens from it.

## Common Mistakes
- ❌ Using global primitive tokens directly in components (e.g., `color: var(--blue-500)` instead of `color: var(--text-primary)`).
- ❌ Naming semantic tokens after their values (e.g., `--color-text-red` instead of `--color-text-error`).
- ❌ Creating tokens for every possible permutation, leading to token bloat.
- ❌ Hardcoding fallback values in CSS that differ from the token definitions.

## Related Knowledge
- [CSS Standards](../css/README.md)
- [Component Patterns](../component-patterns/README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
