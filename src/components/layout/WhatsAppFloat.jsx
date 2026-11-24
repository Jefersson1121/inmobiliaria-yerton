import Icon from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/whatsapp";

/** Botón flotante de WhatsApp visible en todas las páginas. */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hola, vi su página web y quisiera más información.")}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Escribir por WhatsApp"
    >
      <Icon name="whatsapp" size={24} />
      <span>Escríbenos</span>
    </a>
  );
}
