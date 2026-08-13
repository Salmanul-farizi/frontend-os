# Implementation README
## Purpose
This document standardizes the implementation workflow. It ensures code is written consistently, following architectural decisions, and prioritizing quality and performance.

## Principles
- **Follow the Plan**: Adhere strictly to the Engineering Plan and architecture.
- **Component-Driven Development**: Build isolated, reusable components first.
- **Continuous Quality**: Write tests and perform self-reviews continuously.

## Engineering Rules
- **Rule 1**: Environment setup and foundational configurations (linting, routing) must be completed first.
- **Rule 2**: Global styles and design tokens must be implemented before building components.
- **Rule 3**: Reusable UI components must be built in isolation (e.g., using Storybook) before integration.
- **Rule 4**: State management and API integration must follow the defined contracts.
- **Rule 5**: Complex pages must be assembled using pre-built, tested components.
- **Rule 6**: Code must adhere strictly to project linting and formatting rules.
- **Rule 7**: Developer must conduct a self-review against acceptance criteria before creating a PR.

## Best Practices
- Commit frequently with clear, descriptive messages.
- Tackle the highest-risk technical challenges early in the implementation phase.
- Use mock data to build UI components while waiting for API readiness.
- Keep components small and focused on a single responsibility.

## Common Mistakes
- ❌ Deviating from the Engineering Plan without discussion.
- ❌ Building complex page layouts before foundational components are ready.
- ❌ Hardcoding values instead of using defined design tokens.
- ❌ Pushing large, monolithic PRs that are difficult to review.

## Related Knowledge
- [Engineering Planning](../engineering-planning/README.md)
- [Review](../review/README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
