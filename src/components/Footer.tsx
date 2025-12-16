import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Vicente Beiza. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> y tecnología
          </p>
        </div>
      </div>
    </footer>
  );
};
