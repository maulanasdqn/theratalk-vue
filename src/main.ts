import { createApp } from "vue";
import "./style.css";
import { router } from "./routers";
import { RouterView } from "vue-router";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(RouterView);
app.use(router);
app.use(pinia);
app.mount("#app");
