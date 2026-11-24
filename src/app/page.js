import Image from "next/image";
import Link from "next/link";
import HeroSearch from "@/components/home/HeroSearch";
import PropertyCard from "@/components/properties/PropertyCard";
import SectionHead from "@/components/ui/SectionHead";
import Icon from "@/components/ui/Icons";
import { getFeaturedProperties, getNeighborhoods } from "@/lib/properties";
import { whatsappLink } from "@/lib/whatsapp";
import { services, process } from "@/data/services";
import { site } from "@/data/site";

export default function HomePage() {
  const featured = getFeaturedProperties();
  const neighborhoods = getNeighborhoods();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <Image src="/images/demo/calle-fachadas.jpg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="container hero__inner">
          <div>
            <span className="eyebrow" style={{ color: "var(--gold-300)" }}>Inmobiliaria en Quibdó, Chocó</span>
            <h1>
              Encuentra el hogar que <em>siempre soñaste</em>
            </h1>
            <p className="lead">
              Casas, apartamentos y lotes en venta y arriendo, con asesoría cercana, transparente y respaldo legal en cada paso.
            </p>
            <div className="hero__cta">
              <Link href="/propiedades" className="btn btn--gold">Ver propiedades <Icon name="arrow" size={18} /></Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--outline-light">
                <Icon name="whatsapp" size={18} /> Hablar con un asesor
              </a>
            </div>
          </div>
          <Image src="/images/brand/logo.png" alt={`Logo de ${site.name}`} width={340} height={344} className="hero__logo" priority />
        </div>
      </section>

      {/* BUSCADOR */}
      <div className="search-wrap">
        <div className="container">
          <HeroSearch neighborhoods={neighborhoods} />
        </div>
      </div>

      {/* DESTACADAS */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Propiedades destacadas"
            title="Inmuebles seleccionados para ti"
            text="Opciones disponibles hoy en Quibdó, listas para visitar."
          />
          <div className="grid grid--3">
            {featured.slice(0, 6).map((p, i) => (
              <PropertyCard key={p.slug} property={p} priority={i < 3} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/propiedades" className="btn btn--navy">Ver todo el catálogo <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="section section--soft">
        <div className="container">
          <SectionHead
            center
            eyebrow="Nuestros servicios"
            title="Todo lo que necesitas en un solo lugar"
            text="Desde encontrar tu inmueble hasta cerrar el negocio de forma segura."
          />
          <div className="grid grid--3">
            {services.slice(0, 6).map((s) => (
              <div className="service" key={s.title}>
                <div className="service__icon"><Icon name={s.icon} size={26} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section className="section section--navy">
        <div className="container stats">
          {site.stats.map((s) => (
            <div key={s.label}>
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Cómo trabajamos" title="Un proceso simple y claro" />
          <div className="steps">
            {process.map((s) => (
              <div className="step" key={s.step}>
                <div className="step__num">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICA / MEDELLÍN */}
      <section className="section section--soft">
        <div className="container grid grid--2">
          <div className="panel" style={{ padding: 34 }}>
            <span className="eyebrow">Propietarios</span>
            <h2 style={{ fontSize: "1.8rem" }}>¿Tienes un inmueble para vender o arrendar?</h2>
            <p className="lead">Nosotros nos encargamos de promocionarlo, filtrar interesados y cerrar el negocio.</p>
            <Link href="/publica-tu-inmueble" className="btn btn--gold">Publica tu inmueble <Icon name="arrow" size={18} /></Link>
          </div>
          <div className="soon" style={{ gridTemplateColumns: "1fr", padding: 34 }}>
            <div>
              <span className="soon__pill">Próximamente</span>
              <h2 style={{ fontSize: "1.8rem" }}>Llegamos a Medellín</h2>
              <p>Estamos ampliando nuestro portafolio. Entérate primero de las oportunidades.</p>
              <Link href="/medellin" className="btn btn--outline-light">Quiero enterarme <Icon name="arrow" size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section section--navy cta-band">
        <div className="container">
          <h2>¿Listo para dar el siguiente paso?</h2>
          <p>Escríbenos y un asesor te responderá en menos de 24 horas.</p>
          <div className="hero__cta">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
              <Icon name="whatsapp" size={18} /> Escribir por WhatsApp
            </a>
            <Link href="/contacto" className="btn btn--outline-light">Ir a contacto</Link>
          </div>
        </div>
      </section>
    </>
  );
}
