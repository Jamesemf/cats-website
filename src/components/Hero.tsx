import PhoneFrame from "./ui/PhoneFrame";
import MapMock from "./ui/MapMock";
import Reveal from "./ui/Reveal";
import { NOTIFY_MAILTO } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* warm background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #e8873b33, #b5392014, transparent)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-2 lg:pb-28 lg:pt-24">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold text-muted shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              Coming soon to iOS &amp; Android
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Every cat has a <span className="italic text-rust">story.</span>{" "}
              Go find it.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Cats turns your daily walk into a collecting game.
              Snap a photo, let AI identify the cat, and watch your local map
              come alive. And if one of the stars is your own cat, claim them
              and follow their secret journey.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={NOTIFY_MAILTO}
                className="rounded-full bg-rust px-7 py-3.5 text-base font-semibold text-surface shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9e3019] hover:shadow-lift"
              >
                Get notified at launch
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-line bg-surface px-7 py-3.5 text-base font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                See how it works
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative mx-auto">
          <PhoneFrame className="rotate-2">
            <MapMock />
          </PhoneFrame>
          {/* floating chips */}
          <div className="absolute -left-20 top-16 hidden -rotate-6 rounded-2xl bg-surface px-4 py-3 shadow-lift ring-1 ring-line sm:block">
            <p className="text-xs font-bold">✨ New cat discovered</p>
            <p className="mt-0.5 text-[11px] text-muted">
              Domestic Shorthair · Tabby
            </p>
          </div>
          <div className="absolute -right-14 bottom-28 hidden rotate-3 rounded-2xl bg-surface px-4 py-3 shadow-lift ring-1 ring-line sm:block">
            <p className="text-xs font-bold text-[#7C4DBE]">Mythical find!</p>
            <p className="mt-0.5 text-[11px] text-muted">
              Only 1 sighting ever
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
