# Testing Standards

## Purpose
This document standardizes our approach to testing front-end applications. The goal is to ensure high reliability, catch regressions early, and provide a safety net for refactoring without slowing down the development cycle.

## Principles
- **Test User Behavior**: Write tests that mimic how a user interacts with the application, rather than testing implementation details.
- **Fail Fast, Fix Fast**: Tests must be reliable and run quickly. Flaky tests erode trust and must be fixed or removed immediately.
- **Right Tool for the Job**: Use unit tests for pure logic, component tests for UI components, and End-to-End (E2E) tests for critical user flows.
- **Automation is Key**: All tests must run automatically in CI/CD pipelines before any code is merged.

## Engineering Rules
- **Rule: Component Testing (Jest / Testing Library)**
  - All shared UI components must have unit/component tests.
  - Assert on accessibility roles and accessible names (e.g., `getByRole('button', { name: /submit/i })`) rather than testing CSS classes or DOM hierarchy.
  - Do not test the framework itself (e.g., testing if React state updates). Test the visual outcome.
- **Rule: End-to-End Testing (Playwright / Cypress)**
  - Critical user journeys (e.g., checkout, login, sign-up) must be covered by E2E tests.
  - E2E tests must run against a production-like staging environment.
  - Avoid using arbitrary `sleep()` or `wait(500)` commands. Always wait for specific elements or network responses to appear.
- **Rule: Visual Regression Testing**
  - Core design system components must be covered by visual regression tests (e.g., using Percy, Chromatic, or Playwright visual comparisons).
  - Define acceptable thresholds for pixel diffs to avoid false positives due to minor rendering differences across OS environments.
- **Rule: Mocking and Stubbing**
  - Mock external APIs in component and unit tests using tools like MSW (Mock Service Worker).
  - Avoid mocking internal dependencies unless they cause side effects (like hitting a real database or network).
- **Rule: Test Coverage**
  - Focus on critical paths and edge cases rather than aiming blindly for 100% line coverage.
  - Code changes must not decrease the overall coverage percentage significantly.

## Best Practices
- Keep tests isolated. One test should not depend on the state left by another test.
- Use descriptive test names that explain what is being tested and the expected outcome.
- Clean up the DOM after each test to prevent memory leaks and test interference.
- Use data-test attributes (e.g., `data-testid`) sparingly, preferring semantic queries.

## Common Mistakes
- ❌ Writing tests that assert on internal component state rather than rendered output.
- ❌ Introducing flaky tests that fail randomly due to race conditions.
- ❌ Using CSS selectors (`.btn-primary`) in tests instead of accessible roles.
- ❌ Testing third-party libraries instead of the application's integration with them.

## Related Knowledge
- [JavaScript Standards](../javascript/README.md)
- [Component Patterns](../component-patterns/README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
