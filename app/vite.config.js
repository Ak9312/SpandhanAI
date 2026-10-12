import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createReadStream, existsSync, statSync, cpSync } from "node:fs";
import { resolve, extname } from "node:path";

// Two places host this site:
//
// 1. GitHub Pages ("Deploy from a branch", main / root): the built site is written to the
//    repo root, next to the images/ folder, and committed.
// 2. Vercel (Root Directory = app): Vercel sets VERCEL=1 and expects the build in app/dist,
//    so there the site is built into dist/ and images/ is copied in alongside it.
//
// `base: "./"` keeps asset paths relative, so both hosts (and opening it locally) work.
const ON_VERCEL = !!process.env.VERCEL;
const IMAGES = resolve(__dirname, "../images");
const OUT_DIR = ON_VERCEL ? resolve(__dirname, "dist") : resolve(__dirname, "..");

const TYPES = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };

// Serves the repo-root images/ folder during `npm run dev`.
const serveRepoImages = {
  name: "serve-repo-images",
  configureServer(server) {
    server.middlewares.use("/images", (req, res, next) => {
      const file = resolve(IMAGES, "." + decodeURIComponent(req.url.split("?")[0]));
      if (!file.startsWith(IMAGES) || !existsSync(file) || !statSync(file).isFile()) return next();
      res.setHeader("Content-Type", TYPES[extname(file).toLowerCase()] || "application/octet-stream");
      createReadStream(file).pipe(res);
    });
  },
};

// On Vercel, ship the images with the build (GitHub Pages already serves them from the repo).
const copyImagesForVercel = {
  name: "copy-images-for-vercel",
  apply: "build",
  closeBundle() {
    if (ON_VERCEL && existsSync(IMAGES)) {
      cpSync(IMAGES, resolve(OUT_DIR, "images"), { recursive: true });
    }
  },
};

export default defineConfig({
  plugins: [react(), serveRepoImages, copyImagesForVercel],
  base: "./",
  publicDir: false,
  build: {
    outDir: OUT_DIR,
    emptyOutDir: ON_VERCEL,
    assetsDir: "assets",
  },
});
