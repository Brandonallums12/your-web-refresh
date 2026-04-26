export type Brand = "Apple" | "Samsung" | "Google" | "Microsoft" | "Dell" | "HP" | "Lenovo" | "ASUS" | "Razer" | "MSI" | "Acer";
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
