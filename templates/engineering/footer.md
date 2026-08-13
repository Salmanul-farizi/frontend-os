# Template: Footer

## Purpose
The footer serves as the secondary navigation, legal requirement container, and brand reinforcement at the bottom of every page. It must clearly organize a large number of links without overwhelming the user.

## HTML Structure

```html
<footer class="footer" role="contentinfo">
  <div class="padding-global">
    <div class="container-large">
      
      <div class="footer_top-layout">
        
        <!-- Brand Column -->
        <div class="footer_brand-wrapper">
          <a href="/" class="footer_logo-link" aria-label="Home">
            <img src="/assets/logo.svg" alt="Company Name" width="140" height="40">
          </a>
          <p class="footer_description">
            Building the future of frontend engineering.
          </p>
        </div>
        
        <!-- Links Grid -->
        <div class="footer_links-grid">
          
          <!-- Column 1 -->
          <div class="footer_links-column">
            <h2 class="footer_heading">Product</h2>
            <ul class="footer_list" role="list">
              <li><a href="/features" class="footer_link">Features</a></li>
              <li><a href="/pricing" class="footer_link">Pricing</a></li>
              <li><a href="/changelog" class="footer_link">Changelog</a></li>
            </ul>
          </div>
          
          <!-- Column 2 -->
          <div class="footer_links-column">
            <h2 class="footer_heading">Company</h2>
            <ul class="footer_list" role="list">
              <li><a href="/about" class="footer_link">About</a></li>
              <li><a href="/careers" class="footer_link">Careers</a></li>
              <li><a href="/contact" class="footer_link">Contact</a></li>
            </ul>
          </div>
          
        </div>
      </div>
      
      <!-- Footer Bottom (Legal) -->
      <div class="footer_bottom">
        <div class="footer_copyright">
          &copy; 2026 Frontend OS. All rights reserved.
        </div>
        <ul class="footer_legal-links" role="list">
          <li><a href="/privacy" class="footer_link-small">Privacy Policy</a></li>
          <li><a href="/terms" class="footer_link-small">Terms of Service</a></li>
        </ul>
      </div>
      
    </div>
  </div>
</footer>
```

## CSS Token Architecture

### Layout
- `padding-block`: Use `var(--section-padding-lg)` for the top padding, but a smaller token for the bottom padding below the copyright line.
- `gap`: Use `var(--space-2xl)` between the brand wrapper and the links grid.

### Typography
- The `.footer_heading` elements must use a small, bold typography token (e.g., `var(--font-size-sm)`) and often feature `text-transform: uppercase` with increased `letter-spacing`.
- The `.footer_copyright` and legal links should use `var(--font-size-xs)` and a subdued color `var(--color-text-secondary)`.

## Engineering Rules

1. **Accessibility**:
   - The footer wrapper must use `<footer role="contentinfo">`.
   - The list of links must use `<ul>` with `role="list"` to strip default Safari list behavior while preserving semantics.
   - Headings for link columns must be `<h2>` or `<h3>` (depending on the page's prior hierarchy) to allow screen readers to jump between columns.
   
2. **Responsive Grid**:
   - `.footer_top-layout`: On desktop, this is usually a flex container or a 2-column grid (`1fr 2fr`). On mobile, it stacks vertically.
   - `.footer_links-grid`: On desktop, an `auto-fit` grid or flex-box. On mobile, it typically breaks into a 2-column grid (`1fr 1fr`) so links aren't a single massive vertical list.

3. **Hover States**:
   - `.footer_link` should have a subtle hover state, typically `text-decoration: underline` or a color shift, using a fast transition token.
