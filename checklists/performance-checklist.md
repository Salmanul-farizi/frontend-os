# Performance Checklist

Before code is pushed to production, verify the following performance metrics and optimizations.

## 1. Core Web Vitals Optimization
- [ ] **Largest Contentful Paint (LCP)**: 
  - Hero image uses `fetchpriority="high"`.
  - Hero image does NOT have `loading="lazy"`.
  - Critical CSS is loaded early.
- [ ] **Cumulative Layout Shift (CLS)**:
  - All images and videos have explicit `width` and `height` attributes (or CSS `aspect-ratio`) to reserve space.
  - Web fonts use `font-display: swap` to prevent invisible text during load.
  - Dynamically injected content does not shift existing layout downward.

## 2. Asset Optimization
- [ ] **Images**: Delivered in modern formats (WebP, AVIF) using `<picture>` or `srcset`.
- [ ] **Lazy Loading**: All images below the fold have `loading="lazy"` and `decoding="async"`.
- [ ] **SVGs**: Inline SVGs are minimized (removed unnecessary meta tags, comments, and empty `<g>` tags).
- [ ] **Videos**: Auto-playing background videos use `muted playsinline` and are heavily compressed.

## 3. Code Optimization
- [ ] **CSS**: Unused CSS is purged. Specificity is kept low.
- [ ] **JavaScript**: 
  - Scripts not critical for initial render are deferred (`<script defer>`).
  - Third-party scripts (analytics, chat widgets) are loaded asynchronously or delayed until user interaction.
  - Event listeners attached to `scroll` or `resize` are debounced or throttled (e.g., using `requestAnimationFrame`).

## 4. Animation Performance
- [ ] Animations only transition GPU-accelerated properties (`transform` and `opacity`).
- [ ] Layout-triggering properties (`width`, `height`, `margin`, `top`, `left`) are NOT animated.
