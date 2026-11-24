import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icons";
import LeadForm from "@/components/forms/LeadForm";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Contacto",
  description: "Escríbenos por WhatsApp o déjanos tu mensaje. Inmobiliaria Yerton L.M., Quibdó, Chocó.",
};

export default function ContactPage() {
  const { lat, lng } = site.mapCenter;
  const d = 0.012;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - d}%2C${lat - d}%2C${lng + d}%2C${lat + d}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <>
      <PageHero title="Contacto" text="Estamos para ayudarte. Escríbenos y te responderemos pronto." crumbs={[{ label: "Contacto" }]} />
      <section className="section">
        <div className="container contact">
          <div>
            <ul className="contact__list">
              <li>
                <span className="contact__icon"><Icon name="whatsapp" /></span>
                <div>
                  <strong>WhatsApp</strong>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{site.whatsappDisplay}</a>
                </div>
              </li>
              {site.email && (
                <li>
                  <span className="contact__icon"><Icon name="mail" /></span>
                  <div><strong>Correo</strong><a href={`mailto:${site.email}`}>{site.email}</a></div>
                </li>
              )}
              <li>
                <span className="contact__icon"><Icon name="pin" /></span>
                <div><strong>Ubicación</strong>{site.address}</div>
              </li>
              <li>
                <span className="contact__icon"><Icon name="clock" /></span>
                <div><strong>Horario</strong>{site.schedule}</div>
              </li>
            </ul>

            <div className="social" style={{ marginBottom: 24 }}>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ borderColor: "var(--line)", color: "var(--navy-700)" }}>
                <Icon name="facebook" />
              </a>
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ borderColor: "var(--line)", color: "var(--navy-700)" }}>
                <Icon name="tiktok" />
              </a>
            </div>

            <iframe className="map-frame" title="Mapa de Quibdó" src={mapSrc} loading="lazy" referrerPolicy="no-referrer" />
          </div>

          <LeadForm variant="contacto" />
        </div>
      </section>
    </>
  );
}
