
import { Card } from "@/components/ui/card";

const timelineItems = [
  {
    month: "Måned 1",
    title: "Grunnleggende Leseferdigheter",
    description: "Introduksjon til ulike teksttyper og lesemetoder"
  },
  {
    month: "Måned 2",
    title: "Språkforståelse",
    description: "Fokus på ordforråd og grammatikk"
  },
  {
    month: "Måned 3",
    title: "Skriveferdigheter",
    description: "Praktisk skrivetrening med tilbakemeldinger"
  },
  {
    month: "Måned 4",
    title: "Mestring og Evaluering",
    description: "Oppsummering og vurdering av fremgang"
  }
];

export const Timeline = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl font-bold text-center mb-16">
          4-måneders Program
        </h2>
        <div className="max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute left-0 -ml-3 h-full w-0.5 bg-primary/20" />
              <Card className="ml-8 mb-8 p-6 bg-white hover:shadow-md transition-shadow duration-300">
                <div className="absolute left-0 -ml-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {item.month}
                </h3>
                <h4 className="text-lg font-medium text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
