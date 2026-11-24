# Cómo agregar o editar propiedades

Todas las propiedades viven en un solo archivo: **`src/data/properties.js`**.
No necesitas saber programar: solo copiar un bloque y cambiar los datos.

## Paso 1 — Prepara las fotos

1. Usa fotos **horizontales o verticales** claras y bien iluminadas.
2. Antes de subirlas, reduce el tamaño: lo ideal es **máximo 1400 px** de lado largo y **menos de 400 KB** cada una (puedes usar [squoosh.app](https://squoosh.app), gratis).
3. Usa nombres **sin espacios ni tildes**, en minúsculas: `sala-principal.jpg`.
4. Guárdalas en `public/images/`. Recomendado una carpeta por propiedad:

```
public/images/propiedades/apto-medrano-2/
   ├── sala.jpg
   ├── cocina.jpg
   └── habitacion.jpg
```

> Consejo: antes de fotografiar, retira escombros, motos, cubetas y personas. Las fotos limpias venden más.

## Paso 2 — Copia un bloque en `properties.js`

Busca una propiedad parecida, cópiala completa (de `{` a `},`) y pégala al final de la lista. Cambia los datos:

```js
{
  slug: "apto-medrano-2",            // ÚNICO. Sin espacios ni tildes. Forma la URL.
  demo: false,                       // false = propiedad real (oculta la insignia "Demo")
  title: "Apartamento amplio en Medrano",
  operation: "arriendo",             // "venta" o "arriendo"
  type: "apartamento",               // "apartamento" | "casa" | "lote" | "local"
  status: "disponible",              // "disponible" | "arrendado" | "vendido"
  price: 900000,                     // Solo números, sin puntos ni $
  includesUtilities: false,          // arriendo: ¿incluye servicios?
  neighborhood: "Medrano",
  city: "Quibdó",
  bedrooms: 2,                       // null si no aplica (ej. lote)
  bathrooms: 1,                      // null si no aplica
  area: 90,                          // metros cuadrados
  parking: false,
  featured: true,                    // true = aparece en la portada
  isNew: true,                       // true = etiqueta "Nuevo"
  coords: { lat: 5.6972, lng: -76.6521 },   // ver "Coordenadas"
  description: "Texto descriptivo del inmueble…",
  features: ["Pisos en porcelanato", "Zona de ropas"],
  images: [
    "/images/propiedades/apto-medrano-2/sala.jpg",   // la 1.ª es la portada
    "/images/propiedades/apto-medrano-2/cocina.jpg",
  ],
},
```

## Paso 3 — Revisa

```bash
npm run dev
```

Abre <http://localhost:3000/propiedades> y verifica la tarjeta y el detalle.

## Paso 4 — Publica

Sube los cambios a GitHub (ver [DESPLIEGUE.md](DESPLIEGUE.md)). Vercel actualiza el sitio solo en ~1 minuto.

---

## Preguntas frecuentes

**¿Cómo marco una propiedad como arrendada/vendida?**
Cambia `status: "arrendado"` (o `"vendido"`). Se muestra la etiqueta y baja en el listado.

**¿Cómo la elimino?**
Borra el bloque completo (o cambia el estado, para conservar el historial).

**Coordenadas:** en [openstreetmap.org](https://www.openstreetmap.org) busca el sitio, clic derecho → "Mostrar dirección" y copia latitud y longitud. Para proteger la privacidad del propietario, usa una ubicación **aproximada** del barrio.

**Precio de arriendo:** va el canon mensual. Si incluye servicios, pon `includesUtilities: true`.

**Un error de sintaxis rompió el sitio.** Revisa que cada bloque termine en `},`, que los textos estén entre comillas y que no falten comas. Si no aparece el problema, deshaz el último cambio (`git checkout src/data/properties.js`).

## Siguiente nivel (opcional)

Cuando el catálogo crezca (más de ~30 propiedades) conviene pasarlo a **Google Sheets** o a un CMS gratuito para que la inmobiliaria edite sin tocar código. La estructura actual de datos está pensada para migrar fácil: solo habría que cambiar `src/lib/properties.js`.
