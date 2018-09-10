import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/signin',
      component: () => import('./views/SignIn.vue')
    },
    {
      path: '/signup',
      component: () => import('./views/SignUp.vue')
    },
    {
      path: '/reset-password',
      component: () => import('./views/ResetPassword.vue')
    }
  ]
})
