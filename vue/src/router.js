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
      props: {
        type: 'signin'
      },
      component: () => import('./views/Sign.vue')
    },
    {
      path: '/signup',
      props: {
        type: 'signup'
      },
      component: () => import('./views/Sign.vue')
    },
    {
      path: '/reset-password',
      props: {
        type: 'reset'
      },
      component: () => import('./views/Sign.vue')
    },
    {
      path: '/search',
      props: {
        type: 'search'
      },
      component: () => import('./views/Main.vue')
    }
  ]
})
