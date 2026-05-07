import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { PriceComparison } from "@/components/price-comparison";
import { ServiceFee } from "@/components/service-fee";
import { EuropeSection } from "@/components/europe-section";
import { TrustScore } from "@/components/trust-score";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <PriceComparison />
        <ServiceFee />
        <EuropeSection />
        <TrustScore />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
