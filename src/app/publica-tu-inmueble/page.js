import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icons";
import LeadForm from "@/components/forms/LeadForm";

export const metadata = {
  title: "Publica tu inmueble",
  description: "Vende o arrienda tu casa, apartamento o lote en Quibdó con Yerton L.M. Nos encargamos de todo.",
};

const benefits = [
  "Fotografía y promoción de tu inmueble",
  "Filtro de interesados serios",
  "Acompañamiento en visitas y negociación",
  "Contratos y trámites con respaldo legal",
  "Cero costos hasta cerrar el negocio*",
];

export default function PublishPage() {
  return (
    <>
      <PageHero
        title="Publica tu inmueble"
        text="Cuéntanos sobre tu propiedad y nosotros nos encargamos del resto."
        crumbs={[{ label: "Publica tu inmueble" }]}
      />
      <section className="section">
        <div className="container contact">
          <div>
            <span className="eyebrow">Para propietarios</span>
            <h2>Vende o arrienda sin complicaciones</h2>
            <p className="lead">Llena el formulario y un asesor te contactará para valorar tu inmueble.</p>
            <ul className="check-list" style={{ gridTemplateColumns: "1fr" }}>
              {benefits.map((b) => <li key={b}><Icon name="check" size={18} /> {b}</li>)}
            </ul>
            {/* TODO: confirmar condiciones comerciales reales antes de publicar */}
            <p className="card__note" style={{ marginTop: 16 }}>*Condiciones sujetas a acuerdo comercial.</p>
          </div>
          <LeadForm variant="publicar" />
        </div>
      </section>
    </>
  );
}
