/**
 * Harriet Bartley Mobile Hairstyling
 * Main JavaScript - Navigation, Lightbox, and Utilities
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initLightbox();
    initCurrentYear();
    initActiveNavLink();
  });

  /**
   * Mobile Navigation Toggle
   */
  function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !nav) return;

    function openNav() {
      nav.classList.add('is-open');
      navOverlay?.classList.add('is-visible');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      nav.classList.remove('is-open');
      navOverlay?.classList.remove('is-visible');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    function toggleNav() {
      const isOpen = nav.classList.contains('is-open');
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    }

    navToggle.addEventListener('click', toggleNav);
    navOverlay?.addEventListener('click', closeNav);

    // Close nav when clicking a link (mobile)
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth < 992) {
          closeNav();
        }
      });
    });

    // Close nav on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeNav();
        navToggle.focus();
      }
    });

    // Close nav on resize to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 992) {
        closeNav();
      }
    });
  }

  /**
   * Gallery Lightbox
   */
  function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item[data-lightbox]');
    const lightbox = document.getElementById('lightbox');
    
    if (!galleryItems.length || !lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    
    let currentIndex = 0;
    const images = Array.from(galleryItems).map(function(item) {
      return {
        src: item.dataset.src || item.querySelector('img')?.src,
        alt: item.dataset.alt || item.querySelector('img')?.alt || 'Gallery image'
      };
    });

    function openLightbox(index) {
      currentIndex = index;
      updateLightboxImage();
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      lightboxClose?.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      galleryItems[currentIndex]?.focus();
    }

    function updateLightboxImage() {
      if (lightboxImg && images[currentIndex]) {
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
      }
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      updateLightboxImage();
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateLightboxImage();
    }

    // Gallery item click handlers
    galleryItems.forEach(function(item, index) {
      item.addEventListener('click', function() {
        openLightbox(index);
      });
      
      item.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });
    });

    // Lightbox controls
    lightboxClose?.addEventListener('click', closeLightbox);
    lightboxPrev?.addEventListener('click', prevImage);
    lightboxNext?.addEventListener('click', nextImage);

    // Close on background click
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('is-open')) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    });
  }

  /**
   * Set current year in footer
   */
  function initCurrentYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(function(el) {
      el.textContent = currentYear;
    });
  }

  /**
   * Set active nav link based on current page
   */
  function initActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      
      // Handle home page
      if ((currentPath === '/' || currentPath.endsWith('/index.html') || currentPath === '') && 
          (href === '/' || href === 'index.html' || href === './index.html')) {
        link.classList.add('active');
        return;
      }
      
      // Handle other pages
      if (href && currentPath.endsWith(href.replace('./', ''))) {
        link.classList.add('active');
      }
    });
  }

})();
