<script setup>
import { useShop } from '@/stores/shop';
import { useMain } from '@/stores/main';
import { useRouter } from 'vue-router';

const shop = useShop()
const main = useMain()
const router = useRouter()

const steps = reactive({
  first: true,
  sec: false,
  third: false,
  fourth: false
})

const picked = ref('one')

const signInLoading = ref(false)
const signInForm = reactive({
  email: '',
  password: '',
  signInErr: '',
  next: () => {
    signInLoading.value = true
    setTimeout(() => {
      signInLoading.value = false
      steps.first = false
      steps.sec = true
    }, 2000);
  }
})
const signIn = () => {
  const user = shop.users.find((user) => user.email === signInForm.email)
  if (!user) {
    if (signInForm.email === '' || signInForm.password === '') {
      signInForm.signInErr = "لطفا اطلاعات را کامل وارد کنید!";
      setTimeout(() => {
        signInForm.signInErr = ''
      }, 2000);
    } else {
      signInLoading.value = true
      setTimeout(() => {
        signInLoading.value = false

        shop.users.push({
          id: new Date().getTime(),
          email: signInForm.email,
          password: signInForm.password
        })

        signInForm.email = ''
        signInForm.password = ''
        steps.first = false
        steps.sec = true
      }, 2000)
    }
  } else {
    signInForm.signInErr = 'ایمیل دیگری انتخاب کنید!'

    setTimeout(() => {
      signInForm.signInErr = ''
    }, 2000);
  }
}

const loginLoading = ref(false)
const loginForm = reactive({
  email: "",
  password: "",
  loginError: "",
});
const login = () => {
  const user = shop.users.find(
    (user) => user.email == loginForm.email
  );
  if (user) {
    loginLoading.value = true
    setTimeout(() => {
      loginLoading.value = false
      loginForm.email = ''
      loginForm.password = ''
      steps.first = false
      steps.sec = true
    }, 2000);
  } else {
    if (loginForm.email === '' || loginForm.password === '') {
      loginForm.loginError = 'لطفا اطلاعات را کامل وارد کنید!'
      setTimeout(() => {
        loginForm.loginError = ''
      }, 2000);
    } else {
      loginForm.loginError = 'کاربری با این مشخصات وجود ندارد!'
      setTimeout(() => {
        loginForm.loginError = ''
      }, 2000);
    }
  }
}

const infoLoading = ref(false)
const info = reactive({
  firstName: '',
  firstErr: '',
  lastName: '',
  lastErr: '',
  address: '',
  addErr: '',
  zipCode: '',
  zipErr: ''
})
const validateInfo = () => {
  if (info.firstName === '') {
    info.firstErr = 'نام خود را وارد کنید!'
    setTimeout(() => {
      info.firstErr = ''
    }, 2000);
  }
  if (info.lastName === '') {
    info.lastErr = 'نام خانوادگی خود را وارد کنید!'
    setTimeout(() => {
      info.lastErr = ''
    }, 2000);
  }
  if (info.address === '') {
    info.addErr = 'آدرس را وارد کنید!'
    setTimeout(() => {
      info.addErr = ''
    }, 2000);
  }
  if (info.zipCode === '') {
    info.zipErr = 'کدپستی را وارد کنید!'
    setTimeout(() => {
      info.zipErr = ''
    }, 2000);
  }

  if (info.firstName !== '' && info.lastName !== '' && info.address !== '' && info.zipCode !== '') {
    infoLoading.value = true

    setTimeout(() => {
      infoLoading.value = false

      if (shop.users.length > 0) {
        const userInfo = shop.users[0]
        Object.assign(userInfo, {
          firstname: info.firstName,
          lastname: info.lastName,
          address: info.address,
          zipCode: info.zipCode
        })
      } else {
        shop.users.push({
          firstname: info.firstName,
          lastname: info.lastName,
          address: info.address,
          zipCode: info.zipCode
        })
      }
      steps.sec = false
      steps.third = true
    }, 2000);
  }
}

const loadingShipping = ref(false)
const shipping = ref('three')
const addShipping = () => {
  loadingShipping.value = true
  setTimeout(() => {
    loadingShipping.value = false
    if (shop.users.length > 0) {
      const user = shop.users[0]
      Object.assign(user, {
        shipping: shipping
      })
    } else {
      shop.users.push({
        shipping: shipping
      })
    }

    steps.third = false
    steps.fourth = true
  }, 2000);
}
const loadingcompleted = ref(false)
const completed = () => {
  loadingcompleted.value = true
  setTimeout(() => {
    loadingcompleted.value = false
    router.push('/shop/success')
  }, 2000);
}
const total = computed(() => main.toFarsiNumber(main.numberWithCommas(shop.totalAmount)))

onMounted(() => {
  if (shop.isLoggedIn) {
    steps.first = false
    steps.sec = false
    steps.third = true
  }
})
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

            <form @submit.prevent="signIn">
              <div>
                <input v-model="picked" type="radio" id="one" value="one" xl="w4 h4">
                <label for="one">خرید بدون عضویت</label>
              </div>

              <div>
                <input v-model="picked" type="radio" id="two" value="two" xl="w4 h4">
                <label for="two">عضویت در سایت</label>
              </div>

              <div v-if="picked === 'two'">
                <input v-model="signInForm.email" type="email" placeholder="پست الکترونیکی">
                <input v-model="signInForm.password" type="password" placeholder="کلمه عبور">
                <p v-if="signInForm.signInErr">{{
                    signInForm.signInErr
                }}</p>

                <button>
                  <span v-if="!signInLoading" text-xs>ادامه</span>
                  <span v-else>. . .</span>
                </button>
              </div>

              <button v-else @click="signInForm.next" mt4>
                <span v-if="!signInLoading" text-xs>ادامه</span>
                <span v-else>. . .</span>
              </button>
            </form>

          </div>

          <div />

          <div>
            <h4>قبلا خرید کرده‌اید؟</h4>
            <p>
              برای ادامه، لطفا شماره موبایل یا آدرس ایمیل و رمز عبور حساب خود را وارد کنید.
            </p>

            <form @submit.prevent="login">
              <div>
                <input v-model="loginForm.email" type="email" placeholder="پست الکترونیکی">
                <input v-model="loginForm.password" type="password" placeholder="کلمه عبور">
              </div>

              <p v-if="loginForm.loginError">{{ loginForm.loginError }}</p>

              <button>
                <span v-if="!loginLoading" text-xs>ادامه</span>
                <span v-else>. . .</span>
              </button>
            </form>
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
          <form @submit.prevent="validateInfo">
            <div>
              <input v-model="info.firstName" type="text" placeholder="نام *">
              <p v-if="info.firstErr">{{ info.firstErr }}</p>
            </div>

            <div>
              <input v-model="info.lastName" type="text" placeholder="نام خانوادگی *">
              <p v-if="info.lastErr">{{ info.lastErr }}</p>
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
              <textarea v-model="info.address" rows="7" placeholder="آدرس *"></textarea>
              <p v-if="info.addErr">{{ info.addErr }}</p>
            </div>

            <div>
              <input type="text" placeholder="شماره همراه">
            </div>

            <div>
              <input type="text" placeholder="شماره ثابت">
            </div>

            <div>
              <input v-model="info.zipCode" type="text" placeholder="کد پستی *">
              <p v-if="info.zipErr">{{ info.zipErr }}</p>
            </div>

            <button>
              <span v-if="!infoLoading" text-xs>انتخاب روش ارسال</span>
              <span v-else>. . .</span>
            </button>
          </form>
        </div>
      </div>

      <!-- step 3 -->
      <div>
        <div class="d48n4i">
          <h2>قدم سوم: روش ارسال</h2>
          <button @click="steps.third = true, steps.sec = false, steps.first = false, steps.fourth = false"
            v-if="steps.fourth">ویرایش</button>
        </div>

        <div v-show="steps.third" class="c4f0sf">
          <h3>شیوه ارسال را انتخاب کنید</h3>
          <form @submit.prevent="addShipping">
            <div class="gw6dv1">
              <div>
                <input v-model="shipping" type="radio" id="three" value="three" xl="w4 h4">
                <label for="three">پیک</label>
              </div>

              <h6 text-sm>پس کرایه</h6>
            </div>

            <div class="gw6dv1">
              <div>
                <input v-model="shipping" type="radio" id="four" value="four" xl="w4 h4">
                <label for="four">پست</label>
              </div>

              <h6 text-sm>رایگان</h6>
            </div>

            <button>
              <span v-if="!loadingShipping" text-xs>انتخاب روش پرداخت</span>
              <span v-else text-xs>. . .</span>
            </button>
          </form>
        </div>
      </div>

      <!-- step 4 -->
      <div>
        <div class="d48n4i">
          <h2 class="text-sm py2">قدم چهارم: روش پرداخت</h2>
        </div>

        <div v-show="steps.fourth" class="c4f0sf">
          <h3>شیوه پرداخت را انتخاب نمایید.</h3>

          <div class="y406mb">
            <div class="o84hqw">
              <div>
                <input type="radio" id="cart" xl="w4 h4">
                <label for="cart">کارت به کارت</label>
              </div>

              <div>
                <div>
                  <h5>جمع کل خرید شما</h5>
                  <h5>{{ total }} تومان</h5>
                </div>

                <!-- I DONT KNOW WHAT HAPPENED IN THIS DIV :// -->
                <div class="!-mt8px !wfull">
                  <h5>هزینه ارسال</h5>
                  <h5 class="!-m0">پس کرایه</h5>
                </div>

                <div>
                  <h5>مبلغ قابل پرداخت</h5>
                  <h5>{{ total }} تومان</h5>
                </div>
              </div>
            </div>

            <button @click="completed">
              <span v-if="!loadingcompleted" text-xs>پرداخت و تکمیل</span>
              <span v-else>. . .</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- <div>
      <div v-for="(index, i) in 5" :key="i"
        class="[&:nth-child(3)]:bg-red [&:nth-child(2)]:bg-blue sm:hover:[&:nth-child(4)]:text-3xl">{{ index }}</div>
    </div> -->
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
                    position: relative;
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

                    p {
                      position: absolute;
                      width: 100%;
                      top: -0.7rem;
                      --un-bg-opacity: 1;
                      background-color: rgba(248, 113, 113, var(--un-bg-opacity));
                      padding: 0.5rem;
                      font-size: 0.75rem;
                      line-height: 1rem;
                      letter-spacing: -0.5px;
                      --un-text-opacity: 1;
                      color: rgba(255, 255, 255, var(--un-text-opacity));

                      @screen sm {
                        letter-spacing: 0rem;
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
                position: relative;

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

                p {
                  position: absolute;
                  top: -0.925rem;
                  margin: 0rem !important;
                  margin-top: 1rem !important;
                  width: 100%;
                  --un-bg-opacity: 1;
                  background-color: rgba(248, 113, 113, var(--un-bg-opacity));
                  padding: 0.5rem;
                  font-size: 0.75rem;
                  line-height: 1rem;
                  letter-spacing: -1px;
                  --un-text-opacity: 1 !important;
                  color: rgba(255, 255, 255, var(--un-text-opacity)) !important;

                  @screen md {
                    letter-spacing: 0
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
              margin-top: 1rem !important;

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
            position: relative;

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
              position: relative;

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
              position: absolute;
              top: 1px;
              width: 100%;
              --un-bg-opacity: 1;
              background-color: rgba(248, 113, 113, var(--un-bg-opacity));
              padding: 0.5rem;
              font-size: 0.75rem;
              line-height: 1rem;
              --un-text-opacity: 1;
              color: rgba(255, 255, 255, var(--un-text-opacity));
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

      &:nth-child(3) {
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

          h3 {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }

          form {
            margin-top: 1.5rem;

            >:not([hidden])~:not([hidden]) {
              --un-space-y-reverse: 0;
              margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
              margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
            }

            .gw6dv1 {
              display: flex;
              align-items: center;
              justify-content: space-between;

              div {
                display: flex;
                align-items: center;

                label {
                  margin-right: 0.75rem;
                  font-size: 0.875rem;
                  line-height: 1.25rem;
                }
              }
            }
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

      &:nth-child(4) {
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
        }

        .c4f0sf {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;

          h3 {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }

          .y406mb {
            margin-top: 1.25rem;

            .o84hqw {
              @screen md {
                display: flex;
                align-items: flex-start;

                >:not([hidden])~:not([hidden]) {
                  --un-space-x-reverse: 0;
                  margin-left: calc(7.5rem * calc(1 - var(--un-space-x-reverse)));
                  margin-right: calc(7.5rem * var(--un-space-x-reverse));
                  --un-space-x-reverse: 1;
                }
              }

              div {
                &:first-child {
                  margin-bottom: 1.25rem;
                  display: flex;
                  align-items: center;

                  >:not([hidden])~:not([hidden]) {
                    --un-space-x-reverse: 0;
                    margin-left: calc(0.75rem * calc(1 - var(--un-space-x-reverse)));
                    margin-right: calc(0.75rem * var(--un-space-x-reverse));
                    --un-space-x-reverse: 1;
                  }

                  label {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                  }
                }

                &:nth-child(2) {
                  width: 70%;

                  >:not([hidden])~:not([hidden]) {
                    --un-space-y-reverse: 0;
                    margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
                    margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
                  }

                  @screen md {
                    width: 40%;
                  }

                  div {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                  }
                }
              }
            }
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
</style>