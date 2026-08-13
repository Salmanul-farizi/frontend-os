#!/usr/bin/env node

/**
 * Frontend OS Component Generator
 * 
 * Usage: node scripts/generate-component.js <ComponentName>
 * Example: node scripts/generate-component.js FeatureCard
 * 
 * This script scaffolds a new component directory with the standard
 * HTML, CSS, and JS files, pre-populated with BEM naming conventions
 * and Frontend OS engineering rules.
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('\x1b[31mError: Please provide a component name.\x1b[0m');
  console.log('Usage: npm run generate:component <ComponentName>');
  process.exit(1);
}

const componentName = args[0];

// Convert PascalCase or camelCase to kebab-case
const kebabCaseName = componentName
  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  .toLowerCase();

// Convert to snake_case for BEM block name (Frontend OS standard uses block_element)
const bemBlockName = kebabCaseName.replace(/-/g, '_');

const targetDir = path.join(process.cwd(), 'src', 'components', kebabCaseName);

if (fs.existsSync(targetDir)) {
  console.error(`\x1b[31mError: Component directory already exists at ${targetDir}\x1b[0m`);
  process.exit(1);
}

// Ensure src/components exists
fs.mkdirSync(targetDir, { recursive: true });

// --- HTML Template ---
const htmlContent = `<!-- 
  Component: ${componentName}
  Follows Frontend OS Semantic HTML Standards
-->
<article class="${bemBlockName}">
  <header class="${bemBlockName}_header">
    <h3 class="${bemBlockName}_title">${componentName} Title</h3>
  </header>
  <div class="${bemBlockName}_content">
    <p>Component content goes here.</p>
  </div>
</article>
`;

// --- CSS Template ---
const cssContent = `/* 
  Component: ${componentName}
  Follows Frontend OS CSS Standards (BEM, Design Tokens)
*/

.${bemBlockName} {
  display: flex;
  flex-direction: column;
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-md);
}

.${bemBlockName}_header {
  margin-bottom: var(--space-sm);
}

.${bemBlockName}_title {
  margin: 0;
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
}

.${bemBlockName}_content {
  color: var(--color-text-secondary);
}
`;

// --- JS Template ---
const jsContent = `/**
 * Component: ${componentName}
 * Follows Frontend OS JavaScript Standards (Encapsulation, Event Delegation)
 */

export class ${componentName} {
  /**
   * @param {HTMLElement} element 
   */
  constructor(element) {
    if (!element) return;
    this.root = element;
    
    // Cache DOM elements
    // this.button = this.root.querySelector('.${bemBlockName}_button');
    
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // this.button?.addEventListener('click', this.handleClick.bind(this));
  }

  // handleClick(e) {
  //   console.log('${componentName} clicked');
  // }
}

// Auto-initialize if running in a standard DOM environment
// document.querySelectorAll('.${bemBlockName}').forEach(el => new ${componentName}(el));
`;

// Write files
fs.writeFileSync(path.join(targetDir, `${kebabCaseName}.html`), htmlContent);
fs.writeFileSync(path.join(targetDir, `${kebabCaseName}.css`), cssContent);
fs.writeFileSync(path.join(targetDir, `${kebabCaseName}.js`), jsContent);

console.log(`\x1b[32mSuccess: Component ${componentName} created!\x1b[0m`);
console.log(`Location: ${targetDir}`);
console.log('Files generated:');
console.log(`  - ${kebabCaseName}.html`);
console.log(`  - ${kebabCaseName}.css`);
console.log(`  - ${kebabCaseName}.js`);
