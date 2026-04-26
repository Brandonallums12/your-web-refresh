import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, ChevronRight, Smartphone, Sparkles } from "lucide-react";
import {
  DEVICES,
  CONDITIONS,
  STORAGE_OPTIONS,
  CARRIER_OPTIONS,
  type Device,
  type Condition,
  type Storage,
  type Carrier,
} from "@/data/devices";
import { toast } from "sonner";

export type QuoteSubmission = {
  device: Device;
  storage: Storage;
  carrier: Carrier;
  condition: Condition;
  name: string;
  phone: string;
  email: string;
};

interface QuoteFormProps {
  onSubmit: (data: QuoteSubmission) => void;
  onCancel: () => void;
}

type Brand = Device["brand"];
const BRANDS: Brand[] = ["Apple", "Samsung", "Google"];

export const QuoteForm = ({ onSubmit, onCancel }: QuoteFormProps) => {
  const [step, setStep] = useState(0); // 0 device, 1 condition, 2 contact

  // Device box state (cascading)
  const [brand, setBrand] = useState<Brand | null>(null);
  const [device, setDevice] = useState<Device | null>(null);
  const [storage, setStorage] = useState<Storage | null>(null);
  const [carrier, setCarrier] = useState<Carrier | null>(null);

  // Condition box
  const [condition, setCondition] = useState<Condition | null>(null);

  // Contact
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const deviceComplete = !!(brand && device && storage && carrier);

  const handleSubmit = () => {
    if (!device || !condition || !storage || !carrier) return;
    if (!name.trim() || !phone.trim()) {
      toast.error("Please add your name and phone so we can confirm.");
      return;
    }
    onSubmit({ device, storage, carrier, condition, name, phone, email });
  };

  const models = brand ? DEVICES.filter((d) => d.brand === brand) : [];

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

        {/* STEP 0 — Device box */}
        {step === 0 && (
          <div className="bg-surface/60 backdrop-blur-md border border-border p-6 md:p-10 animate-fade-up">
            <div className="flex items-center gap-3 mb-2">
              <Smartphone className="size-6 text-primary" />
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter">
                Your <span className="text-primary">device</span>.
              </h2>
            </div>
            <p className="text-silver-400 mb-8">Tell us what you're selling.</p>

            {/* Brand */}
            <BoxRow label="Brand">
              <div className="flex flex-wrap gap-2">
                {BRANDS.map((b) => (
                  <Chip
                    key={b}
                    active={brand === b}
                    onClick={() => {
                      setBrand(b);
                      setDevice(null);
                    }}
                  >
                    {b}
                  </Chip>
                ))}
              </div>
            </BoxRow>

            {/* Model */}
            {brand && (
              <BoxRow label="Model">
                <div className="grid sm:grid-cols-2 gap-2">
                  {models.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setDevice(d)}
                      className={`text-left px-4 py-3 border transition-all ${
                        device?.id === d.id
                          ? "border-primary bg-primary/10 shadow-red"
                          : "border-border bg-background/40 hover:border-silver-600"
                      }`}
                    >
                      <div className="font-display text-base uppercase tracking-tight">{d.model}</div>
                    </button>
                  ))}
                </div>
              </BoxRow>
            )}

            {/* Storage */}
            {device && (
              <BoxRow label="Storage">
                <div className="flex flex-wrap gap-2">
                  {STORAGE_OPTIONS.map((s) => (
                    <Chip key={s} active={storage === s} onClick={() => setStorage(s)}>
                      {s}
                    </Chip>
                  ))}
                </div>
              </BoxRow>
            )}

            {/* Carrier */}
            {storage && (
              <BoxRow label="Carrier">
                <div className="flex flex-wrap gap-2">
                  {CARRIER_OPTIONS.map((c) => (
                    <Chip key={c} active={carrier === c} onClick={() => setCarrier(c)}>
                      {c}
                    </Chip>
                  ))}
                </div>
              </BoxRow>
            )}

            <div className="flex justify-end mt-8">
              <button
                disabled={!deviceComplete}
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 bg-grad-red text-white px-7 py-4 uppercase font-bold tracking-widest disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-red transition-all"
              >
                Continue <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 1 — Condition box */}
        {step === 1 && device && (
          <div className="bg-surface/60 backdrop-blur-md border border-border p-6 md:p-10 animate-fade-up">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="size-6 text-primary" />
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter">
                <span className="text-primary">Condition</span>.
              </h2>
            </div>
            <p className="text-silver-400 mb-8">
              Be honest — we verify in person. Selling:{" "}
              <span className="text-white font-semibold">
                {device.brand} {device.model}
              </span>{" "}
              · {storage} · {carrier}
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {CONDITIONS.map((c) => {
                const active = condition?.id === c.id;
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
                    <p className="text-sm text-silver-400 leading-relaxed">{c.blurb}</p>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between mt-8">
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

        {/* STEP 2 — Contact */}
        {step === 2 && device && condition && (
          <div className="bg-surface/60 backdrop-blur-md border border-border p-6 md:p-10 animate-fade-up grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter mb-2">Lock it in.</h2>
              <p className="text-silver-400 mb-7">We'll text you with your custom quote within minutes.</p>

              <div className="space-y-4">
                <Field label="Your name">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-primary"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(626) 555-0123"
                    inputMode="tel"
                    className="w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-primary"
                  />
                </Field>
                <Field label="Email (optional)">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    type="email"
                    className="w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-primary"
                  />
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
                  Send my quote <ArrowRight className="size-4" />
                </button>
              </div>
            </div>

            <aside className="md:col-span-2 bg-background/60 border border-primary/30 p-6 h-fit">
              <div className="text-[10px] font-bold uppercase tracking-widest text-silver-500 mb-3">// Your submission</div>
              <div className="font-display text-lg uppercase tracking-tight">
                {device.brand} {device.model}
              </div>
              <div className="text-silver-300 text-sm mt-1">{storage} · {carrier}</div>
              <div className="text-silver-400 text-sm mb-5">Condition: {condition.label}</div>
              <div className="border-t border-border pt-5">
                <div className="text-xs uppercase tracking-widest text-silver-500 mb-2">Custom cash offer</div>
                <div className="font-mono text-sm text-silver-200 leading-relaxed">
                  Sent to your phone after submission.
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

const BoxRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="mb-6 pb-6 border-b border-border last:border-0 last:mb-0 last:pb-0">
    <div className="text-[10px] font-bold uppercase tracking-widest text-silver-500 mb-3">{label}</div>
    {children}
  </div>
);

const Chip = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all ${
      active
        ? "border-primary bg-primary/15 text-white shadow-red"
        : "border-border bg-background/40 text-silver-300 hover:border-silver-500 hover:text-white"
    }`}
  >
    {children}
  </button>
);

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-[10px] font-bold uppercase tracking-widest text-silver-400 mb-2">{label}</span>
    {children}
  </label>
);
