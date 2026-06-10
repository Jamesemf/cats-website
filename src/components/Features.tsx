import Reveal from "./ui/Reveal";
import { features, type IconName } from "@/lib/content";

const icons: Record<IconName, React.ReactNode> = {
  vision: (
    <>
      <rect x="3" y="6.5" width="18" height="13" rx="3" />
      <circle cx="12" cy="13" r="3.5" />
      <path d="M8 6.5 9.5 4h5L16 6.5" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  rarity: (
    <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6L12 16.7 6.6 19.6l1.1-6L3.2 9.4l6.1-.8L12 3Z" />
  ),
  feed: (
    <>
      <rect x="4" y="4" width="16" height="6.5" rx="2" />
      <rect x="4" y="13.5" width="16" height="6.5" rx="2" />
    </>
  ),
  territory: (
    <>
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="12" r="5.5" opacity="0.6" />
      <circle cx="12" cy="12" r="9" opacity="0.3" />
    </>
  ),
  claim: (
    <>
      <circle cx="12" cy="9.5" r="6" />
      <path d="M9.5 9.5l1.8 1.8 3.2-3.3" />
      <path d="M9 14.5 7.5 21l4.5-2.5L16.5 21 15 14.5" />
    </>
  ),
};

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Built for cat spotters
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Part field guide, part collecting game: everything you need to
          document the cats of your neighbourhood.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.08}>
            <div className="group h-full rounded-3xl border border-line bg-surface p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pill transition group-hover:bg-success">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="#b53920"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icons[f.icon]}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
