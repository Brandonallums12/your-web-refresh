export type Device = {
  id: string;
  brand: "Apple" | "Samsung" | "Google";
  model: string;
  basePrice: number; // top dollar for "Flawless" condition
};

export const DEVICES: Device[] = [
  { id: "ip15pm", brand: "Apple",   model: "iPhone 15 Pro Max", basePrice: 920 },
  { id: "ip15p",  brand: "Apple",   model: "iPhone 15 Pro",     basePrice: 780 },
  { id: "ip15",   brand: "Apple",   model: "iPhone 15",         basePrice: 600 },
  { id: "ip14pm", brand: "Apple",   model: "iPhone 14 Pro Max", basePrice: 715 },
  { id: "ip14p",  brand: "Apple",   model: "iPhone 14 Pro",     basePrice: 640 },
  { id: "ip14",   brand: "Apple",   model: "iPhone 14",         basePrice: 470 },
  { id: "ip13p",  brand: "Apple",   model: "iPhone 13 Pro",     basePrice: 460 },
  { id: "ip13",   brand: "Apple",   model: "iPhone 13",         basePrice: 315 },
  { id: "ip12",   brand: "Apple",   model: "iPhone 12",         basePrice: 220 },
  { id: "s24u",   brand: "Samsung", model: "Galaxy S24 Ultra",  basePrice: 760 },
  { id: "s23u",   brand: "Samsung", model: "Galaxy S23 Ultra",  basePrice: 585 },
  { id: "s23",    brand: "Samsung", model: "Galaxy S23",        basePrice: 410 },
  { id: "zf5",    brand: "Samsung", model: "Galaxy Z Fold 5",   basePrice: 880 },
  { id: "p8p",    brand: "Google",  model: "Pixel 8 Pro",       basePrice: 480 },
  { id: "p8",     brand: "Google",  model: "Pixel 8",           basePrice: 360 },
  { id: "p7p",    brand: "Google",  model: "Pixel 7 Pro",       basePrice: 280 },
];

export type Condition = {
  id: "flawless" | "good" | "fair" | "broken";
  label: string;
  blurb: string;
  multiplier: number;
};

export const CONDITIONS: Condition[] = [
  { id: "flawless", label: "Flawless",      blurb: "Like new. No scratches, fully functional.",       multiplier: 1.0 },
  { id: "good",     label: "Good",          blurb: "Minor wear, screen perfect, all features work.",  multiplier: 0.78 },
  { id: "fair",     label: "Fair",          blurb: "Visible wear or small chips, but works fine.",    multiplier: 0.55 },
  { id: "broken",   label: "Cracked / Broken", blurb: "Cracked screen, dents, or partial function.",  multiplier: 0.28 },
];

export const calcQuote = (device: Device, condition: Condition) =>
  Math.round((device.basePrice * condition.multiplier) / 5) * 5;
