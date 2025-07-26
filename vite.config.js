import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      // Optional: alias '@' to 'src' or your base folder
      // '@': '/src',
    },
  },
});
