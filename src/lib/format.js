/** Utilidades de formato (moneda, etiquetas). */

const cop = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export const formatCOP = (value) => cop.format(value);

export function formatPrice(property) {
  const base = formatCOP(property.price);
  if (property.operation === "arriendo") {
    return {
      main: base,
      suffix: "/mes",
      note: property.includesUtilities ? "Servicios incluidos" : "Servicios no incluidos",
    };
  }
  return { main: base, suffix: "", note: "" };
}

export const operationLabel = { venta: "En venta", arriendo: "En arriendo" };

export const statusLabel = {
  disponible: "Disponible",
  arrendado: "Arrendado",
  vendido: "Vendido",
};

export const typeLabel = {
  apartamento: "Apartamento",
  casa: "Casa",
  lote: "Lote",
  local: "Local",
};
