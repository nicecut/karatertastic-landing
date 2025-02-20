
import { StickyHeader } from "@/components/StickyHeader";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Timeline } from "@/components/Timeline";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <StickyHeader />
      <Hero />
      <Features />
      <Timeline />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
