# Experience Analysis README
## Purpose
This document standardizes the experience analysis workflow. It ensures that animations, interactions, transitions, and user flow are thoroughly planned and documented before development begins.

## Principles
- **User-Centric Focus**: Prioritize the end-user experience above all.
- **Performance First**: Ensure proposed interactions do not degrade performance.
- **Predictable Behavior**: Standardize interactive states across the application.

## Engineering Rules
- **Rule 1**: Document all page transitions and loading states.
- **Rule 2**: Analyze and define behavior for empty states, error states, and success states.
- **Rule 3**: Identify all complex animations and assess required libraries (e.g., GSAP, Framer Motion).
- **Rule 4**: Define focus management and keyboard navigation for accessibility.
- **Rule 5**: Document scroll behaviors, sticky elements, and intersection observers.
- **Rule 6**: Specify behavior for responsive interactions (e.g., mobile menus, swipe gestures).

## Best Practices
- Prototype complex animations early to validate performance.
- Ensure all interactive elements have a clear visual response (e.g., hover/focus).
- Define fallback behaviors for devices with reduced motion preferences.
- Coordinate with design on micro-interactions.

## Common Mistakes
- ❌ Forgetting to define loading or error states.
- ❌ Overusing heavy animation libraries for simple CSS transitions.
- ❌ Ignoring keyboard focus states on interactive elements.
- ❌ Not respecting `prefers-reduced-motion` settings.

## Related Knowledge
- [Design Analysis](../design-analysis/README.md)
- [Engineering Planning](../engineering-planning/README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
