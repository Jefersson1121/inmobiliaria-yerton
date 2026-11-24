"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icons";
import { site } from "@/data/site";

/**
 * Formulario reutilizable (Contacto y "Publica tu inmueble").
 *
 *  - Con NEXT_PUBLIC_WEB3FORMS_KEY: envía el correo con Web3Forms (gratis).
 *  - Sin clave: abre WhatsApp con el mensaje ya escrito. Así NUNCA se pierde un cliente.
 *
 * Props:
 *  - variant: "contacto" | "publicar"
 */
export default function LeadForm({ variant = "contacto" }) {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const isPublish = variant === "publicar";
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot anti-spam: si un bot llena este campo, se descarta.
    if (data.empresa_web) return;

    const lines = isPublish
      ? [
          "Quiero publicar mi inmueble con Yerton L.M.",
          `Nombre: ${data.nombre}`,
          `Teléfono: ${data.telefono}`,
          `Operación: ${data.operacion}`,
          `Tipo: ${data.tipo}`,
          `Barrio: ${data.barrio}`,
          `Precio esperado: ${data.precio || "No indicado"}`,
          `Detalles: ${data.mensaje || "-"}`,
        ]
      : [
          "Hola, les escribo desde la página web.",
          `Nombre: ${data.nombre}`,
          `Teléfono: ${data.telefono}`,
          `Mensaje: ${data.mensaje}`,
        ];
    const text = lines.join("\n");

    if (!key) {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      setStatus({ type: "ok", message: "Te llevamos a WhatsApp para enviar tu mensaje. ¡Gracias!" });
      form.reset();
      return;
    }

    setStatus({ type: "loading", message: "Enviando…" });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: isPublish ? "Nuevo inmueble para publicar" : "Nuevo mensaje desde la web",
          from_name: "Web Yerton L.M.",
          ...data,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setStatus({ type: "ok", message: "¡Recibimos tu mensaje! Te contactaremos muy pronto." });
      form.reset();
    } catch {
      setStatus({
        type: "err",
        message: "No pudimos enviar el formulario. Escríbenos directamente por WhatsApp.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="panel" style={{ display: "grid", gap: 16 }}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor={`${variant}-nombre`}>Nombre completo *</label>
          <input id={`${variant}-nombre`} name="nombre" required className="input" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor={`${variant}-tel`}>Teléfono / WhatsApp *</label>
          <input id={`${variant}-tel`} name="telefono" type="tel" required className="input" autoComplete="tel" placeholder="300 000 0000" />
        </div>
      </div>

      {isPublish && (
        <>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="pub-operacion">¿Qué deseas hacer? *</label>
              <select id="pub-operacion" name="operacion" required className="select">
                <option value="Vender">Vender</option>
                <option value="Arrendar">Arrendar</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="pub-tipo">Tipo de inmueble *</label>
              <select id="pub-tipo" name="tipo" required className="select">
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Lote</option>
                <option>Local</option>
              </select>
            </div>
          </div>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="pub-barrio">Barrio / zona *</label>
              <input id="pub-barrio" name="barrio" required className="input" />
            </div>
            <div className="field">
              <label htmlFor="pub-precio">Precio esperado (COP)</label>
              <input id="pub-precio" name="precio" className="input" inputMode="numeric" placeholder="Ej: 900000" />
            </div>
          </div>
        </>
      )}

      <div className="field">
        <label htmlFor={`${variant}-msg`}>{isPublish ? "Cuéntanos más del inmueble" : "Mensaje *"}</label>
        <textarea id={`${variant}-msg`} name="mensaje" required={!isPublish} className="textarea" />
      </div>

      {/* Honeypot: invisible para personas */}
      <input type="text" name="empresa_web" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />

      <button type="submit" className="btn btn--gold btn--block" disabled={status.type === "loading"}>
        {status.type === "loading" ? "Enviando…" : isPublish ? "Quiero publicar mi inmueble" : "Enviar mensaje"}
        <Icon name="arrow" size={18} />
      </button>

      {status.type !== "idle" && status.type !== "loading" && (
        <div className={`form-msg form-msg--${status.type}`} role="status">{status.message}</div>
      )}
    </form>
  );
}
