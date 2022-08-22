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
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('../views/shop/Shop.vue'),
      meta: { title: 'محصولات' },
    },
    {
      path: '/shop/:id',
      name: 'Item',
      component: () => import('../views/shop/Item.vue'),
      meta: { title: '. . .' }
    },
    {
      path: '/shop/shopping-cart',
      name: 'ShoppingCart',
      component: () => import('../views/shop/ShoppingCart.vue'),
      meta: { title: 'سبد خرید' }
    },
    {
      path: '/shop/checkout',
      name: 'Checkout',
      component: () => import('../views/shop/Checkout.vue'),
      meta: { title: 'تسویه' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | فروشگاه آوان`
  next()
})

export default router
