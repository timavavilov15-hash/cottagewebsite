# ARCHITECTURE - Описание архитектуры проекта

## 📐 Общая архитектура

Проект построен на принципах модульной архитектуры с разделением ответственности на слои:

```
┌─────────────────────────────────────┐
│      HTML (Markup Layer)            │
│   ├── index.html                    │
│   ├── about.html                    │
│   ├── services.html                 │
│   └── ... (7 основных страниц)      │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│      CSS (Styling Layer)            │
│   ├── variables.css (Design Tokens) │
│   ├── reset.css (Normalize)         │
│   ├── layout.css (Grid, Layout)     │
│   ├── components.css (UI Kit)       │
│   ├── animations.css (Motion)       │
│   ├── pages.css (Page-specific)     │
│   ├── utilities.css (Utils)         │
│   └── styles.css (Main Entry)       │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│    JavaScript (Logic Layer)         │
│   ├── main.js (Entry Point)         │
│   ├── data.js (State Management)    │
│   ├── shared.js (Shared Utils)      │
│   └── modules/                      │
│       ├── header.js                 │
│       ├── modal.js                  │
│       ├── form.js                   │
│       ├── animations.js             │
│       ├── portfolio.js              │
│       ├── calculator.js             │
│       ├── slider.js                 │
│       ├── i18n.js                   │
│       └── seo.js                    │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│    Assets (Media Layer)             │
│   ├── images/                       │
│   ├── icons/                        │
│   ├── videos/                       │
│   └── animations/                   │
└─────────────────────────────────────┘
```

## 🗂️ Детальная структура

### CSS Слои (по порядку импорта)

1. **variables.css** - Design Tokens
   - Цветовая палитра
   - Типографика
   - Spacing система
   - Border radius
   - Shadows
   - Z-index шкала

2. **reset.css** - Normalize styles
   - CSS Reset
   - Базовая типография
   - Форм-элементы
   - Списки, таблицы и т.д.

3. **layout.css** - Grid & Layout
   - Container
   - Grid система
   - Flexbox утилиты
   - Header и Footer
   - Мобильное меню

4. **components.css** - UI Kit
   - Buttons (5 вариантов)
   - Forms (input, textarea, select)
   - Cards
   - Modals
   - Toasts & Alerts
   - Badges
   - Pagination

5. **animations.css** - Motion
   - Fade, Slide, Scale animations
   - Bounce, Rotate, Pulse
   - Marquee, Parallax
   - Reveal on scroll
   - Shimmer loading

6. **pages.css** - Page-specific styles
   - Hero section
   - About page
   - Portfolio / Projects
   - Blog
   - Services
   - Contacts
   - 404 page
   - Article page

7. **utilities.css** - Utility classes
   - Display, Visibility
   - Text, Background
   - Borders, Sizing
   - Margin, Padding
   - Opacity, Cursor
   - Transform, Z-index

### JavaScript Модули

#### Core (js/)

**main.js** - Entry Point
```javascript
- Инициализирует все модули
- Настраивает глобальное состояние
- Экспортирует данные приложения
```

**data.js** - State Management
```javascript
{
  site: { name, phone, email, address, social },
  projects: [ { id, title, category, ... } ],
  services: [ { id, title, description, ... } ],
  blog: [ { id, title, excerpt, ... } ],
  translations: { ru: {...}, en: {...} }
}
```

**shared.js** - Shared Utilities
```javascript
- initPreloader() - Управление прелоадером
- initScrollProgress() - Прогресс-бар прокрутки
- smoothScroll() - Плавная прокрутка
- initRouter() - Простая маршрутизация
- formatDate() - Форматирование дат
- debounce() / throttle() - Функциональные утилиты
- generateBreadcrumb() - Генерация breadcrumb
- generateJsonLd() - JSON-LD генерация
```

#### Modules (js/modules/)

**header.js** - Header Management
```javascript
class Header {
  - setupMobileMenu() - Управление мобильным меню
  - setupStickyHeader() - Sticky поведение
  - setupActiveNavigation() - Активная ссылка в меню
}
```

**modal.js** - Modal System
```javascript
class Modal {
  - open() / close() / toggle()
  - Focus trap для доступности
  - Обработка Escape и кликов вне модалки
}

class ModalManager {
  - Управление несколькими модальками
  - Фабрика для создания новых модальок
}
```

**form.js** - Form Handling
```javascript
class Form {
  - setupPhoneMask() - Маска для телефона
  - setupValidation() - Валидация полей
  - validateField() - Валидация одного поля
  - async submit() - Отправка формы
  - showToast() - Toast уведомления
}
```

**animations.js** - Animation Effects
```javascript
class RevealOnScroll - IntersectionObserver для появления элементов
class CountUp - Анимация счетчиков
class Parallax - Parallax эффект при скролле
class LazyLoad - Ленивая загрузка изображений
```

**portfolio.js** - Portfolio Management
```javascript
class Portfolio {
  - setupFilters() - Система фильтров
  - renderProjects() - Рендер карточек проектов
  - compare() - Сравнение проектов
}
```

**calculator.js** - Calculator Logic
```javascript
class Calculator {
  - calculateHousePrice() - Расчет стоимости дома
  - calculateMortgage() - Расчет ежемесячного платежа
  - calculateTotal() - Полный расчет
  - formatPrice() - Форматирование цены
}
```

**slider.js** - Carousels & Lightbox
```javascript
class Slider {
  - goTo() / next() / prev()
  - Точки навигации (dots)
  - Автоматическое воспроизведение

class Lightbox {
  - open() / close()
  - Навигация стрелками и клавиатурой
  - Светлый бокс для галереи
}
```

**i18n.js** - Internationalization
```javascript
class i18n {
  - setLanguage() - Переключение языков
  - t(key) - Получение перевода
  - applyTranslations() - Применение переводов к DOM
}
```

**seo.js** - SEO Management
```javascript
class SEO {
  - generateSchema() - Генерация Schema.org
  - addJsonLd() - Добавление JSON-LD
  - setMetaTags() - Установка мета-тегов
  - setCanonical() - Установка canonical URL
  - generateSitemap() - Генерация sitemap
}
```

## 🎨 Design Tokens System

### Цветовая палитра
```css
Primary (зелёный): #2c5f4f
Accent (бежевый): #d4a574
Neutral (серый): #1a1c1b - #ffffff
```

### Типографика
```css
Primary: Segoe UI / sans-serif
Secondary: Georgia / serif
Mono: Courier New
```

### Spacing Scale (4px base)
```css
0, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px
```

### Border Radius
```css
4px, 8px, 12px, 16px, 24px, full
```

## 🔄 Data Flow

```
main.js (Entry Point)
    ↓
data.js (Load Site Data)
    ↓
├── Header Module
├── Modal Manager
├── Form Validator
├── Portfolio Renderer
├── Calculator Engine
├── Slider Manager
├── i18n Translator
└── SEO Manager
    ↓
DOM Ready → User Interaction → Event Handlers → State Update → DOM Update
```

## 📱 Responsive Design

Используется Mobile-First подход:
- Базовые стили для мобильных устройств
- Media queries для увеличения размеров экрана

### Breakpoints
```css
xs: 0px    - Мобильные
sm: 576px  - Маленькие планшеты
md: 768px  - Планшеты
lg: 992px  - Десктопы
xl: 1200px - Большие десктопы
2xl: 1400px - Extra large
```

## ♿ Доступность (a11y)

- Semantic HTML5
- ARIA атрибуты
- Focus management
- Screen reader support
- Color contrast ratios (WCAG AA)
- Keyboard navigation

## ⚡ Performance Optimizations

- Critical CSS inline
- Lazy loading для изображений
- Async JavaScript load
- Минимизация и tree-shaking
- Efficient DOM queries
- Event delegation
- CSS animations вместо JS

## 🔐 Security

- XSS protection через textContent
- CSP headers (при наличии)
- Secure form submission
- Input sanitization

## 📦 Dependencies

Нет внешних зависимостей - чистый vanilla JavaScript
