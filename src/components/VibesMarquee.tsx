import { vibes } from "@/lib/content";

export default function VibesMarquee() {
  const row = [...vibes, ...vibes, ...vibes];
  return (
    <section
      aria-label="Cat vibes"
      className="border-y border-line bg-surface py-10"
    >
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
        Every cat has a vibe
      </p>
      <div className="mt-6 overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-3">
          {[...row, ...row].map((v, i) => (
            <span
              key={i}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-pill px-5 py-2.5 text-sm font-semibold"
            >
              <span>{v.emoji}</span>
              {v.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
