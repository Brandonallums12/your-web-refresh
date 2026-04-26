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

          <p className="mt-7 text-xl md:text-2xl leading-relaxed text-silver-200 max-w-[56ch] mx-auto lg:mx-0 text-pretty font-light">
            We buy <span className="text-white font-semibold">iPhones</span>,{" "}
            <span className="text-white font-semibold">Samsungs</span>, and{" "}
            <span className="text-white font-semibold">more</span> for{" "}
            <span className="text-primary font-semibold">instant cash</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 border border-silver-600/60 bg-surface/60 backdrop-blur px-9 py-5 uppercase font-bold tracking-widest text-base text-silver-100 hover:border-primary/60 hover:text-white transition-colors"
            >
              How it works
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
