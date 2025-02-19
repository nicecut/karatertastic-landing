
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Takk for din interesse!",
      description: "Vi vil kontakte deg snart.",
    });
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-center mb-8">
            Interessert?
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Navn</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white"
              />
            </div>
            <div>
              <Label htmlFor="email">E-post</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white"
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-white"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-full"
            >
              Send inn din interesse
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
