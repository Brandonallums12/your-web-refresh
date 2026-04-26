import { Phone, MapPin } from "lucide-react";

interface HeaderProps {
  onCTA: () => void;
}

export const Header = ({ onCTA }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="font-display text-xl tracking-tighter uppercase">
            Tech<span className="text-primary">Buyer</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-[13px] font-semibold uppercase tracking-widest text-silver-300">
          <a href="#how" className="hover:text-primary transition-colors">How it works</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#visit" className="hover:text-primary transition-colors">Visit us</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:6265550198"
            className="hidden sm:flex items-center gap-2 text-silver-300 hover:text-white transition-colors text-sm font-mono"
          >
            <Phone className="size-4" />
            (626) 555-0198
          </a>
          <button
            onClick={onCTA}
            className="bg-grad-red text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:shadow-red transition-shadow"
          >
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
};
