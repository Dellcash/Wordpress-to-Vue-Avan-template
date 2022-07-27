import { defineStore } from 'pinia'

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
          link: '#'
        },
        {
          title: 'وبلاگ',
          link: '#'
        },
        {
          title: 'تماس',
          link: '#'
        }
      ]
    },
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
  }),
  actions: {
    toFarsiNumber(n) {
      const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

      return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
    }
  }
})
