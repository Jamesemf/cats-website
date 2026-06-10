import CatFace from "./CatFace";
import { FUR } from "@/lib/content";

function Pin({
  x,
  y,
  fur,
  delay,
}: {
  x: string;
  y: string;
  fur: string;
  delay: number;
}) {
  return (
    <div
      className="absolute z-10 animate-pin-drop"
      style={{ left: x, top: y, animationDelay: `${delay}s` }}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface shadow-soft ring-1 ring-line">
        <CatFace fur={fur} size={24} />
      </div>
    </div>
  );
}

/**
 * A simplified recreation of the app's map screen: cream map tiles,
 * fur-coloured cat-face pins, a cluster badge, the user's location dot
 * and the slide-up cat card.
 */
export default function MapMock() {
  return (
    <div className="absolute inset-0 bg-[#f5f0e6]">
      {/* streets + park */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 270 570"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <rect
          x="150"
          y="60"
          width="160"
          height="130"
          rx="26"
          fill="#dcead7"
          transform="rotate(8 230 125)"
        />
        <g stroke="#e8e0d8" strokeWidth="10" strokeLinecap="round">
          <path d="M-20 150 Q80 130 140 180 T 300 220" fill="none" />
          <path d="M60 -20 Q90 120 60 260 T 90 590" fill="none" />
          <path d="M-20 380 Q120 350 290 410" fill="none" />
          <path d="M200 -20 Q180 150 230 320 T 200 590" fill="none" />
        </g>
        <g stroke="#ede5d8" strokeWidth="5" strokeLinecap="round">
          <path d="M-20 260 Q120 250 290 290" fill="none" />
          <path d="M140 -20 Q130 90 160 200" fill="none" />
          <path d="M-20 480 Q140 450 290 500" fill="none" />
        </g>
      </svg>

      {/* search pill */}
      <div className="absolute left-1/2 top-11 z-10 flex w-[78%] -translate-x-1/2 items-center gap-2 rounded-full bg-surface px-4 py-2.5 shadow-soft ring-1 ring-line">
        <span className="h-2 w-2 rounded-full bg-rust" />
        <span className="text-[11px] font-medium text-muted">
          Cats near you
        </span>
      </div>

      {/* pins */}
      <Pin x="16%" y="24%" fur={FUR.ginger} delay={0.2} />
      <Pin x="62%" y="20%" fur={FUR.black} delay={0.45} />
      <Pin x="74%" y="42%" fur={FUR.white} delay={0.7} />
      <Pin x="30%" y="46%" fur={FUR.grey} delay={0.95} />
      <Pin x="54%" y="58%" fur={FUR.brown} delay={1.2} />

      {/* cluster badge */}
      <div
        className="absolute left-[14%] top-[58%] z-10 flex h-8 w-8 animate-pin-drop items-center justify-center rounded-full bg-rust text-[11px] font-bold text-surface shadow-soft ring-2 ring-surface"
        style={{ animationDelay: "1.45s" }}
      >
        3
      </div>

      {/* user location dot */}
      <div className="absolute left-[46%] top-[36%] z-10 h-3.5 w-3.5 animate-pulse-dot rounded-full bg-leaf ring-2 ring-surface" />

      {/* slide-up cat card */}
      <div className="absolute inset-x-3 bottom-3 z-10 rounded-2xl bg-surface p-3 shadow-lift ring-1 ring-line">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pill">
            <CatFace fur={FUR.ginger} size={34} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[13px] font-bold">Biscuit</span>
              <span className="rounded-full bg-[#4A7BA6] px-1.5 py-px text-[8px] font-bold uppercase tracking-wide text-surface">
                Rare
              </span>
            </div>
            <div className="mt-1 flex gap-1">
              <span className="rounded-full bg-pill px-2 py-0.5 text-[9px] font-medium text-muted">
                Tabby
              </span>
              <span className="rounded-full bg-pill px-2 py-0.5 text-[9px] font-medium text-muted">
                Ginger
              </span>
              <span className="rounded-full bg-success px-2 py-0.5 text-[9px] font-medium text-leaf">
                😸 friendly
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
