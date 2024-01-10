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
      path: "/performance",
      components: {
        default:() => import('../views/performanceView.vue'),
        head:Header,

      },
    },
    {
      path: "/event",
      components: {
        default:() => import('../views/eventView.vue'),
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
