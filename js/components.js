/**
 * Frank Abanto — Reusable UI Components Renderer (components.js)
 * Renderers and UI logic modules.
 *
 * SECURITY NOTE: innerHTML is used only with static data sourced from config.js
 * (a local JS file). No user input is ever injected into innerHTML directly.
 * All user-supplied text flows through sanitizeInput() in formHandler.js before
 * being sent to the server, and is displayed via textContent (never innerHTML).
 */

window.UIComponents = {
  // Render Social Cards Grid dynamically from config
  renderSocialCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !window.APP_CONFIG) return;

    // Resolves landmark art using landmarkKey declared on each network in config.js.
    // No switch needed — single source of truth lives in APP_CONFIG.SOCIAL_NETWORKS.
    const getLandmarkArt = (net) => {
      const store = window.LANDMARKS_DATA || {};
      return (net.landmarkKey && store[net.landmarkKey]) ? store[net.landmarkKey] : '';
    };

    const cardsHtml = window.APP_CONFIG.SOCIAL_NETWORKS.map(net => `
      <div class="card-item ${net.cardClass}" data-platform="${net.id}">
        <div class="card-spotlight" aria-hidden="true"></div>
        <div class="card-landmark-art" aria-hidden="true">
          ${getLandmarkArt(net)}
        </div>
        <div class="card-landmark-bg" aria-hidden="true">
          <span class="landmark-badge">${net.landmark || 'Perú 🇵🇪'}</span>
        </div>
        <div class="card-inner">
          <div class="card-header-row">
            <div class="platform-icon">${net.svgIcon}</div>
          </div>
          <div class="card-body-info">
            <h3 class="platform-name">${net.name}</h3>
            <p class="platform-handle">${net.handle}</p>
          </div>
          <div class="card-footer-actions">
            <a href="${net.url}" target="_blank" rel="noopener" class="btn-card-visit">
              <span>${net.visitText}</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
            <button type="button" class="btn-card-msg" title="Enviar mensaje citando ${net.name}">${net.actionIcon} Mensaje</button>
          </div>
        </div>
      </div>
    `).join('');

    container.innerHTML = cardsHtml;
    this.initCard3DTilt();
    this.renderSectionLandmarks();
  },

  // Prepend a decorative landmark photo overlay into a container (reusable helper)
  injectLandmarkBg(containerSelector, overlayClass, dataKey) {
    const store = window.LANDMARKS_DATA || {};
    const container = document.querySelector(containerSelector);
    if (!container || container.querySelector(`.${overlayClass}`)) return;

    const overlay = document.createElement('div');
    overlay.className = overlayClass;
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = store[dataKey] || '';
    container.prepend(overlay);
  },

  // Render Form & Header Vector Landscapes
  renderSectionLandmarks() {
    // 1. Machu Picchu Form Background
    this.injectLandmarkBg('.contact-box', 'landmark-machupicchu-bg', 'machupicchu');

    // 2. Andes Cordillera Header Background
    this.injectLandmarkBg('.module-header', 'header-andes-bg', 'andesHeader');
  },

  // 3D Tilt & Cursor Spotlight Handler
  initCard3DTilt() {
    const cards = document.querySelectorAll('.card-item');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

        const spotlight = card.querySelector('.card-spotlight');
        if (spotlight) {
          spotlight.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(20, 184, 166, 0.15), transparent 70%)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        const spotlight = card.querySelector('.card-spotlight');
        if (spotlight) spotlight.style.background = 'transparent';
      });
    });
  },

  // Update adaptive contact form fields dynamically
  updateAdaptiveForm(platform) {
    const configs = window.APP_CONFIG.PLATFORM_CONFIGS;
    const config = configs[platform] || configs['General'];

    const dynamicLabel = document.getElementById('dynamic-label');
    const dynamicInput = document.getElementById('form-context');
    const hiddenSocialInput = document.getElementById('form-social');
    const subjectField = document.getElementById('email_subject');

    // Update hidden form field value
    if (hiddenSocialInput) hiddenSocialInput.value = platform;

    // Update active class on icon picker buttons
    const pickerBtns = document.querySelectorAll('.icon-picker-btn');
    pickerBtns.forEach(btn => {
      if (btn.getAttribute('data-platform') === platform) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (!dynamicInput) return;

    dynamicInput.style.opacity = '0';

    setTimeout(() => {
      if (dynamicLabel) dynamicLabel.textContent = config.label;
      dynamicInput.placeholder = config.placeholder;
      if (subjectField) subjectField.value = config.subject;

      dynamicInput.style.opacity = '1';
    }, 150);
  },

  // QR Modal Controller
  initQrModal() {
    const openBtn = document.getElementById('open-qr-modal');
    const closeBtn = document.getElementById('close-qr-modal');
    const modal = document.getElementById('qr-modal');
    const copyBtn = document.getElementById('copy-modal-url');

    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          modal.setAttribute('aria-hidden', 'true');
        }
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const url = window.APP_CONFIG?.USER_INFO?.siteUrl || 'https://frankusqabant.github.io';
        navigator.clipboard.writeText(url).then(() => {
          const textSpan = copyBtn.querySelector('span');
          const originalText = textSpan.textContent;
          textSpan.textContent = '¡Enlace Copiado!';
          copyBtn.style.background = '#34d399';

          setTimeout(() => {
            textSpan.textContent = originalText;
            copyBtn.style.background = '';
          }, 2000);
        });
      });
    }
  }
};
