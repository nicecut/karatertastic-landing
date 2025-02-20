
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";

export const StickyHeader = () => {
  const [remainingSpots, setRemainingSpots] = useState(4);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const updateTimer = () => {
      const now = new Date();
      const diff = endDate.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${days}d ${hours}t ${minutes}m`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 text-primary mr-2" />
            <span>Tilbud slutter om: <span className="font-bold">{timeLeft}</span></span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 text-primary mr-2" />
            <span>Kun <span className="font-bold text-primary">{remainingSpots} plasser</span> igjen</span>
          </div>
        </div>
        <Button 
          size="sm"
          className="bg-primary hover:bg-primary/90 text-white rounded-full"
        >
          Sikre plassen din nå - 50% rabatt
        </Button>
      </div>
    </div>
  );
};
