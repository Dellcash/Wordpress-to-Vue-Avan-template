<script setup>
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
  <div class="c576cu">
    <div class="g9b8ru ">
      <h6 text-xs>حمایت کردن​​​​​​​</h6>
      <h3 class="oax00q">چگونه میتوانیم به شما کمک کنیم؟</h3>

      <div class="b73rff">
        <h6 class="lrwj3k">​شماره تماس</h6>
        <h6>۰۹۳۵۳۴۱۷۳۵۲</h6>
        <h6 class="lrwj3k">​شماره تماس</h6>
        <h6 text-xs>لطفا ادرس خود را وارد کنید​​​​​​​</h6>
      </div>
    </div>

    <div p="x5 y10 md:y0 md:b9">
      <form @submit.prevent="validation">
        <div class="e84c43">
          <div class="space-y-2.3">
            <div>
              <input v-model="form.username" type="text" placeholder="نام *" class="r35kkr">
              <XyzTransition xyz="fade right">
                <p v-if="form.usernameErr" class="b1v8d3">{{ form.usernameErr }}</p>
              </XyzTransition>
            </div>
            <div>
              <input v-model="form.email" type="email" placeholder="پست الکترونیک *" class="r35kkr">
              <XyzTransition xyz="fade right">
                <p v-if="form.emailErr" class="b1v8d3">{{ form.emailErr }}</p>
              </XyzTransition>
            </div>
            <div>
              <input v-model="form.message" type="text" placeholder="موضوع" class="r35kkr">
            </div>
          </div>
          <div mr3>
            <textarea v-model="form.content" rows="6" placeholder="پیغام *" class="r35kkr"></textarea>
            <XyzTransition xyz="fade up">
              <p v-if="form.contentErr" class="b1v8d3">{{ form.contentErr }}</p>
            </XyzTransition>
          </div>
        </div>

        <button class="ev29ll">
          <span v-if="!loading" text-xs>ارسال</span>
          <div v-else i-carbon-circle-dash animate-spin class="hjn312" />
        </button>
      </form>
    </div>
  </div>
</template>

<style>
.g9b8ru {
  padding-bottom: 1.25rem;
  padding-right: 1.25rem !important;
  --un-text-opacity: 1;
  color: rgba(75, 85, 99, var(--un-text-opacity));
}

.oax00q {
  padding-top: 1.25rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  --un-text-opacity: 1;
  color: rgba(0, 0, 0, var(--un-text-opacity));
}

.b73rff>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--un-space-y-reverse));
}

.b73rff {
  background-image: url('../assets/bg_about_1.jpg');
  background-size: cover;
  background-position: center;
  margin-top: 1rem;
  padding: 1.7rem;
  color: #fff;
  padding-bottom: 2rem
}

.lrwj3k {
  font-size: 0.75rem;
  line-height: 1rem;
  --un-text-opacity: 1;
  color: rgba(242, 101, 34, var(--un-text-opacity));
}

.e84c43 {
  display: flex;
  justify-content: space-between;
}

.r35kkr {
  background-color: transparent;
  padding: 0.375rem;
  font-size: 0.75rem;
  line-height: 1rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(156, 163, 175, var(--un-border-opacity))
}

.r35kkr::placeholder {
  --un-text-opacity: 1;
  color: rgba(107, 114, 128, var(--un-text-opacity))
}

.b1v8d3 {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: -0.5px;
  --un-text-opacity: 1;
  color: rgba(248, 113, 113, var(--un-text-opacity));
}

.ev29ll {
  width: 100%;
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

@media (min-width: 768px) {
  .g9b8ru {
    padding-left: 0;
    padding-right: 0;
  }

  .c576cu {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: flex-end;
  }
}


@media (min-width: 1280px) {
  .c576cu {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}
</style>