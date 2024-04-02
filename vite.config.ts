import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: [
      {
        find: "@crema",
        replacement: fileURLToPath(new URL("./src/@crema", import.meta.url)),
      },
    ],
  },
});
