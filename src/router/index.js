import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Detail from "@/views/Detail.vue";
import Checkout from "@/views/Checkout.vue";
import Search from "@/views/Search.vue";
import SearchResult from "@/views/SearchResult";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/search/result",
    name: "searchResult",
    component: SearchResult
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
