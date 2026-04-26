import { ArrowRight, ShieldCheck, Zap, MapPin } from "lucide-react";
import { LiveBadge } from "./LiveBadge";


interface HeroProps {
  onPrimary: () => void;
}

export const Hero = ({ onPrimary }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-grad-hero">
      {/* grid noise + glow */}
      <div className="absolute inset-0 grid-noise opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Copy */}
        <div className="lg:col-span-7 text-center lg:text-left animate-fade-up">
          <LiveBadge className="mb-7">Paying top dollar in West Covina</LiveBadge>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-[110px] leading-[0.88] uppercase tracking-tighter text-balance">
            Cash Out
            <br />
            <span className="text-stroke">Your Tech</span>
            <span className="text-primary">.</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-silver-300 max-w-[52ch] mx-auto lg:mx-0 text-pretty">
            We buy iPhones, Samsungs, and Pixels for instant cash. Walk in with your old phone,
            walk out with money — usually in under <span className="text-white font-semibold">10 minutes</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={onPrimary}
              className="group inline-flex items-center justify-center gap-3 bg-grad-red text-white px-9 py-5 uppercase font-bold tracking-widest text-base hover:shadow-red transition-all"
            >
              Get Instant Quote
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 border border-silver-600/60 bg-surface/60 backdrop-blur px-9 py-5 uppercase font-bold tracking-widest text-base text-silver-100 hover:border-primary/60 hover:text-white transition-colors"
            >
              How it works
            </a>
          </div>

          {/* trust strip */}
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 justify-center lg:justify-start text-sm text-silver-400">
            <span className="inline-flex items-center gap-2"><Zap className="size-4 text-primary" />Pay in 10 min</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-primary" />Certified data wipe</span>
            <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-primary" />Local West Covina shop</span>
          </div>
        </div>

      </div>

    </section>
  );
};
