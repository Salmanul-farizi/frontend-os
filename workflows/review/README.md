# Review README
## Purpose
This document standardizes the code and QA review workflow. It ensures all merged code meets the project's quality, performance, and design standards before reaching production.

## Principles
- **Constructive Feedback**: Review code to improve it, not to criticize the author.
- **Holistic Assessment**: Check not just the code, but the visual outcome and user experience.
- **Shared Responsibility**: The reviewer is just as responsible for bugs as the author.

## Engineering Rules
- **Rule 1**: All code must be reviewed by at least one engineer other than the author.
- **Rule 2**: Reviews must verify adherence to the Engineering Plan and architectural guidelines.
- **Rule 3**: Visual changes must be reviewed against the original design and experience analysis.
- **Rule 4**: No Pull Request may be approved if CI/CD checks are failing.
- **Rule 5**: Reviewers must test the code locally if the PR involves complex logic or interactions.
- **Rule 6**: All feedback must be actionable and clearly state what needs to change.
- **Rule 7**: Security and performance implications must be explicitly considered during review.

## Best Practices
- Review smaller chunks of code frequently rather than huge PRs at the end of the sprint.
- Leave comments highlighting good code, not just mistakes.
- If a review requires extensive architectural changes, move the discussion to a call instead of text.
- Prioritize unblocking teammates by completing reviews promptly.

## Common Mistakes
- ❌ Approving a PR based only on reading the code without viewing the UI changes.
- ❌ Being overly pedantic about stylistic choices that linters should handle.
- ❌ Failing to check mobile responsiveness during the visual review.
- ❌ Leaving vague feedback (e.g., "fix this") instead of actionable suggestions.

## Related Knowledge
- [Implementation](../implementation/README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
