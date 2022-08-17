import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
// 
import shop1 from '@/assets/shop_1.jpg'
import shop2 from '@/assets/shop_2.jpg'
import shop3 from '@/assets/shop_3.jpg'
import shop4 from '@/assets/shop_4.jpg'
import shop5 from '@/assets/shop_5.jpg'
import shop6 from '@/assets/shop_6.jpg'

export const useShop = defineStore({
  id: 'shop',
  state: () => ({
    database: [
      {
        id: 3,
        img: shop3,
        title: 'راهنما باشید',
        price: '23900',
        category: 'مالی',
        lang: 'فارسی',
        label: 'پربیننده‌ترین'
      },
      {
        id: 4,
        img: shop4,
        title: 'گزارش سالانه',
        price: '66500',
        category: 'اقتصاد',
        lang: 'انگلیسی',
        label: 'جدیدترین'
      },
      {
        id: 5,
        img: shop5,
        title: 'مثل یک رییس فکر کن',
        price: '40000',
        category: 'مالی',
        lang: 'انگلیسی',
        label: 'پربیننده‌ترین'
      },
      {
        id: 6,
        img: shop6,
        title: 'فکر هوشمندانه سخت نیست',
        price: '100000',
        category: 'سفر و کشف',
        lang: 'انگلیسی',
        label: 'جدیدترین'
      },
      {
        id: 1,
        img: shop1,
        title: 'راه‌اندازی کسب و کار',
        price: '120000',
        category: 'اقتصاد',
        lang: 'انگلیسی',
        label: 'پرفروش‌ترین'
      },
      {
        id: 2,
        img: shop2,
        title: 'مدیریت زمان',
        price: '35000',
        category: 'سفر و کشف',
        lang: 'انگلیسی',
        label: 'جدیدترین'
      },
    ],
    cart: useStorage('cart', []),
    sideCart: false,
    addLoading: false
  }),
  getters: {
    getItem: (state) => {
      return (id) => {
        return state.database.filter(item => item.id == id)[0]
      }
    },
    count(state) {
      return state.cart.length
    },
    allItems(state) {
      return state.cart
    },
    totalAmount(state) {
      return state.cart.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    }
  },
  actions: {
    addToCart(product) {
      this.addLoading = true
      setTimeout(() => {
        const item = this.cart.find(p => p.id === product.id)
        if (!item) {
          this.cart.push({
            ...product,
            quantity: 1
          })
        } else {
          item.quantity++
        }

        this.addLoading = false
        this.sideCart = true
      }, 2000);
    },
    removeItem(id) {
      this.cart = this.cart.filter(product => product.id != id)
    },
    increment(id) {
      const item = this.cart.find(i => i.id == id)
      if (item) {
        item.quantity++
      }
    },
    decrement(id) {
      const item = this.cart.find(i => i.id == id)
      if (item) {
        item.quantity--
      }
    },
  }
})