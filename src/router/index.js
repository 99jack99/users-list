import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "../stores/authStore.js";

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
    {
        path: '/users',
        name: 'User',
        component: () => import('../views/user.vue')
    },
    {
      path: '/user/:id',
      name: 'Detailed',
      component: () => import('../components/detailed_user.vue')
  } ,
  ]
})

/* ROUTE GUARDS TO AVOID CLIENT TO MOVE UNEXPECTLY */
router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  const publicPage = ['/','/register'];
  const requiredAuth = !publicPage.includes(to.path);

  if (!authStore.token && requiredAuth) {
      return '/';
  }
  else if(authStore.token && !requiredAuth){
    return false;
  }

});

export default router