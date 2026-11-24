"use client";

import Icon from "@/components/ui/Icons";
import { useFavorites } from "@/components/layout/FavoritesProvider";

export default function FavoriteButton({ slug, className = "fav-btn" }) {
  const { isFavorite, toggle } = useFavorites();
  const active = isFavorite(slug);
  return (
    <button
      type="button"
      className={className}
      aria-pressed={active}
      aria-label={active ? "Quitar de favoritos" : "Guardar en favoritos"}
      onClick={() => toggle(slug)}
    >
      <Icon name="heart" />
    </button>
  );
}
