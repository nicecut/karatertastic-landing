
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="p-8 md:p-12 bg-secondary relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              30% rabatt
            </div>
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Invester i din fremtid
            </h2>
            <div className="mb-8">
              <span className="text-5xl font-bold">700</span>
              <span className="text-xl text-gray-600 ml-2">kr/måned</span>
            </div>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Få tilgang til vårt komplette 4-måneders program med personlig oppfølging
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
            >
              Start din reise nå
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
