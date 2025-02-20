
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export const Hero = () => {
  const painPoints = [
    "Frustrert over lave karakterer til tross for mange timer med studier?",
    "Sliter med å uttrykke deg tydelig på norsk?",
    "Bekymret for din akademiske fremtid?",
    "Føler deg utenfor i klasseromsdiskusjoner?",
    "Stresser over kommende norskeksamener?"
  ];

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
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Er dårlig norsk til hinder for karakterene dine - og{" "}
          <span className="text-primary">fremtiden din?</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Oppdag hvordan andre elever med et annet morsmål gikk fra å slite med norsk til å mestre det på bare 4 måneder...
        </p>
        <div className="max-w-xl mx-auto mb-12">
          <ul className="space-y-4 text-left">
            {painPoints.map((point, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full animate-fade-in"
        >
          Sikre plassen din nå - 50% rabatt
        </Button>
      </div>
    </section>
  );
};
