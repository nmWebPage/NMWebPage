import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: '/NMWebPage/',  // Ajuste conforme o nome do repositório
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: 'docs'   // 👈 Saída do build vai para /docs
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
