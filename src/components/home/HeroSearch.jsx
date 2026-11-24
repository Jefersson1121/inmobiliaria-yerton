"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icons";
import { propertyTypes } from "@/data/properties";

/** Buscador de la portada. Envía al catálogo con los filtros en la URL. */
export default function HeroSearch({ neighborhoods }) {
  const [operacion, setOperacion] = useState("arriendo");

  return (
    <form className="search" action="/propiedades" method="get" aria-label="Buscar inmuebles">
      <div className="search__tabs" role="group" aria-label="Operación">
        {[
          { v: "arriendo", l: "Arrendar" },
          { v: "venta", l: "Comprar" },
        ].map((t) => (
          <button
            key={t.v}
            type="button"
            className="search__tab"
            aria-pressed={operacion === t.v}
            onClick={() => setOperacion(t.v)}
          >
            {t.l}
          </button>
        ))}
      </div>
      <input type="hidden" name="operacion" value={operacion} />

      <div className="search__grid">
        <div className="field">
          <label htmlFor="s-tipo">Tipo</label>
          <select id="s-tipo" name="tipo" className="select" defaultValue="">
            <option value="">Todos</option>
            {propertyTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="s-barrio">Barrio / zona</label>
          <select id="s-barrio" name="barrio" className="select" defaultValue="">
            <option value="">Todos</option>
            {neighborhoods.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="s-hab">Habitaciones</label>
          <select id="s-hab" name="habitaciones" className="select" defaultValue="">
            <option value="">Cualquiera</option>
            {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}+</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="s-max">Precio máximo (COP)</label>
          <input id="s-max" name="max" type="number" min="0" step="50000" className="input" placeholder="Sin límite" />
        </div>
        <button type="submit" className="btn btn--navy">
          <Icon name="arrow" size={18} /> Buscar
        </button>
      </div>
    </form>
  );
}
