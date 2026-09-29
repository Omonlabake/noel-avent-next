import { faq } from "../data";

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-titre text-3xl font-extrabold tracking-tight md:text-4xl">
          Questions fréquentes
        </h2>
        <div className="mt-8 divide-y divide-nuit/10 border-y border-nuit/10">
          {faq.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                {f.q}
                <span className="text-xl text-ambre-fonce group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-nuit/70">{f.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}