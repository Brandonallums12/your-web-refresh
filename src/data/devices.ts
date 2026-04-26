export type Device = {
  id: string;
  brand: "Apple" | "Samsung" | "Google";
  model: string;
};

export const DEVICES: Device[] = [
  { id: "ip15pm", brand: "Apple",   model: "iPhone 15 Pro Max" },
  { id: "ip15p",  brand: "Apple",   model: "iPhone 15 Pro" },
  { id: "ip15",   brand: "Apple",   model: "iPhone 15" },
  { id: "ip14pm", brand: "Apple",   model: "iPhone 14 Pro Max" },
  { id: "ip14p",  brand: "Apple",   model: "iPhone 14 Pro" },
  { id: "ip14",   brand: "Apple",   model: "iPhone 14" },
  { id: "ip13p",  brand: "Apple",   model: "iPhone 13 Pro" },
  { id: "ip13",   brand: "Apple",   model: "iPhone 13" },
  { id: "ip12",   brand: "Apple",   model: "iPhone 12" },
  { id: "s24u",   brand: "Samsung", model: "Galaxy S24 Ultra" },
  { id: "s23u",   brand: "Samsung", model: "Galaxy S23 Ultra" },
  { id: "s23",    brand: "Samsung", model: "Galaxy S23" },
  { id: "zf5",    brand: "Samsung", model: "Galaxy Z Fold 5" },
  { id: "p8p",    brand: "Google",  model: "Pixel 8 Pro" },
  { id: "p8",     brand: "Google",  model: "Pixel 8" },
  { id: "p7p",    brand: "Google",  model: "Pixel 7 Pro" },
];

export const STORAGE_OPTIONS = ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB"] as const;
export const CARRIER_OPTIONS = ["Unlocked", "AT&T", "T-Mobile", "Verizon", "Other"] as const;

export type Storage = typeof STORAGE_OPTIONS[number];
export type Carrier = typeof CARRIER_OPTIONS[number];

export type Condition = {
  id: "flawless" | "good" | "fair" | "broken";
  label: string;
  blurb: string;
};

export const CONDITIONS: Condition[] = [
  { id: "flawless", label: "Flawless",         blurb: "Like new. No scratches, fully functional." },
  { id: "good",     label: "Good",             blurb: "Minor wear, screen perfect, all features work." },
  { id: "fair",     label: "Fair",             blurb: "Visible wear or small chips, but works fine." },
  { id: "broken",   label: "Cracked / Broken", blurb: "Cracked screen, dents, or partial function." },
];
