import { createApp } from "vue";
import "./style.css";
import { router } from "./routers";
import { RouterView } from "vue-router";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";

const pinia = createPinia();

const app = createApp(RouterView);
app.use(router);
app.use(pinia);
app.use(VueQueryPlugin);
app.mount("#app");
