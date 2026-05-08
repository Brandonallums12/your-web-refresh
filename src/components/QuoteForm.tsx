import { useState, useMemo } from "react";
import { ArrowLeft, Check, ChevronRight, Smartphone, Sparkles, Search, Tablet, Laptop, Gamepad2, Camera, Plane, HelpCircle, ShieldCheck, ShieldAlert } from "lucide-react";
import { z } from "zod";
import {
  DEVICES,
  CONDITIONS,
  CARRIER_OPTIONS,
  getStorageOptions,
  tabletSupportsCellular,
  compareTablets,
  type Device,
  type Condition,
  type Storage,
  type Carrier,
  type Brand,
  type DeviceType,
} from "@/data/devices";
import { toast } from "sonner";

export type LockStatus = "clean" | "locked";

export type QuoteSubmission = {
  device: Device;
  storage: Storage;
  carrier: Carrier;
  condition: Condition;
  lockStatus: LockStatus;
  imei: string;       // empty string if user reports clean
  name: string;
  phone: string;
  email: string;
  wantsShipping?: boolean;
};

// ---------- Zod schemas ----------
const imeiSchema = z
  .string()
  .trim()
  .regex(/^\d{14,17}$/, { message: "IMEI must be 14–17 digits (numbers only)." });

const serialSchema = z
  .string()
  .trim()
  .regex(/^[A-Za-z0-9-]{6,20}$/, { message: "Serial must be 6–20 letters/numbers." });


interface QuoteFormProps {
  onSubmit: (data: QuoteSubmission) => void;
  onCancel: () => void;
}

const CATEGORIES: { id: DeviceType; label: string; icon: typeof Smartphone }[] = [
  { id: "Phone",   label: "Phones",   icon: Smartphone },
  { id: "Tablet",  label: "Tablets",  icon: Tablet },
  { id: "Laptop",  label: "Laptops",  icon: Laptop },
  { id: "Console", label: "Consoles", icon: Gamepad2 },
  { id: "Camera",  label: "Cameras",  icon: Camera },
  { id: "Drone",   label: "Drones",   icon: Plane },
  { id: "Other",   label: "Other",    icon: HelpCircle },
];

export const QuoteForm = ({ onSubmit, onCancel }: QuoteFormProps) => {
  const [step, setStep] = useState(0); // 0 device, 1 condition (+ lock/IMEI), 2 contact

  // Device cascading
  const [category, setCategory] = useState<DeviceType | null>(null);
  const [brand, setBrand] = useState<Brand | null>(null);
  const [device, setDevice] = useState<Device | null>(null);
  const [storage, setStorage] = useState<Storage | null>(null);
  const [carrier, setCarrier] = useState<Carrier | null>(null);
  const [search, setSearch] = useState("");

  const [condition, setCondition] = useState<Condition | null>(null);

  // Verification (anti-stolen)
  const [lockStatus, setLockStatus] = useState<LockStatus | null>(null);
  const [imei, setImei] = useState("");
  const [imeiError, setImeiError] = useState<string | null>(null);

  const [otherDescription, setOtherDescription] = useState("");

  // Brands available for the chosen category (derived from data)
  const availableBrands = useMemo<Brand[]>(() => {
    if (!category) return [];
    const set = new Set<Brand>();
    DEVICES.forEach((d) => d.type === category && set.add(d.brand));
    return Array.from(set);
  }, [category]);

  const allModels = useMemo(() => {
    if (!brand || !category) return [];
    return DEVICES.filter((d) => d.brand === brand && d.type === category);
  }, [brand, category]);

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
    const arr = Array.from(groups.entries()).map(([name, devices]) => ({ name, devices }));
    // For tablets: sort variants within each series, and the series themselves, high-end → low-end
    if (category === "Tablet") {
      for (const g of arr) g.devices.sort(compareTablets);
      arr.sort((a, b) => compareTablets(a.devices[0], b.devices[0]));
    }
    return arr;
  }, [allModels, category]);

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

  const isOther = category === "Other";

  const handleSubmit = () => {
    if (!device || !condition || !lockStatus) return;
    if (!isOther && (!storage || !carrier)) return;
    // Validate IMEI if locked (Other category is auto "clean" so this is skipped)
    if (lockStatus === "locked") {
      const r = (device.type === "Phone" ? imeiSchema : serialSchema).safeParse(imei);
      if (!r.success) {
        setImeiError(r.error.issues[0]?.message ?? "Invalid IMEI.");
        setStep(1);
        return;
      }
    }
    setImeiError(null);
    // For "Other", embed the user's description as the device model so it shows up everywhere.
    const submittedDevice = isOther
      ? { ...device, model: otherDescription.trim() || "Other device" }
      : device;
    onSubmit({
      device: submittedDevice,
      storage: storage ?? ("—" as Storage),
      carrier: carrier ?? ("Unlocked" as Carrier),
      condition,
      lockStatus,
      imei: lockStatus === "locked" ? imei.trim() : "",
      name: "",
      phone: "",
      email: "",
      wantsShipping: false,
    });
  };

  // Auto-advance helpers
  const pickCategory = (c: DeviceType) => {
    setCategory(c);
    setBrand(null);
    setSeries(null);
    setDevice(null);
    setStorage(null);
    setCarrier(null);
    setSearch("");
    if (c === "Other") {
      // Auto-select the synthetic "Other" device — user describes it via textarea.
      const other = DEVICES.find((d) => d.id === "other");
      if (other) {
        setBrand("Other");
        setDevice(other);
        setStorage(null);
        setCarrier("Unlocked");
        setLockStatus(null);
      }
    } else {
      setOtherDescription("");
    }
  };
  const pickBrand = (b: Brand) => {
    setBrand(b);
    setSeries(null);
    setDevice(null);
    setStorage(null);
    setCarrier(null);
    setSearch("");
  };
  const pickSeries = (name: string) => {
    setSeries(name || null);
    setDevice(null);
    setStorage(null);
    setCarrier(null);
  };
  const pickDevice = (d: Device) => {
    setDevice(d);
    const opts = getStorageOptions(d);
    // Sensible defaults: smallest available for tablets, mid-tier for laptops
    if (d.type === "Tablet") {
      setStorage(opts[0] ?? null);
      setCarrier("Other"); // "Wi-Fi only"
    } else if (d.type === "Laptop" || d.type === "Console" || d.type === "Camera" || d.type === "Drone") {
      // pick 256/512 if present, else first
      setStorage(opts.find((o) => o === "256 GB") ?? opts.find((o) => o === "512 GB") ?? opts[0] ?? null);
      setCarrier("Unlocked");
    } else {
      setStorage(null);
      setCarrier(null);
    }
  };
  const pickStorage = (s: Storage) => {
    setStorage(s);
    // Categories without a carrier step — auto-advance straight to condition
    if (category === "Laptop" || category === "Console" || category === "Camera" || category === "Drone") {
      setCarrier("Unlocked");
      setTimeout(() => setStep(1), 180);
    }
  };
  const pickCarrier = (c: Carrier) => {
    setCarrier(c);
    setTimeout(() => setStep(1), 180);
  };
  const pickCondition = (c: Condition) => {
    setCondition(c);
  };
  const pickLock = (s: LockStatus) => {
    setLockStatus(s);
    setImeiError(null);
    if (s === "clean") setImei("");
  };
  const submitConditionStep = () => {
    if (!condition) {
      toast.error("Please select the device's condition.");
      return;
    }
    if (!lockStatus) {
      toast.error("Please confirm the device's account-lock status.");
      return;
    }
    if (lockStatus === "locked") {
      const r = (device.type === "Phone" ? imeiSchema : serialSchema).safeParse(imei);
      if (!r.success) {
        setImeiError(r.error.issues[0]?.message ?? "Invalid IMEI.");
        return;
      }
    }
    setImeiError(null);
    handleSubmit();
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
          {["Device", "Condition"].map((label, i) => (
            <span key={label} className="flex items-center gap-3">
              <button
                onClick={() => i < step && setStep(i)}
                disabled={i > step}
                className={`${i === step ? "text-primary" : i < step ? "text-silver-200 hover:text-primary" : "text-silver-600"} disabled:cursor-not-allowed`}
              >
                0{i + 1} {label}
              </button>
              {i < 1 && <ChevronRight className="size-3 text-silver-600" />}
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

            {/* Category */}
            <BoxRow label="Category">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {CATEGORIES.map(({ id, label, icon: Icon }) => {
                  const active = category === id;
                  return (
                    <button
                      key={id}
                      onClick={() => pickCategory(id)}
                      className={`flex flex-col items-center justify-center gap-2 px-3 py-5 border transition-all ${
                        active
                          ? "border-primary bg-primary/10 shadow-red text-white"
                          : "border-border bg-background/40 text-silver-300 hover:border-silver-500 hover:text-white"
                      }`}
                    >
                      <Icon className={`size-6 ${active ? "text-primary" : "text-silver-400"}`} />
                      <span className="font-display text-xs md:text-sm uppercase tracking-widest">{label}</span>
                    </button>
                  );
                })}
              </div>
            </BoxRow>

            {/* Brand — only brands that make this category */}
            {category && !isOther && (
              <BoxRow label="Brand">
                <div className="flex flex-wrap gap-2">
                  {availableBrands.map((b) => (
                    <Chip key={b} active={brand === b} onClick={() => pickBrand(b)}>
                      {b}
                    </Chip>
                  ))}
                </div>
              </BoxRow>
            )}

            {/* Model — pick a series first, then a variant */}
            {brand && category && !isOther && !series && (
              <BoxRow label="Model line">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-silver-500" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={`Search ${brand} ${category.toLowerCase()}s...`}
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

            {brand && category && !isOther && series && (
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
            {device && !isOther && (
              <BoxRow label="Storage">
                {(device.type === "Tablet" || device.type === "Laptop" || device.type === "Console" || device.type === "Camera" || device.type === "Drone") && (
                  <p className="text-[11px] font-mono text-silver-500 mb-3 uppercase tracking-widest">
                    // Default selected — change only if needed
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {getStorageOptions(device).map((s) => (
                    <Chip key={s} active={storage === s} onClick={() => pickStorage(s)}>
                      {s}
                    </Chip>
                  ))}
                </div>
              </BoxRow>
            )}

            {/* Carrier / Connectivity — laptops/consoles/cameras/drones skip; Wi-Fi-only tablets skip */}
            {storage && device && !isOther && device.type !== "Laptop" && device.type !== "Console" && device.type !== "Camera" && device.type !== "Drone" && !(device.type === "Tablet" && !tabletSupportsCellular(device)) && (
              <BoxRow label={device.type === "Tablet" ? "Connectivity" : "Carrier"}>
                {device.type === "Tablet" && (
                  <p className="text-[11px] font-mono text-silver-500 mb-3 uppercase tracking-widest">
                    // Default: Wi-Fi only — change only if needed
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {(device.type === "Tablet"
                    ? (["Unlocked", "Other"] as Carrier[])
                    : (CARRIER_OPTIONS as readonly Carrier[])
                  ).map((c) => (
                    <Chip key={c} active={carrier === c} onClick={() => pickCarrier(c)}>
                      {device.type === "Tablet" && c === "Unlocked"
                        ? "Wi-Fi + Cellular"
                        : c === "Other" && device.type === "Tablet"
                        ? "Wi-Fi only"
                        : c}
                    </Chip>
                  ))}
                </div>
              </BoxRow>
            )}

            {/* Other category — free-text description */}
            {isOther && (
              <BoxRow label="Tell us what you have">
                <p className="text-[11px] font-mono text-silver-500 mb-3 uppercase tracking-widest">
                  // Brand, model, storage, color — anything you know
                </p>
                <textarea
                  value={otherDescription}
                  onChange={(e) => setOtherDescription(e.target.value.slice(0, 300))}
                  placeholder="e.g. Apple Watch Series 9 45mm GPS, Sony WH-1000XM5 headphones, LG C3 65&quot; OLED TV..."
                  rows={4}
                  maxLength={300}
                  className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary text-sm resize-none"
                />
                <div className="text-[10px] font-mono text-silver-500 mt-2 uppercase tracking-widest text-right">
                  {otherDescription.length}/300
                </div>
              </BoxRow>
            )}

            {/* Continue button — for categories with defaults already set */}
            {device && !isOther && (device.type === "Tablet" || device.type === "Laptop" || device.type === "Console" || device.type === "Camera" || device.type === "Drone") && storage && (
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 bg-grad-red text-white px-7 py-4 uppercase font-bold tracking-widest hover:shadow-red transition-all"
                >
                  Continue <ChevronRight className="size-4" />
                </button>
              </div>
            )}

            {/* Continue button — Other category */}
            {isOther && (
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => {
                    if (otherDescription.trim().length < 3) {
                      toast.error("Please describe what you're selling.");
                      return;
                    }
                    setStep(1);
                  }}
                  disabled={otherDescription.trim().length < 3}
                  className="inline-flex items-center gap-2 bg-grad-red text-white px-7 py-4 uppercase font-bold tracking-widest hover:shadow-red transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  Continue <ChevronRight className="size-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* STEP 1 — Condition + Ownership Verification */}
        {step === 1 && device && (
          <div className="bg-surface/60 backdrop-blur-md border border-border p-6 md:p-10 animate-fade-up">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="size-6 text-primary" />
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter">
                <span className="text-primary">CONDITION</span>
              </h2>
            </div>
            <p className="text-silver-400 mb-8">
              Be honest — we verify in person.<br />
              Selling:{" "}
              <span className="text-white font-semibold">
                {isOther ? otherDescription.trim() || "Other device" : `${device.brand} ${device.model}`}
              </span>
              {!isOther && <> · {storage} · {carrier}</>}
              <br /><br />
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

            {/* --- Ownership / account-lock verification --- */}
            {(() => {
              const isApple = device.brand === "Apple";
              const isOtherCat = device.type === "Other";
              const isAccountDevice = device.type === "Phone" || device.type === "Tablet" || device.type === "Laptop";
              const lockName = isOtherCat
                ? "iCloud / Google"
                : !isAccountDevice
                ? "account / activation"
                : isApple ? "iCloud" : "Google FRP";
              const lockTitle = isOtherCat
                ? "ICLOUD / GOOGLE LOCKED"
                : !isAccountDevice
                ? "ACCOUNT LOCKED"
                : isApple ? "ICLOUD LOCKED" : "GOOGLE FRP LOCKED";
              return (
            <div className="mt-10 pt-8 border-t border-border">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="size-6 text-primary" />
                <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tighter">
                  IS IT <span className="text-primary">{lockTitle}</span>?
                </h3>
              </div>
              <p className="text-silver-400 mb-2">
                Confirm the status — we'll verify on hand-off.{" "}
                <span className="text-white font-semibold">We do not buy devices reported lost or stolen.</span>
              </p>
              <p className="text-silver-500 text-sm font-mono mb-6">
                {isOtherCat
                  ? `// iCloud, Google, Samsung, manufacturer account, or any activation lock`
                  : !isAccountDevice
                  ? `// ${device.type === "Console" ? "PSN / Xbox / Nintendo / Steam account, MDM, or activation lock" : device.type === "Camera" ? "Owner account / cloud lock or registration" : "DJI / Autel / Skydio account binding or activation lock"}`
                  : isApple
                  ? `// ${device.type === "Phone" ? "iCloud / Find My iPhone" : device.type === "Tablet" ? "iCloud / Find My iPad" : "Find My Mac / Activation Lock"}`
                  : `// ${device.type === "Laptop" ? "Microsoft / Google account lock, MDM, or BIOS password" : "Google FRP, Samsung / carrier lock, or MDM"}`}
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <button
                  onClick={() => pickLock("clean")}
                  className={`text-left p-5 border transition-all ${
                    lockStatus === "clean"
                      ? "border-primary bg-primary/10 shadow-red"
                      : "border-border bg-background/40 hover:border-silver-600"
                  }`}
                >
              <div className="flex items-start justify-between mb-2">
                    <div className="font-display text-xl uppercase tracking-tight inline-flex items-center gap-2">
                      <ShieldCheck className="size-5 text-primary" /> Able to Remove {lockName}
                    </div>
                    {lockStatus === "clean" && <Check className="size-5 text-primary" />}
                  </div>
                  <p className="text-sm text-silver-400 leading-relaxed">
                    {!isAccountDevice
                      ? "I can sign out of any linked account and factory reset before hand-off."
                      : isApple
                      ? "I can sign out of iCloud and remove the device from my account. No activation lock."
                      : "I can sign out of my Google account and factory reset. No FRP lock will trigger."}
                  </p>
                </button>

                <button
                  onClick={() => pickLock("locked")}
                  className={`text-left p-5 border transition-all ${
                    lockStatus === "locked"
                      ? "border-primary bg-primary/10 shadow-red"
                      : "border-border bg-background/40 hover:border-silver-600"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-display text-xl uppercase tracking-tight inline-flex items-center gap-2">
                      <ShieldAlert className="size-5 text-primary" /> Still {lockName} Locked
                    </div>
                    {lockStatus === "locked" && <Check className="size-5 text-primary" />}
                  </div>
                  <p className="text-sm text-silver-400 leading-relaxed">
                    {!isAccountDevice
                      ? "Account still linked — we'll need the serial number to verify clean status."
                      : isApple
                      ? "Account still signed in — we'll need the IMEI / serial to verify clean status."
                      : "Google account still signed in — we'll need the IMEI / serial to verify clean status."}
                  </p>
                </button>
              </div>

              {lockStatus === "locked" && (
                <div className="border border-primary/40 bg-primary/5 p-6 md:p-8 mt-6 max-w-2xl animate-fade-up">
                  <Field label={device.type === "Phone" ? "IMEI (14–17 digits)" : "Serial number (6–20 chars)"}>
                    <input
                      value={imei}
                      onChange={(e) => {
                        const cleaned = device.type === "Phone"
                          ? e.target.value.replace(/\D/g, "").slice(0, 17)
                          : e.target.value.replace(/[^A-Za-z0-9-]/g, "").slice(0, 20);
                        setImei(cleaned);
                        if (imeiError) setImeiError(null);
                      }}
                      placeholder={device.type === "Phone" ? (isApple ? "Find IMEI in Settings › General › About" : "Dial *#06# on the device") : "Found on the device or original box"}
                      inputMode={device.type === "Phone" ? "numeric" : "text"}
                      autoComplete="off"
                      maxLength={20}
                      className={`w-full bg-background border px-4 py-3.5 focus:outline-none ${
                        imeiError ? "border-primary" : "border-border focus:border-primary"
                      }`}
                    />
                  </Field>
                  {imeiError && (
                    <p className="text-primary text-xs mt-2 font-mono">{imeiError}</p>
                  )}
                  {isApple && device.type === "Phone" && (
                    <p className="text-silver-400 text-xs mt-3">
                      Not sure where to find it?{" "}
                      <a
                        href="https://www.youtube.com/watch?v=zkdyuZh2uwQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline underline-offset-2 hover:text-white transition-colors"
                      >
                        Watch this short video →
                      </a>
                    </p>
                  )}
                  <p className="text-silver-500 text-xs mt-3 font-mono">
                    // We check this against blacklist & carrier records before any payout.
                  </p>
                </div>
              )}
            </div>
              );
            })()}

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(0)}
                className="inline-flex items-center gap-2 border border-silver-600/60 px-6 py-4 uppercase font-bold tracking-widest text-silver-200 hover:border-primary hover:text-white transition-colors"
              >
                <ArrowLeft className="size-4" /> Back
              </button>
              <button
                onClick={submitConditionStep}
                disabled={!condition || !lockStatus}
                className="inline-flex items-center gap-2 bg-grad-red text-white px-7 py-4 uppercase font-bold tracking-widest hover:shadow-red transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                Continue <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 — Contact */}
        {step === 2 && device && condition && lockStatus && (
          <div className="bg-surface/60 backdrop-blur-md border border-border p-6 md:p-10 animate-fade-up grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter mb-2">Lock it in.</h2>
              <p className="text-silver-400 mb-7">We'll text you with your custom quote within minutes.</p>

              <div className="mt-7">
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
                {isOther ? "Other device" : `${device.brand} ${device.model}`}
              </div>
              {isOther ? (
                <div className="text-silver-300 text-sm mt-1 leading-relaxed">{otherDescription.trim() || "—"}</div>
              ) : (
                <div className="text-silver-300 text-sm mt-1">{storage} · {carrier}</div>
              )}
              <div className="text-silver-400 text-sm mt-1">Condition: {condition.label}</div>
              <div className="text-silver-400 text-sm mb-5 inline-flex items-center gap-1.5 mt-1">
                {lockStatus === "clean" ? (
                  <><ShieldCheck className="size-3.5 text-primary" /> Clean / Unlocked</>
                ) : (
                  <><ShieldAlert className="size-3.5 text-primary" /> {isOther ? "Account-locked · pending check" : "IMEI provided · pending check"}</>
                )}
              </div>
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
