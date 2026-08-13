# Review Report Template
## Purpose
This document provides the standard structure for summarizing review feedback. It helps organize comments clearly so the author can address them systematically.

## Principles
- **Clarity**: Feedback must be easy to read and act upon.
- **Categorization**: Distinguish between blockers and nitpicks.
- **Actionability**: State exactly what needs to be fixed.

## Engineering Rules
- **Rule 1**: The review summary must state the overall status (Approved, Needs Work).
- **Rule 2**: Blockers (issues preventing merge) must be listed first and clearly marked.
- **Rule 3**: Non-blocking suggestions or nitpicks must be explicitly labeled as optional.
- **Rule 4**: Architectural or security concerns must be escalated and highlighted.
- **Rule 5**: The reviewer must note which environments or devices were used for testing.
- **Rule 6**: If referring to external documentation (e.g., design system), links must be provided.

## Best Practices
- Use standard prefixes for comments (e.g., `[BLOCKER]`, `[NITPICK]`, `[QUESTION]`).
- Include screenshots in the review to point out visual discrepancies.
- Be encouraging in the summary, acknowledging the effort put into the PR.

## Common Mistakes
- ❌ Mixing blocking issues with optional nitpicks, confusing the author.
- ❌ Failing to specify what environment the reviewer used when a bug was found.
- ❌ Writing vague summaries like "looks mostly good but fix some things."
- ❌ Leaving comments on the code without summarizing the required actions.

## Related Knowledge
- [Review Outputs](./outputs.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
