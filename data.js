<!-- 
  ============================================================================
  DOMUS VIVA — CTA Banner Template
  Призыв к действию для внутренних страниц
  ============================================================================
  Использование:
    {% include "templates/cta-banner.html" with {
      title: 'Готовы начать строительство?',
      subtitle: 'Бесплатная консультация архитектора',
      button_text: 'Оставить заявку',
      theme: 'dark'
    } %}
  
  Переменные:
    {{title}}          — заголовок (по умолчанию: "Готовы построить дом мечты?")
    {{subtitle}}       — подзаголовок
    {{button_text}}    — текст кнопки
    {{modal_type}}     — тип модального окна (consultation/callback/estimate)
    {{theme}}          — тема: light, dark, accent (по умолчанию: dark)
    {{bg_image}}       — фоновое изображение (опционально)
  ============================================================================
-->

<section class="cta-banner cta-banner--{{theme|default('dark')}}"
         {% if bg_image %}style="background-image: url('{{bg_image}}')"{% endif %}
         aria-labelledby="cta-title-{{theme|default('dark')}}">
  <div class="container">
    <div class="cta-banner__inner">
      
      <!-- Контент -->
      <div class="cta-banner__content">
        <h2 class="cta-banner__title" id="cta-title-{{theme|default('dark')}}">
          {{title|default("Готовы построить дом мечты?")}}
        </h2>
        {% if subtitle %}
        <p class="cta-banner__subtitle">
          {{subtitle}}
        </p>
        {% endif %}
      </div>

      <!-- Действия -->
      <div class="cta-banner__actions">
        <button class="btn btn--primary btn--lg" 
                data-modal="{{modal_type|default('consultation')}}">
          {{button_text|default("Оставить заявку")}}
        </button>
        <a href="tel:+78005553535" class="btn btn--outline btn--lg">
          <svg width="20" height="20" aria-hidden="true">
            <use href="/assets/icons/sprite.svg#phone"></use>
          </svg>
          +7 (800) 555-35-35
        </a>
      </div>
      
    </div>
  </div>
</section>

<!-- 
  ============================================================================
  CSS для CTA-баннера (если не подключен components.css)
  ============================================================================
-->
<style>
.cta-banner {
  padding: 80px 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.cta-banner--light {
  background-color: var(--color-bg, #FAF9F6);
  color: var(--color-text, #2C2A27);
}

.cta-banner--dark {
  background: linear-gradient(135deg, #1A1D23 0%, #2A2D35 100%);
  color: #FFFFFF;
}

.cta-banner--accent {
  background: linear-gradient(135deg, #A67C52 0%, #8A6540 100%);
  color: #FFFFFF;
}

.cta-banner__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
}

@media (min-width: 768px) {
  .cta-banner__inner {
    grid-template-columns: 1.5fr 1fr;
  }
}

.cta-banner__title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 16px;
  line-height: 1.2;
}

.cta-banner--dark .cta-banner__title,
.cta-banner--accent .cta-banner__title {
  color: #FFFFFF;
}

.cta-banner__subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
  line-height: 1.6;
}

.cta-banner__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

@media (min-width: 768px) {
  .cta-banner__actions {
    justify-content: flex-end;
  }
}
</style>