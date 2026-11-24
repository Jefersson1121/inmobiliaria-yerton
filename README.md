# Inmobiliaria Yerton L.M. — Sitio web

Sitio web de **Inmobiliaria Yerton L.M.** (Quibdó, Chocó; próximamente Medellín).
Hecho con **Next.js** (App Router) + React, sin base de datos ni servicios de pago.

> **Estado:** demo funcional. Las propiedades marcadas `demo: true` son de ejemplo y deben reemplazarse por las reales.

## Qué incluye

| Sección | Ruta | Descripción |
|---|---|---|
| Inicio | `/` | Portada, buscador, destacadas, servicios, cifras, proceso |
| Propiedades | `/propiedades` | Catálogo con filtros (operación, tipo, barrio, precio, habitaciones) |
| Detalle | `/propiedades/[slug]` | Galería, características, mapa, WhatsApp, calculadora de crédito |
| Servicios | `/servicios` | Servicios y proceso de trabajo |
| Nosotros | `/nosotros` | Historia y valores |
| Publica tu inmueble | `/publica-tu-inmueble` | Formulario para propietarios |
| Medellín | `/medellin` | Anuncio de expansión |
| Contacto | `/contacto` | Datos, mapa y formulario |
| Favoritos | `/favoritos` | Propiedades guardadas en el dispositivo |

Extras: botón flotante de WhatsApp, etiquetas de estado (Nuevo / Arrendado / Vendido), SEO (sitemap, robots, datos estructurados), diseño responsive (móvil primero).

## Inicio rápido

Requisitos: [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install        # instala dependencias (solo la primera vez)
npm run dev        # abre http://localhost:3000
```

Otros comandos:

```bash
npm run build      # compila para producción
npm run start      # sirve la versión compilada
```

## Estructura de carpetas

```
yerton-inmobiliaria/
├── docs/                      Documentación (guías paso a paso)
│   ├── AGREGAR-PROPIEDADES.md   Cómo agregar/editar propiedades
│   ├── DESPLIEGUE.md            GitHub + Vercel + dominio
│   ├── DISENO.md                Colores, tipografía, componentes
│   └── ARQUITECTURA.md          Cómo está organizado el código
├── public/                    Archivos públicos (se sirven tal cual)
│   └── images/
│       ├── brand/               Logo
│       └── demo/                Fotos de las propiedades
├── src/
│   ├── app/                   Páginas y rutas (una carpeta = una URL)
│   ├── components/            Piezas reutilizables
│   │   ├── layout/              Header, Footer, WhatsApp flotante, Favoritos
│   │   ├── home/                Buscador de la portada
│   │   ├── properties/          Tarjeta, galería, filtros, mapa, calculadora
│   │   ├── forms/               Formulario de contacto / publicar
│   │   └── ui/                  Iconos, encabezados
│   ├── data/                  ★ Contenido editable
│   │   ├── site.js              Teléfono, redes, textos, cifras
│   │   ├── properties.js        Catálogo de propiedades
│   │   └── services.js          Servicios y proceso
│   ├── lib/                   Funciones auxiliares (formato, filtros, WhatsApp)
│   └── styles/                Estilos CSS organizados por capas
├── .env.example               Variables de entorno (plantilla)
├── next.config.mjs            Configuración de Next.js
└── package.json
```

**Lo que normalmente editarás:** solo `src/data/` y las fotos en `public/images/`.

## Configuración rápida

1. **Datos de la inmobiliaria** → `src/data/site.js` (WhatsApp, correo, dirección, horario, redes).
2. **Propiedades** → `src/data/properties.js` (ver [guía](docs/AGREGAR-PROPIEDADES.md)).
3. **Variables de entorno** → copia `.env.example` a `.env.local`.

## Pendientes antes de lanzar (TODO)

- [ ] Reemplazar propiedades demo por las reales (con fotos limpias, sin escombros ni personas).
- [ ] Confirmar dirección y horario reales en `src/data/site.js`.
- [ ] Agregar correo de contacto (hoy está vacío y se oculta).
- [ ] Reemplazar las cifras de `site.stats` por datos reales.
- [ ] Escribir la historia real en `src/app/nosotros/page.js`.
- [ ] Confirmar condiciones comerciales en `src/app/publica-tu-inmueble/page.js`.
- [ ] Crear clave de Web3Forms para recibir formularios por correo.
- [ ] Comprar dominio propio y conectarlo (ver [despliegue](docs/DESPLIEGUE.md)).
- [ ] Revisar uso comercial del plan gratuito de Vercel (ver despliegue).

## Licencia y créditos

Logo y fotografías © Inmobiliaria Yerton L.M. Código del sitio de uso interno para la inmobiliaria.
