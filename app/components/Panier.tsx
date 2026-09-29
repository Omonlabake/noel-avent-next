"use client";

import { SEUIL_LIVRAISON, coffrets, euro } from "../data";

type Props = {
  ouvert: boolean;
  panier: Record<string, number>;
  onFermer: () => void;
  onChanger: (id: string, delta: number) => void;
  onCommander: () => void;
};

export default function Panier({ ouvert, panier, onFermer, onChanger, onCommander }: Props) {
  if (!ouvert) return null;

  const lignes = coffrets.filter((c) => panier[c.id]);
  const total = lignes.reduce((s, c) => s + panier[c.id] * c.prix, 0);
  const manque = Math.max(0, SEUIL_LIVRAISON - total);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-nuit/70" onClick={onFermer}>
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Panier"
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-md flex-col bg-neige p-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-titre text-2xl font-extrabold">Votre panier</h2>
          <button onClick={onFermer} className="font-bold">Fermer</button>
        </div>

        {lignes.length === 0 ? (
          <div className="mt-10">
            <p className="text-nuit/70">
              Votre panier est vide. Choisissez un calendrier pour commencer.
            </p>
            <a
              href="#coffrets"
              onClick={onFermer}
              className="mt-4 inline-block rounded-full bg-nuit px-5 py-3 font-bold text-neige"
            >
              Voir les coffrets
            </a>
          </div>
        ) : (
          <>
            <div className="mt-5 rounded-xl bg-white p-3 text-sm">
              {manque > 0 ? (
                <p>
                  Plus que <strong>{euro(manque)}</strong> pour la livraison offerte.
                </p>
              ) : (
                <p>
                  <strong>Livraison offerte</strong> sur cette commande.
                </p>
              )}
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-nuit/10">
                <div
                  className="h-full rounded-full bg-sapin"
                  style={{ width: `${Math.min(100, (total / SEUIL_LIVRAISON) * 100)}%` }}
                />
              </div>
            </div>

            <ul className="mt-5 flex-1 divide-y divide-nuit/10 overflow-y-auto">
              {lignes.map((c) => (
                <li key={c.id} className="flex items-center justify-between gap-3 py-3">
                  <div>
                    <p className="font-bold">{c.nom}</p>
                    <p className="text-sm text-nuit/60">{euro(c.prix)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onChanger(c.id, -1)}
                      aria-label={`Retirer un ${c.nom}`}
                      className="h-8 w-8 rounded-full border border-nuit/20 font-bold"
                    >
                      −
                    </button>
                    <span className="w-5 text-center font-bold">{panier[c.id]}</span>
                    <button
                      onClick={() => onChanger(c.id, 1)}
                      aria-label={`Ajouter un ${c.nom}`}
                      className="h-8 w-8 rounded-full border border-nuit/20 font-bold"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-nuit/10 pt-4">
              <p className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>{euro(total)}</span>
              </p>
              <button
                onClick={onCommander}
                className="mt-4 w-full rounded-full bg-nuit py-3.5 font-bold text-neige hover:bg-nuit-clair"
              >
                Commander
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}