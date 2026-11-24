"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

/**
 * Favoritos guardados en el navegador del visitante (localStorage).
 * No requiere cuenta ni base de datos.
 */
const FavoritesContext = createContext({ favorites: [], toggle: () => {}, isFavorite: () => false });
const KEY = "yerton:favoritos";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
      if (Array.isArray(saved)) setFavorites(saved);
    } catch {
      /* localStorage no disponible: se ignora */
    }
  }, []);

  const toggle = useCallback((slug) => {
    setFavorites((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ favorites, toggle, isFavorite: (slug) => favorites.includes(slug) }),
    [favorites, toggle]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export const useFavorites = () => useContext(FavoritesContext);
