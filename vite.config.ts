import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    //@ts-expect-error - "Ingoring the unknown build error from typescript"
    build: {
      lib: {
        entry: path.resolve(__dirname, "./src/components/index.tsx"),
        name: "EchoUI",
        fileName: "echo-ui",
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
  },
  plugins: [react(), dts({ rollupTypes: true })],
});
