<script setup>
const description = ref('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.')

const links = ref([
  {
    title: 'بلاگ',
    link: '#'
  },
  {
    title: 'ارتباط با ما',
    link: '#'
  },
  {
    title: 'خانه',
    link: '#'
  },
  {
    title: 'درباره ما',
    link: '#'
  },
  {
    title: 'ما چگونه کار می‌کنیم',
    link: '#'
  },
  {
    title: 'مشاوره مالی',
    link: '#'
  },
  {
    title: 'فروشگاه',
    link: '#'
  },
  {
    title: 'مشاغل جهانی',
    link: '#'
  }
])

const loading = ref(false)
const form = reactive({
  username: '',
  usernameErr: '',
  email: '',
  emailErr: '',
  message: '',
  content: '',
  contentErr: '',
})
const validation = () => {
  if (form.username === '') {
    form.usernameErr = 'نام کاربری خود را وارد کنید!'
  } else {
    form.usernameErr = ''
  }
  if (form.email === '') {
    form.emailErr = 'ایمیل خود را وارد کنید!'
  } else {
    form.emailErr = ''
  }
  if (form.content === '') {
    form.contentErr = 'پیغام خود را بگذارید!'
  } else {
    form.contentErr = ''
  }

  if (form.username !== '' && form.email !== '' && form.content !== '') {
    loading.value = true

    setTimeout(() => {
      form.username = ''
      form.email = ''
      form.message = ''
      form.content = ''
      loading.value = false
    }, 2000);
  }
}
</script>

<template>
  <footer class="bg-#00387a text-white">
    <section class="space-y10 px5 pt7 pb10">
      <div>
        <div class="flex items-center">
          <img src="../assets/logo.png" alt="logo" class="w15 ml4">
          <h5 text-lg>نام شرکت</h5>
        </div>
        <div p3>
          <p class="text-sm pb5">{{ description }}</p>
          <routerLink to="#" class="underline text-gray">درباره ما</routerLink>
        </div>
      </div>

      <div class="grid grid-cols-2 gap10">
        <div>
          <h3 class="text-xl border-b inline-block mb5">خدمات</h3>

          <div class="flex flex-col text-xs space-y-3">
            <routerLink v-for="link in links" :key="link" :to="link.link" class="border-b border-gray/20 ">{{
                link.title
            }}
            </routerLink>
          </div>
        </div>

        <div>
          <h3 class="text-xl border-b inline-block mb5">شرکت</h3>

          <div class="flex flex-col text-xs space-y-3">
            <routerLink v-for="link in links" :key="link" :to="link.link" class="border-b border-gray/20 ">{{
                link.title
            }}
            </routerLink>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl border-b inline-block mb5">اشتراک</h3>

        <form @submit.prevent="validation" class="">
          <div space-y3>
            <div>
              <input v-model="form.username" type="text" placeholder="نام *"
                class="wfull py2 px4 text-black outline-none">
              <XyzTransition xyz="fade up">
                <p v-if="form.usernameErr" class="text-xs text-red mt1">{{ form.usernameErr }}</p>
              </XyzTransition>
            </div>
            <div>
              <input v-model="form.email" type="email" placeholder="پست الکترونیک *"
                class="wfull py2 px4 text-black outline-none">
              <XyzTransition xyz="fade up">
                <p v-if="form.emailErr" class="text-xs text-red mt1">{{ form.emailErr }}</p>
              </XyzTransition>
            </div>
            <div>
              <input v-model="form.message" type="text" placeholder="موضوع"
                class="wfull py2 px4 text-black outline-none">
            </div>
            <div>
              <textarea v-model="form.content" cols="25" rows="6" placeholder="پیغام *"
                class="wfull py2 px4 text-black outline-none"></textarea>
              <XyzTransition xyz="fade up">
                <p v-if="form.contentErr" class="text-xs text-red mt1">{{ form.contentErr }}</p>
              </XyzTransition>
            </div>
          </div>

          <button class="ev29ll">
            <span v-if="!loading" text-xs>ارسال</span>
            <div v-else i-carbon-circle-dash animate-spin class="hjn312" />
          </button>
        </form>
      </div>
    </section>

    <section class="bg-#002c60 py3">
      <p class="text-sm text-gray-100 text-center">© ۲۰۲۲ تمامی حقوق برای این قالب محفوظ است​​​​​​​.</p>
    </section>
  </footer>
</template>

<style scoped>
.ev29ll {
  margin-top: 0.5rem;
  --un-bg-opacity: 1;
  background-color: rgba(242, 101, 34, var(--un-bg-opacity));
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  opacity: 0.9;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition-duration: 250ms;
}

.ev29ll:hover {
  --un-bg-opacity: 1;
  background-color: rgba(0, 44, 96, var(--un-bg-opacity));
}

.hjn312 {
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
</style>