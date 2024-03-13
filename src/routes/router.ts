import * as vR from 'vue-router'
import Home from '../pages/Home.vue'
import Product from '../pages/Product.vue'
const _routes: Array<vR.RouteRecordRaw> = [
     {
        path: '/',
        name: 'home',
        component: Home
     },
     {
        path: '/products',
        name: 'products',
        component: Product
     },
     {
        path: '/products/:id',
        name: 'productsItem',
        component: () => import('../pages/ProductItem.vue'),
        props: true
     },
     {
        path: "/:pathMatch(.*)*",
        name: 'notfound',
        component: () => import("../pages/NotFound.vue")
     }
]

const router = vR .createRouter({
    history: vR.createWebHashHistory(),
    routes: _routes,
})

export default router