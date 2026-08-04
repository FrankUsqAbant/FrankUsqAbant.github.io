# 🦙 Tarjeta Digital Interactiva — Frank Abanto

**Tarjeta de presentación digital** con redes sociales, formulario de contacto directo y mascota llama animada. Publicada en GitHub Pages.

🔗 **Live:** [frankusqabant.github.io](https://frankusqabant.github.io)

---

## Estructura del Proyecto

```
/
├── index.html               # Entrada principal (HTML semántico + CSP)
├── .nojekyll                # Deshabilita procesamiento Jekyll en GitHub Pages
├── README.md
│
├── css/
│   ├── styles.css           # Entrypoint CSS — importa los módulos
│   ├── base.css             # Design tokens, reset y layout base
│   ├── components.css       # Componentes UI (cards, form, modal, mascota)
│   └── landmarks.css        # Estilos de las fotos de landmarks peruanos
│
├── js/
│   ├── config.js            # 📌 Configuración central: redes sociales y textos
│   ├── landmarksData.js     # Imágenes de landmarks (referencias a assets/)
│   ├── components.js        # Renderizado de cards, modal QR, tilt 3D
│   ├── mascot.js            # Llama SVG interactiva animada
│   ├── formHandler.js       # Envío de formulario, validación y rate-limit
│   └── app.js               # Inicializador principal (DOMContentLoaded)
│
└── assets/
    ├── favicon.svg
    └── landmarks/           # Fotos HD de lugares turísticos del Perú
        ├── machupicchu.jpg
        ├── sierra-verde.jpg
        ├── sacsayhuaman.jpg
        ├── titicaca.jpg
        ├── huacachina.jpg
        ├── vinicunca.jpg
        ├── nazca.jpg
        └── paracas.jpg
```

---

## Configuración — Formulario de Contacto

El formulario usa **Web3Forms** (gratis, sin backend).

1. Regístrate en [web3forms.com](https://web3forms.com) con tu correo
2. Copia tu **Access Key** gratuita
3. En la tarjeta, abre el acordeón **"Configurar envío directo de correo"**
4. Pega la key y haz clic en **Guardar** — queda guardada en tu navegador

---

## Personalización

Edita **`js/config.js`** para cambiar:
- Tu nombre, usuario y avatar (`USER_INFO`)
- URLs y handles de redes sociales (`SOCIAL_NETWORKS`)
- Textos adaptativos del formulario por red (`PLATFORM_CONFIGS`)

Cada red social tiene un `landmarkKey` que referencia la imagen de fondo en `LANDMARKS_DATA`.

---

## Seguridad

- **CSP** declarada en `<meta http-equiv="Content-Security-Policy">`
- **Honeypot** anti-bot en el formulario
- **Rate limiting** client-side (45 segundos entre envíos)
- **Sanitización** de inputs antes del envío a Web3Forms
- **textContent** (nunca innerHTML) para outputs de usuario al DOM
- **`noreferrer`** en todos los `target="_blank"`

---

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| Estructura | HTML5 semántico |
| Estilos | Vanilla CSS (modular) |
| Lógica | Vanilla JS ES6+ (modular, sin dependencias) |
| Fuentes | Google Fonts — Inter + Outfit |
| Formulario | Web3Forms API |
| Deploy | GitHub Pages |

---

© 2026 Frank Abanto — Software Engineer
