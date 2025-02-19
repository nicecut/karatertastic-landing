
import { Book, Brain, MessageSquare, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Book,
    title: "Leseferdigheter",
    description: "Utvid ordforrådet og forbedre leseforståelsen gjennom varierte tekster"
  },
  {
    icon: Brain,
    title: "Språkforståelse",
    description: "Lær å forstå nyanser og kontekst i norsk språk"
  },
  {
    icon: MessageSquare,
    title: "Aktiv Skriving",
    description: "Praktiser skriving med personlig tilbakemelding"
  },
  {
    icon: Star,
    title: "Karakterforbedring",
    description: "Se konkrete resultater i skolehverdagen"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold mb-4">
            Hva kan du forvente?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vi fokuserer på å gi deg verktøyene du trenger for å mestre norsk språk
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300 border-none bg-secondary"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
