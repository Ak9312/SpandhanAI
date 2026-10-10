import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createReadStream, existsSync, statSync } from "node:fs";
import { resolve, extname } from "node:path";

// The built site is written to the repo root so GitHub Pages ("Deploy from a branch",
// main / root) serves it with no extra setup. `base: "./"` keeps asset paths relative,
// so it works at https://ak9312.github.io/SpandhanAI/ and when opened locally.
//
// Photos live in the repo-root images/ folder and are served from there directly by
// GitHub Pages. This small plugin serves the same folder during `npm run dev`.
const IMAGES = resolve(__dirname, "../images");
const TYPES = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };
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

export default defineConfig({
  plugins: [react(), serveRepoImages],
  base: "./",
  publicDir: false,
  build: {
    outDir: "..",
    emptyOutDir: false,
    assetsDir: "assets",
  },
});
