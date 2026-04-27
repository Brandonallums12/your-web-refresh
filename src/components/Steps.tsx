import { ClipboardCheck, Store, Banknote } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    icon: ClipboardCheck,
    title: "Lock Your Quote",
    body: "Tell us your model and condition online and we'll beat kiosk prices with an instant cash offer — locked in for 48 hours.",
  },
  {
    n: "02",
    icon: Store,
    title: "Meet Up Locally",
    body: "We'll arrange a safe local meetup near the West Covina area. Quick inspection together to confirm condition and functionality — usually wraps up in about 10 minutes.",
  },
  {
    n: "03",
    icon: Banknote,
    title: "Get Paid On The Spot",
    body: "Walk away with payment your way — Cash, Zelle, and other options available. Your data is securely wiped before we part ways.",
  },
];

export const Steps = () => {
  return (
    <section id="how" className="relative py-24 md:py-32 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="left">
            <div className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
              // The Process
            </div>
          </Reveal>
          <Reveal direction="right" delay={80}>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-balance">
              Three steps. <span className="text-stroke-red">No catch.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-4 relative">
          {/* connecting line */}
          <div className="absolute top-8 md:top-14 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const featured = i === 2;
            return (
              <Reveal key={s.n} delay={i * 140} className="relative">
                <div className="relative bg-surface p-1 border border-border hover:border-primary/40 transition-colors group h-full">
                  <div className="bg-background/60 h-full p-3 sm:p-6 md:p-8 flex flex-col">
                    <div className="flex items-start justify-between mb-4 md:mb-8">
                      <Reveal direction="scale" delay={i * 140 + 200} duration={500}>
                        <div className="size-10 sm:size-14 md:size-16 border border-silver-600/60 bg-black text-silver-200 flex items-center justify-center font-mono text-sm sm:text-lg md:text-xl font-bold">
                          {s.n}
                        </div>
                      </Reveal>
                      <Icon
                        className={`size-4 sm:size-6 md:size-7 ${featured ? "text-primary" : "text-silver-500"} group-hover:text-primary transition-colors`}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="font-display text-sm sm:text-xl md:text-2xl uppercase tracking-tight mb-2 md:mb-3">{s.title}</h3>
                    <p className="text-silver-400 leading-relaxed text-pretty text-xs sm:text-sm md:text-base">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

