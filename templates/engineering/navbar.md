# Template: Navbar

## Purpose
The navigation bar is the primary wayfinding tool for the user. It must be perfectly responsive, fully accessible via keyboard, and clearly indicate the user's current location within the site.

## HTML Structure

```html
<header class="header" role="banner">
  <div class="padding-global">
    <div class="container-large">
      <nav class="nav_component" aria-label="Main">
        
        <!-- Logo -->
        <a href="/" class="nav_logo-link" aria-label="Home">
          <img src="/assets/logo.svg" alt="Company Name" width="140" height="40" class="nav_logo-image">
        </a>
        
        <!-- Desktop Menu -->
        <ul class="nav_menu" role="list">
          <li class="nav_item">
            <a href="/products" class="nav_link" aria-current="page">Products</a>
          </li>
          <li class="nav_item">
            <a href="/solutions" class="nav_link">Solutions</a>
          </li>
          <li class="nav_item">
            <a href="/pricing" class="nav_link">Pricing</a>
          </li>
        </ul>
        
        <!-- CTA Group -->
        <div class="nav_actions">
          <a href="/login" class="button_tertiary">Log in</a>
          <a href="/signup" class="button_primary">Sign up</a>
        </div>
        
        <!-- Mobile Toggle (Hidden on Desktop) -->
        <button 
          type="button" 
          class="nav_toggle" 
          aria-expanded="false" 
          aria-controls="nav_menu-mobile"
          aria-label="Open menu"
        >
          <span class="nav_toggle-icon" aria-hidden="true"></span>
        </button>

      </nav>
    </div>
  </div>
</header>
```

## CSS Token Architecture

### Layout
- `z-index`: Use `var(--z-index-header)` (e.g., `100`) to ensure it sits above all page content.
- `height`: Consider defining a `--nav-height` token if the header is `position: fixed` or `sticky`, so the `main` content can offset it via `padding-top: var(--nav-height)`.

### Interactions
- `transition`: Use `var(--transition-fast)` (e.g., `150ms ease`) for link hover color changes.
- Focus state: Must use the standard `var(--focus-ring)` when focused.

## Engineering Rules

1. **Accessibility Requirements**:
   - The `<nav>` element must have `aria-label="Main"` to distinguish it from footer navigation or secondary navs.
   - The currently active page link must have `aria-current="page"`.
   - The hamburger menu button must be a `<button>`, never a `<div>` or `<a>`. It must toggle `aria-expanded` between `true` and `false` via JavaScript.
   
2. **Responsive Strategy**:
   - The `.nav_menu` and `.nav_actions` are typically hidden on mobile/tablet (e.g., `display: none` below 991px) and replaced by the `.nav_toggle` hamburger menu.
   - When the mobile menu is open, the body must have `overflow: hidden` to prevent scrolling the page beneath the menu.

3. **Link Spacing**:
   - Use `gap` on the `.nav_menu` (`display: flex`) instead of margins on individual `.nav_item` elements.
   - Click targets for `.nav_link` must be at least `44px` tall on mobile for touch accessibility.

## Related Patterns
If the navbar needs to stick to the top of the screen as the user scrolls, implement the [Sticky Header Pattern](../../patterns/sticky-header.md).
