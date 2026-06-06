<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Калькулятор стоимости коттеджа DOMUS VIVA | Рассчитать онлайн</title>
  
  <!-- Подключение шрифтов -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
  
  <style>
    /* ============================================
       DOMUS VIVA — Global Variables & Resets
       ============================================ */
    :root {
      --color-bg: #FAF9F6;
      --color-bg-alt: #F2EFEA;
      --color-bg-dark: #2A2F2C;
      --color-bg-dark-light: #3A403D;
      --color-accent: #A67C52;
      --color-accent-light: #E8DCC3;
      --color-accent-dark: #8A6440;
      --color-text: #2A2F2C;
      --color-text-muted: #6B6862;
      --color-white: #FFFFFF;
      --color-border: #E8E2D9;
      --color-success: #567568;

      --font-heading: 'Montserrat', sans-serif;
      --font-body: 'Roboto', sans-serif;

      --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
      --space-5: 24px; --space-6: 32px; --space-8: 48px; --space-12: 72px;

      --fs-xs: 0.75rem; --fs-sm: 0.875rem; --fs-base: 1rem; --fs-lg: 1.125rem;
      --fs-xl: 1.25rem; --fs-2xl: 1.5rem; --fs-3xl: 2rem;

      --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px; --radius-xl: 24px; --radius-full: 9999px;

      --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
      --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
      --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
      --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1);

      --duration-fast: 0.15s; --duration-normal: 0.3s;
      --ease-out: cubic-bezier(0.4, 0, 0.2, 1);
      --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font-body); color: var(--color-text); background-color: var(--color-bg); line-height: 1.6; }
    button { cursor: pointer; border: none; background: none; font-family: inherit; }
    a { text-decoration: none; color: inherit; }
    .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 var(--space-4); }
    .visually-hidden { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0; }
    
    /* Buttons */
    .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 24px; border-radius: var(--radius-md); font-weight: 600; transition: all var(--duration-fast); text-align: center; }
    .btn--primary { background: var(--color-accent); color: var(--color-white); }
    .btn--primary:hover { background: var(--color-accent-dark); transform: translateY(-2px); }
    .btn--block { width: 100%; }
    .btn--large { padding: 16px 32px; font-size: var(--fs-lg); }
    .btn--outline-dark { border: 2px solid rgba(255,255,255,0.2); color: var(--color-white); }
    .btn--outline-dark:hover { background: rgba(255,255,255,0.1); }
    
    .text-accent { color: var(--color-accent); }
    
    /* ============================================
       DOMUS VIVA — Calculator Page Styles
       ============================================ */
    .page-header { padding: 80px 0 40px; text-align: center; background: linear-gradient(135deg, var(--color-bg-alt) 0%, var(--color-bg) 100%); }
    .page-header__title { font-family: var(--font-heading); font-size: 2.5rem; font-weight: 800; margin-bottom: 16px; }
    .page-header__subtitle { max-width: 700px; margin: 0 auto 24px; color: var(--color-text-muted); font-size: 1.1rem; }
    .page-header__badges { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
    .badge { background: #e9f2ee; color: var(--color-success); padding: 4px 12px; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 500; }

    .calculator-main { padding: 40px 0 80px; }
    .calc-tabs { display: flex; background: var(--color-bg-alt); border-radius: var(--radius-lg); padding: 8px; margin-bottom: 32px; max-width: 600px; margin-left: auto; margin-right: auto; }
    .calc-tab { flex: 1; padding: 12px 24px; font-family: var(--font-heading); font-weight: 600; color: var(--color-text-muted); border-radius: var(--radius-md); transition: 0.3s; display: flex; align-items: center; justify-content: center; gap: 8px; }
    .calc-tab:hover { background: rgba(255,255,255,0.5); }
    .calc-tab--active { background: var(--color-white); color: var(--color-accent); box-shadow: var(--shadow-sm); }
    
    .calc-panel { display: none; animation: fadeIn 0.4s ease; }
    .calc-panel--active { display: block; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

    .calc-layout { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: start; }
    @media (min-width: 1024px) { .calc-layout { grid-template-columns: 1.3fr 1fr; gap: 60px; } }

    .calc-controls { display: flex; flex-direction: column; gap: 32px; }
    .calc-field { display: flex; flex-direction: column; gap: 12px; }
    .calc-field__header { display: flex; justify-content: space-between; align-items: baseline; }
    .calc-field__header label { font-family: var(--font-heading); font-weight: 600; font-size: 1.1rem; }
    .calc-field__value { font-family: var(--font-heading); color: var(--color-accent); font-size: 1.25rem; font-weight: 700; }
    
    /* Range Sliders */
/* Range Sliders */
input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  background: var(--color-border);
  border-radius: 4px;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--color-accent);
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

input[type="range"]::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background: var(--color-accent);
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}

input[type="range"]::-moz-range-thumb:hover {
  transform: scale(1.15);
}    input[type="range"]::-webkit-slider-thumb:hover { transform: scale(1.15); }
    .calc-field__range { display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--color-text-muted); }
    .calc-field__hint { font-size: 0.85rem; color: var(--color-text-muted); margin-top: -4px; }

    /* Button Groups */
    .calc-btn-group { display: flex; gap: 12px; flex-wrap: wrap; }
    .calc-btn-group--vertical { flex-direction: column; }
    .calc-btn { flex: 1; min-width: 120px; padding: 16px; border: 2px solid var(--color-border); background: var(--color-white); border-radius: var(--radius-md); font-family: var(--font-heading); font-weight: 600; transition: 0.3s; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
    .calc-btn:hover { border-color: var(--color-accent-light); background: var(--color-bg-alt); }
    .calc-btn--active { border-color: var(--color-accent); background: var(--color-accent-light); color: var(--color-accent-dark); }
    .calc-btn span { font-weight: 400; font-size: 0.85rem; color: var(--color-text-muted); font-family: var(--font-body); }
    .calc-btn--active span { color: var(--color-accent-dark); opacity: 0.8; }
    
    .calc-btn--info { flex-direction: row; text-align: left; padding: 16px 20px; }
    .calc-btn__content { display: flex; align-items: center; gap: 16px; width: 100%; }
    .calc-btn__icon { font-size: 1.5rem; }
    .calc-btn__text { display: flex; flex-direction: column; flex: 1; }
    .calc-btn__text strong { font-size: 1rem; }
    .calc-btn__check { color: transparent; font-weight: bold; font-size: 1.2rem; transition: 0.3s; }
    .calc-btn--active .calc-btn__check { color: var(--color-accent); }

    /* Checkboxes */
    .calc-options { display: grid; grid-template-columns: 1fr; gap: 12px; }
    @media (min-width: 640px) { .calc-options { grid-template-columns: 1fr 1fr; } }
    .calc-checkbox { display: flex; gap: 16px; align-items: flex-start; padding: 16px; border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; transition: 0.3s; }
    .calc-checkbox:hover { background: var(--color-bg-alt); }
    .calc-checkbox input { position: absolute; opacity: 0; }
    .calc-checkbox__mark { width: 24px; height: 24px; border: 2px solid var(--color-border); border-radius: 4px; flex-shrink: 0; position: relative; transition: 0.2s; background: var(--color-white); }
    .calc-checkbox input:checked + .calc-checkbox__mark { background: var(--color-accent); border-color: var(--color-accent); }
    .calc-checkbox input:checked + .calc-checkbox__mark::after { content: '✓'; position: absolute; color: white; left: 4px; top: -1px; font-size: 16px; }
    .calc-checkbox__text { display: flex; flex-direction: column; }
    .calc-checkbox__text strong { font-family: var(--font-heading); font-size: 0.95rem; }
    .calc-checkbox__text span { font-size: 0.8rem; color: var(--color-text-muted); }

    /* Sticky Result Panel */
    .calc-result { position: sticky; top: 24px; background: linear-gradient(135deg, var(--color-bg-dark) 0%, var(--color-bg-dark-light) 100%); color: var(--color-white); border-radius: var(--radius-xl); padding: 32px; box-shadow: var(--shadow-xl); }
    .calc-result__header { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 24px; margin-bottom: 24px; }
    .calc-result__label { display: block; font-family: var(--font-heading); font-weight: 600; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; color: rgba(255,255,255,0.7); margin-bottom: 8px; }
    .calc-result__price-wrapper { display: flex; justify-content: center; align-items: baseline; gap: 8px; }
    .calc-result__price { font-family: var(--font-heading); font-size: 3rem; font-weight: 800; color: var(--color-accent); line-height: 1; transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
    .calc-result__currency { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--color-accent); }
    .calc-result__price.animate { transform: scale(1.08); color: #FFF; }
    .calc-result__per-meter { text-align: center; margin-top: 8px; color: rgba(255,255,255,0.7); font-size: 0.9rem; }
    
    /* Breakdown Chart */
    .calc-breakdown { background: rgba(0,0,0,0.2); padding: 24px; border-radius: var(--radius-lg); margin-bottom: 24px; }
    .calc-breakdown h4 { font-family: var(--font-heading); margin-bottom: 16px; font-size: 1rem; }
    .calc-breakdown__chart { width: 120px; height: 120px; margin: 0 auto 24px; position: relative; }
    .calc-breakdown__donut { width: 100%; height: 100%; transform: rotate(-90deg); overflow: visible; }
    .breakdown-segment { transition: stroke-dasharray 0.8s ease-out, stroke-dashoffset 0.8s ease-out; }
    
    .calc-breakdown__list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
    .calc-breakdown__item { display: flex; align-items: center; justify-content: space-between; font-size: 0.9rem; }
    .calc-breakdown__label-wrap { display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.8); }
    .calc-breakdown__dot { width: 12px; height: 12px; border-radius: 50%; }
    .calc-breakdown__value { font-family: var(--font-heading); font-weight: 600; }

    /* Timeline */
    .calc-timeline { margin-bottom: 24px; }
    .calc-timeline h4 { font-family: var(--font-heading); margin-bottom: 12px; font-size: 1rem; }
    .calc-timeline__item { display: flex; align-items: center; gap: 12px; font-size: 0.9rem; margin-bottom: 8px; color: rgba(255,255,255,0.8); }
    .calc-timeline__item svg { width: 20px; height: 20px; fill: var(--color-accent); }

    .calc-result__actions { display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px; }
    .calc-result__disclaimer { font-size: 0.8rem; color: rgba(255,255,255,0.5); text-align: center; display: flex; align-items: flex-start; gap: 8px; line-height: 1.4; }
    .calc-result__disclaimer svg { flex-shrink: 0; margin-top: 2px; }

    /* Mortgage Details */
    .mort-details { background: rgba(0,0,0,0.2); padding: 20px; border-radius: var(--radius-lg); margin-bottom: 24px; }
    .mort-details__row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.95rem; }
    .mort-details__row:last-child { margin-bottom: 0; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px; margin-top: 12px; }
    .mort-details__row span { color: rgba(255,255,255,0.7); }
    .mort-details__row strong { font-family: var(--font-heading); }
    .mort-banks__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 16px; margin-bottom: 24px; }
    .mort-bank { background: rgba(255,255,255,0.05); padding: 12px; border-radius: var(--radius-md); text-align: center; }
    .mort-bank strong { display: block; font-size: 0.9rem; margin: 4px 0; }
    .mort-bank span { font-size: 0.8rem; color: var(--color-accent); }
    .calc-result__help { font-size: 0.85rem; text-align: center; margin-top: 16px; color: rgba(255,255,255,0.6); }

  </style>
</head>
<body class="page-calculator">

  <!-- Скрытый блок SVG символов для иконок (замена внешнему sprite.svg) -->
  <svg width="0" height="0" style="display: none;">
    <symbol id="icon-home" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></symbol>
    <symbol id="icon-bank" viewBox="0 0 24 24"><path fill="currentColor" d="M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"/></symbol>
    <symbol id="icon-calendar" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></symbol>
    <symbol id="icon-hammer" viewBox="0 0 24 24"><path fill="currentColor" d="M21.6 11.5l-6-6c-.4-.4-1-.4-1.4 0l-1.4 1.4-1.4-1.4c-.4-.4-1-.4-1.4 0l-1.4 1.4-1.4-1.4c-.4-.4-1-.4-1.4 0L6 6.9 2 10.9V15h4.1l2.8-2.8 1.4 1.4c.4.4 1 .4 1.4 0l1.4-1.4 1.4 1.4c.4.4 1 .4 1.4 0l1.4-1.4 1.4 1.4c.4.4 1 .4 1.4 0l1.4-1.4 1.4 1.4c.4.4 1 .4 1.4 0z"/></symbol>
    <symbol id="icon-key" viewBox="0 0 24 24"><path fill="currentColor" d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></symbol>
    <symbol id="icon-info" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></symbol>
    <symbol id="icon-doc" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></symbol>
    <symbol id="icon-download" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></symbol>
  </svg>

  <main>
    <!-- Заголовок страницы -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-header__title">Рассчитайте стоимость <span class="text-accent">вашего дома</span></h1>
        <p class="page-header__subtitle">
          Укажите параметры и комплектацию — получите предварительную смету. 
          Точный расчёт подготовит архитектор бесплатно.
        </p>
        <div class="page-header__badges">
          <span class="badge">✓ Бесплатно</span>
          <span class="badge">✓ Актуальные цены 2026</span>
          <span class="badge">✓ Точность 95%</span>
        </div>
      </div>
    </section>

    <!-- Основной блок калькулятора -->
    <section class="calculator-main">
      <div class="container">
        
        <!-- Вкладки (Табы) -->
        <div class="calc-tabs" role="tablist">
          <button class="calc-tab calc-tab--active" data-target="house" role="tab">
            <svg width="24" height="24"><use href="#icon-home"></use></svg>
            Стоимость дома
          </button>
          <button class="calc-tab" data-target="mortgage" role="tab">
            <svg width="24" height="24"><use href="#icon-bank"></use></svg>
            Ипотека
          </button>
        </div>

        <!-- ПАНЕЛЬ 1: КАЛЬКУЛЯТОР ДОМА -->
        <div class="calc-panel calc-panel--active" id="panel-house">
          <div class="calc-layout">
            
            <!-- Настройки -->
            <div class="calc-controls">
              
              <!-- Ползунок площади -->
              <div class="calc-field">
                <div class="calc-field__header">
                  <label for="calcArea">Площадь дома</label>
                  <div class="calc-field__value"><span id="calcAreaValue">150</span> м²</div>
                </div>
                <input type="range" id="calcArea" min="80" max="500" value="150" step="10">
                <div class="calc-field__range"><span>80 м²</span><span>500 м²</span></div>
                <p class="calc-field__hint">Оптимальная площадь для семьи из 4 человек — 140-180 м²</p>
              </div>

              <!-- Этажность -->
              <div class="calc-field">
                <label>Этажность</label>
                <div class="calc-btn-group">
                  <button type="button" class="calc-btn" data-group="floors" data-value="1">
                    <strong>1 этаж</strong>
                  </button>
                  <button type="button" class="calc-btn calc-btn--active" data-group="floors" data-value="2">
                    <strong>2 этажа</strong>
                  </button>
                  <button type="button" class="calc-btn" data-group="floors" data-value="3">
                    <strong>2 + мансарда</strong>
                  </button>
                </div>
              </div>

              <!-- Материал -->
              <div class="calc-field">
                <label>Материал стен</label>
                <div class="calc-btn-group calc-btn-group--vertical">
                  <button type="button" class="calc-btn calc-btn--info calc-btn--active" data-group="material" data-value="gas">
                    <div class="calc-btn__content">
                      <span class="calc-btn__icon">🧱</span>
                      <div class="calc-btn__text">
                        <strong>Газобетон</strong><span>Тёплый, быстрый монтаж</span>
                      </div>
                      <span class="calc-btn__check">✓</span>
                    </div>
                  </button>
                  <button type="button" class="calc-btn calc-btn--info" data-group="material" data-value="brick">
                    <div class="calc-btn__content">
                      <span class="calc-btn__icon">🏛️</span>
                      <div class="calc-btn__text">
                        <strong>Керамический блок</strong><span>Премиальная прочность</span>
                      </div>
                      <span class="calc-btn__check">✓</span>
                    </div>
                  </button>
                  <button type="button" class="calc-btn calc-btn--info" data-group="material" data-value="wood">
                    <div class="calc-btn__content">
                      <span class="calc-btn__icon">🪵</span>
                      <div class="calc-btn__text">
                        <strong>Клееный брус</strong><span>Экологично и эстетично</span>
                      </div>
                      <span class="calc-btn__check">✓</span>
                    </div>
                  </button>
                </div>
              </div>

              <!-- Комплектация -->
              <div class="calc-field">
                <label>Комплектация</label>
                <div class="calc-btn-group">
                  <button type="button" class="calc-btn" data-group="package" data-value="basic">
                    <strong>Базовая</strong><span>Коробка + кровля</span>
                  </button>
                  <button type="button" class="calc-btn calc-btn--active" data-group="package" data-value="standard">
                    <strong>Стандарт</strong><span>Под чистовую</span>
                  </button>
                  <button type="button" class="calc-btn" data-group="package" data-value="premium">
                    <strong>Премиум</strong><span>Под ключ</span>
                  </button>
                </div>
              </div>

              <!-- Дополнительные опции -->
              <div class="calc-field">
                <label>Дополнительные опции</label>
                <div class="calc-options">
                  <label class="calc-checkbox">
                    <input type="checkbox" id="optEngineering" checked>
                    <span class="calc-checkbox__mark"></span>
                    <div class="calc-checkbox__text">
                      <strong>Инженерные системы</strong><span>Отопление, электрика, вода</span>
                    </div>
                  </label>
                  <label class="calc-checkbox">
                    <input type="checkbox" id="optSmart">
                    <span class="calc-checkbox__mark"></span>
                    <div class="calc-checkbox__text">
                      <strong>Система «Умный дом»</strong><span>+8 000 ₽/м²</span>
                    </div>
                  </label>
                  <label class="calc-checkbox">
                    <input type="checkbox" id="optGarage">
                    <span class="calc-checkbox__mark"></span>
                    <div class="calc-checkbox__text">
                      <strong>Пристроенный гараж</strong><span>На 2 авто</span>
                    </div>
                  </label>
                  <label class="calc-checkbox">
                    <input type="checkbox" id="optLandscape">
                    <span class="calc-checkbox__mark"></span>
                    <div class="calc-checkbox__text">
                      <strong>Ландшафтный дизайн</strong><span>От 800 000 ₽</span>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            <!-- Боковая панель результатов (Sticky) -->
            <div class="calc-result">
              <div class="calc-result__header">
                <span class="calc-result__label">Итоговая стоимость</span>
                <div class="calc-result__price-wrapper">
                  <span class="calc-result__price" id="calcTotalPrice">0</span>
                  <span class="calc-result__currency">₽</span>
                </div>
                <div class="calc-result__per-meter">≈ <strong id="calcPricePerMeter">0</strong> ₽/м²</div>
              </div>

              <!-- Диаграмма разбивки -->
              <div class="calc-breakdown">
                <h4>Структура стоимости</h4>
                <div class="calc-breakdown__chart">
                  <svg viewBox="0 0 200 200" class="calc-breakdown__donut">
                    <!-- Base circle -->
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#E8E2D9" stroke-width="20" opacity="0.2"/>
                    <!-- Segments -->
                    <circle id="segWalls" cx="100" cy="100" r="80" fill="none" stroke="#A67C52" stroke-width="20" class="breakdown-segment" stroke-dasharray="0 502" stroke-dashoffset="0" />
                    <circle id="segEngineering" cx="100" cy="100" r="80" fill="none" stroke="#567568" stroke-width="20" class="breakdown-segment" stroke-dasharray="0 502" stroke-dashoffset="0" />
                    <circle id="segFinishing" cx="100" cy="100" r="80" fill="none" stroke="#E8DCC3" stroke-width="20" class="breakdown-segment" stroke-dasharray="0 502" stroke-dashoffset="0" />
                    <circle id="segOther" cx="100" cy="100" r="80" fill="none" stroke="#1F3A93" stroke-width="20" class="breakdown-segment" stroke-dasharray="0 502" stroke-dashoffset="0" />
                  </svg>
                </div>
                <ul class="calc-breakdown__list">
                  <li class="calc-breakdown__item">
                    <div class="calc-breakdown__label-wrap"><span class="calc-breakdown__dot" style="background:#A67C52"></span>Коробка и кровля</div>
                    <strong class="calc-breakdown__value" id="valWalls">0 ₽</strong>
                  </li>
                  <li class="calc-breakdown__item">
                    <div class="calc-breakdown__label-wrap"><span class="calc-breakdown__dot" style="background:#567568"></span>Инженерия</div>
                    <strong class="calc-breakdown__value" id="valEngineering">0 ₽</strong>
                  </li>
                  <li class="calc-breakdown__item">
                    <div class="calc-breakdown__label-wrap"><span class="calc-breakdown__dot" style="background:#E8DCC3"></span>Отделка</div>
                    <strong class="calc-breakdown__value" id="valFinishing">0 ₽</strong>
                  </li>
                  <li class="calc-breakdown__item">
                    <div class="calc-breakdown__label-wrap"><span class="calc-breakdown__dot" style="background:#1F3A93"></span>Доп. опции</div>
                    <strong class="calc-breakdown__value" id="valOther">0 ₽</strong>
                  </li>
                </ul>
              </div>

              <!-- Сроки -->
              <div class="calc-timeline">
                <h4>Ориентировочные сроки</h4>
                <div class="calc-timeline__item">
                  <svg><use href="#icon-calendar"></use></svg>
                  <span>Проектирование: <strong>4-6 недель</strong></span>
                </div>
                <div class="calc-timeline__item">
                  <svg><use href="#icon-hammer"></use></svg>
                  <span>Строительство: <strong id="calcTimeline">6 месяцев</strong></span>
                </div>
              </div>

              <div class="calc-result__actions">
                <button class="btn btn--primary btn--large btn--block">
                  <svg width="20" height="20"><use href="#icon-doc"></use></svg> Получить смету на email
                </button>
              </div>
              <p class="calc-result__disclaimer">
                <svg width="16" height="16"><use href="#icon-info"></use></svg>
                Окончательная цена зависит от участка и выбранных материалов.
              </p>
            </div>
          </div>
        </div>

        <!-- ПАНЕЛЬ 2: ИПОТЕЧНЫЙ КАЛЬКУЛЯТОР -->
        <div class="calc-panel" id="panel-mortgage">
          <div class="calc-layout">
            
            <div class="calc-controls">
              
              <div class="calc-field">
                <div class="calc-field__header">
                  <label for="mortPrice">Стоимость дома</label>
                  <div class="calc-field__value"><span id="mortPriceValue">12 000 000</span> ₽</div>
                </div>
                <input type="range" id="mortPrice" min="3000000" max="50000000" value="12000000" step="500000">
                <div class="calc-field__range"><span>3 млн ₽</span><span>50 млн ₽</span></div>
              </div>

              <div class="calc-field">
                <div class="calc-field__header">
                  <label for="mortDown">Первоначальный взнос</label>
                  <div class="calc-field__value"><span id="mortDownPercent">20</span>% (<span id="mortDownSum">2 400 000</span> ₽)</div>
                </div>
                <input type="range" id="mortDown" min="10" max="90" value="20" step="5">
                <div class="calc-field__range"><span>10%</span><span>90%</span></div>
              </div>

              <div class="calc-field">
                <div class="calc-field__header">
                  <label for="mortTerm">Срок кредита</label>
                  <div class="calc-field__value"><span id="mortTermValue">20</span> лет</div>
                </div>
                <input type="range" id="mortTerm" min="1" max="30" value="20" step="1">
                <div class="calc-field__range"><span>1 год</span><span>30 лет</span></div>
              </div>

              <div class="calc-field">
                <label>Программа ипотеки</label>
                <div class="calc-btn-group calc-btn-group--vertical">
                  <button type="button" class="calc-btn calc-btn--info calc-btn--active" data-group="mortProgram" data-value="family">
                    <div class="calc-btn__content">
                      <span class="calc-btn__icon">👨‍👩‍👧</span>
                      <div class="calc-btn__text"><strong>Семейная ипотека</strong><span id="rateFamily">Ставка 6%</span></div>
                      <span class="calc-btn__check">✓</span>
                    </div>
                  </button>
                  <button type="button" class="calc-btn calc-btn--info" data-group="mortProgram" data-value="it">
                    <div class="calc-btn__content">
                      <span class="calc-btn__icon">💻</span>
                      <div class="calc-btn__text"><strong>IT-ипотека</strong><span id="rateIt">Ставка 5%</span></div>
                      <span class="calc-btn__check">✓</span>
                    </div>
                  </button>
                  <button type="button" class="calc-btn calc-btn--info" data-group="mortProgram" data-value="standard">
                    <div class="calc-btn__content">
                      <span class="calc-btn__icon">🏦</span>
                      <div class="calc-btn__text"><strong>Стандартная</strong><span id="rateStandard">Ставка 16%</span></div>
                      <span class="calc-btn__check">✓</span>
                    </div>
                  </button>
                </div>
              </div>

            </div>

            <div class="calc-result">
              <div class="calc-result__header">
                <span class="calc-result__label">Ежемесячный платёж</span>
                <div class="calc-result__price-wrapper">
                  <span class="calc-result__price" id="mortMonthly">0</span>
                  <span class="calc-result__currency">₽/мес</span>
                </div>
              </div>

              <div class="mort-details">
                <div class="mort-details__row">
                  <span>Сумма кредита</span>
                  <strong id="mortLoanAmount">0 ₽</strong>
                </div>
                <div class="mort-details__row">
                  <span>Процентная ставка</span>
                  <strong id="mortRate" class="text-accent">6%</strong>
                </div>
                <div class="mort-details__row">
                  <span>Переплата по процентам</span>
                  <strong id="mortOverpay">0 ₽</strong>
                </div>
                <div class="mort-details__row">
                  <span>Общая сумма выплат</span>
                  <strong id="mortTotal">0 ₽</strong>
                </div>
              </div>

              <div class="mort-banks">
                <h4 style="text-align: center; margin-bottom: 8px;">Банки-партнёры</h4>
                <div class="mort-banks__grid">
                  <div class="mort-bank"><strong>Сбербанк</strong><span>от 6%</span></div>
                  <div class="mort-bank"><strong>ДОМ.РФ</strong><span>от 5.5%</span></div>
                  <div class="mort-bank"><strong>ВТБ</strong><span>от 6%</span></div>
                  <div class="mort-bank"><strong>Альфа-Банк</strong><span>от 5.8%</span></div>
                </div>
              </div>

              <div class="calc-result__actions">
                <button class="btn btn--primary btn--large btn--block">Одобрить ипотеку бесплатно</button>
              </div>
              <p class="calc-result__help">Наш брокер подаст заявки в 12 банков</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  </main>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      'use strict';

      const $ = (sel) => document.querySelector(sel);
      const $$ = (sel) => Array.from(document.querySelectorAll(sel));

      // Утилита форматирования
      const formatPrice = (val) => Math.round(val).toLocaleString('ru-RU');

      // Анимация изменения чисел
      const animateValue = (el, newValue, prefix = '', suffix = '') => {
        if (!el) return;
        el.classList.remove('animate');
        void el.offsetWidth; // trigger reflow
        el.textContent = prefix + formatPrice(newValue) + suffix;
        el.classList.add('animate');
      };

      // ==========================================
      // ТАБЫ
      // ==========================================
      const tabs = $$('.calc-tab');
      const panels = $$('.calc-panel');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('calc-tab--active'));
          panels.forEach(p => p.classList.remove('calc-panel--active'));
          
          tab.classList.add('calc-tab--active');
          $(`#panel-${tab.dataset.target}`).classList.add('calc-panel--active');
        });
      });

      // Универсальный обработчик для радио-кнопок
      const bindRadioGroups = (callback) => {
        $$('.calc-btn[data-group]').forEach(btn => {
          btn.addEventListener('click', () => {
            const group = btn.dataset.group;
            $$(`.calc-btn[data-group="${group}"]`).forEach(b => b.classList.remove('calc-btn--active'));
            btn.classList.add('calc-btn--active');
            callback();
          });
        });
      };

      // ==========================================
      // КАЛЬКУЛЯТОР ДОМА
      // ==========================================
      const HOUSE_RATES = {
        material: { gas: 35000, brick: 55000, wood: 45000 },
        floors: { '1': 1, '2': 1.15, '3': 1.25 },
        package: { basic: 1, standard: 1.25, premium: 1.5 },
        smart: 8000,
        landscape: 800000,
        garage: 1200000
      };

      const getHouseState = () => ({
        area: parseInt($('#calcArea').value),
        floors: $('.calc-btn--active[data-group="floors"]').dataset.value,
        material: $('.calc-btn--active[data-group="material"]').dataset.value,
        package: $('.calc-btn--active[data-group="package"]').dataset.value,
        engineering: $('#optEngineering').checked,
        smart: $('#optSmart').checked,
        garage: $('#optGarage').checked,
        landscape: $('#optLandscape').checked
      });

      const updateHouseUI = () => {
        const state = getHouseState();
        
        // Базовая коробка
        let basePrice = HOUSE_RATES.material[state.material] * state.area;
        let wallsPrice = basePrice * HOUSE_RATES.floors[state.floors];
        
        // Инженерия (примерно 20% от коробки, если выбрана)
        let engPrice = state.engineering ? wallsPrice * 0.2 : 0;
        
        // Отделка (зависит от комплектации)
        let finishPrice = 0;
        if (state.package === 'standard') finishPrice = wallsPrice * 0.25;
        if (state.package === 'premium') finishPrice = wallsPrice * 0.5;

        // Доп опции
        let otherPrice = 0;
        if (state.smart) otherPrice += HOUSE_RATES.smart * state.area;
        if (state.landscape) otherPrice += HOUSE_RATES.landscape;
        if (state.garage) otherPrice += HOUSE_RATES.garage;

        const total = wallsPrice + engPrice + finishPrice + otherPrice;

        // Обновление текстов
        $('#calcAreaValue').textContent = state.area;
        animateValue($('#calcTotalPrice'), total);
        $('#calcPricePerMeter').textContent = formatPrice(total / state.area);
        
        $('#valWalls').textContent = formatPrice(wallsPrice) + ' ₽';
        $('#valEngineering').textContent = formatPrice(engPrice) + ' ₽';
        $('#valFinishing').textContent = formatPrice(finishPrice) + ' ₽';
        $('#valOther').textContent = formatPrice(otherPrice) + ' ₽';

        let months = state.area < 150 ? 5 : state.area < 250 ? 7 : 10;
        if (state.material === 'wood') months -= 1;
        $('#calcTimeline').textContent = `${months} месяцев`;

        // Обновление SVG диаграммы (Donut)
        const C = 2 * Math.PI * 80; // длина окружности (r=80) ~ 502.65
        let offset = 0;
        
        const segments = [
          { id: '#segWalls', val: wallsPrice },
          { id: '#segEngineering', val: engPrice },
          { id: '#segFinishing', val: finishPrice },
          { id: '#segOther', val: otherPrice }
        ];

        segments.forEach(seg => {
          const el = $(seg.id);
          if (total === 0) {
            el.style.strokeDasharray = `0 ${C}`;
          } else {
            const dash = (seg.val / total) * C;
            el.style.strokeDasharray = `${dash} ${C}`;
            el.style.strokeDashoffset = -offset;
            offset += dash;
          }
        });
      };

      // Слушатели дома
      $('#calcArea').addEventListener('input', updateHouseUI);
      $$('#panel-house input[type="checkbox"]').forEach(cb => cb.addEventListener('change', updateHouseUI));
      

      // ==========================================
      // ИПОТЕЧНЫЙ КАЛЬКУЛЯТОР
      // ==========================================
      const MORTGAGE_RATES = { family: 6, it: 5, standard: 16 };

      const getMortgageState = () => ({
        price: parseInt($('#mortPrice').value),
        downPct: parseInt($('#mortDown').value),
        termYears: parseInt($('#mortTerm').value),
        program: $('.calc-btn--active[data-group="mortProgram"]').dataset.value
      });

      const updateMortgageUI = () => {
        const state = getMortgageState();
        
        const rate = MORTGAGE_RATES[state.program];
        const downSum = state.price * (state.downPct / 100);
        const loanAmount = state.price - downSum;
        const months = state.termYears * 12;
        const monthRate = rate / 100 / 12;

        // Аннуитетный платеж
        let monthly = 0;
        if (monthRate > 0) {
          monthly = loanAmount * (monthRate * Math.pow(1 + monthRate, months)) / (Math.pow(1 + monthRate, months) - 1);
        } else {
          monthly = loanAmount / months;
        }

        const totalPayout = monthly * months;
        const overpay = totalPayout - loanAmount;

        // Обновление UI
        $('#mortPriceValue').textContent = formatPrice(state.price);
        $('#mortDownPercent').textContent = state.downPct;
        $('#mortDownSum').textContent = formatPrice(downSum);
        $('#mortTermValue').textContent = state.termYears;
        
        $('#mortRate').textContent = rate + '%';
        animateValue($('#mortMonthly'), monthly);
        $('#mortLoanAmount').textContent = formatPrice(loanAmount) + ' ₽';
        $('#mortOverpay').textContent = formatPrice(overpay) + ' ₽';
        $('#mortTotal').textContent = formatPrice(totalPayout) + ' ₽';
      };

      // Слушатели ипотеки
      ['#mortPrice', '#mortDown', '#mortTerm'].forEach(id => {
        $(id).addEventListener('input', updateMortgageUI);
      });

      // Привязка радиокнопок для обоих калькуляторов
      bindRadioGroups(() => {
        updateHouseUI();
        updateMortgageUI();
      });

      // Инициализация
      updateHouseUI();
      updateMortgageUI();
    });
  </script>
</body>
</html>