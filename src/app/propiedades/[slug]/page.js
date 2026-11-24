import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icons";
import Gallery from "@/components/properties/Gallery";
import PropertyCard from "@/components/properties/PropertyCard";
import PropertyMap from "@/components/properties/PropertyMap";
import MortgageCalculator from "@/components/properties/MortgageCalculator";
import FavoriteButton from "@/components/properties/FavoriteButton";
import { getAllProperties, getPropertyBySlug, getRelatedProperties } from "@/lib/properties";
import { formatPrice, operationLabel, statusLabel, typeLabel } from "@/lib/format";
import { propertyMessage, whatsappLink } from "@/lib/whatsapp";
import { site } from "@/data/site";

export function generateStaticParams() {
  return getAllProperties().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPropertyBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.title} - ${p.neighborhood}`,
    description: p.description.slice(0, 155),
    openGraph: { images: [p.images[0]] },
  };
}

export default async function PropertyPage({ params }) {
  const { slug } = await params;
  const p = getPropertyBySlug(slug);
  if (!p) notFound();

  const price = formatPrice(p);
  const related = getRelatedProperties(p);
  const shareUrl = `${site.url}/propiedades/${p.slug}`;

  const facts = [
    p.bedrooms != null && { icon: "bed", value: p.bedrooms, label: "Habitaciones" },
    p.bathrooms != null && { icon: "bath", value: p.bathrooms, label: "Baños" },
    { icon: "area", value: `${p.area} m²`, label: "Área" },
    p.parking && { icon: "car", value: "Sí", label: "Parqueadero" },
  ].filter(Boolean);

  // Datos estructurados para Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: p.title,
    description: p.description,
    url: shareUrl,
    image: p.images.map((i) => `${site.url}${i}`),
    offers: { "@type": "Offer", price: p.price, priceCurrency: "COP" },
    address: { "@type": "PostalAddress", addressLocality: p.city, addressRegion: "Chocó", addressCountry: "CO" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        title={p.title}
        crumbs={[{ label: "Propiedades", href: "/propiedades" }, { label: p.neighborhood }]}
      />

      <section className="section">
        <div className="container detail">
          <div>
            {p.demo && (
              <div className="demo-note">
                <strong>Inmueble de demostración.</strong> Los datos y precios son de ejemplo y se reemplazarán por los reales.
              </div>
            )}

            <Gallery images={p.images} title={p.title} />

            <div className="detail__head" style={{ marginTop: 26 }}>
              <div>
                <div className="detail__price">
                  {price.main} <small>{price.suffix}</small>
                </div>
                {price.note && <div className="card__note" style={{ marginTop: 4 }}>{price.note}</div>}
                <div className="card__loc" style={{ marginTop: 8 }}>
                  <Icon name="pin" size={17} /> {p.neighborhood}, {p.city}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <span className={`badge badge--${p.operation}`}>{operationLabel[p.operation]}</span>
                <span className="badge">{typeLabel[p.type]}</span>
                {p.status !== "disponible" && <span className="badge badge--off">{statusLabel[p.status]}</span>}
                <FavoriteButton slug={p.slug} className="fav-link" />
              </div>
            </div>

            <div className="facts">
              {facts.map((f) => (
                <div className="fact" key={f.label}>
                  <Icon name={f.icon} size={26} />
                  <strong>{f.value}</strong>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <div className="detail__block">
              <h2>Descripción</h2>
              <p>{p.description}</p>
            </div>

            <div className="detail__block">
              <h2>Características</h2>
              <ul className="check-list">
                {p.features.map((f) => (
                  <li key={f}><Icon name="check" size={18} /> {f}</li>
                ))}
              </ul>
            </div>

            <div className="detail__block">
              <h2>Ubicación</h2>
              <PropertyMap coords={p.coords} title={p.title} />
              <p className="card__note" style={{ marginTop: 8 }}>
                Ubicación aproximada. La dirección exacta se comparte al agendar la visita.
              </p>
            </div>
          </div>

          <aside className="aside">
            <div className="panel">
              <h3>¿Te interesa este inmueble?</h3>
              <a
                href={whatsappLink(propertyMessage(p))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--block"
              >
                <Icon name="whatsapp" size={18} /> Consultar por WhatsApp
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Mira este inmueble de Yerton L.M.: ${p.title} ${shareUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--block"
              >
                Compartir por WhatsApp
              </a>
            </div>

            {p.operation === "venta" && (
              <div className="panel">
                <h3>Simula tu crédito</h3>
                <MortgageCalculator price={p.price} />
              </div>
            )}
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--soft">
          <div className="container">
            <h2>También te puede interesar</h2>
            <div className="grid grid--3">
              {related.map((r) => <PropertyCard key={r.slug} property={r} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
