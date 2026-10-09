# SpandhanAI · Spandhan storefront

A demo Indian marketplace storefront built with **React 18 + Vite**. The brand, products and prices are all fictional.

**Live site:** https://ak9312.github.io/SpandhanAI/

## Features
- **Live search with suggestions.** Type in the header search to see matches as you type; arrow keys and Enter work too. You can also limit the search to one category.
- **Results page with filters.** Filter by category, price, customer rating and discount. Sort by price, rating or discount. On phones the filters open as a bottom sheet.
- **Quick view.** Open any product to see its highlights, savings and delivery info.
- **Cart drawer.** Change quantities and see M.R.P. vs. discount totals. A free-delivery progress bar fills up to ₹499, and you can place a demo order.
- **Wishlist.** Tap the heart on any product. The wishlist page is the heart icon in the header.
- **"Inspired by your cart".** This shelf suggests products that match what's in your cart.
- **Today's Deals countdown** to midnight IST, plus an animated hero carousel (swipe on phones, pauses on hover).
- **Light and dark mode.** It follows your system setting, with a toggle in the header.
- **Saved between visits.** The cart, wishlist and theme are kept in localStorage.
- **Responsive** down to 360px wide, keyboard accessible, and respects reduced-motion settings.

## Project layout
```
app/                 React source (edit here)
  src/
    data/products.js   catalogue
    store.jsx          cart, wishlist, search & filter state (React context)
    components/        Header, Hero, Home, Results, ProductCard, Overlays (quick view, cart, footer)
    styles.css
index.html, assets/  built site served by GitHub Pages (generated, don't edit by hand)
```

## Develop
```bash
cd app
npm install
npm run dev      # http://localhost:5173
```

## Publish
```bash
cd app
npm run build    # writes index.html + assets/ to the repo root
git add -A && git commit -m "Update site" && git push
```
GitHub Pages is set to **Deploy from a branch → main / (root)**, so pushing a new build updates the live site within a minute or two.
