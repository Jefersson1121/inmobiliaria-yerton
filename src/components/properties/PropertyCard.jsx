import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icons";
import FavoriteButton from "./FavoriteButton";
import { formatPrice, operationLabel, statusLabel } from "@/lib/format";

/** Tarjeta de propiedad para listados y portada. */
export default function PropertyCard({ property: p, priority = false }) {
  const price = formatPrice(p);
  const unavailable = p.status !== "disponible";

  return (
    <article className="card">
      <div className="card__media">
        <Image
          src={p.images[0]}
          alt={`${p.title} en ${p.neighborhood}, ${p.city}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
          priority={priority}
        />
        <div className="card__badges">
          <span className={`badge badge--${p.operation}`}>{operationLabel[p.operation]}</span>
          {p.isNew && !unavailable && <span className="badge badge--new">Nuevo</span>}
          {unavailable && <span className="badge badge--off">{statusLabel[p.status]}</span>}
          {p.demo && <span className="badge badge--demo">Demo</span>}
        </div>
        <FavoriteButton slug={p.slug} />
      </div>

      <div className="card__body">
        <div className="card__price">
          {price.main} <small>{price.suffix}</small>
        </div>
        {price.note && <div className="card__note">{price.note}</div>}
        <h3 className="card__title">
          <Link href={`/propiedades/${p.slug}`} className="card__link">
            {p.title}
          </Link>
        </h3>
        <div className="card__loc">
          <Icon name="pin" size={16} /> {p.neighborhood}, {p.city}
        </div>
        <div className="card__meta">
          {p.bedrooms != null && (
            <span><Icon name="bed" size={17} /> {p.bedrooms} hab.</span>
          )}
          {p.bathrooms != null && (
            <span><Icon name="bath" size={17} /> {p.bathrooms} baño{p.bathrooms > 1 ? "s" : ""}</span>
          )}
          <span><Icon name="area" size={17} /> {p.area} m²</span>
        </div>
      </div>
    </article>
  );
}
