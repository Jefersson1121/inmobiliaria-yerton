# Guía de diseño

Identidad tomada del logo de Yerton L.M.: **azul marino y dorado**, elegante y de confianza.

## Colores

Definidos como variables en `src/styles/tokens.css`. Cámbialos ahí y se actualiza todo el sitio.

| Uso | Variable | Valor |
|---|---|---|
| Principal | `--navy-700` | `#1B2F6B` |
| Fondos oscuros | `--navy-900` | `#0F1C45` |
| Acento | `--gold-500` | `#C9A23F` |
| Texto | `--ink` | `#1A2038` |
| Texto secundario | `--muted` | `#5B6482` |
| Fondo suave | `--bg-soft` | `#F7F8FC` |
| WhatsApp | `--whatsapp` | `#25D366` |

**Regla:** azul para estructura y confianza, dorado solo para acciones y detalles (botones, precios, etiquetas).

## Tipografía

- **Títulos:** Playfair Display (serif elegante).
- **Texto:** Inter (legible en pantallas pequeñas).
- Ambas se cargan desde `npm` (autoalojadas), sin depender de Google Fonts.

## Organización de estilos (`src/styles/`)

| Archivo | Contenido |
|---|---|
| `tokens.css` | Colores, fuentes, radios, sombras |
| `base.css` | Reset, tipografía, contenedor, secciones |
| `components.css` | Botones, header, footer, tarjetas, formularios |
| `pages.css` | Estilos propios de cada página |

Se importan todos desde `src/app/globals.css`.

## Clases útiles

- Botones: `btn btn--gold`, `btn--navy`, `btn--outline`, `btn--whatsapp`, `btn--sm`, `btn--block`
- Secciones: `section`, `section--soft`, `section--navy`
- Rejillas: `grid grid--3`, `grid--2`
- Etiquetas: `badge badge--venta`, `badge--arriendo`, `badge--new`

## Accesibilidad incluida

- Contraste suficiente en texto y botones.
- Navegación por teclado (menú, galería con flechas ← →).
- Etiquetas `aria-*` en botones de iconos.
- Respeta "reducir movimiento" del sistema.

## Fotos: recomendaciones

- Horizontal 4:3 o vertical 3:4, buena luz natural, espacios despejados.
- Máx. 1400 px de lado largo; la primera foto es la portada de la tarjeta.
