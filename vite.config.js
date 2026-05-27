import { fileURLToPath } from "url";
import { dirname } from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
    },
  },
};
