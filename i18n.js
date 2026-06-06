/**
 * Header Module — шапка, мобильное меню, активный пункт навигации
 * Зависимости: нет
 */
(function() {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const init = () => {
    const header = $('#header');
    const burger = $('#burgerBtn');
    const mobileMenu = $('#mobileMenu');
    const mobileMenuClose = $('.mobile-menu__close');
    const mobileMenuBackdrop = $('.mobile-menu__backdrop');

    if (!header) return;

    // === Sticky header с изменением фона ===
    const onScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // === Мобильное меню ===
    if (burger && mobileMenu) {
      const openMenu = () => {
        mobileMenu.classList.add('mobile-menu--active');
        mobileMenu.setAttribute('aria-hidden', 'false');
        burger.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
        
        // Блокировка скролла
        document.body.style.overflow = 'hidden';
      };

      const closeMenu = () => {
        mobileMenu.classList.remove('mobile-menu--active');
        mobileMenu.setAttribute('aria-hidden', 'true');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
      };

      const toggleMenu = () => {
        const isOpen = burger.getAttribute('aria-expanded') === 'true';
        if (isOpen) closeMenu();
        else openMenu();
      };

      burger.addEventListener('click', toggleMenu);
      if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);
      if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', closeMenu);

      // Закрытие при клике на ссылку в меню
      $$('.mobile-menu__nav a', mobileMenu).forEach(link => {
        link.addEventListener('click', closeMenu);
      });

      // Закрытие по Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
          closeMenu();
          burger.focus();
        }
      });

      // Закрытие при ресайзе на десктоп
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && burger.getAttribute('aria-expanded') === 'true') {
          closeMenu();
        }
      });
    }

    // === Активный пункт навигации ===
    const navLinks = $$('.nav__link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      const linkPage = href.split('/').pop() || 'index.html';
      if (linkPage === currentPage) {
        link.classList.add('nav__link--active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    // === Smooth scroll для якорных ссылок ===
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        
        const target = $(href);
        if (!target) return;
        
        e.preventDefault();
        
        const headerHeight = header.offsetHeight || 84;
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - offset;
        
        window.scrollTo({
          top,
          behavior: prefersReduced ? 'auto' : 'smooth'
        });
      });
    });
  };

  // Запуск
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();