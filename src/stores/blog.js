import { defineStore } from "pinia";

import blog1 from '@/assets/blog_1.jpg'
import blog2 from '@/assets/blog_2.jpg'
import blog3 from '@/assets/blog_3.jpg'
import blog4 from '@/assets/blog_4.jpg'

export const useBlog = defineStore({
  id: 'blog',
  state: () => ({
    date: new Date().toLocaleDateString('fa-IR'),
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    blogs: [
      {
        id: '1',
        title: 'چرا برای آموزش مالی هزینه کنیم',
        date: '۱۴۰۱/۶/۱۳',
        folder: 'صدمه شخصی',
        tags: ['آژانس‌ها', 'آگهی', 'تجارت', 'مالی'],
        img: blog1,
      },
      {
        id: '2',
        title: 'طرح‌هایی برای رشد کسب و کار شما',
        date: '۱۴۰۱/۶/۱۳',
        folder: 'مالی',
        tags: ['آژانس‌ها', 'آگهی', 'مالی'],
        img: blog2,
      },
      {
        id: '3',
        title: 'یک مشاور خوب چه ویژگی هایی دارد ؟',
        date: '۱۴۰۱/۶/۱۳',
        folder: 'تجارت',
        tags: ['آگهی', 'تجارت', 'مالی'],
        img: blog3,
      },
      {
        id: '4',
        title: 'مشاوره مالی برای افتتاح یک رستوران',
        date: '۱۴۰۱/۶/۱۳',
        folder: 'آگهی',
        tags: ['آگهی', 'مالی'],
        img: blog2,
      },
      {
        id: '5',
        title: 'مشاوره مالی برای یک استارت آپ خوب',
        date: '۱۴۰۱/۶/۱۳',
        folder: 'آگهی',
        tags: ['آگهی', 'مشاوره'],
        img: blog4,
      }
    ]
  }),
  getters: {
    getBlog: (state) => {
      return (id) => {
        return state.blogs.filter(blog => blog.id == id)[0]
      }
    }
  }
})