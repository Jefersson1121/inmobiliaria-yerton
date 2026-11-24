import { site } from "@/data/site";

/** Genera un enlace de WhatsApp con el mensaje ya escrito. */
export function whatsappLink(message = "Hola, quisiera más información sobre sus inmuebles.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function propertyMessage(property) {
  const accion = property.operation === "arriendo" ? "arrendar" : "comprar";
  return `Hola, me interesa ${accion} "${property.title}" (${property.neighborhood}, ${property.city}). ¿Sigue disponible?`;
}
