import { defineStore } from 'pinia'
// 
import team1 from '@/assets/ppl1.jpg'
import team2 from '@/assets/ppl2.jpg'
import team3 from '@/assets/ppl3.jpg'
import team4 from '@/assets/ppl4.jpg'
import team5 from '@/assets/ppl5.jpg'
// 
import blog1 from '@/assets/blog_1.jpg'
import blog2 from '@/assets/blog_2.jpg'
import blog3 from '@/assets/blog_3.jpg'
// 
import step1 from '@/assets/step_1.jpg'
import step2 from '@/assets/step_2.jpg'
import step3 from '@/assets/step_3.jpg'

export const useMain = defineStore({
  id: 'main',
  state: () => ({
    toggled: false,
    servicesBtn: false,
    links: {
      part1: [
        {
          title: 'خانه',
          link: '/'
        },
        {
          title: 'درباره ما',
          link: '/about'
        },
        {
          title: 'ما چگونه کار می‌کنیم',
          link: '/our-work'
        }
      ],
      services: [
        {
          title: 'مشاوره عالی',
          link: '/services'
        },
        {
          title: 'مشاغل جهانی',
          link: '/services'
        },
        {
          title: 'حسابرسی و بیمه',
          link: '/services'
        },
        {
          title: 'مالیات و سهام',
          link: '/services'
        },
        {
          title: 'اوراق قرضه وکالاها',
          link: '/services'
        },
      ],
      part2: [
        {
          title: 'فروشگاه',
          link: '/shop'
        },
        {
          title: 'وبلاگ',
          link: '/blogs'
        },
        {
          title: 'تماس',
          link: '/contact'
        }
      ]
    },
    teams: [team1, team2, team3, team4, team5],
    blogs: { blog1, blog2, blog3 },
    steps: { step1, step2, step3 },
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
  }),
  actions: {
    toFarsiNumber(n) {
      const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

      return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
})
