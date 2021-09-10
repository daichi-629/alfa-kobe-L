import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/index";
import Main from "../views/main";
import Final from "../views/final";

const routes = [
  {
    path: "/",
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
