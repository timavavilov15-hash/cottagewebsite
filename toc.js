/* ============================================
   DOMUS VIVA — Main Stylesheet Entry Point
   ============================================
   
   Architecture:
   1. variables.css  — Design tokens (colors, fonts, spacing)
   2. reset.css      — CSS reset & base typography
   3. layout.css     — Grid, containers, header, footer
   4. components.css — UI components (buttons, forms, cards, modals)
   5. animations.css — Keyframes, transitions, effects
   6. utilities.css  — Utility classes (display, spacing, text)
   7. pages.css      — Page-specific styles
   8. calculator.css — Calculator page styles
   
   ============================================ */

/* === 1. Design Tokens === */
@import url('variables.css');

/* === 2. Reset & Base === */
@import url('reset.css');

/* === 3. Layout === */
@import url('layout.css');

/* === 4. Components === */
@import url('components.css');

/* === 5. Animations === */
@import url('animations.css');

/* === 6. Utilities === */
@import url('utilities.css');

/* === 7. Page-specific === */
@import url('pages.css');

/* === 8. Calculator (conditional) === */
@import url('calculator.css');

/* ============================================
   Custom overrides & print styles
   ============================================ */

/* === Print Styles === */
@media print {
  .header,
  .footer,
  .mobile-menu,
  .floating-btn,
  .scroll-progress,
  .preloader,
  .toast-container,
  .modal {
    display: none !important;
  }
  
  body {
    background: white;
    color: black;
    font-size: 12pt;
  }
  
  a {
    color: black;
    text-decoration: underline;
  }
  
  a[href]::after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
    color: #666;
  }
  
  .container {
    max-width: 100%;
    padding: 0;
  }
  
  .page-header {
    padding: 20px 0;
    background: white !important;
  }
  
  img {
    max-width: 100% !important;
    page-break-inside: avoid;
  }
  
  h1, h2, h3, h4 {
    page-break-after: avoid;
  }
}

/* === Dark Mode (optional, currently disabled) === */
@media (prefers-color-scheme: dark) {
  /* Uncomment to enable automatic dark mode
  :root {
    --color-bg: #1A1D23;
    --color-bg-alt: #2A2D35;
    --color-text: #FAF9F6;
    --color-text-muted: #9CA3AF;
    --color-border: #374151;
  }
  */
}

/* === Reduced Motion === */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .parallax,
  .floating-shape,
  .marquee__track {
    animation: none !important;
    transform: none !important;
  }
  
  .hero__video {
    display: none;
  }
  
  .hero__media {
    background-image: var(--hero-poster);
    background-size: cover;
    background-position: center;
  }
}

/* === High Contrast Mode === */
@media (prefers-contrast: high) {
  :root {
    --color-border: #000000;
    --shadow-sm: 0 0 0 1px #000000;
    --shadow-md: 0 0 0 2px #000000;
  }
  
  .btn {
    border: 2px solid currentColor;
  }
}

/* === Focus Visible (keyboard navigation) === */
:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}

/* === Selection === */
::selection {
  background-color: var(--color-accent);
  color: var(--color-white);
}

/* === Scrollbar (WebKit) === */
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg-alt);
}

::-webkit-scrollbar-thumb {
  background: var(--color-accent);
  border-radius: var(--radius-full);
  border: 2px solid var(--color-bg-alt);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent-dark);
}

/* === Loading States === */
.loading {
  pointer-events: none;
  opacity: 0.6;
  position: relative;
}

.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 24px;
  margin: -12px 0 0 -12px;
  border: 2px solid var(--color-accent);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* === Error States === */
.error {
  color: var(--color-error);
}

.success {
  color: var(--color-success);
}

.warning {
  color: var(--color-warning);
}

/* === Hide on specific devices === */
@media (max-width: 767px) {
  .hide-mobile {
    display: none !important;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .hide-tablet {
    display: none !important;
  }
}

@media (min-width: 1024px) {
  .hide-desktop {
    display: none !important;
  }
}

/* === Lazy Loading Placeholder === */
img[loading="lazy"] {
  background-color: var(--color-bg-alt);
  transition: opacity 0.3s var(--ease-out);
}

img[loading="lazy"].loaded {
  opacity: 1;
}

/* === Skip Links === */
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--color-accent);
  color: var(--color-white);
  padding: var(--space-3) var(--space-5);
  z-index: 10000;
  font-family: var(--font-heading);
  font-weight: 600;
  transition: top 0.3s var(--ease-out);
}

.skip-link:focus {
  top: 0;
}

/* === Debug Mode (development only) === */
/*
.debug * {
  outline: 1px solid red !important;
}

.debug .container {
  background: rgba(255, 0, 0, 0.05) !important;
}
*/