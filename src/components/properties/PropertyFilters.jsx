import Link from "next/link";
import { operations, propertyTypes } from "@/data/properties";

/**
 * Filtros del catálogo. Es un formulario GET normal: al enviar, la URL cambia
 * (/propiedades?operacion=venta&tipo=casa...) y la página se filtra en el servidor.
 * Ventaja: funciona sin JavaScript y las búsquedas se pueden compartir.
 */
export default function PropertyFilters({ values, neighborhoods }) {
  return (
    <form className="filters" action="/propiedades" method="get" aria-label="Filtros de búsqueda">
      <h2>Filtrar</h2>

      <div className="field">
        <label htmlFor="f-operacion">Operación</label>
        <select id="f-operacion" name="operacion" className="select" defaultValue={values.operacion || ""}>
          <option value="">Venta y arriendo</option>
          {operations.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-tipo">Tipo de inmueble</label>
        <select id="f-tipo" name="tipo" className="select" defaultValue={values.tipo || ""}>
          <option value="">Todos</option>
          {propertyTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-barrio">Barrio / zona</label>
        <select id="f-barrio" name="barrio" className="select" defaultValue={values.barrio || ""}>
          <option value="">Todos</option>
          {neighborhoods.map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-hab">Habitaciones (mínimo)</label>
        <select id="f-hab" name="habitaciones" className="select" defaultValue={values.habitaciones || ""}>
          <option value="">Cualquiera</option>
          {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}+</option>)}
        </select>
      </div>

      <div className="form-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="field">
          <label htmlFor="f-min">Precio mín.</label>
          <input id="f-min" name="min" type="number" min="0" step="50000" className="input" placeholder="0" defaultValue={values.min || ""} />
        </div>
        <div className="field">
          <label htmlFor="f-max">Precio máx.</label>
          <input id="f-max" name="max" type="number" min="0" step="50000" className="input" placeholder="Sin límite" defaultValue={values.max || ""} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-orden">Ordenar por</label>
        <select id="f-orden" name="orden" className="select" defaultValue={values.orden || ""}>
          <option value="">Destacados</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
        </select>
      </div>

      <button type="submit" className="btn btn--navy btn--block">Aplicar filtros</button>
      <Link href="/propiedades" className="btn btn--outline btn--block">Limpiar</Link>
    </form>
  );
}
