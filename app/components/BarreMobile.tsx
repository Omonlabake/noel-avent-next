import { jours } from "../data";

type Props = { aujourdhui: number; onOuvrir: (jour: number) => void };

export default function BarreMobile({ aujourdhui, onOuvrir }: Props) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 border-t border-white/10 bg-nuit px-4 py-3 text-neige md:hidden">
      <p className="text-sm leading-tight">
        Fenêtre du {aujourdhui}
        <br />
        <span className="text-neige/70">{jours[aujourdhui - 1].titre}</span>
      </p>
      <button
        onClick={() => onOuvrir(aujourdhui)}
        className="shrink-0 rounded-full bg-ambre px-4 py-2 text-sm font-bold text-nuit"
      >
        Ouvrir
      </button>
    </div>
  );
}