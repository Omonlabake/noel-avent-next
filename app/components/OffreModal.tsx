"use client";

import { useEffect, useState } from "react";
import { genreLabel, jours } from "../data";

type Props = {
  jour: number | null;
  aujourdhui: number;
  onFermer: () => void;
};

export default function OffreModal({ jour, aujourdhui, onFermer }: Props) {
  const [copie, setCopie] = useState(false);

  useEffect(() => {
    setCopie(false);
  }, [jour]);

  useEffect(() => {
    if (jour === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFermer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [jour, onFermer]);

  if (jour === null) return null;

  const offre = jours[jour - 1];
  const code = `AVENT${jour}`;
  const estAujourdhui = jour === aujourdhui;

  async function copier() {
    try {
      await navigator.clipboard.writeText(code);
      setCopie(true);
    } catch {
      setCopie(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-nuit/80 p-4"
      onClick={onFermer}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Offre du ${jour} décembre`}
        onClick={(e) => e.stopPropagation()}
        className="ouverture w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#ffd27a] to-ambre p-6 text-nuit shadow-2xl"
      >
        <p className="font-titre text-6xl font-extrabold leading-none">{jour}</p>
        <p className="mt-1 text-sm font-bold">
          décembre · {genreLabel[offre.genre]}
        </p>

        <h3 className="mt-5 font-titre text-2xl font-extrabold leading-tight">
          {offre.titre}
        </h3>
        <p className="mt-2 text-sm text-nuit/80">
          {estAujourdhui
            ? "Valable aujourd'hui jusqu'à minuit."
            : "Cette offre est terminée, mais celle d'aujourd'hui vous attend."}
        </p>

        {estAujourdhui && (
          <button
            onClick={copier}
            className="mt-4 w-full rounded-xl border-2 border-dashed border-nuit/40 bg-white/40 py-2.5 font-bold tracking-wide"
          >
            {copie ? "Code copié" : `Copier le code ${code}`}
          </button>
        )}

        <div className="mt-4 flex gap-2">
          <a
            href="#coffrets"
            onClick={onFermer}
            className="flex-1 rounded-full bg-nuit py-3 text-center font-bold text-neige"
          >
            Voir les coffrets
          </a>
          <button
            onClick={onFermer}
            className="rounded-full px-4 py-3 font-bold hover:bg-white/40"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}