import Link from "next/link";

export const metadata = { title: "Página no encontrada" };

export default function NotFound() {
  return (
    <section className="container center-page">
      <div className="big">404</div>
      <h1 style={{ fontSize: "2rem" }}>Esta página no existe</h1>
      <p className="lead">Puede que el inmueble ya no esté disponible o el enlace haya cambiado.</p>
      <Link href="/propiedades" className="btn btn--navy">Ver propiedades</Link>
    </section>
  );
}
