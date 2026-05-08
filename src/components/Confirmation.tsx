import { CheckCircle2 } from "lucide-react";
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
            We'll text <span className="font-mono text-white">{data.phone}</span> shortly with your
            custom cash offer for your{" "}
            <span className="text-white font-semibold">
              {data.device.type === "Other" ? data.device.model : `${data.device.brand} ${data.device.model}`}
            </span>
            {data.device.type !== "Other" && <> ({data.storage} · {data.carrier})</>}.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="bg-background border border-border p-6">
              <div className="text-[10px] uppercase tracking-widest text-silver-500 mb-1">Submission</div>
              <div className="font-display text-2xl uppercase tracking-tight text-white">
                {data.device.type === "Other" ? "Other device" : data.device.model}
              </div>
              <div className="text-xs text-silver-400 mt-2 font-mono uppercase tracking-widest">
                {data.condition.label}
                {data.device.type !== "Other" && <> · {data.storage} · {data.carrier}</>}
              </div>
            </div>
          <div className="bg-background border border-border p-6">
            <div className="text-[10px] uppercase tracking-widest text-silver-500 mb-1">Submission</div>
            <div className="font-display text-2xl uppercase tracking-tight text-white">
              {data.device.type === "Other" ? "Other device" : data.device.model}
            </div>
            <div className="text-xs text-silver-400 mt-2 font-mono uppercase tracking-widest">
              {data.condition.label}
              {data.device.type !== "Other" && <> · {data.storage} · {data.carrier}</>}
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
