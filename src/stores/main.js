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
    },
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    loading: false,
    form: {
      username: '',
      usernameErr: '',
      email: '',
      emailErr: '',
      message: '',
      content: '',
      contentErr: '',
    },
  }),
  actions: {
    validation() {
      if (this.form.username === '') {
        this.form.usernameErr = 'نام کاربری خود را وارد کنید!'
      } else {
        this.form.usernameErr = ''
      }
      if (this.form.email === '') {
        this.form.emailErr = 'ایمیل خود را وارد کنید!'
      } else {
        this.form.emailErr = ''
      }
      if (this.form.content === '') {
        this.form.contentErr = 'پیغام خود را بگذارید!'
      } else {
        this.form.contentErr = ''
      }

      if (this.form.username !== '' && this.form.email !== '' && this.form.content !== '') {
        this.loading = true

        setTimeout(() => {
          this.form.username = ''
          this.form.email = ''
          this.form.message = ''
          this.form.content = ''
          this.loading = false
        }, 2000);
      }
    }

  }
})
