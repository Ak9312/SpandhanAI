import { useEffect, useRef, useState } from "react";
import { X, Heart, Trash2, Check, Truck, RotateCcw, ShieldCheck, ShoppingCart } from "lucide-react";
import { useStore } from "../store.jsx";
import { getProduct, inr, tintVar, FREE_DELIVERY_AT } from "../data/products.js";
import { Stars, Price, QtyStepper } from "./ProductCard.jsx";
import { ProductImg } from "./Img.jsx";

// Close on Escape and return focus to whatever opened the panel.
function useDismiss(open, onClose) {
  const panel = useRef();
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement;
    const onKey = (e) => e.key === "Escape" && closeRef.current();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panel.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus?.();
    };
  }, [open]);
  return panel;
}

export function QuickView() {
  const { quickViewId, setQuickViewId, cart, addToCart, wishlist, toggleWish, setCartOpen } = useStore();
  const p = quickViewId ? getProduct(quickViewId) : null;
  const close = () => setQuickViewId(null);
  const panel = useDismiss(!!p, close);
  if (!p) return null;
  const Icon = p.Icon;
  const qty = cart[p.id] || 0;
  const wished = wishlist.includes(p.id);
  const save = p.mrp - p.price;

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="qv-title" tabIndex={-1} ref={panel}>
        <button className="close" onClick={close} aria-label="Close"><X size={20} /></button>
        <div className="modal__media" style={{ background: tintVar(p.tint) }}>
          <ProductImg id={p.id} alt={p.name} fallback={<Icon size={200} strokeWidth={0.9} />} />
        </div>
        <div className="modal__info">
          <span className="brand">Visit the {p.brand} store</span>
          <h2 id="qv-title">{p.name}</h2>
          <Stars rating={p.rating} reviews={p.reviews} />
          <hr />
          <div className="modal__price">
            <span className="minus">−{p.discount}%</span>
            <Price price={p.price} mrp={p.mrp} size="lg" />
          </div>
          <p className="saving">You save ₹{inr(save)} · Inclusive of all taxes</p>
          <ul className="highlights">
            {(p.highlights || []).map((h) => <li key={h}><Check size={15} /> {h}</li>)}
          </ul>
          <div className="assure">
            <span><Truck size={18} /> Free delivery</span>
            <span><RotateCcw size={18} /> 10-day returns</span>
            <span><ShieldCheck size={18} /> Pay on delivery</span>
          </div>
          <div className="modal__actions">
            {qty === 0 ? (
              <button className="add add--lg" onClick={() => addToCart(p.id)}>Add to cart</button>
            ) : (
              <>
                <QtyStepper id={p.id} qty={qty} />
                <button className="add add--lg add--ghost" onClick={() => { close(); setCartOpen(true); }}>
                  <ShoppingCart size={16} /> Go to cart
                </button>
              </>
            )}
            <button className={`heart heart--inline ${wished ? "is-on" : ""}`} onClick={() => toggleWish(p.id)} aria-pressed={wished} aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}>
              <Heart size={20} fill={wished ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CartDrawer() {
  const { cartOpen, setCartOpen, cartLines, cartCount, subtotal, mrpTotal, delivery, setQty, notify, setQuickViewId } = useStore();
  const [placed, setPlaced] = useState(null);
  const close = () => { setCartOpen(false); setPlaced(null); };
  const panel = useDismiss(cartOpen, close);
  if (!cartOpen) return null;

  const toFree = Math.max(0, FREE_DELIVERY_AT - subtotal);
  const pct = Math.min(100, (subtotal / FREE_DELIVERY_AT) * 100);
  const total = subtotal + delivery;

  const placeOrder = () => {
    const id = `SPN-${Math.floor(100000 + Math.random() * 900000)}`;
    setPlaced({ id, total, items: cartCount });
    cartLines.forEach((l) => setQty(l.product.id, 0));
    notify("Order placed (demo)");
  };

  return (
    <div className="overlay overlay--side" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <aside className="drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title" tabIndex={-1} ref={panel}>
        <header className="drawer__head">
          <h2 id="cart-title">Your cart {cartCount > 0 && <small>({cartCount} {cartCount === 1 ? "item" : "items"})</small>}</h2>
          <button className="close" onClick={close} aria-label="Close cart"><X size={20} /></button>
        </header>

        {placed ? (
          <div className="drawer__done">
            <div className="tick"><Check size={34} /></div>
            <h3>Order placed</h3>
            <p>Order <b>{placed.id}</b> · {placed.items} {placed.items === 1 ? "item" : "items"} · ₹{inr(placed.total)}</p>
            <p className="muted">This is a demo store, so nothing will be charged or delivered.</p>
            <button className="cta" onClick={close}>Continue shopping</button>
          </div>
        ) : cartLines.length === 0 ? (
          <div className="drawer__done">
            <ShoppingCart size={56} strokeWidth={1.2} className="muted" />
            <h3>Your cart is empty</h3>
            <p className="muted">Add something from Today's Deals to get started.</p>
            <button className="cta" onClick={close}>Continue shopping</button>
          </div>
        ) : (
          <>
            <div className="ship-meter">
              {toFree > 0
                ? <p>Add <b>₹{inr(toFree)}</b> more for <b>free delivery</b></p>
                : <p><Check size={15} /> Your order qualifies for <b>free delivery</b></p>}
              <div className="meter"><span style={{ width: `${pct}%` }} /></div>
            </div>
            <ul className="lines">
              {cartLines.map(({ product: p, qty }) => {
                const Icon = p.Icon;
                return (
                  <li key={p.id}>
                    <button className="line__img" style={{ background: tintVar(p.tint) }} onClick={() => { setCartOpen(false); setQuickViewId(p.id); }} aria-label={`View ${p.name}`}>
                      <ProductImg id={p.id} fallback={<Icon size={40} strokeWidth={1.2} />} />
                    </button>
                    <div className="line__info">
                      <p className="line__name">{p.name}</p>
                      <p className="line__price">₹{inr(p.price * qty)} {qty > 1 && <small>(₹{inr(p.price)} each)</small>}</p>
                      <div className="line__row">
                        <QtyStepper id={p.id} qty={qty} />
                        <button className="link-btn" onClick={() => setQty(p.id, 0)}><Trash2 size={14} /> Remove</button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <footer className="drawer__foot">
              <dl>
                <div><dt>Items (M.R.P.)</dt><dd>₹{inr(mrpTotal)}</dd></div>
                <div className="save"><dt>Discount</dt><dd>−₹{inr(mrpTotal - subtotal)}</dd></div>
                <div><dt>Delivery</dt><dd>{delivery === 0 ? "FREE" : `₹${delivery}`}</dd></div>
                <div className="total"><dt>Order total</dt><dd>₹{inr(total)}</dd></div>
              </dl>
              <button className="add add--lg" onClick={placeOrder}>Proceed to buy</button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}

export function Toast() {
  const { toast } = useStore();
  return (
    <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">
      {toast?.msg}
    </div>
  );
}

export function Footer() {
  const cols = [
    ["Get to know us", ["About Spandhan", "Careers", "Press releases", "Spandhan Science"]],
    ["Connect with us", ["Instagram", "X", "YouTube"]],
    ["Make money with us", ["Sell on Spandhan", "Become an affiliate", "Fulfilment by Spandhan", "Advertise your products"]],
    ["Let us help you", ["Your account", "Returns centre", "Recalls and safety alerts", "Help"]],
  ];
  return (
    <footer className="site-foot">
      <section className="signin" id="signin">
        <p>See personalised recommendations</p>
        <button className="cta cta--marigold">Sign in</button>
        <p className="small">New customer? <button className="link-btn">Start here.</button></p>
      </section>
      <button className="backtop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>
      <div className="fcols">
        <div className="wrap fcols__grid">
          {cols.map(([h, links]) => (
            <div key={h}>
              <h4>{h}</h4>
              <ul>{links.map((l) => <li key={l}><a href="#top">{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="fbase">
        <div className="wrap fbase__row">
          <span className="logo logo--sm">spandhan<span className="dot">.</span></span>
          <span>EN · हिंदी · मराठी · தமிழ்</span>
          <span>A demo storefront built with React. Not a real shop.</span>
        </div>
      </div>
    </footer>
  );
}
