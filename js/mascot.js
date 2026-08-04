/**
 * Frank Abanto — Interactive Llama Mascot (mascot.js)
 * Full-body animated SVG llama mascot with idle behavior and element tracking.
 *
 * Lifecycle: InteractiveMascot.init() on load, InteractiveMascot.destroy() on cleanup.
 */

window.InteractiveMascot = {
  element: null,
  currentTarget: null,
  currentX: 0,
  currentY: 0,
  idleTimer: null,
  /** @type {Function|null} Stored reference to the mouseover handler for cleanup */
  _mouseoverHandler: null,
  /** @type {Function|null} Stored reference to the idle reset handler for cleanup */
  _idleResetHandler: null,

  init() {
    this.createMascotElement();
    this.bindEvents();
    this.startIdleBehavior();
  },

  createMascotElement() {
    if (document.getElementById('interactive-mascot')) return;

    const mascot = document.createElement('div');
    mascot.id = 'interactive-mascot';
    mascot.className = 'mascot-container fullbody-llama';
    mascot.setAttribute('aria-hidden', 'true');
    mascot.setAttribute('title', '¡Hola! Soy tu Llamita Peruana Dev 🦙 viva');

    // Vector SVG Mascot: Full Body Peruvian Llama (Calcada exactamente de la imagen)
    mascot.innerHTML = `
      <div class="mascot-body">
        <div class="mascot-badge">🦙 PE Dev</div>
        <svg class="mascot-svg llama-fullbody-svg" viewBox="0 0 95 85" width="62" height="56">
          <g class="llama-skeleton">
            <!-- Tail (Wagging Animation) -->
            <path class="llama-part llama-tail" d="M20,46 Q10,38 14,32 Q22,36 23,44 Z" fill="#ffffff" stroke="#decfe6" stroke-width="1.2" />
            
            <!-- Back Legs (Walking Animation Phase 2) -->
            <rect class="llama-part leg-back-left" x="26" y="52" width="5.5" height="22" rx="2.5" fill="#e5d9ec" />
            <rect class="llama-part leg-back-right" x="58" y="52" width="5.5" height="22" rx="2.5" fill="#e5d9ec" />
            
            <!-- Main Fluffy Wool Body (Breathing Animation) -->
            <g class="llama-torso">
              <path class="llama-part llama-body-wool" d="M22,40 Q18,56 34,58 Q54,60 66,56 Q74,52 72,40 Q68,32 48,34 Q28,32 22,40 Z" fill="#f4eef8" stroke="#decfe6" stroke-width="1.5" />
              <circle cx="32" cy="42" r="7.5" fill="#ffffff" />
              <circle cx="44" cy="40" r="8.5" fill="#ffffff" />
              <circle cx="56" cy="42" r="7.5" fill="#ffffff" />
            </g>
            
            <!-- Front Legs (Walking Animation Phase 1) -->
            <rect class="llama-part leg-front-left" x="32" y="52" width="6" height="24" rx="3" fill="#f4eef8" stroke="#decfe6" stroke-width="1" />
            <rect class="llama-part leg-front-right" x="64" y="52" width="6" height="24" rx="3" fill="#f4eef8" stroke="#decfe6" stroke-width="1" />
            <!-- Hooves -->
            <ellipse class="llama-part hoof" cx="35" cy="76" rx="3" ry="1.5" fill="#ffccaa" />
            <ellipse class="llama-part hoof" cx="67" cy="76" rx="3" ry="1.5" fill="#ffccaa" />
            
            <!-- Long Graceful Neck -->
            <g class="llama-neck-head">
              <path class="llama-part llama-neck" d="M56,42 L66,16 Q72,16 76,24 L70,46 Z" fill="#f4eef8" stroke="#decfe6" stroke-width="1.5" />
              <circle cx="65" cy="26" r="5.5" fill="#ffffff" />
              <circle cx="68" cy="36" r="6" fill="#ffffff" />
              
              <!-- Head Base -->
              <path class="llama-part llama-head-base" d="M60,16 Q60,8 72,10 Q80,12 78,22 Q70,26 62,22 Z" fill="#f4eef8" />
              
              <!-- Llama Ears (Twitching Animation) -->
              <path class="llama-part llama-ear ear-left" d="M61,12 Q56,0 64,4 Q66,10 63,13 Z" fill="#f4eef8" stroke="#decfe6" stroke-width="1" />
              <path d="M62,10 Q58,2 63,5 Z" fill="#ffb7b2" opacity="0.8" />
              
              <path class="llama-part llama-ear ear-right" d="M66,12 Q63,-1 70,2 Q71,9 67,13 Z" fill="#ffffff" stroke="#decfe6" stroke-width="1" />
              <path d="M66,9 Q64,1 69,3 Z" fill="#ffb7b2" opacity="0.8" />
              
              <!-- Peach/Tan Snout & Face (Exact match to user's image!) -->
              <path class="llama-part llama-snout" d="M70,14 Q84,14 86,22 Q82,28 74,26 Q68,24 70,14 Z" fill="#ffccaa" stroke="#f3b794" stroke-width="1.2" />
              <!-- Nostril & Cute Mouth -->
              <circle cx="82" cy="20" r="1.5" fill="#5d4037" />
              <path d="M80,22 Q82,24 84,22" fill="none" stroke="#5d4037" stroke-width="1.2" stroke-linecap="round" />
              
              <!-- Llama Eye -->
              <g class="llama-eye-group">
                <circle cx="72" cy="16" r="2.2" fill="#263238" />
                <circle cx="72.7" cy="15.3" r="0.8" fill="#ffffff" />
              </g>
              
              <!-- Dev Teal Glasses (Mini) -->
              <rect class="llama-glasses" x="68" y="13" width="9" height="7" rx="2" fill="#14b8a6" opacity="0.9" stroke="#0a0d12" stroke-width="1.2" />
              
              <!-- Peruvian Andean Tassel / Collar Pom-pom -->
              <circle cx="63" cy="22" r="2.5" fill="#e53935" />
              <circle cx="63" cy="26" r="2" fill="#fdd835" />
            </g>
          </g>
        </svg>
      </div>
    `;

    document.body.appendChild(mascot);
    this.element = mascot;

    // Initial positioning over header avatar
    setTimeout(() => {
      const headerAvatar = document.querySelector('.profile-avatar-wrapper') || document.querySelector('.module-header');
      if (headerAvatar) {
        this.jumpTo(headerAvatar, true);
      }
    }, 300);
  },

  bindEvents() {
    // Listen for mouse enter on interactive targets
    this._mouseoverHandler = (e) => {
      const card = e.target.closest('.card-item');
      if (card && card !== this.currentTarget) { this.jumpTo(card); return; }

      const toggleBtn = e.target.closest('#toggle-contact-btn');
      if (toggleBtn && toggleBtn !== this.currentTarget) { this.jumpTo(toggleBtn); return; }

      const contactBox = e.target.closest('.contact-box');
      if (contactBox && contactBox !== this.currentTarget && !contactBox.closest('.collapsed')) {
        this.jumpTo(contactBox); return;
      }

      const qrBtn = e.target.closest('.btn-qr-action');
      if (qrBtn && qrBtn !== this.currentTarget) { this.jumpTo(qrBtn); return; }
    };
    document.addEventListener('mouseover', this._mouseoverHandler);

    // Reset idle timer on user interaction
    this._idleResetHandler = () => this.resetIdleTimer();
    ['mousemove', 'scroll', 'click'].forEach(evt => {
      window.addEventListener(evt, this._idleResetHandler, { passive: true });
    });
  },

  jumpTo(targetEl, immediate = false) {
    if (!this.element || !targetEl) return;

    this.currentTarget = targetEl;
    const rect = targetEl.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();

    // Calculate target coordinate relative to document.body
    const targetX = rect.left - bodyRect.left + (rect.width / 2) - 30;
    const targetY = rect.top - bodyRect.top - 54;

    // Flip orientation based on direction (Facing left or right)
    if (targetX < this.currentX) {
      this.element.classList.add('facing-left');
    } else {
      this.element.classList.remove('facing-left');
    }

    this.currentX = targetX;
    this.currentY = targetY;

    if (immediate) {
      this.element.style.left = `${targetX}px`;
      this.element.style.top = `${targetY}px`;
      this.element.style.opacity = '1';
      return;
    }

    // Trigger walking legs and jump arc animation
    this.element.classList.add('walking');
    this.element.classList.add('jumping');
    this.element.style.left = `${targetX}px`;
    this.element.style.top = `${targetY}px`;
    this.element.style.opacity = '1';

    setTimeout(() => {
      this.element.classList.remove('jumping');
      this.element.classList.remove('walking');
      this.element.classList.add('landing-bounce');
      setTimeout(() => {
        this.element.classList.remove('landing-bounce');
      }, 350);
    }, 450);
  },

  resetIdleTimer() {
    clearTimeout(this.idleTimer);
    if (this.element) this.element.classList.remove('mascot-idle');

    this.idleTimer = setTimeout(() => {
      if (this.element) this.element.classList.add('mascot-idle');
    }, 4000);
  },

  startIdleBehavior() {
    this.resetIdleTimer();
  },

  /**
   * Cleans up the mascot: removes DOM element, event listeners, and timers.
   * Call this if you need to re-initialize or unmount the mascot.
   */
  destroy() {
    clearTimeout(this.idleTimer);

    if (this._mouseoverHandler) {
      document.removeEventListener('mouseover', this._mouseoverHandler);
      this._mouseoverHandler = null;
    }

    if (this._idleResetHandler) {
      ['mousemove', 'scroll', 'click'].forEach(evt => {
        window.removeEventListener(evt, this._idleResetHandler);
      });
      this._idleResetHandler = null;
    }

    if (this.element) {
      this.element.remove();
      this.element = null;
    }

    this.currentTarget = null;
    this.currentX = 0;
    this.currentY = 0;
  }
};
