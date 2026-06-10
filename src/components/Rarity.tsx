import Reveal from "./ui/Reveal";
import CatFace from "./ui/CatFace";
import { tiers } from "@/lib/content";

export default function Rarity() {
  return (
    <section id="rarity" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Not all cats are created equal
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Rarity is earned, not given. The fewer the sightings, the higher a
          cat climbs, and the bigger the moment when you find one.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {tiers.map((t, i) => {
          const mythical = t.name === "Mythical";
          return (
            <Reveal key={t.name} delay={i * 0.07}>
              <div
                className="relative h-full overflow-hidden rounded-3xl border bg-surface p-5 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                style={{ borderColor: `${t.colour}55` }}
              >
                {mythical && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-[#f3d57a66] to-transparent"
                  />
                )}
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: `${t.colour}1a` }}
                >
                  <CatFace fur={t.fur} size={42} />
                </div>
                <p
                  className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: t.colour }}
                >
                  {t.name}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted">
                  {t.tagline}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
