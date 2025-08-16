# DJ Website (Tema One Piece) — React + Vite

Sitio web profesional para un DJ ubicado en Estados Unidos con temática inspirada en One Piece (sin usar imágenes con copyright). Incluye información de contacto, Instagram, Facebook y SoundCloud.

## Requisitos
- Node.js 16+ (compatibilidad con Vite 4)

## Ejecutar en local
```bash
npm install
npm run dev
```
Abre http://localhost:5173

## Build de producción
```bash
npm run build
npm run preview
```

## Deploy en Render (Static Site)
- Publish Directory: `dist`
- Build Command: `npm ci && npm run build`
- Redirect/Rewrites: `/* -> /index.html`

Con blueprint (opcional) usando `render.yaml` en la raíz:

```yaml
services:
	- type: static
		name: dj-dixson
		buildCommand: npm ci && npm run build
		publishPath: dist
		routes:
			- type: rewrite
				source: /*
				destination: /index.html
```

## Personalización rápida
Edita `src/App.jsx` y cambia el objeto `profile`:
- `name`: nombre del DJ
- `phone`: número (mejor con código de país, ej. +1...) 
- `instagram`, `facebook`, `soundcloud`: URLs

## Notas de marca
- Diseño inspirado en estética de mar, sombrero de paja y tonos dorados/rojos.
- No incluye logotipos oficiales ni imágenes con derechos.

## Estructura
- `src/components/*`: Secciones (Header, Hero, About, Contact, Footer, SoundCloudPlayer)
- `src/styles.css`: estilos globales
- `index.html`: punto de entrada

## SEO básico
- `<title>` y `<meta description>` en `index.html`. Actualízalos con el nombre del DJ.

---
Hecho con React + Vite.
# dj-dixson
