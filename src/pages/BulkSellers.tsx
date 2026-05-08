import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LiveBadge } from "@/components/LiveBadge";


const BulkSellers = () => {
  useEffect(() => {
    const existing = document.getElementById("msgsndr-form-embed");
    if (existing) return;
    const script = document.createElement("script");
    script.id = "msgsndr-form-embed";
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-grad-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-silver-300 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest mb-10"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>

        <div className="text-center mb-10">
          <LiveBadge className="mb-6 mx-auto">For wholesalers & resellers</LiveBadge>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tighter text-balance leading-[0.9]">
            Bulk <span className="text-primary">Sellers</span>
          </h1>
          <p className="mt-5 text-lg text-silver-200 max-w-xl mx-auto text-pretty">
            Selling <span className="text-white font-semibold">5+ devices</span> at a time?
            We offer <span className="text-primary font-semibold">Special Pricing</span> beyond
            our standard quotes. We'd love to buy your lot and build a long-term relationship
            with you — and yes, we <span className="text-white font-semibold">accept shipped lots</span> too.
          </p>
        </div>

        <iframe
          src="https://api.leadconnectorhq.com/widget/form/FSTNp5L5U1IKJRtxTSpo"
          style={{ width: "100%", height: "557px", border: "none", borderRadius: "3px" }}
          id="inline-FSTNp5L5U1IKJRtxTSpo"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="PhoneFlipping"
          data-height="557"
          data-layout-iframe-id="inline-FSTNp5L5U1IKJRtxTSpo"
          data-form-id="FSTNp5L5U1IKJRtxTSpo"
          title="PhoneFlipping"
        />
        </div>
      </div>
    </main>
  );
};

export default BulkSellers;
