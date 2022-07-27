import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'خانه' }
    },
    {
      path: '/about',
      name: 'Aboute',
      component: () => import('../views/About.vue'),
      meta: { title: 'درباره ما' }
    },
    {
      path: '/our-work',
      name: 'OurWork',
      component: () => import('../views/OurWork.vue'),
      meta: { title: 'چگونه ما کار می‌کنیم' }
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('../views/Services.vue'),
      meta: { title: 'اقتصاد' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | قالب آوان`
  next()
})

export default router
