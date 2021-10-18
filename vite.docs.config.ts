import reactPlugin from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

const config = defineConfig({
  base: "",
  build: {
    outDir: "docs",
  },
  plugins: [reactPlugin()],
});

export default config;
