// Fictional demo catalogue. Every brand and product name here is made up.
import {
  Smartphone, Headphones, Laptop, Watch, Shirt, CookingPot, BookOpen, Lamp,
  Footprints, Tv, Sprout, Backpack, Blend, Milk, Gem, Camera, Speaker,
  Gamepad2, Palette, Coffee, Flower2, Sofa, Lightbulb, Dumbbell,
} from "lucide-react";

export const CATEGORIES = [
  "Mobiles",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Books",
  "Beauty & Fitness",
];

const p = (id, name, brand, category, Icon, tint, price, mrp, rating, reviews, extra = {}) => ({
  id, name, brand, category, Icon, tint, price, mrp, rating, reviews,
  discount: Math.round((1 - price / mrp) * 100),
  ...extra,
});

export const PRODUCTS = [
  // Mobiles
  p("m1", "Volt X5 5G (8GB, 128GB), Midnight Teal", "Volt", "Mobiles", Smartphone, 3, 12999, 21999, 4.2, 18402, { deal: true,
    highlights: ["6.7\" 120Hz AMOLED display", "50MP dual camera with OIS", "5000mAh battery, 45W charging", "2 years of OS updates"] }),
  p("m2", "Volt Neo 4G (4GB, 64GB), Coral", "Volt", "Mobiles", Smartphone, 4, 7499, 10999, 4.0, 9321, {
    highlights: ["6.5\" HD+ display", "13MP AI camera", "Dual SIM, expandable storage", "5000mAh battery"] }),
  p("m3", "Orbit Fold Lite 5G (12GB, 256GB)", "Orbit", "Mobiles", Smartphone, 3, 64999, 89999, 4.4, 1288, {
    highlights: ["7.6\" foldable inner display", "Snapdragon-class chipset", "IPX4 splash resistance", "Wireless charging"] }),
  p("m4", "Sonora ANC Pro wireless earbuds, 40h battery", "Sonora", "Mobiles", Headphones, 1, 1799, 4999, 4.1, 9215, { deal: true,
    highlights: ["Active noise cancellation up to 35dB", "40 hours total playback", "Low-latency game mode", "IPX5 sweat resistant"] }),
  p("m5", "Pulse Fit 2 smartwatch, 1.85\" AMOLED, BT calling", "Pulse", "Mobiles", Watch, 6, 2299, 7999, 4.0, 31088, { deal: true,
    highlights: ["Bluetooth calling with dial pad", "SpO2 and heart-rate tracking", "100+ sports modes", "7-day battery"] }),

  // Electronics
  p("e1", "Lumina 43\" 4K Ultra HD smart Google TV", "Lumina", "Electronics", Tv, 3, 24990, 42999, 4.3, 6734, { deal: true,
    highlights: ["4K HDR10 panel", "Built-in Chromecast", "30W speakers with Dolby Audio", "3 HDMI, 2 USB ports"] }),
  p("e2", "Arka Book 14 laptop, Ryzen 5, 16GB RAM, 512GB SSD", "Arka", "Electronics", Laptop, 5, 41990, 58990, 4.4, 2190, { deal: true,
    highlights: ["14\" FHD IPS anti-glare screen", "Backlit keyboard", "1.4kg aluminium body", "Windows 11 Home + Office"] }),
  p("e3", "Taal Boom portable Bluetooth speaker, 20W", "Taal", "Electronics", Speaker, 2, 1499, 3999, 4.2, 15402, {
    highlights: ["20W stereo sound", "IPX7 waterproof", "12-hour playback", "Pair two for party mode"] }),
  p("e4", "Drishti mirrorless camera with 15–45mm lens", "Drishti", "Electronics", Camera, 6, 38990, 49990, 4.5, 842, {
    highlights: ["24MP APS-C sensor", "4K video at 30fps", "Flip screen for vlogging", "Wi-Fi photo transfer"] }),
  p("e5", "Khel Pad wireless controller for PC and mobile", "Khel", "Electronics", Gamepad2, 4, 1199, 2499, 3.9, 4107, { deal: true,
    highlights: ["Works with PC, Android, TV", "Dual vibration motors", "20-hour battery", "Phone clip included"] }),

  // Fashion
  p("f1", "Rangoli cotton anarkali kurta set with dupatta", "Rangoli", "Fashion", Shirt, 4, 899, 2899, 4.0, 12561, { deal: true,
    highlights: ["Pure cotton, hand block print", "Kurta, pant and dupatta", "Sizes XS to 3XL", "Machine washable"] }),
  p("f2", "Men's festive silk-blend kurta, mustard", "Rangoli", "Fashion", Shirt, 2, 1099, 2999, 4.1, 5874, {
    highlights: ["Silk-blend fabric", "Mandarin collar", "Regular fit", "Pairs with churidar or jeans"] }),
  p("f3", "Trailrun men's running shoes, mesh, lightweight", "Trailrun", "Fashion", Footprints, 2, 1249, 3499, 3.9, 7402, { deal: true,
    highlights: ["Breathable knit mesh", "Cushioned EVA sole", "Weighs 240g per shoe", "Sizes UK 6 to 11"] }),
  p("f4", "Yatra 30L laptop backpack, water resistant", "Yatra", "Fashion", Backpack, 1, 749, 2199, 4.2, 22330, { deal: true,
    highlights: ["Fits 15.6\" laptops", "Rain cover included", "USB charging port", "3 compartments"] }),
  p("f5", "Kundan jhumka earrings, gold-plated", "Zari", "Fashion", Gem, 4, 349, 999, 4.3, 3390, {
    highlights: ["Gold-plated brass", "Lightweight, 12g a pair", "Hypoallergenic hooks", "Comes in a gift box"] }),

  // Home & Kitchen
  p("h1", "Annapurna hard-anodised kadai, 3L, with glass lid", "Annapurna", "Home & Kitchen", CookingPot, 2, 1149, 2490, 4.4, 14907, { bestseller: true,
    highlights: ["Works on gas and induction", "4mm thick base", "Toughened glass lid", "5-year warranty"] }),
  p("h2", "Chakki Pro 750W mixer grinder, 3 jars", "Chakki", "Home & Kitchen", Blend, 1, 2799, 5299, 4.2, 41276, { bestseller: true, deal: true,
    highlights: ["750W copper motor", "3 stainless steel jars", "Overload protection", "2-year warranty"] }),
  p("h3", "Thermal steel water bottle, 1L, hot & cold 24h", "Yatra", "Home & Kitchen", Milk, 6, 499, 999, 4.3, 58114, { bestseller: true,
    highlights: ["Keeps hot for 18h, cold for 24h", "Leak-proof lid", "Food-grade 304 steel", "Fits car cup holders"] }),
  p("h4", "Brass diya set of 6 for Diwali pooja", "Utsav Home", "Home & Kitchen", Lamp, 4, 649, 1299, 4.5, 3882, { bestseller: true, deal: true,
    highlights: ["Solid brass, hand finished", "Set of 6 diyas", "Reusable every festival", "Polishing cloth included"] }),
  p("h5", "Tulsi plant pot, ceramic, with drainage", "Utsav Home", "Home & Kitchen", Sprout, 5, 399, 899, 4.1, 5209, { bestseller: true,
    highlights: ["Glazed ceramic", "Drainage hole and saucer", "8-inch diameter", "Indoor and balcony use"] }),
  p("h6", "Filter coffee maker, stainless steel, 4 cups", "Kaapi", "Home & Kitchen", Coffee, 2, 449, 799, 4.6, 7731, { bestseller: true,
    highlights: ["Traditional South Indian filter", "Makes 4 cups of decoction", "Rust-proof steel", "Dishwasher safe"] }),
  p("h7", "Marigold LED string lights, 10m, warm white", "Utsav Home", "Home & Kitchen", Lightbulb, 2, 299, 799, 4.0, 19870, { deal: true,
    highlights: ["100 LEDs over 10m", "8 lighting modes", "Plug-in, no batteries", "Safe for indoor use"] }),
  p("h8", "Two-seater cotton sofa cover set", "Ghar", "Home & Kitchen", Sofa, 3, 899, 1999, 3.9, 2210, {
    highlights: ["Stretchable cotton blend", "Fits most 2-seaters", "Anti-slip grip", "Machine washable"] }),

  // Books
  p("b1", "The Monsoon Ledger (novel, paperback)", "Kitab House", "Books", BookOpen, 2, 249, 399, 4.5, 3118, { book: true,
    highlights: ["Paperback, 312 pages", "English", "Literary fiction", "Ships in 1 day"] }),
  p("b2", "UPSC Prelims 2027: Polity Workbook", "Pariksha Press", "Books", BookOpen, 3, 385, 595, 4.6, 12640, { book: true,
    highlights: ["Updated for 2027 syllabus", "1,200 practice questions", "Answer explanations", "English and Hindi editions"] }),
  p("b3", "रसोई की कहानियाँ (Hindi, paperback)", "Kitab House", "Books", BookOpen, 4, 199, 299, 4.4, 981, { book: true,
    highlights: ["Paperback, 184 pages", "Hindi", "Short stories", "Ships in 1 day"] }),
  p("b4", "Panchatantra Picture Stories, set of 5", "Nanha Books", "Books", BookOpen, 5, 349, 750, 4.7, 6205, { book: true, deal: true,
    highlights: ["5 illustrated books", "Ages 3 to 8", "Large print", "Thick, tear-resistant pages"] }),
  p("b5", "Coding for Class 8: Python basics", "Pariksha Press", "Books", BookOpen, 6, 299, 450, 4.3, 1402, { book: true,
    highlights: ["CBSE-aligned", "40 hands-on projects", "Online code downloads", "Full colour"] }),
  p("b6", "Mumbai After Midnight (thriller)", "Kitab House", "Books", BookOpen, 1, 229, 399, 4.1, 2775, { book: true,
    highlights: ["Paperback, 280 pages", "English", "Crime thriller", "Ships in 1 day"] }),

  // Beauty & Fitness
  p("y1", "Kumkumadi glow face oil, 30ml", "Ayur Leaf", "Beauty & Fitness", Flower2, 4, 549, 995, 4.2, 8840, { deal: true,
    highlights: ["Saffron and 16 herbs", "For all skin types", "Paraben-free", "Use at night"] }),
  p("y2", "Matte liquid lipstick set of 4", "Rang", "Beauty & Fitness", Palette, 4, 449, 1196, 4.0, 6011, {
    highlights: ["4 festive shades", "Long-wear, transfer-proof", "Vitamin E enriched", "Cruelty-free"] }),
  p("y3", "Resistance band set for home workouts", "FitGhar", "Beauty & Fitness", Dumbbell, 5, 399, 1299, 4.1, 11230, {
    highlights: ["5 resistance levels", "Door anchor and handles", "Latex-free", "Carry pouch"] }),
];

export const TINTS = ["--tile-1", "--tile-2", "--tile-3", "--tile-4", "--tile-5", "--tile-6"];
export const tintVar = (n) => `var(${TINTS[(n - 1) % 6]})`;

export const inr = (n) => n.toLocaleString("en-IN");

export const FREE_DELIVERY_AT = 499;

export const getProduct = (id) => PRODUCTS.find((x) => x.id === id);
