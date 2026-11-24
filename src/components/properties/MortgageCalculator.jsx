"use client";

import { useMemo, useState } from "react";
import { formatCOP } from "@/lib/format";

/**
 * Calculadora de cuota mensual de crédito hipotecario (sistema de cuota fija).
 * Es una estimación: la tasa real la define cada banco.
 */
export default function MortgageCalculator({ price }) {
  const [downPct, setDownPct] = useState(30);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(12); // % efectivo anual aprox.

  const { loan, monthly } = useMemo(() => {
    const loan = price * (1 - downPct / 100);
    const monthlyRate = Math.pow(1 + rate / 100, 1 / 12) - 1;
    const n = years * 12;
    const monthly =
      monthlyRate === 0 ? loan / n : (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    return { loan, monthly };
  }, [price, downPct, years, rate]);

  return (
    <div className="calc">
      <div className="field">
        <label htmlFor="c-down">Cuota inicial: {downPct}% ({formatCOP(price * (downPct / 100))})</label>
        <input id="c-down" type="range" min="10" max="70" step="5" value={downPct} onChange={(e) => setDownPct(+e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="c-years">Plazo: {years} años</label>
        <input id="c-years" type="range" min="5" max="30" step="1" value={years} onChange={(e) => setYears(+e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="c-rate">Tasa estimada: {rate}% E.A.</label>
        <input id="c-rate" type="range" min="6" max="20" step="0.5" value={rate} onChange={(e) => setRate(+e.target.value)} />
      </div>
      <div className="calc__result" aria-live="polite">
        <small>Cuota mensual estimada</small>
        <strong>{formatCOP(Math.round(monthly))}</strong>
        <small>Crédito de {formatCOP(Math.round(loan))}</small>
      </div>
      <p className="calc__disclaimer">
        Valor aproximado, sin seguros ni costos de estudio. Las condiciones finales dependen de la entidad financiera.
      </p>
    </div>
  );
}
