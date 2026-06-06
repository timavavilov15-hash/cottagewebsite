<!-- 
  ============================================================================
  DOMUS VIVA — Footer Template
  ============================================================================
  Переменные:
    {{site_url}}       — URL сайта
    {{phone}}          — телефон
    {{phone_href}}     — tel:+7...
    {{email}}          — email
    {{address}}        — адрес офиса
    {{work_hours}}     — часы работы
    {{social_links}}   — массив соцсетей [{name, url, icon}]
    {{current_year}}   — текущий год
  ============================================================================
-->

<footer class="footer" role="contentinfo" itemscope itemtype="https://schema.org/WPFooter">
  <div class="container">
    <div class="footer__grid">
      
      <!-- Колонка 1: О компании -->
      <div class="footer__col footer__about">
        <a href="{{site_url}}/" class="logo logo--light" itemprop="url">
          <img src="/assets/icons/logo.svg" alt="DOMUS VIVA" width="40" height="40">
          <span class="logo__text" itemprop="name">DOMUS VIVA</span>
        </a>
        <p class="footer__description" itemprop="description">
          Премиальное строительство коттеджей с 2014 года. 
          Гарантия 15 лет, прозрачная смета, индивидуальный подход.
        </p>
        <div class="footer__social">
          {% for social in social_links %}
          <a href="{{social.url}}" class="social-link" 
             aria-label="{{social.name}}" 
             target="_blank" 
             rel="noopener noreferrer"
             itemprop="sameAs">
            <svg width="24" height="24" aria-hidden="true">
              <use href="/assets/icons/sprite.svg#{{social.icon}}"></use>
            </svg>
          </a>
          {% endfor %}
        </div>
      </div>

      <!-- Колонка 2: Навигация -->
      <div class="footer__col">
        <h4 class="footer__title">Навигация</h4>
        <ul class="footer__nav">
          <li><a href="{{site_url}}/about.html">О компании</a></li>
          <li><a href="{{site_url}}/services.html">Услуги</a></li>
          <li><a href="{{site_url}}/projects.html">Проекты</a></li>
          <li><a href="{{site_url}}/blog.html">Блог</a></li>
          <li><a href="{{site_url}}/contacts.html">Контакты</a></li>
          <li><a href="{{site_url}}/calculator.html">Калькулятор</a></li>
        </ul>
      </div>

      <!-- Колонка 3: Услуги -->
      <div class="footer__col">
        <h4 class="footer__title">Услуги</h4>
        <ul class="footer__nav">
          <li><a href="{{site_url}}/services.html#design">Проектирование</a></li>
          <li><a href="{{site_url}}/services.html#build">Строительство</a></li>
          <li><a href="{{site_url}}/services.html#engineering">Инженерия</a></li>
          <li><a href="{{site_url}}/services.html#landscape">Ландшафт</a></li>
          <li><a href="{{site_url}}/services.html#interior">Дизайн интерьера</a></li>
          <li><a href="{{site_url}}/services.html#renovation">Реконструкция</a></li>
        </ul>
      </div>

      <!-- Колонка 4: Контакты -->
      <div class="footer__col footer__contacts" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
        <h4 class="footer__title">Контакты</h4>
        <p class="footer__contact-item">
          <a href="{{phone_href}}" class="footer__phone" itemprop="telephone">
            {{phone}}
          </a>
        </p>
        <p class="footer__contact-item">
          <a href="mailto:{{email}}" itemprop="email">
            {{email}}
          </a>
        </p>
        <p class="footer__contact-item" itemprop="streetAddress">
          {{address}}
        </p>
        <p class="footer__contact-item" itemprop="openingHours">
          {{work_hours}}
        </p>
      </div>
    </div>

    <!-- Нижняя часть футера -->
    <div class="footer__bottom">
      <p class="footer__copyright">
        &copy; {{current_year}} DOMUS VIVA. Все права защищены.
      </p>
      <div class="footer__links">
        <a href="{{site_url}}/privacy.html">Политика конфиденциальности</a>
        <a href="{{site_url}}/sitemap.xml">Карта сайта</a>
        <a href="{{site_url}}/robots.txt">robots.txt</a>
      </div>
    </div>
  </div>
</footer>