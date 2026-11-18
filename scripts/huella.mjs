// Mantiene al día la huella (sha256) del script de index.html dentro de la política de contenido.
// Si editas el script (por ejemplo el objeto CONFIG) sin actualizar la huella, el navegador lo bloquea y la tarjeta deja de funcionar.
//
//   node scripts/huella.mjs               recalcula y escribe la huella en index.html
//   node scripts/huella.mjs --comprobar   solo comprueba (termina con error si no coincide)
//   node scripts/huella.mjs otra.html     trabaja sobre otro archivo
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const args = process.argv.slice(2);
const soloComprobar = args.includes('--comprobar');
const archivo = args.find((a) => !a.startsWith('--')) ?? 'index.html';

const original = readFileSync(archivo, 'utf8');
const html = original.replaceAll('\r\n', '\n'); // la huella se calcula sobre saltos LF, como los sirve GitHub

const scripts = [...html.matchAll(/<script(?![^>]*\bsrc\b)[^>]*>([\s\S]*?)<\/script>/g)];
if (scripts.length !== 1) {
  console.error(`Se esperaba exactamente un script en línea y hay ${scripts.length}.`);
  process.exit(1);
}
const huella = 'sha256-' + createHash('sha256').update(scripts[0][1]).digest('base64');

const politica = html.match(/(<meta http-equiv="Content-Security-Policy" content="[^"]*script-src '?)(sha256-[A-Za-z0-9+/=]+)('?[^"]*">)/);
if (!politica) {
  console.error('No encuentro la política de contenido con script-src sha256-… en el archivo.');
  process.exit(1);
}

if (politica[2] === huella) {
  console.log(`Huella correcta: ${huella}`);
  process.exit(0);
}
if (soloComprobar) {
  console.error(`La huella no coincide.\n  En la política: ${politica[2]}\n  Del script:     ${huella}\nEjecuta: node scripts/huella.mjs`);
  process.exit(1);
}
writeFileSync(archivo, html.replace(politica[2], huella));
console.log(`Huella actualizada: ${huella}`);
