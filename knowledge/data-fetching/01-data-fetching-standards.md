# Data Fetching Standards

## Purpose
This document standardizes how we fetch, manage, and cache data from external APIs. The goal is to ensure robust, performant data integration with excellent user experience, handling loading states and errors gracefully.

## Principles
- **Resilience**: Applications must handle network failures, slow connections, and API errors gracefully without crashing.
- **Efficiency**: Fetch data only when necessary. Utilize caching, deduplication, and stale-while-revalidate patterns.
- **User Feedback**: The user must always know the state of their request (loading, success, error).
- **Security**: Never expose sensitive API keys or credentials in client-side code.

## Engineering Rules
- **Rule: API Integration**
  - Use a dedicated library for data fetching and caching (e.g., TanStack Query, SWR, or Apollo Client) rather than raw `fetch` and `useEffect`.
  - Always define strict types for API responses (e.g., using TypeScript interfaces or Zod schemas).
  - Abstract API calls into separate service functions or custom hooks; do not write `fetch` logic directly inside UI components.
- **Rule: Loading States**
  - Always display a skeleton loader or a loading spinner while data is being fetched.
  - Avoid layout shifts when transitioning from loading state to populated data. Reserve space for the incoming content.
  - Implement optimistic updates for mutations to make the UI feel instantaneous.
- **Rule: Error Handling and Boundaries**
  - Wrap data-fetching components in Error Boundaries to prevent the entire application from crashing on failure.
  - Display user-friendly error messages, not raw API error codes. Offer a "Retry" button when appropriate.
  - Log errors to a centralized monitoring service (e.g., Sentry) with appropriate context.
- **Rule: Caching and Invalidation**
  - Configure appropriate cache expiration times based on how frequently the data changes.
  - Invalidate specific cache queries immediately after a mutation (e.g., after creating a new item, invalidate the list query).
- **Rule: Authentication and Authorization**
  - Include necessary authentication tokens in headers via centralized interceptors (e.g., using Axios interceptors or custom fetch wrappers).
  - Handle 401 Unauthorized responses globally by redirecting the user to the login screen.

## Best Practices
- Debounce or throttle API requests triggered by user input (like search bars).
- Support pagination or infinite scrolling for large datasets.
- Prefetch data for likely next actions (e.g., hovering over a link) to improve perceived performance.

## Common Mistakes
- ❌ Using `useEffect` without a cleanup function, leading to race conditions and memory leaks.
- ❌ Showing a blank screen while data is loading.
- ❌ Exposing private API keys in the client bundle.
- ❌ Failing to handle network disconnects or timeouts.

## Related Knowledge
- [JavaScript Standards](../javascript/README.md)
- [Performance Standards](../performance/README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
