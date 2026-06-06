/**
 * DOMUS VIVA — Data Layer
 * Единый источник правды для всего контента сайта
 * Доступ через window.DV.*
 */
(function() {
  'use strict';

  window.DV = window.DV || {};

  // ============================================================================
  // ПРОЕКТЫ (6 штук)
  // ============================================================================
  DV.projects = [
    {
      id: 'pine-forest',
      title: { ru: 'Коттедж «Сосновый бор»', en: 'Pine Forest Cottage' },
      slug: 'pine-forest',
      category: ['one-story', 'modern'],
      badge: { ru: 'Одноэтажный', en: 'One-story' },
      area: 186,
      rooms: 4,
      bathrooms: 2,
      floors: 1,
      material: { ru: 'Газобетон', en: 'Aerated concrete' },
      price: '8 950 000',
      priceRaw: 8950000,
      location: { ru: 'Московская область', en: 'Moscow region' },
      year: 2024,
      duration: 8,
      package: 'standard',
      description: {
        ru: 'Современный одноэтажный коттедж с панорамным остеклением и террасой. Идеален для семьи из 4 человек. Энергоэффективность класса A+.',
        en: 'Modern one-story cottage with panoramic glazing and terrace. Perfect for a family of 4. Energy efficiency class A+.'
      },
      features: [
        { ru: 'Панорамное остекление в сад', en: 'Panoramic garden glazing' },
        { ru: 'Терраса 32 м²', en: 'Terrace 32 m²' },
        { ru: 'Мастер-спальня с гардеробной', en: 'Master bedroom with dressing room' },
        { ru: 'Камин в гостиной', en: 'Fireplace in living room' },
        { ru: 'Гараж на 1 авто', en: '1-car garage' },
        { ru: 'Умный дом Apple HomeKit', en: 'Apple HomeKit smart home' }
      ],
      gallery: [
        'assets/images/projects/pine-forest-1.jpg',
        'assets/images/projects/pine-forest-2.jpg',
        'assets/images/projects/pine-forest-3.jpg',
        'assets/images/projects/pine-forest-4.jpg',
        'assets/images/projects/pine-forest-5.jpg',
        'assets/images/projects/pine-forest-6.jpg'
      ],
      thumbnail: 'assets/images/projects/pine-forest-thumb.jpg',
      hero: 'assets/images/projects/pine-forest-hero.jpg'
    },
    {
      id: 'quiet-harbor',
      title: { ru: 'Коттедж «Тихая гавань»', en: 'Quiet Harbor Cottage' },
      slug: 'quiet-harbor',
      category: ['two-story', 'wood'],
      badge: { ru: 'Из бруса', en: 'Timber' },
      area: 245,
      rooms: 5,
      bathrooms: 3,
      floors: 2,
      material: { ru: 'Клееный брус', en: 'Glued laminated timber' },
      price: '12 400 000',
      priceRaw: 12400000,
      location: { ru: 'Ленинградская область', en: 'Leningrad region' },
      year: 2023,
      duration: 10,
      package: 'premium',
      description: {
        ru: 'Двухэтажный дом в скандинавском стиле с каминным залом, большой террасой и баней-сауной в цоколе. Построен из клееного бруса.',
        en: 'Two-story Scandinavian-style house with fireplace hall, large terrace and sauna in basement. Built from glued laminated timber.'
      },
      features: [
        { ru: 'Каминный зал 45 м²', en: 'Fireplace hall 45 m²' },
        { ru: 'Баня-сауна в цоколе', en: 'Sauna in basement' },
        { ru: 'Терраса 40 м²', en: 'Terrace 40 m²' },
        { ru: '4 детские спальни', en: '4 children bedrooms' },
        { ru: 'Гараж на 2 авто', en: '2-car garage' },
        { ru: 'Деревянные евроокна', en: 'Wooden Euro windows' }
      ],
      gallery: [
        'assets/images/projects/quiet-harbor-1.jpg',
        'assets/images/projects/quiet-harbor-2.jpg',
        'assets/images/projects/quiet-harbor-3.jpg',
        'assets/images/projects/quiet-harbor-4.jpg',
        'assets/images/projects/quiet-harbor-5.jpg',
        'assets/images/projects/quiet-harbor-6.jpg'
      ],
      thumbnail: 'assets/images/projects/quiet-harbor-thumb.jpg',
      hero: 'assets/images/projects/quiet-harbor-hero.jpg'
    },
    {
      id: 'white-stone',
      title: { ru: 'Резиденция «Белый камень»', en: 'White Stone Residence' },
      slug: 'white-stone',
      category: ['two-story', 'modern', 'brick'],
      badge: { ru: 'Премиум', en: 'Premium' },
      area: 380,
      rooms: 6,
      bathrooms: 5,
      floors: 2,
      material: { ru: 'Кирпич + мрамор', en: 'Brick + marble' },
      price: '21 700 000',
      priceRaw: 21700000,
      location: { ru: 'Рублёво-Успенское ш.', en: 'Rublyovo-Uspenskoye highway' },
      year: 2024,
      duration: 14,
      package: 'premium',
      description: {
        ru: 'Премиальная резиденция с бассейном, домашним кинотеатром, винным погребом, SPA-зоной и полным умным домом KNX. Итальянский мрамор Calacatta.',
        en: 'Premium residence with pool, home cinema, wine cellar, SPA zone and full KNX smart home. Italian Calacatta marble.'
      },
      features: [
        { ru: 'Бассейн 12×5 м', en: '12×5 m pool' },
        { ru: 'Домашний кинотеатр Dolby Atmos', en: 'Dolby Atmos home cinema' },
        { ru: 'Винный погреб на 500 бутылок', en: '500-bottle wine cellar' },
        { ru: 'SPA: сауна + хаммам + джакузи', en: 'SPA: sauna + hammam + jacuzzi' },
        { ru: 'Эксплуатируемая кровля 80 м²', en: '80 m² rooftop terrace' },
        { ru: 'Лифт KONE на 3 остановки', en: 'KONE elevator, 3 stops' },
        { ru: 'Полный умный дом KNX', en: 'Full KNX smart home' },
        { ru: 'Итальянский мрамор', en: 'Italian marble' }
      ],
      gallery: [
        'assets/images/projects/white-stone-1.jpg',
        'assets/images/projects/white-stone-2.jpg',
        'assets/images/projects/white-stone-3.jpg',
        'assets/images/projects/white-stone-4.jpg',
        'assets/images/projects/white-stone-5.jpg',
        'assets/images/projects/white-stone-6.jpg'
      ],
      thumbnail: 'assets/images/projects/white-stone-thumb.jpg',
      hero: 'assets/images/projects/white-stone-hero.jpg'
    },
    {
      id: 'forest-glade',
      title: { ru: 'Экодом «Лесная поляна»', en: 'Forest Glade Eco-Home' },
      slug: 'forest-glade',
      category: ['one-story', 'wood'],
      badge: { ru: 'Экодом', en: 'Eco-home' },
      area: 128,
      rooms: 3,
      bathrooms: 2,
      floors: 1,
      material: { ru: 'Оцилиндрованное бревно', en: 'Rounded logs' },
      price: '6 850 000',
      priceRaw: 6850000,
      location: { ru: 'Тверская область', en: 'Tver region' },
      year: 2023,
      duration: 6,
      package: 'basic',
      description: {
        ru: 'Уютный одноэтажный дом из оцилиндрованного бревна с большой кухней-гостиной и панорамными окнами в сад. Идеален для семьи из 3-4 человек.',
        en: 'Cozy one-story rounded log house with large kitchen-living room and panoramic garden windows. Perfect for a family of 3-4.'
      },
      features: [
        { ru: 'Камин-печь с варочной поверхностью', en: 'Cooking stove-fireplace' },
        { ru: 'Тёплый пол по всей площади', en: 'Heated floor everywhere' },
        { ru: 'Терраса 24 м²', en: '24 m² terrace' },
        { ru: 'Свайно-винтовой фундамент', en: 'Screw-pile foundation' },
        { ru: 'Пеллетный котёл', en: 'Pellet boiler' },
        { ru: 'Натуральные отделочные материалы', en: 'Natural finishing materials' }
      ],
      gallery: [
        'assets/images/projects/forest-glade-1.jpg',
        'assets/images/projects/forest-glade-2.jpg',
        'assets/images/projects/forest-glade-3.jpg',
        'assets/images/projects/forest-glade-4.jpg',
        'assets/images/projects/forest-glade-5.jpg'
      ],
      thumbnail: 'assets/images/projects/forest-glade-thumb.jpg',
      hero: 'assets/images/projects/forest-glade-hero.jpg'
    },
    {
      id: 'horizon',
      title: { ru: 'Коттедж «Горизонт»', en: 'Horizon Cottage' },
      slug: 'horizon',
      category: ['two-story', 'modern'],
      badge: { ru: 'Хай-тек', en: 'High-tech' },
      area: 290,
      rooms: 5,
      bathrooms: 4,
      floors: 2,
      material: { ru: 'Газобетон + каркас', en: 'Aerated concrete + frame' },
      price: '15 900 000',
      priceRaw: 15900000,
      location: { ru: 'Новая Москва', en: 'New Moscow' },
      year: 2025,
      duration: 11,
      package: 'premium',
      description: {
        ru: 'Минималистичный коттедж в стиле хай-тек с плоской кровлей, панорамным остеклением Schuco и полной системой умного дома. Солнечные панели 8 кВт.',
        en: 'Minimalist high-tech cottage with flat roof, Schuco panoramic glazing and full smart home system. 8 kW solar panels.'
      },
      features: [
        { ru: 'Плоская эксплуатируемая кровля', en: 'Flat rooftop terrace' },
        { ru: 'Остекление Schuco', en: 'Schuco glazing' },
        { ru: 'Солнечные панели 8 кВт', en: '8 kW solar panels' },
        { ru: 'Tesla Powerwall', en: 'Tesla Powerwall' },
        { ru: 'Зарядка для электромобиля', en: 'EV charging station' },
        { ru: 'Домашний офис с шумоизоляцией', en: 'Soundproof home office' }
      ],
      gallery: [
        'assets/images/projects/horizon-1.jpg',
        'assets/images/projects/horizon-2.jpg',
        'assets/images/projects/horizon-3.jpg',
        'assets/images/projects/horizon-4.jpg',
        'assets/images/projects/horizon-5.jpg',
        'assets/images/projects/horizon-6.jpg'
      ],
      thumbnail: 'assets/images/projects/horizon-thumb.jpg',
      hero: 'assets/images/projects/horizon-hero.jpg'
    },
    {
      id: 'terracotta',
      title: { ru: 'Коттедж «Терракота»', en: 'Terracotta Cottage' },
      slug: 'terracotta',
      category: ['one-story', 'brick'],
      badge: { ru: 'Классика', en: 'Classic' },
      area: 165,
      rooms: 4,
      bathrooms: 2,
      floors: 1,
      material: { ru: 'Кирпич Braer', en: 'Braer brick' },
      price: '9 400 000',
      priceRaw: 9400000,
      location: { ru: 'Краснодарский край', en: 'Krasnodar region' },
      year: 2024,
      duration: 9,
      package: 'standard',
      description: {
        ru: 'Классический кирпичный дом с красной черепичной кровлей, просторной террасой и камином в гостиной. Идеален для южного климата.',
        en: 'Classic brick house with red tile roof, spacious terrace and living room fireplace. Perfect for southern climate.'
      },
      features: [
        { ru: 'Черепичная кровля Braas', en: 'Braas tile roof' },
        { ru: 'Эркер в гостиной', en: 'Living room bay window' },
        { ru: 'Камин Spartherm', en: 'Spartherm fireplace' },
        { ru: 'Терраса 28 м²', en: '28 m² terrace' },
        { ru: 'Встроенный гараж', en: 'Built-in garage' },
        { ru: 'Классическая планировка', en: 'Classic layout' }
      ],
      gallery: [
        'assets/images/projects/terracotta-1.jpg',
        'assets/images/projects/terracotta-2.jpg',
        'assets/images/projects/terracotta-3.jpg',
        'assets/images/projects/terracotta-4.jpg',
        'assets/images/projects/terracotta-5.jpg',
        'assets/images/projects/terracotta-6.jpg'
      ],
      thumbnail: 'assets/images/projects/terracotta-thumb.jpg',
      hero: 'assets/images/projects/terracotta-hero.jpg'
    }
  ];

  // ============================================================================
  // УСЛУГИ (6 штук)
  // ============================================================================
  DV.services = [
    {
      id: 'design',
      title: { ru: 'Индивидуальное проектирование', en: 'Custom Design' },
      slug: 'design',
      icon: 'pencil-ruler',
      description: {
        ru: 'Создаём уникальные архитектурные решения с учётом участка, образа жизни и бюджета. BIM-моделирование, 3D-визуализация, паспорт проекта.',
        en: 'We create unique architectural solutions considering site, lifestyle and budget. BIM modeling, 3D visualization, project passport.'
      },
      priceFrom: '1 200',
      priceUnit: '₽/м²',
      duration: '3-8 недель',
      process: [
        { ru: 'Бриф и выезд на участок', en: 'Brief and site visit' },
        { ru: 'Концепция и планировки', en: 'Concept and layouts' },
        { ru: '3D-визуализация', en: '3D visualization' },
        { ru: 'Рабочая документация', en: 'Working documentation' }
      ],
      includes: [
        { ru: 'Обмерный план и ТЗ', en: 'Measurement plan and TOR' },
        { ru: 'Архитектурный раздел (АР)', en: 'Architectural section (AR)' },
        { ru: 'Конструктивные решения (КР)', en: 'Structural solutions (KR)' },
        { ru: 'Инженерные сети (ОВ, ВК, ЭОМ)', en: 'Engineering networks' },
        { ru: 'Паспорт проекта', en: 'Project passport' },
        { ru: '3D-визуализация экстерьера', en: 'Exterior 3D visualization' }
      ]
    },
    {
      id: 'build',
      title: { ru: 'Строительство под ключ', en: 'Turnkey Construction' },
      slug: 'build',
      icon: 'building',
      description: {
        ru: 'Полный цикл возведения коттеджа от фундамента до финишной отделки. Фиксированная смета, еженедельные отчёты, гарантия 15 лет.',
        en: 'Full cycle of cottage construction from foundation to finishing. Fixed estimate, weekly reports, 15-year warranty.'
      },
      priceFrom: '35 000',
      priceUnit: '₽/м²',
      duration: '4-12 месяцев',
      process: [
        { ru: 'Подготовка и договор', en: 'Preparation and contract' },
        { ru: 'Фундамент', en: 'Foundation' },
        { ru: 'Коробка и кровля', en: 'Shell and roof' },
        { ru: 'Инженерия и отделка', en: 'Engineering and finishing' },
        { ru: 'Сдача объекта', en: 'Handover' }
      ],
      includes: [
        { ru: 'Фундамент', en: 'Foundation' },
        { ru: 'Стены и перегородки', en: 'Walls and partitions' },
        { ru: 'Кровля', en: 'Roof' },
        { ru: 'Окна и двери', en: 'Windows and doors' },
        { ru: 'Фасад и утепление', en: 'Facade and insulation' },
        { ru: 'Чистовая отделка', en: 'Finishing' }
      ]
    },
    {
      id: 'engineering',
      title: { ru: 'Инженерные системы', en: 'Engineering Systems' },
      slug: 'engineering',
      icon: 'settings',
      description: {
        ru: 'Проектирование и монтаж всех инженерных сетей: отопление, вентиляция, электрика, водоснабжение, умный дом. Европейское оборудование.',
        en: 'Design and installation of all engineering networks: heating, ventilation, electrical, water supply, smart home. European equipment.'
      },
      priceFrom: '5 000',
      priceUnit: '₽/м²',
      duration: '2-4 месяца',
      process: [
        { ru: 'Проектирование в BIM', en: 'BIM design' },
        { ru: 'Закупка оборудования', en: 'Equipment procurement' },
        { ru: 'Монтаж', en: 'Installation' },
        { ru: 'Пуско-наладка', en: 'Commissioning' }
      ],
      includes: [
        { ru: 'Отопление', en: 'Heating' },
        { ru: 'Вентиляция с рекуперацией', en: 'Ventilation with recovery' },
        { ru: 'Водоснабжение и канализация', en: 'Water supply and sewage' },
        { ru: 'Электрика', en: 'Electrical' },
        { ru: 'Умный дом', en: 'Smart home' },
        { ru: 'Солнечные панели', en: 'Solar panels' }
      ]
    },
    {
      id: 'landscape',
      title: { ru: 'Ландшафтный дизайн', en: 'Landscape Design' },
      slug: 'landscape',
      icon: 'tree',
      description: {
        ru: 'Превращаем участок в гармоничное продолжение дома: газоны, дорожки, автополив, освещение, зоны отдыха. Гарантия на растения 1 год.',
        en: 'We turn the plot into harmonious home extension: lawns, paths, auto-irrigation, lighting, rest zones. 1-year plant warranty.'
      },
      priceFrom: '1 500',
      priceUnit: '₽/м²',
      duration: '1-3 месяца',
      process: [
        { ru: 'Анализ участка', en: 'Site analysis' },
        { ru: 'Проектирование', en: 'Design' },
        { ru: 'Реализация', en: 'Implementation' },
        { ru: 'Обслуживание', en: 'Maintenance' }
      ],
      includes: [
        { ru: 'Генплан', en: 'Master plan' },
        { ru: 'Дендроплан', en: 'Dendrological plan' },
        { ru: 'Автополив Hunter/Rain Bird', en: 'Hunter/Rain Bird auto-irrigation' },
        { ru: 'Садовое освещение', en: 'Garden lighting' },
        { ru: 'Мощение и дорожки', en: 'Paving and paths' },
        { ru: 'Озеленение', en: 'Landscaping' }
      ]
    },
    {
      id: 'interior',
      title: { ru: 'Дизайн интерьера', en: 'Interior Design' },
      slug: 'interior',
      icon: 'palette',
      description: {
        ru: 'Создаём интерьеры, в которых хочется жить. От концепции до комплектации мебелью. Член Союза Дизайнеров России.',
        en: 'We create interiors you want to live in. From concept to furniture supply. Member of Russian Designers Union.'
      },
      priceFrom: '2 500',
      priceUnit: '₽/м²',
      duration: '4-12 недель',
      process: [
        { ru: 'Бриф и обмеры', en: 'Brief and measurements' },
        { ru: 'Планировочное решение', en: 'Layout solution' },
        { ru: 'Стилистическая концепция', en: 'Stylistic concept' },
        { ru: '3D-визуализация', en: '3D visualization' },
        { ru: 'Рабочая документация', en: 'Working documentation' },
        { ru: 'Комплектация и надзор', en: 'Supply and supervision' }
      ],
      includes: [
        { ru: 'Обмерный план', en: 'Measurement plan' },
        { ru: 'Планировочные решения', en: 'Layout solutions' },
        { ru: '3D-визуализация', en: '3D visualization' },
        { ru: 'Подбор материалов', en: 'Material selection' },
        { ru: 'Комплектация мебелью', en: 'Furniture supply' },
        { ru: 'Авторский надзор', en: 'Author supervision' }
      ]
    },
    {
      id: 'renovation',
      title: { ru: 'Реконструкция и реновация', en: 'Renovation' },
      slug: 'renovation',
      icon: 'hammer',
      description: {
        ru: 'Преображаем существующие дома: пристройки, надстройки, усиление конструкций, полная модернизация. Работаем с историческими зданиями.',
        en: 'We transform existing houses: extensions, additions, structural reinforcement, full modernization. We work with historical buildings.'
      },
      priceFrom: '15 000',
      priceUnit: '₽/м²',
      duration: '3-12 месяцев',
      process: [
        { ru: 'Техническое обследование', en: 'Technical survey' },
        { ru: 'Проект реконструкции', en: 'Renovation project' },
        { ru: 'Согласования', en: 'Approvals' },
        { ru: 'Строительные работы', en: 'Construction works' },
        { ru: 'Инженерия и отделка', en: 'Engineering and finishing' },
        { ru: 'Сдача объекта', en: 'Handover' }
      ],
      includes: [
        { ru: 'Техническое обследование', en: 'Technical survey' },
        { ru: 'Проект реконструкции', en: 'Renovation project' },
        { ru: 'Усиление конструкций', en: 'Structural reinforcement' },
        { ru: 'Пристройки и надстройки', en: 'Extensions and additions' },
        { ru: 'Замена инженерии', en: 'Engineering replacement' },
        { ru: 'Отделка', en: 'Finishing' }
      ]
    }
  ];

  // ============================================================================
  // СТАТЬИ БЛОГА (7 штук)
  // ============================================================================
  DV.blog = [
    {
      id: 1,
      slug: 'gas-vs-brick',
      title: {
        ru: 'Газобетон или кирпич: что выбрать для коттеджа в 2026 году?',
        en: 'Aerated concrete or brick: what to choose for a cottage in 2026?'
      },
      excerpt: {
        ru: 'Подробный сравнительный анализ двух самых популярных материалов для строительства загородного дома.',
        en: 'Detailed comparison of the two most popular materials for country house construction.'
      },
      category: 'tech',
      author: 'smirnov',
      date: '2026-05-15',
      readTime: 8,
      thumbnail: 'assets/images/blog/gas-vs-brick-thumb.jpg',
      hero: 'assets/images/blog/gas-vs-brick-hero.jpg',
      tags: ['газобетон', 'кирпич', 'материалы', 'сравнение']
    },
    {
      id: 2,
      slug: 'energy-efficiency',
      title: {
        ru: 'Как построить энергоэффективный дом класса A+: 5 технологий',
        en: 'How to build an A+ energy efficient home: 5 technologies'
      },
      excerpt: {
        ru: '5 технологий, которые сокращают расходы на отопление в 3-5 раз. Реальные цифры из 214 проектов.',
        en: '5 technologies that reduce heating costs by 3-5 times. Real figures from 214 projects.'
      },
      category: 'tech',
      author: 'petrov',
      date: '2026-05-08',
      readTime: 12,
      thumbnail: 'assets/images/blog/energy-thumb.jpg',
      hero: 'assets/images/blog/energy-efficiency-hero.jpg',
      tags: ['энергоэффективность', 'класс A+', 'утепление', 'рекуперация']
    },
    {
      id: 3,
      slug: 'trends-2026',
      title: {
        ru: 'Тренды дизайна интерьеров 2026: тихая роскошь и тактильность',
        en: 'Interior design trends 2026: quiet luxury and tactility'
      },
      excerpt: {
        ru: '5 главных трендов, которые определяют дизайн премиальных коттеджей в этом году.',
        en: '5 main trends defining premium cottage design this year.'
      },
      category: 'design',
      author: 'kovaleva',
      date: '2026-04-28',
      readTime: 10,
      thumbnail: 'assets/images/blog/trends-thumb.jpg',
      hero: 'assets/images/blog/trends-2026-hero.jpg',
      tags: ['тренды', 'дизайн интерьера', 'тихая роскошь', 'джапанди']
    },
    {
      id: 4,
      slug: 'contractor-mistakes',
      title: {
        ru: '5 критических ошибок при выборе подрядчика для строительства',
        en: '5 critical mistakes when choosing a construction contractor'
      },
      excerpt: {
        ru: 'Реальные истории клиентов, которые потеряли миллионы. Чек-лист проверки подрядчика.',
        en: 'Real stories of clients who lost millions. Contractor verification checklist.'
      },
      category: 'tips',
      author: 'smirnov',
      date: '2026-04-12',
      readTime: 9,
      thumbnail: 'assets/images/blog/contractor-thumb.jpg',
      hero: 'assets/images/blog/contractor-mistakes-hero.jpg',
      tags: ['подрядчик', 'ошибки', 'советы', 'чек-лист']
    },
    {
      id: 5,
      slug: 'smart-home',
      title: {
        ru: 'Умный дом в 2026 году: что реально работает, а что маркетинг',
        en: 'Smart home in 2026: what really works and what is marketing'
      },
      excerpt: {
        ru: 'Разбираем KNX, Apple Home, Matter, Zigbee. Реальные возможности, стоимость, окупаемость.',
        en: 'Analyzing KNX, Apple Home, Matter, Zigbee. Real capabilities, cost, ROI.'
      },
      category: 'tech',
      author: 'petrov',
      date: '2026-04-05',
      readTime: 11,
      thumbnail: 'assets/images/blog/smart-home-thumb.jpg',
      hero: 'assets/images/blog/smart-home-hero.jpg',
      tags: ['умный дом', 'KNX', 'Apple Home', 'Matter']
    },
    {
      id: 6,
      slug: 'foundation',
      title: {
        ru: 'Фундамент для коттеджа: полный гид по выбору типа',
        en: 'Cottage foundation: complete guide to choosing a type'
      },
      excerpt: {
        ru: 'УШП, ленточный, свайный, плитный — разбираем плюсы, минусы, стоимость и применимость.',
        en: 'Swedish slab, strip, pile, raft — analyzing pros, cons, cost and applicability.'
      },
      category: 'tech',
      author: 'petrov',
      date: '2026-03-28',
      readTime: 10,
      thumbnail: 'assets/images/blog/foundation-thumb.jpg',
      hero: 'assets/images/blog/foundation-hero.jpg',
      tags: ['фундамент', 'УШП', 'сваи', 'ленточный']
    },
    {
      id: 7,
      slug: 'case-white-stone',
      title: {
        ru: 'Кейс: как мы строили резиденцию «Белый камень» 380 м²',
        en: 'Case: how we built the White Stone residence 380 m²'
      },
      excerpt: {
        ru: '14 месяцев, итальянский мрамор, бассейн, умный дом KNX. Подробный рассказ от эскиза до новоселья.',
        en: '14 months, Italian marble, pool, KNX smart home. Detailed story from sketch to housewarming.'
      },
      category: 'cases',
      author: 'smirnov',
      date: '2026-03-15',
      readTime: 12,
      thumbnail: 'assets/images/blog/case-white-stone-thumb.jpg',
      hero: 'assets/images/blog/case-white-stone-hero.jpg',
      tags: ['кейс', 'премиум', 'Белый камень', 'умный дом']
    }
  ];

  // ============================================================================
  // КОМАНДА
  // ============================================================================
  DV.team = [
    {
      id: 'smirnov',
      name: { ru: 'Александр Смирнов', en: 'Alexander Smirnov' },
      role: { ru: 'Главный архитектор', en: 'Chief Architect' },
      bio: {
        ru: '18 лет в профессии, автор 120+ проектов премиальных коттеджей. Специализируется на энергоэффективных домах.',
        en: '18 years in profession, author of 120+ premium cottage projects. Specializes in energy-efficient homes.'
      },
      photo: 'assets/images/team/smirnov.jpg',
      stats: { projects: 120, years: 18, publications: 15 }
    },
    {
      id: 'petrov',
      name: { ru: 'Дмитрий Петров', en: 'Dmitry Petrov' },
      role: { ru: 'Технический директор', en: 'Technical Director' },
      bio: {
        ru: 'К.т.н., эксперт по энергоэффективности и инженерным системам. Сертифицированный специалист KNX.',
        en: 'Ph.D., expert in energy efficiency and engineering systems. Certified KNX specialist.'
      },
      photo: 'assets/images/team/petrov.jpg',
      stats: { projects: 200, years: 20, certifications: 8 }
    },
    {
      id: 'kovaleva',
      name: { ru: 'Елена Ковалева', en: 'Elena Kovaleva' },
      role: { ru: 'Ведущий дизайнер интерьеров', en: 'Lead Interior Designer' },
      bio: {
        ru: 'Член Союза Дизайнеров России. 15 лет в профессии, 85+ реализованных проектов. Публикации в AD, ELLE Decoration.',
        en: 'Member of Russian Designers Union. 15 years in profession, 85+ completed projects. Published in AD, ELLE Decoration.'
      },
      photo: 'assets/images/team/kovaleva.jpg',
      stats: { projects: 85, years: 15, publications: 12 }
    },
    {
      id: 'volkov',
      name: { ru: 'Михаил Волков', en: 'Mikhail Volkov' },
      role: { ru: 'Руководитель строительства', en: 'Construction Manager' },
      bio: {
        ru: '15 лет на стройплощадках. Контролирует качество каждого этапа. Отвечает за соблюдение сроков и смет.',
        en: '15 years on construction sites. Controls quality of each stage. Responsible for deadlines and estimates.'
      },
      photo: 'assets/images/team/volkov.jpg',
      stats: { projects: 150, years: 15, sites: 48 }
    }
  ];

  // ============================================================================
  // ОТЗЫВЫ
  // ============================================================================
  DV.testimonials = [
    {
      id: 1,
      author: { ru: 'Иван Петров', en: 'Ivan Petrov' },
      project: { ru: 'Коттедж «Тихая гавань»', en: 'Quiet Harbor cottage' },
      rating: 5,
      text: {
        ru: '«Команда DOMUS VIVA превзошла все ожидания. Дом сдали на 2 недели раньше срока, смета не выросла ни на рубль. Особенно впечатлили еженедельные видеоотчёты.»',
        en: '"DOMUS VIVA team exceeded all expectations. House delivered 2 weeks early, estimate did not increase by a single ruble. Weekly video reports were especially impressive."'
      },
      photo: 'assets/images/testimonials/ivan-p.jpg'
    },
    {
      id: 2,
      author: { ru: 'Анна Соколова', en: 'Anna Sokolova' },
      project: { ru: 'Резиденция «Белый камень»', en: 'White Stone residence' },
      rating: 5,
      text: {
        ru: '«Долго выбирали подрядчика. Остановились на DOMUS VIVA из-за прозрачности: показали 3 строящихся объекта, познакомили с клиентами. Ни разу не пожалели!»',
        en: '"Long search for contractor. Chose DOMUS VIVA for transparency: showed 3 active sites, introduced to clients. Never regretted it!"'
      },
      photo: 'assets/images/testimonials/anna-s.jpg'
    },
    {
      id: 3,
      author: { ru: 'Сергей Морозов', en: 'Sergey Morozov' },
      project: { ru: 'Коттедж «Горизонт»', en: 'Horizon cottage' },
      rating: 5,
      text: {
        ru: '«Энергоэффективный дом по индивидуальному проекту. Расходы на отопление в 4 раза ниже, чем в соседних домах. Спасибо инженеру Дмитрию за грамотные решения.»',
        en: '"Energy-efficient custom home. Heating costs 4x lower than neighbors. Thank you engineer Dmitry for smart solutions."'
      },
      photo: 'assets/images/testimonials/sergey-m.jpg'
    },
    {
      id: 4,
      author: { ru: 'Ольга Кузнецова', en: 'Olga Kuznetsova' },
      project: { ru: 'Коттедж «Сосновый бор»', en: 'Pine Forest cottage' },
      rating: 5,
      text: {
        ru: '«Это уже второй дом, который строит нам DOMUS VIVA. Первый построили 8 лет назад — до сих пор как новый. Качество и отношение к клиенту на высшем уровне.»',
        en: '"This is our second home built by DOMUS VIVA. First built 8 years ago — still like new. Quality and client attitude at highest level."'
      },
      photo: 'assets/images/testimonials/olga-k.jpg'
    }
  ];

  // ============================================================================
  // СЕРТИФИКАТЫ
  // ============================================================================
  DV.certificates = [
    {
      icon: 'award',
      title: { ru: 'ISO 9001:2015', en: 'ISO 9001:2015' },
      description: { ru: 'Система менеджмента качества', en: 'Quality management system' }
    },
    {
      icon: 'shield',
      title: { ru: 'Допуск СРО', en: 'SRO permit' },
      description: { ru: 'Проектирование и строительство', en: 'Design and construction' }
    },
    {
      icon: 'star',
      title: { ru: 'Лучший подрядчик 2025', en: 'Best Contractor 2025' },
      description: { ru: 'Премия «Дом года»', en: 'Home of the Year Award' }
    },
    {
      icon: 'leaf',
      title: { ru: 'ECO-сертификат', en: 'ECO certificate' },
      description: { ru: 'Экологичное строительство', en: 'Eco-friendly construction' }
    },
    {
      icon: 'badge',
      title: { ru: 'Партнёр KNAUF', en: 'KNAUF Partner' },
      description: { ru: 'Официальный партнёр', en: 'Official partner' }
    }
  ];

  // ============================================================================
  // ТЕХНОЛОГИИ (для вкладки на главной)
  // ============================================================================
  DV.tech = {
    walls: {
      title: { ru: 'Стеновые технологии', en: 'Wall technologies' },
      image: 'assets/images/tech/walls.jpg',
      items: [
        { ru: 'Газобетон D500 с армированием каждые 3 ряда', en: 'Aerated concrete D500 with reinforcement every 3 rows' },
        { ru: 'Утепление 200 мм базальтовой ватой', en: '200mm basalt wool insulation' },
        { ru: 'Вентилируемый фасад с воздушным зазором', en: 'Ventilated facade with air gap' },
        { ru: 'Облицовочный кирпич или штукатурка', en: 'Facing brick or plaster' }
      ]
    },
    roof: {
      title: { ru: 'Кровельные системы', en: 'Roof systems' },
      image: 'assets/images/tech/roof.jpg',
      items: [
        { ru: 'Стропильная система из клееного бруса', en: 'Glued laminated timber rafter system' },
        { ru: 'Утепление 300 мм + пароизоляция', en: '300mm insulation + vapor barrier' },
        { ru: 'Металлочерепица или фальцевая кровля', en: 'Metal tiles or standing seam' },
        { ru: 'Водосточная система и снегозадержатели', en: 'Drainage system and snow guards' }
      ]
    },
    foundation: {
      title: { ru: 'Фундаменты', en: 'Foundations' },
      image: 'assets/images/tech/foundation.jpg',
      items: [
        { ru: 'УШП (утеплённая шведская плита)', en: 'Insulated Swedish slab' },
        { ru: 'Геологические изыскания перед работой', en: 'Geological surveys before work' },
        { ru: 'Гидроизоляция и дренаж', en: 'Waterproofing and drainage' },
        { ru: 'Тёплый пол на первом этаже', en: 'Heated floor on first level' }
      ]
    },
    systems: {
      title: { ru: 'Инженерные системы', en: 'Engineering systems' },
      image: 'assets/images/tech/systems.jpg',
      items: [
        { ru: 'Рекуператор тепла (экономия 70% на отоплении)', en: 'Heat recuperator (70% heating savings)' },
        { ru: 'Система «умный дом» KNX / Apple Home', en: 'Smart home KNX / Apple Home' },
        { ru: 'Тройные стеклопакеты с аргоном', en: 'Triple-pane argon-filled windows' },
        { ru: 'Солнечные панели (опционально)', en: 'Solar panels (optional)' }
      ]
    }
  };

  // ============================================================================
  // ПЕРЕВОДЫ (RU / EN)
  // ============================================================================
  DV.i18n = {
    ru: {
      'nav.services': 'Услуги',
      'nav.projects': 'Проекты',
      'nav.about': 'О нас',
      'nav.blog': 'Блог',
      'nav.contacts': 'Контакты',
      'nav.process': 'Этапы',
      'header.callback': 'Заказать звонок',
      'hero.badge': '214 реализованных проектов',
      'hero.title1': 'Строим дома, ',
      'hero.title2': 'в которых оживает жизнь',
      'hero.subtitle': 'Премиальные коттеджи под ключ с гарантией 15 лет. Индивидуальная архитектура, прозрачная смета, фиксированные сроки.',
      'hero.cta1': 'Бесплатная консультация',
      'hero.cta2': 'Рассчитать стоимость',
      'hero.stat1': 'лет гарантии',
      'hero.stat2': 'построенных домов',
      'hero.stat3': 'рейтинг клиентов',
      'marquee.1': 'ПРОЕКТИРОВАНИЕ',
      'marquee.2': 'СТРОИТЕЛЬСТВО ПОД КЛЮЧ',
      'marquee.3': 'ЛАНДШАФТНЫЙ ДИЗАЙН',
      'marquee.4': 'ИНЖЕНЕРНЫЕ СИСТЕМЫ',
      'marquee.5': 'ДИЗАЙН ИНТЕРЬЕРА',
      'marquee.6': 'УМНЫЙ ДОМ',
      'marquee.7': 'РЕКОНСТРУКЦИЯ',
      'marquee.8': 'ГАРАНТИЯ 15 ЛЕТ',
      'features.1.title': 'Экологичные материалы',
      'features.1.text': 'Сертифицированные безопасные решения',
      'features.2.title': 'Энергоэффективность A+',
      'features.2.text': 'Системы рекуперации и умный климат',
      'features.3.title': 'Фиксированная смета',
      'features.3.text': 'Цена в договоре не меняется',
      'features.4.title': 'Гарантия 15 лет',
      'features.4.text': 'На конструктив, кровлю и инженерию',
      'services.eyebrow': 'Наши услуги',
      'services.title': 'Полный цикл создания дома',
      'services.subtitle': 'От первого эскиза до вручения ключей',
      'calc.eyebrow': 'Онлайн-расчёт',
      'calc.title': 'Калькулятор стоимости',
      'calc.subtitle': 'Узнайте предварительную стоимость за 1 минуту',
      'calc.tab1': 'Стоимость дома',
      'calc.tab2': 'Ипотека',
      'calc.area': 'Площадь дома:',
      'calc.floors': 'Этажность',
      'calc.material': 'Материал стен',
      'calc.gas': 'Газобетон',
      'calc.brick': 'Кирпич',
      'calc.wood': 'Брус',
      'calc.frame': 'Каркас',
      'calc.turnkey': 'Отделка под ключ',
      'calc.smart': 'Система «Умный дом»',
      'calc.landscape': 'Ландшафтный дизайн',
      'calc.label': 'Предварительная стоимость',
      'calc.note': '*Точная цена после выезда специалиста',
      'calc.cta': 'Получить детальную смету',
      'projects.eyebrow': 'Портфолио',
      'projects.title': 'Реализованные проекты',
      'projects.subtitle': 'Кликните на проект, чтобы посмотреть детали',
      'projects.all': 'Все',
      'projects.one': 'Одноэтажные',
      'projects.two': 'Двухэтажные',
      'projects.wood': 'Деревянные',
      'projects.modern': 'Современные',
      'projects.compare': 'Сравнить проекты',
      'about.eyebrow': 'О компании',
      'about.title': 'DOMUS VIVA — искусство создавать дома',
      'about.text1': 'Мы объединяем архитектуру, инженерию и дизайн, чтобы создавать пространства, которые вдохновляют жить.',
      'about.text2': 'Каждый проект — это диалог между вашим образом жизни и нашими технологиями.',
      'about.stat1': 'лет на рынке',
      'about.stat2': 'проектов',
      'about.stat3': 'рекомендуют',
      'about.cta': 'Обсудить проект',
      'team.eyebrow': 'Наша команда',
      'team.title': 'Эксперты, которым можно доверять',
      'testimonials.eyebrow': 'Отзывы',
      'testimonials.title': 'Что говорят наши клиенты',
      'blog.eyebrow': 'Блог',
      'blog.title': 'Экспертные статьи о строительстве',
      'blog.all': 'Все',
      'blog.tech': 'Технологии',
      'blog.design': 'Дизайн',
      'blog.tips': 'Советы',
      'blog.cases': 'Кейсы',
      'faq.eyebrow': 'FAQ',
      'faq.title': 'Частые вопросы',
      'contacts.eyebrow': 'Контакты',
      'contacts.title': 'Свяжитесь с нами',
      'contacts.address': 'Адрес',
      'contacts.phone': 'Телефон',
      'contacts.hours': 'Режим работы',
      'form.title': 'Оставить заявку',
      'form.subtitle': 'Заполните форму — перезвоним в течение 15 минут',
      'form.name': 'Ваше имя *',
      'form.phone': 'Телефон *',
      'form.email': 'Email',
      'form.message': 'Сообщение',
      'form.agree': 'Согласен с политикой конфиденциальности',
      'form.submit': 'Отправить заявку',
      'cta.title': 'Готовы начать строительство дома мечты?',
      'cta.text': 'Оставьте заявку — архитектор свяжется с вами в течение 15 минут',
      'cta.cta1': 'Бесплатная консультация',
      'footer.about': 'Премиальное строительство коттеджей с 2014 года. Гарантия 15 лет.',
      'footer.subscribe': 'Подпишитесь на новости',
      'footer.nav': 'Навигация',
      'footer.services': 'Услуги',
      'footer.contact': 'Контакты',
      'footer.privacy': 'Политика конфиденциальности',
      'footer.sitemap': 'Карта сайта',
      'pagination.prev': 'Предыдущая',
      'pagination.next': 'Следующая',
      'share.label': 'Поделиться:',
      'read.time': 'мин чтения',
      'updated': 'Обновлено'
    },
    en: {
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.about': 'About',
      'nav.blog': 'Blog',
      'nav.contacts': 'Contacts',
      'nav.process': 'Process',
      'header.callback': 'Request a call',
      'hero.badge': '214 completed projects',
      'hero.title1': 'We build homes ',
      'hero.title2': 'where life comes alive',
      'hero.subtitle': 'Premium turnkey cottages with 15-year warranty. Custom architecture, transparent quotes, fixed deadlines.',
      'hero.cta1': 'Free consultation',
      'hero.cta2': 'Calculate cost',
      'hero.stat1': 'years warranty',
      'hero.stat2': 'homes built',
      'hero.stat3': 'client rating',
      'marquee.1': 'DESIGN',
      'marquee.2': 'TURNKEY CONSTRUCTION',
      'marquee.3': 'LANDSCAPE DESIGN',
      'marquee.4': 'ENGINEERING SYSTEMS',
      'marquee.5': 'INTERIOR DESIGN',
      'marquee.6': 'SMART HOME',
      'marquee.7': 'RENOVATION',
      'marquee.8': '15-YEAR WARRANTY',
      'features.1.title': 'Eco materials',
      'features.1.text': 'Certified safe solutions',
      'features.2.title': 'Energy efficiency A+',
      'features.2.text': 'Recuperation & smart climate',
      'features.3.title': 'Fixed quote',
      'features.3.text': 'Price locked in contract',
      'features.4.title': '15-year warranty',
      'features.4.text': 'Structure, roof, engineering',
      'services.eyebrow': 'Our services',
      'services.title': 'Full home creation cycle',
      'services.subtitle': 'From first sketch to keys handover',
      'calc.eyebrow': 'Online calculator',
      'calc.title': 'Cost calculator',
      'calc.subtitle': 'Get preliminary price in 1 minute',
      'calc.tab1': 'House cost',
      'calc.tab2': 'Mortgage',
      'calc.area': 'House area:',
      'calc.floors': 'Floors',
      'calc.material': 'Wall material',
      'calc.gas': 'Aerated concrete',
      'calc.brick': 'Brick',
      'calc.wood': 'Timber',
      'calc.frame': 'Frame',
      'calc.turnkey': 'Turnkey finishing',
      'calc.smart': 'Smart home system',
      'calc.landscape': 'Landscape design',
      'calc.label': 'Preliminary cost',
      'calc.note': '*Exact price after on-site visit',
      'calc.cta': 'Get detailed quote',
      'projects.eyebrow': 'Portfolio',
      'projects.title': 'Completed projects',
      'projects.subtitle': 'Click on a project to see details',
      'projects.all': 'All',
      'projects.one': 'One-story',
      'projects.two': 'Two-story',
      'projects.wood': 'Wooden',
      'projects.modern': 'Modern',
      'projects.compare': 'Compare projects',
      'about.eyebrow': 'About company',
      'about.title': 'DOMUS VIVA — the art of creating homes',
      'about.text1': 'We combine architecture, engineering and design to create spaces that inspire living.',
      'about.text2': 'Every project is a dialogue between your lifestyle and our technologies.',
      'about.stat1': 'years on market',
      'about.stat2': 'projects',
      'about.stat3': 'recommend',
      'about.cta': 'Discuss project',
      'team.eyebrow': 'Our team',
      'team.title': 'Experts you can trust',
      'testimonials.eyebrow': 'Testimonials',
      'testimonials.title': 'What our clients say',
      'blog.eyebrow': 'Blog',
      'blog.title': 'Expert articles on construction',
      'blog.all': 'All',
      'blog.tech': 'Technology',
      'blog.design': 'Design',
      'blog.tips': 'Tips',
      'blog.cases': 'Cases',
      'faq.eyebrow': 'FAQ',
      'faq.title': 'Frequently asked questions',
      'contacts.eyebrow': 'Contacts',
      'contacts.title': 'Get in touch',
      'contacts.address': 'Address',
      'contacts.phone': 'Phone',
      'contacts.hours': 'Working hours',
      'form.title': 'Submit request',
      'form.subtitle': 'Fill the form — we call back within 15 min',
      'form.name': 'Your name *',
      'form.phone': 'Phone *',
      'form.email': 'Email',
      'form.message': 'Message',
      'form.agree': 'Agree with privacy policy',
      'form.submit': 'Submit request',
      'cta.title': 'Ready to build your dream home?',
      'cta.text': 'Submit request — architect contacts within 15 minutes',
      'cta.cta1': 'Free consultation',
      'footer.about': 'Premium cottage construction since 2014. 15-year warranty.',
      'footer.subscribe': 'Subscribe to news',
      'footer.nav': 'Navigation',
      'footer.services': 'Services',
      'footer.contact': 'Contacts',
      'footer.privacy': 'Privacy policy',
      'footer.sitemap': 'Sitemap',
      'pagination.prev': 'Previous',
      'pagination.next': 'Next',
      'share.label': 'Share:',
      'read.time': 'min read',
      'updated': 'Updated'
    }
  };

  // ============================================================================
  // ВСПОМОГАТЕЛЬНЫЕ МЕТОДЫ
  // ============================================================================
  
  // Получить элемент по slug
  DV.getProjectBySlug = (slug) => {
    return DV.projects.find(p => p.slug === slug);
  };

  DV.getServiceBySlug = (slug) => {
    return DV.services.find(s => s.slug === slug);
  };

  DV.getBlogBySlug = (slug) => {
    return DV.blog.find(b => b.slug === slug);
  };

  DV.getTeamById = (id) => {
    return DV.team.find(t => t.id === id);
  };

  // Получить отфильтрованные проекты
  DV.filterProjects = (category) => {
    if (category === 'all') return DV.projects;
    return DV.projects.filter(p => p.category.includes(category));
  };

  // Получить отфильтрованные статьи
  DV.filterBlog = (category) => {
    if (category === 'all') return DV.blog;
    return DV.blog.filter(b => b.category === category);
  };

  // Получить перевод с fallback на RU
  DV.t = (obj, lang = 'ru') => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.ru || '';
  };

  // Форматирование цены
  DV.formatPrice = (price) => {
    if (typeof price === 'number') {
      return price.toLocaleString('ru-RU');
    }
    return price;
  };

  // Форматирование даты
  DV.formatDate = (dateStr, lang = 'ru') => {
    const date = new Date(dateStr);
    const months = {
      ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
      en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };
    return `${date.getDate()} ${months[lang][date.getMonth()]} ${date.getFullYear()}`;
  };

  console.log('%c[DOMUS VIVA] Data layer loaded', 'color: #A67C52; font-weight: bold;');
  console.log(`  Projects: ${DV.projects.length}`);
  console.log(`  Services: ${DV.services.length}`);
  console.log(`  Blog posts: ${DV.blog.length}`);
  console.log(`  Team members: ${DV.team.length}`);
  console.log(`  Testimonials: ${DV.testimonials.length}`);
})();