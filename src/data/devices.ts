export type Brand = "Apple" | "Samsung" | "Google" | "Microsoft" | "Dell" | "HP" | "Lenovo" | "ASUS";
export type DeviceType = "Phone" | "Tablet" | "Laptop";

export type Device = {
  id: string;
  brand: Brand;
  type: DeviceType;
  model: string;
};

export const DEVICES: Device[] = [
  // ===== Apple iPhones (last ~5 years: 11 → 17 Pro Max) =====
  { id: "ip17pm",   brand: "Apple", type: "Phone", model: "iPhone 17 Pro Max" },
  { id: "ip17p",    brand: "Apple", type: "Phone", model: "iPhone 17 Pro" },
  { id: "ip17",     brand: "Apple", type: "Phone", model: "iPhone 17" },
  { id: "ip17air",  brand: "Apple", type: "Phone", model: "iPhone 17 Air" },
  { id: "ip16pm",   brand: "Apple", type: "Phone", model: "iPhone 16 Pro Max" },
  { id: "ip16p",    brand: "Apple", type: "Phone", model: "iPhone 16 Pro" },
  { id: "ip16plus", brand: "Apple", type: "Phone", model: "iPhone 16 Plus" },
  { id: "ip16",     brand: "Apple", type: "Phone", model: "iPhone 16" },
  { id: "ip16e",    brand: "Apple", type: "Phone", model: "iPhone 16e" },
  { id: "ip15pm",   brand: "Apple", type: "Phone", model: "iPhone 15 Pro Max" },
  { id: "ip15p",    brand: "Apple", type: "Phone", model: "iPhone 15 Pro" },
  { id: "ip15plus", brand: "Apple", type: "Phone", model: "iPhone 15 Plus" },
  { id: "ip15",     brand: "Apple", type: "Phone", model: "iPhone 15" },
  { id: "ip14pm",   brand: "Apple", type: "Phone", model: "iPhone 14 Pro Max" },
  { id: "ip14p",    brand: "Apple", type: "Phone", model: "iPhone 14 Pro" },
  { id: "ip14plus", brand: "Apple", type: "Phone", model: "iPhone 14 Plus" },
  { id: "ip14",     brand: "Apple", type: "Phone", model: "iPhone 14" },
  { id: "ip13pm",   brand: "Apple", type: "Phone", model: "iPhone 13 Pro Max" },
  { id: "ip13p",    brand: "Apple", type: "Phone", model: "iPhone 13 Pro" },
  { id: "ip13",     brand: "Apple", type: "Phone", model: "iPhone 13" },
  { id: "ip13mini", brand: "Apple", type: "Phone", model: "iPhone 13 mini" },
  { id: "ip12pm",   brand: "Apple", type: "Phone", model: "iPhone 12 Pro Max" },
  { id: "ip12p",    brand: "Apple", type: "Phone", model: "iPhone 12 Pro" },
  { id: "ip12",     brand: "Apple", type: "Phone", model: "iPhone 12" },
  { id: "ip12mini", brand: "Apple", type: "Phone", model: "iPhone 12 mini" },
  { id: "ip11pm",   brand: "Apple", type: "Phone", model: "iPhone 11 Pro Max" },
  { id: "ip11p",    brand: "Apple", type: "Phone", model: "iPhone 11 Pro" },
  { id: "ip11",     brand: "Apple", type: "Phone", model: "iPhone 11" },
  { id: "ipse3",    brand: "Apple", type: "Phone", model: "iPhone SE (3rd gen)" },
  { id: "ipse2",    brand: "Apple", type: "Phone", model: "iPhone SE (2nd gen)" },

  // ===== Apple iPads (last ~5 years) =====
  { id: "ipadm7",   brand: "Apple", type: "Tablet", model: "iPad mini (7th gen)" },
  { id: "ipadm6",   brand: "Apple", type: "Tablet", model: "iPad mini (6th gen)" },
  { id: "ipad11",   brand: "Apple", type: "Tablet", model: "iPad (11th gen)" },
  { id: "ipad10",   brand: "Apple", type: "Tablet", model: "iPad (10th gen)" },
  { id: "ipad9",    brand: "Apple", type: "Tablet", model: "iPad (9th gen)" },
  { id: "ipadair13m3", brand: "Apple", type: "Tablet", model: "iPad Air 13\" (M3)" },
  { id: "ipadair11m3", brand: "Apple", type: "Tablet", model: "iPad Air 11\" (M3)" },
  { id: "ipadair13m2", brand: "Apple", type: "Tablet", model: "iPad Air 13\" (M2)" },
  { id: "ipadair11m2", brand: "Apple", type: "Tablet", model: "iPad Air 11\" (M2)" },
  { id: "ipadair5",    brand: "Apple", type: "Tablet", model: "iPad Air (5th gen)" },
  { id: "ipadair4",    brand: "Apple", type: "Tablet", model: "iPad Air (4th gen)" },
  { id: "ipadprom4_13", brand: "Apple", type: "Tablet", model: "iPad Pro 13\" (M4)" },
  { id: "ipadprom4_11", brand: "Apple", type: "Tablet", model: "iPad Pro 11\" (M4)" },
  { id: "ipadprom2_129", brand: "Apple", type: "Tablet", model: "iPad Pro 12.9\" (M2)" },
  { id: "ipadprom2_11",  brand: "Apple", type: "Tablet", model: "iPad Pro 11\" (M2)" },
  { id: "ipadprom1_129", brand: "Apple", type: "Tablet", model: "iPad Pro 12.9\" (M1)" },
  { id: "ipadprom1_11",  brand: "Apple", type: "Tablet", model: "iPad Pro 11\" (M1)" },

  // ===== Samsung Galaxy phones (last ~5 years) =====
  { id: "s25u",     brand: "Samsung", type: "Phone", model: "Galaxy S25 Ultra" },
  { id: "s25plus",  brand: "Samsung", type: "Phone", model: "Galaxy S25+" },
  { id: "s25",      brand: "Samsung", type: "Phone", model: "Galaxy S25" },
  { id: "s24u",     brand: "Samsung", type: "Phone", model: "Galaxy S24 Ultra" },
  { id: "s24plus",  brand: "Samsung", type: "Phone", model: "Galaxy S24+" },
  { id: "s24",      brand: "Samsung", type: "Phone", model: "Galaxy S24" },
  { id: "s24fe",    brand: "Samsung", type: "Phone", model: "Galaxy S24 FE" },
  { id: "s23u",     brand: "Samsung", type: "Phone", model: "Galaxy S23 Ultra" },
  { id: "s23plus",  brand: "Samsung", type: "Phone", model: "Galaxy S23+" },
  { id: "s23",      brand: "Samsung", type: "Phone", model: "Galaxy S23" },
  { id: "s23fe",    brand: "Samsung", type: "Phone", model: "Galaxy S23 FE" },
  { id: "s22u",     brand: "Samsung", type: "Phone", model: "Galaxy S22 Ultra" },
  { id: "s22plus",  brand: "Samsung", type: "Phone", model: "Galaxy S22+" },
  { id: "s22",      brand: "Samsung", type: "Phone", model: "Galaxy S22" },
  { id: "s21u",     brand: "Samsung", type: "Phone", model: "Galaxy S21 Ultra" },
  { id: "s21plus",  brand: "Samsung", type: "Phone", model: "Galaxy S21+" },
  { id: "s21",      brand: "Samsung", type: "Phone", model: "Galaxy S21" },
  { id: "s20u",     brand: "Samsung", type: "Phone", model: "Galaxy S20 Ultra" },
  { id: "s20plus",  brand: "Samsung", type: "Phone", model: "Galaxy S20+" },
  { id: "s20",      brand: "Samsung", type: "Phone", model: "Galaxy S20" },
  { id: "s20fe",    brand: "Samsung", type: "Phone", model: "Galaxy S20 FE" },
  { id: "n20u",     brand: "Samsung", type: "Phone", model: "Galaxy Note 20 Ultra" },
  { id: "n20",      brand: "Samsung", type: "Phone", model: "Galaxy Note 20" },
  { id: "zf6",      brand: "Samsung", type: "Phone", model: "Galaxy Z Fold 6" },
  { id: "zf5",      brand: "Samsung", type: "Phone", model: "Galaxy Z Fold 5" },
  { id: "zf4",      brand: "Samsung", type: "Phone", model: "Galaxy Z Fold 4" },
  { id: "zf3",      brand: "Samsung", type: "Phone", model: "Galaxy Z Fold 3" },
  { id: "zfl6",     brand: "Samsung", type: "Phone", model: "Galaxy Z Flip 6" },
  { id: "zfl5",     brand: "Samsung", type: "Phone", model: "Galaxy Z Flip 5" },
  { id: "zfl4",     brand: "Samsung", type: "Phone", model: "Galaxy Z Flip 4" },
  { id: "zfl3",     brand: "Samsung", type: "Phone", model: "Galaxy Z Flip 3" },

  // ===== Google Pixel phones (last ~5 years) =====
  { id: "p9pf",   brand: "Google", type: "Phone", model: "Pixel 9 Pro Fold" },
  { id: "p9pxl",  brand: "Google", type: "Phone", model: "Pixel 9 Pro XL" },
  { id: "p9p",    brand: "Google", type: "Phone", model: "Pixel 9 Pro" },
  { id: "p9",     brand: "Google", type: "Phone", model: "Pixel 9" },
  { id: "p8pf",   brand: "Google", type: "Phone", model: "Pixel 8 Pro Fold" },
  { id: "p8p",    brand: "Google", type: "Phone", model: "Pixel 8 Pro" },
  { id: "p8",     brand: "Google", type: "Phone", model: "Pixel 8" },
  { id: "p8a",    brand: "Google", type: "Phone", model: "Pixel 8a" },
  { id: "p7p",    brand: "Google", type: "Phone", model: "Pixel 7 Pro" },
  { id: "p7",     brand: "Google", type: "Phone", model: "Pixel 7" },
  { id: "p7a",    brand: "Google", type: "Phone", model: "Pixel 7a" },
  { id: "p6p",    brand: "Google", type: "Phone", model: "Pixel 6 Pro" },
  { id: "p6",     brand: "Google", type: "Phone", model: "Pixel 6" },
  { id: "p6a",    brand: "Google", type: "Phone", model: "Pixel 6a" },
  { id: "p5",     brand: "Google", type: "Phone", model: "Pixel 5" },
  { id: "p5a",    brand: "Google", type: "Phone", model: "Pixel 5a" },

  // ===== Samsung Tablets =====
  { id: "tabs10u",    brand: "Samsung", type: "Tablet", model: "Galaxy Tab S10 Ultra" },
  { id: "tabs10plus", brand: "Samsung", type: "Tablet", model: "Galaxy Tab S10+" },
  { id: "tabs9u",     brand: "Samsung", type: "Tablet", model: "Galaxy Tab S9 Ultra" },
  { id: "tabs9plus",  brand: "Samsung", type: "Tablet", model: "Galaxy Tab S9+" },
  { id: "tabs9",      brand: "Samsung", type: "Tablet", model: "Galaxy Tab S9" },
  { id: "tabs9fe",    brand: "Samsung", type: "Tablet", model: "Galaxy Tab S9 FE" },
  { id: "tabs8u",     brand: "Samsung", type: "Tablet", model: "Galaxy Tab S8 Ultra" },
  { id: "tabs8plus",  brand: "Samsung", type: "Tablet", model: "Galaxy Tab S8+" },
  { id: "tabs8",      brand: "Samsung", type: "Tablet", model: "Galaxy Tab S8" },
  { id: "tabs7plus",  brand: "Samsung", type: "Tablet", model: "Galaxy Tab S7+" },
  { id: "tabs7",      brand: "Samsung", type: "Tablet", model: "Galaxy Tab S7" },
  { id: "tabs7fe",    brand: "Samsung", type: "Tablet", model: "Galaxy Tab S7 FE" },
  { id: "tabs6lite", brand: "Samsung", type: "Tablet", model: "Galaxy Tab S6 Lite" },
  // Galaxy Tab A line (budget, 2020+)
  { id: "taba9plus",  brand: "Samsung", type: "Tablet", model: "Galaxy Tab A9+" },
  { id: "taba9",      brand: "Samsung", type: "Tablet", model: "Galaxy Tab A9" },
  { id: "taba8",      brand: "Samsung", type: "Tablet", model: "Galaxy Tab A8" },
  { id: "taba7lite",  brand: "Samsung", type: "Tablet", model: "Galaxy Tab A7 Lite" },
  { id: "taba7",      brand: "Samsung", type: "Tablet", model: "Galaxy Tab A7" },
  // Galaxy Tab Active rugged line
  { id: "tabact5",    brand: "Samsung", type: "Tablet", model: "Galaxy Tab Active 5" },
  { id: "tabact4pro", brand: "Samsung", type: "Tablet", model: "Galaxy Tab Active 4 Pro" },
  { id: "tabact3",    brand: "Samsung", type: "Tablet", model: "Galaxy Tab Active 3" },

  // ===== Google Tablets =====
  { id: "pixtab",     brand: "Google",  type: "Tablet", model: "Pixel Tablet" },

  // ===== Apple Laptops (MacBooks, last ~5 years) =====
  { id: "mbp16m4",   brand: "Apple", type: "Laptop", model: "MacBook Pro 16\" (M4)" },
  { id: "mbp14m4",   brand: "Apple", type: "Laptop", model: "MacBook Pro 14\" (M4)" },
  { id: "mbp16m3",   brand: "Apple", type: "Laptop", model: "MacBook Pro 16\" (M3)" },
  { id: "mbp14m3",   brand: "Apple", type: "Laptop", model: "MacBook Pro 14\" (M3)" },
  { id: "mbp16m2",   brand: "Apple", type: "Laptop", model: "MacBook Pro 16\" (M2)" },
  { id: "mbp14m2",   brand: "Apple", type: "Laptop", model: "MacBook Pro 14\" (M2)" },
  { id: "mbp16m1",   brand: "Apple", type: "Laptop", model: "MacBook Pro 16\" (M1)" },
  { id: "mbp14m1",   brand: "Apple", type: "Laptop", model: "MacBook Pro 14\" (M1)" },
  { id: "mbp13m2",   brand: "Apple", type: "Laptop", model: "MacBook Pro 13\" (M2)" },
  { id: "mbp13m1",   brand: "Apple", type: "Laptop", model: "MacBook Pro 13\" (M1)" },
  { id: "mba15m3",   brand: "Apple", type: "Laptop", model: "MacBook Air 15\" (M3)" },
  { id: "mba13m3",   brand: "Apple", type: "Laptop", model: "MacBook Air 13\" (M3)" },
  { id: "mba15m2",   brand: "Apple", type: "Laptop", model: "MacBook Air 15\" (M2)" },
  { id: "mba13m2",   brand: "Apple", type: "Laptop", model: "MacBook Air 13\" (M2)" },
  { id: "mba13m1",   brand: "Apple", type: "Laptop", model: "MacBook Air 13\" (M1)" },

  // ===== Microsoft Laptops & Tablets =====
  { id: "sl7",       brand: "Microsoft", type: "Laptop", model: "Surface Laptop 7" },
  { id: "sl6",       brand: "Microsoft", type: "Laptop", model: "Surface Laptop 6" },
  { id: "sl5",       brand: "Microsoft", type: "Laptop", model: "Surface Laptop 5" },
  { id: "spro11",    brand: "Microsoft", type: "Tablet", model: "Surface Pro 11" },
  { id: "spro10",    brand: "Microsoft", type: "Tablet", model: "Surface Pro 10" },
  { id: "spro9",     brand: "Microsoft", type: "Tablet", model: "Surface Pro 9" },
  { id: "spro8",     brand: "Microsoft", type: "Tablet", model: "Surface Pro 8" },

  // ===== Dell Laptops =====
  { id: "dxps15",    brand: "Dell", type: "Laptop", model: "XPS 15" },
  { id: "dxps14",    brand: "Dell", type: "Laptop", model: "XPS 14" },
  { id: "dxps13",    brand: "Dell", type: "Laptop", model: "XPS 13" },
  { id: "dlat",      brand: "Dell", type: "Laptop", model: "Latitude 7000" },
  { id: "dinspiron", brand: "Dell", type: "Laptop", model: "Inspiron 15" },

  // ===== HP Laptops =====
  { id: "hpsx360",   brand: "HP", type: "Laptop", model: "Spectre x360" },
  { id: "hpenv",     brand: "HP", type: "Laptop", model: "Envy 16" },
  { id: "hppav",     brand: "HP", type: "Laptop", model: "Pavilion 15" },
  { id: "hpomen",    brand: "HP", type: "Laptop", model: "Omen 16" },
  { id: "hpeb",      brand: "HP", type: "Laptop", model: "EliteBook 840" },

  // ===== Lenovo Laptops =====
  { id: "ltpx1c",    brand: "Lenovo", type: "Laptop", model: "ThinkPad X1 Carbon" },
  { id: "ltpt14",    brand: "Lenovo", type: "Laptop", model: "ThinkPad T14" },
  { id: "lyoga9",    brand: "Lenovo", type: "Laptop", model: "Yoga 9i" },
  { id: "lyoga7",    brand: "Lenovo", type: "Laptop", model: "Yoga 7i" },
  { id: "llegion",   brand: "Lenovo", type: "Laptop", model: "Legion 5 Pro" },

  // ===== ASUS Laptops =====
  { id: "azb14",     brand: "ASUS", type: "Laptop", model: "Zenbook 14" },
  { id: "azb15",     brand: "ASUS", type: "Laptop", model: "Zenbook 15" },
  { id: "arog",      brand: "ASUS", type: "Laptop", model: "ROG Zephyrus G14" },
  { id: "atufa15",   brand: "ASUS", type: "Laptop", model: "TUF Gaming A15" },
  { id: "avivo",     brand: "ASUS", type: "Laptop", model: "Vivobook 16" },
];

export const STORAGE_OPTIONS = ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB", "2 TB"] as const;
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
