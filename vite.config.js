// import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // ViteImageOptimizer({
        //     // jpg: { quality: 75 },
        // }),
    ],
});
