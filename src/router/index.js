import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

import Main from "../components/Main";
import Home from "../components/home/Home";
import ProductList from "../components/product/ProductList";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import ProductEnter from "../components/product/ProductEnter";
import Planner from "../components/Calendar/Planner";
import ProductLeave from "../components/product/ProductLeave";

Vue.use(VueRouter);

const routes = [
    { path: "/", name: "root", component: Login },
    {
        path: "/main",
        component: Main,
        children: [
            { path: "home", name: "home", component: Home },
            { path: "product-list", name: "product-list", component: ProductList },
            { path: "product-enter", name: "product-enter", component: ProductEnter },
            { path: "planner", name: "planner", component: Planner },
            { path: "product-leave", name: "product-leave", component: ProductLeave },
        ],
        beforeEnter(to, from, next) {
            if (store.getters.get_isAuthenticated) {
                next();
            } else {
                next("/login");
            }
        },
    },
    { path: "/login", name: "login", component: Login },
    { path: "/register", name: "register", component: Register },
    { path: "*", redirect: "/" },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;