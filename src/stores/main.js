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
          link: '#'
        },
        {
          title: 'ما چگونه کار می‌کنیم',
          link: '#'
        }
      ],
      services: [
        {
          title: 'مشاوره عالی',
          link: '/'
        },
        {
          title: 'مشاغل جهانی',
          link: '#'
        },
        {
          title: 'حسابرسی و بیمه',
          link: '#'
        },
        {
          title: 'مالیات و سهام',
          link: '#'
        },
        {
          title: 'اوراق قرضه وکالاها',
          link: '#'
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
    }
  }),
})
