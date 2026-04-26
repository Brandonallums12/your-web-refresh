import { MapPin, Phone, Clock } from "lucide-react";

interface FooterProps {
  onCTA?: () => void;
}

export const Footer = ({ onCTA: _onCTA }: FooterProps) => {
  return (
    <footer id="visit" className="relative bg-background border-t border-border">
      {/* CTA strip + Visit us */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grad-hero opacity-80" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/20 blur-[120px] rounded-full" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          {/* Visit us */}
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-5">
              // Visit us
            </div>
            <ul className="space-y-3 text-silver-200">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 mt-1 text-silver-500 shrink-0" />
                <span>1240 W Covina Pkwy<br />West Covina, CA 91790</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 mt-1 text-silver-500 shrink-0" />
                <a href="tel:6265550198" className="hover:text-primary transition-colors font-mono">
                  (626) 555-0198
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="size-4 mt-1 text-silver-500 shrink-0" />
                <span>Mon–Sat 10am–7pm · Sun 11am–5pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-8">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="size-9 bg-grad-red shadow-red flex items-center justify-center">
              <span className="font-display text-white text-base">T</span>
            </div>
            <div className="font-display text-2xl tracking-tighter uppercase">
              Tech<span className="text-primary">Buyer</span>
            </div>
          </div>
          <p className="text-silver-400 max-w-md text-pretty">
            West Covina's go-to spot for fair, fast cash for used phones. Independently owned and
            run by people who actually know hardware.
          </p>
        </div>

        <div className="md:col-span-4">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-5">
            // Quick links
          </div>
          <ul className="space-y-3 text-silver-200">
            <li><a href="#how" className="hover:text-primary transition-colors">How it works</a></li>
            <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Data wipe policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-mono uppercase tracking-widest text-silver-500">
          <span>© {new Date().getFullYear()} Techbuyer · West Covina, CA</span>
          <span>Certified data destruction included</span>
        </div>
      </div>
    </footer>
  );
};
