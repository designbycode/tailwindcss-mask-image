// vite.config.js
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "Tailwindcss Mask Image",
      // the proper extensions will be added
      fileName: "index",
      formats: ["cjs", "umd"],
    },
    minify: "terser",
  },
  // plugins: [dts()],
})
