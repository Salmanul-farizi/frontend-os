# Performance Standards

## Purpose
This document standardizes our approach to web performance. Our goal is to ensure fast load times, smooth interactions, and minimal resource consumption, delivering an optimal experience across all network conditions and device capabilities.

## Principles
- **User-Centric Metrics**: Optimize for Core Web Vitals (LCP, FID/INP, CLS). These metrics accurately reflect real-world user experience.
- **Resource Efficiency**: Only load what is necessary. Defer non-critical assets and lazy-load content below the fold.
- **Measure First**: Never guess performance bottlenecks. Always measure using Lighthouse, WebPageTest, or real user monitoring (RUM) before optimizing.
- **Continuous Optimization**: Performance is a feature, not an afterthought. It must be integrated into the entire development lifecycle.

## Engineering Rules
- **Rule: Optimize images aggressively**
  - Always serve images in modern formats (WebP, AVIF).
  - Use responsive images (`srcset` and `sizes`) to deliver appropriately sized assets.
  - Always include explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).
- **Rule: Implement lazy loading**
  - Lazy-load images, iframes, and non-critical components below the fold using `loading="lazy"` or Intersection Observer.
  - Never lazy-load the Largest Contentful Paint (LCP) element (usually the hero image).
- **Rule: Minimize main thread work**
  - Keep JavaScript bundles small and granular. Use code splitting to load only the JS needed for the current route.
  - Avoid long tasks (tasks taking > 50ms). Break them down using `requestIdleCallback` or Web Workers if necessary.
- **Rule: Optimize font loading**
  - Use `font-display: swap` to ensure text remains visible while custom fonts are loading.
  - Preload critical fonts, but limit preloads to avoid delaying the LCP.
- **Rule: Limit third-party scripts**
  - Audit third-party scripts regularly. Defer or async them (`<script defer>`) whenever possible.
  - Host critical third-party scripts locally if feasible to reduce DNS lookups and connection times.
- **Rule: Utilize caching effectively**
  - Set appropriate Cache-Control headers for static assets (e.g., `Cache-Control: public, max-age=31536000, immutable`).
  - Use Service Workers for offline caching and faster repeat visits.

## Best Practices
- Preconnect to important third-party origins (e.g., CDNs, API endpoints) using `<link rel="preconnect">`.
- Minify and compress all text-based assets (HTML, CSS, JS) using Brotli or Gzip.
- Keep CSS lean. Remove unused styles and avoid overly complex selectors.
- Regularly audit performance using CI/CD pipelines to catch regressions early.

## Common Mistakes
- ❌ Serving massive, unoptimized images directly from a CMS or external source.
- ❌ Lazy-loading images above the fold, which severely hurts LCP.
- ❌ Loading a massive monolithic JavaScript bundle on the initial page load.
- ❌ Using generic loaders for everything instead of skeleton screens or optimistic UI updates.
- ❌ Ignoring layout shifts caused by dynamic content injection without reserved space.

## Related Knowledge
- [CSS Standards](../css/README.md)
- [JavaScript Standards](../javascript/README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
