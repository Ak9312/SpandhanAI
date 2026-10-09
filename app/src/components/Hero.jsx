import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Lamp, Sprout, Smartphone, Headphones, Watch, BookOpen } from "lucide-react";
import { useStore } from "../store.jsx";

const SLIDES = [
  {
    cls: "s1",
    eyebrow: "Utsav Sale · Festive Home",
    title: "Light up every corner this Diwali",
    text: "Up to 60% off on diyas, décor and kitchenware. Extra 10% instant discount with UPI and select bank cards.",
    cta: "Shop festive home",
    go: { cat: "Home & Kitchen" },
    art: [[Lamp, 230, "10%", 10], [Lamp, 120, "62%", 110], [Sprout, 80, "72%", 0]],
  },
  {
    cls: "s2",
    eyebrow: "Mobiles & Accessories",
    title: "5G phones from ₹8,499",
    text: "No-cost EMI from ₹944 a month. Exchange your old phone for up to ₹12,000 off.",
    cta: "See phone deals",
    go: { cat: "Mobiles" },
    art: [[Smartphone, 250, "8%", 0], [Headphones, 140, "52%", 90], [Watch, 90, "76%", 10]],
  },
  {
    cls: "s3",
    eyebrow: "Books Week",
    title: "Any two paperbacks for ₹399",
    text: "Fiction, exam prep and children's books in English, Hindi, Marathi and Tamil.",
    cta: "Browse books",
    go: { cat: "Books" },
    art: [[BookOpen, 240, "6%", 10], [BookOpen, 130, "60%", 100]],
  },
];

export default function Hero() {
  const { browse } = useStore();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const n = SLIDES.length;
  const go = useCallback((i) => setIdx((i + n) % n), [n]);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % n), 5500);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Featured offers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="slides" style={{ transform: `translateX(-${idx * 100}%)` }}>
        {SLIDES.map((s, i) => (
          <div key={s.cls} className={`slide ${s.cls}`} aria-hidden={i !== idx}>
            <div className={`slide__copy ${i === idx ? "is-in" : ""}`}>
              <div className="eyebrow">{s.eyebrow}</div>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <button className="cta" tabIndex={i === idx ? 0 : -1} onClick={() => browse(s.go)}>{s.cta}</button>
            </div>
            <div className="art" aria-hidden="true">
              {s.art.map(([Icon, size, left, top], k) => (
                <Icon key={k} size={size} strokeWidth={1} className="art__icon" style={{ left, top, animationDelay: `${k * 0.6}s` }} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="arrow prev" onClick={() => go(idx - 1)} aria-label="Previous offer"><ChevronLeft size={40} strokeWidth={1.4} /></button>
      <button className="arrow next" onClick={() => go(idx + 1)} aria-label="Next offer"><ChevronRight size={40} strokeWidth={1.4} /></button>
      <div className="dots">
        {SLIDES.map((s, i) => (
          <button key={s.cls} aria-label={`Show offer ${i + 1}`} aria-current={i === idx} onClick={() => go(i)} />
        ))}
      </div>
    </section>
  );
}
