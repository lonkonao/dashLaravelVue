import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ["resources/js/app.js", "resources/sass/app.scss"],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "resources/js"),
        },
    },
});
