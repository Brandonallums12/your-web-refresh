import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

interface FooterProps {
  onCTA?: () => void;
}

export const Footer = ({ onCTA: _onCTA }: FooterProps) => {
  return (
    <footer id="visit" className="relative bg-background border-t border-border">


      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid md:grid-cols-12 gap-10 md:divide-x md:divide-border">
        <Reveal direction="left" className="md:col-span-8 md:pr-10">
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
          <a 
            href="mailto:techbuyer@webuyphoneswestcovina.com" 
            className="mt-4 inline-block text-silver-300 hover:text-primary transition-colors font-mono text-sm"
          >
            techbuyer@webuyphoneswestcovina.com
          </a>
        </Reveal>

        <Reveal direction="right" delay={120} className="md:col-span-4 md:pl-10">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-5">
            // Quick links
          </div>
          <ul className="space-y-3 text-silver-200">
            <li><a href="#how" className="hover:text-primary transition-colors">How it works</a></li>
            <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
            
            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </Reveal>
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
