/**
 * Datos generales de la inmobiliaria.
 * Edita este archivo para cambiar teléfono, redes, textos de marca, etc.
 */
export const site = {
  name: "Inmobiliaria Yerton L.M.",
  shortName: "Yerton L.M.",
  slogan: "Las llaves de tu próximo hogar",
  description:
    "Inmobiliaria en Quibdó, Chocó. Casas, apartamentos y lotes en venta y arriendo, con asesoría cercana y transparente.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yerton-inmobiliaria.vercel.app",

  // Contacto (formato internacional, sin "+" ni espacios para wa.me)
  whatsapp: "573046464484",
  whatsappDisplay: "+57 304 646 4484",
  email: "", // Déjalo vacío para ocultarlo. Ej: "contacto@tudominio.com"
  address: "Quibdó, Chocó, Colombia", // TODO: reemplazar por la dirección real de la oficina
  schedule: "Lunes a sábado · 8:00 a. m. – 6:00 p. m.", // TODO: confirmar horario real

  social: {
    facebook: "https://www.facebook.com/profile.php?id=61574419469411",
    tiktok: "https://www.tiktok.com/@yerton.l.m",
  },

  // Centro del mapa de Quibdó (OpenStreetMap)
  mapCenter: { lat: 5.6947, lng: -76.6583 },

  // Estadísticas de la portada (demo: reemplazar por cifras reales)
  stats: [
    { value: "+120", label: "Familias atendidas" },
    { value: "+60", label: "Inmuebles gestionados" },
    { value: "100%", label: "Acompañamiento legal" },
    { value: "24 h", label: "Respuesta por WhatsApp" },
  ],
};

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/propiedades", label: "Propiedades" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/publica-tu-inmueble", label: "Publica tu inmueble" },
  { href: "/contacto", label: "Contacto" },
];
