# SEO Standards

## Purpose
This document standardizes technical Search Engine Optimization (SEO) practices across all projects. The goal is to ensure content is highly discoverable, crawlable, and indexable by search engines while providing a great user experience.

## Principles
- **Content First**: Search engines prioritize high-quality, relevant content. Technical SEO ensures that content is accessible and understandable.
- **Semantic HTML**: Use native HTML elements correctly to convey the structure and meaning of the content to crawlers.
- **Performance is SEO**: Core Web Vitals directly impact search rankings. Fast sites rank better.
- **Mobile First**: Design and develop for mobile devices first, as search engines predominantly use mobile indexing.

## Engineering Rules
- **Rule: Meta Tags and Titles**
  - Every page must have a unique, descriptive `<title>` tag.
  - Every page must have a unique `<meta name="description">` tag summarizing the content.
  - Set the correct `<meta name="viewport">` for responsive design.
- **Rule: Canonical URLs**
  - Always include a `<link rel="canonical" href="...">` tag to prevent duplicate content issues.
  - Ensure canonical URLs use absolute paths.
- **Rule: Semantic Structure**
  - A page must have exactly one `<h1>` tag containing the primary topic.
  - Use `<h2>` through `<h6>` for hierarchical structure; never skip heading levels.
  - Use semantic landmarks (`<nav>`, `<main>`, `<article>`, `<footer>`).
- **Rule: Open Graph and Structured Data**
  - Implement Open Graph (`og:title`, `og:image`, etc.) and Twitter Card tags for social sharing.
  - Implement JSON-LD structured data (Schema.org) for rich snippets (e.g., Articles, Products, Breadcrumbs).
- **Rule: Link and Image Optimization**
  - All `<a>` tags must have descriptive `href` attributes. Avoid "#" or "javascript:void(0)".
  - External, non-endorsed links should use `rel="nofollow noopener noreferrer"`.
  - All `<img>` tags must have meaningful `alt` attributes. Decorative images should have empty `alt=""`.
- **Rule: Crawlability and Indexability**
  - Ensure an updated `robots.txt` is present and configured correctly.
  - Generate and submit a dynamic `sitemap.xml`.
  - Ensure client-side rendered (CSR) content is either pre-rendered, uses Server-Side Rendering (SSR), or provides a reliable fallback for crawlers.

## Best Practices
- Audit technical SEO using Lighthouse and Google Search Console regularly.
- Keep URL structures clean, descriptive, and localized.
- Use pagination tags (`rel="next"` and `rel="prev"`) for paginated content.
- Pre-render JavaScript-heavy applications to ensure search bots can see the content immediately.

## Common Mistakes
- ❌ Hiding important text inside images or canvas elements.
- ❌ Using client-side routing without updating the document title and meta tags.
- ❌ Blocking crawlers accidentally via robots.txt or `noindex` meta tags in production.
- ❌ Missing `alt` attributes on images, hurting both accessibility and image search SEO.

## Related Knowledge
- [Accessibility Standards](../accessibility/README.md)
- [Performance Standards](../performance/README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
