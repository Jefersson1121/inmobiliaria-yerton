import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Icon from "@/components/ui/Icons";
import { site } from "@/data/site";

export const metadata = {
  title: "Nosotros",
  description: "Conoce a Inmobiliaria Yerton L.M.: asesoría cercana, transparente y con respaldo legal en Quibdó, Chocó.",
};

const values = [
  { icon: "shield", title: "Transparencia", text: "Información clara sobre precios, documentos y condiciones. Sin letra menuda." },
  { icon: "key", title: "Compromiso", text: "Tu tranquilidad es nuestra prioridad: te acompañamos hasta la entrega de llaves." },
  { icon: "home", title: "Conocimiento local", text: "Conocemos los barrios, los precios y las oportunidades reales de Quibdó." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="Nosotros" text="Una inmobiliaria hecha para las familias del Chocó." crumbs={[{ label: "Nosotros" }]} />

      <section className="section">
        <div className="container about">
          <Image src="/images/brand/logo.png" alt={`Logo de ${site.name}`} width={360} height={364} className="about__logo" />
          <div>
            <span className="eyebrow">Nuestra historia</span>
            <h2>Abrimos puertas, entregamos llaves</h2>
            {/* TODO: reemplazar por la historia real de la inmobiliaria */}
            <p>
              Inmobiliaria Yerton L.M. nace con una meta sencilla: que comprar, vender o arrendar un inmueble en Quibdó sea un proceso confiable, claro y humano.
            </p>
            <p>
              Trabajamos de la mano de propietarios y familias, cuidando cada detalle legal y comercial, y priorizando siempre una relación honesta y a largo plazo.
            </p>
            <p>
              Hoy atendemos Quibdó y nos preparamos para llegar a <strong>Medellín</strong>, llevando el mismo servicio cercano a nuevos clientes.
            </p>
            <Link href="/contacto" className="btn btn--gold">Conversemos <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHead center eyebrow="Lo que nos define" title="Nuestros valores" />
          <div className="values">
            {values.map((v) => (
              <div className="service" key={v.title}>
                <div className="service__icon"><Icon name={v.icon} size={26} /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
