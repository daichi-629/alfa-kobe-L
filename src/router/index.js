import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/index";
import Main from "../views/main";
import Final from "../views/final";
import testPage from "../views/testpage";
import notFound from "../views/404";

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
  {
    path: "/:pathMatch(.*)*",
    name: "not found",
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
