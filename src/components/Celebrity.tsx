import Reveal from "./ui/Reveal";
import CatFace from "./ui/CatFace";
import { celebrity, FUR } from "@/lib/content";

const ownerPills = [
  "Likes a fuss",
  "Treats welcome",
  "Outdoor explorer",
  "About 4 years old",
];

export default function Celebrity() {
  return (
    <section id="claim" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold text-muted shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-rust" />
              {celebrity.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {celebrity.title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              {celebrity.body}
            </p>
          </Reveal>
          <div className="mt-9 space-y-6">
            {celebrity.points.map((point, i) => (
              <Reveal key={point.title} delay={0.2 + i * 0.08}>
                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rust text-sm font-bold text-surface">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold">{point.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{point.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Owner-card mockup */}
        <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm">
          <div className="rotate-2 rounded-3xl bg-surface p-7 shadow-lift ring-1 ring-line">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-pill">
                <CatFace fur={FUR.ginger} size={56} />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold">Biscuit</p>
                <p className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-success px-2.5 py-1 text-xs font-bold text-leaf">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Verified owner
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {ownerPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full bg-pill px-3 py-1.5 text-xs font-semibold"
                >
                  {pill}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm italic leading-relaxed text-muted">
              “Once followed the postman for a full mile.”
            </p>
          </div>

          {/* floating notification toasts */}
          <div className="absolute -left-10 -top-8 hidden -rotate-3 rounded-2xl bg-surface px-4 py-3 shadow-lift ring-1 ring-line sm:block">
            <p className="text-xs font-bold">🔔 Biscuit was spotted</p>
            <p className="mt-0.5 text-[11px] text-muted">near the park · 2h ago</p>
          </div>
          <div className="absolute -bottom-8 -right-6 hidden rotate-2 rounded-2xl bg-surface px-4 py-3 shadow-lift ring-1 ring-line sm:block">
            <p className="text-xs font-bold">🔔 Biscuit was spotted</p>
            <p className="mt-0.5 text-[11px] text-muted">by the allotments · yesterday</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
