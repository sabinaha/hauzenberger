import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/Home'
import About from './view/About'
import Golf from './view/Golf'
import Trips from './view/Trips'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/golf',
      name: 'golf',
      component: Golf
    },
    {
      path: '/trips',
      name: 'trips',
      component: Trips
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router;