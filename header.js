<!-- 
  ============================================================================
  DOMUS VIVA — Header Template
  ============================================================================
  Использование в Nunjucks/Twig:
    {% include "templates/header.html" %}
  
  Использование в WordPress (PHP):
    get_template_part('templates/header');
  
  Переменные для замены:
    {{site_url}}      — URL сайта (https://domusviva.ru)
    {{current_page}}  — текущая страница (index, about, services...)
    {{logo_src}}      — путь к логотипу
    {{logo_alt}}      — alt логотипа
    {{phone}}         — телефон
    {{phone_href}}    — телефон в формате tel:+7...
    {{lang}}          — текущий язык (ru/en)
    {{cta_text}}      — текст CTA-кнопки
  ============================================================================
-->

<header class="header" id="header" role="banner" itemscope itemtype="https://schema.org/WPHeader">
  <div class="container header__inner">
    
    <!-- Логотип -->
    <a href="{{site_url}}/" class="logo" aria-label="{{logo_alt}} - На главную" itemprop="url">
      <img src="{{logo_src}}" alt="{{logo_alt}}" width="40" height="40" class="logo__img" itemprop="image">
      <span class="logo__text" itemprop="name">DOMUS VIVA</span>
    </a>

    <!-- Основная навигация -->
    <nav class="nav" role="navigation" aria-label="Основное меню" itemscope itemtype="https://schema.org/SiteNavigationElement">
      <ul class="nav__list">
        <li class="nav__item" itemprop="name">
          <a href="{{site_url}}/about.html" class="nav__link {% if current_page == 'about' %}nav__link--active{% endif %}" 
             {% if current_page == 'about' %}aria-current="page"{% endif %} 
             itemprop="url">О компании</a>
        </li>
        <li class="nav__item" itemprop="name">
          <a href="{{site_url}}/services.html" class="nav__link {% if current_page == 'services' %}nav__link--active{% endif %}" 
             {% if current_page == 'services' %}aria-current="page"{% endif %} 
             itemprop="url">Услуги</a>
        </li>
        <li class="nav__item" itemprop="name">
          <a href="{{site_url}}/projects.html" class="nav__link {% if current_page == 'projects' %}nav__link--active{% endif %}" 
             {% if current_page == 'projects' %}aria-current="page"{% endif %} 
             itemprop="url">Проекты</a>
        </li>
        <li class="nav__item" itemprop="name">
          <a href="{{site_url}}/blog.html" class="nav__link {% if current_page == 'blog' %}nav__link--active{% endif %}" 
             {% if current_page == 'blog' %}aria-current="page"{% endif %} 
             itemprop="url">Блог</a>
        </li>
        <li class="nav__item" itemprop="name">
          <a href="{{site_url}}/contacts.html" class="nav__link {% if current_page == 'contacts' %}nav__link--active{% endif %}" 
             {% if current_page == 'contacts' %}aria-current="page"{% endif %} 
             itemprop="url">Контакты</a>
        </li>
      </ul>
    </nav>

    <!-- Действия в шапке -->
    <div class="header__actions">
      
      <!-- Переключатель языков (мультиязычность, ТЗ п.11) -->
      <div class="lang-switcher" role="group" aria-label="Выбор языка">
        <button class="lang-btn {% if lang == 'ru' %}lang-btn--active{% endif %}" 
                data-lang="ru" 
                aria-pressed="{% if lang == 'ru' %}true{% else %}false{% endif %}">RU</button>
        <span class="lang-divider" aria-hidden="true">/</span>
        <button class="lang-btn {% if lang == 'en' %}lang-btn--active{% endif %}" 
                data-lang="en" 
                aria-pressed="{% if lang == 'en' %}true{% else %}false{% endif %}">EN</button>
      </div>

      <!-- Телефон (кликабельный) -->
      <a href="{{phone_href}}" class="header__phone" itemprop="telephone" aria-label="Позвонить {{phone}}">
        {{phone}}
      </a>

      <!-- CTA-кнопка -->
      <button class="btn btn--primary btn--sm" data-modal="consultation">
        {{cta_text|default("Консультация")}}
      </button>

      <!-- Кнопка бургер-меню (мобильная) -->
      <button class="burger" id="burgerBtn" 
              aria-label="Открыть меню" 
              aria-expanded="false" 
              aria-controls="mobileMenu">
        <span class="burger__line" aria-hidden="true"></span>
        <span class="burger__line" aria-hidden="true"></span>
        <span class="burger__line" aria-hidden="true"></span>
      </button>
    </div>
  </div>

  <!-- Мобильное меню (выпадающее) -->
  <div class="mobile-menu" id="mobileMenu" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Мобильное меню">
    <div class="mobile-menu__backdrop" data-close-menu aria-hidden="true"></div>
    <div class="mobile-menu__content">
      <div class="mobile-menu__header">
        <a href="{{site_url}}/" class="logo" aria-label="{{logo_alt}}">
          <img src="{{logo_src}}" alt="{{logo_alt}}" width="40" height="40">
          <span class="logo__text">DOMUS VIVA</span>
        </a>
        <button class="mobile-menu__close" data-close-menu aria-label="Закрыть меню">
          <span aria-hidden="true">✕</span>
        </button>
      </div>
      <nav class="mobile-menu__nav" role="navigation" aria-label="Мобильное меню">
        <a href="{{site_url}}/about.html" class="mobile-menu__link">О компании</a>
        <a href="{{site_url}}/services.html" class="mobile-menu__link">Услуги</a>
        <a href="{{site_url}}/projects.html" class="mobile-menu__link">Проекты</a>
        <a href="{{site_url}}/blog.html" class="mobile-menu__link">Блог</a>
        <a href="{{site_url}}/contacts.html" class="mobile-menu__link">Контакты</a>
        <a href="{{site_url}}/calculator.html" class="mobile-menu__link">Калькулятор</a>
      </nav>
      <div class="mobile-menu__footer">
        <a href="{{phone_href}}" class="btn btn--primary btn--block" itemprop="telephone">
          {{phone}}
        </a>
        <button class="btn btn--outline btn--block" data-modal="callback">
          Заказать звонок
        </button>
      </div>
    </div>
  </div>
</header>
