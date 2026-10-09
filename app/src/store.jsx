import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { PRODUCTS, getProduct, FREE_DELIVERY_AT } from "./data/products.js";

// localStorage can be unavailable (private mode, sandboxed iframes) — never let it break the app.
function usePersisted(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw == null ? initial : JSON.parse(raw);
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ }
  }, [key, value]);
  return [value, setValue];
}

const StoreContext = createContext(null);
export const useStore = () => useContext(StoreContext);

export const DEFAULT_FILTERS = { maxPrice: 70000, minRating: 0, minDiscount: 0 };

export function StoreProvider({ children }) {
  const [cart, setCart] = usePersisted("spandhan.cart", {});          // { productId: qty }
  const [wishlist, setWishlist] = usePersisted("spandhan.wishlist", []);
  const [theme, setTheme] = usePersisted("spandhan.theme", null);     // null = follow system

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [dealsOnly, setDealsOnly] = useState(false);
  const [wishOnly, setWishOnly] = useState(false);
  const [view, setView] = useState("home"); // "home" | "results"
  const [sort, setSort] = useState("featured");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [quickViewId, setQuickViewId] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef();

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
  }, [theme]);

  const notify = useCallback((msg) => {
    setToast({ msg, key: Date.now() });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2400);
  }, []);

  const addToCart = useCallback((id, qty = 1) => {
    setCart((c) => ({ ...c, [id]: Math.min(10, (c[id] || 0) + qty) }));
    notify(`Added to cart: ${getProduct(id).name}`);
  }, [setCart, notify]);

  const setQty = useCallback((id, qty) => {
    setCart((c) => {
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = Math.min(10, qty);
      return next;
    });
  }, [setCart]);

  const toggleWish = useCallback((id) => {
    const has = wishlist.includes(id);
    setWishlist((w) => (has ? w.filter((x) => x !== id) : [...w, id]));
    notify(has ? "Removed from wishlist" : "Saved to your wishlist");
  }, [wishlist, setWishlist, notify]);

  const browse = useCallback(({ q = "", cat = "All", deals = false, wish = false } = {}) => {
    setQuery(q);
    setCategory(cat);
    setDealsOnly(deals);
    setWishOnly(wish);
    setView("results");
    setFilters(DEFAULT_FILTERS);
    setSort("featured");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goHome = useCallback(() => {
    browse();
    setView("home");
  }, [browse]);

  const cartLines = useMemo(
    () => Object.entries(cart)
      .map(([id, qty]) => ({ product: getProduct(id), qty }))
      .filter((l) => l.product),
    [cart]
  );
  const cartCount = cartLines.reduce((n, l) => n + l.qty, 0);
  const subtotal = cartLines.reduce((n, l) => n + l.qty * l.product.price, 0);
  const mrpTotal = cartLines.reduce((n, l) => n + l.qty * l.product.mrp, 0);
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_AT ? 0 : 40;

  const isBrowsing = view === "results";

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = PRODUCTS.filter((p) =>
      (category === "All" || p.category === category) &&
      (!dealsOnly || p.deal) &&
      (!wishOnly || wishlist.includes(p.id)) &&
      (!q || `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q)) &&
      p.price <= filters.maxPrice &&
      p.rating >= filters.minRating &&
      p.discount >= filters.minDiscount
    );
    const sorters = {
      featured: (a, b) => b.reviews * b.rating - a.reviews * a.rating,
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      rating: (a, b) => b.rating - a.rating,
      discount: (a, b) => b.discount - a.discount,
    };
    return [...list].sort(sorters[sort]);
  }, [query, category, dealsOnly, wishOnly, wishlist, filters, sort]);

  const value = {
    cart, cartLines, cartCount, subtotal, mrpTotal, delivery, addToCart, setQty,
    wishlist, toggleWish,
    theme, setTheme,
    query, setQuery, category, setCategory, dealsOnly, wishOnly, browse, goHome, isBrowsing,
    sort, setSort, filters, setFilters, results,
    quickViewId, setQuickViewId, cartOpen, setCartOpen,
    toast, notify,
  };
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
