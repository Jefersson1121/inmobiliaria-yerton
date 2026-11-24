import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icons";
import { navigation, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/images/brand/logo.png" alt={site.name} width={72} height={72} style={{ borderRadius: "50%", background: "#fff", marginBottom: 14 }} />
          <p>{site.description}</p>
          <div className="social">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Icon name="facebook" />
            </a>
            <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <Icon name="tiktok" />
            </a>
          </div>
        </div>

        <div>
          <h4>Navegación</h4>
          <ul>
            {navigation.map((n) => (
              <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Inmuebles</h4>
          <ul>
            <li><Link href="/propiedades?operacion=venta">En venta</Link></li>
            <li><Link href="/propiedades?operacion=arriendo">En arriendo</Link></li>
            <li><Link href="/propiedades?tipo=lote">Lotes</Link></li>
            <li><Link href="/medellin">Próximamente en Medellín</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contacto</h4>
          <ul>
            <li>{site.whatsappDisplay}</li>
            {site.email && <li>{site.email}</li>}
            <li>{site.address}</li>
            <li>{site.schedule}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} {site.name} Todos los derechos reservados.</span>
        <span>Quibdó, Chocó · Colombia</span>
      </div>
    </footer>
  );
}
