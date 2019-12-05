import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Detail from "@/views/Detail.vue";
import Keranjang from "@/views/Keranjang";
import Transaksi from "@/views/Transaksi";
import Search from "@/views/Search.vue";
import SearchResult from "@/views/SearchResult";
import About from "@/views/About";

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
    path: "/keranjang",
    name: "keranjang",
    component: Keranjang
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/search/result",
    name: "searchResult",
    component: SearchResult,
    props: true
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/transaksi",
    name: "transaksi",
    component: Transaksi
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
