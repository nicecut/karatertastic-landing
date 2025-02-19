
import { Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href="mailto:karakterkick@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              karakterkick@gmail.com
            </a>
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} KarakterKick. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
};
