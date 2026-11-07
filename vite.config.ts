import reactPlugin from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import * as packageJson from "./package.json";

const config = defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "react-sushi",
      fileName: (format) => `react-sushi.${format}.js`,
      cssFileName: "style",
    },
    outDir: "dist",
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
  },
  plugins: [reactPlugin({ jsxRuntime: "classic" })],
});

export default config;
