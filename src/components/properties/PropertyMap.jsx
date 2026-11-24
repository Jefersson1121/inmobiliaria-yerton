/**
 * Mapa con OpenStreetMap (gratis, sin API key ni librerías).
 * Las coordenadas de la demo son aproximadas.
 */
export default function PropertyMap({ coords, title }) {
  const d = 0.006;
  const bbox = [coords.lng - d, coords.lat - d, coords.lng + d, coords.lat + d].join("%2C");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${coords.lat}%2C${coords.lng}`;
  return (
    <iframe
      className="map-frame"
      title={`Mapa de ubicación: ${title}`}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}
