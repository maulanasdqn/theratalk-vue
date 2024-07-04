import { createWebHistory, createRouter } from "vue-router";

import LandingPage from "./landing/index.vue";
import DashboardPage from "./dashboard/index.vue";
import LoginPage from "./auth/views/login.vue";
import RegisterPage from "./auth/views/register.vue";
import AuthTemplate from "./auth/views/template.vue";

const routes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/auth",
    component: AuthTemplate,
    children: [
      {
        path: "login",
        component: LoginPage,
      },
      {
        path: "register",
        component: RegisterPage,
      },
      {
        path: "forgot",
        component: RegisterPage,
      },
    ],
  },
  {
    path: "/dashboard",
    component: DashboardPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
