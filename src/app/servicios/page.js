import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Icon from "@/components/ui/Icons";
import { services, process } from "@/data/services";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Servicios inmobiliarios",
  description: "Venta, arriendo, avalúos, asesoría legal y de crédito, y administración de inmuebles en Quibdó.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Servicios"
        text="Te acompañamos en cada etapa de tu negocio inmobiliario."
        crumbs={[{ label: "Servicios" }]}
      />
      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {services.map((s) => (
              <div className="service" key={s.title}>
                <div className="service__icon"><Icon name={s.icon} size={26} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHead eyebrow="Cómo trabajamos" title="Nuestro proceso" />
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

      <section className="section section--navy cta-band">
        <div className="container">
          <h2>Cuéntanos qué necesitas</h2>
          <p>Una conversación de cinco minutos puede ahorrarte semanas de búsqueda.</p>
          <div className="hero__cta">
            <a href={whatsappLink("Hola, quisiera asesoría sobre sus servicios.")} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
              <Icon name="whatsapp" size={18} /> Hablar con un asesor
            </a>
            <Link href="/propiedades" className="btn btn--outline-light">Ver propiedades</Link>
          </div>
        </div>
      </section>
    </>
  );
}
