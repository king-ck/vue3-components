import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        DefineOptions(),
        AutoImport({
            dts: "types/auto-imports.d.ts",
            imports: ["vue", "vue-router"],
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            dts: "types/components.d.ts",
            resolvers: [ElementPlusResolver()]
        })
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./packages", import.meta.url))
        }
    }
});
