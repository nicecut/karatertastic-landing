
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Timeline } from "@/components/Timeline";
import { Pricing } from "@/components/Pricing";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Timeline />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
