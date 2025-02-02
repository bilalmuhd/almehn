import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html", // Entry point for your app
      },
    },
  },
  plugins: [tailwindcss()],
});
