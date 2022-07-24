<script setup>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import team1 from '../assets/ppl1.jpg'
import team2 from '../assets/ppl2.jpg'
import team3 from '../assets/ppl3.jpg'
import team4 from '../assets/ppl4.jpg'
import team5 from '../assets/ppl5.jpg'

const description = ref('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.')
const socials = ref(['i-carbon-media-cast', 'i-carbon-logo-linkedin', 'i-carbon-logo-twitter', 'i-carbon-logo-instagram'])
const teams = ref([team1, team2, team3, team4, team5])

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
  <main class="bg-#e5eef6 p5 flex justify-center">
    <section class="bg-white max-w-420px md:max-w-full">
      <div pt8 px5 space-y4 text-gray-600>
        <h6 text-xs>درباره ما</h6>
        <h3 text-xl text-black font-bold>ما مشاوره هستیم​​​​​​​</h3>
        <p text-xs>{{ description }}</p>
      </div>

      <div flex items-center px5 pt7 sm:pb3>
        <div v-for="social in socials" :key="social" class="bg-#f26522 rounded-full text-white p1.5 m1">
          <div :class="social" class="text-2xl" />
        </div>
        <p text-xs mr2>ما را دنبال کنید.</p>
      </div>

      <div p3>
        <Carousel :autoplay="2000" :wrap-around="true">
          <Slide v-for="team in teams" :key="team">
            <img :src="team" alt="team members" class="wfull h-20rem object-cover">
          </Slide>
        </Carousel>
      </div>

      <div pt8 px5 space-y4 text-gray-600>
        <h6 text-xs>ما چه کاری انجام می دهیم ؟​​​​​​​</h6>
        <h3 text-xl text-black font-bold>ماموریت ما و هدف ما​​​​​​​</h3>
        <p text-xs>{{ description }}</p>
      </div>

      <div md="grid grid-cols-2 my10">
        <img src="../assets/member_1.jpg" alt="team member" class="wfull h-17rem object-cover p5 pb0 md:p0 md:h-18rem">
        <div class="bg-#00387a p5 text-white md:p10">
          <p text-xs md:leading-5>{{ description }}</p>

          <div flex items-end justify-end p3 md:p0 md:mt10>
            <h6 text-xs>نام <br> موسس ومدیرعامل</h6>
            <img src="../assets/sign.png" alt="sign" class="w17">
          </div>
        </div>
      </div>

      <div class="vjk9ut md:text-center md:space-y-4">
        <h6 text-xs>دستاوردها و آمار​​​​​​​</h6>
        <h3 text-2xl font-bold pt2>25 سال عمر ما​​​​​​​​​​​​​</h3>

        <div flex flex-col items-center justify-center mt5 md:flex-row>
          <div v-for="n in 3" :key="n" class="w-80% bg-white p5 m2 flex flex-col justify-center items-center">
            <div class="bg-#feefe8 p2 inline-block mb5">
              <div i-carbon-user class="bg-#f26522 text-3xl" />
            </div>

            <span class="text-#f26522 text-sm">۵۲ کارشناسان <span class="!text-black text-sm">شکل کار ما</span></span>
          </div>
        </div>
      </div>

      <div md="grid grid-cols-2 items-end p5">
        <div class="px5 text-gray-600">
          <h6 text-xs>حمایت کردن​​​​​​​</h6>
          <h3 text-xl text-black font-bold>چگونه میتوانیم به شما کمک کنیم؟</h3>

          <div class="b73rff space-y5 !pb8">
            <h6 class="text-#f26522 text-xs">​شماره تماس</h6>
            <h6>۰۹۳۵۳۴۱۷۳۵۲</h6>
            <h6 class="text-#f26522 text-xs">​شماره تماس</h6>
            <h6 text-xs>لطفا ادرس خود را وارد کنید​​​​​​​</h6>
          </div>
        </div>

        <div p="x5 y10 md:y0 md:b5">
          <form @submit.prevent="validation">
            <div flex justify-between>
              <div class="space-y-2.3">
                <div>
                  <input v-model="form.username" type="text" placeholder="نام *" class="r35kkr !wfull">
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
    </section>
  </main>
</template>

<style scoped>
.vjk9ut {
  background-image: url('../assets/bg_about.jpg');
  background-size: cover;
  background-position: center;
  margin-top: 3.25rem;
  margin-bottom: 3.25rem;
  padding: 1.5rem;
  padding-bottom: 3rem;
  --un-text-opacity: 1;
  color: #ffff;
}

.b73rff {
  background-image: url('../assets/bg_about_1.jpg');
  background-size: cover;
  background-position: center;
  margin-top: 1rem;
  padding: 1.7rem;
  color: #fff
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

..hjn312 {
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
</style>