import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Próximamente en Medellín",
  description: "Yerton L.M. llega a Medellín. Déjanos tus datos y entérate primero de las oportunidades.",
};

export default function MedellinPage() {
  return (
    <>
      <PageHero
        title="Próximamente en Medellín"
        text="Estamos ampliando nuestro portafolio a la ciudad de la eterna primavera."
        crumbs={[{ label: "Medellín" }]}
      />
      <section className="section">
        <div className="container">
          <div className="soon">
            <div>
              <span className="soon__pill">Muy pronto</span>
              <h2>Las mejores oportunidades, ahora también en Medellín</h2>
              <p>
                Queremos que quienes vivan en Quibdó o Medellín puedan comprar, vender o arrendar con el mismo servicio de confianza que nos caracteriza.
              </p>
              <a
                href={whatsappLink("Hola, quiero enterarme cuando lleguen a Medellín.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold"
              >
                <Icon name="whatsapp" size={18} /> Avísenme cuando lleguen
              </a>
            </div>
            <div className="soon__card">
              <h3>¿Qué podrás encontrar?</h3>
              <ul className="check-list" style={{ gridTemplateColumns: "1fr", color: "#fff" }}>
                <li><Icon name="check" size={18} /> Apartamentos en venta y arriendo</li>
                <li><Icon name="check" size={18} /> Casas y lotes</li>
                <li><Icon name="check" size={18} /> Asesoría para inversionistas</li>
                <li><Icon name="check" size={18} /> Acompañamiento a quienes se mudan desde el Chocó</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
