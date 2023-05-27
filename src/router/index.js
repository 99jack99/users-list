import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/register.vue')
      },
  ]
})


export default router