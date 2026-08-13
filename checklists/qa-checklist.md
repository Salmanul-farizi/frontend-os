# QA & Pre-Ship Checklist

Before code is handed over for deployment, CMS integration, or final delivery, the QA Reviewer must complete this checklist.

## 1. Cross-Browser & Environment Testing
- [ ] Renders correctly in Google Chrome (latest).
- [ ] Renders correctly in Safari (latest macOS/iOS).
- [ ] Renders correctly in Mozilla Firefox (latest).
- [ ] Renders correctly in Microsoft Edge (latest).
- [ ] Checked behavior on a real mobile device (or high-fidelity simulator), not just a scaled browser window.

## 2. Console & Errors
- [ ] **Zero Console Errors**: The browser console is completely clear of JavaScript errors.
- [ ] **Zero Console Warnings**: All React/Vue warnings or standard DOM warnings are resolved.
- [ ] **No 404s**: All assets (images, fonts, scripts) load successfully (check the Network tab).

## 3. Functionality & State
- [ ] All forms submit correctly or show appropriate validation errors.
- [ ] All interactive elements (accordions, tabs, modals, sliders) function without breaking.
- [ ] Hover states exist for all clickable elements (desktop).
- [ ] Active/Focus states exist for all clickable elements.
- [ ] External links open in a new tab (`target="_blank" rel="noopener noreferrer"`).
- [ ] Empty links (`href="#"`) do not cause the page to jump to the top when clicked.

## 4. Visual Fidelity
- [ ] Matches the Figma design spacing (padding, margin, gap).
- [ ] Matches the Figma typography (font families, weights, sizes, line heights).
- [ ] Colors match the provided design tokens exactly.

## 5. Review Pipeline Dependencies
- [ ] Accessibility Checklist passed.
- [ ] Responsive Checklist passed.
- [ ] Performance Checklist passed.
