import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomePage from "@/views/HomePage/HomePage.vue";
import CreatePage from "@/views/CreatePage/CreatePage.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/create',
    name: 'create',
    component: CreatePage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
