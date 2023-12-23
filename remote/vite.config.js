import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./HomeApp": "./src/components/Header",
      },
      shared: ["react", "react-dom"],
    }),
  ],
 
  build: {
    modulePreload: true,
    target: "esnext",
    minify: true,
    cssCodeSplit: true,
  },
});
