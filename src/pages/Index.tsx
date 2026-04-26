import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Steps } from "@/components/Steps";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { QuoteForm, type QuoteSubmission } from "@/components/QuoteForm";
import { Confirmation } from "@/components/Confirmation";

type Route = "home" | "quote" | "done";

const Index = () => {
  const [route, setRoute] = useState<Route>("home");
  const [confirmed, setConfirmed] = useState<QuoteSubmission | null>(null);

  useEffect(() => {
    document.title = "Techbuyer — We Buy Phones in West Covina | Instant Cash";
    const desc = "Sell your iPhone, Samsung, or Pixel for instant cash in West Covina. Honest quotes, certified data wipe, paid in under 10 minutes.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", desc);
  }, []);

  const goQuote = () => { setRoute("quote"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goHome = () => { setRoute("home"); setConfirmed(null); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const onSubmit = (d: QuoteSubmission) => { setConfirmed(d); setRoute("done"); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header onCTA={goQuote} onLogoClick={goHome} />
      {route === "home" && (
        <>
          <Hero onPrimary={goQuote} />
          <Steps />
          <Reviews />
          <Footer onCTA={goQuote} />
        </>
      )}
      {route === "quote" && <QuoteForm onSubmit={onSubmit} onCancel={goHome} />}
      {route === "done" && confirmed && <Confirmation data={confirmed} onBack={goHome} />}
    </main>
  );
};

export default Index;
