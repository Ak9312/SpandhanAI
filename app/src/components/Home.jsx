import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft, ChevronRight, CookingPot, Blend, Milk, Lamp, Shirt, Footprints, Backpack, Gem,
  Watch, Tv, Headphones, Laptop, Gamepad2, Truck, RotateCcw, ShieldCheck,
} from "lucide-react";
import { useStore } from "../store.jsx";
import { PRODUCTS, tintVar } from "../data/products.js";
import Hero from "./Hero.jsx";
import ProductCard from "./ProductCard.jsx";
import { ProductImg } from "./Img.jsx";

// Deals end at midnight IST, like a real daily deal.
function useCountdownToMidnight() {
  const calc = () => {
    const now = new Date();
    const ist = new Date(now.getTime() + (now.getTimezoneOffset() + 330) * 60000);
    const end = new Date(ist); end.setHours(24, 0, 0, 0);
    return Math.max(0, Math.floor((end - ist) / 1000));
  };
  const [left, setLeft] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setLeft(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (x) => String(x).padStart(2, "0");
  return `${pad(Math.floor(left / 3600))}:${pad(Math.floor((left % 3600) / 60))}:${pad(left % 60)}`;
}

function Shelf({ id, title, items, aside, showDealTag, onMore }) {
  const track = useRef();
  const scroll = (dir) => track.current.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: "smooth" });
  return (
    <section className="shelf" id={id} aria-labelledby={`${id}-h`}>
      <header>
        <h3 id={`${id}-h`}>{title}</h3>
        {aside}
        <button className="more" onClick={onMore}>See all</button>
      </header>
      <button className="scroll-btn l" onClick={() => scroll(-1)} aria-label="Scroll left"><ChevronLeft size={22} /></button>
      <div className="track" ref={track}>
        {items.map((p) => <ProductCard key={p.id} product={p} showDealTag={showDealTag} />)}
      </div>
      <button className="scroll-btn r" onClick={() => scroll(1)} aria-label="Scroll right"><ChevronRight size={22} /></button>
    </section>
  );
}

function Quad({ title, items, more, onPick }) {
  return (
    <article className="tile">
      <h3>{title}</h3>
      <div className="quad">
        {items.map(([label, Icon, tint, go, pid]) => (
          <button key={label} onClick={() => onPick(go)}>
            <span className="thumb" style={{ background: tintVar(tint) }}><ProductImg id={pid} fallback={<Icon size={52} strokeWidth={1.2} />} /></span>
            {label}
          </button>
        ))}
      </div>
      <button className="more" onClick={() => onPick(items[0][3])}>{more}</button>
    </article>
  );
}

export default function Home() {
  const { browse, cartLines } = useStore();
  const countdown = useCountdownToMidnight();
  const deals = PRODUCTS.filter((p) => p.deal);
  const kitchen = PRODUCTS.filter((p) => p.bestseller);
  const books = PRODUCTS.filter((p) => p.book);

  // "Inspired by your cart": same categories as what's in the cart, not already in it.
  const cartIds = new Set(cartLines.map((l) => l.product.id));
  const cartCats = new Set(cartLines.map((l) => l.product.category));
  const related = PRODUCTS.filter((p) => cartCats.has(p.category) && !cartIds.has(p.id)).slice(0, 10);

  return (
    <>
      <Hero />
      <div className="wrap">
        <section className="tiles" aria-label="Shop by category">
          <Quad
            title="Revamp your kitchen for the festive season"
            more="Explore all"
            onPick={browse}
            items={[
              ["Cookware", CookingPot, 2, { cat: "Home & Kitchen", q: "kadai" }, "h1"],
              ["Mixer grinders", Blend, 1, { cat: "Home & Kitchen", q: "mixer" }, "h2"],
              ["Bottles & flasks", Milk, 6, { cat: "Home & Kitchen", q: "bottle" }, "h3"],
              ["Pooja essentials", Lamp, 4, { cat: "Home & Kitchen", q: "diya" }, "h4"],
            ]}
          />
          <Quad
            title="Festive ethnic wear, up to 70% off"
            more="See more"
            onPick={browse}
            items={[
              ["Kurtas", Shirt, 4, { cat: "Fashion", q: "kurta" }, "f1"],
              ["Jewellery", Gem, 3, { cat: "Fashion", q: "jhumka" }, "f5"],
              ["Footwear", Footprints, 2, { cat: "Fashion", q: "shoes" }, "f3"],
              ["Bags", Backpack, 5, { cat: "Fashion", q: "backpack" }, "f4"],
            ]}
          />
          <article className="tile">
            <h3>Smartwatches under ₹2,999</h3>
            <button className="big" style={{ background: tintVar(6) }} onClick={() => browse({ q: "smartwatch" })} aria-label="Shop smartwatches">
              <ProductImg id="m5" fallback={<Watch size={150} strokeWidth={0.9} />} />
            </button>
            <button className="more" onClick={() => browse({ q: "smartwatch" })}>Shop now</button>
          </article>
          <Quad
            title="Upgrade your home entertainment"
            more="See all offers"
            onPick={browse}
            items={[
              ["Smart TVs", Tv, 3, { cat: "Electronics", q: "tv" }, "e1"],
              ["Headphones", Headphones, 1, { q: "earbuds" }, "m4"],
              ["Laptops", Laptop, 5, { cat: "Electronics", q: "laptop" }, "e2"],
              ["Gaming", Gamepad2, 6, { cat: "Electronics", q: "controller" }, "e5"],
            ]}
          />
        </section>

        <Shelf
          id="deals"
          title="Today's Deals"
          items={deals}
          showDealTag
          onMore={() => browse({ deals: true })}
          aside={<span className="timer">Ends in <b>{countdown}</b></span>}
        />

        {related.length > 0 && (
          <Shelf id="related" title="Inspired by your cart" items={related} onMore={() => browse({ cat: [...cartCats][0] })} />
        )}

        <div className="strip">
          <div className="tile"><Truck size={40} strokeWidth={1.4} /><div><b>Free delivery over ₹499</b><p>Next-day delivery in 40+ cities</p></div></div>
          <div className="tile"><RotateCcw size={40} strokeWidth={1.4} /><div><b>10-day easy returns</b><p>Free pickup from your doorstep</p></div></div>
          <div className="tile"><ShieldCheck size={40} strokeWidth={1.4} /><div><b>Pay on delivery</b><p>Cash, UPI or card at your door</p></div></div>
        </div>

        <Shelf id="kitchen" title="Bestsellers in Home & Kitchen" items={kitchen} onMore={() => browse({ cat: "Home & Kitchen" })} />
        <Shelf id="books" title="Books Week picks" items={books} onMore={() => browse({ cat: "Books" })} />
      </div>
    </>
  );
}
