import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import ('../views/Portfolio.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import ('../views/projects.vue')
    },
    {
      path: '/graphics',
      name: 'graphics',
      component: () => import ('../views/graphics.vue')
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: () => import ('../views/certificates.vue')
    }
  ]
})

export default router
