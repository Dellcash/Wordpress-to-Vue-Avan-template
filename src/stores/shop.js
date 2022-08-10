import { defineStore } from 'pinia'
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
    // shops: { shop1, shop2, shop3, shop4, shop5, shop6 },
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
    ]
  }),
  getters: {
    getItem: (state) => {
      return (id) => {
        return state.database.filter(item => item.id == id)[0]
      }
    },
  }
})