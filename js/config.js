/**
 * Frank Abanto — Central App Configuration & Data (config.js)
 * Modular data store for social networks and form contexts.
 */

window.APP_CONFIG = {
  USER_INFO: {
    name: 'Frank Abanto',
    username: 'FrankUsqAbant',
    avatarUrl: 'https://avatars.githubusercontent.com/u/90288287?v=4',
    siteUrl: 'https://frankusqabant.github.io'
  },
  // Web3Forms Key persists dynamically in browser localStorage for privacy & security
  WEB3FORMS_KEY: localStorage.getItem('web3forms_access_key') || '',

  SOCIAL_NETWORKS: [
    {
      id: 'GitHub',
      name: 'GitHub',
      handle: 'FrankUsqAbant',
      url: 'https://github.com/FrankUsqAbant',
      tag: 'Código & Proyectos',
      cardClass: 'card-github',
      visitText: 'Ir al Perfil',
      actionIcon: '💬',
      landmark: 'Sacsayhuamán 🏰',
      landmarkName: 'Fortaleza de Sacsayhuamán (Cusco)',
      landmarkKey: 'sacsayhuaman',
      svgIcon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.742 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>`
    },
    {
      id: 'LinkedIn',
      name: 'LinkedIn',
      handle: 'in/frankabanto',
      url: 'https://linkedin.com/in/frankabanto',
      tag: 'Profesional',
      cardClass: 'card-linkedin',
      visitText: 'Conectar',
      actionIcon: '💼',
      landmark: 'Lago Titicaca 🌊',
      landmarkName: 'Lago Titicaca (Puno)',
      landmarkKey: 'titicaca',
      svgIcon: `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
    },
    {
      id: 'YouTube',
      name: 'YouTube',
      handle: '@abantofrank12',
      url: 'https://youtube.com/@abantofrank12',
      tag: 'Contenido & IA',
      cardClass: 'card-youtube',
      visitText: 'Ver Canal',
      actionIcon: '▶',
      landmark: 'Huacachina 🏜️',
      landmarkName: 'Oasis de Huacachina (Ica)',
      landmarkKey: 'huacachina',
      svgIcon: `<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
    },
    {
      id: 'Instagram',
      name: 'Instagram',
      handle: 'abantofrank12',
      url: 'https://instagram.com/abantofrank12',
      tag: 'Social / Dev Life',
      cardClass: 'card-instagram',
      visitText: 'Seguir',
      actionIcon: '📸',
      landmark: 'Vinicunca 🌈',
      landmarkName: 'Montaña de 7 Colores (Cusco)',
      landmarkKey: 'vinicunca',
      svgIcon: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`
    },
    {
      id: 'Twitter',
      name: 'Twitter / X',
      handle: '@FrankUsqAbanto',
      url: 'https://x.com/FrankUsqAbanto',
      tag: 'Tech & Ideas',
      cardClass: 'card-twitter',
      visitText: 'Ver Posts',
      actionIcon: '𝕏',
      landmark: 'Líneas de Nazca 🦩',
      landmarkName: 'Geoglífos de Nazca (Ica)',
      landmarkKey: 'nazca',
      svgIcon: `<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
    },
    {
      id: 'Facebook',
      name: 'Facebook',
      handle: 'Frank Abanto',
      url: 'https://facebook.com',
      tag: 'Social & Comunidad',
      cardClass: 'card-facebook',
      visitText: 'Ver Perfil',
      actionIcon: '👥',
      landmark: 'Paracas 🌊',
      landmarkName: 'Reserva Nacional de Paracas (Ica)',
      landmarkKey: 'paracas',
      svgIcon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
    }
  ],

  PLATFORM_CONFIGS: {
    'LinkedIn': {
      label: 'Asunto / Propuesta Profesional',
      placeholder: 'Ej: Oportunidad laboral / Proyecto Frontend',
      badge: 'Modo: Contacto Profesional (LinkedIn)',
      subject: 'Contacto desde LinkedIn - Tarjeta Digital'
    },
    'GitHub': {
      label: 'Proyecto / Repositorio de Interés',
      placeholder: 'Ej: Consulta sobre código / Colaboración Open Source',
      badge: 'Modo: Colaboración Tech (GitHub)',
      subject: 'Contacto desde GitHub - Tarjeta Digital'
    },
    'YouTube': {
      label: 'Tema de Contenido / IA',
      placeholder: 'Ej: Propuesta para video / Consulta sobre tecnología',
      badge: 'Modo: Comunidad / Contenido (YouTube)',
      subject: 'Contacto desde YouTube - Tarjeta Digital'
    },
    'Instagram': {
      label: 'Tema de Consulta',
      placeholder: 'Ej: Pregunta sobre desarrollo web o proyectos',
      badge: 'Modo: Mensaje Directo (Instagram)',
      subject: 'Contacto desde Instagram - Tarjeta Digital'
    },
    'Twitter': {
      label: 'Asunto Breve / Feedback',
      placeholder: 'Ej: Comentario o propuesta rápida',
      badge: 'Modo: Conexión Rápida (Twitter/X)',
      subject: 'Contacto desde Twitter/X - Tarjeta Digital'
    },
    'Facebook': {
      label: 'Asunto / Mensaje Personal',
      placeholder: 'Ej: Saludo o propuesta por Facebook',
      badge: 'Modo: Conexión Social (Facebook)',
      subject: 'Contacto desde Facebook - Tarjeta Digital'
    },
    'General': {
      label: 'Asunto del Mensaje',
      placeholder: '¿En qué puedo ayudarte?',
      badge: 'Modo: Contacto General',
      subject: 'Nuevo mensaje desde la tarjeta digital'
    }
  }
};
