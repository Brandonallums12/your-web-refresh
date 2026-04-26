import { useState, useMemo } from "react";
import { ArrowLeft, Check, ChevronRight, Smartphone, Sparkles, Search } from "lucide-react";
import {
  DEVICES,
  CONDITIONS,
  STORAGE_OPTIONS,
  CARRIER_OPTIONS,
  type Device,
  type Condition,
  type Storage,
  type Carrier,
  type Brand,
  type DeviceType,
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

const BRANDS: Brand[] = ["Apple", "Samsung", "Google"];

export const QuoteForm = ({ onSubmit, onCancel }: QuoteFormProps) => {
  const [step, setStep] = useState(0); // 0 device, 1 condition, 2 contact

  // Device cascading
  const [brand, setBrand] = useState<Brand | null>(null);
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);
  const [device, setDevice] = useState<Device | null>(null);
  const [storage, setStorage] = useState<Storage | null>(null);
  const [carrier, setCarrier] = useState<Carrier | null>(null);
  const [search, setSearch] = useState("");

  const [condition, setCondition] = useState<Condition | null>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const appleHasTablets = brand === "Apple";
  const effectiveType: DeviceType | null = appleHasTablets ? deviceType : "Phone";

  const allModels = useMemo(() => {
    if (!brand || !effectiveType) return [];
    return DEVICES.filter((d) => d.brand === brand && d.type === effectiveType);
  }, [brand, effectiveType]);

  // Group models into a "series" (e.g. "iPhone 15", "Galaxy S24", "Pixel 8", "iPad Pro 11")
  const seriesKey = (model: string): string => {
    // Strip trailing variants: Pro Max, Pro, Plus, Ultra, mini, FE, gen markers, etc.
    return model
      .replace(/\s*\((\d+(st|nd|rd|th)\s*gen|M\d+)\)\s*$/i, "")
      .replace(/\s+(Pro Max|Pro XL|Pro Fold|Pro|Plus|Ultra|mini|Mini|Air|FE|XL|Fold|\+|e|a)\s*$/i, "")
      .replace(/\s+\d+(st|nd|rd|th)\s*gen\s*$/i, "")
      .trim();
  };

  const seriesGroups = useMemo(() => {
    const groups = new Map<string, Device[]>();
    for (const d of allModels) {
      const key = seriesKey(d.model);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(d);
    }
    return Array.from(groups.entries()).map(([name, devices]) => ({ name, devices }));
  }, [allModels]);

  const [series, setSeries] = useState<string | null>(null);

  const filteredSeries = useMemo(() => {
    if (!search.trim()) return seriesGroups;
    const q = search.toLowerCase();
    return seriesGroups
      .map((g) => ({
        ...g,
        devices: g.devices.filter((d) => d.model.toLowerCase().includes(q)),
      }))
      .filter((g) => g.devices.length > 0 || g.name.toLowerCase().includes(q));
  }, [seriesGroups, search]);

  const variantsOfSeries = useMemo(
    () => (series ? seriesGroups.find((g) => g.name === series)?.devices ?? [] : []),
    [series, seriesGroups]
  );

  const handleSubmit = () => {
    if (!device || !condition || !storage || !carrier) return;
    if (!name.trim() || !phone.trim()) {
      toast.error("Please add your name and phone so we can confirm.");
      return;
    }
    onSubmit({ device, storage, carrier, condition, name, phone, email });
  };

  // Auto-advance helpers
  const pickBrand = (b: Brand) => {
    setBrand(b);
    setDeviceType(b === "Apple" ? null : "Phone");
    setSeries(null);
    setDevice(null);
    setStorage(null);
    setCarrier(null);
    setSearch("");
  };
  const pickType = (t: DeviceType) => {
    setDeviceType(t);
    setSeries(null);
    setDevice(null);
    setStorage(null);
    setCarrier(null);
  };
  const pickSeries = (name: string) => {
    setSeries(name);
    setDevice(null);
    setStorage(null);
    setCarrier(null);
  };
  const pickDevice = (d: Device) => {
    setDevice(d);
    setStorage(null);
    setCarrier(null);
  };
  const pickStorage = (s: Storage) => setStorage(s);
  const pickCarrier = (c: Carrier) => {
    setCarrier(c);
    // auto-advance to condition
    setTimeout(() => setStep(1), 180);
  };
  const pickCondition = (c: Condition) => {
    setCondition(c);
    setTimeout(() => setStep(2), 180);
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-grad-hero py-16 md:py-24 px-5 md:px-8 overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-4xl">
        {/* progress */}
        <div className="flex items-center gap-3 mb-10 font-mono text-xs uppercase tracking-[0.25em] text-silver-400 flex-wrap">
          <button onClick={onCancel} className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="size-3.5" /> Back
          </button>
          <span className="text-silver-600">/</span>
          {["Device", "Condition", "Contact"].map((label, i) => (
            <span key={label} className="flex items-center gap-3">
              <button
                onClick={() => i < step && setStep(i)}
                disabled={i > step}
                className={`${i === step ? "text-primary" : i < step ? "text-silver-200 hover:text-primary" : "text-silver-600"} disabled:cursor-not-allowed`}
              >
                0{i + 1} {label}
              </button>
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
            <p className="text-silver-400 mb-8">One tap leads to the next — we'll fly through this.</p>

            {/* Brand */}
            <BoxRow label="Brand">
              <div className="flex flex-wrap gap-2">
                {BRANDS.map((b) => (
                  <Chip key={b} active={brand === b} onClick={() => pickBrand(b)}>
                    {b}
                  </Chip>
                ))}
              </div>
            </BoxRow>

            {/* Type (Apple only) */}
            {brand === "Apple" && (
              <BoxRow label="Type">
                <div className="flex flex-wrap gap-2">
                  {(["Phone", "Tablet"] as DeviceType[]).map((t) => (
                    <Chip key={t} active={deviceType === t} onClick={() => pickType(t)}>
                      {t === "Phone" ? "iPhone" : "iPad"}
                    </Chip>
                  ))}
                </div>
              </BoxRow>
            )}

            {/* Model — pick a series first, then a variant */}
            {brand && effectiveType && !series && (
              <BoxRow label="Model line">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-silver-500" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={`Search ${effectiveType === "Tablet" ? "iPad" : brand} models...`}
                    className="w-full bg-background border border-border pl-10 pr-4 py-3 focus:outline-none focus:border-primary text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {filteredSeries.map((g) => (
                    <button
                      key={g.name}
                      onClick={() => pickSeries(g.name)}
                      className="group relative text-left px-4 py-4 border border-border bg-background/40 hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      <div className="font-display text-sm md:text-base uppercase tracking-tight leading-tight">
                        {g.name}
                      </div>
                      <div className="text-[10px] font-mono text-silver-500 mt-1 uppercase tracking-widest">
                        {g.devices.length} {g.devices.length === 1 ? "model" : "models"}
                      </div>
                    </button>
                  ))}
                  {filteredSeries.length === 0 && (
                    <div className="text-silver-500 text-sm col-span-full py-3">No matches.</div>
                  )}
                </div>
              </BoxRow>
            )}

            {brand && effectiveType && series && (
              <BoxRow label={`${series} — pick variant`}>
                <div className="flex flex-wrap gap-2 mb-1">
                  <button
                    onClick={() => pickSeries("")}
                    className="text-[10px] font-mono uppercase tracking-widest text-silver-400 hover:text-primary inline-flex items-center gap-1"
                  >
                    <ArrowLeft className="size-3" /> change line
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 mt-3">
                  {variantsOfSeries.map((d) => {
                    const variantLabel = d.model.replace(series, "").trim() || "Standard";
                    const active = device?.id === d.id;
                    return (
                      <button
                        key={d.id}
                        onClick={() => pickDevice(d)}
                        className={`text-left px-4 py-3 border transition-all ${
                          active
                            ? "border-primary bg-primary/10 shadow-red"
                            : "border-border bg-background/40 hover:border-silver-600"
                        }`}
                      >
                        <div className="font-display text-base uppercase tracking-tight">
                          {variantLabel}
                        </div>
                        <div className="text-[10px] font-mono text-silver-500 uppercase tracking-widest mt-0.5">
                          {d.model}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </BoxRow>
            )}

            {/* Storage */}
            {device && (
              <BoxRow label="Storage">
                <div className="flex flex-wrap gap-2">
                  {STORAGE_OPTIONS.map((s) => (
                    <Chip key={s} active={storage === s} onClick={() => pickStorage(s)}>
                      {s}
                    </Chip>
                  ))}
                </div>
              </BoxRow>
            )}

            {/* Carrier */}
            {storage && (
              <BoxRow label={device?.type === "Tablet" ? "Connectivity" : "Carrier"}>
                <div className="flex flex-wrap gap-2">
                  {(device?.type === "Tablet"
                    ? (["Unlocked", "Other"] as Carrier[])
                    : (CARRIER_OPTIONS as readonly Carrier[])
                  ).map((c) => (
                    <Chip key={c} active={carrier === c} onClick={() => pickCarrier(c)}>
                      {device?.type === "Tablet" && c === "Unlocked" ? "Wi-Fi + Cellular" : c === "Other" && device?.type === "Tablet" ? "Wi-Fi only" : c}
                    </Chip>
                  ))}
                </div>
                <p className="text-xs text-silver-500 mt-3 font-mono">// auto-advances when selected</p>
              </BoxRow>
            )}
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
                    onClick={() => pickCondition(c)}
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

            <div className="flex justify-start mt-8">
              <button
                onClick={() => setStep(0)}
                className="inline-flex items-center gap-2 border border-silver-600/60 px-6 py-4 uppercase font-bold tracking-widest text-silver-200 hover:border-primary hover:text-white transition-colors"
              >
                <ArrowLeft className="size-4" /> Back
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
                  Send my quote
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
