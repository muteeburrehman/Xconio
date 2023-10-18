import { createRouter, createWebHistory } from "vue-router";
import ContactComp from './components/UI/ContactComp.vue'
import LandingPage from './components/UI/LandingPage.vue'
import NavBar from './components/UI/NavBar.vue'
import JoinUs from './components/UI/JoinUs.vue'
import TeamComp from './components/UI/TeamComp.vue'
import NotFound from './components/UI/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: LandingPage,
        navbar: NavBar,
      }
    },
    {
      path: '/team',
      name: 'team',
      components: {
        default: TeamComp,
        navbar: NavBar,
      }
    },
    {
      path: '/join',
      name: 'join',
      components: {
        default: JoinUs,
        navbar: NavBar,
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: ContactComp,
        navbar: NavBar,
      }
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

export default router;
