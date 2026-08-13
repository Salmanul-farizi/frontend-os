# Template: Card

## Purpose
Cards are the most common repeating UI element. They group related information in a flexible container. This template ensures cards are clickable in an accessible way without wrapping block elements inside `<a>` tags (which can cause screen reader issues or invalid HTML depending on content).

## HTML Structure

```html
<article class="card">
  
  <!-- Image Header (Optional) -->
  <div class="card_image-wrapper">
    <img 
      src="/assets/blog-thumb.jpg" 
      alt="Description of the image" 
      class="card_image"
      loading="lazy"
    >
  </div>
  
  <!-- Card Content -->
  <div class="card_content">
    
    <!-- Meta Data -->
    <div class="card_meta">
      <span class="badge">Engineering</span>
      <time datetime="2026-08-13" class="text-size-small">August 13, 2026</time>
    </div>
    
    <!-- Title with Block Link -->
    <h3 class="card_title">
      <a href="/article-link" class="card_link">
        How to Build AI-Ready Component Architectures
      </a>
    </h3>
    
    <!-- Description -->
    <p class="card_description">
      Learn how to structure your frontend so that any AI assistant can immediately understand and replicate your design system.
    </p>
    
  </div>
</article>
```

## CSS Token Architecture

### Block Link Pattern (Critical)
To make the entire card clickable without wrapping the whole `<article>` in an `<a>` tag:
```css
.card {
  position: relative; /* Required for the pseudo-element link */
  display: flex;
  flex-direction: column;
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

/* The magic link overlay */
.card_link::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
}

/* Hover state on the card driven by the link hover or card hover */
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

/* Focus state */
.card:has(.card_link:focus-visible) {
  outline: 3px solid var(--focus-ring-color);
  outline-offset: 2px;
}
```

## Engineering Rules

1. **Accessibility (Block Link Pattern)**:
   - Wrapping complex content (like multiple headings, buttons, and text) in a single `<a>` tag is bad practice for screen readers. It reads everything as one massive link text.
   - Instead, place the `<a>` tag inside the `<h3>` title.
   - Use CSS `::after` with `position: absolute; inset: 0;` on the link to stretch the click target over the entire relative parent card.
   - If the card has secondary links (e.g., tags, author names), give them `position: relative; z-index: 2;` so they sit above the stretched main link overlay.

2. **Image Handling**:
   - Use `loading="lazy"` on card images unless they are above the fold.
   - The `.card_image-wrapper` should typically define an `aspect-ratio` (e.g., `16 / 9`) to prevent layout shifts before the image loads.
   - The `.card_image` must have `object-fit: cover` and `width: 100%; height: 100%;`.

3. **Flex Layout**:
   - The `.card` itself should be `display: flex; flex-direction: column`.
   - If cards are in a grid and you want the footers (if present) to align at the bottom, give `.card_content` `display: flex; flex-direction: column; flex-grow: 1` and push the footer down with `margin-top: auto`.
