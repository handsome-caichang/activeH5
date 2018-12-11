import Vue from 'vue'
import Router from 'vue-router'
// 拼团
import Home from '@/pages/pingtuan/home'
import Product from '@/pages/pingtuan/child/product'
import Order from "@/pages/pingtuan/child/order";
import Detail from "@/pages/pingtuan/child/detail";
/* 抽奖大转盘 */
import LuckDraw from "@/pages/luckDraw/luckDraw";
/* 奖品详情 */
import AwardDetail from "@/pages/awardDetail/awardDetail";

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
      path: "/luckDraw",
      name: "luckDraw",
      component: LuckDraw,
    },
    {
      path: "/awardDetail/:id",
      name: "awardDetail",
      component: AwardDetail
    }
  ]
});
