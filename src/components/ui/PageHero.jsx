import Link from "next/link";

/** Encabezado azul que usan las páginas internas. */
export default function PageHero({ title, text, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              {" / "}
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
