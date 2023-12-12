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
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberContent.vue'),
    },
  ]
})

export default router
