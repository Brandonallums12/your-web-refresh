import { ArrowRight, ShieldCheck, Zap, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LiveBadge } from "./LiveBadge";


interface HeroProps {
  onPrimary: () => void;
}

export const Hero = ({ onPrimary }: HeroProps) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-grad-hero">
      {/* grid noise + glow */}
      <div className="absolute inset-0 grid-noise opacity-40 pointer-events-none" />
      <div className="absolute inset-0 grid-animated opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-scan overflow-hidden pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/20 blur-[140px] rounded-full pointer-events-none motion-reduce:!transform-none"
        style={{
          transform: `translate(-50%, calc(-50% + ${scrollY * 0.25}px)) scale(${1 + Math.min(scrollY, 600) * 0.0004})`,
          transition: "transform 120ms linear",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Copy */}
        <div className="lg:col-span-12 flex flex-col items-center text-center animate-fade-up">
          <LiveBadge className="mb-7">Paying top dollar in West Covina</LiveBadge>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-[110px] leading-[0.88] uppercase tracking-tighter text-balance">
            Cash Out
            <br />
            <span className="text-stroke">Your Tech</span>
            <span className="text-primary">.</span>
          </h1>

          <p className="mt-7 text-xl md:text-2xl leading-relaxed text-silver-200 max-w-[56ch] mx-auto text-pretty font-light">
            We buy <span className="text-white font-semibold">iPhones</span>,{" "}
            <span className="text-white font-semibold">Samsungs</span>, and{" "}
            <span className="text-white font-semibold">more</span> for{" "}
            <span className="text-primary font-semibold">Instant Cash</span>.
          </p>

<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onPrimary}
              className="group inline-flex items-center justify-center gap-3 bg-grad-red text-white px-9 py-5 uppercase font-bold tracking-widest text-base hover:shadow-red transition-all animate-float"
            >
              Get Instant Quote
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/bulk-sellers"
              className="group inline-flex items-center justify-center gap-3 border-2 border-silver-700 text-white px-9 py-5 uppercase font-bold tracking-widest text-base hover:border-primary hover:text-primary transition-all animate-float-delayed"
            >
              Bulk Sellers
            </Link>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-4 justify-center">
            <a
            href="https://www.instagram.com/techbuyer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center size-12 rounded-xl bg-silver-800/50 border border-silver-700/50 text-silver-300 hover:text-white hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-float"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="size-5 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@techbuyerr_"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center size-12 rounded-xl bg-silver-800/50 border border-silver-700/50 text-silver-300 hover:text-white hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-float-delayed"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" className="size-5 fill-current">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
