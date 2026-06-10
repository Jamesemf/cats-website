import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Rarity from "@/components/Rarity";
import VibesMarquee from "@/components/VibesMarquee";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Rarity />
        <VibesMarquee />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
