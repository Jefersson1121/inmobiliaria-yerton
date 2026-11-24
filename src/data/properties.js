/**
 * CATÁLOGO DE PROPIEDADES
 * -----------------------
 * Para agregar una propiedad: copia un bloque, cambia el `slug` (único, sin
 * espacios ni tildes) y completa los datos. Guía completa en
 * docs/AGREGAR-PROPIEDADES.md
 *
 * Campos:
 *  - slug        Identificador único; forma la URL: /propiedades/<slug>
 *  - demo        true = datos de ejemplo (muestra la insignia "Demo")
 *  - operation   "venta" | "arriendo"
 *  - type        "apartamento" | "casa" | "lote" | "local"
 *  - status      "disponible" | "arrendado" | "vendido"
 *  - price       Número en COP (sin puntos). Arriendo = canon mensual.
 *  - includesUtilities  true si el arriendo incluye servicios
 *  - bedrooms / bathrooms / area  (area en m²). Usa null si no aplica.
 *  - images      Archivos dentro de /public/images/demo/ (o la carpeta que uses)
 *  - coords      { lat, lng } aproximadas para el mapa
 *  - featured    true = aparece en la portada
 *  - isNew       true = muestra la etiqueta "Nuevo"
 */

const IMG = "/images/demo/";
const img = (name) => `${IMG}${name}.jpg`;

export const properties = [
  {
    slug: "apartamento-medrano-arriendo",
    demo: false,
    title: "Apartamento con pisos en porcelanato en Medrano",
    operation: "arriendo",
    type: "apartamento",
    status: "disponible",
    price: 900000,
    includesUtilities: false,
    neighborhood: "Medrano",
    city: "Quibdó",
    bedrooms: 2,
    bathrooms: 1,
    area: 90,
    parking: false,
    featured: true,
    isNew: true,
    coords: { lat: 5.6972, lng: -76.6521 },
    description:
      "Amplio apartamento recién terminado en el barrio Medrano, con pisos en porcelanato, techo de PVC con luces empotradas y buena iluminación natural. Espacios abiertos, zona de ropas independiente y ventanas con vista a zona verde. Ideal para una familia pequeña o pareja que busca comodidad y buen precio.",
    features: [
      "Pisos en porcelanato",
      "Techo en PVC con luces empotradas",
      "Zona de ropas con lavadero",
      "Ventanas amplias",
      "Zona verde alrededor",
      "Cerca de transporte y comercio",
    ],
    images: [
      img("sala-ventanas"),
      img("sala-escalera"),
      img("sala-columnas"),
      img("habitacion-principal"),
      img("habitacion-ventana"),
      img("pasillo-cocina"),
      img("zona-ropas"),
    ],
  },
  {
    slug: "casa-esquina-kennedy",
    demo: true,
    title: "Casa de dos niveles en callejón tranquilo",
    operation: "venta",
    type: "casa",
    status: "disponible",
    price: 180000000,
    neighborhood: "Kennedy",
    city: "Quibdó",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    parking: false,
    featured: true,
    isNew: false,
    coords: { lat: 5.6905, lng: -76.6612 },
    description:
      "Casa de dos niveles con buena ubicación y acceso peatonal y de moto. Cuenta con espacios amplios para remodelar a gusto, terraza al frente y vecindario consolidado. Excelente oportunidad para inversión o vivienda propia.",
    features: [
      "Dos niveles",
      "Terraza frontal",
      "Escritura al día",
      "Servicios públicos instalados",
      "Posibilidad de remodelación",
    ],
    images: [img("casa-azul-callejon"), img("callejon-acceso"), img("calle-fachadas")],
  },
  {
    slug: "lote-zona-de-expansion",
    demo: true,
    title: "Lote con árboles frutales y zona verde",
    operation: "venta",
    type: "lote",
    status: "disponible",
    price: 95000000,
    neighborhood: "Zona de expansión",
    city: "Quibdó",
    bedrooms: null,
    bathrooms: null,
    area: 400,
    parking: false,
    featured: true,
    isNew: false,
    coords: { lat: 5.7021, lng: -76.6674 },
    description:
      "Lote plano de 400 m² rodeado de vegetación, con árboles frutales, camino en piedra y banca de descanso. Perfecto para construir vivienda campestre o proyecto de pequeña escala. Entorno tranquilo y fresco.",
    features: [
      "400 m² aproximados",
      "Árboles frutales",
      "Terreno plano",
      "Camino de acceso en piedra",
      "Entorno natural y tranquilo",
    ],
    images: [img("lote-zona-verde")],
  },
  {
    slug: "apartamento-centro-segundo-piso",
    demo: true,
    title: "Apartamento en segundo piso, zona centro",
    operation: "arriendo",
    type: "apartamento",
    status: "disponible",
    price: 750000,
    includesUtilities: false,
    neighborhood: "Centro",
    city: "Quibdó",
    bedrooms: 2,
    bathrooms: 1,
    area: 70,
    parking: false,
    featured: true,
    isNew: false,
    coords: { lat: 5.6931, lng: -76.6577 },
    description:
      "Apartamento en segundo piso en pleno centro, a pasos de comercio, bancos y transporte. Pisos en porcelanato, buena ventilación y habitaciones iluminadas.",
    features: [
      "A pasos del comercio",
      "Pisos en porcelanato",
      "Buena ventilación",
      "Zona de ropas",
    ],
    images: [img("habitacion-ventana"), img("sala-columnas"), img("pasillo-cocina"), img("zona-ropas")],
  },
  {
    slug: "casa-familiar-cristo-rey",
    demo: true,
    title: "Casa familiar con patio en Cristo Rey",
    operation: "arriendo",
    type: "casa",
    status: "arrendado",
    price: 1200000,
    includesUtilities: false,
    neighborhood: "Cristo Rey",
    city: "Quibdó",
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
    parking: true,
    featured: false,
    isNew: false,
    coords: { lat: 5.6864, lng: -76.6498 },
    description:
      "Casa familiar con patio, espacio para moto o carro y vecindario tranquilo. Distribución cómoda con tres habitaciones y dos baños.",
    features: ["Patio", "Parqueadero", "Tres habitaciones", "Vecindario tranquilo"],
    images: [img("calle-fachadas"), img("callejon-acceso"), img("zona-ropas")],
  },
  {
    slug: "apartamento-nuevo-medrano-venta",
    demo: true,
    title: "Apartamento nuevo con balcón en Medrano",
    operation: "venta",
    type: "apartamento",
    status: "disponible",
    price: 210000000,
    neighborhood: "Medrano",
    city: "Quibdó",
    bedrooms: 3,
    bathrooms: 2,
    area: 85,
    parking: false,
    featured: true,
    isNew: true,
    coords: { lat: 5.6958, lng: -76.6534 },
    description:
      "Apartamento nuevo, listo para estrenar, con balcón, pisos en porcelanato y acabados modernos. Tres habitaciones y dos baños en un sector en crecimiento.",
    features: [
      "Para estrenar",
      "Balcón",
      "Acabados modernos",
      "Tres habitaciones",
      "Sector en valorización",
    ],
    images: [img("sala-escalera"), img("habitacion-principal"), img("sala-ventanas"), img("habitacion-ventana")],
  },
];

export const propertyTypes = [
  { value: "apartamento", label: "Apartamento" },
  { value: "casa", label: "Casa" },
  { value: "lote", label: "Lote" },
  { value: "local", label: "Local" },
];

export const operations = [
  { value: "venta", label: "Comprar" },
  { value: "arriendo", label: "Arrendar" },
];
