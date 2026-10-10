# Spandhan · Gemini image prompts

Prompts for every image on the Spandhan storefront. Each one is complete on its own: copy the text inside the box and paste it into Gemini.

## How to use these

1. Open Gemini and pick its image-generation option (Create image).
2. Paste **one prompt per message**. Start a **new chat every 8–10 images**; long chats drift off-style.
3. Download each image and **rename it to the file name shown above its prompt**, for example `m1.jpg`. These names are how I'll match each image to its product.
4. Check every image before you keep it. It should have **no logos, no brand names and no garbled text**, and it shouldn't look like a real branded product (an iPhone, a Samsung Galaxy, etc.). If it does, regenerate it, or reply to Gemini with: *"Remove all logos and text and keep everything else the same."*
5. When you're done, either attach the images in our chat, or put them in your `SpandhanAI` folder under `images/products/` (product photos) and `images/hero/` (banners), then `git add -A`, `git commit -m "Add images"` and `git push`. I'll then switch the site from icons to your images.

**Sizes:** product photos are square (1024×1024). Hero banners are wide: ask for **21:9**, or 16:9 if 21:9 isn't offered. JPG or PNG are both fine.

**Fixing a single image:** reply in the same chat with what to change, e.g. *"Same image, but make the background plain pale mint green #E3EFE9."*

---

## Hero banners (3)

These go behind the big headline at the top of the homepage. The headline is placed over the left half, so the left half has to stay empty.

### `hero-1.jpg` · Utsav Sale · Festive Home (Diwali)

```text
Wide 21:9 website hero banner image, high resolution (about 2400x1030). A festive Indian home at dusk during Diwali: rows of glowing brass diyas and small clay lamps on a wooden ledge, strings of warm fairy lights, marigold garlands and a colourful rangoli on the floor. Deep maroon-red to warm saffron-orange colour palette to match a gradient from #5B1A12 to #E48A2A. All the subject matter is placed in the RIGHT half of the image; the LEFT half is a soft, dark, out-of-focus maroon area with nothing in it (text will be placed there later). Cinematic soft lighting, shallow depth of field, rich but not oversaturated colours, photorealistic. No text, no letters, no numbers, no logos, no brand names, no watermarks, no people's faces.
```

### `hero-2.jpg` · 5G phones & accessories

```text
Wide 21:9 website hero banner image, high resolution (about 2400x1030). Three modern generic smartphones (no logos, simple pill-shaped camera modules) floating at playful angles with a pair of wireless earbuds and a smartwatch, against a deep teal-to-sea-green gradient background from #0B3A4A to #4FB3A5, with soft glowing light trails. All products are placed in the RIGHT half of the image; the LEFT half is a smooth, empty, dark teal area (text will be placed there later). Cinematic soft lighting, shallow depth of field, rich but not oversaturated colours, photorealistic. No text, no letters, no numbers, no logos, no brand names, no watermarks, no people's faces.
```

### `hero-3.jpg` · Books Week

```text
Wide 21:9 website hero banner image, high resolution (about 2400x1030). A cosy reading scene: a tall stack of colourful paperback books with blank, unreadable spines, one open book with pages fanning, a cup of masala chai in a glass and a small reading lamp, against a deep indigo-to-lavender gradient background from #2E2350 to #A68BD8. All objects are in the RIGHT half of the image; the LEFT half is a smooth, empty, dark indigo area (text will be placed there later). Cinematic soft lighting, shallow depth of field, rich but not oversaturated colours, photorealistic. No text, no letters, no numbers, no logos, no brand names, no watermarks, no people's faces.
```

---

## Mobiles (5)

### `m1.jpg` · Volt X5 5G phone, Midnight Teal

```text
A modern slim smartphone in a deep midnight teal matte finish, shown from the back at a three-quarter angle with a second identical phone beside it showing the front. The front screen shows an abstract teal-and-gold gradient wallpaper. Rear camera module is a simple vertical pill shape with two round lenses and a small flash. Thin flat aluminium frame. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless pale lavender grey background (hex #E6E8F3), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `m2.jpg` · Volt Neo 4G phone, Coral

```text
An affordable smartphone in a glossy coral-orange back, shown from the back at a slight angle with a second identical phone beside it showing the front. The screen shows a soft abstract coral gradient wallpaper with a small teardrop notch. Single square camera bump with two round lenses. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless soft blush pink background (hex #F3E3E0), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `m3.jpg` · Orbit Fold Lite foldable phone

```text
A book-style foldable smartphone half-open like a book, standing upright, in a graphite grey finish. Both inner screens show one continuous abstract aurora wallpaper in purple and teal. Visible slim hinge. A thin outer cover screen on the closed side. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless pale lavender grey background (hex #E6E8F3), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `m4.jpg` · Sonora ANC Pro earbuds

```text
A pair of matte white wireless earbuds with short stems, one resting in front of an open oval charging case and one inside it. The case is matte white with a tiny teal status light. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless soft mint green background (hex #E3EFE9), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `m5.jpg` · Pulse Fit 2 smartwatch

```text
A rectangular smartwatch with rounded corners and a black silicone strap, laid in a gentle curve. The AMOLED screen shows a colourful fitness watch face with activity rings and a step count (numbers are fine, no words). One side button on the right. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless pale sky blue background (hex #E1EEF3), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

## Electronics (5)

### `e1.jpg` · Lumina 43" 4K smart TV

```text
A 43-inch thin-bezel smart TV on two slim angled feet, front view at a slight angle. The screen shows a vivid 4K photo of misty green tea-garden hills at sunrise. Matte black frame. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless pale lavender grey background (hex #E6E8F3), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `e2.jpg` · Arka Book 14 laptop

```text
A slim silver aluminium laptop, open at about 110 degrees, three-quarter front view. The screen shows a calm abstract wave wallpaper in teal and orange. Backlit keyboard with a soft white glow. No logo on the lid or below the screen. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless pale sage green background (hex #E9F0DC), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `e3.jpg` · Taal Boom Bluetooth speaker

```text
A cylindrical portable Bluetooth speaker with a fabric mesh body in deep terracotta red, a rubber strap loop at one end and simple plus/minus/play buttons on top. Lying on its side, three-quarter view, with a few water droplets on the fabric to suggest it's waterproof. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless warm cream background (hex #F6EAD6), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `e4.jpg` · Drishti mirrorless camera

```text
A compact mirrorless camera body in black with a textured grip, fitted with a short silver-and-black kit zoom lens, three-quarter front view. The flip screen is tilted out to the side and shows a blurred landscape. No brand name or logo on the body. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless pale sky blue background (hex #E1EEF3), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `e5.jpg` · Khel Pad game controller

```text
A wireless game controller in matte charcoal black with two offset thumbsticks, a D-pad and four round face buttons in teal, orange, yellow and pink (no letters or symbols on the buttons). A small phone clip attachment lies beside it. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless soft blush pink background (hex #F3E3E0), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

## Fashion (5)

### `f1.jpg` · Rangoli cotton anarkali kurta set

```text
A women's cotton anarkali kurta in rust orange with an indigo hand-block-printed floral pattern, flared skirt, on an invisible mannequin (ghost mannequin style), with a matching off-white dupatta with indigo border draped over one shoulder and matching straight pants. Full-length, front view. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless soft blush pink background (hex #F3E3E0), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `f2.jpg` · Men's festive silk-blend kurta, mustard

```text
A men's mustard-yellow silk-blend kurta with a mandarin collar, subtle self-woven texture and small gold buttons, on an invisible mannequin (ghost mannequin style), with off-white churidar pants. Front view, full length. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless warm cream background (hex #F6EAD6), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `f3.jpg` · Trailrun running shoes

```text
A pair of lightweight men's running shoes in grey knit mesh with neon-orange accents and a white cushioned sole, one shoe in side profile and one angled behind it. Generic athletic design, no logos or brand stripes. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless warm cream background (hex #F6EAD6), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `f4.jpg` · Yatra 30L laptop backpack

```text
A 30-litre laptop backpack in dark teal water-resistant fabric with a black zip, padded shoulder straps, a small front zip pocket and a side mesh bottle pocket. Standing upright, three-quarter front view. No logos or patches. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless soft mint green background (hex #E3EFE9), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `f5.jpg` · Kundan jhumka earrings

```text
A pair of gold-plated kundan jhumka earrings with small white stones, a red and green enamel detail and tiny pearl drops along the bell-shaped bottom. Hanging side by side from an invisible support, close-up, macro detail. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless soft blush pink background (hex #F3E3E0), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

## Home & Kitchen (8)

### `h1.jpg` · Annapurna hard-anodised kadai

```text
A 3-litre hard-anodised black kadai (round-bottomed Indian wok) with two riveted steel side handles and a clear toughened glass lid with a steel knob and a steam vent, three-quarter top view. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless warm cream background (hex #F6EAD6), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `h2.jpg` · Chakki Pro mixer grinder

```text
An Indian kitchen mixer grinder in white and teal with a rotary speed knob on the front, one large stainless steel jar mounted on top with a clear lid, and two smaller steel jars standing beside it. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless soft mint green background (hex #E3EFE9), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `h3.jpg` · Thermal steel water bottle, 1L

```text
A 1-litre insulated stainless steel water bottle with a powder-coated matte teal body and a brushed steel cap, standing upright, with a light condensation-free finish. A second bottle in matte mustard yellow stands slightly behind it. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless pale sky blue background (hex #E1EEF3), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `h4.jpg` · Brass diya set of 6

```text
Six small polished brass diyas (Indian oil lamps) arranged in a gentle curve, each lit with a small warm flame on a cotton wick. A few marigold petals scattered around them. Warm festive glow. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless soft blush pink background (hex #F3E3E0), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `h5.jpg` · Tulsi plant pot, ceramic

```text
A healthy green tulsi (holy basil) plant in a round glazed ceramic pot in deep terracotta with a matching saucer underneath, front view. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless pale sage green background (hex #E9F0DC), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `h6.jpg` · South Indian filter coffee maker

```text
A traditional South Indian stainless steel coffee filter (two stacked cylinders with a lid and a perforated press) standing beside a steel tumbler and dabarah (small bowl) filled with frothy filter coffee. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless warm cream background (hex #F6EAD6), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `h7.jpg` · Marigold LED string lights

```text
A coil of warm-white LED fairy string lights loosely piled in a gentle spiral, glowing softly, with a few loose orange and yellow marigold flowers beside them. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless warm cream background (hex #F6EAD6), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `h8.jpg` · Two-seater sofa cover set

```text
A modern two-seater sofa fitted with a stretch cotton cover in indigo with a small white geometric block-print pattern, with two matching cushion covers. Front view, slightly angled. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless pale lavender grey background (hex #E6E8F3), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

## Beauty & Fitness (3)

### `y1.jpg` · Kumkumadi glow face oil, 30ml

```text
A 30ml amber glass dropper bottle with a gold collar and a black rubber bulb, standing next to a few saffron threads and small fresh rose petals. A single golden drop of oil on the surface beside it. No label text. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless soft blush pink background (hex #F3E3E0), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `y2.jpg` · Matte liquid lipstick set of 4

```text
Four matte liquid lipstick tubes with gold caps standing in a row, with their applicator wands laid in front, each beside a swatch smear of its colour: brick red, deep berry, rosewood nude and coral. No label text. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless soft blush pink background (hex #F3E3E0), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

### `y3.jpg` · Resistance band set

```text
A set of five flat latex-free resistance loop bands in graded colours (yellow, orange, red, blue, black), neatly fanned out, with two foam-grip handles, a door anchor and a small black drawstring pouch. Square 1:1 e-commerce product photo, 1024x1024. Studio lighting, soft diffused key light from the upper left, gentle natural shadow under the product. Product centred, filling about 70% of the frame, sharp focus, photorealistic. Plain seamless pale sage green background (hex #E9F0DC), no props unless stated. No text, no logos, no brand names, no watermarks, no recognisable real-world brand designs.
```

## Books (6)

Book covers are the one place where text is wanted. Gemini sometimes misspells it, so check the title and regenerate if it's wrong. If the Hindi title (`b3`) keeps coming out garbled, add *"no text on the cover"* to the end of the prompt.

### `b1.jpg` · The Monsoon Ledger (novel)

```text
A literary-fiction cover: an illustrated old Mumbai street in heavy monsoon rain at dusk, a single person with a black umbrella, muted blue and amber tones, elegant serif title. The only text on the cover is the title, spelled exactly: "The Monsoon Ledger". No author name, no other words. Square 1:1 e-commerce product photo, 1024x1024. A single paperback book standing upright at a slight angle, showing the front cover and a sliver of the spine. Studio lighting, soft shadow. Plain seamless warm cream background (hex #F6EAD6). No logos, no barcodes, no publisher marks, no watermarks.
```

### `b2.jpg` · UPSC Prelims 2027: Polity Workbook

```text
A clean exam-prep cover: a bold navy and white layout with a simple flat illustration of a classical government building with columns and a balance scale, a yellow strip along the top. Clear bold sans-serif title. The only text on the cover is the title, spelled exactly: "UPSC Prelims 2027 Polity Workbook". No author name, no other words. Square 1:1 e-commerce product photo, 1024x1024. A single paperback book standing upright at a slight angle, showing the front cover and a sliver of the spine. Studio lighting, soft shadow. Plain seamless pale lavender grey background (hex #E6E8F3). No logos, no barcodes, no publisher marks, no watermarks.
```

### `b3.jpg` · Rasoi ki Kahaniyan (Hindi short stories)

```text
A warm illustrated cover of an Indian home kitchen: brass utensils, a clay stove and a window with sunlight, painted in a gouache style with turmeric yellow and red tones. The title in Devanagari script. The only text on the cover is the title, spelled exactly: "रसोई की कहानियाँ". No author name, no other words. Square 1:1 e-commerce product photo, 1024x1024. A single paperback book standing upright at a slight angle, showing the front cover and a sliver of the spine. Studio lighting, soft shadow. Plain seamless soft blush pink background (hex #F3E3E0). No logos, no barcodes, no publisher marks, no watermarks.
```

### `b4.jpg` · Panchatantra Picture Stories, set of 5

```text
Show five slim children's picture books fanned out instead of one book. Each cover has a cheerful, colourful hand-drawn animal from a fable: a monkey on a tree, a crocodile in a river, a lion, a crow with a pot, a tortoise. Rounded playful lettering on the front book only. The only text on the cover is the title, spelled exactly: "Panchatantra Picture Stories". No author name, no other words. Square 1:1 e-commerce product photo, 1024x1024. A single paperback book standing upright at a slight angle, showing the front cover and a sliver of the spine. Studio lighting, soft shadow. Plain seamless pale sage green background (hex #E9F0DC). No logos, no barcodes, no publisher marks, no watermarks.
```

### `b5.jpg` · Coding for Class 8: Python basics

```text
A bright, friendly school textbook cover: flat illustration of a smiling student at a laptop with floating code brackets, gears and a small snake-shaped curly line, in teal, yellow and white. Subtitle text 'Python basics' under the title. The only text on the cover is the title, spelled exactly: "Coding for Class 8". No author name, no other words. Square 1:1 e-commerce product photo, 1024x1024. A single paperback book standing upright at a slight angle, showing the front cover and a sliver of the spine. Studio lighting, soft shadow. Plain seamless pale sky blue background (hex #E1EEF3). No logos, no barcodes, no publisher marks, no watermarks.
```

### `b6.jpg` · Mumbai After Midnight (thriller)

```text
A dark crime-thriller cover: a moody night view of a city sea-front promenade with a curve of streetlights reflected on wet road, deep black and neon-red tones, a lone silhouette. Bold condensed title. The only text on the cover is the title, spelled exactly: "Mumbai After Midnight". No author name, no other words. Square 1:1 e-commerce product photo, 1024x1024. A single paperback book standing upright at a slight angle, showing the front cover and a sliver of the spine. Studio lighting, soft shadow. Plain seamless soft mint green background (hex #E3EFE9). No logos, no barcodes, no publisher marks, no watermarks.
```

---

## Already covered

The homepage category tiles reuse the product photos, so they don't need prompts of their own:

- Kitchen tile: `h1`, `h2`, `h3`, `h4`
- Ethnic wear tile: `f1`, `f5`, `f3`, `f4`
- Smartwatch tile: `m5`
- Home entertainment tile: `e1`, `m4`, `e2`, `e5`

**Total: 3 banners + 32 product photos = 35 images.**
