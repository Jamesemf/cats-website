import CatFace from "./ui/CatFace";
import { NOTIFY_MAILTO } from "@/lib/content";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#claim", label: "For owners" },
  { href: "#rarity", label: "Rarity" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2.5">
          <CatFace size={32} />
          <span className="font-display text-lg font-semibold tracking-tight">
            Cats on a Map
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={NOTIFY_MAILTO}
          className="rounded-full bg-rust px-4 py-2 text-sm font-semibold text-surface shadow-soft transition hover:bg-[#9e3019]"
        >
          Get notified
        </a>
      </div>
    </header>
  );
}
