import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { PriceCards } from "@/components/price-cards";
import { HowItWorks } from "@/components/how-it-works";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <PriceCards />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
