import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PopularCars from "@/components/PopularCars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import VernaShowcase from "@/components/VernaShowcase";
import HowItWorks from "@/components/HowItWorks";
import BestDeals from "@/components/BestDeals";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <PopularCars />
      <WhyChooseUs />
      <Testimonials />
      <VernaShowcase />
      <HowItWorks />
      <BestDeals />
    </main>
  );
}
