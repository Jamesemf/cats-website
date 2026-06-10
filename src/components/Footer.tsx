import CatFace from "./ui/CatFace";
import { GITHUB_URL } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <CatFace size={26} />
          <span className="font-display font-semibold">Cats</span>
        </div>
        <nav className="flex items-center gap-7 text-sm text-muted">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-ink"
          >
            GitHub
          </a>
          <a href="/privacy" className="transition hover:text-ink">
            Privacy
          </a>
        </nav>
        <p className="text-sm text-muted">© 2026 Cats</p>
      </div>
    </footer>
  );
}
