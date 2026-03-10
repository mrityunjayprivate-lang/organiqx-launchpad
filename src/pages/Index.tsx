import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProductShowcase from "@/components/ProductShowcase";
import BenefitsSection from "@/components/BenefitsSection";
import WhySection from "@/components/WhySection";
import IngredientsSection from "@/components/IngredientsSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ProductShowcase />
        <BenefitsSection />
        <WhySection />
        <IngredientsSection />
        <ComingSoonSection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
