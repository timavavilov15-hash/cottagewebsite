/* ============================================
   DOMUS VIVA — Page-Specific Styles
   Уникальные стили для внутренних страниц
   ============================================ */

/* ===== Breadcrumbs ===== */
.breadcrumbs {
  padding: var(--space-4) 0;
  background-color: var(--color-bg-alt);
  border-bottom: 1px solid var(--color-border);
  margin-top: 84px;
}

.breadcrumbs__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
}

.breadcrumbs__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.breadcrumbs__item:not(:last-child)::after {
  content: '/';
  color: var(--color-border);
}

.breadcrumbs__link {
  color: var(--color-text-muted);
  transition: color var(--duration-fast) var(--ease-out);
}

.breadcrumbs__link:hover {
  color: var(--color-accent);
}

.breadcrumbs__current {
  color: var(--color-text);
  font-weight: 500;
}

/* ===== Page Header ===== */
.page-header {
  padding: var(--space-12) 0 var(--space-8);
  background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%);
  opacity: 0.5;
  border-radius: 50%;
  pointer-events: none;
}

.page-header::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--color-secondary-light) 0%, transparent 70%);
  opacity: 0.4;
  border-radius: 50%;
  pointer-events: none;
}

.page-header__content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.page-header__eyebrow {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent);
  margin-bottom: var(--space-3);
}

.page-header__title {
  margin-bottom: var(--space-4);
  line-height: 1.15;
}

.page-header__subtitle {
  font-size: var(--fs-lg);
  color: var(--color-text-muted);
  line-height: var(--lh-relaxed);
  max-width: 640px;
}

@media (max-width: 768px) {
  .page-header {
    padding: var(--space-10) 0 var(--space-6);
  }
}

/* ===== Page Navigation (sticky) ===== */
.page-nav {
  position: sticky;
  top: 84px;
  z-index: var(--z-sticky);
  background-color: rgba(250, 249, 246, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-3) 0;
}

.page-nav__list {
  display: flex;
  gap: var(--space-1);
  list-style: none;
  overflow-x: auto;
  scrollbar-width: none;
}

.page-nav__list::-webkit-scrollbar {
  display: none;
}

.page-nav__link {
  padding: var(--space-2) var(--space-4);
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  border-radius: var(--radius-full);
  white-space: nowrap;
  transition: all var(--duration-fast) var(--ease-out);
}

.page-nav__link:hover {
  color: var(--color-accent);
  background-color: var(--color-accent-light);
}

.page-nav__link--active {
  color: var(--color-white);
  background-color: var(--color-accent);
}

.page-nav__link--active:hover {
  color: var(--color-white);
  background-color: var(--color-accent-dark);
}

/* ===== Service Hero ===== */
.service-hero {
  padding: var(--space-12) 0 var(--space-8);
}

.service-hero__icon {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  margin-bottom: var(--space-5);
  box-shadow: var(--shadow-lg);
}

.service-hero__icon svg {
  width: 40px;
  height: 40px;
}

.service-hero__quick-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: var(--space-4);
  margin-top: var(--space-6);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);
}

.quick-info-item {
  text-align: center;
}

.quick-info-item strong {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--fs-2xl);
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--space-1);
}

.quick-info-item span {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ===== Service Overview ===== */
.service-overview {
  padding: var(--space-12) 0;
}

.service-overview__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  align-items: center;
}

@media (min-width: 1024px) {
  .service-overview__grid {
    grid-template-columns: 1.2fr 1fr;
  }
}

.service-overview__content .check-list {
  list-style: none;
  padding: 0;
  margin: var(--space-5) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.service-overview__content .check-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding-left: var(--space-7);
  position: relative;
}

.service-overview__content .check-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  background-color: var(--color-accent);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--fs-sm);
}

.service-overview__media img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

/* ===== Includes Grid ===== */
.service-includes {
  padding: var(--space-12) 0;
}

.includes-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .includes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .includes-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.include-card {
  background-color: var(--color-white);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-out);
}

.include-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.include-card__icon {
  width: 56px;
  height: 56px;
  background-color: var(--color-accent-light);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.include-card__icon svg {
  width: 28px;
  height: 28px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
}

.include-card h3 {
  font-size: var(--fs-xl);
  margin: 0 0 var(--space-2);
}

.include-card p {
  color: var(--color-text-muted);
  margin: 0;
}

/* ===== Pricing Grid ===== */
.service-pricing {
  padding: var(--space-12) 0;
}

.pricing__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-top: var(--space-6);
}

@media (min-width: 768px) {
  .pricing__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pricing-card {
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  position: relative;
  transition: all var(--duration-normal) var(--ease-out);
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.pricing-card--featured {
  background: linear-gradient(135deg, var(--color-bg-dark) 0%, var(--color-bg-dark-light) 100%);
  color: var(--color-white);
  border: none;
  transform: scale(1.05);
  box-shadow: var(--shadow-xl);
}

.pricing-card--featured:hover {
  transform: scale(1.05) translateY(-4px);
}

.pricing-card--featured .pricing-card__name,
.pricing-card--featured .pricing-card__price-value {
  color: var(--color-white);
}

.pricing-card--featured .pricing-card__price-unit {
  color: rgba(255, 255, 255, 0.7);
}

.pricing-card--featured .pricing-card__desc {
  color: rgba(255, 255, 255, 0.8);
}

.pricing-card--featured .pricing-card__divider {
  background-color: rgba(255, 255, 255, 0.2);
}

.pricing-card--featured .pricing-card__features li {
  color: rgba(255, 255, 255, 0.9);
}

.pricing-card--featured .pricing-card__features li::before {
  color: var(--color-accent);
}

.pricing-card__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-accent);
  color: var(--color-white);
  padding: var(--space-1) var(--space-3);
  font-family: var(--font-heading);
  font-size: var(--fs-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.pricing-card__name {
  font-family: var(--font-heading);
  font-size: var(--fs-2xl);
  font-weight: 700;
  margin: 0 0 var(--space-2);
}

.pricing-card__desc {
  color: var(--color-text-muted);
  font-size: var(--fs-sm);
  margin: 0 0 var(--space-4);
  min-height: 40px;
}

.pricing-card__price {
  display: flex;
  align-items: baseline;
  gap: var(--space-1);
  margin-bottom: var(--space-4);
}

.pricing-card__price-from {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
}

.pricing-card--featured .pricing-card__price-from {
  color: rgba(255, 255, 255, 0.7);
}

.pricing-card__price-value {
  font-family: var(--font-heading);
  font-size: var(--fs-5xl);
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
}

.pricing-card__price-unit {
  font-size: var(--fs-base);
  color: var(--color-text-muted);
}

.pricing-card__divider {
  height: 1px;
  background-color: var(--color-border);
  margin: var(--space-4) 0;
}

.pricing-card__features {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.pricing-card__features li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  font-size: var(--fs-sm);
  color: var(--color-text);
}

.pricing-card__features li::before {
  content: '✓';
  color: var(--color-accent);
  font-weight: 700;
  flex-shrink: 0;
}

.pricing-card__feature--disabled {
  opacity: 0.5;
}

.pricing-card__feature--disabled::before {
  content: '✕';
  color: var(--color-text-light);
}

.pricing__note {
  text-align: center;
  margin-top: var(--space-6);
  padding: var(--space-5);
  background-color: var(--color-accent-light);
  border-radius: var(--radius-lg);
  color: var(--color-accent-dark);
}

.pricing__note p {
  margin: 0;
  font-size: var(--fs-base);
}

/* ===== Process Timeline ===== */
.service-process {
  padding: var(--space-12) 0;
}

.process-timeline {
  position: relative;
  margin-top: var(--space-6);
  padding-left: var(--space-10);
}

.process-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--color-accent), var(--color-accent-dark));
  border-radius: var(--radius-full);
}

.process-step {
  position: relative;
  margin-bottom: var(--space-6);
}

.process-step:last-child {
  margin-bottom: 0;
}

.process-step__marker {
  position: absolute;
  left: -52px;
  top: 0;
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--fs-base);
  box-shadow: var(--shadow-md);
  z-index: 1;
}

.process-step--final .process-step__marker {
  background: linear-gradient(135deg, var(--color-success) 0%, #38A169 100%);
}

.process-step__content {
  background-color: var(--color-white);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-out);
}

.process-step__content:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.process-step__content time {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background-color: var(--color-accent-light);
  color: var(--color-accent-dark);
  font-family: var(--font-heading);
  font-size: var(--fs-xs);
  font-weight: 600;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-2);
}

.process-step__content h3 {
  font-size: var(--fs-xl);
  margin: 0 0 var(--space-2);
}

.process-step__content p {
  color: var(--color-text-muted);
  margin: 0;
}

@media (min-width: 768px) {
  .process-timeline {
    padding-left: 0;
  }
  
  .process-timeline::before {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .process-step {
    display: grid;
    grid-template-columns: 1fr 80px 1fr;
    gap: var(--space-5);
    align-items: center;
    margin-bottom: var(--space-8);
  }
  
  .process-step__marker {
    position: relative;
    left: auto;
    grid-column: 2;
    grid-row: 1;
    margin: 0 auto;
  }
  
  .process-step:nth-child(odd) .process-step__content {
    grid-column: 1;
  }
  
  .process-step:nth-child(even) .process-step__content {
    grid-column: 3;
  }
}

@media (max-width: 767px) {
  .process-timeline {
    padding-left: var(--space-10);
  }
  
  .process-step__marker {
    left: -52px;
  }
}

/* ===== Examples/Portfolio Grid ===== */
.service-examples {
  padding: var(--space-12) 0;
}

.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ===== FAQ Section ===== */
.faq-section {
  padding: var(--space-12) 0;
}

.faq__list {
  max-width: 800px;
  margin: var(--space-6) auto 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* ===== CTA Section ===== */
.cta-section {
  padding: var(--space-12) 0;
}

.cta-box {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
  border-radius: var(--radius-2xl);
  padding: var(--space-8) var(--space-6);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.cta-box::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.cta-box--dark {
  background: linear-gradient(135deg, var(--color-bg-dark) 0%, var(--color-bg-dark-light) 100%);
}

.cta-box--dark::before {
  background: radial-gradient(circle, rgba(166, 124, 82, 0.2) 0%, transparent 70%);
}

.cta-box__content {
  position: relative;
  z-index: 1;
}

.cta-box__content h2 {
  color: var(--color-white);
  margin: 0 0 var(--space-3);
  font-size: clamp(var(--fs-2xl), 1.5rem + 2vw, var(--fs-4xl));
}

.cta-box__content p {
  color: rgba(255, 255, 255, 0.9);
  font-size: var(--fs-lg);
  margin: 0;
  max-width: 600px;
}

.cta-box__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  position: relative;
  z-index: 1;
  justify-content: flex-start;
}

@media (min-width: 768px) {
  .cta-box {
    grid-template-columns: 1.5fr 1fr;
    padding: var(--space-10) var(--space-8);
  }
  
  .cta-box__actions {
    justify-content: flex-end;
  }
}

/* ===== Related Pages ===== */
.related-pages {
  padding: var(--space-12) 0;
}

.related-pages__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-top: var(--space-6);
}

@media (min-width: 640px) {
  .related-pages__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .related-pages__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.related-card {
  background-color: var(--color-white);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-out);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.related-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  color: inherit;
}

.related-card__icon {
  width: 56px;
  height: 56px;
  background-color: var(--color-accent-light);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
  transition: all var(--duration-normal) var(--ease-out);
}

.related-card:hover .related-card__icon {
  background-color: var(--color-accent);
  color: var(--color-white);
  transform: rotate(-5deg) scale(1.1);
}

.related-card__icon svg {
  width: 28px;
  height: 28px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
}

.related-card h3 {
  font-size: var(--fs-xl);
  margin: 0 0 var(--space-2);
}

.related-card p {
  color: var(--color-text-muted);
  font-size: var(--fs-sm);
  margin: 0 0 var(--space-4);
  flex: 1;
}

.related-card__arrow {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: var(--fs-sm);
  color: var(--color-accent);
  transition: gap var(--duration-fast) var(--ease-out);
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
}

.related-card:hover .related-card__arrow {
  gap: var(--space-2);
}

/* ===== Article Page ===== */
.article-header {
  padding: var(--space-8) 0;
  border-bottom: 1px solid var(--color-border);
}

.article-header__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
}

.article-header__title {
  font-size: clamp(var(--fs-3xl), 2rem + 2vw, var(--fs-6xl));
  margin-bottom: var(--space-4);
  line-height: 1.15;
}

.article-header__subtitle {
  font-size: var(--fs-lg);
  color: var(--color-text-muted);
  margin-bottom: var(--space-5);
  line-height: var(--lh-relaxed);
}

.article-header__author {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.article-header__author img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.article-header__author strong {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--fs-base);
  margin-bottom: var(--space-1);
}

.article-header__author span {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
}

.article-header__share {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
}

.share-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-alt);
  border-radius: 50%;
  color: var(--color-text);
  transition: all var(--duration-fast) var(--ease-out);
  border: none;
  cursor: pointer;
}

.share-btn:hover {
  background-color: var(--color-accent);
  color: var(--color-white);
  transform: translateY(-2px);
}

.share-btn svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

/* Article Body Layout */
.article-body {
  padding: var(--space-8) 0;
}

.article-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}

@media (min-width: 1024px) {
  .article-layout {
    grid-template-columns: 1fr 320px;
  }
}

.article-content {
  font-family: 'Merriweather', serif;
  font-size: var(--fs-base);
  line-height: var(--lh-relaxed);
  color: var(--color-text);
}

.article-content .lead {
  font-size: var(--fs-lg);
  font-weight: 400;
  color: var(--color-text);
  font-family: var(--font-body);
}

.article-content figure {
  margin: var(--space-6) 0;
}

.article-content figcaption {
  text-align: center;
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  font-style: italic;
  margin-top: var(--space-2);
}

.article-content table {
  font-family: var(--font-body);
  font-size: var(--fs-sm);
  margin: var(--space-6) 0;
}

/* Article Sidebar */
.article-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.sidebar-widget {
  background-color: var(--color-white);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.sidebar-widget h3 {
  font-family: var(--font-heading);
  font-size: var(--fs-base);
  font-weight: 700;
  margin: 0 0 var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 2px solid var(--color-accent);
}

.sidebar-widget--toc .toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.toc-list a {
  display: block;
  padding: var(--space-2) var(--space-3);
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast) var(--ease-out);
}

.toc-list a:hover {
  background-color: var(--color-bg-alt);
  color: var(--color-accent);
}

.toc-list a.active {
  background-color: var(--color-accent-light);
  color: var(--color-accent-dark);
  font-weight: 600;
}

.sidebar-popular {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.sidebar-article {
  display: flex;
  gap: var(--space-3);
  text-decoration: none;
  color: inherit;
}

.sidebar-article__image {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.sidebar-article__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-fast) var(--ease-out);
}

.sidebar-article:hover .sidebar-article__image img {
  transform: scale(1.1);
}

.sidebar-article__content h4 {
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: 600;
  margin: 0 0 var(--space-1);
  line-height: 1.3;
}

.sidebar-article__content time {
  font-size: var(--fs-xs);
  color: var(--color-text-muted);
}

/* Newsletter Box */
.newsletter-box {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
  color: var(--color-white);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
}

.newsletter-box h3 {
  color: var(--color-white);
  border-bottom: none;
  margin-bottom: var(--space-2);
}

.newsletter-box p {
  font-size: var(--fs-sm);
  opacity: 0.9;
  margin-bottom: var(--space-4);
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.newsletter-form input[type="email"] {
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--color-white);
}

.newsletter-form input[type="email"]::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.newsletter-form .checkbox-label {
  font-size: var(--fs-xs);
  opacity: 0.8;
}

.newsletter-form .checkbox-label a {
  color: var(--color-white);
  text-decoration: underline;
}

/* Article Tags */
.article-tags {
  margin-top: var(--space-6);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);
}

.article-tags strong {
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  margin-right: var(--space-2);
}

.article-tag {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background-color: var(--color-bg-alt);
  color: var(--color-text-muted);
  font-size: var(--fs-sm);
  border-radius: var(--radius-full);
  margin: var(--space-1);
  transition: all var(--duration-fast) var(--ease-out);
}

.article-tag:hover {
  background-color: var(--color-accent-light);
  color: var(--color-accent-dark);
}

/* Author Bio */
.article-author-bio {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-6);
  padding: var(--space-5);
  background-color: var(--color-bg-alt);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-accent);
}

.article-author-bio img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.article-author-bio h4 {
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: 600;
  margin: 0 0 var(--space-2);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.article-author-bio strong {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--fs-xl);
  margin-bottom: var(--space-2);
}

.article-author-bio p {
  color: var(--color-text-muted);
  font-size: var(--fs-sm);
  margin-bottom: var(--space-3);
}

/* Article CTA */
.article-cta {
  background-color: var(--color-bg-alt);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  text-align: center;
  margin: var(--space-6) 0;
}

.article-cta h3 {
  font-size: var(--fs-2xl);
  margin-bottom: var(--space-2);
}

.article-cta p {
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

/* Article Comments */
.article-comments {
  padding: var(--space-12) 0;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  margin-bottom: var(--space-6);
}

.comment {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-5);
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.comment__avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.comment__header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
}

.comment__header strong {
  font-family: var(--font-heading);
}

.comment__header time {
  font-size: var(--fs-xs);
  color: var(--color-text-muted);
}

.comment__badge {
  padding: var(--space-1) var(--space-2);
  background-color: var(--color-accent-light);
  color: var(--color-accent-dark);
  font-size: var(--fs-xs);
  font-weight: 600;
  border-radius: var(--radius-full);
}

.comment p {
  color: var(--color-text);
  margin-bottom: var(--space-3);
}

.comment__reply {
  font-size: var(--fs-sm);
  color: var(--color-accent);
  font-weight: 600;
  cursor: pointer;
  background: none;
  border: none;
}

.comment-form {
  background-color: var(--color-white);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.comment-form h3 {
  margin-bottom: var(--space-4);
}

.comment-form .form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

@media (min-width: 640px) {
  .comment-form .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

/* ===== Project Hero ===== */
.project-hero {
  min-height: 70vh;
  display: flex;
  align-items: flex-end;
  padding: var(--space-8) 0;
  position: relative;
  overflow: hidden;
}

.project-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.project-hero__bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(26, 29, 35, 0.9) 0%,
    rgba(26, 29, 35, 0.5) 50%,
    transparent 100%
  );
}

.project-hero__content {
  position: relative;
  z-index: 1;
  color: var(--color-white);
}

.project-hero__content .project-badge {
  display: inline-block;
  padding: var(--space-2) var(--space-4);
  background-color: var(--color-accent);
  color: var(--color-white);
  font-family: var(--font-heading);
  font-size: var(--fs-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-4);
}

.project-hero__content .project-badge--premium {
  background: linear-gradient(135deg, #D4A373 0%, #8A6540 100%);
}

.project-hero__content .project-badge--eco {
  background-color: var(--color-secondary);
}

.project-hero__title {
  color: var(--color-white);
  margin-bottom: var(--space-3);
  font-size: clamp(var(--fs-3xl), 2rem + 3vw, var(--fs-6xl));
}

.project-hero__subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: var(--fs-lg);
  margin-bottom: var(--space-6);
  max-width: 700px;
}

.project-hero__quick-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: var(--space-4);
  padding-top: var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.quick-stat {
  text-align: center;
}

.quick-stat strong {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--fs-2xl);
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--space-1);
}

.quick-stat span {
  font-size: var(--fs-xs);
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ===== Project Overview ===== */
.project-overview {
  padding: var(--space-12) 0;
}

.project-overview__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}

@media (min-width: 1024px) {
  .project-overview__grid {
    grid-template-columns: 1.5fr 1fr;
  }
}

.project-info-card {
  background-color: var(--color-white);
  padding: var(--space-6);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 160px;
}

.project-info-card h3 {
  font-size: var(--fs-xl);
  margin-bottom: var(--space-4);
}

.project-info-card__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.project-info-card__item {
  display: flex;
  justify-content: space-between;
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
  font-size: var(--fs-sm);
}

.project-info-card__item:last-child {
  border-bottom: none;
}

.project-info-card__item dt {
  color: var(--color-text-muted);
}

.project-info-card__item dd {
  font-weight: 600;
  margin: 0;
  text-align: right;
}

.project-info-card__item--accent dd {
  color: var(--color-accent);
  font-size: var(--fs-lg);
}

/* ===== Project Gallery ===== */
.project-gallery {
  padding: var(--space-12) 0;
}

.project-gallery__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
  margin-top: var(--space-6);
}

@media (min-width: 640px) {
  .project-gallery__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .project-gallery__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gallery-item {
  display: block;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--radius-lg);
  cursor: pointer;
  position: relative;
}

.gallery-item--large {
  grid-column: span 2;
  aspect-ratio: 16 / 9;
}

.gallery-item--wide {
  grid-column: span 2;
}

@media (max-width: 639px) {
  .gallery-item--large,
  .gallery-item--wide {
    grid-column: span 1;
    aspect-ratio: 4 / 3;
  }
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out);
}

.gallery-item:hover img {
  transform: scale(1.08);
}

.gallery-item::after {
  content: '🔍';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  font-size: 40px;
  opacity: 0;
  transition: all var(--duration-normal) var(--ease-out);
  pointer-events: none;
}

.gallery-item:hover::after {
  opacity: 0.8;
  transform: translate(-50%, -50%) scale(1);
}

.project-gallery__more {
  text-align: center;
  margin-top: var(--space-6);
}

/* ===== Project Plans ===== */
.project-plan {
  padding: var(--space-12) 0;
}

.project-plan__wrapper {
  margin-top: var(--space-6);
}

.project-plans__tabs {
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

.plan-tab {
  padding: var(--space-3) var(--space-5);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: var(--fs-base);
  color: var(--color-text-muted);
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.plan-tab:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.plan-tab--active {
  background-color: var(--color-accent);
  color: var(--color-white);
  border-color: var(--color-accent);
}

.plan-content {
  display: none;
}

.plan-content--active {
  display: block;
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

.floor-plan-svg {
  width: 100%;
  height: auto;
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--space-4);
}

.floor-plan__room {
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.floor-plan__room:hover rect {
  fill: var(--color-accent-light);
}

.floor-plan__room text {
  font-family: var(--font-heading);
  pointer-events: none;
}

.project-plan__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-5);
  justify-content: center;
}

/* ===== Project Specs ===== */
.project-specs {
  padding: var(--space-12) 0;
}

.project-specs__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-top: var(--space-6);
}

@media (min-width: 640px) {
  .project-specs__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .project-specs__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.spec-card {
  background-color: var(--color-white);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-out);
}

.spec-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.spec-card h3 {
  font-size: var(--fs-base);
  font-weight: 700;
  margin-bottom: var(--space-2);
  color: var(--color-accent);
}

.spec-card p {
  font-size: var(--fs-sm);
  color: var(--color-text);
  margin: 0;
}

/* ===== Project Process ===== */
.project-process {
  padding: var(--space-12) 0;
}

/* ===== Project Review ===== */
.project-review {
  padding: var(--space-12) 0;
}

.review-card {
  max-width: 800px;
  margin: var(--space-6) auto 0;
  background-color: var(--color-white);
  padding: var(--space-6);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.review-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
}

.review-card__photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.review-card__info h3 {
  font-size: var(--fs-xl);
  margin: 0 0 var(--space-1);
}

.review-card__info span {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  display: block;
  margin-bottom: var(--space-2);
}

.review-card__rating {
  color: var(--color-accent);
  font-size: var(--fs-lg);
  letter-spacing: 2px;
}

.review-card__text {
  font-size: var(--fs-lg);
  line-height: var(--lh-relaxed);
  font-style: italic;
  color: var(--color-text);
}

.review-card__text p {
  margin-bottom: var(--space-4);
}

.review-card__photos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
  margin-top: var(--space-5);
}

.review-card__photos img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-md);
}

/* ===== Similar Projects ===== */
.similar-projects {
  padding: var(--space-12) 0;
}

/* ===== Designer Bio ===== */
.designer-bio {
  padding: var(--space-12) 0;
}

.designer-bio__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  align-items: center;
}

@media (min-width: 768px) {
  .designer-bio__grid {
    grid-template-columns: 1fr 1.5fr;
  }
}

.designer-bio__photo img {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.designer-bio__role {
  display: block;
  color: var(--color-accent);
  font-weight: 600;
  font-size: var(--fs-sm);
  margin-bottom: var(--space-4);
}

.designer-bio__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin: var(--space-5) 0;
  padding: var(--space-5);
  background-color: var(--color-bg-alt);
  border-radius: var(--radius-lg);
}

.designer-stat {
  text-align: center;
}

.designer-stat strong {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--fs-2xl);
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--space-1);
}

.designer-stat span {
  font-size: var(--fs-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ===== Styles Grid ===== */
.service-styles {
  padding: var(--space-12) 0;
}

.styles-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-top: var(--space-6);
}

@media (min-width: 640px) {
  .styles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .styles-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.style-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-out);
}

.style-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.style-card__image {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.style-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out);
}

.style-card:hover .style-card__image img {
  transform: scale(1.08);
}

.style-card h3 {
  font-size: var(--fs-xl);
  margin: var(--space-4) var(--space-4) var(--space-2);
}

.style-card p {
  padding: 0 var(--space-4) var(--space-4);
  color: var(--color-text-muted);
  font-size: var(--fs-sm);
  margin: 0;
}

/* ===== Types Grid ===== */
.service-types {
  padding: var(--space-12) 0;
}

.types-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-top: var(--space-6);
}

@media (min-width: 640px) {
  .types-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .types-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.type-card {
  background-color: var(--color-white);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-out);
}

.type-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.type-card__icon {
  width: 64px;
  height: 64px;
  background-color: var(--color-accent-light);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.type-card__icon svg {
  width: 32px;
  height: 32px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
}

.type-card h3 {
  font-size: var(--fs-xl);
  margin: 0 0 var(--space-3);
}

.type-card > p {
  color: var(--color-text);
  margin-bottom: var(--space-3);
}

.type-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.type-card ul li {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  padding-left: var(--space-5);
  position: relative;
}

.type-card ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: 700;
}

/* ===== Cases Grid ===== */
.service-cases {
  padding: var(--space-12) 0;
}

.cases-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
  margin-top: var(--space-6);
}

@media (min-width: 768px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.case-card {
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-out);
}

.case-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.case-card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.case-card__before-after {
  position: relative;
  width: 100%;
  height: 100%;
}

.case-card__before {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: inset(0 50% 0 0);
}

.case-card__after {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-card__badge {
  position: absolute;
  top: var(--space-3);
  left: var(--space-3);
  padding: var(--space-1) var(--space-3);
  background-color: var(--color-accent);
  color: var(--color-white);
  font-family: var(--font-heading);
  font-size: var(--fs-xs);
  font-weight: 700;
  text-transform: uppercase;
  border-radius: var(--radius-full);
}

.case-card__badge--heritage {
  background-color: var(--color-secondary);
}

.case-card__body {
  padding: var(--space-6);
}

.case-card__body h3 {
  font-size: var(--fs-xl);
  margin: 0 0 var(--space-3);
}

.case-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

.case-card__body > p {
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.case-card__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.case-stat {
  text-align: center;
}

.case-stat strong {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--fs-2xl);
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--space-1);
}

.case-stat span {
  font-size: var(--fs-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
}

/* ===== Overview Warning ===== */
.overview__warning {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-4);
  background-color: var(--color-warning-bg);
  border-left: 4px solid var(--color-warning);
  border-radius: var(--radius-md);
  margin: var(--space-5) 0;
}

.overview__warning svg {
  width: 24px;
  height: 24px;
  color: var(--color-warning);
  flex-shrink: 0;
}

.overview__warning strong {
  display: block;
  margin-bottom: var(--space-1);
}

/* ===== Before/After ===== */
.before-after {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .before-after {
    grid-template-columns: repeat(2, 1fr);
  }
}

.before-after__item {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.before-after__item img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.before-after__label {
  position: absolute;
  top: var(--space-3);
  left: var(--space-3);
  padding: var(--space-1) var(--space-3);
  background-color: var(--color-text-muted);
  color: var(--color-white);
  font-family: var(--font-heading);
  font-size: var(--fs-xs);
  font-weight: 700;
  text-transform: uppercase;
  border-radius: var(--radius-full);
}

.before-after__label--after {
  background-color: var(--color-accent);
}

/* ===== Timeline Visual (for case studies) ===== */
.timeline-visual {
  position: relative;
  padding: var(--space-5) 0 var(--space-5) var(--space-12);
  margin: var(--space-6) 0;
}

.timeline-visual::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--color-accent), var(--color-accent-dark));
  border-radius: var(--radius-full);
}

.timeline-item-visual {
  position: relative;
  margin-bottom: var(--space-6);
  padding-left: var(--space-5);
}

.timeline-item-visual:last-child {
  margin-bottom: 0;
}

.timeline-item-visual::before {
  content: '';
  position: absolute;
  left: -41px;
  top: 5px;
  width: 20px;
  height: 20px;
  background-color: var(--color-accent);
  border-radius: 50%;
  border: 4px solid var(--color-bg);
  box-shadow: var(--shadow-md);
}

.timeline-item-visual__date {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--color-accent);
  font-size: var(--fs-sm);
  margin-bottom: var(--space-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.timeline-item-visual__content {
  background-color: var(--color-white);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.timeline-item-visual__content h3 {
  margin: 0 0 var(--space-2);
  font-size: var(--fs-xl);
}

.timeline-item-visual__content p {
  color: var(--color-text-muted);
  margin: 0;
}

/* ===== Stats Row ===== */
.stats-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  margin: var(--space-6) 0;
}

@media (min-width: 640px) {
  .stats-row {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-box {
  text-align: center;
  padding: var(--space-5);
  background-color: var(--color-bg-alt);
  border-radius: var(--radius-lg);
  transition: all var(--duration-fast) var(--ease-out);
}

.stat-box:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.stat-box__value {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(var(--fs-2xl), 1.5rem + 1.5vw, var(--fs-4xl));
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--space-2);
}

.stat-box__label {
  font-size: var(--fs-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ===== Comparison Grid ===== */
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin: var(--space-6) 0;
}

@media (min-width: 640px) {
  .comparison-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.comparison-card {
  background-color: var(--color-white);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border-top: 4px solid var(--color-accent);
  transition: all var(--duration-normal) var(--ease-out);
}

.comparison-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.comparison-card--highlight {
  background: linear-gradient(135deg, var(--color-bg-alt) 0%, var(--color-bg) 100%);
  border-top-color: var(--color-secondary);
}

.comparison-card__title {
  font-family: var(--font-heading);
  font-size: var(--fs-xl);
  font-weight: 700;
  margin: 0 0 var(--space-4);
}

.comparison-card__value {
  font-family: var(--font-heading);
  font-size: clamp(var(--fs-3xl), 2rem + 2vw, var(--fs-5xl));
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--space-2);
}

.comparison-card--highlight .comparison-card__value {
  color: var(--color-secondary);
}

.comparison-card__unit {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
}

/* ===== Verdict Card ===== */
.verdict-card {
  background-color: var(--color-bg-alt);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-accent);
  margin: var(--space-4) 0;
}

.verdict-card h4 {
  font-family: var(--font-heading);
  font-size: var(--fs-base);
  font-weight: 700;
  margin: 0 0 var(--space-3);
}

.verdict-card ul {
  margin: 0;
  padding-left: var(--space-5);
}

/* ===== Highlight Box ===== */
.highlight-box {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
  color: var(--color-white);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  margin: var(--space-6) 0;
}

.highlight-box h3 {
  color: var(--color-white);
  margin: 0 0 var(--space-3);
  font-size: var(--fs-xl);
}

.highlight-box p {
  margin: 0 0 var(--space-3);
  opacity: 0.95;
}

.highlight-box p:last-child {
  margin-bottom: 0;
}

.highlight-box ol,
.highlight-box ul {
  margin: var(--space-3) 0 0;
  padding-left: var(--space-5);
}

/* ===== Warning Box ===== */
.warning-box {
  background-color: var(--color-warning-bg);
  border: 1px solid var(--color-warning);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  margin: var(--space-6) 0;
  color: #92400E;
}

.warning-box strong {
  color: #78350F;
  display: block;
  margin-bottom: var(--space-2);
}

/* ===== Mistake Card ===== */
.mistake-card {
  background-color: var(--color-white);
  border-left: 4px solid var(--color-error);
  padding: var(--space-6);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  box-shadow: var(--shadow-sm);
  margin: var(--space-5) 0;
}

.mistake-card__number {
  font-family: var(--font-heading);
  font-size: var(--fs-5xl);
  font-weight: 800;
  color: var(--color-error);
  opacity: 0.15;
  line-height: 1;
  margin-bottom: var(--space-2);
}

.mistake-card h3 {
  color: var(--color-error);
  margin: 0 0 var(--space-3);
}

/* ===== Checklist ===== */
.checklist {
  background-color: var(--color-bg-alt);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  margin: var(--space-6) 0;
}

.checklist h3 {
  margin: 0 0 var(--space-4);
}

.checklist ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.checklist li {
  padding: var(--space-3) 0 var(--space-3) var(--space-9);
  position: relative;
  border-bottom: 1px solid var(--color-border);
}

.checklist li:last-child {
  border-bottom: none;
}

.checklist li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: var(--space-3);
  width: 24px;
  height: 24px;
  background-color: var(--color-accent);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--fs-sm);
}

/* ===== Pull Quote ===== */
.pull-quote {
  font-size: clamp(var(--fs-xl), 1.5rem + 1vw, var(--fs-3xl));
  font-style: italic;
  text-align: center;
  margin: var(--space-10) 0;
  color: var(--color-text);
  line-height: 1.4;
  position: relative;
  padding: 0 var(--space-8);
}

.pull-quote::before {
  content: '"';
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 120px;
  line-height: 1;
  color: var(--color-accent);
  opacity: 0.2;
  font-family: Georgia, serif;
}

.pull-quote cite {
  display: block;
  margin-top: var(--space-4);
  font-size: var(--fs-sm);
  font-style: normal;
  color: var(--color-text-muted);
  font-weight: 600;
  font-family: var(--font-heading);
}

/* ===== Trend Card ===== */
.trend-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  margin: var(--space-5) 0;
  border-top: 4px solid var(--color-accent);
}

.trend-card__number {
  font-family: var(--font-heading);
  font-size: var(--fs-6xl);
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
  opacity: 0.2;
}

.trend-card h3 {
  margin-top: var(--space-2);
}

/* ===== Gallery Grid ===== */
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin: var(--space-6) 0;
}

@media (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.gallery-grid img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  transition: transform var(--duration-normal) var(--ease-out);
}

.gallery-grid img:hover {
  transform: scale(1.03);
}

/* ===== Verdict Grid (for smart home) ===== */
.verdict {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
  margin: var(--space-6) 0;
}

@media (min-width: 640px) {
  .verdict {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .verdict {
    grid-template-columns: repeat(3, 1fr);
  }
}

.verdict__item {
  padding: var(--space-5);
  background-color: var(--color-bg-alt);
  border-radius: var(--radius-lg);
  text-align: center;
  border: 2px solid transparent;
  transition: all var(--duration-normal) var(--ease-out);
}

.verdict__item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.verdict__item--good {
  background-color: var(--color-success-bg);
  border-color: var(--color-success);
}

.verdict__item--bad {
  background-color: var(--color-error-bg);
  border-color: var(--color-error);
}

.verdict__icon {
  font-size: var(--fs-5xl);
  margin-bottom: var(--space-3);
}

.verdict__item strong {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--fs-base);
  margin-bottom: var(--space-2);
}

.verdict__item p {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  margin: 0;
}

/* ===== System Card ===== */
.system-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  margin: var(--space-4) 0;
}

.system-card__badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background-color: var(--color-accent);
  color: var(--color-white);
  font-family: var(--font-heading);
  font-size: var(--fs-xs);
  font-weight: 700;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-3);
}

.system-card h3 {
  font-size: var(--fs-2xl);
  margin: 0 0 var(--space-3);
}

.system-card p {
  margin-bottom: var(--space-3);
}

.system-card p strong {
  color: var(--color-accent);
}

/* ===== Foundation Card ===== */
.foundation-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  margin: var(--space-4) 0;
}

.foundation-card__icon {
  width: 60px;
  height: 60px;
  background-color: var(--color-accent-light);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: var(--space-4);
}

.foundation-card h3 {
  font-size: var(--fs-xl);
  margin: 0 0 var(--space-2);
}

/* ===== Blog Categories ===== */
.blog-category {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background-color: var(--color-white);
  color: var(--color-accent);
  font-family: var(--font-heading);
  font-size: var(--fs-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: var(--radius-full);
}

.blog-category--tech {
  background-color: #E0F2FE;
  color: #0369A1;
}

.blog-category--design {
  background-color: #FCE7F3;
  color: #BE185D;
}

.blog-category--tips {
  background-color: #FEF3C7;
  color: #B45309;
}

.blog-category--cases {
  background-color: #D1FAE5;
  color: #047857;
}

/* ===== Article Updated ===== */
.article-updated {
  font-size: var(--fs-xs);
  color: var(--color-text-muted);
  font-style: italic;
}

/* ===== Responsive ===== */
@media (max-width: 767px) {
  .page-header {
    padding: var(--space-10) 0 var(--space-6);
  }
  
  .project-hero {
    min-height: 50vh;
    padding: var(--space-6) 0;
  }
  
  .article-header {
    padding: var(--space-6) 0;
  }
  
  .cta-box {
    padding: var(--space-6) var(--space-4);
  }
  
  .review-card,
  .project-info-card,
  .case-card__body {
    padding: var(--space-4);
  }
}

@media (min-width: 1024px) {
  .project-info-card {
    position: sticky;
    top: 160px;
  }
}