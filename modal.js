<!-- 
  ============================================================================
  DOMUS VIVA — Modal Shell Template
  Универсальная оболочка модального окна
  ============================================================================
  Использование:
    {% set modal_content %}
      <h3>Заголовок</h3>
      <p>Содержимое...</p>
    {% endset %}
    {% include "templates/modal-shell.html" with { content: modal_content } %}
  
  Переменные:
    {{modal_id}}      — ID модального окна (по умолчанию: modal)
    {{content}}       — HTML-содержимое модального окна
    {{size}}          — размер: sm, md, lg, xl (по умолчанию: md)
    {{closable}}      — можно ли закрыть по клику на фон (true/false)
  ============================================================================
-->

<div class="modal" 
     id="{{modal_id|default('modal')}}" 
     aria-hidden="true" 
     role="dialog" 
     aria-modal="true"
     aria-labelledby="{{modal_id|default('modal')}}-title">
  
  <!-- Backdrop (фон) -->
  <div class="modal__backdrop" 
       {% if closable|default(true) %}data-close-modal{% endif %}
       aria-hidden="true"></div>
  
  <!-- Контент -->
  <div class="modal__content modal__content--{{size|default('md')}}">
    
    <!-- Кнопка закрытия -->
    <button class="modal__close" 
            data-close-modal 
            aria-label="Закрыть окно">
      <span aria-hidden="true">✕</span>
    </button>
    
    <!-- Тело модального окна (динамическое содержимое) -->
    <div class="modal__body" id="{{modal_id|default('modal')}}-body">
      {{content}}
    </div>
  </div>
</div>
