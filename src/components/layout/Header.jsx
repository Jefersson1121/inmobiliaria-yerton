"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icons";
import { useFavorites } from "./FavoritesProvider";
import { navigation, site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { favorites } = useFavorites();

  // Cierra el menú móvil al cambiar de página
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} - Inicio`}>
          <Image src="/images/brand/logo.png" alt="" width={52} height={52} className="brand__logo" priority />
          <span className="brand__text">
            <span className="brand__name">Yerton L.M.</span>
            <span className="brand__tag">Inmobiliaria</span>
          </span>
        </Link>

        <nav id="menu-principal" className={`nav ${open ? "nav--open" : ""}`} aria-label="Principal">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav__link"
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/favoritos" className="fav-link" aria-label={`Favoritos (${favorites.length})`}>
            <Icon name="heart" />
            {favorites.length > 0 && <span className="fav-link__count">{favorites.length}</span>}
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--gold btn--sm">
            <Icon name="whatsapp" size={18} /> WhatsApp
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
