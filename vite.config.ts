import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/newsletter-with-success-state-with-vite/",
  plugins: [tailwindcss()],
});
