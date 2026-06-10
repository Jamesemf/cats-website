import Reveal from "./ui/Reveal";
import CatFace from "./ui/CatFace";
import { steps, FUR } from "@/lib/content";

function StepVignette({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="relative h-28 overflow-hidden rounded-2xl bg-[#f5f0e6] ring-1 ring-line">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 240 112"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M-10 70 Q60 50 120 75 T 250 60"
            stroke="#e8e0d8"
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M80 -10 Q90 50 70 120"
            stroke="#ede5d8"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <div className="absolute left-[58%] top-7 flex h-10 w-10 items-center justify-center rounded-full bg-surface shadow-soft ring-1 ring-line">
          <CatFace fur={FUR.black} size={27} />
        </div>
        <div className="absolute left-[22%] top-[60%] h-3 w-3 animate-pulse-dot rounded-full bg-leaf ring-2 ring-surface" />
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="flex h-28 flex-col justify-center gap-1.5 rounded-2xl bg-success p-4 ring-1 ring-line">
        <p className="text-[11px] font-bold text-leaf">✓ Cat identified</p>
        {[
          ["Breed", "Domestic Shorthair"],
          ["Pattern", "Mackerel tabby"],
          ["Eyes", "Green"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between text-[11px]">
            <span className="text-muted">{k}</span>
            <span className="font-semibold">{v}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="flex h-28 items-center justify-center gap-3 rounded-2xl bg-pill p-4 ring-1 ring-line">
      {(
        [
          [FUR.ginger, "#b53920"],
          [FUR.grey, "#9AA0A6"],
          [FUR.white, "#4A7BA6"],
        ] as const
      ).map(([fur, tier], i) => (
        <div
          key={i}
          className="relative flex h-16 w-14 items-center justify-center rounded-xl bg-surface shadow-soft ring-1 ring-line"
        >
          <CatFace fur={fur} size={34} />
          <span
            className="absolute -top-1.5 right-1.5 h-3 w-3 rounded-full ring-2 ring-surface"
            style={{ background: tier }}
          />
        </div>
      ))}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-line bg-pill/60">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Three steps to your first cat
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-line bg-surface p-7 shadow-soft">
                <StepVignette index={i} />
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rust text-sm font-bold text-surface">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
