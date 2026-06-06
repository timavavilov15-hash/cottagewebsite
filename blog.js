<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <!-- SEO Meta Tags -->
  <title>Блог DOMUS VIVA | Экспертные статьи о строительстве коттеджей</title>
  <meta name="description" content="Полезные статьи о строительстве загородных домов: выбор материалов, энергоэффективность, дизайн интерьера, умный дом, ландшафт. Экспертные материалы от архитекторов DOMUS VIVA.">
  <meta name="keywords" content="блог о строительстве, статьи о коттеджах, строительство дома, материалы для дома, дизайн интерьера, умный дом, энергоэффективность">
  <meta name="author" content="DOMUS VIVA">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://domusviva.example/blog.html">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Блог DOMUS VIVA | Экспертные статьи о строительстве">
  <meta property="og:description" content="Технологии, дизайн, советы — всё о строительстве премиальных коттеджей от экспертов с 12-летним опытом.">
  <meta property="og:image" content="assets/images/og/blog-cover.jpg">
  <meta property="og:url" content="https://domusviva.example/blog.html">
  <meta property="og:site_name" content="DOMUS VIVA">
  <meta property="og:locale" content="ru_RU">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Блог DOMUS VIVA | Статьи о строительстве">
  <meta name="twitter:description" content="Экспертные материалы о коттеджах: технологии, материалы, дизайн.">
  <meta name="twitter:image" content="assets/images/og/blog-cover.jpg">
  
  <!-- Theme Color -->
  <meta name="theme-color" content="#A67C52">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏛️</text></svg>">
  
  <!-- Fonts Preconnect -->
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

    /* Разделы */
    .section {
      padding: 96px 0;
    }
    .bg-alt {
      background-color: var(--color-bg-alt);
    }
    .section__header {
      margin-bottom: 48px;
    }

    /* Выделенная статья */
    .blog-featured-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      box-shadow: 0 10px 40px rgba(0,0,0,0.02);
      transition: var(--transition-smooth);
    }
    .blog-featured-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 15px 45px rgba(166, 124, 82, 0.08);
      border-color: var(--color-accent);
    }
    .blog-featured-card__media {
      position: relative;
      background: var(--color-accent-light);
      display: block;
      height: 100%;
    }
    .blog-featured-card__media svg {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
    .blog-featured-card__badge {
      position: absolute;
      top: 24px;
      left: 24px;
      background: var(--color-accent);
      color: white;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 6px 16px;
      border-radius: 100px;
    }
    .blog-featured-card__body {
      padding: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .blog-featured-card__meta {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 0.8rem;
      color: var(--color-text-muted);
      margin-bottom: 24px;
    }
    .blog-category {
      background: var(--color-accent-light);
      color: var(--color-accent-hover);
      padding: 4px 12px;
      border-radius: 100px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .blog-category--tech { background: #EAEFF2; color: #4A6E80; }
    .blog-category--design { background: #F3EAEF; color: #804A6E; }
    .blog-category--tips { background: #F2EFEA; color: #73614A; }
    .blog-category--cases { background: #EAF2EA; color: #4A804A; }

    .blog-featured-card__title {
      font-family: var(--font-serif);
      font-size: 2.2rem;
      line-height: 1.25;
      margin-bottom: 16px;
    }
    .blog-featured-card__title a {
      color: var(--color-dark);
      text-decoration: none;
      transition: var(--transition-smooth);
    }
    .blog-featured-card__title a:hover {
      color: var(--color-accent);
    }
    .blog-featured-card__excerpt {
      font-size: 1rem;
      color: var(--color-text-muted);
      line-height: 1.6;
      margin-bottom: 32px;
    }
    .blog-featured-card__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid var(--color-border);
      padding-top: 24px;
    }
    .blog-author {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .blog-author svg {
      border-radius: 50%;
      background: var(--color-accent-light);
      flex-shrink: 0;
    }
    .blog-author d {
      display: block;
    }
    .blog-author strong {
      display: block;
      font-size: 0.9rem;
      color: var(--color-dark);
    }
    .blog-author span {
      display: block;
      font-size: 0.75rem;
      color: var(--color-text-muted);
    }

    /* Макет блога: Контент + Сайдбар */
    .blog-layout {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
    }
    @media (min-width: 1024px) {
      .blog-layout {
        grid-template-columns: 1fr 320px;
        gap: 60px;
      }
    }

    .blog-content__header {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 32px;
      border-bottom: 1px solid var(--color-border);
      padding-bottom: 24px;
    }
    .blog-content__title {
      font-family: var(--font-serif);
      font-size: 2.2rem;
      color: var(--color-dark);
      font-weight: 500;
    }
    .blog-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .filter-btn {
      background: white;
      border: 1px solid var(--color-border);
      padding: 10px 20px;
      border-radius: 4px;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--color-text-main);
      cursor: pointer;
      transition: var(--transition-smooth);
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .filter-btn:hover, .filter-btn--active {
      border-color: var(--color-accent);
      color: var(--color-accent);
      background: var(--color-accent-light);
    }
    .filter-count {
      opacity: 0.6;
      font-size: 0.75rem;
    }

    /* Сетка карточек */
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }
    .blog-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: var(--transition-smooth);
    }
    .blog-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(166, 124, 82, 0.05);
      border-color: var(--color-accent);
    }
    .blog-card__media {
      height: 220px;
      background: var(--color-accent-light);
      position: relative;
      overflow: hidden;
      display: block;
    }
    .blog-card__media svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition-smooth);
    }
    .blog-card:hover .blog-card__media svg {
      transform: scale(1.04);
    }
    .blog-card__media .blog-category {
      position: absolute;
      top: 16px;
      left: 16px;
    }
    .blog-card__body {
      padding: 24px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .blog-card__meta {
      display: flex;
      gap: 12px;
      font-size: 0.75rem;
      color: var(--color-text-muted);
      margin-bottom: 12px;
    }
    .blog-card h3 {
      font-family: var(--font-serif);
      font-size: 1.4rem;
      line-height: 1.35;
      margin-bottom: 12px;
      font-weight: 600;
    }
    .blog-card h3 a {
      color: var(--color-dark);
      text-decoration: none;
      transition: var(--transition-smooth);
    }
    .blog-card h3 a:hover {
      color: var(--color-accent);
    }
    .blog-card p {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      line-height: 1.5;
      margin-bottom: 24px;
      flex-grow: 1;
    }
    .blog-card__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid var(--color-border);
      padding-top: 16px;
    }
    .blog-author--small strong {
      font-size: 0.85rem;
    }
    .blog-author--small span {
      font-size: 0.7rem;
    }
    .blog-card__link {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-accent);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: var(--transition-smooth);
    }
    .blog-card__link:hover {
      color: var(--color-accent-hover);
    }

    /* Пагинация */
    .blog-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin-top: 48px;
    }
    .pagination-btn {
      background: white;
      border: 1px solid var(--color-border);
      width: 40px;
      height: 40px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--color-text-main);
      transition: var(--transition-smooth);
    }
    .pagination-btn:hover:not(:disabled), .pagination-btn--active {
      background: var(--color-accent);
      color: white;
      border-color: var(--color-accent);
    }
    .pagination-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .pagination-dots {
      color: var(--color-text-muted);
      font-size: 0.9rem;
      padding: 0 4px;
    }

    /* Сайдбар */
    .blog-sidebar {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    .sidebar-widget {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 24px;
    }
    .sidebar-widget__title {
      font-family: var(--font-serif);
      font-size: 1.25rem;
      color: var(--color-dark);
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--color-border);
    }
    .sidebar-search {
      display: flex;
      border: 1px solid var(--color-border);
      border-radius: 4px;
      overflow: hidden;
      background: white;
      transition: var(--transition-smooth);
    }
    .sidebar-search:focus-within {
      border-color: var(--color-accent);
    }
    .sidebar-search input {
      flex: 1;
      border: none;
      padding: 12px 16px;
      font-family: var(--font-sans);
      font-size: 0.9rem;
      outline: none;
      color: var(--color-dark);
    }
    .sidebar-search button {
      background: none;
      border: none;
      padding: 0 16px;
      cursor: pointer;
      color: var(--color-text-muted);
      transition: var(--transition-smooth);
    }
    .sidebar-search button:hover {
      color: var(--color-accent);
    }

    .sidebar-categories {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .sidebar-category {
      display: flex;
      justify-content: space-between;
      text-decoration: none;
      color: var(--color-text-main);
      font-size: 0.9rem;
      font-weight: 500;
      transition: var(--transition-smooth);
    }
    .sidebar-category:hover {
      color: var(--color-accent);
      padding-left: 4px;
    }
    .sidebar-category__count {
      color: var(--color-text-muted);
      font-size: 0.8rem;
    }

    .sidebar-popular {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .sidebar-article {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .sidebar-article__image {
      width: 64px;
      height: 64px;
      border-radius: 6px;
      overflow: hidden;
      flex-shrink: 0;
      background: var(--color-accent-light);
    }
    .sidebar-article__image svg {
      width: 100%;
      height: 100%;
    }
    .sidebar-article__content h4 {
      font-family: var(--font-serif);
      font-size: 0.85rem;
      line-height: 1.4;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .sidebar-article__content h4 a {
      color: var(--color-dark);
      text-decoration: none;
      transition: var(--transition-smooth);
    }
    .sidebar-article__content h4 a:hover {
      color: var(--color-accent);
    }
    .sidebar-article__content time {
      font-size: 0.75rem;
      color: var(--color-text-muted);
    }

    .sidebar-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .sidebar-tag {
      text-decoration: none;
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      color: var(--color-text-muted);
      padding: 6px 12px;
      border-radius: 100px;
      font-size: 0.8rem;
      transition: var(--transition-smooth);
    }
    .sidebar-tag:hover {
      border-color: var(--color-accent);
      color: var(--color-accent);
      background: var(--color-accent-light);
    }

    /* Форма рассылки */
    .sidebar-widget--newsletter {
      background: var(--color-accent-light);
      border: 1px solid rgba(166, 124, 82, 0.2);
    }
    .newsletter-box {
      text-align: center;
    }
    .newsletter-box__icon {
      color: var(--color-accent);
      margin-bottom: 16px;
    }
    .newsletter-box h3 {
      font-family: var(--font-serif);
      font-size: 1.2rem;
      color: var(--color-dark);
      margin-bottom: 8px;
    }
    .newsletter-box p {
      font-size: 0.85rem;
      color: var(--color-text-muted);
      line-height: 1.5;
      margin-bottom: 20px;
    }
    .newsletter-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .newsletter-form input {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--color-border);
      border-radius: 4px;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      outline: none;
      transition: var(--transition-smooth);
    }
    .newsletter-form input:focus {
      border-color: var(--color-accent);
    }
    .checkbox-label {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      text-align: left;
      font-size: 0.75rem;
      color: var(--color-text-muted);
      cursor: pointer;
      margin-top: 4px;
    }
    .checkbox-label input {
      width: auto;
      margin-top: 3px;
    }

    /* Сайдбар CTA */
    .sidebar-widget--cta {
      background: var(--color-dark);
      color: white;
      border: none;
      text-align: center;
    }
    .sidebar-cta h3 {
      font-family: var(--font-serif);
      font-size: 1.25rem;
      color: white;
      margin-bottom: 8px;
    }
    .sidebar-cta p {
      font-size: 0.85rem;
      color: #A39E95;
      margin-bottom: 20px;
    }

    /* Секция Авторы */
    .authors-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      margin-top: 48px;
    }
    .author-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 32px;
      display: flex;
      gap: 24px;
      align-items: center;
      transition: var(--transition-smooth);
    }
    .author-card:hover {
      transform: translateY(-5px);
      border-color: var(--color-accent);
      box-shadow: 0 12px 30px rgba(166, 124, 82, 0.05);
    }
    .author-card__photo {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;
      background: var(--color-accent-light);
    }
    .author-card__photo svg {
      width: 100%;
      height: 100%;
    }
    .author-card__info h3 {
      font-family: var(--font-serif);
      font-size: 1.25rem;
      color: var(--color-dark);
      margin-bottom: 4px;
    }
    .author-card__role {
      display: block;
      font-size: 0.75rem;
      color: var(--color-accent);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
    }
    .author-card__info p {
      font-size: 0.85rem;
      color: var(--color-text-muted);
      line-height: 1.5;
      margin-bottom: 12px;
    }
    .author-card__stats {
      display: flex;
      gap: 16px;
      font-size: 0.75rem;
      color: var(--color-text-muted);
      font-weight: 500;
    }

    /* Связанные страницы */
    .related-pages__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      margin-top: 48px;
    }
    .related-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 32px;
      text-decoration: none;
      color: var(--color-text-main);
      transition: var(--transition-smooth);
      display: flex;
      flex-direction: column;
    }
    .related-card:hover {
      transform: translateY(-5px);
      border-color: var(--color-accent);
      box-shadow: 0 10px 30px rgba(166, 124, 82, 0.05);
    }
    .related-card__icon {
      color: var(--color-accent);
      background: var(--color-accent-light);
      width: 48px;
      height: 48px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
    }
    .related-card h3 {
      font-family: var(--font-serif);
      font-size: 1.25rem;
      color: var(--color-dark);
      margin-bottom: 8px;
    }
    .related-card p {
      font-size: 0.85rem;
      color: var(--color-text-muted);
      margin-bottom: 24px;
      flex-grow: 1;
    }
    .related-card__arrow {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* Секция CTA */
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
      .blog-featured-card {
        grid-template-columns: 1fr;
      }
      .blog-grid, .authors-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .related-pages__grid {
        grid-template-columns: repeat(2, 1fr);
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
      .blog-grid, .authors-grid, .related-pages__grid, .include-card {
        grid-template-columns: 1fr;
      }
      .author-card {
        flex-direction: column;
        text-align: center;
      }
      .page-header__title {
        font-size: 2.5rem;
      }
      .blog-featured-card__body {
        padding: 24px;
      }
      .blog-featured-card__title {
        font-size: 1.6rem;
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
<body class="page-blog">
  
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
          <li><a href="projects.html" class="nav__link">Проекты</a></li>
          <li><a href="blog.html" class="nav__link nav__link--active" aria-current="page">Блог</a></li>
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
    <a href="projects.html" class="nav__link">Проекты</a>
    <a href="blog.html" class="nav__link nav__link--active" aria-current="page">Блог</a>
    <a href="contacts.html" class="nav__link">Контакты</a>
    <button class="btn btn--primary btn--block" style="margin-top: 16px;" data-modal-trigger="consultation">Консультация</button>
  </div>

  <main id="main-content" role="main">
    
    <!-- Breadcrumbs -->
    <nav class="breadcrumbs" aria-label="Хлебные крошки">
      <div class="container">
        <ol class="breadcrumbs__list">
          <li><a href="index.html">Главная</a></li>
          <li aria-current="page">Блог</li>
        </ol>
      </div>
    </nav>

    <!-- Page Hero -->
    <section class="page-header">
      <div class="container">
        <div class="page-header__content">
          <span class="section__eyebrow">Блог DOMUS VIVA</span>
          <h1 class="page-header__title">Экспертные <span class="text-accent">статьи</span> о строительстве</h1>
          <p class="page-header__subtitle">
            Делимся экспертными знаниями, накопленными за 12 лет проектно-строительной практики. Технологии, умные узлы, архитектурный дизайн и советы от наших специалистов.
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="section blog-featured" aria-labelledby="featured-article-title">
      <div class="container">
        <header class="section__header">
          <span class="section__eyebrow">Главный материал</span>
          <h2 id="featured-article-title" class="visually-hidden">Рекомендуемая статья</h2>
        </header>
        
        <article class="blog-featured-card" data-article="gas-vs-brick">
          <a href="pages/articles/article-gas-vs-brick.html" class="blog-featured-card__media">
            <!-- Векторный эскиз чертежа стены (газобетон против кирпича) -->
            <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="300" fill="#EAE5DE"/>
              <line x1="300" y1="0" x2="300" y2="300" stroke="#FAF8F5" stroke-width="4"/>
              
              <!-- Левая часть: Кладка газобетона -->
              <rect x="50" y="80" width="80" height="40" fill="#FAF8F5" stroke="#2C2A27" stroke-width="1.5"/>
              <rect x="140" y="80" width="80" height="40" fill="#FAF8F5" stroke="#2C2A27" stroke-width="1.5"/>
              <rect x="90" y="130" width="80" height="40" fill="#FAF8F5" stroke="#2C2A27" stroke-width="1.5"/>
              <rect x="50" y="180" width="80" height="40" fill="#FAF8F5" stroke="#2C2A27" stroke-width="1.5"/>
              <rect x="140" y="180" width="80" height="40" fill="#FAF8F5" stroke="#2C2A27" stroke-width="1.5"/>
              <text x="135" y="260" font-family="'Playfair Display', serif" font-size="14" fill="#2C2A27" text-anchor="middle" font-weight="bold">ГАЗОБЕТОН</text>

              <!-- Правая часть: Кладка поризованного кирпича -->
              <g fill="#D27D2D" stroke="#2C2A27" stroke-width="1.5">
                <rect x="380" y="80" width="50" height="30"/>
                <rect x="440" y="80" width="50" height="30"/>
                <rect x="410" y="120" width="50" height="30"/>
                <rect x="380" y="160" width="50" height="30"/>
                <rect x="440" y="160" width="50" height="30"/>
              </g>
              <text x="435" y="260" font-family="'Playfair Display', serif" font-size="14" fill="#2C2A27" text-anchor="middle" font-weight="bold">КИРПИЧ</text>
            </svg>
            <span class="blog-featured-card__badge">Рекомендуем</span>
          </a>
          <div class="blog-featured-card__body">
            <div class="blog-featured-card__meta">
              <span class="blog-category blog-category--tech">Технологии</span>
              <time datetime="2026-05-15">15 мая 2026</time>
              <span class="blog-read-time">⏱ 8 мин чтения</span>
            </div>
            <h3 class="blog-featured-card__title">
              <a href="pages/articles/article-gas-vs-brick.html">Газобетон или кирпич: что выбрать для строительства коттеджа в 2026 году?</a>
            </h3>
            <p class="blog-featured-card__excerpt">
              Сравнительный анализ двух самых популярных материалов для возведения несущих стен загородных резиденций. Разбираем теплоемкость, прочность, общие расходы на фундамент и долговечность.
            </p>
            <div class="blog-featured-card__footer">
              <div class="blog-author">
                <!-- Векторный аватар Смирнова -->
                <svg width="40" height="40" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50" fill="#E6DFD3"/>
                  <path d="M50 30 C40 30 35 40 35 50 C35 60 40 70 50 70 C60 70 65 60 65 50 Z" fill="#2C2A27"/>
                  <path d="M20 90 C20 75 35 70 50 70 C65 70 80 75 80 90 H20 Z" fill="#2C2A27"/>
                </svg>
                <div>
                  <strong>Александр Смирнов</strong>
                  <span>Главный архитектор</span>
                </div>
              </div>
              <a href="pages/articles/article-gas-vs-brick.html" class="btn btn--primary btn--sm">Читать →</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Blog Layout: Main + Sidebar -->
    <section class="section blog-main">
      <div class="container">
        <div class="blog-layout">
          
          <!-- Main Content -->
          <div class="blog-content">
            <header class="blog-content__header">
              <h2 id="articles-title" class="blog-content__title">Все публикации</h2>
              
              <!-- Category Filters -->
              <div class="blog-filters" role="tablist" aria-label="Фильтр статей по категориям">
                <button class="filter-btn filter-btn--active" data-blog-filter="all" role="tab" aria-selected="true">
                  Все <span class="filter-count">6</span>
                </button>
                <button class="filter-btn" data-blog-filter="tech" role="tab" aria-selected="false">
                  Технологии <span class="filter-count">3</span>
                </button>
                <button class="filter-btn" data-blog-filter="design" role="tab" aria-selected="false">
                  Дизайн <span class="filter-count">1</span>
                </button>
                <button class="filter-btn" data-blog-filter="tips" role="tab" aria-selected="false">
                  Советы <span class="filter-count">1</span>
                </button>
                <button class="filter-btn" data-blog-filter="cases" role="tab" aria-selected="false">
                  Кейсы <span class="filter-count">1</span>
                </button>
              </div>
            </header>
            
            <!-- Articles Grid -->
            <div class="blog-grid" id="blogGrid">
              
              <!-- Article 1 -->
              <article class="blog-card" data-category="tech" data-article="energy-efficiency">
                <a href="pages/articles/article-energy-efficiency.html" class="blog-card__media">
                  <!-- Векторная схема дома класса А+ -->
                  <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="300" height="200" fill="#DFE6E8"/>
                    <rect x="80" y="80" width="140" height="90" fill="#FAF8F5" stroke="#2C2A27" stroke-width="1.5"/>
                    <polygon points="60,80 150,30 240,80" fill="#A67C52" stroke="#2C2A27" stroke-width="1.5"/>
                    <!-- Солнечная панель -->
                    <rect x="160" y="45" width="40" height="20" fill="#1E1D1B" stroke="#FAF8F5"/>
                    <line x1="180" y1="45" x2="180" y2="65" stroke="#FAF8F5"/>
                  </svg>
                  <span class="blog-category blog-category--tech">Технологии</span>
                </a>
                <div class="blog-card__body">
                  <div class="blog-card__meta">
                    <time datetime="2026-05-08">8 мая 2026</time>
                    <span class="blog-read-time">⏱ 6 мин</span>
                  </div>
                  <h3><a href="pages/articles/article-energy-efficiency.html">Как построить энергоэффективный дом класса A+</a></h3>
                  <p>5 ключевых технологий, позволяющих сократить тепловые потери здания в 3-4 раза. Реальные спецификации котельных.</p>
                  <div class="blog-card__footer">
                    <div class="blog-author blog-author--small">
                      <!-- Векторный аватар Петрова -->
                      <svg width="32" height="32" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50" fill="#E2DDD5"/>
                        <path d="M50 30 C40 30 36 38 36 48 C36 58 40 68 50 68 C60 68 64 58 64 48 Z" fill="#2C2A27"/>
                        <path d="M22 90 C22 75 35 70 50 70 C65 70 78 75 78 90 H22 Z" fill="#2C2A27"/>
                      </svg>
                      <span>Дмитрий Петров</span>
                    </div>
                    <a href="pages/articles/article-energy-efficiency.html" class="blog-card__link">Читать →</a>
                  </div>
                </div>
              </article>

              <!-- Article 2 -->
              <article class="blog-card" data-category="design" data-article="trends-2026">
                <a href="pages/articles/article-trends-2026.html" class="blog-card__media">
                  <!-- Векторная схема Japandi интерьера -->
                  <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="300" height="200" fill="#F2ECE4"/>
                    <rect x="70" y="110" width="160" height="60" fill="#FAF8F5" stroke="#2C2A27" stroke-width="1.5" rx="4"/>
                    <circle cx="150" cy="80" r="24" fill="#A67C52" opacity="0.8"/>
                  </svg>
                  <span class="blog-category blog-category--design">Дизайн</span>
                </a>
                <div class="blog-card__body">
                  <div class="blog-card__meta">
                    <time datetime="2026-04-28">28 апр 2026</time>
                    <span class="blog-read-time">⏱ 5 мин</span>
                  </div>
                  <h3><a href="pages/articles/article-trends-2026.html">Тренды дизайна интерьеров 2026: тихая роскошь и тактильность</a></h3>
                  <p>Разбираем ключевую философию года: натуральное дерево, фактурная штукатурка, ткани букле и природные формы.</p>
                  <div class="blog-card__footer">
                    <div class="blog-author blog-author--small">
                      <!-- Векторный аватар Ковалевой -->
                      <svg width="32" height="32" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50" fill="#E6DFD3"/>
                        <path d="M50 30 C40 30 35 40 35 50 C35 60 40 70 50 70 C60 70 65 60 65 50 Z" fill="#2C2A27"/>
                        <path d="M22 90 C22 75 35 70 50 70 C65 70 78 75 78 90 H22 Z" fill="#2C2A27"/>
                        <path d="M68 40 L78 20 L84 25 Z" fill="#A67C52"/>
                      </svg>
                      <span>Елена Ковалева</span>
                    </div>
                    <a href="pages/articles/article-trends-2026.html" class="blog-card__link">Читать →</a>
                  </div>
                </div>
              </article>

              <!-- Article 3 -->
              <article class="blog-card" data-category="tips" data-article="contractor-mistakes">
                <a href="pages/articles/article-contractor-mistakes.html" class="blog-card__media">
                  <!-- Векторный знак предупреждения строителей -->
                  <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="300" height="200" fill="#FAF8F5"/>
                    <polygon points="150,40 230,160 70,160" fill="#FAF8F5" stroke="#A67C52" stroke-width="2"/>
                    <circle cx="150" cy="115" r="16" fill="#F5EFE6" stroke="#2C2A27" stroke-width="1.5"/>
                    <text x="150" y="121" font-family="'Inter', sans-serif" font-size="16" fill="#A67C52" font-weight="bold" text-anchor="middle">!</text>
                  </svg>
                  <span class="blog-category blog-category--tips">Советы</span>
                </a>
                <div class="blog-card__body">
                  <div class="blog-card__meta">
                    <time datetime="2026-04-12">12 апр 2026</time>
                    <span class="blog-read-time">⏱ 7 мин</span>
                  </div>
                  <h3><a href="pages/articles/article-contractor-mistakes.html">5 критических ошибок при выборе подрядчика</a></h3>
                  <p>Как защитить себя от скрытых доплат и сорванных сроков. Разбираем юридические хитрости в договорах подряда.</p>
                  <div class="blog-card__footer">
                    <div class="blog-author blog-author--small">
                      <!-- Векторный аватар Смирнова -->
                      <svg width="32" height="32" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50" fill="#E6DFD3"/>
                        <path d="M50 30 C40 30 35 40 35 50 C35 60 40 70 50 70 C60 70 65 60 65 50 Z" fill="#2C2A27"/>
                        <path d="M20 90 C20 75 35 70 50 70 C65 70 80 75 80 90 H20 Z" fill="#2C2A27"/>
                      </svg>
                      <span>Александр Смирнов</span>
                    </div>
                    <a href="pages/articles/article-contractor-mistakes.html" class="blog-card__link">Читать →</a>
                  </div>
                </div>
              </article>

              <!-- Article 4 -->
              <article class="blog-card" data-category="tech" data-article="smart-home">
                <a href="pages/articles/article-smart-home.html" class="blog-card__media">
                  <!-- Векторная схема умного пульта/экрана -->
                  <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="300" height="200" fill="#ECE5DC"/>
                    <rect x="90" y="50" width="120" height="100" rx="8" fill="#FAF8F5" stroke="#2C2A27" stroke-width="1.5"/>
                    <circle cx="150" cy="100" r="24" fill="#A67C52"/>
                    <path d="M140 100 H160 M150 90 V110" stroke="#FAF8F5" stroke-width="2"/>
                  </svg>
                  <span class="blog-category blog-category--tech">Технологии</span>
                </a>
                <div class="blog-card__body">
                  <div class="blog-card__meta">
                    <time datetime="2026-04-05">5 апр 2026</time>
                    <span class="blog-read-time">⏱ 9 мин</span>
                  </div>
                  <h3><a href="pages/articles/article-smart-home.html">Умный дом в 2026: что реально работает, а что маркетинг</a></h3>
                  <p>Объективный обзор протоколов KNX и Matter. Раскрываем сценарии автоматизации микроклимата и электропитания.</p>
                  <div class="blog-card__footer">
                    <div class="blog-author blog-author--small">
                      <!-- Векторный аватар Петрова -->
                      <svg width="32" height="32" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50" fill="#E2DDD5"/>
                        <path d="M50 30 C40 30 36 38 36 48 C36 58 40 68 50 68 C60 68 64 58 64 48 Z" fill="#2C2A27"/>
                        <path d="M22 90 C22 75 35 70 50 70 C65 70 78 75 78 90 H22 Z" fill="#2C2A27"/>
                      </svg>
                      <span>Дмитрий Петров</span>
                    </div>
                    <a href="pages/articles/article-smart-home.html" class="blog-card__link">Читать →</a>
                  </div>
                </div>
              </article>

              <!-- Article 5 -->
              <article class="blog-card" data-category="tech" data-article="foundation">
                <a href="pages/articles/article-foundation.html" class="blog-card__media">
                  <!-- Векторный разрез фундамента плиты -->
                  <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="300" height="200" fill="#FAF8F5"/>
                    <rect x="40" y="110" width="220" height="30" fill="#ECE5DC" stroke="#2C2A27" stroke-width="1.5"/>
                    <path d="M40 140 H260 L240 170 H60 Z" fill="#D2C5B8" opacity="0.6"/>
                    <line x1="80" y1="110" x2="80" y2="140" stroke="#A67C52" stroke-width="2"/>
                    <line x1="220" y1="110" x2="220" y2="140" stroke="#A67C52" stroke-width="2"/>
                  </svg>
                  <span class="blog-category blog-category--tech">Технологии</span>
                </a>
                <div class="blog-card__body">
                  <div class="blog-card__meta">
                    <time datetime="2026-03-28">28 мар 2026</time>
                    <span class="blog-read-time">⏱ 10 мин</span>
                  </div>
                  <h3><a href="pages/articles/article-foundation.html">Фундамент для коттеджа: полный гид по выбору</a></h3>
                  <p>Разбираем технические особенности утепленной плиты (УШП) и ленты. Критерии оценки грунта.</p>
                  <div class="blog-card__footer">
                    <div class="blog-author blog-author--small">
                      <!-- Векторный аватар Петрова -->
                      <svg width="32" height="32" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50" fill="#E2DDD5"/>
                        <path d="M50 30 C40 30 36 38 36 48 C36 58 40 68 50 68 C60 68 64 58 64 48 Z" fill="#2C2A27"/>
                        <path d="M22 90 C22 75 35 70 50 70 C65 70 78 75 78 90 H22 Z" fill="#2C2A27"/>
                      </svg>
                      <span>Дмитрий Петров</span>
                    </div>
                    <a href="pages/articles/article-foundation.html" class="blog-card__link">Читать →</a>
                  </div>
                </div>
              </article>

              <!-- Article 6 -->
              <article class="blog-card" data-category="cases" data-article="case-white-stone">
                <a href="pages/articles/article-case-white-stone.html" class="blog-card__media">
                  <!-- Векторный эскиз фасада усадьбы Белый Камень -->
                  <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="300" height="200" fill="#E8E2D9"/>
                    <rect x="80" y="80" width="140" height="80" fill="#FAF8F5" stroke="#1E1D1B" stroke-width="1.5"/>
                    <polygon points="60,80 150,40 240,80" fill="#A67C52" stroke="#1E1D1B" stroke-width="1.5"/>
                    <circle cx="150" cy="120" r="15" stroke="#1E1D1B" stroke-width="1.5" fill="#FAF8F5"/>
                  </svg>
                  <span class="blog-category blog-category--cases">Кейс</span>
                </a>
                <div class="blog-card__body">
                  <div class="blog-card__meta">
                    <time datetime="2026-03-15">15 мар 2026</time>
                    <span class="blog-read-time">⏱ 12 мин</span>
                  </div>
                  <h3><a href="pages/articles/article-case-white-stone.html">Кейс: как мы строили резиденцию «Белый камень» 380 м²</a></h3>
                  <p>Разбор этапов реализации премиального объекта. Спецификации отделки фасадов и ландшафтных зон.</p>
                  <div class="blog-card__footer">
                    <div class="blog-author blog-author--small">
                      <!-- Векторный аватар Смирнова -->
                      <svg width="32" height="32" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50" fill="#E6DFD3"/>
                        <path d="M50 30 C40 30 35 40 35 50 C35 60 40 70 50 70 C60 70 65 60 65 50 Z" fill="#2C2A27"/>
                        <path d="M20 90 C20 75 35 70 50 70 C65 70 80 75 80 90 H20 Z" fill="#2C2A27"/>
                      </svg>
                      <span>Александр Смирнов</span>
                    </div>
                    <a href="pages/articles/article-case-white-stone.html" class="blog-card__link">Читать →</a>
                  </div>
                </div>
              </article>

            </div>

            <!-- Pagination -->
            <nav class="blog-pagination" aria-label="Пагинация блога">
              <button class="pagination-btn pagination-btn--prev" aria-label="Предыдущая страница" disabled>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button class="pagination-btn pagination-btn--active" aria-current="page">1</button>
              <button class="pagination-btn">2</button>
              <button class="pagination-btn">3</button>
              <span class="pagination-dots">...</span>
              <button class="pagination-btn">5</button>
              <button class="pagination-btn pagination-btn--next" aria-label="Следующая страница">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </nav>

          </div>

          <!-- Sidebar -->
          <aside class="blog-sidebar" aria-label="Боковая панель блога">
            
            <!-- Search -->
            <div class="sidebar-widget sidebar-widget--search">
              <h3 class="sidebar-widget__title">Поиск по блогу</h3>
              <form class="sidebar-search" role="search" id="blogSearchForm">
                <label for="blogSearch" class="visually-hidden">Поиск статей</label>
                <input type="search" id="blogSearch" placeholder="Найти статью по заголовку..." aria-label="Поиск статей">
                <button type="submit" aria-label="Искать">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </button>
              </form>
            </div>

            <!-- Categories -->
            <div class="sidebar-widget">
              <h3 class="sidebar-widget__title">Категории</h3>
              <ul class="sidebar-categories" id="sidebarCategories">
                <li>
                  <a href="#" class="sidebar-category" data-category="all">
                    <span>Все статьи</span>
                    <span class="sidebar-category__count">6</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="sidebar-category" data-category="tech">
                    <span>🔧 Технологии</span>
                    <span class="sidebar-category__count">3</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="sidebar-category" data-category="design">
                    <span>🎨 Дизайн</span>
                    <span class="sidebar-category__count">1</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="sidebar-category" data-category="tips">
                    <span>💡 Советы</span>
                    <span class="sidebar-category__count">1</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="sidebar-category" data-category="cases">
                    <span>📋 Кейсы</span>
                    <span class="sidebar-category__count">1</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Popular Articles -->
            <div class="sidebar-widget">
              <h3 class="sidebar-widget__title">Популярные темы</h3>
              <div class="sidebar-popular">
                <article class="sidebar-article">
                  <div class="sidebar-article__image">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
                      <rect width="64" height="64" fill="#FAF8F5"/>
                      <rect x="16" y="16" width="32" height="32" rx="4" fill="#E6DFD3"/>
                    </svg>
                  </div>
                  <div class="sidebar-article__content">
                    <h4><a href="pages/articles/article-gas-vs-brick.html">Газобетон или кирпич: полный разбор</a></h4>
                    <time datetime="2026-05-15">15 мая 2026</time>
                  </div>
                </article>
                <article class="sidebar-article">
                  <div class="sidebar-article__image">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
                      <rect width="64" height="64" fill="#FAF8F5"/>
                      <circle cx="32" cy="32" r="16" fill="#DFE6E8"/>
                    </svg>
                  </div>
                  <div class="sidebar-article__content">
                    <h4><a href="pages/articles/article-energy-efficiency.html">Дом класса A+: 5 технологий</a></h4>
                    <time datetime="2026-05-08">8 мая 2026</time>
                  </div>
                </article>
                <article class="sidebar-article">
                  <div class="sidebar-article__image">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
                      <rect width="64" height="64" fill="#FAF8F5"/>
                      <polygon points="32,16 48,48 16,48" fill="#F2EFEA"/>
                    </svg>
                  </div>
                  <div class="sidebar-article__content">
                    <h4><a href="pages/articles/article-contractor-mistakes.html">5 ошибок при выборе строителей</a></h4>
                    <time datetime="2026-04-12">12 апр 2026</time>
                  </div>
                </article>
              </div>
            </div>

            <!-- Tags -->
            <div class="sidebar-widget">
              <h3 class="sidebar-widget__title">Облако тегов</h3>
              <div class="sidebar-tags" id="sidebarTags">
                <a href="#" class="sidebar-tag" data-tag="all">#все</a>
                <a href="#" class="sidebar-tag" data-tag="газобетон">#газобетон</a>
                <a href="#" class="sidebar-tag" data-tag="кирпич">#кирпич</a>
                <a href="#" class="sidebar-tag" data-tag="энергоэффективность">#энергоэффективность</a>
                <a href="#" class="sidebar-tag" data-tag="умный-дом">#умный-дом</a>
                <a href="#" class="sidebar-tag" data-tag="фундамент">#фундамент</a>
                <a href="#" class="sidebar-tag" data-tag="интерьер">#интерьер</a>
              </div>
            </div>

            <!-- Newsletter -->
            <div class="sidebar-widget sidebar-widget--newsletter">
              <div class="newsletter-box">
                <div class="newsletter-box__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3>Подпишитесь на журнал</h3>
                <p>Получайте экспертные статьи, чертежи и аналитику раз в неделю. Без рекламы.</p>
                <form class="newsletter-form" id="newsletterForm" novalidate>
                  <label for="newsletterEmail" class="visually-hidden">Email для подписки</label>
                  <input type="email" id="newsletterEmail" name="email" placeholder="Ваш адрес почты" required>
                  <button type="submit" class="btn btn--primary btn--block">Подписаться</button>
                  <label class="checkbox-label">
                    <input type="checkbox" name="agree" required checked>
                    <span>Согласен на обработку персональных данных</span>
                  </label>
                </form>
              </div>
            </div>

            <!-- CTA Widget -->
            <div class="sidebar-widget sidebar-widget--cta">
              <div class="sidebar-cta">
                <h3>Нужен расчет сметы?</h3>
                <p>Обсудите ваш будущий дом с главным архитектором бесплатно.</p>
                <button class="btn btn--accent btn--block" data-modal-trigger="consultation">Заказать расчет</button>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </section>

    <!-- Authors Section -->
    <section class="section blog-authors bg-alt" aria-labelledby="authors-title">
      <div class="container">
        <header class="section__header">
          <span class="section__eyebrow">Архитекторы и инженеры</span>
          <h2 id="authors-title" class="section__title">Эксперты, которые пишут для вас</h2>
          <p class="section__subtitle">Каждая публикация основана на подтвержденном загородном опыте создания 214 проектов</p>
        </header>
        
        <div class="authors-grid">
          <article class="author-card">
            <div class="author-card__photo">
              <!-- Векторный силуэт Смирнова -->
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" fill="#E6DFD3"/>
                <path d="M50 30 C40 30 35 40 35 50 C35 60 40 70 50 70 C60 70 65 60 65 50 Z" fill="#2C2A27"/>
                <path d="M20 90 C20 75 35 70 50 70 C65 70 80 75 80 90 H20 Z" fill="#2C2A27"/>
              </svg>
            </div>
            <div class="author-card__info">
              <h3>Александр Смирнов</h3>
              <span class="author-card__role">Главный архитектор</span>
              <p>18 лет в архитектурном проектировании. Делится технологиями и планировочными лайфхаками.</p>
              <div class="author-card__stats">
                <span>📝 12 публикаций</span>
              </div>
            </div>
          </article>

          <article class="author-card">
            <div class="author-card__photo">
              <!-- Векторный силуэт Петрова -->
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" fill="#E2DDD5"/>
                <path d="M50 30 C40 30 36 38 36 48 C36 58 40 68 50 68 C60 68 64 58 64 48 Z" fill="#2C2A27"/>
                <path d="M22 90 C22 75 35 70 50 70 C65 70 78 75 78 90 H22 Z" fill="#2C2A27"/>
              </svg>
            </div>
            <div class="author-card__info">
              <h3>Дмитрий Петров</h3>
              <span class="author-card__role">Технический директор</span>
              <p>К.т.н., проектирует современные отопительные, водоочистные и вентиляционные узлы.</p>
              <div class="author-card__stats">
                <span>📝 9 публикаций</span>
              </div>
            </div>
          </article>

          <article class="author-card">
            <div class="author-card__photo">
              <!-- Векторный силуэт Ковалевой -->
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" fill="#E6DFD3"/>
                <path d="M50 30 C40 30 35 40 35 50 C35 60 40 70 50 70 C60 70 65 60 65 50 Z" fill="#2C2A27"/>
                <path d="M22 90 C22 75 35 70 50 70 C65 70 78 75 78 90 H22 Z" fill="#2C2A27"/>
                <path d="M68 40 L78 20 L84 25 Z" fill="#A67C52"/>
              </svg>
            </div>
            <div class="author-card__info">
              <h3>Елена Ковалева</h3>
              <span class="author-card__role">Дизайнер интерьеров</span>
              <p>Член Союза Дизайнеров России. Пишет об эргономике, эстетике Japandi и мягкой роскоши.</p>
              <div class="author-card__stats">
                <span>📝 7 публикаций</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section bg-dark text-white" aria-labelledby="cta-blog-title">
      <div class="container">
        <div class="cta-box">
          <h2 id="cta-blog-title">Готовы воплотить прочитанное в жизнь?</h2>
          <p>Запишитесь на индивидуальную консультацию с главным архитектором — обсудим ваш будущий коттедж с учетом передовых технологий.</p>
          <div class="cta-box__actions">
            <button class="btn btn--accent" data-modal-trigger="consultation">Бесплатная консультация</button>
            <a href="projects.html" class="btn btn--outline-light">Посмотреть проекты</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Pages -->
    <section class="section related-pages" aria-labelledby="related-title">
      <div class="container">
        <header class="section__header">
          <h2 id="related-title" class="section__title">Что посмотреть дальше</h2>
        </header>
        <div class="related-pages__grid">
          <a href="projects.html" class="related-card">
            <div class="related-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 21V9h6v12"/>
              </svg>
            </div>
            <h3>Наши проекты</h3>
            <p>214 реализованных резиденций с реальными фотографиями и планировками.</p>
            <span class="related-card__arrow">Смотреть →</span>
          </a>
          <a href="services.html" class="related-card">
            <div class="related-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77"/>
                <path d="M4.8 19.2l-2.3 2.3M12.2 11.8l-2.3 2.3"/>
              </svg>
            </div>
            <h3>Услуги</h3>
            <p>Комплексный цикл создания коттеджей: от фундамента до декора.</p>
            <span class="related-card__arrow">Смотреть →</span>
          </a>
          <a href="about.html" class="related-card">
            <div class="related-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              </svg>
            </div>
            <h3>О компании</h3>
            <p>12 лет опыта, 48 специалистов загородного проектирования.</p>
            <span class="related-card__arrow">Читать →</span>
          </a>
          <a href="calculator.html" class="related-card">
            <div class="related-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12" y2="18"/>
              </svg>
            </div>
            <h3>Калькулятор</h3>
            <p>Быстрый расчет сметы на индивидуальное строительство резиденции.</p>
            <span class="related-card__arrow">Рассчитать →</span>
          </a>
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
          <p>Премиальное индивидуальное проектирование и строительство коттеджей с 2014 года. Гарантия 15 лет, прозрачная смета.</p>
          <div class="social-links">
            <a href="#" aria-label="VKontakte">VK</a>
            <a href="#" aria-label="Telegram">TG</a>
          </div>
        </div>
        
        <div class="footer__col">
          <h4>Разделы</h4>
          <ul>
            <li><a href="about.html">О компании</a></li>
            <li><a href="services.html">Услуги</a></li>
            <li><a href="projects.html">Проекты</a></li>
            <li><a href="blog.html">Блог</a></li>
            <li><a href="contacts.html">Контакты</a></li>
          </ul>
        </div>
        
        <div class="footer__col">
          <h4>Популярное в блоге</h4>
          <ul>
            <li><a href="pages/articles/article-gas-vs-brick.html">Газобетон или кирпич</a></li>
            <li><a href="pages/articles/article-energy-efficiency.html">Энергоэффективный дом</a></li>
            <li><a href="pages/articles/article-smart-home.html">Умный дом 2026</a></li>
            <li><a href="pages/articles/article-foundation.html">Выбор фундамента</a></li>
            <li><a href="pages/articles/article-trends-2026.html">Тренды дизайна</a></li>
          </ul>
        </div>
        
        <div class="footer__col footer__contacts">
          <h4>Контакты</h4>
          <p style="margin-bottom: 12px;"><a href="tel:+78005553535" style="color: white; font-weight: 600; text-decoration: none;">+7 (800) 555-35-35</a></p>
          <p style="margin-bottom: 12px;"><a href="mailto:info@domusviva.ru">info@domusviva.ru</a></p>
          <p>Москва, ул. Архитекторов, 12<br>Пн-Пт: 9:00–19:00</p>
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
        <h3 id="modalTitle">Запросить консультацию</h3>
        <p>Заполните контактную форму ниже, и архитектор-эксперт DOMUS VIVA свяжется с вами в течение 30 минут.</p>
        
        <form id="consultationForm">
          <div class="form-group">
            <label for="clientName">Ваше имя</label>
            <input type="text" id="clientName" class="form-control" placeholder="Александр" required>
          </div>
          <div class="form-group">
            <label for="clientPhone">Номер телефона</label>
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

      function openModal() {
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
        showToast('✓ Благодарим! Заявка на консультацию отправлена. Архитектор DOMUS VIVA свяжется с вами.');
        form.reset();
      });

      // 5. Отправка формы подписки на рассылку
      const newsletterForm = document.getElementById('newsletterForm');
      if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const emailInput = document.getElementById('newsletterEmail');
          const agreeCheckbox = newsletterForm.querySelector('input[name="agree"]');
          
          if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
            showToast('✕ Пожалуйста, введите корректный адрес почты.');
            return;
          }
          
          if (!agreeCheckbox.checked) {
            showToast('✕ Требуется ваше согласие с политикой конфиденциальности.');
            return;
          }

          showToast('✓ Вы успешно подписаны на еженедельный журнал DOMUS VIVA!');
          newsletterForm.reset();
        });
      }

      // 6. Тост-уведомления
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

      // 7. Интерактивная фильтрация и поиск статей
      const blogGrid = document.getElementById('blogGrid');
      const blogCards = document.querySelectorAll('.blog-card');
      const filterButtons = document.querySelectorAll('.filter-btn');
      const categoryLinks = document.querySelectorAll('.sidebar-category');
      const tagLinks = document.querySelectorAll('.sidebar-tag');
      const searchForm = document.getElementById('blogSearchForm');
      const searchInput = document.getElementById('blogSearch');

      let currentCategory = 'all';
      let currentSearchQuery = '';

      function applyFilterAndSearch() {
        let visibleCount = 0;
        
        blogCards.forEach(card => {
          const category = card.getAttribute('data-category');
          const title = card.querySelector('h3').textContent.toLowerCase();
          const text = card.querySelector('p').textContent.toLowerCase();
          
          const matchesCategory = (currentCategory === 'all' || category === currentCategory);
          const matchesSearch = (title.includes(currentSearchQuery) || text.includes(currentSearchQuery));
          
          if (matchesCategory && matchesSearch) {
            card.style.display = 'flex';
            // Небольшая задержка для плавного появления
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            visibleCount++;
          } else {
            card.style.display = 'none';
            card.style.opacity = '0';
          }
        });

        // Если ничего не найдено
        const existingNoResults = document.getElementById('blogNoResults');
        if (visibleCount === 0) {
          if (!existingNoResults) {
            const noResults = document.createElement('div');
            noResults.id = 'blogNoResults';
            noResults.style.gridColumn = '1 / -1';
            noResults.style.textAlign = 'center';
            noResults.style.padding = '48px 24px';
            noResults.style.fontFamily = 'var(--font-serif)';
            noResults.style.fontSize = '1.25rem';
            noResults.style.color = 'var(--color-text-muted)';
            noResults.textContent = 'Публикаций по вашему запросу не найдено. Попробуйте изменить параметры фильтра.';
            blogGrid.appendChild(noResults);
          }
        } else if (existingNoResults) {
          existingNoResults.remove();
        }
      }

      // События фильтрации по кнопкам категорий
      filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          filterButtons.forEach(b => b.classList.remove('filter-btn--active'));
          btn.classList.add('filter-btn--active');
          currentCategory = btn.getAttribute('data-blog-filter');
          applyFilterAndSearch();
        });
      });

      // Синхронизация сайдбар-категорий
      categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetCategory = link.getAttribute('data-category');
          currentCategory = targetCategory;
          
          // Синхронизируем верхние кнопки
          filterButtons.forEach(btn => {
            if (btn.getAttribute('data-blog-filter') === targetCategory) {
              btn.classList.add('filter-btn--active');
            } else {
              btn.classList.remove('filter-btn--active');
            }
          });

          applyFilterAndSearch();
          // Скролл к сетке статей для удобства
          document.getElementById('articles-title').scrollIntoView({ behavior: 'smooth' });
        });
      });

      // Теги в сайдбаре
      tagLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const tag = link.getAttribute('data-tag');
          if (tag === 'all') {
            currentSearchQuery = '';
            searchInput.value = '';
          } else {
            currentSearchQuery = tag.toLowerCase();
            searchInput.value = tag;
          }
          applyFilterAndSearch();
          document.getElementById('articles-title').scrollIntoView({ behavior: 'smooth' });
        });
      });

      // События формы поиска
      if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
          e.preventDefault();
          currentSearchQuery = searchInput.value.trim().toLowerCase();
          applyFilterAndSearch();
        });

        searchInput.addEventListener('input', () => {
          currentSearchQuery = searchInput.value.trim().toLowerCase();
          applyFilterAndSearch();
        });
      }

      // 8. Переключение языка
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
          // В будущем здесь можно добавить загрузку контента на другом языке
        });
      });

      // Инициализировать активный язык
      const currentLang = getCurrentLanguage();
      setLanguage(currentLang);
</body>
</html>