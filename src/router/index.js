import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/homeView.vue';
import Header from '../components/Base/commonHeader.vue';
import Footer from '../components/Base/commonFooter.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      components: {
        default:Home,
        head:Header,
      },
    },
    {
      path:"/login",
      components: {
        default:() => import('../views/loginView.vue'),
      },
    },
    {
      path: "/dash",
      components: {
        default:() => import('../views/dashboardView.vue'),
        head:Header,
      },
    },
    {
      path: "/Achart",
      components: {
        default:() => import('../views/AchartView.vue'),
        head:Header,

      },
    },
    {
      path: "/Bchart",
      components: {
        default:() => import('../views/BchartView.vue'),
        head:Header,

      },
    },
    {
      path: "/admin",
      components: {
        default: () => import('../views/adminView.vue'),
        head:Header,

      },
    },
  ],
});

export default router
