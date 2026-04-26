import { useMemo, useState } from "react";
import { ArrowRight, ArrowLeft, Search, Check, ChevronRight } from "lucide-react";
import { DEVICES, CONDITIONS, calcQuote, type Device, type Condition } from "@/data/devices";
import { toast } from "sonner";

export type QuoteSubmission = {
  device: Device;
  condition: Condition;
  quote: number;
  name: string;
  phone: string;
  email: string;
};

interface QuoteFormProps {
  onSubmit: (data: QuoteSubmission) => void;
  onCancel: () => void;
}

export const QuoteForm = ({ onSubmit, onCancel }: QuoteFormProps) => {
  const [step, setStep] = useState(0); // 0 device, 1 condition, 2 contact
  const [device, setDevice] = useState<Device | null>(null);
  const [condition, setCondition] = useState<Condition | null>(null);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState<"All" | Device["brand"]>("All");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const filtered = useMemo(() => {
    return DEVICES.filter((d) => brand === "All" || d.brand === brand).filter((d) =>
      `${d.brand} ${d.model}`.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, brand]);

  const quote = device && condition ? calcQuote(device, condition) : 0;

  const handleSubmit = () => {
    if (!device || !condition) return;
    if (!name.trim() || !phone.trim()) {
      toast.error("Please add your name and phone so we can confirm.");
      return;
    }
    onSubmit({ device, condition, quote, name, phone, email });
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-grad-hero py-16 md:py-24 px-5 md:px-8 overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-4xl">
        {/* progress */}
        <div className="flex items-center gap-3 mb-10 font-mono text-xs uppercase tracking-[0.25em] text-silver-400">
          <button onClick={onCancel} className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="size-3.5" /> Back
          </button>
          <span className="text-silver-600">/</span>
          {["Device", "Condition", "Contact"].map((label, i) => (
            <span key={label} className="flex items-center gap-3">
              <span className={i === step ? "text-primary" : i < step ? "text-silver-200" : "text-silver-600"}>
                0{i + 1} {label}
              </span>
              {i < 2 && <ChevronRight className="size-3 text-silver-600" />}
            </span>
          ))}
        </div>

        <div className="bg-surface/60 backdrop-blur-md border border-border p-6 md:p-10">
          {step === 0 && (
            <div className="animate-fade-up">
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter mb-2">
                Pick your <span className="text-primary">device</span>.
              </h2>
              <p className="text-silver-400 mb-7">Search 140+ models we currently buy.</p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-silver-500" />
                  <input
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search iPhone 14, Galaxy S23..."
                    className="w-full bg-background border border-border pl-11 pr-4 py-3.5 text-white placeholder:text-silver-500 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex gap-1.5 bg-background border border-border p-1">
                  {(["All", "Apple", "Samsung", "Google"] as const).map((b) => (
                    <button
                      key={b}
                      onClick={() => setBrand(b)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                        brand === b ? "bg-grad-red text-white" : "text-silver-400 hover:text-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 max-h-[420px] overflow-y-auto pr-1">
                {filtered.length === 0 && (
                  <p className="col-span-2 text-center py-8 text-silver-500 font-mono text-sm">
                    No matches. Try another search.
                  </p>
                )}
                {filtered.map((d) => {
                  const active = device?.id === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setDevice(d)}
                      className={`text-left p-4 border transition-all ${
                        active
                          ? "border-primary bg-primary/10 shadow-red"
                          : "border-border bg-background/40 hover:border-silver-600"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-silver-500 mb-0.5">
                            {d.brand}
                          </div>
                          <div className="font-display text-base uppercase tracking-tight">{d.model}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] uppercase tracking-widest text-silver-500">Up to</div>
                          <div className="font-mono text-lg font-bold text-primary">${d.basePrice}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end mt-7">
                <button
                  disabled={!device}
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 bg-grad-red text-white px-7 py-4 uppercase font-bold tracking-widest disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-red transition-all"
                >
                  Continue <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          )}

          {step === 1 && device && (
            <div className="animate-fade-up">
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter mb-2">
                What's the <span className="text-primary">condition</span>?
              </h2>
              <p className="text-silver-400 mb-7">
                Be honest — we verify in person. Selling: <span className="text-white font-semibold">{device.brand} {device.model}</span>
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {CONDITIONS.map((c) => {
                  const active = condition?.id === c.id;
                  const est = calcQuote(device, c);
                  return (
                    <button
                      key={c.id}
                      onClick={() => setCondition(c)}
                      className={`text-left p-5 border transition-all ${
                        active
                          ? "border-primary bg-primary/10 shadow-red"
                          : "border-border bg-background/40 hover:border-silver-600"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-display text-xl uppercase tracking-tight">{c.label}</div>
                        {active && <Check className="size-5 text-primary" />}
                      </div>
                      <p className="text-sm text-silver-400 mb-4 leading-relaxed">{c.blurb}</p>
                      <div className="flex items-baseline gap-2 pt-3 border-t border-border">
                        <span className="text-[10px] uppercase tracking-widest text-silver-500">Estimate</span>
                        <span className="font-mono text-2xl font-bold text-primary">${est}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between mt-7">
                <button
                  onClick={() => setStep(0)}
                  className="inline-flex items-center gap-2 border border-silver-600/60 px-6 py-4 uppercase font-bold tracking-widest text-silver-200 hover:border-primary hover:text-white transition-colors"
                >
                  <ArrowLeft className="size-4" /> Back
                </button>
                <button
                  disabled={!condition}
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 bg-grad-red text-white px-7 py-4 uppercase font-bold tracking-widest disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-red transition-all"
                >
                  Continue <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && device && condition && (
            <div className="animate-fade-up grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter mb-2">
                  Lock it in.
                </h2>
                <p className="text-silver-400 mb-7">We'll text you a confirmation and hold the price for 48 hours.</p>

                <div className="space-y-4">
                  <Field label="Your name">
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe"
                      className="w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-primary" />
                  </Field>
                  <Field label="Phone">
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(626) 555-0123" inputMode="tel"
                      className="w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-primary" />
                  </Field>
                  <Field label="Email (optional)">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" type="email"
                      className="w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-primary" />
                  </Field>
                </div>

                <div className="flex justify-between mt-7">
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 border border-silver-600/60 px-6 py-4 uppercase font-bold tracking-widest text-silver-200 hover:border-primary hover:text-white transition-colors"
                  >
                    <ArrowLeft className="size-4" /> Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 bg-grad-red text-white px-7 py-4 uppercase font-bold tracking-widest hover:shadow-red transition-all"
                  >
                    Lock my quote <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>

              <aside className="md:col-span-2 bg-background/60 border border-primary/30 p-6 h-fit">
                <div className="text-[10px] font-bold uppercase tracking-widest text-silver-500 mb-3">// Your offer</div>
                <div className="font-display text-lg uppercase tracking-tight">{device.brand} {device.model}</div>
                <div className="text-silver-400 text-sm mb-5">Condition: {condition.label}</div>
                <div className="border-t border-border pt-5">
                  <div className="text-xs uppercase tracking-widest text-silver-500 mb-1">Cash payout</div>
                  <div className="font-mono text-5xl font-bold text-primary">${quote}</div>
                  <div className="text-xs text-silver-500 mt-2 font-mono uppercase tracking-widest">
                    Locked for 48 hrs
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-[10px] font-bold uppercase tracking-widest text-silver-400 mb-2">{label}</span>
    {children}
  </label>
);
