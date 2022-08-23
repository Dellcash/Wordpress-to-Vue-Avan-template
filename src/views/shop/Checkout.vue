<script setup>
const steps = reactive({
  first: true,
  sec: false,
  third: false,
  fourth: false
})

const picked = ref('one')

const signInForm = reactive({
  email: '',
  password: '',
  signInErr: ''
})

const loginForm = reactive({
  email: "",
  password: "",
  loginError: "",
});
</script>

<template>
  <main mb5>
    <section class="p5 space-y-4 text-black/80">
      <div>
        <div class="flex items-center justify-between border-b border-black/50">
          <h2 class="text-sm py2">قدم اول: اطلاعات شما</h2>
          <button @click="steps.first = true, steps.sec = false, steps.third = false, steps.fourth = false"
            v-if="!steps.first" class="text-xs">ویرایش</button>
        </div>
        <div v-show="steps.first" class="my6 flex items-start justify-between">
          <div wfull>
            <h4 text-sm>مشتری جدید هستید؟</h4>
            <p class="text-xs my5 text-black/60">
              برای پرداخت سریعتر، رهگیری وضعیت سفارش و امکانات بیشتر عضو شوید.
              <br>
              شما بدون عضویت هم می‌توانید سفارش خود را تکمیل کنید.
            </p>

            <form @submit.prevent="" mb4>
              <div class="flex items-center mb2">
                <input v-model="picked" type="radio" id="one" value="one" xl="w4 h4">
                <label for="one" class="text-xs mr2">خرید بدون عضویت</label>
              </div>

              <div class="inline-flex items-center">
                <input v-model="picked" type="radio" id="two" value="two" xl="w4 h4">
                <label for="one" class="text-xs mr2">عضویت در سایت</label>
              </div>

              <div v-if="picked === 'two'" space-y-3 mt3>
                <input v-model="signInForm.email" type="email" placeholder="پست الکترونیکی"
                  class="border border-gray-300 text-xs wfull p2 focus:border-2 focus:outline-none">
                <input v-model="signInForm.password" type="password" placeholder="کلمه عبور"
                  class="border border-gray-300 text-xs wfull p2 focus:border-2 focus:outline-none">

                <button @click="steps.first = false, steps.sec = true"
                  class="bg-#f26522 wfull text-center py2 text-xs text-white duration-250 hover:bg-#002c60">ادامه</button>
              </div>

              <button v-else @click="steps.first = false, steps.sec = true"
                class="mt3 bg-#f26522 wfull text-center py2 text-xs text-white duration-250 hover:bg-#002c60">ادامه</button>
            </form>

          </div>

          <div mx3 />

          <div wfull>
            <h4 text-sm>قبلا خرید کرده‌اید؟</h4>
            <p class="text-xs my5 text-black/60">
              برای ادامه، لطفا شماره موبایل یا آدرس ایمیل و رمز عبور حساب خود را وارد کنید.
            </p>

            <form @submit.prevent="" mb5>
              <div space-y-3 mt3>
                <input v-model="loginForm.email" type="email" placeholder="پست الکترونیکی"
                  class="border border-gray-300 text-xs wfull p2 focus:border-2 focus:outline-none">
                <input v-model="loginForm.password" type="password" placeholder="کلمه عبور"
                  class="border border-gray-300 text-xs wfull p2 focus:border-2 focus:outline-none">
              </div>
            </form>

            <button @click="steps.first = false, steps.sec = true"
              class="bg-#f26522 wfull text-center py2 text-xs text-white duration-250 hover:bg-#002c60">ادامه</button>
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between border-b border-black/50">
          <h2 class="text-sm py2">قدم دوم: آدرس شما</h2>
          <button @click="steps.sec = true, steps.first = false, steps.third = false, steps.fourth = false"
            v-if="steps.third || steps.fourth" class="text-xs">ویرایش</button>
        </div>
        <div v-show="steps.sec" class="my6">
          <input type="text" placeholder="نام" border>
          <button @click="steps.sec = false, steps.third = true" class="bg-gray-600 text-white">ادامه</button>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between border-b border-black/50">
          <h2 class="text-sm py2">قدم سوم: روش ارسال</h2>
          <button @click="steps.third = true, steps.sec = false, steps.first = false, steps.fourth = false"
            v-if="steps.fourth" class="text-xs">ویرایش</button>
        </div>
        <div v-show="steps.third" class="my6">
          <h4>با پست</h4>
          <button @click="steps.third = false, steps.fourth = true" class="bg-gray-600 text-white">ادامه</button>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between border-b border-black/50">
          <h2 class="text-sm py2">قدم چهارم: روش پرداخت</h2>
        </div>
        <div v-show="steps.fourth" class="my6">
          <h4>کارت به کارت</h4>
          <button class="bg-gray-600 text-white">ادامه</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
</style>