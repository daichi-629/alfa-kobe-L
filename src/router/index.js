import { createRouter, createWebHashHistory } from "vue-router";

import Index from "../views/index";
import Main from "../views/main";
import Final from "../views/final";
import notFound from "../views/404";
import testpage from "../views/stages/stage3MapQuiz";

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: Index,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
  {
    path: "/final",
    name: "final",
    component: Final,
  },
  process.env.NODE_ENV !== "production"
    ? { path: "/test", component: testpage }
    : {},

  {
    path: "/:pathMatch(.*)*",
    name: "not found",
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHashHistory("/alfa-kobe-L/"),
  routes,
});

export default router;
