import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [react(), svgr(), tailwindcss()],
});
