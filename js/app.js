/**
 * Franquer Abanto — Main Application Entrypoint (app.js)
 * Bootstraps modular UI components and form handlers.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Social Cards dynamically from config
  if (window.UIComponents) {
    window.UIComponents.renderSocialCards('social-grid-container');
    window.UIComponents.initQrModal();
  }

  // 2. Initialize Form Handler & Security
  if (window.FormHandler) {
    window.FormHandler.init();
  }

  // 3. Initialize Interactive Companion Mascot
  if (window.InteractiveMascot) {
    window.InteractiveMascot.init();
  }

  // 4. Bind social icon picker buttons
  const pickerBtns = document.querySelectorAll('.icon-picker-btn');
  pickerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const platform = btn.getAttribute('data-platform');
      if (platform && window.UIComponents) {
        window.UIComponents.updateAdaptiveForm(platform);
      }
    });
  });

  // 5. Toggle Contact Form visibility
  const toggleBtn = document.getElementById('toggle-contact-btn');
  const contactSection = document.getElementById('contacto');
  const toggleBtnText = document.getElementById('toggle-btn-text');

  function showContactForm() {
    if (contactSection && contactSection.classList.contains('collapsed')) {
      contactSection.classList.remove('collapsed');
      if (toggleBtnText) toggleBtnText.textContent = 'Ocultar Formulario de Contacto';
    }
  }

  if (toggleBtn && contactSection) {
    toggleBtn.addEventListener('click', () => {
      const isCollapsed = contactSection.classList.contains('collapsed');
      if (isCollapsed) {
        showContactForm();
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        contactSection.classList.add('collapsed');
        if (toggleBtnText) toggleBtnText.textContent = 'Enviar un Mensaje Directo';
      }
    });
  }

  // 6. Delegate click events for Social Card "Mensaje" buttons
  const gridContainer = document.getElementById('social-grid-container');
  if (gridContainer) {
    gridContainer.addEventListener('click', (e) => {
      const msgBtn = e.target.closest('.btn-card-msg');
      if (msgBtn) {
        e.stopPropagation();
        const card = msgBtn.closest('.card-item');
        const platform = card?.getAttribute('data-platform');

        if (platform && window.UIComponents) {
          showContactForm();
          window.UIComponents.updateAdaptiveForm(platform);
          setTimeout(() => {
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    });
  }

  // 7. Update footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
