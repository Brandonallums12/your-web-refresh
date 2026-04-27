import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    name: "Marcus T.",
    city: "Los Angeles, CA",
    body: "Got $640 cash for my iPhone 13 Pro in literally 8 minutes. No shipping, no waiting on PayPal. Best decision.",
    rating: 5,
    avatar: "MT",
  },
  {
    name: "Daniela R.",
    city: "Rancho Cucamonga, CA",
    body: "I was about to ship my Galaxy to one of those mail-in sites. So glad I drove over instead — they paid me $90 more than the online quote I got elsewhere.",
    rating: 5,
    avatar: "DR",
  },
  {
    name: "Kevin L.",
    city: "Santa Ana, CA",
    body: "Walked in with three old phones. Walked out with cash for all three. They even printed the data-wipe certificate on the spot.",
    rating: 5,
    avatar: "KL",
  },
  {
    name: "Priya S.",
    city: "Laguna Beach, CA",
    body: "Honest pricing and no pressure. Quote online matched what I got in person to the dollar. Would 100% recommend.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Jordan M.",
    city: "Long Beach, CA",
    body: "Drove up from LBC and it was 100% worth it. Cleanest transaction I've ever had selling a phone. Cash in hand in under 10.",
    rating: 5,
    avatar: "JM",
  },
  {
    name: "Sofia G.",
    city: "Pasadena, CA",
    body: "They beat ecoATM by almost $200 on my Pixel 8 Pro. Friendly staff, no haggling games. I'll be back.",
    rating: 5,
    avatar: "SG",
  },
  {
    name: "Andre W.",
    city: "Anaheim, CA",
    body: "Sold my S24 Ultra and an old iPad in one trip. Got paid Zelle instantly. Super smooth.",
    rating: 5,
    avatar: "AW",
  },
  {
    name: "Mei C.",
    city: "Irvine, CA",
    body: "Was nervous about selling locally but these guys are legit. Real receipt, real wipe certificate, real cash.",
    rating: 5,
    avatar: "MC",
  },
];

export const Reviews = () => {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(REVIEWS.length / 2);

  useEffect(() => {
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, 5000);
    return () => clearInterval(id);
  }, [pageCount]);

  return (
    <section id="reviews" className="relative py-24 md:py-32 px-5 md:px-8 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal direction="left">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
              </div>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-balance max-w-2xl">
                Real sellers, <span className="text-primary">real cash.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="flex items-center gap-2 font-mono text-sm text-silver-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 text-primary fill-primary" />
              ))}
              <span className="ml-2">Verified Google reviews</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
        {/* Fade carousel — 2 reviews per page */}
        <div className="relative min-h-[280px] md:min-h-[260px]">
          {Array.from({ length: pageCount }).map((_, p) => {
            const pair = REVIEWS.slice(p * 2, p * 2 + 2);
            const active = p === page;
            return (
              <div
                key={p}
                aria-hidden={!active}
                className={`grid sm:grid-cols-2 gap-5 transition-opacity duration-700 ease-out ${
                  active
                    ? "opacity-100 relative"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                {pair.map((r) => (
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
            );
          })}
        </div>
        </Reveal>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: pageCount }).map((_, p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              aria-label={`Show reviews page ${p + 1}`}
              className={`h-1.5 transition-all ${
                p === page ? "w-8 bg-primary" : "w-3 bg-silver-600/60 hover:bg-silver-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
