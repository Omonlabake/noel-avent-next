import { avis } from "../data";

export default function Avis() {
  return (
    <section id="avis" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <h2 className="font-titre text-3xl font-extrabold tracking-tight md:text-4xl">
        Ce que disent nos clients
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {avis.map((a) => (
          <figure key={a.nom} className="rounded-2xl border border-nuit/10 bg-white p-6">
            <span aria-label={`${a.note} sur 5`} className="text-ambre-fonce">
              {"★".repeat(a.note)}
            </span>
            <blockquote className="mt-3 text-nuit/80">{a.texte}</blockquote>
            <figcaption className="mt-4 text-sm font-bold">{a.nom}, achat vérifié</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}