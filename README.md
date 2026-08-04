# 🦙 Frank Abanto — Tarjeta Digital & Redes Sociales

<div align="right">
  <a href="https://frankusqabant.github.io">
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=https://frankusqabant.github.io&color=0f172a&bgcolor=14b8a6&margin=4" alt="Código QR del Sitio" title="Escanea para abrir en móvil" width="100" height="100" />
  </a>
</div>

[![Live Site](https://img.shields.io/badge/Website-frankusqabant.github.io-14b8a6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://frankusqabant.github.io)
[![Mobile Responsive](https://img.shields.io/badge/Mobile-100%25%20Responsive-38bdf8?style=for-the-badge&logo=android)](https://frankusqabant.github.io)
[![Perú](https://img.shields.io/badge/Made%20in-Perú%20🇵🇪-ef4444?style=for-the-badge)](#)

> **Tarjeta de presentación digital e interactiva** con redes sociales, fotos optimizadas del Perú, formulario directo sin backend y la mascota animada **Llamita Peruana Dev**.

---

## ⚡ Características Destacadas

- 🦙 **Mascota Peruana Dev**: Llamita animada en SVG que reacciona y te acompaña al recorrer las tarjetas.
- 🇵🇪 **Paisajes del Perú**: Fondos fotográficos optimizados en formato WebP (Machu Picchu, Sacsayhuamán, Huacachina, Titicaca, Vinicunca, Paracas, Nazca, Sierra Verde).
- 📧 **Formulario Directo**: Envío inmediato de correo via Web3Forms API preconfigurado.
- 📱 **Diseño 100% Responsivo**: Adaptado perfectamente para celulares, tablets y escritorios.
- ⚡ **Rendimiento Ultra-Ligero**: Carga completa en milisegundos (< 200 KB payload total).

---

## 💻 Código de Configuración Rápida (`js/config.js`)

```javascript
window.APP_CONFIG = {
  USER_INFO: {
    name: 'Frank Abanto',
    username: 'FrankUsqAbant',
    avatarUrl: 'https://avatars.githubusercontent.com/u/90288287?v=4',
    siteUrl: 'https://frankusqabant.github.io'
  },
  WEB3FORMS_KEY: '1d87ffd7-8edb-44eb-8511-60ba0356a761',
  SOCIAL_NETWORKS: [
    { id: 'GitHub', name: 'GitHub', handle: 'FrankUsqAbant', url: 'https://github.com/FrankUsqAbant' },
    { id: 'LinkedIn', name: 'LinkedIn', handle: 'in/frankabanto', url: 'https://linkedin.com/in/frankabanto' }
  ]
};
```

---

## 📁 Arquitectura del Proyecto

```
/
├── index.html            # HTML5 semántico + CSP + Preload
├── .nojekyll             # Servidor GitHub Pages en modo directo
├── README.md             # Documentación principal con QR & Código
│
├── css/                  # Estilos modulares
│   ├── styles.css        # Entrypoint principal de estilos
│   ├── base.css          # Design tokens & variables CSS
│   ├── components.css    # Cards, formulario traslúcido y responsivo mobile
│   └── landmarks.css     # Transiciones suaves de fotos del Perú
│
├── js/                   # Lógica JavaScript (ES6 Vanilla)
│   ├── config.js         # Configuración central de datos & API Key
│   ├── landmarksData.js  # Referencias optimizadas WebP/JPG
│   ├── components.js     # Renderizado de tarjetas y modal QR
│   ├── mascot.js         # Animación y seguimiento de la llamita
│   ├── formHandler.js    # Envío de formulario y sanitización
│   └── app.js            # Punto de entrada principal
│
└── assets/
    ├── favicon.svg       # Favicon SVG de la Llamita Peruana Dev
    └── landmarks/        # Imágenes HD ultra-comprimidas en WebP
```

---

## 🔒 Arquitectura de Seguridad

- **Key Pública Web3Forms**: La clave de Web3Forms es por diseño un *enrutador público de formularios frontend* (similar a una Site Key de reCAPTCHA o endpoint de Formspree). No es una clave privada ni otorga acceso a tu cuenta.
- **Honeypot Anti-Spam**: Filtro anti-bots integrado en el HTML (`botcheck`).
- **Sanitización & TextContent**: Entradas sanitizadas client-side y renderizado del DOM mediante `textContent` para prevenir XSS.
- **Rate-Limiting**: Cooldown de 45s entre envíos para prevenir spam.

---

## 🚀 Sitio en Vivo

👉 **[https://frankusqabant.github.io](https://frankusqabant.github.io)**

© 2026 Frank Abanto — Software Engineer
