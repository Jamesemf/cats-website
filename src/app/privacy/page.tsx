import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy — Cats on a Map",
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-16">
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Privacy
        </h1>
        <div className="mt-8 space-y-5 leading-relaxed text-muted">
          <p>
            Cats on a Map is currently in development and has not yet
            launched. This page will hold the full privacy policy before
            release.
          </p>
          <p>
            In short: the app records the photos you choose to submit and the
            location of each cat sighting so that sightings can be shared on
            the community map. It does not track you between sightings, and
            your photos are only used to identify and catalogue cats.
          </p>
          <p>
            Questions? Email{" "}
            <a
              href="mailto:Jamesemford@outlook.com"
              className="font-semibold text-rust underline-offset-4 hover:underline"
            >
              Jamesemford@outlook.com
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
