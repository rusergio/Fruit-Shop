import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../components/HomeComponent.vue'
import LoginView from '../components/LoginComponent.vue'
import PaymentView from '../components/PaymentComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
