import ConfigProvider from "./src/index.vue";
import type { App, Plugin } from "vue";

export const ConfigProviderPlugin: Plugin = {
    install(app: App) {
        app.component(ConfigProvider.name, ConfigProvider);
    }
};

export { ConfigProvider };
