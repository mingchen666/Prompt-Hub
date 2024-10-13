import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:value',
      name: 'CardDetail',
      component: () => import('../views/detail/index.vue'),
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/index.vue')
    },
    {
      path: '/support',
      name: 'suppoort',
      component: () => import('../views/support/index.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/update',
      name: 'update',
      component: () => import('../views/update/index.vue')
    }
  ]
})

export default router
