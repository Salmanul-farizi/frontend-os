# Template: Hero Section

## Purpose
The hero section is the first visual element users see. It must be accessible, responsive, load extremely fast (LCP optimization), and establish the page's structural outline with the single `<h1>`.

## HTML Structure

```html
<section class="section_hero">
  <div class="padding-global">
    <div class="container-large">
      <div class="hero_layout">
        
        <!-- Content Column -->
        <div class="hero_content">
          <h1 class="heading-style-h1">Building the Future of Frontend</h1>
          <p class="text-size-large">
            An AI-powered engineering knowledge system that helps developers consistently convert designs into production-ready frontend implementations.
          </p>
          <div class="button-group">
            <a href="/get-started" class="button_primary">Get Started</a>
            <a href="/documentation" class="button_secondary">Read the Docs</a>
          </div>
        </div>
        
        <!-- Media Column -->
        <div class="hero_media">
          <picture>
            <source srcset="/assets/hero-image.avif" type="image/avif">
            <source srcset="/assets/hero-image.webp" type="image/webp">
            <img 
              src="/assets/hero-image.jpg" 
              alt="Dashboard interface showing the Frontend OS system in action" 
              width="600" 
              height="400"
              fetchpriority="high"
              decoding="sync"
            >
          </picture>
        </div>

      </div>
    </div>
  </div>
</section>
```

## CSS Token Architecture

When building this template, apply the following design tokens:

### Layout
- `padding-block`: Use `var(--section-padding-lg)` to ensure massive breathing room at the top of the page.
- `gap`: Use `var(--space-xl)` between the content and media columns in the grid.

### Typography
- The `<h1>` must use `var(--font-size-h1)` which should be fluid (using `clamp()`).
- The sub-heading paragraph must use `var(--font-size-lg)` for readability.

## Engineering Rules

1. **LCP Optimization (CRITICAL)**: 
   - The hero image is almost always the Largest Contentful Paint (LCP) element. 
   - It **must** have `fetchpriority="high"`.
   - It **must not** have `loading="lazy"`.
   - It **must** use modern formats (`<picture>` with AVIF/WebP).

2. **Semantic Hierarchy**:
   - The hero section **must** contain exactly one `<h1>`.
   - The `<h1>` text must be the primary keyword focus of the page.

3. **Responsive Behavior**:
   - Desktop (`> 992px`): Usually a 2-column grid (`1fr 1fr`).
   - Tablet/Mobile (`< 991px`): Stack vertically (`1fr`), content on top, media below.
   - Text alignment: Often centered on mobile, left-aligned on desktop.

4. **Accessibility**:
   - Ensure the contrast ratio between the text and background is at least 4.5:1.
   - If the hero has a background image with text overlaid, a darkened overlay or text-shadow must be used to preserve contrast.
   - The CTA buttons must be reachable via `Tab` immediately after page load.

## Variations
- **Centered Hero**: Remove the media column, restrict the content `max-width: 800px`, and center text.
- **Background Image Hero**: Move the `<picture>` tag behind the content using CSS Grid or absolute positioning, and add a gradient overlay for text legibility.
