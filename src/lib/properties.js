import { properties } from "@/data/properties";

export const getAllProperties = () => properties;

export const getPropertyBySlug = (slug) => properties.find((p) => p.slug === slug);

export const getFeaturedProperties = () => properties.filter((p) => p.featured);

export const getNeighborhoods = () =>
  [...new Set(properties.map((p) => p.neighborhood))].sort((a, b) => a.localeCompare(b, "es"));

export const getRelatedProperties = (property, limit = 3) =>
  properties
    .filter((p) => p.slug !== property.slug && (p.operation === property.operation || p.neighborhood === property.neighborhood))
    .slice(0, limit);

/**
 * Filtra propiedades según parámetros de URL.
 * Ej: /propiedades?operacion=arriendo&tipo=casa&barrio=Medrano&max=1000000&orden=precio-asc
 */
export function filterProperties(params = {}) {
  const { operacion, tipo, barrio, min, max, habitaciones, orden, q } = params;
  let result = [...properties];

  if (operacion) result = result.filter((p) => p.operation === operacion);
  if (tipo) result = result.filter((p) => p.type === tipo);
  if (barrio) result = result.filter((p) => p.neighborhood === barrio);
  if (min) result = result.filter((p) => p.price >= Number(min));
  if (max) result = result.filter((p) => p.price <= Number(max));
  if (habitaciones) result = result.filter((p) => (p.bedrooms ?? 0) >= Number(habitaciones));
  if (q) {
    const term = q.toLowerCase();
    result = result.filter((p) =>
      [p.title, p.neighborhood, p.description].join(" ").toLowerCase().includes(term)
    );
  }

  switch (orden) {
    case "precio-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "precio-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    default:
      // Disponibles primero, luego nuevos
      result.sort(
        (a, b) =>
          (a.status === "disponible" ? 0 : 1) - (b.status === "disponible" ? 0 : 1) ||
          Number(b.isNew) - Number(a.isNew)
      );
  }
  return result;
}
