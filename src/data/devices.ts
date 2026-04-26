export type Brand =
  | "Apple" | "Samsung" | "Google" | "Microsoft"
  | "Dell" | "HP" | "Lenovo" | "ASUS" | "Razer" | "MSI" | "Acer"
  | "Sony" | "Nintendo" | "Valve" | "Meta"
  | "Canon" | "Nikon" | "Fujifilm" | "Panasonic" | "Leica" | "GoPro"
  | "DJI" | "Autel" | "Skydio" | "Parrot";
export type DeviceType = "Phone" | "Tablet" | "Laptop" | "Console" | "Camera" | "Drone";

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
  { id: "ipadprom5_13", brand: "Apple", type: "Tablet", model: "iPad Pro 13\" (M5)" },
  { id: "ipadprom5_11", brand: "Apple", type: "Tablet", model: "iPad Pro 11\" (M5)" },
  { id: "ipadprom4_13", brand: "Apple", type: "Tablet", model: "iPad Pro 13\" (M4)" },
  { id: "ipadprom4_11", brand: "Apple", type: "Tablet", model: "iPad Pro 11\" (M4)" },
  { id: "ipadprom2_129", brand: "Apple", type: "Tablet", model: "iPad Pro 12.9\" (M2)" },
  { id: "ipadprom2_11",  brand: "Apple", type: "Tablet", model: "iPad Pro 11\" (M2)" },
  { id: "ipadprom1_129", brand: "Apple", type: "Tablet", model: "iPad Pro 12.9\" (M1)" },
  { id: "ipadprom1_11",  brand: "Apple", type: "Tablet", model: "iPad Pro 11\" (M1)" },

  // ===== Samsung Galaxy phones (last ~5 years) =====
  { id: "s26u",     brand: "Samsung", type: "Phone", model: "Galaxy S26 Ultra" },
  { id: "s26plus",  brand: "Samsung", type: "Phone", model: "Galaxy S26+" },
  { id: "s26",      brand: "Samsung", type: "Phone", model: "Galaxy S26" },
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
  { id: "zf7",      brand: "Samsung", type: "Phone", model: "Galaxy Z Fold 7" },
  { id: "zf6",      brand: "Samsung", type: "Phone", model: "Galaxy Z Fold 6" },
  { id: "zf5",      brand: "Samsung", type: "Phone", model: "Galaxy Z Fold 5" },
  { id: "zf4",      brand: "Samsung", type: "Phone", model: "Galaxy Z Fold 4" },
  { id: "zf3",      brand: "Samsung", type: "Phone", model: "Galaxy Z Fold 3" },
  { id: "zfl7",     brand: "Samsung", type: "Phone", model: "Galaxy Z Flip 7" },
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
  { id: "mbp16m5",   brand: "Apple", type: "Laptop", model: "MacBook Pro 16\" (M5)" },
  { id: "mbp14m5",   brand: "Apple", type: "Laptop", model: "MacBook Pro 14\" (M5)" },
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
  { id: "mba15m4",   brand: "Apple", type: "Laptop", model: "MacBook Air 15\" (M4)" },
  { id: "mba13m4",   brand: "Apple", type: "Laptop", model: "MacBook Air 13\" (M4)" },
  { id: "mba15m3",   brand: "Apple", type: "Laptop", model: "MacBook Air 15\" (M3)" },
  { id: "mba13m3",   brand: "Apple", type: "Laptop", model: "MacBook Air 13\" (M3)" },
  { id: "mba15m2",   brand: "Apple", type: "Laptop", model: "MacBook Air 15\" (M2)" },
  { id: "mba13m2",   brand: "Apple", type: "Laptop", model: "MacBook Air 13\" (M2)" },
  { id: "mba13m1",   brand: "Apple", type: "Laptop", model: "MacBook Air 13\" (M1)" },

  // ===== Samsung Laptops (Galaxy Book) =====
  { id: "gb4ult",    brand: "Samsung", type: "Laptop", model: "Galaxy Book 4 Ultra" },
  { id: "gb4pro360", brand: "Samsung", type: "Laptop", model: "Galaxy Book 4 Pro 360" },
  { id: "gb4pro",    brand: "Samsung", type: "Laptop", model: "Galaxy Book 4 Pro" },
  { id: "gb4",       brand: "Samsung", type: "Laptop", model: "Galaxy Book 4" },
  { id: "gb3ult",    brand: "Samsung", type: "Laptop", model: "Galaxy Book 3 Ultra" },
  { id: "gb3pro360", brand: "Samsung", type: "Laptop", model: "Galaxy Book 3 Pro 360" },
  { id: "gb3pro",    brand: "Samsung", type: "Laptop", model: "Galaxy Book 3 Pro" },
  { id: "gb3",       brand: "Samsung", type: "Laptop", model: "Galaxy Book 3" },

  // ===== Microsoft Surface =====
  { id: "sl7",       brand: "Microsoft", type: "Laptop", model: "Surface Laptop 7" },
  { id: "sl6",       brand: "Microsoft", type: "Laptop", model: "Surface Laptop 6" },
  { id: "sl5",       brand: "Microsoft", type: "Laptop", model: "Surface Laptop 5" },
  { id: "sls7",      brand: "Microsoft", type: "Laptop", model: "Surface Laptop Studio 2" },
  { id: "sls1",      brand: "Microsoft", type: "Laptop", model: "Surface Laptop Studio" },
  { id: "slgo3",     brand: "Microsoft", type: "Laptop", model: "Surface Laptop Go 3" },
  { id: "slgo2",     brand: "Microsoft", type: "Laptop", model: "Surface Laptop Go 2" },
  { id: "spro11",    brand: "Microsoft", type: "Tablet", model: "Surface Pro 11" },
  { id: "spro10",    brand: "Microsoft", type: "Tablet", model: "Surface Pro 10" },
  { id: "spro9",     brand: "Microsoft", type: "Tablet", model: "Surface Pro 9" },
  { id: "spro8",     brand: "Microsoft", type: "Tablet", model: "Surface Pro 8" },

  // ===== Dell Laptops =====
  { id: "dxps16_24", brand: "Dell", type: "Laptop", model: "XPS 16 (9640)" },
  { id: "dxps14_24", brand: "Dell", type: "Laptop", model: "XPS 14 (9440)" },
  { id: "dxps13_24", brand: "Dell", type: "Laptop", model: "XPS 13 (9340)" },
  { id: "dxps15",    brand: "Dell", type: "Laptop", model: "XPS 15 (9530)" },
  { id: "dxps13plus",brand: "Dell", type: "Laptop", model: "XPS 13 Plus" },
  { id: "dlat9450",  brand: "Dell", type: "Laptop", model: "Latitude 9450" },
  { id: "dlat7450",  brand: "Dell", type: "Laptop", model: "Latitude 7450" },
  { id: "dlat5450",  brand: "Dell", type: "Laptop", model: "Latitude 5450" },
  { id: "dpro14",    brand: "Dell", type: "Laptop", model: "Dell Pro 14 Premium" },
  { id: "dpro13",    brand: "Dell", type: "Laptop", model: "Dell Pro 13 Premium" },
  { id: "dprec5690", brand: "Dell", type: "Laptop", model: "Precision 5690" },
  { id: "dinspiron16", brand: "Dell", type: "Laptop", model: "Inspiron 16" },
  { id: "dinspiron15", brand: "Dell", type: "Laptop", model: "Inspiron 15" },
  { id: "dalien18",  brand: "Dell", type: "Laptop", model: "Alienware m18 R2" },
  { id: "dalien16",  brand: "Dell", type: "Laptop", model: "Alienware m16 R2" },
  { id: "dalienx16", brand: "Dell", type: "Laptop", model: "Alienware x16 R2" },

  // ===== HP Laptops =====
  { id: "hpomb14",   brand: "HP", type: "Laptop", model: "OmniBook Ultra 14" },
  { id: "hpomb_x14", brand: "HP", type: "Laptop", model: "OmniBook X 14" },
  { id: "hpsx14",    brand: "HP", type: "Laptop", model: "Spectre x360 14" },
  { id: "hpsx16",    brand: "HP", type: "Laptop", model: "Spectre x360 16" },
  { id: "hpenv16",   brand: "HP", type: "Laptop", model: "Envy 16" },
  { id: "hpenv14",   brand: "HP", type: "Laptop", model: "Envy 14" },
  { id: "hppav15",   brand: "HP", type: "Laptop", model: "Pavilion 15" },
  { id: "hppav14",   brand: "HP", type: "Laptop", model: "Pavilion 14" },
  { id: "hpomen17",  brand: "HP", type: "Laptop", model: "Omen 17" },
  { id: "hpomen16",  brand: "HP", type: "Laptop", model: "Omen 16" },
  { id: "hpvic16",   brand: "HP", type: "Laptop", model: "Victus 16" },
  { id: "hpeb1040",  brand: "HP", type: "Laptop", model: "EliteBook 1040 G11" },
  { id: "hpeb840",   brand: "HP", type: "Laptop", model: "EliteBook 840 G11" },
  { id: "hpzbook",   brand: "HP", type: "Laptop", model: "ZBook Studio G11" },

  // ===== Lenovo Laptops =====
  { id: "ltpx1c12",  brand: "Lenovo", type: "Laptop", model: "ThinkPad X1 Carbon Gen 12" },
  { id: "ltpx1y9",   brand: "Lenovo", type: "Laptop", model: "ThinkPad X1 Yoga Gen 9" },
  { id: "ltpx9",     brand: "Lenovo", type: "Laptop", model: "ThinkPad X9 Aura Edition" },
  { id: "ltpt14g5",  brand: "Lenovo", type: "Laptop", model: "ThinkPad T14 Gen 5" },
  { id: "ltpp16",    brand: "Lenovo", type: "Laptop", model: "ThinkPad P16 Gen 2" },
  { id: "ltpe16",    brand: "Lenovo", type: "Laptop", model: "ThinkPad E16 Gen 2" },
  { id: "lyogasl",   brand: "Lenovo", type: "Laptop", model: "Yoga Slim 7x" },
  { id: "lyoga9i",   brand: "Lenovo", type: "Laptop", model: "Yoga 9i (Gen 9)" },
  { id: "lyoga7i",   brand: "Lenovo", type: "Laptop", model: "Yoga 7i" },
  { id: "lyogapro9", brand: "Lenovo", type: "Laptop", model: "Yoga Pro 9i" },
  { id: "lideapad5", brand: "Lenovo", type: "Laptop", model: "IdeaPad 5" },
  { id: "lideapadflex", brand: "Lenovo", type: "Laptop", model: "IdeaPad Flex 5" },
  { id: "llegion9",  brand: "Lenovo", type: "Laptop", model: "Legion 9i" },
  { id: "llegion7",  brand: "Lenovo", type: "Laptop", model: "Legion 7i" },
  { id: "llegion5p", brand: "Lenovo", type: "Laptop", model: "Legion 5 Pro" },
  { id: "lloq",      brand: "Lenovo", type: "Laptop", model: "LOQ 15" },

  // ===== ASUS Laptops =====
  { id: "azb_s16",   brand: "ASUS", type: "Laptop", model: "Zenbook S 16 (UM5606)" },
  { id: "azb_s14",   brand: "ASUS", type: "Laptop", model: "Zenbook S 14 (UX5406)" },
  { id: "azb14oled", brand: "ASUS", type: "Laptop", model: "Zenbook 14 OLED" },
  { id: "azb_duo",   brand: "ASUS", type: "Laptop", model: "Zenbook Duo (2024)" },
  { id: "apb14",     brand: "ASUS", type: "Laptop", model: "ProArt P16" },
  { id: "apbst16",   brand: "ASUS", type: "Laptop", model: "ProArt Studiobook 16" },
  { id: "arogz16",   brand: "ASUS", type: "Laptop", model: "ROG Zephyrus G16 (2024)" },
  { id: "arogz14",   brand: "ASUS", type: "Laptop", model: "ROG Zephyrus G14 (2024)" },
  { id: "arogstrix", brand: "ASUS", type: "Laptop", model: "ROG Strix Scar 18" },
  { id: "atufa16",   brand: "ASUS", type: "Laptop", model: "TUF Gaming A16" },
  { id: "atufa15",   brand: "ASUS", type: "Laptop", model: "TUF Gaming A15" },
  { id: "avivos15",  brand: "ASUS", type: "Laptop", model: "Vivobook S 15 (Snapdragon)" },
  { id: "avivo16",   brand: "ASUS", type: "Laptop", model: "Vivobook 16" },

  // ===== Razer Laptops =====
  { id: "rb18",      brand: "Razer", type: "Laptop", model: "Blade 18 (2024)" },
  { id: "rb16",      brand: "Razer", type: "Laptop", model: "Blade 16 (2024)" },
  { id: "rb14",      brand: "Razer", type: "Laptop", model: "Blade 14 (2024)" },
  { id: "rb15_22",   brand: "Razer", type: "Laptop", model: "Blade 15 (2022)" },

  // ===== MSI Laptops =====
  { id: "mtitan18",  brand: "MSI", type: "Laptop", model: "Titan 18 HX" },
  { id: "mraider18", brand: "MSI", type: "Laptop", model: "Raider 18 HX" },
  { id: "mstealth16", brand: "MSI", type: "Laptop", model: "Stealth 16 AI Studio" },
  { id: "mstealth14", brand: "MSI", type: "Laptop", model: "Stealth 14 AI Studio" },
  { id: "mvector16", brand: "MSI", type: "Laptop", model: "Vector 16 HX" },
  { id: "mprestige16", brand: "MSI", type: "Laptop", model: "Prestige 16 AI Evo" },
  { id: "mprestige13", brand: "MSI", type: "Laptop", model: "Prestige 13 AI Evo" },
  { id: "msummit",   brand: "MSI", type: "Laptop", model: "Summit E16 AI Evo" },
  { id: "mcyborg15", brand: "MSI", type: "Laptop", model: "Cyborg 15" },
  { id: "mkat17",    brand: "MSI", type: "Laptop", model: "Katana 17" },

  // ===== Acer Laptops =====
  { id: "asw14",     brand: "Acer", type: "Laptop", model: "Swift 14 AI" },
  { id: "asw_go14",  brand: "Acer", type: "Laptop", model: "Swift Go 14" },
  { id: "asw_x14",   brand: "Acer", type: "Laptop", model: "Swift X 14" },
  { id: "asw3",      brand: "Acer", type: "Laptop", model: "Swift 3" },
  { id: "aspire5",   brand: "Acer", type: "Laptop", model: "Aspire 5" },
  { id: "aspire7",   brand: "Acer", type: "Laptop", model: "Aspire 7" },
  { id: "apredh18",  brand: "Acer", type: "Laptop", model: "Predator Helios 18" },
  { id: "apredh16",  brand: "Acer", type: "Laptop", model: "Predator Helios 16" },
  { id: "apredh_neo", brand: "Acer", type: "Laptop", model: "Predator Helios Neo 16" },
  { id: "anitro17",  brand: "Acer", type: "Laptop", model: "Nitro 17" },
  { id: "anitro16",  brand: "Acer", type: "Laptop", model: "Nitro 16" },
  { id: "atvgo16",   brand: "Acer", type: "Laptop", model: "TravelMate P6 16" },

  // ===== Consoles (2018+) =====
  // Sony PlayStation
  { id: "ps5pro",      brand: "Sony", type: "Console", model: "PlayStation 5 Pro" },
  { id: "ps5slim",     brand: "Sony", type: "Console", model: "PlayStation 5 Slim" },
  { id: "ps5",         brand: "Sony", type: "Console", model: "PlayStation 5" },
  { id: "ps5de",       brand: "Sony", type: "Console", model: "PlayStation 5 Digital Edition" },
  { id: "ps4pro",      brand: "Sony", type: "Console", model: "PlayStation 4 Pro" },
  { id: "ps4slim",     brand: "Sony", type: "Console", model: "PlayStation 4 Slim" },
  { id: "psportal",    brand: "Sony", type: "Console", model: "PlayStation Portal" },
  // Microsoft Xbox
  { id: "xsx",         brand: "Microsoft", type: "Console", model: "Xbox Series X" },
  { id: "xss",         brand: "Microsoft", type: "Console", model: "Xbox Series S" },
  { id: "xb1x",        brand: "Microsoft", type: "Console", model: "Xbox One X" },
  { id: "xb1s",        brand: "Microsoft", type: "Console", model: "Xbox One S" },
  // Nintendo
  { id: "switch2",     brand: "Nintendo", type: "Console", model: "Switch 2" },
  { id: "switcholed",  brand: "Nintendo", type: "Console", model: "Switch OLED" },
  { id: "switchlite",  brand: "Nintendo", type: "Console", model: "Switch Lite" },
  { id: "switch",      brand: "Nintendo", type: "Console", model: "Switch" },
  // Valve / Other handhelds
  { id: "sdoled",      brand: "Valve", type: "Console", model: "Steam Deck OLED" },
  { id: "sdlcd",       brand: "Valve", type: "Console", model: "Steam Deck LCD" },
  { id: "rogally_x",   brand: "ASUS", type: "Console", model: "ROG Ally X" },
  { id: "rogally",     brand: "ASUS", type: "Console", model: "ROG Ally" },
  { id: "legiongo",    brand: "Lenovo", type: "Console", model: "Legion Go" },
  // VR
  { id: "q3",          brand: "Meta", type: "Console", model: "Quest 3" },
  { id: "q3s",         brand: "Meta", type: "Console", model: "Quest 3S" },
  { id: "q2",          brand: "Meta", type: "Console", model: "Quest 2" },
  { id: "qpro",        brand: "Meta", type: "Console", model: "Quest Pro" },
  { id: "psvr2",       brand: "Sony", type: "Console", model: "PlayStation VR2" },

  // ===== Cameras (2018+) =====
  // Sony Alpha (mirrorless)
  { id: "soa1ii",      brand: "Sony", type: "Camera", model: "Alpha 1 II" },
  { id: "soa1",        brand: "Sony", type: "Camera", model: "Alpha 1" },
  { id: "soa9iii",     brand: "Sony", type: "Camera", model: "Alpha 9 III" },
  { id: "soa9ii",      brand: "Sony", type: "Camera", model: "Alpha 9 II" },
  { id: "soa7riv",     brand: "Sony", type: "Camera", model: "Alpha 7R IV" },
  { id: "soa7rv",      brand: "Sony", type: "Camera", model: "Alpha 7R V" },
  { id: "soa7iv",      brand: "Sony", type: "Camera", model: "Alpha 7 IV" },
  { id: "soa7iii",     brand: "Sony", type: "Camera", model: "Alpha 7 III" },
  { id: "soa7cii",     brand: "Sony", type: "Camera", model: "Alpha 7C II" },
  { id: "soa7crii",    brand: "Sony", type: "Camera", model: "Alpha 7CR" },
  { id: "soa7c",       brand: "Sony", type: "Camera", model: "Alpha 7C" },
  { id: "soa6700",     brand: "Sony", type: "Camera", model: "Alpha 6700" },
  { id: "soa6600",     brand: "Sony", type: "Camera", model: "Alpha 6600" },
  { id: "soa6400",     brand: "Sony", type: "Camera", model: "Alpha 6400" },
  { id: "sozv1",       brand: "Sony", type: "Camera", model: "ZV-1" },
  { id: "sozv1ii",     brand: "Sony", type: "Camera", model: "ZV-1 II" },
  { id: "sozve1",      brand: "Sony", type: "Camera", model: "ZV-E1" },
  { id: "sozve10",     brand: "Sony", type: "Camera", model: "ZV-E10" },
  { id: "sozve10ii",   brand: "Sony", type: "Camera", model: "ZV-E10 II" },
  // Canon
  { id: "cnr1mkii",    brand: "Canon", type: "Camera", model: "EOS R1" },
  { id: "cnr5mkii",    brand: "Canon", type: "Camera", model: "EOS R5 Mark II" },
  { id: "cnr5",        brand: "Canon", type: "Camera", model: "EOS R5" },
  { id: "cnr6mkii",    brand: "Canon", type: "Camera", model: "EOS R6 Mark II" },
  { id: "cnr6",        brand: "Canon", type: "Camera", model: "EOS R6" },
  { id: "cnr7",        brand: "Canon", type: "Camera", model: "EOS R7" },
  { id: "cnr8",        brand: "Canon", type: "Camera", model: "EOS R8" },
  { id: "cnr10",       brand: "Canon", type: "Camera", model: "EOS R10" },
  { id: "cnr50",       brand: "Canon", type: "Camera", model: "EOS R50" },
  { id: "cnr100",      brand: "Canon", type: "Camera", model: "EOS R100" },
  { id: "cnrp",        brand: "Canon", type: "Camera", model: "EOS RP" },
  { id: "cnr",         brand: "Canon", type: "Camera", model: "EOS R" },
  { id: "cnm6mkii",    brand: "Canon", type: "Camera", model: "EOS M6 Mark II" },
  { id: "cn90d",       brand: "Canon", type: "Camera", model: "EOS 90D" },
  // Nikon
  { id: "nkz9",        brand: "Nikon", type: "Camera", model: "Z9" },
  { id: "nkz8",        brand: "Nikon", type: "Camera", model: "Z8" },
  { id: "nkz7ii",      brand: "Nikon", type: "Camera", model: "Z7 II" },
  { id: "nkz7",        brand: "Nikon", type: "Camera", model: "Z7" },
  { id: "nkz6iii",     brand: "Nikon", type: "Camera", model: "Z6 III" },
  { id: "nkz6ii",      brand: "Nikon", type: "Camera", model: "Z6 II" },
  { id: "nkz6",        brand: "Nikon", type: "Camera", model: "Z6" },
  { id: "nkz5",        brand: "Nikon", type: "Camera", model: "Z5" },
  { id: "nkzf",        brand: "Nikon", type: "Camera", model: "Zf" },
  { id: "nkzfc",       brand: "Nikon", type: "Camera", model: "Zfc" },
  { id: "nkz50",       brand: "Nikon", type: "Camera", model: "Z50" },
  { id: "nkz30",       brand: "Nikon", type: "Camera", model: "Z30" },
  { id: "nkd850",      brand: "Nikon", type: "Camera", model: "D850" },
  { id: "nkd780",      brand: "Nikon", type: "Camera", model: "D780" },
  // Fujifilm
  { id: "fxh2s",       brand: "Fujifilm", type: "Camera", model: "X-H2S" },
  { id: "fxh2",        brand: "Fujifilm", type: "Camera", model: "X-H2" },
  { id: "fxt5",        brand: "Fujifilm", type: "Camera", model: "X-T5" },
  { id: "fxt4",        brand: "Fujifilm", type: "Camera", model: "X-T4" },
  { id: "fxt3",        brand: "Fujifilm", type: "Camera", model: "X-T3" },
  { id: "fxt30ii",     brand: "Fujifilm", type: "Camera", model: "X-T30 II" },
  { id: "fxs20",       brand: "Fujifilm", type: "Camera", model: "X-S20" },
  { id: "fxs10",       brand: "Fujifilm", type: "Camera", model: "X-S10" },
  { id: "fxe4",        brand: "Fujifilm", type: "Camera", model: "X-E4" },
  { id: "fxpro3",      brand: "Fujifilm", type: "Camera", model: "X-Pro3" },
  { id: "fx100v",      brand: "Fujifilm", type: "Camera", model: "X100V" },
  { id: "fx100vi",     brand: "Fujifilm", type: "Camera", model: "X100VI" },
  { id: "fgfx100sii",  brand: "Fujifilm", type: "Camera", model: "GFX 100S II" },
  { id: "fgfx100ii",   brand: "Fujifilm", type: "Camera", model: "GFX 100 II" },
  { id: "fgfx50sii",   brand: "Fujifilm", type: "Camera", model: "GFX 50S II" },
  // Panasonic Lumix
  { id: "pas5ii",      brand: "Panasonic", type: "Camera", model: "Lumix S5 II" },
  { id: "pas5iix",     brand: "Panasonic", type: "Camera", model: "Lumix S5 IIX" },
  { id: "pas5",        brand: "Panasonic", type: "Camera", model: "Lumix S5" },
  { id: "pas1h",       brand: "Panasonic", type: "Camera", model: "Lumix S1H" },
  { id: "pas1",        brand: "Panasonic", type: "Camera", model: "Lumix S1" },
  { id: "pag9ii",      brand: "Panasonic", type: "Camera", model: "Lumix G9 II" },
  { id: "pagh6",       brand: "Panasonic", type: "Camera", model: "Lumix GH6" },
  { id: "pagh5ii",     brand: "Panasonic", type: "Camera", model: "Lumix GH5 II" },
  // Leica
  { id: "lcq3",        brand: "Leica", type: "Camera", model: "Q3" },
  { id: "lcq2",        brand: "Leica", type: "Camera", model: "Q2" },
  { id: "lcm11",       brand: "Leica", type: "Camera", model: "M11" },
  { id: "lcsl3",       brand: "Leica", type: "Camera", model: "SL3" },
  // GoPro / Action
  { id: "gph13",       brand: "GoPro", type: "Camera", model: "Hero 13 Black" },
  { id: "gph12",       brand: "GoPro", type: "Camera", model: "Hero 12 Black" },
  { id: "gph11",       brand: "GoPro", type: "Camera", model: "Hero 11 Black" },
  { id: "gph10",       brand: "GoPro", type: "Camera", model: "Hero 10 Black" },
  { id: "gph9",        brand: "GoPro", type: "Camera", model: "Hero 9 Black" },
  { id: "gpmax",       brand: "GoPro", type: "Camera", model: "Max 360" },
  { id: "djoa5",       brand: "DJI", type: "Camera", model: "Osmo Action 5 Pro" },
  { id: "djoa4",       brand: "DJI", type: "Camera", model: "Osmo Action 4" },
  { id: "djop3",       brand: "DJI", type: "Camera", model: "Osmo Pocket 3" },
  { id: "djop2",       brand: "DJI", type: "Camera", model: "Osmo Pocket 2" },

  // ===== Drones (2018+) =====
  // DJI consumer
  { id: "djmini4pro",  brand: "DJI", type: "Drone", model: "Mini 4 Pro" },
  { id: "djmini4k",    brand: "DJI", type: "Drone", model: "Mini 4K" },
  { id: "djmini3pro",  brand: "DJI", type: "Drone", model: "Mini 3 Pro" },
  { id: "djmini3",     brand: "DJI", type: "Drone", model: "Mini 3" },
  { id: "djmini2se",   brand: "DJI", type: "Drone", model: "Mini 2 SE" },
  { id: "djmini2",     brand: "DJI", type: "Drone", model: "Mini 2" },
  { id: "djminise",    brand: "DJI", type: "Drone", model: "Mini SE" },
  { id: "djmavic3pro", brand: "DJI", type: "Drone", model: "Mavic 3 Pro" },
  { id: "djmavic3classic", brand: "DJI", type: "Drone", model: "Mavic 3 Classic" },
  { id: "djmavic3",    brand: "DJI", type: "Drone", model: "Mavic 3" },
  { id: "djmavic2pro", brand: "DJI", type: "Drone", model: "Mavic 2 Pro" },
  { id: "djmavic2zoom", brand: "DJI", type: "Drone", model: "Mavic 2 Zoom" },
  { id: "djair3s",     brand: "DJI", type: "Drone", model: "Air 3S" },
  { id: "djair3",      brand: "DJI", type: "Drone", model: "Air 3" },
  { id: "djair2s",     brand: "DJI", type: "Drone", model: "Air 2S" },
  { id: "djmavicair2", brand: "DJI", type: "Drone", model: "Mavic Air 2" },
  { id: "djneo",       brand: "DJI", type: "Drone", model: "Neo" },
  { id: "djavata2",    brand: "DJI", type: "Drone", model: "Avata 2" },
  { id: "djavata",     brand: "DJI", type: "Drone", model: "Avata" },
  { id: "djfpv",       brand: "DJI", type: "Drone", model: "FPV" },
  { id: "djinspire3",  brand: "DJI", type: "Drone", model: "Inspire 3" },
  // Autel
  { id: "auevomax4t",  brand: "Autel", type: "Drone", model: "EVO Max 4T" },
  { id: "auevo2pro_v3", brand: "Autel", type: "Drone", model: "EVO II Pro V3" },
  { id: "auevolite_plus", brand: "Autel", type: "Drone", model: "EVO Lite+" },
  { id: "auevonano_plus", brand: "Autel", type: "Drone", model: "EVO Nano+" },
  // Skydio
  { id: "skx10",       brand: "Skydio", type: "Drone", model: "X10" },
  { id: "sk2plus",     brand: "Skydio", type: "Drone", model: "2+" },
  { id: "sk2",         brand: "Skydio", type: "Drone", model: "2" },
  // Parrot
  { id: "ppanafiai",   brand: "Parrot", type: "Drone", model: "Anafi AI" },
  { id: "ppanafi",     brand: "Parrot", type: "Drone", model: "Anafi" },
];

export const STORAGE_OPTIONS = ["32 GB", "64 GB", "128 GB", "256 GB", "512 GB", "1 TB", "2 TB", "4 TB", "8 TB"] as const;
export const CARRIER_OPTIONS = ["Unlocked", "AT&T", "T-Mobile", "Verizon", "Other"] as const;

export type Storage = typeof STORAGE_OPTIONS[number];
export type Carrier = typeof CARRIER_OPTIONS[number];

// ---------- Per-device storage configurations (accurate to manufacturer specs) ----------

const IPHONE_STORAGE: Record<string, Storage[]> = {
  // iPhone 17 — 256GB minimum across line; Pro/Pro Max up to 2TB
  ip17pm:   ["256 GB", "512 GB", "1 TB", "2 TB"],
  ip17p:    ["256 GB", "512 GB", "1 TB", "2 TB"],
  ip17:     ["256 GB", "512 GB"],
  ip17air:  ["256 GB", "512 GB", "1 TB"],
  // iPhone 16
  ip16pm:   ["256 GB", "512 GB", "1 TB"],
  ip16p:    ["128 GB", "256 GB", "512 GB", "1 TB"],
  ip16plus: ["128 GB", "256 GB", "512 GB"],
  ip16:     ["128 GB", "256 GB", "512 GB"],
  ip16e:    ["128 GB", "256 GB", "512 GB"],
  // iPhone 15
  ip15pm:   ["256 GB", "512 GB", "1 TB"],
  ip15p:    ["128 GB", "256 GB", "512 GB", "1 TB"],
  ip15plus: ["128 GB", "256 GB", "512 GB"],
  ip15:     ["128 GB", "256 GB", "512 GB"],
  // iPhone 14
  ip14pm:   ["128 GB", "256 GB", "512 GB", "1 TB"],
  ip14p:    ["128 GB", "256 GB", "512 GB", "1 TB"],
  ip14plus: ["128 GB", "256 GB", "512 GB"],
  ip14:     ["128 GB", "256 GB", "512 GB"],
  // iPhone 13
  ip13pm:   ["128 GB", "256 GB", "512 GB", "1 TB"],
  ip13p:    ["128 GB", "256 GB", "512 GB", "1 TB"],
  ip13:     ["128 GB", "256 GB", "512 GB"],
  ip13mini: ["128 GB", "256 GB", "512 GB"],
  // iPhone 12
  ip12pm:   ["128 GB", "256 GB", "512 GB"],
  ip12p:    ["128 GB", "256 GB", "512 GB"],
  ip12:     ["64 GB", "128 GB", "256 GB"],
  ip12mini: ["64 GB", "128 GB", "256 GB"],
  // iPhone 11
  ip11pm:   ["64 GB", "256 GB", "512 GB"],
  ip11p:    ["64 GB", "256 GB", "512 GB"],
  ip11:     ["64 GB", "128 GB", "256 GB"],
  ipse3:    ["64 GB", "128 GB", "256 GB"],
  ipse2:    ["64 GB", "128 GB", "256 GB"],
};

const IPAD_STORAGE: Record<string, Storage[]> = {
  ipadm7:        ["128 GB", "256 GB", "512 GB"],
  ipadm6:        ["64 GB", "256 GB"],
  ipad11:        ["128 GB", "256 GB", "512 GB"],
  ipad10:        ["64 GB", "256 GB"],
  ipad9:         ["64 GB", "256 GB"],
  ipadair13m3:   ["128 GB", "256 GB", "512 GB", "1 TB"],
  ipadair11m3:   ["128 GB", "256 GB", "512 GB", "1 TB"],
  ipadair13m2:   ["128 GB", "256 GB", "512 GB", "1 TB"],
  ipadair11m2:   ["128 GB", "256 GB", "512 GB", "1 TB"],
  ipadair5:      ["64 GB", "256 GB"],
  ipadair4:      ["64 GB", "256 GB"],
  ipadprom5_13:  ["256 GB", "512 GB", "1 TB", "2 TB"],
  ipadprom5_11:  ["256 GB", "512 GB", "1 TB", "2 TB"],
  ipadprom4_13:  ["256 GB", "512 GB", "1 TB", "2 TB"],
  ipadprom4_11:  ["256 GB", "512 GB", "1 TB", "2 TB"],
  ipadprom2_129: ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"],
  ipadprom2_11:  ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"],
  ipadprom1_129: ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"],
  ipadprom1_11:  ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"],
};

const SAMSUNG_PHONE_STORAGE: Record<string, Storage[]> = {
  s25u: ["256 GB", "512 GB", "1 TB"],
  s25plus: ["256 GB", "512 GB"],
  s25: ["128 GB", "256 GB", "512 GB"],
  s24u: ["256 GB", "512 GB", "1 TB"],
  s24plus: ["256 GB", "512 GB"],
  s24: ["128 GB", "256 GB"],
  s24fe: ["128 GB", "256 GB", "512 GB"],
  s23u: ["256 GB", "512 GB", "1 TB"],
  s23plus: ["256 GB", "512 GB"],
  s23: ["128 GB", "256 GB"],
  s23fe: ["128 GB", "256 GB"],
  s22u: ["128 GB", "256 GB", "512 GB", "1 TB"],
  s22plus: ["128 GB", "256 GB"],
  s22: ["128 GB", "256 GB"],
  s21u: ["128 GB", "256 GB", "512 GB"],
  s21plus: ["128 GB", "256 GB"],
  s21: ["128 GB", "256 GB"],
  s20u: ["128 GB", "512 GB"],
  s20plus: ["128 GB", "512 GB"],
  s20: ["128 GB"],
  s20fe: ["128 GB", "256 GB"],
  n20u: ["128 GB", "256 GB", "512 GB"],
  n20: ["128 GB"],
  zf6: ["256 GB", "512 GB", "1 TB"],
  zf5: ["256 GB", "512 GB", "1 TB"],
  zf4: ["256 GB", "512 GB", "1 TB"],
  zf3: ["256 GB", "512 GB"],
  zfl7: ["256 GB", "512 GB", "1 TB"],
  zfl6: ["256 GB", "512 GB", "1 TB"],
  zfl5: ["256 GB", "512 GB"],
  zfl4: ["128 GB", "256 GB", "512 GB"],
  zfl3: ["128 GB", "256 GB"],
};

const SAMSUNG_TABLET_STORAGE: Record<string, Storage[]> = {
  tabs10u: ["256 GB", "512 GB", "1 TB"],
  tabs10plus: ["256 GB", "512 GB"],
  tabs9u: ["256 GB", "512 GB", "1 TB"],
  tabs9plus: ["256 GB", "512 GB"],
  tabs9: ["128 GB", "256 GB"],
  tabs9fe: ["128 GB", "256 GB"],
  tabs8u: ["128 GB", "256 GB", "512 GB", "1 TB"],
  tabs8plus: ["128 GB", "256 GB", "512 GB"],
  tabs8: ["128 GB", "256 GB"],
  tabs7plus: ["128 GB", "256 GB", "512 GB"],
  tabs7: ["128 GB", "256 GB", "512 GB"],
  tabs7fe: ["64 GB", "128 GB"],
  tabs6lite: ["64 GB", "128 GB"],
  taba9plus: ["64 GB", "128 GB"],
  taba9: ["64 GB", "128 GB"],
  taba8: ["32 GB", "64 GB", "128 GB"],
  taba7lite: ["32 GB", "64 GB"],
  taba7: ["32 GB", "64 GB"],
  tabact5: ["128 GB", "256 GB"],
  tabact4pro: ["64 GB", "128 GB", "256 GB"],
  tabact3: ["64 GB", "128 GB"],
};

const PIXEL_STORAGE: Record<string, Storage[]> = {
  p9pf: ["256 GB", "512 GB", "1 TB"],
  p9pxl: ["128 GB", "256 GB", "512 GB", "1 TB"],
  p9p: ["128 GB", "256 GB", "512 GB", "1 TB"],
  p9: ["128 GB", "256 GB"],
  p8pf: ["256 GB", "512 GB", "1 TB"],
  p8p: ["128 GB", "256 GB", "512 GB", "1 TB"],
  p8: ["128 GB", "256 GB"],
  p8a: ["128 GB", "256 GB"],
  p7p: ["128 GB", "256 GB", "512 GB"],
  p7: ["128 GB", "256 GB"],
  p7a: ["128 GB"],
  p6p: ["128 GB", "256 GB", "512 GB"],
  p6: ["128 GB", "256 GB"],
  p6a: ["128 GB"],
  p5: ["128 GB"],
  p5a: ["128 GB"],
  pixtab: ["128 GB", "256 GB"],
};

const SURFACE_TABLET_STORAGE: Record<string, Storage[]> = {
  spro11: ["256 GB", "512 GB", "1 TB"],
  spro10: ["256 GB", "512 GB", "1 TB"],
  spro9: ["128 GB", "256 GB", "512 GB", "1 TB"],
  spro8: ["128 GB", "256 GB", "512 GB", "1 TB"],
};

const LAPTOP_DEFAULT: Storage[] = ["256 GB", "512 GB", "1 TB", "2 TB"];
const LAPTOP_HIGH_END: Storage[] = ["512 GB", "1 TB", "2 TB", "4 TB"];
const LAPTOP_BUDGET: Storage[]  = ["128 GB", "256 GB", "512 GB", "1 TB"];

const LAPTOP_STORAGE: Record<string, Storage[]> = {
  // MacBooks (Apple's actual configurable tiers)
  mbp16m5: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
  mbp14m5: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
  mbp16m4: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
  mbp14m4: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
  mbp16m3: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
  mbp14m3: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
  mbp16m2: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
  mbp14m2: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
  mbp16m1: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
  mbp14m1: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"],
  mbp13m2: ["256 GB", "512 GB", "1 TB", "2 TB"],
  mbp13m1: ["256 GB", "512 GB", "1 TB", "2 TB"],
  mba15m4: ["256 GB", "512 GB", "1 TB", "2 TB"],
  mba13m4: ["256 GB", "512 GB", "1 TB", "2 TB"],
  mba15m3: ["256 GB", "512 GB", "1 TB", "2 TB"],
  mba13m3: ["256 GB", "512 GB", "1 TB", "2 TB"],
  mba15m2: ["256 GB", "512 GB", "1 TB", "2 TB"],
  mba13m2: ["256 GB", "512 GB", "1 TB", "2 TB"],
  mba13m1: ["256 GB", "512 GB", "1 TB", "2 TB"],
  // Budget consumer
  hppav15: LAPTOP_BUDGET, hppav14: LAPTOP_BUDGET,
  dinspiron15: LAPTOP_BUDGET, dinspiron16: LAPTOP_BUDGET,
  aspire5: LAPTOP_BUDGET, aspire7: LAPTOP_BUDGET, asw3: LAPTOP_BUDGET,
  lideapad5: LAPTOP_BUDGET, lideapadflex: LAPTOP_BUDGET, lloq: LAPTOP_BUDGET,
  avivo16: LAPTOP_BUDGET,
  // High-end
  mtitan18: LAPTOP_HIGH_END, mraider18: LAPTOP_HIGH_END,
  arogstrix: LAPTOP_HIGH_END, rb18: LAPTOP_HIGH_END, rb16: LAPTOP_HIGH_END,
  dalien18: LAPTOP_HIGH_END, dalien16: LAPTOP_HIGH_END, dalienx16: LAPTOP_HIGH_END,
  dprec5690: LAPTOP_HIGH_END, llegion9: LAPTOP_HIGH_END,
  apredh18: LAPTOP_HIGH_END, apredh16: LAPTOP_HIGH_END,
  ltpp16: LAPTOP_HIGH_END, apbst16: LAPTOP_HIGH_END, hpzbook: LAPTOP_HIGH_END,
};

export function getStorageOptions(device: Device): Storage[] {
  const id = device.id;
  if (device.type === "Phone") {
    if (device.brand === "Apple")   return IPHONE_STORAGE[id]        ?? ["128 GB", "256 GB"];
    if (device.brand === "Samsung") return SAMSUNG_PHONE_STORAGE[id] ?? ["128 GB", "256 GB"];
    if (device.brand === "Google")  return PIXEL_STORAGE[id]         ?? ["128 GB", "256 GB"];
  }
  if (device.type === "Tablet") {
    if (device.brand === "Apple")     return IPAD_STORAGE[id]           ?? ["64 GB", "256 GB"];
    if (device.brand === "Samsung")   return SAMSUNG_TABLET_STORAGE[id] ?? ["64 GB", "128 GB", "256 GB"];
    if (device.brand === "Google")    return PIXEL_STORAGE[id]          ?? ["128 GB", "256 GB"];
    if (device.brand === "Microsoft") return SURFACE_TABLET_STORAGE[id] ?? ["128 GB", "256 GB", "512 GB", "1 TB"];
  }
  if (device.type === "Console") return CONSOLE_STORAGE[id] ?? ["256 GB", "512 GB", "1 TB"];
  if (device.type === "Camera")  return ["32 GB", "64 GB", "128 GB", "256 GB", "512 GB"];
  if (device.type === "Drone")   return ["32 GB", "64 GB", "128 GB", "256 GB"];
  return LAPTOP_STORAGE[id] ?? LAPTOP_DEFAULT;
}

const CONSOLE_STORAGE: Record<string, Storage[]> = {
  ps5pro: ["2 TB"],
  ps5slim: ["1 TB"],
  ps5: ["512 GB", "1 TB"],
  ps5de: ["1 TB"],
  ps4pro: ["1 TB", "2 TB"],
  ps4slim: ["1 TB"],
  psportal: ["64 GB"],
  xsx: ["1 TB", "2 TB"],
  xss: ["512 GB", "1 TB"],
  xb1x: ["1 TB"],
  xb1s: ["1 TB"],
  switch2: ["256 GB"],
  switcholed: ["64 GB"],
  switchlite: ["32 GB"],
  switch: ["32 GB"],
  sdoled: ["512 GB", "1 TB"],
  sdlcd: ["64 GB", "256 GB", "512 GB"],
  rogally_x: ["1 TB"],
  rogally: ["512 GB"],
  legiongo: ["256 GB", "512 GB", "1 TB"],
  q3: ["128 GB", "512 GB"],
  q3s: ["128 GB", "256 GB"],
  q2: ["128 GB", "256 GB"],
  qpro: ["256 GB"],
  psvr2: ["64 GB"],
};

// Wi-Fi-only tablets (no cellular variant exists)
const TABLET_NO_CELLULAR = new Set<string>([
  "taba7lite", "taba7", "taba8",
  "pixtab",
]);

export function tabletSupportsCellular(device: Device): boolean {
  if (device.type !== "Tablet") return true;
  return !TABLET_NO_CELLULAR.has(device.id);
}

// ---------- Tier ranking for sorting (high-end → low-end) ----------
// Higher number = higher tier. Sort uses (tier desc, generation desc, id).

const TABLET_TIER: Record<string, number> = {
  // Apple iPads — Pro > Air > base > mini, newer first via gen number
  ipadprom4_13: 100, ipadprom4_11: 99,
  ipadprom2_129: 90, ipadprom2_11: 89,
  ipadprom1_129: 80, ipadprom1_11: 79,
  ipadair13m3: 70, ipadair11m3: 69,
  ipadair13m2: 65, ipadair11m2: 64,
  ipadair5: 55, ipadair4: 50,
  ipadm7: 40, ipadm6: 35,
  ipad11: 30, ipad10: 25, ipad9: 20,

  // Samsung — Ultra > + > base > FE > Lite > A series > Active(rugged budget)
  tabs10u: 100, tabs10plus: 95,
  tabs9u: 90, tabs9plus: 85, tabs9: 80, tabs9fe: 70,
  tabs8u: 75, tabs8plus: 65, tabs8: 60,
  tabs7plus: 55, tabs7: 50, tabs7fe: 40,
  tabs6lite: 30,
  taba9plus: 25, taba9: 22, taba8: 18, taba7: 15, taba7lite: 12,
  tabact5: 20, tabact4pro: 17, tabact3: 13,

  // Microsoft Surface Pro
  spro11: 100, spro10: 90, spro9: 80, spro8: 70,

  // Google
  pixtab: 50,
};

export function compareTablets(a: Device, b: Device): number {
  const ta = TABLET_TIER[a.id] ?? 0;
  const tb = TABLET_TIER[b.id] ?? 0;
  if (tb !== ta) return tb - ta; // descending
  return a.id.localeCompare(b.id);
}

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
