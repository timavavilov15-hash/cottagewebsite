<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <!-- SEO Meta Tags -->
  <title>404 — Страница не найдена | DOMUS VIVA</title>
  <meta name="description" content="Запрошенная страница не существует. Вернитесь на главную или воспользуйтесь навигацией, чтобы найти нужную информацию о строительстве коттеджей.">
  <meta name="robots" content="noindex, nofollow">
  <meta name="author" content="DOMUS VIVA">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="404 — Страница не найдена | DOMUS VIVA">
  <meta property="og:description" content="Похоже, этот дом ещё не построили. Вернитесь на главную или найдите нужный раздел.">
  <meta property="og:image" content="assets/images/og/404-cover.jpg">
  <meta property="og:site_name" content="DOMUS VIVA">
  <meta property="og:locale" content="ru_RU">
  
  <!-- Theme Color -->
  <meta name="theme-color" content="#A67C52">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏛️</text></svg>">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
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

    /* Секция 404 */
    .error-hero { 
      min-height: calc(100vh - 80px); 
      display: flex; 
      align-items: center; 
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding: 80px 0;
      background: radial-gradient(circle at top left, #FAF8F5 0%, #F5ECE2 100%);
    }
    .error-hero::before {
      content: '';
      position: absolute;
      top: 10%; right: -5%;
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(166, 124, 82, 0.12) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      animation: float 8s ease-in-out infinite;
    }
    .error-hero::after {
      content: '';
      position: absolute;
      bottom: 15%; left: -10%;
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(86, 117, 104, 0.08) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      animation: float 10s ease-in-out infinite reverse;
    }
    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(20px, -30px) scale(1.05); }
    }
    
    .error-content {
      text-align: center;
      position: relative;
      z-index: 2;
      max-width: 900px;
      margin: 0 auto;
      padding: 0 24px;
    }
    
    .error-code {
      font-family: var(--font-sans);
      font-weight: 900;
      font-size: clamp(8rem, 20vw, 15rem);
      line-height: 0.9;
      margin-bottom: 16px;
      background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 50%, var(--color-accent) 100%);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradientShift 4s ease infinite, codePulse 3s ease-in-out infinite;
      position: relative;
      display: inline-block;
      letter-spacing: -0.05em;
    }
    .error-code::before {
      content: '404';
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      opacity: 0.25;
      filter: blur(20px);
      z-index: -1;
    }
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes codePulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.02); }
    }
    
    .error-illustration {
      margin: 20px auto 40px;
      max-width: 280px;
      position: relative;
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.03);
    }
    
    .error-illustration svg {
      width: 100%;
      height: auto;
      animation: buildBounce 4s ease-in-out infinite;
    }
    @keyframes buildBounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    
    .error-title {
      font-family: var(--font-serif);
      font-size: clamp(1.8rem, 4vw, 2.6rem);
      font-weight: 500;
      color: var(--color-dark);
      margin-bottom: 16px;
      line-height: 1.25;
    }
    
    .error-subtitle {
      font-family: var(--font-sans);
      font-size: clamp(1rem, 2vw, 1.15rem);
      color: var(--color-text-muted);
      margin-bottom: 40px;
      line-height: 1.7;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .error-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
      margin-bottom: 48px;
    }
    
    .error-search {
      max-width: 500px;
      margin: 0 auto 48px;
    }
    .error-search__form {
      display: flex;
      gap: 8px;
      background: white;
      padding: 6px;
      border-radius: 100px;
      border: 1px solid var(--color-border);
      box-shadow: 0 4px 20px rgba(44, 42, 39, 0.04);
      transition: var(--transition-smooth);
    }
    .error-search__form:focus-within {
      border-color: var(--color-accent);
      box-shadow: 0 4px 20px rgba(166, 124, 82, 0.1);
    }
    .error-search__input {
      flex: 1;
      border: none;
      padding: 12px 24px;
      font-size: 15px;
      font-family: inherit;
      background: transparent;
      outline: none;
      color: var(--color-dark);
    }
    .error-search__input::placeholder { color: var(--color-text-muted); }
    
    /* Ссылки-подсказки */
    .error-help {
      text-align: center;
      padding: 48px 0;
      border-top: 1px solid var(--color-border);
    }
    .error-help__title {
      font-family: var(--font-serif);
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 32px;
      color: var(--color-dark);
    }
    .error-help__links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .error-help__link {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 18px 24px;
      background: white;
      border-radius: 12px;
      text-decoration: none;
      color: var(--color-dark);
      box-shadow: 0 4px 15px rgba(0,0,0,0.02);
      transition: var(--transition-smooth);
      border: 1px solid var(--color-border);
    }
    .error-help__link:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(166, 124, 82, 0.08);
      border-color: var(--color-accent);
      color: var(--color-accent);
    }
    .error-help__link svg {
      width: 24px; height: 24px;
      color: var(--color-accent);
      flex-shrink: 0;
      transition: var(--transition-smooth);
    }
    .error-help__link:hover svg {
      transform: scale(1.1);
    }
    .error-help__link span {
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.02em;
    }
    
    /* Строительная викторина / факты */
    .error-fun {
      margin-top: 64px;
      padding: 40px;
      background: white;
      border-radius: 16px;
      border: 1px solid var(--color-border);
      box-shadow: 0 10px 40px rgba(0,0,0,0.02);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    .error-fun__title {
      font-family: var(--font-serif);
      font-size: 1.35rem;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--color-dark);
    }
    .error-fun__subtitle {
      color: var(--color-text-muted);
      margin-bottom: 24px;
      font-size: 14px;
    }
    .error-fun__game {
      display: flex;
      flex-direction: column;
      gap: 18px;
      align-items: center;
    }
    .error-fun__fact {
      padding: 24px;
      background: var(--color-bg-alt);
      border-radius: 8px;
      font-style: italic;
      color: var(--color-dark);
      text-align: center;
      min-height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      font-size: 15px;
      line-height: 1.6;
      border: 1px solid rgba(166, 124, 82, 0.1);
    }
    .error-fun__btn {
      background: var(--color-accent-light);
      color: var(--color-accent-hover);
      border: 1px solid rgba(166, 124, 82, 0.3);
      padding: 12px 28px;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition-smooth);
      font-family: inherit;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .error-fun__btn:hover { 
      background: var(--color-accent); 
      color: white;
      border-color: var(--color-accent);
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
      margin-bottom: 24px;
    }
    .social-links {
      display: flex;
      gap: 16px;
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

    /* Формы в модальном окне */
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

    @media (prefers-reduced-motion: reduce) {
      .error-code, .error-illustration svg, .error-hero::before, .error-hero::after {
        animation: none !important;
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
      .error-search__form {
        flex-direction: column;
        border-radius: 12px;
        padding: 12px;
      }
      .error-search__input {
        padding: 8px 12px;
        text-align: center;
      }
      .error-search__btn {
        width: 100%;
        border-radius: 4px;
      }
      .error-actions {
        flex-direction: column;
      }
      .error-actions .btn {
        width: 100%;
      }
    }
  </style>

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "404 — Страница не найдена",
        "description": "Запрошенная страница не существует на сайте DOMUS VIVA",
        "isPartOf": {
          "@type": "WebSite",
          "name": "DOMUS VIVA",
          "url": "https://domusviva.example"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { 
              "@type": "ListItem", 
              "position": 1, 
              "name": "Главная", 
              "item": "https://domusviva.example/" 
            },
            { 
              "@type": "ListItem", 
              "position": 2, 
              "name": "404 - Страница не найдена" 
            }
          ]
        }
      }
    ]
  }
  </script>
</head>
<body class="page-404">
  
  <!-- Skip Link -->
  <a href="#main-content" class="skip-link">Перейти к основному контенту</a>
  
  <!-- Индикатор прокрутки (здесь играет роль декоративного элемента) -->
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

  <!-- Мобильное навигационное меню -->
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html" class="nav__link">Главная</a>
    <a href="about.html" class="nav__link">О компании</a>
    <a href="services.html" class="nav__link">Услуги</a>
    <a href="projects.html" class="nav__link">Проекты</a>
    <a href="blog.html" class="nav__link">Блог</a>
    <a href="contacts.html" class="nav__link">Контакты</a>
    <button class="btn btn--primary btn--block" style="margin-top: 16px;" data-modal-trigger="consultation">Консультация</button>
  </div>

  <main id="main-content" role="main">
    
    <!-- 404 Hero Section -->
    <section class="error-hero" aria-labelledby="error-title">
      <div class="error-content">
        
        <!-- Анимированный код 404 -->
        <div class="error-code" aria-hidden="true">404</div>
        
        <!-- Архитектурная векторная иллюстрация (SVG) -->
        <div class="error-illustration">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g fill="none" stroke="#A67C52" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <!-- Фундамент -->
              <rect x="40" y="140" width="120" height="15" fill="#FAF8F5" stroke="#2C2A27"/>
              
              <!-- Недостроенные стены в линиях чертежа -->
              <path d="M 50 140 L 50 80" stroke-dasharray="4,4" stroke="#6E6A64" opacity="0.8"/>
              <path d="M 150 140 L 150 80" stroke-dasharray="4,4" stroke="#6E6A64" opacity="0.8"/>
              <path d="M 50 80 L 100 50" stroke-dasharray="4,4" stroke="#6E6A64" opacity="0.8"/>
              <path d="M 150 80 L 100 50" stroke-dasharray="4,4" stroke="#6E6A64" opacity="0.8"/>
              
              <!-- Золотистый кирпич строительной кладки -->
              <g fill="#F3ECE2" stroke="#A67C52" stroke-width="1.5">
                <rect x="50" y="130" width="20" height="10"/>
                <rect x="75" y="130" width="20" height="10"/>
                <rect x="100" y="130" width="20" height="10"/>
                <rect x="125" y="130" width="25" height="10"/>
                
                <rect x="55" y="120" width="20" height="10"/>
                <rect x="80" y="120" width="20" height="10"/>
                <rect x="105" y="120" width="20" height="10"/>
              </g>
              
              <!-- Векторный строительный кран (стиль эскиза) -->
              <g stroke="#2C2A27" stroke-width="2">
                <line x1="100" y1="50" x2="100" y2="20"/>
                <line x1="100" y1="20" x2="160" y2="20"/>
                <line x1="160" y1="20" x2="160" y2="40"/>
                <line x1="100" y1="20" x2="70" y2="20"/>
                <line x1="70" y1="20" x2="70" y2="10"/>
                <line x1="70" y1="10" x2="100" y2="20"/>
                
                <!-- Крюк строительного крана -->
                <line x1="160" y1="40" x2="160" y2="60" stroke-width="1.5"/>
                <circle cx="160" cy="62" r="3" fill="#A67C52"/>
              </g>
              
              <!-- Золотой маркер вопроса чертежа -->
              <g transform="translate(100, 95)">
                <circle cx="0" cy="0" r="16" fill="#F3ECE2" stroke="#A67C52" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" fill="#A67C52" font-size="16" font-weight="bold" font-family="'Inter', sans-serif">?</text>
              </g>
            </g>
          </svg>
        </div>
        
        <h1 id="error-title" class="error-title">
          Похоже, этот дом ещё не построили
        </h1>
        
        <p class="error-subtitle">
          Запрашиваемая страница пока не существует в архитектурном плане нашего сайта. Но не беспокойтесь — у нас есть много готовых проектов и полезных решений!
        </p>
        
        <!-- Форма поиска -->
        <div class="error-search">
          <form class="error-search__form" id="errorSearchForm" role="search">
            <label for="errorSearch" class="visually-hidden">Поиск по сайту</label>
            <input 
              type="search" 
              id="errorSearch" 
              class="error-search__input" 
              placeholder="Что вы искали? Например: калькулятор, проекты..."
              autocomplete="off"
              aria-label="Поиск по сайту"
            >
            <button type="submit" class="error-search__btn">Искать</button>
          </form>
        </div>
        
        <!-- Кнопки навигации -->
        <div class="error-actions">
          <a href="index.html" class="btn btn--primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            На главную
          </a>
          <a href="projects.html" class="btn btn--outline-dark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M9 21V9h6v12"/>
            </svg>
            Наши проекты
          </a>
          <button class="btn btn--outline-dark" data-modal-trigger="consultation">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Консультация
          </button>
        </div>
        
        <!-- Полезные ссылки -->
        <div class="error-help">
          <h2 class="error-help__title">Возможно, вы искали один из разделов:</h2>
          <div class="error-help__links">
            <a href="about.html" class="error-help__link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>О компании</span>
            </a>
            <a href="services.html" class="error-help__link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77"/>
                <path d="M4.8 19.2l-2.3 2.3M12.2 11.8l-2.3 2.3"/>
              </svg>
              <span>Наши услуги</span>
            </a>
            <a href="projects.html" class="error-help__link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="3" x2="9" y2="21"/>
              </svg>
              <span>Портфолио</span>
            </a>
            <a href="calculator.html" class="error-help__link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12" y2="18"/>
              </svg>
              <span>Калькулятор</span>
            </a>
            <a href="blog.html" class="error-help__link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              <span>Блог компании</span>
            </a>
            <a href="contacts.html" class="error-help__link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Контакты</span>
            </a>
          </div>
        </div>
        
        <!-- Строительные факты -->
        <div class="error-fun" id="funFactSection">
          <h3 class="error-fun__title">💡 Полезно знать</h3>
          <p class="error-fun__subtitle">Пока вы здесь, прочитайте интересный факт об архитектуре и строительстве загородных домов</p>
          <div class="error-fun__game">
            <div class="error-fun__fact" id="funFact">
              Нажмите кнопку ниже, чтобы узнать интересный архитектурный или строительный факт!
            </div>
            <button class="error-fun__btn" id="newFactBtn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"/>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
              </svg>
              Новый факт
            </button>
          </div>
        </div>
        
      </div>
    </section>
    
    <!-- CTA Секция -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Не нашли нужную информацию?</h2>
          <p>Наш ведущий архитектор бесплатно проконсультирует вас по любым вопросам проектирования, подбора комплектаций и строительства вашего коттеджа.</p>
          <div class="cta-box__actions">
            <button class="btn btn--accent" data-modal-trigger="consultation">Бесплатная консультация</button>
            <a href="tel:+78005553535" class="btn btn--outline-light">
              +7 (800) 555-35-35
            </a>
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
          <p>Премиальное проектирование, строительство и дизайн интерьера загородных резиденций с 2014 года. Гарантия стабильности и эстетики.</p>
          <div class="social-links">
            <a href="#" aria-label="VKontakte">VK</a>
            <a href="#" aria-label="Telegram">TG</a>
          </div>
        </div>
        
        <div class="footer__col">
          <h4>Компания</h4>
          <ul>
            <li><a href="about.html">О компании</a></li>
            <li><a href="services.html">Услуги</a></li>
            <li><a href="projects.html">Наши проекты</a></li>
            <li><a href="blog.html">Блог архитекторов</a></li>
            <li><a href="contacts.html">Наши контакты</a></li>
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
          <p>Москва, ул. Архитекторов, 12<br>Пн-Пт: 9:00–19:00</p>
        </div>
      </div>
      
      <div class="footer__bottom">
        <p>&copy; 2026 DOMUS VIVA. Все права защищены. Премиальная загородная архитектура.</p>
        <div class="footer__links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Карта сайта</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Интерактивное модальное окно -->
  <div class="modal" id="consultationModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal__backdrop" data-close-modal></div>
    <div class="modal__content">
      <button class="modal__close" data-close-modal aria-label="Закрыть">✕</button>
      <div class="modal__body" id="modalBody">
        <h3 id="modalTitle">Заказать консультацию</h3>
        <p>Заполните форму обратной связи, и наш специалист свяжется с вами в течение получаса для детальной консультации.</p>
        
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
        showToast('✓ Благодарим! Заявка успешно принята. Наш специалист DOMUS VIVA свяжется с вами.');
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

      // Fun Facts about construction
      const funFacts = [
        'Средний загородный дом площадью 200 м² содержит около 50 000 прочных кирпичей.',
        'Первый в мире небоскрёб был возведен в 1885 году и имел всего 10 этажей.',
        'Древний римский строительный бетон прочнее современного — он продолжает укрепляться при взаимодействии с морской водой.',
        'Архитектурный термин «архитектор» происходит от древнегреческого «architekton», что означает «главный строитель».',
        'В Японии жилые дома строят с расчётом на срок службы 30 лет — после чего их технологически проще полностью реконструировать.',
        'Современные энергоэффективные дома стандарта A+ потребляют на 70% меньше энергии для отопления.',
        'Великая Китайская стена скреплена специальным прочным раствором, содержащим клейкую рисовую кашу.',
        'Первый в истории дом с полным электрическим освещением был построен в 1882 году в Нью-Йорке.',
        'Современный BIM-проект коттеджа содержит в себе более 1 миллиона цифровых параметров здания.',
        'Качественный деревянный брус из лиственницы практически не подвержен гниению и со временем каменеет.'
      ];
      
      let currentFactIndex = -1;
      
      const showNewFact = () => {
        const factElement = document.getElementById('funFact');
        if (!factElement) return;
        
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * funFacts.length);
        } while (newIndex === currentFactIndex && funFacts.length > 1);
        
        currentFactIndex = newIndex;
        
        factElement.style.opacity = '0';
        factElement.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
          factElement.textContent = funFacts[currentFactIndex];
          factElement.style.opacity = '1';
          factElement.style.transform = 'translateY(0)';
        }, 200);
      };
      
      const newFactBtn = document.getElementById('newFactBtn');
      if (newFactBtn) {
        newFactBtn.addEventListener('click', showNewFact);
      }
      
      // Обработчик поисковой формы
      const searchForm = document.getElementById('errorSearchForm');
      if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const query = document.getElementById('errorSearch').value.trim().toLowerCase();
          
          if (!query) {
            showToast('Пожалуйста, введите поисковый запрос');
            return;
          }
          
          // Карта разделов по ключевым словам
          const searchMap = {
            'услуг': 'services.html',
            'проект': 'projects.html',
            'ландшафт': 'service-landscape.html',
            'сад': 'service-landscape.html',
            'интерьер': 'service-interior.html',
            'дизайн': 'service-interior.html',
            'строител': 'service-build.html',
            'строить': 'service-build.html',
            'инженер': 'service-engineering.html',
            'отоплен': 'service-engineering.html',
            'свет': 'service-engineering.html',
            'реконструкц': 'service-renovation.html',
            'реновац': 'service-renovation.html',
            'блог': 'blog.html',
            'контакт': 'contacts.html',
            'телефон': 'contacts.html'
          };
          
          let targetPage = null;
          for (const [key, page] of Object.entries(searchMap)) {
            if (query.includes(key)) {
              targetPage = page;
              break;
            }
          }
          
          if (targetPage) {
            showToast('✓ Перенаправляем на найденную страницу...');
            setTimeout(() => {
              window.location.href = targetPage;
            }, 1000);
          } else {
            showToast('Попробуйте выбрать один из разделов, представленных ниже');
          }
        });
      }

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