<table border="0" width="100%">
  <tr>
    <td valign="top" width="75%">
      <h1>🦙 Frank Abanto — Tarjeta Digital & Redes Sociales</h1>
      <p>
        <a href="https://frankusqabant.github.io">
          <img src="https://img.shields.io/badge/Website-frankusqabant.github.io-14b8a6?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website" />
        </a>
        <a href="https://frankusqabant.github.io">
          <img src="https://img.shields.io/badge/Mobile-100%25%20Responsive-38bdf8?style=for-the-badge&logo=android" alt="Mobile" />
        </a>
        <img src="https://img.shields.io/badge/Made%20in-Perú%20🇵🇪-ef4444?style=for-the-badge" alt="Perú" />
      </p>
      <p><strong>Tarjeta de presentación digital e interactiva</strong> con enlaces profesionales, fotos optimizadas del Perú, formulario de contacto directo sin backend y la mascota animada <strong>Llamita Peruana Dev</strong>.</p>
    </td>
    <td valign="middle" align="center" width="25%">
      <a href="https://frankusqabant.github.io">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://frankusqabant.github.io&color=0f172a&bgcolor=ffffff&ecc=H&margin=8" width="130" height="130" alt="Código QR de Frank Abanto" title="Escanea para abrir en móvil" />
      </a>
    </td>
  </tr>
</table>

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

## 🚀 Sitio en Vivo

👉 **[https://frankusqabant.github.io](https://frankusqabant.github.io)**

© 2026 Frank Abanto — Software Engineer
