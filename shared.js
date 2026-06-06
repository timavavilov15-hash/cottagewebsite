<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <!-- SEO Meta Tags -->
  <title>Проекты коттеджей DOMUS VIVA | 214 реализованных домов</title>
  <meta name="description" content="Портфолио построенных коттеджей: 214 проектов в 12 регионах. Одноэтажные, двухэтажные, современные дома. Фотогалереи, планы этажей, отзывы клиентов.">
  <meta name="keywords" content="проекты коттеджей, портфолио строительства, готовые дома, фото коттеджей, одноэтажные дома, двухэтажные коттеджи">
  <meta name="author" content="DOMUS VIVA">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://domusviva.example/projects.html">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Проекты DOMUS VIVA | 214 построенных коттеджей">
  <meta property="og:description" content="Реализованные проекты загородных домов с фотогалереями и отзывами клиентов.">
  <meta property="og:image" content="assets/images/og/projects-cover.jpg">
  <meta property="og:url" content="https://domusviva.example/projects.html">
  <meta property="og:site_name" content="DOMUS VIVA">
  <meta property="og:locale" content="ru_RU">
  
  <!-- Theme Color -->
  <meta name="theme-color" content="#A67C52">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏛️</text></svg>">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  
  <style>
    /* Премиальная дизайн-система (Quiet Luxury) */
    :root {
      --color-bg: #FAF8F5; /* Благородный кремовый / молочный */
      --color-bg-alt: #F3ECE2; /* Мягкий бежево-песочный */
      --color-text-main: #2C2A27; /* Мягкий графит */
      --color-text-muted: #6E6A64;
      --color-accent: #A67C52; /* Золотисто-древесный */
      --color-accent-hover: #8E653C;
      --color-accent-light: #F5EFE6;
      --color-dark: #1E1D1B; /* Почти черный */
      --color-border: #E8E2D9;
      --font-serif: 'Playfair Display', Georgia, serif;
      --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
      --transition-smooth: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Базовый сброс и плавность */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    html {
      scroll-behavior: smooth;
      background-color: var(--color-bg);
      color: var(--color-text-main);
      font-family: var(--font-sans);
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
    }

    body {
      overflow-x: hidden;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Доступность */
    .skip-link {
      position: absolute;
      top: -100px;
      left: 20px;
      background: var(--color-accent);
      color: white;
      padding: 12px 24px;
      z-index: 1000;
      text-decoration: none;
      font-weight: 500;
      transition: var(--transition-smooth);
      border-radius: 4px;
    }
    .skip-link:focus {
      top: 20px;
    }

    /* Индикатор прокрутки */
    .scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: var(--color-accent);
      width: 0%;
      z-index: 1100;
      transition: width 0.1s ease-out;
    }

    /* Шапка сайта */
    .header {
      position: sticky;
      top: 0;
      background: rgba(250, 248, 245, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--color-border);
      z-index: 1000;
      transition: var(--transition-smooth);
    }
    .header__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: var(--color-dark);
      font-family: var(--font-serif);
      font-size: 1.3rem;
      font-weight: 700;
      letter-spacing: 0.1em;
    }
    .logo svg {
      fill: var(--color-accent);
    }
    .nav__list {
      display: flex;
      list-style: none;
      gap: 32px;
    }
    .nav__link {
      text-decoration: none;
      color: var(--color-text-main);
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      transition: var(--transition-smooth);
      position: relative;
      padding: 6px 0;
    }
    .nav__link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--color-accent);
      transition: var(--transition-smooth);
    }
    .nav__link:hover {
      color: var(--color-accent);
    }
    .nav__link:hover::after, 
    .nav__link--active::after {
      width: 100%;
    }
    .nav__link--active {
      color: var(--color-accent);
    }

    .header__actions {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .header__phone {
      text-decoration: none;
      color: var(--color-text-main);
      font-size: 0.9rem;
      font-weight: 600;
      transition: var(--transition-smooth);
    }
    .header__phone:hover {
      color: var(--color-accent);
    }

    /* Выбор языка */
    .lang-switcher {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-text-muted);
    }
    .lang-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--color-text-muted);
      transition: var(--transition-smooth);
    }
    .lang-btn.active {
      color: var(--color-accent);
    }
    .lang-divider {
      color: var(--color-border);
    }

    /* Мобильное меню */
    .mobile-menu {
      position: fixed;
      top: 80px;
      left: 0;
      width: 100%;
      background: var(--color-bg);
      border-bottom: 1px solid var(--color-border);
      padding: 24px;
      display: none;
      flex-direction: column;
      gap: 16px;
      z-index: 999;
    }
    .mobile-menu--open {
      display: flex;
    }
    .mobile-menu .nav__link {
      font-size: 1.1rem;
      padding: 10px 0;
    }

    /* Кнопки */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 14px 28px;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: var(--transition-smooth);
      text-decoration: none;
      gap: 8px;
    }
    .btn--primary {
      background: var(--color-accent);
      color: white;
    }
    .btn--primary:hover {
      background: var(--color-accent-hover);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(166, 124, 82, 0.15);
    }
    .btn--sm {
      padding: 10px 20px;
      font-size: 0.75rem;
    }
    .btn--outline-dark {
      background: transparent;
      border: 1px solid var(--color-dark);
      color: var(--color-dark);
    }
    .btn--outline-dark:hover {
      background: var(--color-dark);
      color: white;
    }
    .btn--outline-light {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.3);
      color: white;
    }
    .btn--outline-light:hover {
      background: white;
      color: var(--color-dark);
      border-color: white;
    }
    .btn--accent {
      background: var(--color-accent-light);
      color: var(--color-accent-hover);
      border: 1px solid rgba(166, 124, 82, 0.3);
    }
    .btn--accent:hover {
      background: var(--color-accent);
      color: white;
    }
    .btn--block {
      width: 100%;
    }

    .burger {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      flex-direction: column;
      gap: 6px;
      width: 24px;
      height: 24px;
      justify-content: center;
    }
    .burger__line {
      display: block;
      width: 100%;
      height: 2px;
      background: var(--color-dark);
      transition: var(--transition-smooth);
    }
    .burger--active .burger__line:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .burger--active .burger__line:nth-child(2) {
      opacity: 0;
    }
    .burger--active .burger__line:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    /* Хлебные крошки */
    .breadcrumbs {
      padding: 32px 0 16px;
    }
    .breadcrumbs__list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      gap: 8px;
      font-size: 0.8rem;
      color: var(--color-text-muted);
    }
    .breadcrumbs__list a {
      text-decoration: none;
      color: var(--color-text-muted);
      transition: var(--transition-smooth);
    }
    .breadcrumbs__list a:hover {
      color: var(--color-accent);
    }
    .breadcrumbs__list li:not(:last-child)::after {
      content: '/';
      margin-left: 8px;
      color: var(--color-border);
    }
    .breadcrumbs__list li[aria-current="page"] {
      color: var(--color-accent);
      font-weight: 500;
    }

    /* Секция Hero */
    .page-header { 
      padding: 48px 0 80px; 
      background: radial-gradient(circle at top right, #F5EFE6 0%, var(--color-bg) 60%); 
    }
    .section__eyebrow {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--color-accent);
      margin-bottom: 12px;
    }
    .page-header__title {
      font-family: var(--font-serif);
      font-size: 4rem;
      line-height: 1.1;
      color: var(--color-dark);
      font-weight: 500;
      margin-bottom: 24px;
    }
    .text-accent {
      color: var(--color-accent);
      font-style: italic;
    }
    .page-header__subtitle {
      font-size: 1.2rem;
      line-height: 1.7;
      color: var(--color-text-muted);
      max-width: 720px;
    }

    /* Интерактивные фильтры и сортировка */
    .portfolio-controls {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 48px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.01);
    }
    .controls-top {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--color-border);
      padding-bottom: 20px;
    }
    .filter-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .filter-tab {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      padding: 8px 18px;
      border-radius: 4px;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--color-text-main);
      cursor: pointer;
      transition: var(--transition-smooth);
    }
    .filter-tab:hover, .filter-tab.active {
      background: var(--color-accent);
      color: white;
      border-color: var(--color-accent);
    }
    
    .sort-box {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .sort-box label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .sort-select {
      padding: 8px 16px;
      border: 1px solid var(--color-border);
      border-radius: 4px;
      font-family: var(--font-sans);
      font-size: 0.9rem;
      color: var(--color-dark);
      background: white;
      outline: none;
      cursor: pointer;
    }
    .sort-select:focus {
      border-color: var(--color-accent);
    }

    .search-box {
      width: 100%;
      position: relative;
    }
    .search-input {
      width: 100%;
      padding: 14px 24px;
      padding-right: 48px;
      border: 1px solid var(--color-border);
      border-radius: 8px;
      font-family: var(--font-sans);
      font-size: 0.95rem;
      color: var(--color-dark);
      outline: none;
      transition: var(--transition-smooth);
    }
    .search-input:focus {
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px rgba(166, 124, 82, 0.1);
    }
    .search-icon {
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--color-text-muted);
      pointer-events: none;
    }

    /* Сетка проектов */
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      margin-bottom: 64px;
    }
    .project-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: var(--transition-smooth);
    }
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(166, 124, 82, 0.08);
      border-color: var(--color-accent);
    }
    .project-card__media {
      height: 240px;
      background: #ECE5DC;
      position: relative;
      overflow: hidden;
    }
    .project-card__media svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition-smooth);
    }
    .project-card:hover .project-card__media svg {
      transform: scale(1.04);
    }
    .project-card__badge {
      position: absolute;
      top: 16px;
      left: 16px;
      background: rgba(250, 248, 245, 0.9);
      backdrop-filter: blur(4px);
      color: var(--color-dark);
      font-size: 0.75rem;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 100px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .project-card__badge--featured {
      background: var(--color-accent);
      color: white;
    }
    .project-card__body {
      padding: 32px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .project-card__title {
      font-family: var(--font-serif);
      font-size: 1.6rem;
      line-height: 1.25;
      color: var(--color-dark);
      margin-bottom: 12px;
    }
    .project-card__specs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--color-border);
      padding-bottom: 20px;
    }
    .spec-item {
      font-size: 0.85rem;
      color: var(--color-text-muted);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .spec-item strong {
      color: var(--color-dark);
    }
    .project-card__desc {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      line-height: 1.6;
      margin-bottom: 24px;
      flex-grow: 1;
    }
    .project-card__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid var(--color-border);
      padding-top: 24px;
    }
    .project-card__price {
      display: flex;
      flex-direction: column;
    }
    .price-label {
      font-size: 0.75rem;
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .price-value {
      font-family: var(--font-serif);
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-dark);
    }

    /* Призыв к действию (CTA) */
    .cta-section {
      background: var(--color-dark);
      padding: 96px 0;
      color: white;
      text-align: center;
    }
    .cta-box h2 {
      font-family: var(--font-serif);
      font-size: 3rem;
      font-weight: 500;
      margin-bottom: 16px;
      line-height: 1.2;
    }
    .cta-box p {
      font-size: 1.15rem;
      color: #A39E95;
      margin-bottom: 40px;
    }
    .cta-box__actions {
      display: flex;
      gap: 16px;
      justify-content: center;
    }

    /* Футер */
    .footer {
      background: var(--color-dark);
      color: #A39E95;
      padding: 80px 0 40px;
      border-top: 1px solid rgba(255,255,255,0.05);
    }
    .footer__grid {
      display: grid;
      grid-template-columns: 1.5fr repeat(3, 1fr);
      gap: 64px;
      margin-bottom: 64px;
      text-align: left;
    }
    .footer__col h4 {
      color: white;
      font-family: var(--font-serif);
      font-size: 1.2rem;
      margin-bottom: 24px;
      font-weight: 500;
    }
    .footer__col ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .footer__col a {
      color: #A39E95;
      text-decoration: none;
      transition: var(--transition-smooth);
      font-size: 0.95rem;
    }
    .footer__col a:hover {
      color: var(--color-accent);
    }
    .footer__about p {
      font-size: 0.95rem;
      line-height: 1.6;
      max-width: 320px;
    }
    .social-links {
      display: flex;
      gap: 16px;
      margin-top: 24px;
    }
    .social-links a {
      color: #A39E95;
      transition: var(--transition-smooth);
      font-size: 14px;
      text-decoration: none;
    }
    .social-links a:hover {
      color: var(--color-accent);
    }
    .footer__bottom {
      border-top: 1px solid rgba(255,255,255,0.05);
      padding-top: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
    }
    .footer__links {
      display: flex;
      gap: 24px;
    }
    .footer__links a {
      color: #A39E95;
      text-decoration: none;
      transition: var(--transition-smooth);
    }
    .footer__links a:hover {
      color: var(--color-accent);
    }

    /* Модальное окно */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    .modal--open {
      opacity: 1;
      pointer-events: all;
    }
    .modal__backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(30, 29, 27, 0.6);
      backdrop-filter: blur(8px);
    }
    .modal__content {
      position: relative;
      background: var(--color-bg);
      width: 100%;
      max-width: 500px;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.15);
      z-index: 2;
      transform: translateY(20px);
      transition: transform 0.3s ease;
      border: 1px solid var(--color-border);
    }
    .modal--open .modal__content {
      transform: translateY(0);
    }
    .modal__close {
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--color-text-muted);
      transition: var(--transition-smooth);
    }
    .modal__close:hover {
      color: var(--color-dark);
    }
    .modal__body h3 {
      font-family: var(--font-serif);
      font-size: 1.8rem;
      color: var(--color-dark);
      margin-bottom: 8px;
    }
    .modal__body p {
      font-size: 0.95rem;
      color: var(--color-text-muted);
      margin-bottom: 24px;
    }

    /* Формы */
    .form-group {
      margin-bottom: 20px;
    }
    .form-group label {
      display: block;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
      color: var(--color-text-main);
    }
    .form-control {
      width: 100%;
      padding: 14px;
      border: 1px solid var(--color-border);
      background: white;
      border-radius: 4px;
      font-family: var(--font-sans);
      font-size: 0.95rem;
      color: var(--color-dark);
      transition: var(--transition-smooth);
    }
    .form-control:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px rgba(166, 124, 82, 0.1);
    }

    /* Всплывающие Toasts */
    .toast-container {
      position: fixed;
      bottom: 32px;
      right: 32px;
      z-index: 2100;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .toast {
      background: var(--color-dark);
      color: white;
      padding: 16px 24px;
      border-radius: 6px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      font-size: 0.9rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 12px;
      transform: translateY(20px);
      opacity: 0;
      animation: toastIn 0.3s forwards;
    }
    @keyframes toastIn {
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    /* Адаптивность сеток */
    @media (max-width: 1024px) {
      .portfolio-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }
      .footer__grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 48px;
      }
    }

    @media (max-width: 768px) {
      .header__inner {
        height: 70px;
      }
      .nav, .header__actions .lang-switcher, .header__actions .header__phone, .header__actions .btn {
        display: none;
      }
      .burger {
        display: flex;
      }
      .controls-top {
        flex-direction: column;
        align-items: flex-start;
      }
      .sort-box {
        width: 100%;
        justify-content: space-between;
      }
      .portfolio-grid {
        grid-template-columns: 1fr;
      }
      .page-header__title {
        font-size: 2.5rem;
      }
      .cta-box__actions {
        flex-direction: column;
        gap: 16px;
      }
      .cta-box__actions .btn {
        width: 100%;
      }
      .footer__grid {
        grid-template-columns: 1fr;
        gap: 32px;
      }
      .footer__bottom {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }
    }
  </style>
</head>
<body class="page-projects">
  
  <!-- Skip Link -->
  <a href="#main-content" class="skip-link">Перейти к основному контенту</a>
  
  <!-- Индикатор прокрутки -->
  <div class="scroll-progress" id="scrollProgress" role="progressbar" aria-label="Прогресс чтения"></div>

  <!-- Header -->
  <header class="header" id="header" role="banner">
    <div class="container header__inner">
      <a href="index.html" class="logo" aria-label="DOMUS VIVA - На главную">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 21V9h6v12" />
        </svg>
        <span class="logo__text">DOMUS VIVA</span>
      </a>
      
      <nav class="nav" id="mainNav" role="navigation" aria-label="Основное меню">
        <ul class="nav__list">
          <li><a href="about.html" class="nav__link">О компании</a></li>
          <li><a href="services.html" class="nav__link">Услуги</a></li>
          <li><a href="projects.html" class="nav__link nav__link--active" aria-current="page">Проекты</a></li>
          <li><a href="blog.html" class="nav__link">Блог</a></li>
          <li><a href="contacts.html" class="nav__link">Контакты</a></li>
        </ul>
      </nav>
      
      <div class="header__actions">
        <div class="lang-switcher" role="group" aria-label="Выбор языка">
          <button class="lang-btn active" data-lang="ru" aria-pressed="true">RU</button>
          <span class="lang-divider">/</span>
          <button class="lang-btn" data-lang="en" aria-pressed="false">EN</button>
        </div>
        <a href="tel:+78005553535" class="header__phone">+7 (800) 555-35-35</a>
        <button class="btn btn--primary btn--sm" data-modal-trigger="consultation">Консультация</button>
        <button class="burger" id="burgerBtn" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobileMenu">
          <span class="burger__line"></span>
          <span class="burger__line"></span>
          <span class="burger__line"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Мобильное меню -->
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html" class="nav__link">Главная</a>
    <a href="about.html" class="nav__link">О компании</a>
    <a href="services.html" class="nav__link">Услуги</a>
    <a href="projects.html" class="nav__link nav__link--active" aria-current="page">Проекты</a>
    <a href="blog.html" class="nav__link">Блог</a>
    <a href="contacts.html" class="nav__link">Контакты</a>
    <button class="btn btn--primary btn--block" style="margin-top: 16px;" data-modal-trigger="consultation">Консультация</button>
  </div>

  <main id="main-content" role="main">
    
    <!-- Breadcrumbs -->
    <nav class="breadcrumbs" aria-label="Хлебные крошки">
      <div class="container">
        <ol class="breadcrumbs__list">
          <li><a href="index.html">Главная</a></li>
          <li aria-current="page">Услуги</li>
        </ol>
      </div>
    </nav>

    <!-- Page Hero -->
    <section class="page-header">
      <div class="container">
        <div class="page-header__content">
          <span class="section__eyebrow">Полный спектр услуг</span>
          <h1 class="page-header__title">Комплексные решения для <span class="text-accent">вашего дома</span></h1>
          <p class="page-header__subtitle">
            От концепции до сдачи «под ключ». Мы предоставляем полный спектр услуг: проектирование, строительство, инженерные системы, ландшафтный дизайн и авторский надзор.
          </p>
        </div>
      </div>
    </section>

    <!-- Сетка услуг -->
    <section class="section portfolio-grid-section" style="padding-top: 48px;">
      <div class="container">
        <div class="portfolio-grid" id="portfolioGrid">
          
          <!-- Проект 1: Белый камень -->
          <article class="project-card" data-category="2-floor" data-area="380" data-name="Белый камень" data-material="кирпич">
            <div class="project-card__media">
              <!-- Векторный фасад "Белый камень" -->
              <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="240" fill="#ECE5DC" />
                <path d="M50 210 H350" stroke="#1E1D1B" stroke-width="2"/>
                <rect x="100" y="90" width="200" height="120" fill="#FAF8F5" stroke="#1E1D1B"/>
                <rect x="130" y="50" width="140" height="40" fill="#A67C52" stroke="#1E1D1B"/>
                <rect x="120" y="120" width="160" height="50" fill="#DFE6E8" stroke="#1E1D1B"/>
              </svg>
              <span class="project-card__badge project-card__badge--featured">VIP Премиум</span>
            </div>
            <div class="project-card__body">
              <h3 class="project-card__title">Резиденция «Белый камень»</h3>
              <div class="project-card__specs">
                <div class="spec-item">📐 <strong>380 м²</strong></div>
                <div class="spec-item">🛌 <strong>6 спален</strong></div>
                <div class="spec-item">🧱 <strong>Кирпич</strong></div>
                <div class="spec-item">층 <strong>2 этажа</strong></div>
              </div>
              <p class="project-card__desc">Элегантная загородная вилла в стиле современной классики. Фасады облицованы натуральным известняком, панорамная зона гостиной со вторым светом.</p>
              <div class="project-card__footer">
                <div class="project-card__price">
                  <span class="price-label">Оценка бюджета</span>
                  <span class="price-value">от 32.3 млн ₽</span>
                </div>
                <button class="btn btn--outline-dark btn--sm" data-modal-trigger="consultation" data-project="Белый камень">Расчет сметы</button>
              </div>
            </div>
          </article>

          <!-- Проект 2: Сосновый бор -->
          <article class="project-card" data-category="1-floor" data-area="186" data-name="Сосновый бор" data-material="газобетон">
            <div class="project-card__media">
              <!-- Векторный фасад "Сосновый бор" -->
              <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="240" fill="#E8E2D9" />
                <path d="M50 200 H350" stroke="#1E1D1B" stroke-width="2"/>
                <rect x="80" y="80" width="240" height="120" fill="#FAF8F5" rx="2" stroke="#1E1D1B"/>
                <polygon points="60,80 200,30 340,80" fill="#A67C52" stroke="#1E1D1B"/>
                <rect x="120" y="110" width="50" height="60" fill="#8E9A86" stroke="#1E1D1B"/>
                <rect x="230" y="110" width="50" height="60" fill="#8E9A86" stroke="#1E1D1B"/>
              </svg>
              <span class="project-card__badge">Популярный</span>
            </div>
            <div class="project-card__body">
              <h3 class="project-card__title">Коттедж «Сосновый бор»</h3>
              <div class="project-card__specs">
                <div class="spec-item">📐 <strong>186 м²</strong></div>
                <div class="spec-item">🛌 <strong>4 спальни</strong></div>
                <div class="spec-item">🧱 <strong>Газобетон</strong></div>
                <div class="spec-item">층 <strong>1 этаж</strong></div>
              </div>
              <p class="project-card__desc">Эргономичный одноэтажный дом с плоской скатной крышей, панорамным остеклением мастер-спальни и просторной деревянной верандой в саду.</p>
              <div class="project-card__footer">
                <div class="project-card__price">
                  <span class="price-label">Оценка бюджета</span>
                  <span class="price-value">от 10.2 млн ₽</span>
                </div>
                <button class="btn btn--outline-dark btn--sm" data-modal-trigger="consultation" data-project="Сосновый бор">Расчет сметы</button>
              </div>
            </div>
          </article>

          <!-- Проект 3: Горизонт -->
          <article class="project-card" data-category="high-tech" data-area="290" data-name="Горизонт" data-material="монолит">
            <div class="project-card__media">
              <!-- Векторный фасад "Горизонт" -->
              <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="240" fill="#DCDDD5" />
                <path d="M40 200 H360" stroke="#1E1D1B" stroke-width="2"/>
                <rect x="80" y="100" width="160" height="100" fill="#FAF8F5" stroke="#1E1D1B"/>
                <rect x="210" y="70" width="120" height="80" fill="#1E1D1B" opacity="0.8" stroke="#FAF8F5" stroke-width="1.5"/>
                <rect x="100" y="120" width="100" height="50" fill="#DFE6E8"/>
              </svg>
              <span class="project-card__badge">Хай-тек</span>
            </div>
            <div class="project-card__body">
              <h3 class="project-card__title">Резиденция «Горизонт»</h3>
              <div class="project-card__specs">
                <div class="spec-item">📐 <strong>290 м²</strong></div>
                <div class="spec-item">🛌 <strong>5 спален</strong></div>
                <div class="spec-item">🧱 <strong>Монолит</strong></div>
                <div class="spec-item">층 <strong>2 этажа</strong></div>
              </div>
              <p class="project-card__desc">Минималистичная хай-тек вилла с плоской эксплуатируемой кровлей. Фасад выполнен из архитектурного бетона и планкена лиственницы.</p>
              <div class="project-card__footer">
                <div class="project-card__price">
                  <span class="price-label">Оценка бюджета</span>
                  <span class="price-value">от 24.6 млн ₽</span>
                </div>
                <button class="btn btn--outline-dark btn--sm" data-modal-trigger="consultation" data-project="Горизонт">Расчет сметы</button>
              </div>
            </div>
          </article>

          <!-- Проект 4: Терракота -->
          <article class="project-card" data-category="2-floor" data-area="165" data-name="Терракота" data-material="кирпич">
            <div class="project-card__media">
              <!-- Векторный фасад "Терракота" -->
              <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="240" fill="#E6DDD5" />
                <path d="M50 200 H350" stroke="#1E1D1B" stroke-width="2"/>
                <rect x="90" y="100" width="220" height="100" fill="#FAF8F5" stroke="#1E1D1B" rx="4"/>
                <polygon points="70,100 200,40 330,100" fill="#D27D2D" stroke="#1E1D1B"/>
                <rect x="170" y="130" width="60" height="70" fill="#C4A482" stroke="#1E1D1B"/>
              </svg>
              <span class="project-card__badge">Уютный</span>
            </div>
            <div class="project-card__body">
              <h3 class="project-card__title">Коттедж «Терракота»</h3>
              <div class="project-card__specs">
                <div class="spec-item">📐 <strong>165 м²</strong></div>
                <div class="spec-item">🛌 <strong>3 спальни</strong></div>
                <div class="spec-item">🧱 <strong>Кирпич</strong></div>
                <div class="spec-item">층 <strong>2 этажа</strong></div>
              </div>
              <p class="project-card__desc">Классический компактный семейный коттедж. Терракотовая гамма кирпичной облицовки идеально сочетается с контрастным фальцевым остеклением.</p>
              <div class="project-card__footer">
                <div class="project-card__price">
                  <span class="price-label">Оценка бюджета</span>
                  <span class="price-value">от 9.1 млн ₽</span>
                </div>
                <button class="btn btn--outline-dark btn--sm" data-modal-trigger="consultation" data-project="Терракота">Расчет сметы</button>
              </div>
            </div>
          </article>

          <!-- Проект 5: Альпийское шале -->
          <article class="project-card" data-category="chalet" data-area="245" data-name="Шале Эдельвейс" data-material="монолит">
            <div class="project-card__media">
              <!-- Векторный фасад "Шале" -->
              <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="240" fill="#ECE5DC" />
                <path d="M30 200 H370" stroke="#1E1D1B" stroke-width="2"/>
                <!-- Нижний каменный этаж -->
                <rect x="80" y="120" width="240" height="80" fill="#8D8C8A" stroke="#1E1D1B" stroke-width="1.5"/>
                <!-- Верхний деревянный этаж -->
                <rect x="90" y="70" width="220" height="50" fill="#C4A482" stroke="#1E1D1B" stroke-width="1.5"/>
                <polygon points="70,70 200,20 330,70" fill="#A67C52" stroke="#1E1D1B" stroke-width="1.5"/>
              </svg>
              <span class="project-card__badge">Шале</span>
            </div>
            <div class="project-card__body">
              <h3 class="project-card__title">Вилла «Шале Эдельвейс»</h3>
              <div class="project-card__specs">
                <div class="spec-item">📐 <strong>245 м²</strong></div>
                <div class="spec-item">🛌 <strong>4 спальни</strong></div>
                <div class="spec-item">🧱 <strong>Комбинированный</strong></div>
                <div class="spec-item">층 <strong>2 этажа</strong></div>
              </div>
              <p class="project-card__desc">Традиционное комбинированное шале: первый этаж из монолитного бетона с отделкой диким камнем, второй — из клееного бруса сибирского кедра.</p>
              <div class="project-card__footer">
                <div class="project-card__price">
                  <span class="price-label">Оценка бюджета</span>
                  <span class="price-value">от 18.4 млн ₽</span>
                </div>
                <button class="btn btn--outline-dark btn--sm" data-modal-trigger="consultation" data-project="Шале Эдельвейс">Расчет сметы</button>
              </div>
            </div>
          </article>

          <!-- Проект 6: Одноэтажная Норвегия -->
          <article class="project-card" data-category="1-floor" data-area="120" data-name="Норвегия" data-material="газобетон">
            <div class="project-card__media">
              <!-- Векторный фасад "Норвегия" -->
              <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="240" fill="#FAF8F5" />
                <path d="M50 200 H350" stroke="#1E1D1B" stroke-width="2"/>
                <rect x="100" y="110" width="200" height="90" fill="#E6DFD3" stroke="#1E1D1B" stroke-width="1.5" rx="2"/>
                <polygon points="80,110 200,60 320,110" fill="#2C2A27" stroke="#1E1D1B" stroke-width="1.5"/>
              </svg>
              <span class="project-card__badge">Компактный</span>
            </div>
            <div class="project-card__body">
              <h3 class="project-card__title">Коттедж «Норвегия»</h3>
              <div class="project-card__specs">
                <div class="spec-item">📐 <strong>120 м²</strong></div>
                <div class="spec-item">🛌 <strong>3 спальни</strong></div>
                <div class="spec-item">🧱 <strong>Газобетон</strong></div>
                <div class="spec-item">층 <strong>1 этаж</strong></div>
              </div>
              <p class="project-card__desc">Минималистичный скандинавский дом с умной планировкой без коридоров. Просторная кухня-гостиная с выходом на уютное крытое крыльцо.</p>
              <div class="project-card__footer">
                <div class="project-card__price">
                  <span class="price-label">Оценка бюджета</span>
                  <span class="price-value">от 7.2 млн ₽</span>
                </div>
                <button class="btn btn--outline-dark btn--sm" data-modal-trigger="consultation" data-project="Норвегия">Расчет сметы</button>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- Секция призыва к действию (CTA) -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Желаете обсудить индивидуальный проект?</h2>
          <p>Запишитесь на бесплатную консультацию с архитектором. Мы подробно обсудим планировку, подберем премиальные материалы и подготовим смету.</p>
          <div class="cta-box__actions">
            <button class="btn btn--accent btn--lg" data-modal-trigger="consultation">Бесплатная консультация</button>
            <a href="calculator.html" class="btn btn--outline-light btn--lg">Онлайн калькулятор</a>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__col footer__about">
          <a href="index.html" class="logo" style="color: white; text-decoration: none; display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="fill: transparent;">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 21V9h6v12" />
            </svg>
            <span class="logo__text" style="color: white;">DOMUS VIVA</span>
          </a>
          <p>Премиальное индивидуальное проектирование и строительство коттеджей с 2014 года. Гарантия стабильности и эстетики.</p>
          <div class="social-links">
            <a href="https://vk.com/domusviva" aria-label="VKontakte">VK</a>
            <a href="https://t.me/domusviva" aria-label="Telegram">TG</a>
          </div>
        </div>
        
        <div class="footer__col">
          <h4>Компания</h4>
          <ul>
            <li><a href="about.html">О нас</a></li>
            <li><a href="services.html">Услуги</a></li>
            <li><a href="projects.html">Наши проекты</a></li>
            <li><a href="blog.html">Блог архитекторов</a></li>
            <li><a href="contacts.html">Контакты</a></li>
          </ul>
        </div>
        
        <div class="footer__col">
          <h4>Услуги</h4>
          <ul>
            <li><a href="services.html#design">Проектирование</a></li>
            <li><a href="services.html#build">Строительство</a></li>
            <li><a href="services.html#engineering">Инженерия</a></li>
            <li><a href="services.html#landscape">Ландшафт</a></li>
            <li><a href="services.html#interior">Дизайн интерьера</a></li>
          </ul>
        </div>
        
        <div class="footer__col footer__contacts">
          <h4>Контакты</h4>
          <p style="margin-bottom: 12px;"><a href="tel:+78005553535" style="color: white; font-weight: 600; text-decoration: none;">+7 (800) 555-35-35</a></p>
          <p style="margin-bottom: 12px;"><a href="mailto:info@domusviva.ru">info@domusviva.ru</a></p>
          <p>Москва, ул. Архитекторов, 12</p>
        </div>
      </div>
      
      <div class="footer__bottom">
        <p>&copy; 2026 DOMUS VIVA. Все права защищены. Премиальное загородное строительство.</p>
        <div class="footer__links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Карта сайта</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Интерактивное модальное окно обратной связи -->
  <div class="modal" id="consultationModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal__backdrop" data-close-modal></div>
    <div class="modal__content">
      <button class="modal__close" data-close-modal aria-label="Закрыть">✕</button>
      <div class="modal__body">
        <h3 id="modalTitle">Запросить расчет сметы</h3>
        <p>Заполните контактную форму ниже, и архитектор-эксперт DOMUS VIVA свяжется с вами в течение 15 минут.</p>
        
        <form id="consultationForm">
          <div class="form-group">
            <label for="clientName">Ваше имя *</label>
            <input type="text" id="clientName" class="form-control" placeholder="Александр" required>
          </div>
          <div class="form-group">
            <label for="clientPhone">Номер телефона *</label>
            <input type="tel" id="clientPhone" class="form-control" placeholder="+7 (999) 123-45-67" required>
          </div>
          <div class="form-group">
            <label for="clientMessage">Ваш комментарий к проекту</label>
            <textarea id="clientMessage" class="form-control" rows="3" placeholder="Расскажите о ваших планах на строительство..."></textarea>
          </div>
          <button type="submit" class="btn btn--primary" style="width: 100%;">Отправить запрос</button>
        </form>
      </div>
    </div>
  </div>

  <div class="toast-container" id="toastContainer"></div>

  <!-- Scripts -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      
      // 1. Прогресс чтения вверху страницы
      const scrollProgress = document.getElementById('scrollProgress');
      window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
      });

      // 2. Бургер-меню (адаптивная мобильная навигация)
      const burgerBtn = document.getElementById('burgerBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      burgerBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('mobile-menu--open');
        burgerBtn.classList.toggle('burger--active');
        burgerBtn.setAttribute('aria-expanded', isOpen);
      });

      // 3. Работа с модальным окном
      const modal = document.getElementById('consultationModal');
      const openModalTriggers = document.querySelectorAll('[data-modal-trigger="consultation"]');
      const closeModalElements = document.querySelectorAll('[data-close-modal]');
      const clientMessageTextarea = document.getElementById('clientMessage');

      function openModal(e) {
        // Подставим выбранный проект в комментарий
        const project = e.currentTarget.getAttribute('data-project');
        if (project) {
          clientMessageTextarea.value = `Интересует расчет сметы по проекту «${project}».`;
        } else {
          clientMessageTextarea.value = '';
        }
        
        modal.classList.add('modal--open');
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        modal.classList.remove('modal--open');
        document.body.style.overflow = '';
      }

      openModalTriggers.forEach(trigger => trigger.addEventListener('click', openModal));
      closeModalElements.forEach(el => el.addEventListener('click', closeModal));

      // Закрытие модального по кнопке Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
          closeModal();
        }
      });

      // 4. Отправка формы консультации
      const form = document.getElementById('consultationForm');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        closeModal();
        showToast('✓ Благодарим! Заявка успешно принята. Архитектор DOMUS VIVA свяжется с вами.');
        form.reset();
      });

      // 5. Тост-уведомления
      const toastContainer = document.getElementById('toastContainer');
      function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
          toast.style.animation = 'toastIn 0.3s reverse forwards';
          setTimeout(() => toast.remove(), 300);
        }, 5000);
      }

      // 6. Скрипт фильтрации, поиска и сортировки проектов
      const portfolioGrid = document.getElementById('portfolioGrid');
      const projectCards = Array.from(portfolioGrid.querySelectorAll('.project-card'));
      const filterTabs = document.querySelectorAll('.filter-tab');
      const searchInput = document.getElementById('searchInput');
      const sortSelect = document.getElementById('sortSelect');

      let activeFilter = 'all';
      let searchQuery = '';

      function updatePortfolio() {
        let visibleCards = [];

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          const name = card.getAttribute('data-name').toLowerCase();
          const material = card.getAttribute('data-material').toLowerCase();
          const specs = card.querySelector('.project-card__specs').textContent.toLowerCase();

          const matchesFilter = (activeFilter === 'all' || category === activeFilter);
          const matchesSearch = (name.includes(searchQuery) || material.includes(searchQuery) || specs.includes(searchQuery));

          if (matchesFilter && matchesSearch) {
            card.style.display = 'flex';
            visibleCards.push(card);
          } else {
            card.style.display = 'none';
          }
        });

        // Сортировка отфильтрованных карт
        const sortValue = sortSelect.value;
        if (sortValue !== 'default') {
          visibleCards.sort((a, b) => {
            const areaA = parseInt(a.getAttribute('data-area'));
            const areaB = parseInt(b.getAttribute('data-area'));
            return sortValue === 'area-asc' ? areaA - areaB : areaB - areaA;
          });

          // Перерисовываем элементы в гриде в нужном порядке
          visibleCards.forEach(card => portfolioGrid.appendChild(card));
        }

        // Если ничего не найдено
        const existingNoResults = document.getElementById('portfolioNoResults');
        if (visibleCards.length === 0) {
          if (!existingNoResults) {
            const noResults = document.createElement('div');
            noResults.id = 'portfolioNoResults';
            noResults.style.gridColumn = '1 / -1';
            noResults.style.textAlign = 'center';
            noResults.style.padding = '48px 24px';
            noResults.style.fontFamily = 'var(--font-serif)';
            noResults.style.fontSize = '1.25rem';
            noResults.style.color = 'var(--color-text-muted)';
            noResults.textContent = 'К сожалению, ни один проект не соответствует выбранным критериям.';
            portfolioGrid.appendChild(noResults);
          }
        } else if (existingNoResults) {
          existingNoResults.remove();
        }
      }

      // Слушатели событий
      filterTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
          filterTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          activeFilter = tab.getAttribute('data-filter');
          updatePortfolio();
        });
      });

      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        updatePortfolio();
      });

      sortSelect.addEventListener('change', () => {
        updatePortfolio();
      });

      // Переключение языка
      const langButtons = document.querySelectorAll('.lang-btn');
      const STORAGE_KEY = 'domus-viva-lang';
      
      function getCurrentLanguage() {
        return localStorage.getItem(STORAGE_KEY) || 'ru';
      }

      function setLanguage(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
        langButtons.forEach(btn => {
          const isActive = btn.getAttribute('data-lang') === lang;
          btn.classList.toggle('active', isActive);
          btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
      }

      langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          setLanguage(lang);
        });
      });

      // Инициализировать активный язык
      const currentLang = getCurrentLanguage();
      setLanguage(currentLang);
    });
  </script>
</body>
</html>