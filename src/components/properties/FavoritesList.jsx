"use client";

import Link from "next/link";
import PropertyCard from "./PropertyCard";
import { useFavorites } from "@/components/layout/FavoritesProvider";

/** Muestra las propiedades guardadas por el visitante. */
export default function FavoritesList({ properties }) {
  const { favorites } = useFavorites();
  const saved = properties.filter((p) => favorites.includes(p.slug));

  if (saved.length === 0) {
    return (
      <div className="empty">
        <h2>Aún no tienes favoritos</h2>
        <p>Toca el corazón en cualquier propiedad para guardarla aquí.</p>
        <Link href="/propiedades" className="btn btn--navy">Ver propiedades</Link>
      </div>
    );
  }

  return (
    <div className="grid grid--3">
      {saved.map((p) => <PropertyCard key={p.slug} property={p} />)}
    </div>
  );
}
