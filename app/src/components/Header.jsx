import { useEffect, useRef, useState } from "react";
import { Search, MapPin, ShoppingCart, Menu, Globe, Heart, Moon, Sun } from "lucide-react";
import { useStore } from "../store.jsx";
import { CATEGORIES, PRODUCTS } from "../data/products.js";

function SearchBox({ compact = false }) {
  const { query, category, browse } = useStore();
  const [text, setText] = useState(query);
  const [cat, setCat] = useState(category);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const boxRef = useRef();

  // Keep the box in sync when navigation happens elsewhere (logo, category bar).
  useEffect(() => { setText(query); }, [query]);
  useEffect(() => { setCat(category); }, [category]);

  const q = text.trim().toLowerCase();
  const suggestions = q.length < 2 ? [] : PRODUCTS
    .filter((p) => (cat === "All" || p.category === cat) && `${p.name} ${p.brand}`.toLowerCase().includes(q))
    .slice(0, 6);

  const submit = (value = text) => {
    setOpen(false);
    browse({ q: value, cat });
  };

  const onKey = (e) => {
    if (!open || suggestions.length === 0) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((i) => (i + 1) % suggestions.length); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActive((i) => (i - 1 + suggestions.length) % suggestions.length); }
    if (e.key === "Enter" && active >= 0) { e.preventDefault(); submit(suggestions[active].name); }
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <form
      ref={boxRef}
      className={`search ${compact ? "search--compact" : ""}`}
      role="search"
      onSubmit={(e) => { e.preventDefault(); submit(); }}
      onBlur={(e) => { if (!boxRef.current.contains(e.relatedTarget)) setOpen(false); }}
    >
      {!compact && (
        <select id="search-cat" aria-label="Search in category" value={cat} onChange={(e) => setCat(e.target.value)}>
          <option>All</option>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
      )}
      <input
        id={compact ? "search-q-m" : "search-q"}
        type="search"
        placeholder="Search Spandhan.in"
        aria-label="Search products"
        autoComplete="off"
        value={text}
        onChange={(e) => { setText(e.target.value); setOpen(true); setActive(-1); }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKey}
      />
      <button type="submit" aria-label="Search"><Search size={22} strokeWidth={2.2} /></button>
      {open && suggestions.length > 0 && (
        <ul className="suggest" role="listbox">
          {suggestions.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                role="option"
                aria-selected={i === active}
                className={i === active ? "is-active" : ""}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => submit(s.name)}
              >
                <Search size={14} /> <span>{s.name}</span> <small>in {s.category}</small>
              </button>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default function Header() {
  const { cartCount, wishlist, setCartOpen, theme, setTheme, goHome, browse, category, dealsOnly, isBrowsing } = useStore();
  const [bump, setBump] = useState(false);
  const prev = useRef(cartCount);

  useEffect(() => {
    if (cartCount > prev.current) {
      setBump(true);
      const t = setTimeout(() => setBump(false), 450);
      prev.current = cartCount;
      return () => clearTimeout(t);
    }
    prev.current = cartCount;
  }, [cartCount]);

  const dark = theme === "dark" || (!theme && window.matchMedia?.("(prefers-color-scheme: dark)").matches);

  return (
    <div className="top" id="top">
      <div className="bar">
        <div className="wrap bar__row">
          <button className="logo" onClick={goHome} aria-label="Spandhan home">
            spandhan<span className="dot">.</span><small>in</small>
          </button>
          <button className="loc hit">
            <MapPin size={18} />
            <span className="meta"><span>Deliver to Priya</span><b>Pune 411001</b></span>
          </button>
          <SearchBox />
          <button className="lang hit"><Globe size={16} /> EN · हिं</button>
          <button
            className="icon-btn hit"
            onClick={() => setTheme(dark ? "light" : "dark")}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a className="account hit meta" href="#signin"><span>Hello, sign in</span><b>Account &amp; Lists</b></a>
          <button className="wish hit" onClick={() => browse({ wish: true })} aria-label={`Wishlist, ${wishlist.length} items`} title="Wishlist">
            <Heart size={22} />
            {wishlist.length > 0 && <span className="pill">{wishlist.length}</span>}
          </button>
          <button className={`cart hit ${bump ? "is-bump" : ""}`} onClick={() => setCartOpen(true)} aria-label={`Cart, ${cartCount} items`}>
            <ShoppingCart size={32} strokeWidth={1.6} />
            <output>{cartCount}</output>
            <span className="cart__label">Cart</span>
          </button>
          <div className="mobile-search"><SearchBox compact /></div>
        </div>
      </div>
      <nav className="sub" aria-label="Categories">
        <div className="wrap sub__row">
          <button className="all hit" onClick={() => browse()}>
            <Menu size={18} /> All
          </button>
          <button className={`hit ${isBrowsing && dealsOnly ? "is-on" : ""}`} onClick={() => browse({ deals: true })}>Today's Deals</button>
          {CATEGORIES.map((c) => (
            <button key={c} className={`hit ${isBrowsing && category === c ? "is-on" : ""}`} onClick={() => browse({ cat: c })}>{c}</button>
          ))}
          <button className="hit festive" onClick={() => browse({ deals: true })}>Utsav Sale is live</button>
        </div>
      </nav>
    </div>
  );
}
