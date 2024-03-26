import * as vR from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Product from "../pages/Product.vue";
import Auth from "../pages/auth.vue";
const _routes: Array<vR.RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/product",
    name: "product",
    component: Product,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth,
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
