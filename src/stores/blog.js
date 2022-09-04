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
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
        img: blog1,
      }
    ]
  }),
})