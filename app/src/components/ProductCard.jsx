import { Heart, Star, Plus, Minus } from "lucide-react";
import { useStore } from "../store.jsx";
import { inr, tintVar } from "../data/products.js";
import { ProductImg } from "./Img.jsx";

export function Stars({ rating, reviews }) {
  const full = Math.round(rating);
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      <span className="stars__row">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={14} fill={i <= full ? "currentColor" : "none"} strokeWidth={1.6} />
        ))}
      </span>
      <b>{rating.toFixed(1)}</b>
      {reviews != null && <small>({inr(reviews)})</small>}
    </div>
  );
}

export function Price({ price, mrp, size = "md" }) {
  return (
    <div className={`price price--${size}`}>
      <strong><sup>₹</sup>{inr(price)}</strong>
      {mrp > price && <s>M.R.P: ₹{inr(mrp)}</s>}
    </div>
  );
}

export function QtyStepper({ id, qty }) {
  const { setQty } = useStore();
  return (
    <div className="stepper" role="group" aria-label="Quantity">
      <button onClick={() => setQty(id, qty - 1)} aria-label="Decrease quantity"><Minus size={14} /></button>
      <output aria-live="polite">{qty}</output>
      <button onClick={() => setQty(id, qty + 1)} aria-label="Increase quantity" disabled={qty >= 10}><Plus size={14} /></button>
    </div>
  );
}

export default function ProductCard({ product: p, showDealTag = false }) {
  const { cart, addToCart, wishlist, toggleWish, setQuickViewId } = useStore();
  const qty = cart[p.id] || 0;
  const wished = wishlist.includes(p.id);
  const Icon = p.Icon;

  return (
    <article className="p">
      <div className="p__media">
        <button className="thumb" style={{ background: tintVar(p.tint) }} onClick={() => setQuickViewId(p.id)} aria-label={`Quick view: ${p.name}`}>
          <ProductImg id={p.id} alt={p.name} fallback={<Icon size={84} strokeWidth={1.1} />} />
          <span className="p__peek">Quick view</span>
        </button>
        <button className={`heart ${wished ? "is-on" : ""}`} onClick={() => toggleWish(p.id)} aria-pressed={wished} aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}>
          <Heart size={18} fill={wished ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="badge">
        <b>{p.discount}% off</b>
        {showDealTag && p.deal && <span>Utsav deal</span>}
        {p.bestseller && <em>Bestseller</em>}
      </div>
      <button className="name" onClick={() => setQuickViewId(p.id)}>{p.name}</button>
      <Stars rating={p.rating} reviews={p.reviews} />
      <Price price={p.price} mrp={p.mrp} />
      <div className="ship">{p.price >= 499 ? "Free delivery by Tue, 13 Oct" : "Delivery ₹40, free over ₹499"}</div>
      {qty === 0
        ? <button className="add" onClick={() => addToCart(p.id)}>Add to cart</button>
        : <QtyStepper id={p.id} qty={qty} />}
    </article>
  );
}
