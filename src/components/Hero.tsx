
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary py-20 px-4">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="container mx-auto text-center relative animate-fade-up">
        <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          Velkommen til KarakterKick
        </span>
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Styrk dine norskferdigheter med{" "}
          <span className="text-primary">KarakterKick!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Et digitalt lese- og skrivekurs for ungdom med norsk som andrespråk
        </p>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full animate-fade-in"
        >
          Meld deg på nå!
        </Button>
      </div>
    </section>
  );
};
