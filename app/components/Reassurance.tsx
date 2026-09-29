import { SEUIL_LIVRAISON } from "../data";

const etapes = [
  ["1", "Choisissez votre coffret", "Gourmand, enfants, beauté ou thé : 24 petites surprises par calendrier."],
  ["2", "Recevez-le avant Noël", "Expédié sous 48 h, dans une boîte prête à offrir."],
  ["3", "Ouvrez une fenêtre par jour", "À la maison et ici, pour profiter de l'offre du jour."],
];

export default function Reassurance() {
  return (
    <>
      <section className="border-b border-nuit/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <p><strong>Livraison avant Noël</strong><br />pour toute commande avant le 15 décembre</p>
          <p><strong>Livraison offerte dès {SEUIL_LIVRAISON} €</strong><br />en France métropolitaine</p>
          <p><strong>Retours jusqu'au 15 janvier</strong><br />si le coffret est resté fermé</p>
          <p><strong>Paiement sécurisé</strong><br />carte bancaire ou virement</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="max-w-xl font-titre text-3xl font-extrabold tracking-tight md:text-4xl">
          Deux surprises chaque jour
        </h2>
        <p className="mt-3 max-w-xl text-nuit/70">
          Un calendrier physique à ouvrir à la maison, et une fenêtre en ligne
          qui débloque un avantage sur votre commande suivante.
        </p>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {etapes.map(([n, titre, texte]) => (
            <li key={n} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-nuit font-titre text-lg font-extrabold text-ambre">
                {n}
              </span>
              <div>
                <h3 className="font-titre text-lg font-bold">{titre}</h3>
                <p className="mt-1 text-nuit/70">{texte}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}