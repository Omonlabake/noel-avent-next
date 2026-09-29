type Props = { nombre: number; onPanier: () => void };

export default function Header({ nombre, onPanier }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-nuit/95 text-neige backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-titre text-xl font-extrabold tracking-tight">
          Vingt-Quatre
        </a>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a href="#calendrier" className="hover:text-ambre">Le calendrier</a>
          <a href="#coffrets" className="hover:text-ambre">Les coffrets</a>
          <a href="#avis" className="hover:text-ambre">Avis</a>
          <a href="#faq" className="hover:text-ambre">Questions</a>
        </nav>
        <button
          onClick={onPanier}
          className="rounded-full bg-ambre px-4 py-2 text-sm font-bold text-nuit hover:bg-ambre-fonce"
        >
          Panier ({nombre})
        </button>
      </div>
    </header>
  );
}