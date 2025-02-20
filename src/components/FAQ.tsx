
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Hvor mye tid må jeg sette av?",
    answer: "Vi anbefaler 2-3 timer per uke, inkludert gruppetimer og individuell øving."
  },
  {
    question: "Hvilke betalingsalternativer tilbyr dere?",
    answer: "Vi aksepterer månedlige betalinger via Vipps, bankkort eller faktura."
  },
  {
    question: "Hva hvis jeg går glipp av en time?",
    answer: "Vi tilbyr opptak av alle timer og mulighet for ekstra støtte via WhatsApp."
  },
  {
    question: "Hvilket norsknivå må jeg ha for å bli med?",
    answer: "Vi aksepterer alle nivåer og tilpasser undervisningen deretter."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12">
          Ofte stilte spørsmål
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
