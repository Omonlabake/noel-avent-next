"use client";

import { useCallback, useState } from "react";
import Avis from "./components/Avis";
import BarreMobile from "./components/BarreMobile";
import Coffrets from "./components/Coffrets";
import Faq from "./components/Faq";
import Final from "./components/Final";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OffreModal from "./components/OffreModal";
import Panier from "./components/Panier";
import Reassurance from "./components/Reassurance";
import Toast from "./components/Toast";
import type { Coffret } from "./data";

export default function Page() {
  const [aujourdhui, setAujourdhui] = useState(12);
  const [vues, setVues] = useState<number[]>([]);
  const [ouvert, setOuvert] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [panier, setPanier] = useState<Record<string, number>>({});
  const [panierOuvert, setPanierOuvert] = useState(false);

  const fermer = useCallback(() => setOuvert(null), []);
  const finToast = useCallback(() => setToast(null), []);

  const nombre = Object.values(panier).reduce((s, n) => s + n, 0);

  function ouvrirFenetre(d: number) {
    if (d > aujourdhui) {
      setToast(`Cette fenêtre s'ouvre le ${d} décembre.`);
      return;
    }
    setVues((v) => (v.includes(d) ? v : [...v, d]));
    setOuvert(d);
  }

  function ajouter(c: Coffret) {
    setPanier((p) => ({ ...p, [c.id]: (p[c.id] ?? 0) + 1 }));
    setToast(`${c.nom} ajouté au panier.`);
  }

  function changer(id: string, delta: number) {
    setPanier((p) => {
      const next = { ...p, [id]: Math.max(0, (p[id] ?? 0) + delta) };
      if (next[id] === 0) delete next[id];
      return next;
    });
  }

  return (
    <main>
      <Header nombre={nombre} onPanier={() => setPanierOuvert(true)} />
      <Hero
        aujourdhui={aujourdhui}
        vues={vues}
        onAujourdhui={setAujourdhui}
        onOuvrir={ouvrirFenetre}
      />
      <Reassurance />
      <Coffrets onAjouter={ajouter} />
      <Avis />
      <Faq />
      <Final aujourdhui={aujourdhui} />
      <BarreMobile aujourdhui={aujourdhui} onOuvrir={ouvrirFenetre} />

      <OffreModal jour={ouvert} aujourdhui={aujourdhui} onFermer={fermer} />
      <Panier
        ouvert={panierOuvert}
        panier={panier}
        onFermer={() => setPanierOuvert(false)}
        onChanger={changer}
        onCommander={() => setToast("Commande enregistrée pour la démo. Merci !")}
      />
      <Toast message={toast} onFin={finToast} />
    </main>
  );
}