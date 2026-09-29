"use client";

import { useEffect, useState } from "react";

type Props = {
  aujourdhui: number;
  vues: number[];
  onAujourdhui: (n: number) => void;
  onOuvrir: (jour: number) => void;
};

export default function Hero({ aujourdhui, vues, onAujourdhui, onOuvrir }: Props) {
  const [reste, setReste] = useState("--:--:--");

  useEffect(() => {
    const pad = (x: number) => String(x).padStart(2, "0");
    const tick = () => {
      const now = new Date();
      const fin = new Date(now);
      fin.setHours(24, 0, 0, 0);
      const s = Math.max(0, Math.floor((fin.getTime() - now.getTime()) / 1000));
      setReste(
        `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="ciel text-neige">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:py-16 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <p className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-sm">
            Livraison avant Noël pour toute commande avant le 15 décembre
          </p>
          <h1 className="font-titre text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Une fenêtre par jour, jusqu'à Noël.
          </h1>
          <p className="mt-5 max-w-md text-lg text-neige/80">
            Des calendriers de l'Avent à offrir ou à s'offrir. Et chaque jour
            de décembre, une nouvelle offre à débloquer sur la boutique.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#coffrets"
              className="rounded-full bg-ambre px-6 py-3 font-bold text-nuit shadow-lg shadow-ambre/30 hover:bg-ambre-fonce"
            >
              Choisir mon calendrier
            </a>
            <button
              onClick={() => onOuvrir(aujourdhui)}
              className="rounded-full border border-white/30 px-6 py-3 font-bold hover:bg-white/10"
            >
              Ouvrir la fenêtre du jour
            </button>
          </div>
          <p className="mt-8 text-sm text-neige/80">
            <span className="text-ambre">★★★★★</span> 4,8 sur 5, plus de 2 300 avis
          </p>
        </div>

        <div id="calendrier" className="facade rounded-3xl p-4 sm:p-6">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-titre text-xl font-bold">
              Nous sommes le {aujourdhui} décembre
            </h2>
            <p className="text-sm text-neige/70">
              Prochaine fenêtre dans{" "}
              <span className="font-bold tabular-nums text-ambre">{reste}</span>
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-6 sm:gap-3">
            {Array.from({ length: 24 }, (_, i) => {
              const d = i + 1;
              const ouvrable = d <= aujourdhui;
              const vue = vues.includes(d);
              const etat = !ouvrable
                ? "fenetre-fermee"
                : vue
                ? "fenetre-vue"
                : "fenetre-ouvrable";
              const forme = d % 3 === 0 ? "rounded-t-full rounded-b-lg" : "rounded-lg";
              return (
                <button
                  key={d}
                  onClick={() => onOuvrir(d)}
                  aria-label={
                    ouvrable
                      ? `Ouvrir la fenêtre du ${d} décembre`
                      : `Fenêtre du ${d} décembre, pas encore ouverte`
                  }
                  className={`fenetre ${etat} ${forme} ${
                    d === aujourdhui ? "fenetre-aujourdhui" : ""
                  } flex aspect-[3/4] flex-col items-center justify-center font-titre`}
                >
                  <span className="text-2xl font-extrabold sm:text-3xl">{d}</span>
                  <span className="text-[11px] font-medium opacity-80">
                    {!ouvrable ? "à venir" : vue ? "ouverte" : "à ouvrir"}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 rounded-xl bg-black/20 p-3 text-sm">
            <label htmlFor="jour" className="mb-2 block text-neige/80">
              Aperçu : simuler la date du jour ({aujourdhui} décembre)
            </label>
            <input
              id="jour"
              type="range"
              min={1}
              max={24}
              value={aujourdhui}
              onChange={(e) => onAujourdhui(Number(e.target.value))}
              className="w-full accent-ambre"
            />
          </div>
        </div>
      </div>
    </section>
  );
}