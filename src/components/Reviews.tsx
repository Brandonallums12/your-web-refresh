import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcus T.",
    city: "West Covina, CA",
    body: "Got $640 cash for my iPhone 13 Pro in literally 8 minutes. No shipping, no waiting on PayPal. Best decision.",
    rating: 5,
    avatar: "MT",
  },
  {
    name: "Daniela R.",
    city: "Covina, CA",
    body: "I was about to ship my Galaxy to one of those mail-in sites. So glad I drove over instead — they paid me $90 more than the online quote I got elsewhere.",
    rating: 5,
    avatar: "DR",
  },
  {
    name: "Kevin L.",
    city: "Baldwin Park, CA",
    body: "Walked in with three old phones. Walked out with cash for all three. They even printed the data-wipe certificate on the spot.",
    rating: 5,
    avatar: "KL",
  },
  {
    name: "Priya S.",
    city: "West Covina, CA",
    body: "Honest pricing and no pressure. Quote online matched what I got in person to the dollar. Would 100% recommend.",
    rating: 5,
    avatar: "PS",
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="relative py-24 md:py-32 px-5 md:px-8 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
              // 4.9 / 5 from 320+ neighbors
            </div>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-balance max-w-2xl">
              Locals don't <span className="text-primary">B.S.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-sm text-silver-300">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 text-primary fill-primary" />
            ))}
            <span className="ml-2">Verified Google reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              className="relative bg-background border border-border p-7 hover:border-primary/40 transition-colors group flex flex-col"
            >
              <Quote className="absolute top-5 right-5 size-8 text-primary/30 group-hover:text-primary/60 transition-colors" />
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="size-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-silver-200 leading-relaxed text-pretty mb-6 flex-1">"{r.body}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="size-10 bg-grad-red flex items-center justify-center font-display text-sm text-white">
                  {r.avatar}
                </div>
                <div>
                  <div className="font-display uppercase text-sm tracking-wide">{r.name}</div>
                  <div className="text-xs text-silver-500 font-mono uppercase tracking-widest mt-0.5">
                    {r.city}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
