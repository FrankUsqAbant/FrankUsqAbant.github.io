/**
 * Frank Abanto — Real Photo Landscapes (landmarksData.js)
 * Fotografías autenticadas de centros turísticos del Perú optimizadas para Web (WebP + JPG fallback).
 * Carga ultra-rápida y ligera.
 */

window.LANDMARKS_DATA = {
  // 1. Ciudadela de Machu Picchu (Formulario de Contacto)
  machupicchu: `
    <picture>
      <source srcset="assets/landmarks/machupicchu.webp" type="image/webp" />
      <img src="assets/landmarks/machupicchu.jpg" alt="Ciudadela de Machu Picchu" class="landmark-photo-img" loading="lazy" decoding="async" width="550" height="550" />
    </picture>
  `,

  // 2. Campo Verde de la Sierra Peruana — Valle Sagrado (Header)
  andesHeader: `
    <picture>
      <source srcset="assets/landmarks/sierra-verde.webp" type="image/webp" />
      <img src="assets/landmarks/sierra-verde.jpg" alt="Campo verde de la sierra peruana, Valle Sagrado" class="landmark-photo-img" decoding="async" fetchpriority="high" width="550" height="240" />
    </picture>
  `,

  // 3. Fortaleza de Sacsayhuamán - Cusco (GitHub Card)
  sacsayhuaman: `
    <picture>
      <source srcset="assets/landmarks/sacsayhuaman.webp" type="image/webp" />
      <img src="assets/landmarks/sacsayhuaman.jpg" alt="Fortaleza de Sacsayhuamán, Cusco" class="landmark-photo-img" loading="lazy" decoding="async" width="550" height="550" />
    </picture>
  `,

  // 4. Lago Titicaca & Islas Uros - Puno (LinkedIn Card)
  titicaca: `
    <picture>
      <source srcset="assets/landmarks/titicaca.webp" type="image/webp" />
      <img src="assets/landmarks/titicaca.jpg" alt="Lago Titicaca, Puno" class="landmark-photo-img" loading="lazy" decoding="async" width="550" height="550" />
    </picture>
  `,

  // 5. Oasis de Huacachina & Dunas - Ica (YouTube Card)
  huacachina: `
    <picture>
      <source srcset="assets/landmarks/huacachina.webp" type="image/webp" />
      <img src="assets/landmarks/huacachina.jpg" alt="Oasis de Huacachina, Ica" class="landmark-photo-img" loading="lazy" decoding="async" width="550" height="550" />
    </picture>
  `,

  // 6. Vinicunca / Montaña de 7 Colores - Cusco (Instagram Card)
  vinicunca: `
    <picture>
      <source srcset="assets/landmarks/vinicunca.webp" type="image/webp" />
      <img src="assets/landmarks/vinicunca.jpg" alt="Vinicunca — Montaña de 7 Colores, Cusco" class="landmark-photo-img" loading="lazy" decoding="async" width="550" height="550" />
    </picture>
  `,

  // 7. Líneas de Nazca / Desierto - Ica (Twitter/X Card)
  nazca: `
    <picture>
      <source srcset="assets/landmarks/nazca.webp" type="image/webp" />
      <img src="assets/landmarks/nazca.jpg" alt="Líneas de Nazca, Ica" class="landmark-photo-img" loading="lazy" decoding="async" width="550" height="550" />
    </picture>
  `,

  // 8. Reserva Nacional de Paracas - Ica (Facebook Card)
  paracas: `
    <picture>
      <source srcset="assets/landmarks/paracas.webp" type="image/webp" />
      <img src="assets/landmarks/paracas.jpg" alt="Reserva Nacional de Paracas, Ica" class="landmark-photo-img" loading="lazy" decoding="async" width="550" height="550" />
    </picture>
  `
};
