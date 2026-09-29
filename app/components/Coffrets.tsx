"use client";

import { coffrets, euro, type Coffret } from "../data";

type Props = { onAjouter: (c: Coffret) => void };

export default function Coffrets({ onAjouter }: Props) {
  return (
    <section id="coffrets" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-titre text-3xl font-extrabold tracking-tight md:text-4xl">
          Les quatre calendriers
        </h2>
        <p className="mt-3 max-w-xl text-nuit/70">
          Chacun contient 24 fenêtres. Les quantités sont limitées, les
          premiers coffrets partent dès novembre.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coffrets.map((c) => (
            <article
              key={c.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-nuit/10 bg-neige"
            >
              <div
                className="relative flex h-44 items-end p-3"
                style={{ background: `linear-gradient(140deg, ${c.from}, ${c.to})` }}
              >
                <div className="grid w-full grid-cols-6 gap-1" aria-hidden="true">
                  {Array.from({ length: 12 }, (_, k) => (
                    <span key={k} className="aspect-square rounded-sm bg-white/25" />
                  ))}
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-nuit">
                  {c.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-titre text-lg font-bold leading-tight">{c.nom}</h3>
                <p className="mt-1 text-sm text-nuit/70">{c.desc}</p>
                <ul className="mt-3 space-y-1 text-sm text-nuit/80">
                  {c.contenu.map((x) => (
                    <li key={x}>+ {x}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-bold text-baie">
                  Plus que {c.stock} en stock
                </p>
                <div className="mt-auto flex items-end justify-between pt-3">
                  <p>
                    <span className="font-titre text-2xl font-extrabold">{euro(c.prix)}</span>{" "}
                    <span className="text-sm text-nuit/50 line-through">{euro(c.ancien)}</span>
                  </p>
                  <button
                    onClick={() => onAjouter(c)}
                    className="rounded-full bg-nuit px-4 py-2 text-sm font-bold text-neige hover:bg-nuit-clair"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}