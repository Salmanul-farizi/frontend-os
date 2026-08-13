# Design Analysis README
## Purpose
This document standardizes the design analysis workflow and ensures all design assets are systematically reviewed before planning begins. It matters because catching design inconsistencies early prevents significant engineering rework.

## Principles
- **Comprehensive Review**: Analyze every page and component across all breakpoints.
- **Identify Inconsistencies**: Note any deviations in spacing, typography, or color usage.
- **Determine Technical Feasibility**: Flag any design elements that present significant technical challenges.

## Engineering Rules
- **Rule 1**: Every design file must be checked for completeness (all states, all breakpoints).
  - Check hover, active, and disabled states.
- **Rule 2**: Identify the core grid system and layout structure.
- **Rule 3**: Document all unique fonts and their weights/styles.
- **Rule 4**: Create a preliminary list of reusable components.
- **Rule 5**: Assess asset requirements (SVGs, images, animations).
- **Rule 6**: Flag any custom animations or complex interactions.
- **Rule 7**: Ensure accessibility requirements are met in the design (color contrast).

## Best Practices
- Start with the global styles before moving to component specifics.
- Group similar components to reduce duplicate effort.
- Document assumptions made during analysis.
- Communicate with the designer immediately if critical states are missing.

## Common Mistakes
- ❌ Skipping mobile or tablet breakpoint analysis.
- ❌ Ignoring missing interaction states (e.g., focus styles).
- ❌ Assuming an undocumented font is standard web-safe.
- ❌ Not verifying color contrast ratios.

## Related Knowledge
- [Experience Analysis](../experience-analysis/README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
