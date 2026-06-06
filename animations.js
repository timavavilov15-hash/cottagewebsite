/* ============================================
   DOMUS VIVA — Animations
   Все keyframes, transitions, scroll-эффекты
   ============================================ */

/* === Переменные анимаций === */
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  
  --duration-fast: 150ms;
  --duration-normal: 280ms;
  --duration-slow: 500ms;
  --duration-slower: 800ms;
}

/* ============================================
   KEYFRAMES — все анимации в одном месте
   ============================================ */

/* === Базовые fade-анимации === */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* === Scale-анимации === */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes scaleOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}

/* === Slide-анимации === */
@keyframes slideInUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

@keyframes slideInDown {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}

@keyframes slideInLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

/* === Циклические анимации === */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes pulse-soft {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes rotate-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* === Специальные эффекты === */
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(20px, -30px) scale(1.05);
  }
  66% {
    transform: translate(-15px, 20px) scale(0.95);
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes skeleton {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px var(--color-accent-light);
  }
  50% {
    box-shadow: 0 0 20px var(--color-accent);
  }
}

@keyframes scrollWheel {
  0%, 100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  50% {
    opacity: 0.5;
    transform: translateX(-50%) translateY(10px);
  }
}

@keyframes priceUpdate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
    color: #FFD700;
  }
  100% {
    transform: scale(1);
  }
}

/* ============================================
   REVEAL ON SCROLL — scroll-triggered анимации
   ============================================ */

/* Базовый класс reveal */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity var(--duration-slow) var(--ease-out),
    transform var(--duration-slow) var(--ease-out);
  will-change: opacity, transform;
}

.reveal--active {
  opacity: 1;
  transform: translateY(0);
}

/* Варианты появления */
.reveal--from-left {
  transform: translateX(-30px);
}

.reveal--from-left.reveal--active {
  transform: translateX(0);
}

.reveal--from-right {
  transform: translateX(30px);
}

.reveal--from-right.reveal--active {
  transform: translateX(0);
}

.reveal--scale {
  transform: scale(0.95);
}

.reveal--scale.reveal--active {
  transform: scale(1);
}

.reveal--fade {
  transform: none;
}

/* Задержки для каскадного появления */
.reveal--delay-1 { transition-delay: 100ms; }
.reveal--delay-2 { transition-delay: 200ms; }
.reveal--delay-3 { transition-delay: 300ms; }
.reveal--delay-4 { transition-delay: 400ms; }
.reveal--delay-5 { transition-delay: 500ms; }
.reveal--delay-6 { transition-delay: 600ms; }

/* Алиасы для совместимости с анимированной версией */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s var(--ease-out);
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.section-animate {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s var(--ease-out);
}

.section-animate.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ============================================
   HOVER EFFECTS — эффекты при наведении
   ============================================ */

/* Подъём вверх */
.hover-lift {
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Увеличение */
.hover-scale {
  transition: transform var(--duration-normal) var(--ease-out);
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Поворот */
.hover-rotate {
  transition: transform var(--duration-normal) var(--ease-out);
}

.hover-rotate:hover {
  transform: rotate(5deg);
}

/* Свечение */
.hover-glow {
  transition: box-shadow var(--duration-normal) var(--ease-out);
}

.hover-glow:hover {
  box-shadow: 0 8px 32px rgba(166, 124, 82, 0.3);
}

/* Блик на кнопках */
.btn-animated {
  position: relative;
  overflow: hidden;
}

.btn-animated::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.6s var(--ease-out);
  pointer-events: none;
}

.btn-animated:hover::before {
  left: 100%;
}

/* ============================================
   TEXT EFFECTS — текстовые эффекты
   ============================================ */

/* Переливающийся градиент */
.text-gradient {
  background: linear-gradient(
    135deg,
    var(--color-accent) 0%,
    var(--color-accent-dark) 50%,
    var(--color-accent) 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 6s ease infinite;
}

/* ============================================
   COMPONENT ANIMATIONS — компонентные анимации
   ============================================ */

/* Счётчики */
.counter {
  font-variant-numeric: tabular-nums;
  display: inline-block;
}

.counter.animated {
  animation: fadeInUp 0.6s var(--ease-out);
}

/* Индикатор прокрутки */
.hero__scroll-indicator {
  animation: bounce-subtle 2s ease-in-out infinite;
}

.hero__scroll-indicator::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  width: 3px;
  height: 8px;
  background-color: currentColor;
  border-radius: 2px;
  transform: translateX(-50%);
  animation: scrollWheel 2s ease-in-out infinite;
}

/* Плавающие декоративные элементы */
.floating-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  pointer-events: none;
  z-index: 0;
}

.floating-shape--1 {
  animation: float 10s ease-in-out infinite;
}

.floating-shape--2 {
  animation: float 12s ease-in-out infinite reverse;
}

.floating-shape--3 {
  animation: float 15s ease-in-out infinite;
  animation-delay: -5s;
}

/* Бегущая строка */
.marquee {
  overflow: hidden;
  white-space: nowrap;
}

.marquee__track {
  display: inline-flex;
  gap: var(--space-8);
  animation: marquee 30s linear infinite;
}

.marquee--slow .marquee__track {
  animation-duration: 60s;
}

.marquee--fast .marquee__track {
  animation-duration: 15s;
}

.marquee--reverse .marquee__track {
  animation-direction: reverse;
}

/* Прелоадер */
.preloader__spinner {
  width: 48px;
  height: 48px;
  border: 3px solid var(--color-accent-light);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* Skeleton loading */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg-alt) 0%,
    var(--color-border) 50%,
    var(--color-bg-alt) 100%
  );
  background-size: 200% 100%;
  animation: skeleton 1.5s ease-in-out infinite;
  border-radius: var(--radius-md);
}

/* Обновление цены в калькуляторе */
.calc-result__value.animate {
  animation: priceUpdate 0.5s var(--ease-bounce);
}

/* ============================================
   SLIDER ANIMATIONS — анимации слайдеров
   ============================================ */

/* Карусель отзывов */
.testimonials__track {
  display: flex;
  transition: transform var(--duration-slow) var(--ease-out);
  will-change: transform;
}

.testimonial-card {
  flex: 0 0 100%;
  padding: 0 var(--space-5);
}

/* Слайдер-кнопки */
.slider-btn {
  width: 48px;
  height: 48px;
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
  font-size: 20px;
  color: var(--color-text);
}

.slider-btn:hover {
  background-color: var(--color-accent);
  color: var(--color-white);
  border-color: var(--color-accent);
  transform: scale(1.1);
}

/* Точки слайдера */
.slider-dot {
  width: 10px;
  height: 10px;
  background-color: var(--color-border);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.slider-dot--active {
  background-color: var(--color-accent);
  width: 30px;
  border-radius: var(--radius-full);
}

/* ============================================
   MODAL ANIMATIONS — анимации модалок
   ============================================ */

.modal {
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--duration-normal) var(--ease-out),
              visibility var(--duration-normal) var(--ease-out);
}

.modal--active {
  opacity: 1;
  visibility: visible;
}

.modal__backdrop {
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

.modal__content {
  animation: scaleIn var(--duration-normal) var(--ease-bounce);
}

/* ============================================
   TOAST ANIMATIONS — анимации уведомлений
   ============================================ */

.toast {
  transform: translateX(calc(100% + 40px));
  transition: transform var(--duration-normal) var(--ease-out);
}

.toast--active {
  transform: translateX(0);
}

/* ============================================
   FAQ ANIMATIONS — анимации аккордеона
   ============================================ */

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--duration-normal) var(--ease-out);
}

.faq-item--open .faq-answer {
  max-height: 500px;
}

.faq-question__icon::after {
  transition: transform var(--duration-normal) var(--ease-out);
}

.faq-item--open .faq-question__icon::after {
  transform: translateX(-50%) rotate(90deg);
  opacity: 0;
}

/* ============================================
   CARD ANIMATIONS — анимации карточек
   ============================================ */

/* Карточки услуг */
.service-card {
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.service-card:hover .service-card__media img {
  transform: scale(1.08);
}

/* Карточки проектов */
.project-card {
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.project-card:hover .project-card__media img {
  transform: scale(1.08);
}

/* Карточки блога */
.blog-card {
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.blog-card:hover .blog-card__media img {
  transform: scale(1.06);
}

/* ============================================
   PARALLAX — параллакс-эффект
   ============================================ */

.parallax {
  will-change: transform;
}

.parallax--slow {
  transition: transform 0.3s var(--ease-out);
}

.parallax--medium {
  transition: transform 0.2s var(--ease-out);
}

.parallax--fast {
  transition: transform 0.1s var(--ease-out);
}

/* ============================================
   PAGE TRANSITIONS — переходы между страницами
   ============================================ */

.page-transition {
  position: fixed;
  inset: 0;
  background-color: var(--color-bg);
  z-index: 9998;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s var(--ease-out);
}

.page-transition--active {
  opacity: 1;
  pointer-events: all;
}

/* ============================================
   UTILITY CLASSES — утилитарные классы
   ============================================ */

/* Быстрые анимации */
.animate-fade-in {
  animation: fadeIn var(--duration-slow) var(--ease-out);
}

.animate-fade-in-up {
  animation: fadeInUp var(--duration-slow) var(--ease-out);
}

.animate-scale-in {
  animation: scaleIn var(--duration-slow) var(--ease-out);
}

.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

/* Loading states */
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

/* ============================================
   ACCESSIBILITY — поддержка prefers-reduced-motion
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .reveal,
  .fade-in,
  .slide-in-left,
  .section-animate {
    opacity: 1;
    transform: none;
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
  
  .text-gradient {
    animation: none;
  }
}

/* ============================================
   PERFORMANCE OPTIMIZATION
   ============================================ */

/* GPU-ускорение для тяжёлых анимаций */
.will-change-transform {
  will-change: transform;
}

.will-change-opacity {
  will-change: opacity;
}

/* Отключение will-change после анимации */
.reveal--active {
  will-change: auto;
}

/* ============================================
   DEBUG MODE (development only)
   ============================================ */

/*
.debug-animations * {
  outline: 1px solid red !important;
  animation-duration: 5s !important;
}
*/