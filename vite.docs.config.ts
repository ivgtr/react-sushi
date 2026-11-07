import reactPlugin from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const config = defineConfig({
  base: "",
  build: {
    outDir: "docs",
  },
  plugins: [reactPlugin({ jsxRuntime: "classic" })],
});

export default config;
