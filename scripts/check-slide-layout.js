const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'app', 'globals.css');
const css = fs.readFileSync(cssPath, 'utf8');

function blockFor(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = css.match(new RegExp(`(?:^|\\n)\\s*${escaped}\\s*\\{([^}]*)\\}`, 'm'));
  if (!match) {
    throw new Error(`Missing CSS block for ${selector}`);
  }
  return match[1];
}

function assertHasDeclaration(block, property, value, selector) {
  const declaration = new RegExp(`(^|;)\\s*${property}\\s*:\\s*${value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*(;|$)`, 'm');
  if (!declaration.test(block)) {
    throw new Error(`${selector} should declare "${property}: ${value}"`);
  }
}

function assertNoDeclaration(block, property, value, selector) {
  const declaration = new RegExp(`(^|;)\\s*${property}\\s*:\\s*${value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*(;|$)`, 'm');
  if (declaration.test(block)) {
    throw new Error(`${selector} should not declare "${property}: ${value}"`);
  }
}

const slideSection = blockFor('.slide-section');
assertHasDeclaration(slideSection, 'min-height', 'var(--slide-panel-height)', '.slide-section');
assertHasDeclaration(slideSection, 'overflow', 'visible', '.slide-section');
assertNoDeclaration(slideSection, 'height', 'var(--slide-panel-height)', '.slide-section');
assertNoDeclaration(slideSection, 'overflow', 'hidden', '.slide-section');

const contentWrapper = blockFor('.slide-content-wrapper');
assertNoDeclaration(contentWrapper, 'height', '100%', '.slide-content-wrapper');

const slideLayout = blockFor('.slide-layout');
assertNoDeclaration(slideLayout, 'height', '100%', '.slide-layout');

const slideVisual = blockFor('.slide-visual');
assertHasDeclaration(
  slideVisual,
  'min-height',
  'min(560px, calc(var(--slide-panel-height) - 260px))',
  '.slide-visual'
);
assertNoDeclaration(slideVisual, 'height', '100%', '.slide-visual');

const slideCardGrid = blockFor('.slide-card-grid');
assertHasDeclaration(
  slideCardGrid,
  'max-height',
  'min(560px, calc(var(--slide-panel-height) - 260px))',
  '.slide-card-grid'
);
assertNoDeclaration(slideCardGrid, 'height', '100%', '.slide-card-grid');

console.log('Slide layout CSS allows desktop sections to grow instead of clipping content.');
