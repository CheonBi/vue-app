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
      path: '/cat',
      name: 'cat',
      component: () => import('../views/CatContent.vue'),
    },
  ]
})

export default router
