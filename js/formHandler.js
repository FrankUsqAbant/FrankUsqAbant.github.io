/**
 * Frank Abanto — Form Handler & Security Module (formHandler.js)
 * Manages Web3Forms submission, input sanitization, rate-limiting, and alerts.
 *
 * SECURITY NOTES:
 *   - User inputs are sanitized via sanitizeInput() before network transmission.
 *   - All DOM output uses textContent (never innerHTML), preventing XSS.
 *   - The Web3Forms access key is stored in localStorage for convenience.
 *     This is intentional: the key is non-sensitive (public-facing form service),
 *     and the user is the owner of the page who configures it themselves.
 *   - Rate limiting (45s cooldown) prevents form spam from client side.
 */

window.FormHandler = {
  init() {
    const contactForm = document.getElementById('contact-form');
    const accessKeyInput = document.getElementById('access_key_input');
    const userKeyField = document.getElementById('user-key-field');
    const saveKeyBtn = document.getElementById('save-key-btn');

    // Load saved key from localStorage
    const savedKey = localStorage.getItem('web3forms_access_key');
    if (savedKey) {
      if (accessKeyInput) accessKeyInput.value = savedKey;
      if (userKeyField) userKeyField.value = savedKey;
    }

    // Save key handler — stores key in localStorage for persistence across sessions.
    // The Web3Forms key is a low-sensitivity API key intended for client-side use.
    if (saveKeyBtn) {
      saveKeyBtn.addEventListener('click', () => {
        const newKey = userKeyField.value.trim();
        if (newKey) {
          localStorage.setItem('web3forms_access_key', newKey);
          if (accessKeyInput) accessKeyInput.value = newKey;
          this.showStatus('Key de Web3Forms guardada correctamente.', 'success');
        } else {
          localStorage.removeItem('web3forms_access_key');
          if (accessKeyInput) accessKeyInput.value = 'YOUR_ACCESS_KEY_HERE';
          this.showStatus('Key eliminada.', 'error');
        }
      });
    }

    // Form submit listener
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  },

  sanitizeInput(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  checkRateLimit() {
    const lastSubmit = localStorage.getItem('last_form_submit');
    if (lastSubmit) {
      const timeDiff = Date.now() - parseInt(lastSubmit, 10);
      if (timeDiff < 45000) {
        const remaining = Math.ceil((45000 - timeDiff) / 1000);
        return `Por favor espera ${remaining} segundos antes de enviar otro mensaje.`;
      }
    }
    return null;
  },

  async handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const accessKeyInput = document.getElementById('access_key_input');

    const limitError = this.checkRateLimit();
    if (limitError) {
      this.showStatus(limitError, 'error');
      return;
    }

    const botCheck = form.querySelector('input[name="botcheck"]');
    if (botCheck && botCheck.checked) {
      console.warn('Bot attempt blocked.');
      return;
    }

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();
    const accessKey = accessKeyInput ? accessKeyInput.value.trim() : '';

    if (!name || !email || !message) {
      this.showStatus('Por favor completa todos los campos requeridos.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showStatus('Por favor ingresa un correo electrónico válido.', 'error');
      return;
    }

    if (accessKey === 'YOUR_ACCESS_KEY_HERE' || !accessKey) {
      this.showStatus('⚠️ Por favor agrega tu Access Key de Web3Forms en la sección de configuración desplegable.', 'error');
      document.querySelector('.key-accordion')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const formData = new FormData(form);
    formData.set('name', this.sanitizeInput(name));
    formData.set('email', this.sanitizeInput(email));
    formData.set('message', this.sanitizeInput(message));

    if (submitBtn && btnText) {
      submitBtn.disabled = true;
      btnText.textContent = 'Enviando...';
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        this.showStatus('¡Mensaje enviado con éxito! Te responderé pronto. 🚀', 'success');
        form.reset();
        // Safe: updateAdaptiveForm only sets placeholder/label via textContent internally
        window.UIComponents.updateAdaptiveForm('General');
        localStorage.setItem('last_form_submit', Date.now().toString());
      } else {
        // data.message is a string from the Web3Forms API.
        // showStatus renders via textContent, so this is XSS-safe.
        this.showStatus(data.message || 'Error al enviar el mensaje. Verifica tu Key de Web3Forms.', 'error');
      }
    } catch (err) {
      console.error('Submit error:', err);
      this.showStatus('Ocurrió un error de red. Inténtalo de nuevo más tarde.', 'error');
    } finally {
      if (submitBtn && btnText) {
        submitBtn.disabled = false;
        btnText.textContent = 'Enviar Mensaje';
      }
    }
  },

  showStatus(text, type) {
    const statusBox = document.getElementById('form-status');
    if (!statusBox) return;
    statusBox.textContent = text;
    statusBox.className = `status-alert ${type}`;
    statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
};
