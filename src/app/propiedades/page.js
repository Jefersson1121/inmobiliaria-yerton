import PageHero from "@/components/ui/PageHero";
import PropertyCard from "@/components/properties/PropertyCard";
import PropertyFilters from "@/components/properties/PropertyFilters";
import { filterProperties, getNeighborhoods } from "@/lib/properties";

export const metadata = {
  title: "Propiedades en venta y arriendo en Quibdó",
  description:
    "Explora casas, apartamentos y lotes en venta y arriendo en Quibdó, Chocó. Filtra por barrio, precio y habitaciones.",
};

export default async function PropertiesPage({ searchParams }) {
  const params = await searchParams;
  const results = filterProperties(params);
  const hasFilters = Object.values(params).some(Boolean);

  return (
    <>
      <PageHero
        title="Propiedades"
        text="Encuentra casas, apartamentos y lotes en venta y arriendo en Quibdó."
        crumbs={[{ label: "Propiedades" }]}
      />
      <section className="section">
        <div className="container listing">
          <PropertyFilters values={params} neighborhoods={getNeighborhoods()} />

          <div>
            <div className="listing__top">
              <p className="listing__count">
                <strong>{results.length}</strong> {results.length === 1 ? "inmueble encontrado" : "inmuebles encontrados"}
              </p>
            </div>

            {results.length > 0 ? (
              <div className="grid grid--3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
                {results.map((p, i) => (
                  <PropertyCard key={p.slug} property={p} priority={i < 3} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <h2>No encontramos resultados</h2>
                <p>
                  {hasFilters
                    ? "Prueba quitando algún filtro o escríbenos: podemos buscar el inmueble por ti."
                    : "Pronto publicaremos nuevas propiedades."}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
