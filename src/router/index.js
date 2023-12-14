import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeContent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/TestContent.vue'),
    },
  ]
})

export default router
