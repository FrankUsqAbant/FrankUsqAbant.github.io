# 🦙 Frank Abanto — Tarjeta Digital & Redes Sociales

[![Live Site](https://img.shields.io/badge/Website-frankusqabant.github.io-14b8a6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://frankusqabant.github.io)
[![License](https://img.shields.io/badge/License-MIT-38bdf8?style=for-the-badge)](LICENSE)
[![Perú](https://img.shields.io/badge/Made%20in-Perú%20🇵🇪-ef4444?style=for-the-badge)](#)

> **Tarjeta de presentación digital e interactiva** con enlaces profesionales, formulario de contacto traslúcido y la mascota animada **Llamita Peruana Dev**.

---

## ⚡ Características Destacadas

- 🦙 **Mascota Interactiva**: Llamita peruana animada que te acompaña y reacciona al interactuar con las tarjetas.
- 🇵🇪 **Paisajes del Perú**: Fondos fotográficos optimizados (Machu Picchu, Sacsayhuamán, Huacachina, Titicaca, Vinicunca, Paracas, Nazca, Sierra Verde).
- 📧 **Contacto Directo**: Formulario con Web3Forms preconfigurado que envía mensajes a tu correo sin backend.
- 📱 **Código QR Integrado**: Modal responsivo para escaneo rápido en tarjetas físicas.
- ⚡ **Rendimiento Ultrarrápido**: Imágenes en WebP optimizadas (< 50 KB cada una) y precarga instantánea.
- 🔒 **Seguridad Avanzada**: CSP estricto, sanitización de entradas, rate-limiting y protección de credenciales en `localStorage`.

---

## 📁 Arquitectura del Proyecto

```
/
├── index.html            # HTML5 semántico + CSP + Precarga
├── .nojekyll             # Servidor GitHub Pages en modo directo
├── README.md             # Documentación principal
│
├── css/                  # Estilos modulares
│   ├── styles.css        # Entrypoint de estilos
│   ├── base.css          # Design tokens & variables CSS
│   ├── components.css    # Cards, formulario traslúcido y mascota
│   └── landmarks.css     # Transiciones suaves de fotos del Perú
│
├── js/                   # Lógica JavaScript (ES6 Vanilla)
│   ├── config.js         # Configuración central de redes y datos
│   ├── landmarksData.js  # Referencias optimizadas WebP/JPG
│   ├── components.js     # Renderizado de cards y modal QR
│   ├── mascot.js         # Animación y seguimiento de la llamita
│   ├── formHandler.js    # Envío de formulario y sanitización
│   └── app.js            # Punto de entrada principal
│
└── assets/
    ├── favicon.svg       # Favicon SVG de la Llamita Peruana Dev
    └── landmarks/        # Imágenes HD optimizadas en formato WebP & JPG
```

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| **Estructura** | HTML5 semántico |
| **Diseño** | Vanilla CSS (Glassmorphism & Micro-interacciones) |
| **Lógica** | JavaScript ES6+ Vanilla (Sin frameworks pesados) |
| **Imágenes** | WebP (Next-Gen Format) |
| **Servicio Email** | Web3Forms API |
| **Hosting** | GitHub Pages |

---

## 🚀 Despliegue en Vivo

Accede a la versión pública publicada en:
👉 **[https://frankusqabant.github.io](https://frankusqabant.github.io)**

© 2026 Frank Abanto — Software Engineer
