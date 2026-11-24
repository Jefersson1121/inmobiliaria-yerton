# Arquitectura

Guía para entender (o delegar) el código. No necesitas dominar Next.js para mantener el sitio: el contenido vive en `src/data/`.

## Conceptos de Next.js que se usan

- **App Router:** cada carpeta dentro de `src/app/` con un `page.js` es una URL. `src/app/contacto/page.js` → `/contacto`.
- **Ruta dinámica:** `src/app/propiedades/[slug]/page.js` genera una página por propiedad (`/propiedades/apartamento-medrano-arriendo`).
- **Componentes de servidor (por defecto):** se renderizan al compilar; son rápidos y buenos para SEO.
- **Componentes de cliente (`"use client"`):** solo donde hay interacción (menú móvil, galería, favoritos, formularios, calculadora).

## Flujo de datos

```
src/data/properties.js ──► src/lib/properties.js ──► páginas y componentes
 (contenido editable)       (buscar, filtrar, ordenar)
```

- Los **filtros** funcionan con parámetros de URL (`/propiedades?operacion=venta&tipo=casa`). Se procesan en el servidor y se pueden compartir.
- Los **favoritos** se guardan en `localStorage` del visitante (sin cuentas ni base de datos).
- El **formulario** usa Web3Forms si hay clave; si no, abre WhatsApp con el mensaje.
- El **mapa** es un `<iframe>` de OpenStreetMap (sin API key).

## Mapa de archivos importantes

| Archivo | Para qué sirve |
|---|---|
| `src/app/layout.js` | Estructura común (header, footer, fuentes, SEO base) |
| `src/app/page.js` | Portada |
| `src/app/propiedades/page.js` | Catálogo + filtros |
| `src/app/propiedades/[slug]/page.js` | Detalle de propiedad |
| `src/app/sitemap.js` / `robots.js` | SEO para Google |
| `src/components/properties/PropertyCard.jsx` | Tarjeta de propiedad |
| `src/components/forms/LeadForm.jsx` | Formularios (contacto y publicar) |
| `src/lib/whatsapp.js` | Genera enlaces de WhatsApp |
| `src/lib/format.js` | Formato de moneda y etiquetas |

## Convenciones

- Idioma del contenido y de la interfaz: **español (Colombia)**.
- Un componente por archivo, nombre en `PascalCase.jsx`.
- Sin librerías de UI ni de iconos: menos peso y menos dependencias que mantener.
- Estilos en CSS plano con variables; no hay que aprender Tailwind.
- Rutas con alias `@/` (apunta a `src/`).

## Cómo ampliar

| Quiero… | Dónde tocar |
|---|---|
| Nueva página (ej. Blog) | Crear `src/app/blog/page.js` y añadirla en `src/data/site.js` → `navigation` |
| Nuevo servicio | `src/data/services.js` |
| Nuevo campo en propiedades (ej. estrato) | `properties.js` + mostrarlo en `[slug]/page.js` |
| Catálogo en Google Sheets / CMS | Reemplazar la fuente en `src/lib/properties.js` |
| Panel de administración | Agregar un CMS (Decap, Sanity) o Supabase |
| Estadísticas de visitas | Vercel Analytics o Google Analytics en `layout.js` |
| Sección Medellín con inmuebles | Agregar `city: "Medellín"` en las propiedades y un filtro por ciudad |

## Seguridad y privacidad

- Ninguna clave secreta en el código: solo `NEXT_PUBLIC_*` (públicas por diseño). Nunca subas `.env.local`.
- Formulario con campo trampa (honeypot) contra spam básico.
- Ubicaciones aproximadas en los mapas.
