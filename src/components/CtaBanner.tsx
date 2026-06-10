import Reveal from "./ui/Reveal";
import CatFace from "./ui/CatFace";
import { NOTIFY_MAILTO, FUR } from "@/lib/content";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-rust px-7 py-16 text-center shadow-lift sm:px-14">
          {/* decorative cats */}
          <div className="absolute -left-6 -top-6 opacity-20">
            <CatFace fur={FUR.white} size={120} />
          </div>
          <div className="absolute -bottom-8 -right-4 rotate-12 opacity-20">
            <CatFace fur={FUR.white} size={150} />
          </div>
          <h2 className="relative font-display text-4xl font-semibold tracking-tight text-surface sm:text-5xl">
            Be first on the map
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-lg text-[#f6d9d0]">
            Cats on a Map is in development. Leave your email and we’ll miaow
            when it launches.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={NOTIFY_MAILTO}
              className="rounded-full bg-surface px-7 py-3.5 text-base font-semibold text-rust shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              Get notified at launch
            </a>
            <span className="rounded-full border border-[#ffffff4d] px-5 py-3 text-sm font-medium text-[#f6d9d0]">
              Coming soon · App Store &amp; Google Play
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
