# Implementation Checklist
## Purpose
This document provides a mandatory checklist for developers to complete before submitting a feature for review. It ensures high code quality and adherence to requirements.

## Principles
- **Self-Accountability**: Developers must verify their own work before requesting review.
- **Strict Adherence**: Code must meet all defined acceptance criteria.
- **Zero Regressions**: New code must not break existing functionality.

## Engineering Rules
- **Rule 1**: Verify the code satisfies all ticket acceptance criteria.
- **Rule 2**: Verify the UI matches the design across all breakpoints.
- **Rule 3**: Verify all interactive states (hover, focus, active, disabled) are implemented.
- **Rule 4**: Verify accessibility requirements (ARIA, keyboard navigation, contrast) are met.
- **Rule 5**: Verify loading, error, and empty states are handled gracefully.
- **Rule 6**: Verify code passes all linters, formatters, and type checkers.
- **Rule 7**: Verify unit or integration tests are written and passing.
- **Rule 8**: Verify console is free of warnings and errors.

## Best Practices
- Run the application locally in production mode to catch build-specific issues.
- Test on actual mobile devices if possible, not just browser simulators.
- Review your own PR diff before adding reviewers.

## Common Mistakes
- ❌ Submitting code without checking mobile layouts.
- ❌ Ignoring console warnings (e.g., missing React keys).
- ❌ Failing to implement the error states defined in the experience analysis.
- ❌ Relying solely on the reviewer to catch basic logical errors.

## Related Knowledge
- [Implementation Process](./process.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
