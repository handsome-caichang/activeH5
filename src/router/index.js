import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/pingtuan/home'
import Product from '@/pages/pingtuan/child/product'
import Order from "@/pages/pingtuan/child/order";
import Detail from "@/pages/pingtuan/child/detail";

import Niudan from "@/pages/niudan/niudan";
import LuckDraw from "@/pages/luckDraw/luckDraw";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/luckDraw"
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      redirect: "/home/product",
      children: [
        {
          path: "product",
          component: Product
        },
        {
          path: "order",
          component: Order
        },
        {
          path: "product/:id",
          component: Detail
        }
      ]
    },
    {
      path: "/niudan",
      name: "niudan",
      component: Niudan
    },
    {
      path: "/luckDraw",
      name: "luckDraw",
      component: LuckDraw
    }
  ]
});
