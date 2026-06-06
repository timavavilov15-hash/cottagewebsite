/* ============================================
   DOMUS VIVA — Layout Styles
   Container, Grid, Header, Footer, Nav
   ============================================ */

/* === CONTAINER === */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--gutter);
}

@media (min-width: var(--bp-md)) {
  .container {
    padding: 0 40px;
  }
}

/* === SECTION === */
.section {
  padding: var(--space-7) 0;
}

@media (min-width: var(--bp-md)) {
  .section {
    padding: var(--space-8) 0;
  }
}

.section--sm { padding: var(--space-5) 0; }
.section--lg { padding: var(--space-9) 0; }

/* === BREADCRUMBS === */
.breadcrumbs {
  background: var(--color-bg-alt);
  padding: var(--space-3) 0;
  margin-top: var(--header-height);
  border-bottom: 1px solid var(--color-border);
}

.breadcrumbs__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
}

.breadcrumbs__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.breadcrumbs__item:not(:last-child)::after {
  content: '›';
  color: var(--color-text-light);
}

.breadcrumbs__link {
  color: var(--color-text-muted);
  transition: color var(--duration-normal) var(--ease-out);
}

.breadcrumbs__link:hover {
  color: var(--color-accent);
}

.breadcrumbs__item[aria-current="page"] {
  color: var(--color-text);
  font-weight: 500;
}

/* === HEADER === */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: rgba(250, 249, 246, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  z-index: var(--z-fixed);
  transition: all var(--duration-normal) var(--ease-out);
}

.header--scrolled {
  background: rgba(250, 249, 246, 0.98);
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-sm);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* === LOGO === */
.logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: var(--fs-lg);
  color: var(--color-text);
  transition: opacity var(--duration-normal) var(--ease-out);
}

.logo:hover {
  opacity: 0.8;
  color: var(--color-text);
}

.logo__mark {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-dark));
  color: var(--color-white);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-sm);
  letter-spacing: 0.05em;
  transition: transform var(--duration-normal) var(--ease-out);
}

.logo:hover .logo__mark {
  transform: rotate(-8deg) scale(1.05);
}

.logo--light {
  color: var(--color-white);
}

.logo--light:hover {
  color: var(--color-white);
}

/* === NAV === */
.nav__list {
  display: none;
  gap: var(--space-5);
}

@media (min-width: var(--bp-lg)) {
  .nav__list {
    display: flex;
  }
}

.nav__link {
  position: relative;
  font-weight: 500;
  font-size: var(--fs-sm);
  padding: var(--space-2) 0;
  transition: color var(--duration-normal) var(--ease-out);
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width var(--duration-normal) var(--ease-out);
}

.nav__link:hover {
  color: var(--color-accent);
}

.nav__link:hover::after {
  width: 100%;
}

.nav__link--active {
  color: var(--color-accent);
}

.nav__link--active::after {
  width: 100%;
}

/* === HEADER ACTIONS === */
.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.header__phone {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: var(--fs-sm);
  display: none;
}

@media (min-width: var(--bp-md)) {
  .header__phone {
    display: inline-block;
  }
}

.header__phone:hover {
  color: var(--color-accent);
}

/* === BURGER === */
.burger {
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.burger__line {
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: all var(--duration-normal) var(--ease-out);
}

.burger--active .burger__line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger--active .burger__line:nth-child(2) {
  opacity: 0;
}

.burger--active .burger__line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (min-width: var(--bp-lg)) {
  .burger {
    display: none;
  }
}

/* === LANG SWITCHER === */
.lang-switcher {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1);
  background: var(--color-bg-alt);
  border-radius: var(--radius-full);
}

.lang-btn {
  padding: var(--space-1) var(--space-2);
  font-size: var(--fs-xs);
  font-weight: 600;
  color: var(--color-text-muted);
  border-radius: var(--radius-full);
  transition: all var(--duration-normal) var(--ease-out);
}

.lang-btn:hover {
  color: var(--color-accent);
}

.lang-btn--active {
  background: var(--color-accent);
  color: var(--color-white);
}

.lang-btn--active:hover {
  color: var(--color-white);
}

.lang-divider {
  color: var(--color-text-light);
  font-size: var(--fs-xs);
}

/* === MOBILE MENU === */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: calc(var(--z-fixed) + 1);
  background: var(--color-bg);
  transform: translateX(100%);
  transition: transform var(--duration-normal) var(--ease-out);
  overflow-y: auto;
}

.mobile-menu--open {
  transform: translateX(0);
}

.mobile-menu__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(26, 29, 35, 0.5);
  backdrop-filter: blur(4px);
}

.mobile-menu__content {
  position: relative;
  min-height: 100vh;
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
}

.mobile-menu__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-6);
}

.mobile-menu__close {
  width: 44px;
  height: 44px;
  font-size: var(--fs-xl);
  color: var(--color-text);
  transition: color var(--duration-normal) var(--ease-out);
}

.mobile-menu__close:hover {
  color: var(--color-accent);
}

.mobile-menu__nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex: 1;
}

.mobile-menu__nav a {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: var(--fs-2xl);
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--duration-normal) var(--ease-out);
}

.mobile-menu__nav a:hover,
.mobile-menu__nav a[aria-current="page"] {
  color: var(--color-accent);
}

.mobile-menu__footer {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-5);
}

body.no-scroll {
  overflow: hidden;
}

/* === PAGE NAV (sticky) === */
.page-nav {
  position: sticky;
  top: var(--header-height);
  background: rgba(250, 249, 246, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  z-index: var(--z-sticky);
  padding: var(--space-3) 0;
}

.page-nav__list {
  display: flex;
  gap: var(--space-2);
  overflow-x: auto;
  scrollbar-width: none;
  scroll-behavior: smooth;
}

.page-nav__list::-webkit-scrollbar {
  display: none;
}

.page-nav__link {
  padding: var(--space-2) var(--space-3);
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  border-radius: var(--radius-full);
  white-space: nowrap;
  transition: all var(--duration-normal) var(--ease-out);
}

.page-nav__link:hover {
  color: var(--color-accent);
  background: var(--color-accent-light);
}

.page-nav__link--active {
  background: var(--color-accent);
  color: var(--color-white);
}

.page-nav__link--active:hover {
  color: var(--color-white);
}

/* === FOOTER === */
.footer {
  background: var(--color-bg-dark);
  color: var(--color-white);
  padding: var(--space-7) 0 var(--space-4);
  margin-top: var(--space-8);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
  margin-bottom: var(--space-5);
}

@media (min-width: var(--bp-md)) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: var(--bp-lg)) {
  .footer__grid {
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  }
}

.footer__about p {
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--fs-sm);
  line-height: var(--leading-relaxed);
  margin: var(--space-3) 0;
}

.footer__col h4 {
  color: var(--color-white);
  font-size: var(--fs-md);
  margin-bottom: var(--space-3);
  font-weight: 600;
}

.footer__col ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer__col a {
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--fs-sm);
  transition: color var(--duration-normal) var(--ease-out);
}

.footer__col a:hover {
  color: var(--color-accent);
}

.footer__contacts p {
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--fs-sm);
  margin-bottom: var(--space-2);
}

.footer__contacts a {
  color: rgba(255, 255, 255, 0.7);
  transition: color var(--duration-normal) var(--ease-out);
}

.footer__contacts a:hover {
  color: var(--color-accent);
}

.social-links {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-3);
}

.social-links a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-white);
  transition: all var(--duration-normal) var(--ease-out);
}

.social-links a:hover {
  background: var(--color-accent);
  color: var(--color-white);
  transform: translateY(-2px);
}

.footer__bottom {
  padding-top: var(--space-4);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  align-items: center;
  text-align: center;
}

@media (min-width: var(--bp-md)) {
  .footer__bottom {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer__bottom p {
  color: rgba(255, 255, 255, 0.5);
  font-size: var(--fs-xs);
  margin: 0;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  justify-content: center;
}

.footer__links a {
  color: rgba(255, 255, 255, 0.5);
  font-size: var(--fs-xs);
  transition: color var(--duration-normal) var(--ease-out);
}

.footer__links a:hover {
  color: var(--color-accent);
}

/* === SCROLL PROGRESS === */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-dark));
  z-index: calc(var(--z-fixed) + 1);
  transition: width 0.1s linear;
}