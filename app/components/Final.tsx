type Props = { aujourdhui: number };

export default function Final({ aujourdhui }: Props) {
  return (
    <>
      <section className="ciel text-neige">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
          <h2 className="font-titre text-3xl font-extrabold tracking-tight md:text-4xl">
            Il reste {24 - aujourdhui} fenêtres avant Noël.
          </h2>
          <p className="mt-3 text-neige/80">
            Commandez maintenant pour recevoir votre calendrier à temps.
          </p>
          <a
            href="#coffrets"
            className="mt-7 inline-block rounded-full bg-ambre px-8 py-3.5 font-bold text-nuit hover:bg-ambre-fonce"
          >
            Choisir mon calendrier
          </a>
        </div>
      </section>

      <footer className="bg-nuit px-5 py-10 pb-28 text-sm text-neige/60 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 md:flex-row">
          <p className="font-titre text-lg font-extrabold text-neige">Vingt-Quatre</p>
          <p>Livraison · Retours · Conditions de vente · Contact</p>
          <p>© 2026 Vingt-Quatre. Site réalisé pour la Calibration Q4.</p>
        </div>
      </footer>
    </>
  );
}