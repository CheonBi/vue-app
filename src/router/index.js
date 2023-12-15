import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/homeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'home',
      component: Home,
    },
    {
      path:'/login',
      name: 'login',
      component: () => import('../views/loginView.vue'),
    },
    {
      path: '/dash',
      name: 'dash',
      component: () => import('../views/dashboardView.vue'),
    },
    {
      path: '/Achart',
      name: 'Achart',
      component: () => import('../views/AchartView.vue'),
    },
    {
      path: '/Bchart',
      name: 'Bchart',
      component: () => import('../views/BchartView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/adminView.vue'),
    },
  ]
})

export default router
