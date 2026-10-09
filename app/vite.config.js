import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The built site is written to the repo root so GitHub Pages ("Deploy from a branch",
// main / root) serves it with no extra setup. `base: "./"` keeps asset paths relative,
// so it works at https://ak9312.github.io/SpandhanAI/ and when opened locally.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "..",
    emptyOutDir: false,
    assetsDir: "assets",
  },
});
