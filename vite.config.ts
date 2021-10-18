import reactPlugin from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import * as packageJson from "./package.json";

const config = defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "react-sushi",
    },
    outDir: "dist",
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
  plugins: [reactPlugin()],
});

export default config;
