import { useState } from "react";

// Images live in the repo's top-level images/ folder:
//   images/products/<id>.jpg (or .png)   e.g. images/products/m1.jpg
//   images/hero/hero-<n>.jpg (or .png)   e.g. images/hero/hero-1.jpg
// If a file isn't there yet, the fallback (the product's icon) is shown instead,
// so images can be added one at a time with no code changes.
const EXTS = ["jpg", "png", "webp"];
const BASE = "./images";

// Remember results across the app so each file is only probed once.
const found = new Map();   // key -> working url
const missing = new Set(); // keys with no file

export function useImage(path) {
  const [attempt, setAttempt] = useState(0);
  const [, force] = useState(0);
  if (missing.has(path)) return { src: null };
  if (found.has(path)) return { src: found.get(path), onLoad: () => {}, onError: () => {} };
  const src = `${BASE}/${path}.${EXTS[attempt]}`;
  return {
    src,
    onLoad: () => { found.set(path, src); force((n) => n + 1); },
    onError: () => {
      if (attempt + 1 < EXTS.length) setAttempt(attempt + 1);
      else { missing.add(path); force((n) => n + 1); }
    },
  };
}

/** Product photo with icon fallback. */
export function ProductImg({ id, alt = "", fallback, className = "pimg" }) {
  const { src, onLoad, onError } = useImage(`products/${id}`);
  if (!src) return fallback;
  return (
    <>
      {!found.has(`products/${id}`) && fallback}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={className}
        onLoad={onLoad}
        onError={onError}
        style={found.has(`products/${id}`) ? undefined : { position: "absolute", opacity: 0 }}
      />
    </>
  );
}
