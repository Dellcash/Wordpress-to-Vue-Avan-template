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
  <main>
    <section>
      <!-- step 1 -->
      <div>
        <div class="d48n4i">
          <h2>قدم اول: اطلاعات شما</h2>
          <button @click="steps.first = true, steps.sec = false, steps.third = false, steps.fourth = false"
            v-if="!steps.first">ویرایش</button>
        </div>
        <div v-show="steps.first" class="tzb3ri">
          <div>
            <h4>مشتری جدید هستید؟</h4>
            <p>
              برای پرداخت سریعتر، رهگیری وضعیت سفارش و امکانات بیشتر عضو شوید.
              <br>
              شما بدون عضویت هم می‌توانید سفارش خود را تکمیل کنید.
            </p>

            <form @submit.prevent="">
              <div>
                <input v-model="picked" type="radio" id="one" value="one" xl="w4 h4">
                <label for="one">خرید بدون عضویت</label>
              </div>

              <div>
                <input v-model="picked" type="radio" id="two" value="two" xl="w4 h4">
                <label for="one">عضویت در سایت</label>
              </div>

              <div v-if="picked === 'two'">
                <input v-model="signInForm.email" type="email" placeholder="پست الکترونیکی">
                <input v-model="signInForm.password" type="password" placeholder="کلمه عبور">

                <button @click="steps.first = false, steps.sec = true">ادامه</button>
              </div>

              <button v-else @click="steps.first = false, steps.sec = true" mt4>ادامه</button>
            </form>

          </div>

          <div />

          <div>
            <h4>قبلا خرید کرده‌اید؟</h4>
            <p>
              برای ادامه، لطفا شماره موبایل یا آدرس ایمیل و رمز عبور حساب خود را وارد کنید.
            </p>

            <form @submit.prevent="">
              <div>
                <input v-model="loginForm.email" type="email" placeholder="پست الکترونیکی">
                <input v-model="loginForm.password" type="password" placeholder="کلمه عبور">
              </div>
            </form>

            <button @click="steps.first = false, steps.sec = true">ادامه</button>
          </div>
        </div>
      </div>

      <!-- step 2 -->
      <div>
        <div class="d48n4i">
          <h2>قدم دوم: آدرس شما</h2>
          <button @click="steps.sec = true, steps.first = false, steps.third = false, steps.fourth = false"
            v-if="steps.third || steps.fourth">ویرایش</button>
        </div>

        <div v-show="steps.sec" class="c4f0sf">
          <form @submit.prevent="">
            <div>
              <input type="text" placeholder="نام *">
              <p></p>
            </div>

            <div>
              <input type="text" placeholder="نام خانوادگی *">
              <p></p>
            </div>

            <div>
              <input type="text" placeholder="کد ملی">
            </div>

            <div>
              <select name="" id="city">
                <option value="تهران">تهران</option>
                <option value="تهران">اصفهان</option>
                <option value="تهران">شیراز</option>
                <option value="تهران">رشت</option>
              </select>

              <select name="" id="town">
                <option value="تهران">تهران</option>
                <option value="تهران">اصفهان</option>
                <option value="تهران">شیراز</option>
                <option value="تهران">رشت</option>
              </select>

              <select name="" id="eara">
                <option value="منطقه ۱">منطقه ۱</option>
                <option value="منطقه ۱">منطقه ۲</option>
                <option value="منطقه ۱">منطقه ۳</option>
                <option value="منطقه ۱">منطقه ۴</option>
              </select>
            </div>

            <div>
              <textarea rows="7" placeholder="آدرس *"></textarea>
              <p></p>
            </div>

            <div>
              <input type="text" placeholder="شماره همراه">
              <p></p>
            </div>

            <div>
              <input type="text" placeholder="شماره ثابت">
              <p></p>
            </div>

            <div>
              <input type="text" placeholder="کد پستی ×">
            </div>

            <button>انتخاب روش ارسال</button>
          </form>
        </div>
      </div>

      <!-- step 3 -->
      <div>
        <div class="flex items-center justify-between border-b border-black/50 ">
          <h2 class="text-sm py2">قدم سوم: روش ارسال</h2>
          <button @click="steps.third = true, steps.sec = false, steps.first = false, steps.fourth = false"
            v-if="steps.fourth" class="text-xs">ویرایش</button>
        </div>
        <div v-show="steps.third" class="my6">
          <h4>با پست</h4>
          <button @click="steps.third = false, steps.fourth = true" class="bg-gray-600 text-white">ادامه</button>
        </div>
      </div>

      <!-- step 4 -->
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
main {
  margin-bottom: 1.25rem;

  section {
    margin: auto;
    max-width: 420px;
    padding: 1.25rem;
    color: rgba(0, 0, 0, 0.8);

    >:not([hidden])~:not([hidden]) {
      --un-space-y-reverse: 0;
      margin-top: calc(1rem * calc(1 - var(--un-space-y-reverse)));
      margin-bottom: calc(1rem * var(--un-space-y-reverse));
    }

    @screen md {
      max-width: 768px;
    }

    @screen xl {
      max-width: 1220px;
    }

    div {
      &:first-child {
        .d48n4i {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-color: rgba(0, 0, 0, 0.5);

          h2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }

          button {
            font-size: 0.75rem;
            line-height: 1rem;
            font-weight: 700;
            transition-duration: 250ms;

            &:hover {
              opacity: 0.7;
            }
          }
        }

        .tzb3ri {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          div {
            &:first-child {
              width: 100%;

              h4 {
                font-size: 0.875rem;
                line-height: 1.25rem;
              }

              p {
                margin-top: 1.25rem;
                margin-bottom: 1.25rem;
                font-size: 0.75rem;
                line-height: 1rem;
                color: rgba(0, 0, 0, 0.5);
              }

              form {
                margin-bottom: 1rem;

                div {
                  &:first-child {
                    margin-bottom: 0.5rem;
                    display: flex;
                    align-items: center;

                    label {
                      margin-right: 0.5rem;
                      font-size: 0.75rem;
                      line-height: 1rem;
                    }
                  }

                  &:nth-child(2) {
                    display: flex;
                    margin-right: 0;
                    align-items: center;

                    label {
                      margin-right: 0.5rem;
                      font-size: 0.75rem;
                      line-height: 1rem;
                    }
                  }

                  &:nth-child(3) {
                    margin-top: 1.25rem;

                    >:not([hidden])~:not([hidden]) {
                      --un-space-y-reverse: 0;
                      margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
                      margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
                    }

                    input {
                      width: 100%;
                      border-width: 1px;
                      border-style: solid;
                      --un-border-opacity: 1;
                      border-color: rgba(209, 213, 219, var(--un-border-opacity));
                      padding: 0.5rem;
                      font-size: 0.75rem;
                      line-height: 1rem;

                      &:focus {
                        border-width: 2px;
                        border-style: solid;
                        outline: 2px solid transparent;
                        outline-offset: 2px;
                      }
                    }
                  }
                }
              }
            }

            &:nth-child(2) {
              margin-left: 0.75rem;
              margin-right: 0.75rem;
            }

            &:nth-child(3) {
              width: 100%;

              h4 {
                font-size: 0.875rem;
                line-height: 1.25rem;
              }

              p {
                margin-top: 1.25rem;
                margin-bottom: 1.25rem;
                font-size: 0.75rem;
                line-height: 1rem;
                color: rgba(0, 0, 0, 0.5);
              }

              form {
                margin-bottom: 0.75rem;

                div {
                  margin-top: 0.75rem;

                  >:not([hidden])~:not([hidden]) {
                    --un-space-y-reverse: 0;
                    margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
                    margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
                  }

                  input {
                    width: 100%;
                    border-width: 1px;
                    border-style: solid;
                    --un-border-opacity: 1;
                    border-color: rgba(209, 213, 219, var(--un-border-opacity));
                    padding: 0.5rem;
                    font-size: 0.75rem;
                    line-height: 1rem;

                    &:focus {
                      border-width: 2px;
                      border-style: solid;
                      outline: 2px solid transparent;
                      outline-offset: 2px;
                    }
                  }
                }
              }
            }

            button {
              width: 100%;
              --un-bg-opacity: 1;
              background-color: rgba(242, 101, 34, var(--un-bg-opacity));
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              text-align: center;
              font-size: 0.75rem;
              line-height: 1rem;
              --un-text-opacity: 1;
              color: rgba(255, 255, 255, var(--un-text-opacity));
              transition-duration: 250ms;

              &:hover {
                --un-bg-opacity: 1;
                background-color: rgba(0, 44, 96, var(--un-bg-opacity));
              }

              @screen md {
                width: 40%;
              }
            }
          }
        }
      }

      &:nth-child(2) {
        .d48n4i {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-color: rgba(0, 0, 0, 0.5);

          h2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }

          button {
            font-size: 0.75rem;
            line-height: 1rem;
            font-weight: 700;
            transition-duration: 250ms;

            &:hover {
              opacity: 0.7;
            }
          }
        }

        .c4f0sf {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;

          form {
            >:not([hidden])~:not([hidden]) {
              --un-space-y-reverse: 0;
              margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
              margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
            }

            input,
            select,
            option,
            textarea {
              width: 100%;
              border-width: 1px;
              border-style: solid;
              --un-border-opacity: 1;
              border-color: rgba(209, 213, 219, var(--un-border-opacity));
              padding: 0.5rem;
              font-size: 0.75rem;
              line-height: 1rem;

              &:focus {
                border-width: 2px;
                border-style: solid;
                outline: 2px solid transparent;
                outline-offset: 2px;
              }
            }

            div {
              &:nth-child(4) {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                grid-gap: 0.5rem;
                gap: 0.5rem;
              }

              &:nth-child(5) {
                margin-bottom: -0.5rem !important;
              }
            }

            p {
              font-size: 0.75rem;
              line-height: 1rem;
              --un-text-opacity: 1;
              color: rgba(248, 113, 113, var(--un-text-opacity));
            }

            button {
              width: 100%;
              margin-top: 1.5rem !important;
              --un-bg-opacity: 1;
              background-color: rgba(242, 101, 34, var(--un-bg-opacity));
              padding-top: 0.75rem;
              padding-bottom: 0.75rem;
              text-align: center;
              font-size: 0.75rem;
              line-height: 1rem;
              --un-text-opacity: 1;
              color: rgba(255, 255, 255, var(--un-text-opacity));
              transition-duration: 250ms;

              &:hover {
                --un-bg-opacity: 1;
                background-color: rgba(0, 44, 96, var(--un-bg-opacity));
              }

              @screen md {
                width: 20%;
              }
            }
          }
        }
      }
    }
  }
}
</style>