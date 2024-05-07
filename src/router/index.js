import { createRouter, createWebHistory } from 'vue-router'
import inicioView from '../views/inicioView.vue'
import vermasView from '@/views/vermasView.vue'
import BlogView from '@/views/blogView.vue'
import CategoriasView from '@/views/CategoriasView.vue'
import AuthView from '@/views/authView.vue'
import sobremiView from '@/views/sobremiView.vue'
import ContactoView from '@/views/contactoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: inicioView
    },
    {
      path: '/vermas/:id',
      name: 'vermas',
      component: vermasView
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriasView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/blog/:param?',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sobremi',
      name: 'sobremi',
      component: sobremiView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
  ]
})

export default router
