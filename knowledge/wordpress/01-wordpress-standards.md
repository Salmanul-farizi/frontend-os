# WordPress Standards

## Purpose
This document standardizes our approach to developing WordPress themes and plugins. The goal is to ensure security, maintainability, performance, and a consistent developer experience across all WordPress-based projects.

## Principles
- **Modern Development**: Embrace modern PHP, Composer for dependency management, and modern build tools (Vite/Webpack) for front-end assets.
- **Security First**: Always sanitize, validate, and escape data. Never trust user input.
- **Decoupled Architecture**: Where appropriate, favor Headless WordPress (using REST API or GraphQL) to separate the back-end content management from the front-end presentation.
- **WordPress Way**: Follow WordPress Core coding standards when writing PHP, but integrate modern architectural patterns (OOP, namespaces) where beneficial.

## Engineering Rules
- **Rule: Security and Data Handling**
  - Always use `esc_html()`, `esc_url()`, `esc_attr()`, etc., when outputting data.
  - Always use `sanitize_text_field()`, `sanitize_email()`, etc., when saving data.
  - Always use Nonces (`wp_create_nonce()`, `wp_verify_nonce()`) for form submissions and AJAX requests.
- **Rule: Dependency Management**
  - Must use Composer to manage PHP dependencies and third-party libraries.
  - Never commit the `vendor/` directory to version control.
- **Rule: Theme and Plugin Structure**
  - Use namespaces for all custom PHP classes to avoid collisions.
  - Keep logic out of templates. Templates should only contain display logic (HTML and simple PHP control structures).
  - Use Block Themes (Full Site Editing) or custom Gutenberg blocks for new projects unless a classic theme is explicitly required.
- **Rule: Asset Management**
  - Always enqueue scripts and styles using `wp_enqueue_script()` and `wp_enqueue_style()`.
  - Never hardcode script or style tags in the `<head>` or before the closing `<body>` tag.
- **Rule: Database Queries**
  - Always use `WP_Query` or core functions for fetching posts.
  - Never write direct SQL queries (`$wpdb->query()`) unless the core functions cannot achieve the desired result efficiently.
  - Always cache expensive queries using Transients or object caching.
- **Rule: Headless Implementations**
  - When building headless, use WPGraphQL to expose data.
  - Ensure all custom post types and custom fields are properly exposed to the API.

## Best Practices
- Keep plugins focused on single responsibilities.
- Use advanced custom fields (ACF) or similar tools judiciously; prefer native Gutenberg blocks when possible.
- Ensure all localized strings are translatable using `__()`, `_e()`, etc.
- Disable unnecessary core features (like emojis or XML-RPC) if not used, to improve performance and security.

## Common Mistakes
- ❌ Echoing unescaped variables directly into the template.
- ❌ Hardcoding URLs instead of using `home_url()`, `plugin_dir_url()`, or `get_template_directory_uri()`.
- ❌ Modifying core WordPress files or third-party plugin files directly.
- ❌ Overusing heavy plugins for simple tasks that can be achieved with custom code.

## Related Knowledge
- [Performance Standards](../performance/README.md)
- [Data Fetching Standards](../data-fetching/README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
