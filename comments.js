/**
 * Calculator Module — калькулятор стоимости строительства
 * Зависимости: нет
 */
(function() {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Базовые цены за м²
  const BASE_PRICES = {
    gas: 35000,      // Газобетон
    brick: 55000,    // Кирпич
    wood: 45000,     // Брус
    frame: 30000     // Каркас
  };

  // Коэффициенты
  const FLOOR_MULTIPLIERS = {
    1: 1,
    2: 1.15,
    3: 1.25
  };

  const OPTIONS = {
    turnkey: 1.35,
    smart: 8000,     // за м²
    landscape: 800000 // фиксировано
  };

  const state = {
    area: 150,
    floors: 2,
    material: 'gas',
    turnkey: true,
    smart: false,
    landscape: false
  };

  const formatPrice = (price) => {
    return Math.round(price).toLocaleString('ru-RU');
  };

  const calculate = () => {
    let basePrice = BASE_PRICES[state.material] * state.area;
    let totalPrice = basePrice * FLOOR_MULTIPLIERS[state.floors];

    if (state.turnkey) {
      totalPrice *= OPTIONS.turnkey;
    }

    if (state.smart) {
      totalPrice += OPTIONS.smart * state.area;
    }

    if (state.landscape) {
      totalPrice += OPTIONS.landscape;
    }

    return {
      base: basePrice,
      total: totalPrice
    };
  };

  const updateDisplay = () => {
    const priceElement = $('#calc-price');
    const areaElement = $('#calc-area-value');
    
    if (areaElement) {
      areaElement.textContent = state.area;
    }

    if (priceElement) {
      const result = calculate();
      priceElement.textContent = formatPrice(result.total);
    }
  };

  const init = () => {
    // Area slider
    const areaSlider = $('#calc-area');
    if (areaSlider) {
      areaSlider.addEventListener('input', (e) => {
        state.area = parseInt(e.target.value, 10);
        updateDisplay();
      });
    }

    // Floors buttons
    const floorsBtns = $$('#calc-floors .calc-btn');
    floorsBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        floorsBtns.forEach(b => b.classList.remove('calc-btn--active'));
        btn.classList.add('calc-btn--active');
        state.floors = parseInt(btn.dataset.value, 10);
        updateDisplay();
      });
    });

    // Material buttons
    const materialBtns = $$('#calc-material .calc-btn');
    materialBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        materialBtns.forEach(b => b.classList.remove('calc-btn--active'));
        btn.classList.add('calc-btn--active');
        state.material = btn.dataset.value;
        updateDisplay();
      });
    });

    // Options checkboxes
    const turnkeyCheckbox = $('#calc-turnkey');
    if (turnkeyCheckbox) {
      turnkeyCheckbox.addEventListener('change', (e) => {
        state.turnkey = e.target.checked;
        updateDisplay();
      });
    }

    const smartCheckbox = $('#calc-smart');
    if (smartCheckbox) {
      smartCheckbox.addEventListener('change', (e) => {
        state.smart = e.target.checked;
        updateDisplay();
      });
    }

    const landscapeCheckbox = $('#calc-landscape');
    if (landscapeCheckbox) {
      landscapeCheckbox.addEventListener('change', (e) => {
        state.landscape = e.target.checked;
        updateDisplay();
      });
    }

    // Initial calculation
    updateDisplay();

    // Публичный API
    window.DOMUS = window.DOMUS || {};
    window.DOMUS.Calculator = {
      calculate,
      state
    };
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();