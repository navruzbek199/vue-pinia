import * as vR from "vue-router";
import Home from "../pages/Home.vue";
// import Product from "../pages/Product.vue";
import Filial from "../pages/Filial.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
const _routes: Array<vR.RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/filial",
    name: "filial",
    component: Filial,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = vR.createRouter({
  history: vR.createWebHashHistory(),
  routes: _routes,
});

export default router;
