// @ts-check

import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/mod.ts",
    "src/extra/mod.ts",
    "src/jsx-dev-runtime/mod.ts",
    "src/jsx-runtime/mod.ts"
  ],
  outDir: "dist",
  format: "esm",
  platform: "node",
  clean: true,
  dts: true
});