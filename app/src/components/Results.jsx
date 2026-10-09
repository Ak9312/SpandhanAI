import { useState } from "react";
import { SlidersHorizontal, X, Star, ArrowLeft } from "lucide-react";
import { useStore, DEFAULT_FILTERS } from "../store.jsx";
import { CATEGORIES, inr } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

const PRICE_STEPS = [500, 1000, 2500, 5000, 15000, 70000];

function Filters() {
  const { filters, setFilters, category, browse, query, dealsOnly, wishOnly } = useStore();
  const set = (patch) => setFilters((f) => ({ ...f, ...patch }));
  const changed = JSON.stringify(filters) !== JSON.stringify(DEFAULT_FILTERS);

  return (
    <div className="filters">
      <fieldset>
        <legend>Category</legend>
        {["All", ...CATEGORIES].map((c) => (
          <label key={c} className="radio">
            <input type="radio" name="f-cat" id={`f-cat-${c}`} checked={category === c} onChange={() => browse({ q: query, cat: c, deals: dealsOnly, wish: wishOnly })} />
            {c}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Price</legend>
        {PRICE_STEPS.map((v) => (
          <label key={v} className="radio">
            <input type="radio" name="f-price" id={`f-price-${v}`} checked={filters.maxPrice === v} onChange={() => set({ maxPrice: v })} />
            {v === 70000 ? "Any price" : `Under ₹${inr(v)}`}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Customer rating</legend>
        {[4.5, 4, 0].map((r) => (
          <label key={r} className="radio">
            <input type="radio" name="f-rating" id={`f-rating-${r}`} checked={filters.minRating === r} onChange={() => set({ minRating: r })} />
            {r === 0 ? "Any rating" : <span className="rating-opt"><Star size={13} fill="currentColor" /> {r} & up</span>}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Discount</legend>
        {[50, 30, 0].map((d) => (
          <label key={d} className="radio">
            <input type="radio" name="f-disc" id={`f-disc-${d}`} checked={filters.minDiscount === d} onChange={() => set({ minDiscount: d })} />
            {d === 0 ? "Any discount" : `${d}% off or more`}
          </label>
        ))}
      </fieldset>

      {changed && <button className="link-btn" onClick={() => setFilters(DEFAULT_FILTERS)}>Clear filters</button>}
    </div>
  );
}

export default function Results() {
  const { results, query, category, dealsOnly, wishOnly, sort, setSort, goHome, browse } = useStore();
  const [showFilters, setShowFilters] = useState(false);

  const heading = wishOnly ? "Your wishlist"
    : dealsOnly ? "Today's Deals"
    : query.trim() ? `Results for “${query.trim()}”`
    : category !== "All" ? category
    : "All products";

  return (
    <div className="wrap results">
      <div className="results__bar">
        <button className="link-btn" onClick={goHome}><ArrowLeft size={16} /> Home</button>
        <p className="results__count">
          <b>{results.length}</b> {results.length === 1 ? "item" : "items"}
          {category !== "All" && !wishOnly && <> in <b>{category}</b></>}
        </p>
        <div className="results__tools">
          <button className="filter-toggle" onClick={() => setShowFilters((s) => !s)} aria-expanded={showFilters}>
            <SlidersHorizontal size={16} /> Filters
          </button>
          <label className="sort">
            Sort by
            <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="rating">Avg. customer rating</option>
              <option value="discount">Biggest discount</option>
            </select>
          </label>
        </div>
      </div>

      <div className="results__body">
        <aside className={`results__side ${showFilters ? "is-open" : ""}`} aria-label="Filters">
          <div className="side__head">
            <b>Filters</b>
            <button onClick={() => setShowFilters(false)} aria-label="Close filters"><X size={18} /></button>
          </div>
          <Filters />
        </aside>

        <section className="results__main" aria-live="polite">
          <h2 className="results__h">{heading}</h2>
          {results.length === 0 ? (
            <div className="empty">
              <p><b>{wishOnly ? "Your wishlist is empty." : "No products match these filters."}</b></p>
              <p>{wishOnly ? "Tap the heart on any product to save it here." : "Try a different search, or clear some filters."}</p>
              <button className="cta" onClick={() => (wishOnly ? goHome() : browse())}>{wishOnly ? "Start shopping" : "Show all products"}</button>
            </div>
          ) : (
            <div className="grid">
              {results.map((p) => <ProductCard key={p.id} product={p} showDealTag />)}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
