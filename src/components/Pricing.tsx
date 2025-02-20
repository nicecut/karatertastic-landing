
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Check } from "lucide-react";

export const Pricing = () => {
  const bonuses = [
    "24/7 WhatsApp-støtte (Verdi: 1000 NOK)",
    "Studiematerialer og ressurser (Verdi: 800 NOK)",
    "Øvelsesbibliotek (Verdi: 700 NOK)"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="p-8 md:p-12 bg-secondary relative overflow-hidden border-2 border-primary">
            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              50% rabatt
            </div>
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Invester i din fremtid
            </h2>
            <div className="mb-8">
              <span className="text-gray-600 line-through text-xl">1000 kr/måned</span>
              <div className="mt-2">
                <span className="text-5xl font-bold">500</span>
                <span className="text-xl text-gray-600 ml-2">kr/måned</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Ekstra bonuser inkludert:</h3>
              </div>
              <ul className="space-y-3 text-left">
                {bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-600 mb-8">
              100% risikofri garanti: Full refusjon hvis karakterene dine ikke forbedrer seg innen to måneder
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
            >
              Sikre plassen din nå - 50% rabatt
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
