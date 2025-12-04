import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base:
    mode === "production"
      ? (() => {
          const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
          const fromEnv = process.env.BASE_PATH;
          if (fromEnv) {
            const cleaned = fromEnv.trim();
            if (cleaned === "/" || cleaned === "") return "/";
            return `/${cleaned.replace(/^\/+|\/+$/g, "")}/`;
          }
          return repo ? `/${repo}/` : "/";
        })()
      : "/",
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "docs",
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
