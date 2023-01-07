import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio_example/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@scenes": fileURLToPath(new URL("./src/scenes", import.meta.url)),
      "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      // "@": path.resolve(__dirname, "./src"),
      "~": fileURLToPath(new URL("./public", import.meta.url)),
    },
  },
});
