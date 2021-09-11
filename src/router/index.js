import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/index";
import Main from "../views/main";
import Final from "../views/final";
import testPage from "../views/testpage";

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
  {
    path: "/test",
    name: "test",
    component: testPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
