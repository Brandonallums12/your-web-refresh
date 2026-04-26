import { CheckCircle2, MapPin, Clock, Phone } from "lucide-react";
import type { QuoteSubmission } from "./QuoteForm";

interface ConfirmationProps {
  data: QuoteSubmission;
  onBack: () => void;
}

export const Confirmation = ({ data, onBack }: ConfirmationProps) => {
  const code = `TB-${Date.now().toString(36).slice(-6).toUpperCase()}`;
  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-grad-hero py-16 md:py-24 px-5 md:px-8 overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-3xl">
        <div className="bg-surface/60 backdrop-blur-md border border-primary/40 p-8 md:p-12 animate-fade-up">
          <CheckCircle2 className="size-14 text-primary mb-6" strokeWidth={1.5} />
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">
            // Quote confirmation #{code}
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4">
            You're <span className="text-primary">locked in</span>, {data.name.split(" ")[0]}.
          </h1>
          <p className="text-silver-300 text-lg max-w-xl">
            We'll text <span className="font-mono text-white">{data.phone}</span> shortly to confirm.
            Bring your <span className="text-white font-semibold">{data.device.brand} {data.device.model}</span> to
            our shop and walk out with cash.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="bg-background border border-border p-6">
              <div className="text-[10px] uppercase tracking-widest text-silver-500 mb-1">Cash payout</div>
              <div className="font-mono text-5xl font-bold text-primary">${data.quote}</div>
              <div className="text-xs text-silver-500 mt-2 font-mono uppercase tracking-widest">
                {data.condition.label} condition · 48 hr lock
              </div>
            </div>
            <div className="bg-background border border-border p-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 mt-0.5 text-primary shrink-0" />
                <span className="text-silver-200">1240 W Covina Pkwy<br />West Covina, CA 91790</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="size-4 mt-0.5 text-primary shrink-0" />
                <span className="text-silver-200">Mon–Sat 10am–7pm · Sun 11am–5pm</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="size-4 mt-0.5 text-primary shrink-0" />
                <a href="tel:6265550198" className="text-silver-200 hover:text-primary font-mono">(626) 555-0198</a>
              </div>
            </div>
          </div>

          <button
            onClick={onBack}
            className="mt-10 inline-flex items-center gap-2 border border-silver-600/60 px-7 py-4 uppercase font-bold tracking-widest text-silver-200 hover:border-primary hover:text-white transition-colors"
          >
            Back to home
          </button>
        </div>
      </div>
    </section>
  );
};
