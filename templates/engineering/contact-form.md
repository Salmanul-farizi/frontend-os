# Template: Contact Form

## Purpose
A standard, accessible contact form template. Forms are the most critical interactive elements on marketing sites. They must provide clear error states, properly linked labels, and keyboard accessibility.

## HTML Structure

```html
<form id="contact-form" class="form_component" aria-label="Contact Us">
  
  <div class="form_grid">
    
    <!-- Text Input -->
    <div class="form_field">
      <label for="field-name" class="form_label">Full Name</label>
      <input 
        type="text" 
        id="field-name" 
        name="name" 
        class="form_input" 
        required 
        aria-required="true"
        autocomplete="name"
      >
      <!-- Hidden by default, shown via JS or CSS on error -->
      <span class="form_error" id="error-name" aria-live="polite">
        Please enter your full name.
      </span>
    </div>

    <!-- Email Input -->
    <div class="form_field">
      <label for="field-email" class="form_label">Email Address</label>
      <input 
        type="email" 
        id="field-email" 
        name="email" 
        class="form_input" 
        required 
        aria-required="true"
        autocomplete="email"
      >
      <span class="form_error" id="error-email" aria-live="polite">
        Please enter a valid email address.
      </span>
    </div>

    <!-- Textarea -->
    <div class="form_field is-full-width">
      <label for="field-message" class="form_label">Message</label>
      <textarea 
        id="field-message" 
        name="message" 
        class="form_textarea" 
        required 
        aria-required="true"
        rows="4"
      ></textarea>
    </div>

  </div>

  <button type="submit" class="button_primary is-full-width">
    Send Message
  </button>
  
  <!-- Success Message State -->
  <div class="form_success-message" role="status" hidden>
    Thank you! Your message has been received.
  </div>

</form>
```

## CSS Token Architecture

```css
/* Form Layout */
.form_grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md) var(--space-md); /* row gap, col gap */
}

.form_field {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs); /* space between label and input */
}

.form_field.is-full-width {
  grid-column: 1 / -1;
}

@media (max-width: 767px) {
  .form_grid {
    grid-template-columns: 1fr;
  }
}

/* Inputs */
.form_input,
.form_textarea {
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface);
  font-family: inherit;
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  transition: border-color 150ms ease, box-shadow 150ms ease;
}

/* Focus State */
.form_input:focus,
.form_textarea:focus {
  outline: none;
  border-color: var(--color-brand-primary);
  box-shadow: 0 0 0 3px var(--focus-ring-color);
}

/* Error State */
.form_input[aria-invalid="true"],
.form_textarea[aria-invalid="true"] {
  border-color: var(--color-error);
}

.form_error {
  display: none;
  color: var(--color-error);
  font-size: var(--font-size-sm);
}

/* Show error when invalid state is applied */
.form_input[aria-invalid="true"] ~ .form_error {
  display: block;
}
```

## Engineering Rules

1. **Accessibility (Labels & IDs)**:
   - EVERY `<input>` and `<textarea>` must have an associated `<label>`. 
   - The `for` attribute on the label must perfectly match the `id` on the input.
   - Do not rely solely on the `placeholder` attribute; placeholders disappear when typing and fail accessibility guidelines.

2. **Autocomplete**:
   - Use standard `autocomplete` attributes (e.g., `name`, `email`, `tel`, `organization`) to allow browsers and password managers to fill forms quickly.

3. **Validation & Error Handling**:
   - Use `required` and `type="email"` for native browser validation.
   - When custom JavaScript validation fails, add `aria-invalid="true"` to the input and `aria-describedby="error-[id]"` pointing to the error message.
   - The error message container should have `aria-live="polite"` so screen readers announce it when it appears.

## Related Patterns
For advanced client-side validation logic, see the [Form Validation Pattern](../../patterns/form-validation.md).
