import { ClipboardCheck, Store, Banknote } from "lucide-react";

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
    body: "We'll arrange a safe local meetup in the West Covina area. Quick inspection together to confirm condition and functionality — usually wraps up in about 3 minutes.",
  },
  {
    n: "03",
    icon: Banknote,
    title: "Get Paid On The Spot",
    body: "Walk away with payment your way — cash, Zelle, and other options available. Your data is securely wiped before we part ways.",
  },
];

export const Steps = () => {
  return (
    <section id="how" className="relative py-24 md:py-32 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            // The Process
          </div>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-balance">
            Three steps. <span className="text-stroke-red">No catch.</span>
          </h2>
          <p className="mt-5 text-silver-400 text-lg text-pretty">
            We made selling your phone faster than ordering a coffee.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-4 relative">
          {/* connecting line */}
          <div className="absolute top-8 md:top-14 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const featured = i === 2;
            return (
              <div
                key={s.n}
                className="relative bg-surface p-1 border border-border hover:border-primary/40 transition-colors group"
              >
                <div className="bg-background/60 h-full p-3 sm:p-6 md:p-8 flex flex-col">
                  <div className="flex items-start justify-between mb-4 md:mb-8">
                    <div
                      className={`size-10 sm:size-14 md:size-16 border flex items-center justify-center font-mono text-sm sm:text-lg md:text-xl font-bold ${
                        featured
                          ? "bg-grad-red border-primary text-white shadow-red"
                          : "bg-background border-silver-600/60 text-silver-200"
                      }`}
                    >
                      {s.n}
                    </div>
                    <Icon
                      className={`size-4 sm:size-6 md:size-7 ${featured ? "text-primary" : "text-silver-500"} group-hover:text-primary transition-colors`}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="font-display text-sm sm:text-xl md:text-2xl uppercase tracking-tight mb-2 md:mb-3">{s.title}</h3>
                  <p className="text-silver-400 leading-relaxed text-pretty text-xs sm:text-sm md:text-base">{s.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
