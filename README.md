# Frank Abanto — Tarjeta digital

<a href="https://frankusqabant.github.io/">
  <img src="assets/og.jpg" alt="Tarjeta digital de Frank Abanto en estilo terminal" width="100%">
</a>

**[Ver la tarjeta](https://frankusqabant.github.io/)**

Tarjeta de presentación en estilo terminal: enlaces a redes, código QR, contacto para guardar (vCard) y botón de compartir.

- **Ligera y privada.** Unos 43 KB en la primera carga, sin frameworks. Fuente, avatar y QR propios, sin peticiones a terceros y nada guardado en el navegador.
- **Segura.** Política de contenido dentro del HTML: solo permite el script de la propia tarjeta.

## Estructura

```
index.html   la tarjeta (HTML, CSS y JS en un solo archivo)
assets/      avatar, QR, favicon, imagen para compartir y fuentes
```

## Editar y publicar

Los enlaces se editan en el objeto `CONFIG` de `index.html`. Publicar es hacer `git push` a `main` (GitHub Pages).
Si cambias el script, recalcula su huella `sha256` en la política de contenido (`<meta http-equiv="Content-Security-Policy">`).

MIT · © 2026 Frank Abanto
