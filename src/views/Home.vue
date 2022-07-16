<script setup>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import team1 from '../assets/ppl1.jpg'
import team2 from '../assets/ppl2.jpg'
import team3 from '../assets/ppl3.jpg'
import team4 from '../assets/ppl4.jpg'
import team5 from '../assets/ppl5.jpg'

const description = ref('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.')
const services = ref({
  part1: [
    {
      icon: 'i-carbon-money',
      title: 'بودجه دوستانه'
    },
    {
      icon: 'i-carbon-model-alt',
      title: 'ایده های ارزشمند'
    },
    {
      icon: 'i-carbon-user-service-desk',
      title: 'خدمات باکیفیت'
    },
    {
      icon: 'i-carbon-headset',
      title: 'پشتیبانی ۲۴/۷'
    }
  ],
  part2: ['ممیزی و تضمین', 'معاملات و سهام', 'مشاوره مالی', 'برنامه ریزی استراتژیک', 'اوراق قرضه و کالاها', 'پیش بینی های مالی']
})
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
    form.emailErr = 'پست الکترونیک خود را وارد کنید!'
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
  <main>
    <!-- <section class="d12e0s">
      <div class="m09a1j">
        <div class="e3nwjj">
          <img src="../assets/service_man.png" alt="service man" class="b7flb2">
          <div class="ep8ome">
            <h6 class="mfavyi">ما مشاوران هستیم</h6>
            <h1 class="hp0jf0">مشاوره مالی برای کار شما</h1>
            <p class="p6dr7j">{{ description }}</p>
            <button class="mo75vt">دریافت نوبت</button>
          </div>
        </div>

        <div class="c22jz4">
          <div class="qvepdg">
            <div v-for="service in services.part1" :key="service" class="b5kzqy">
              <div :class="service.icon" class="tr0gf4" />
              <h6 class="e4pavm">{{ service.title }}</h6>
              <p class="r8h0aq">{{ description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="n23zng">
      <div class="hgdohl">
        <img src="../assets/corporation.jpg" alt="corporation" class="t09agt">
        <div class="ykw0m7">
          <div class="uvai6g">
            <p text-xs>ما که هستیم</p>
            <h2 class="ukzif5"><strong class="mwsi2a">ماموریت ما،
                ارزشها و
                شعور</strong></h2>
            <p class="osubnz">{{ description }} {{ description }}</p>
            <div class="hernb3">
              <img src="../assets/sign.png" alt="sing" class="gh1tfk">
              <h6 class="o62h8i"><span class="i8ytmr">نام</span> <br>موسس
                و مدیرعامل</h6>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="gsjd7h">
      <div class="fsswvy">
        <div class="bwup6o">
          <div class="l4eydi">
            <div class="p94l8e">
              <h6 text-xs>خدمات ما</h6>
              <div class="gvcdfs">
                <h4 class="s8b33g">آنچه را برای شما به ارمغان می آوریم
                </h4>
                <h6 class="s8gdus">
                  همه ی
                  خدمات</h6>
              </div>
            </div>
          </div>

          <div class="mp82t3">
            <div v-for="service in services.part2" :key="service" class="mflud3">
              <h3><strong text-sm>{{ service }}</strong></h3>
              <p class="x70p31">{{ description }}</p>

              <h6 class="l7f4sm">ادامه مطلب</h6>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="t0x6on">
      <div class="l4eydi">
        <div class="p94l8e">
          <h6 text-xs>پروژه‌های ما</h6>
          <div class="gvcdfs">
            <h4 class="s8b33g !tracking-2px">ما رهبران هستیم</h4>
            <h6 class="s8gdus">همه ی خدمات</h6>
          </div>
        </div>
      </div>

      <Carousel :autoplay="2000" :wrap-around="true" :items-to-show="2.5" class="b3wgh3">
        <Slide v-for="team in teams" :key="team">
          <img :src="team" alt="team members" class="idkkjn">
        </Slide>
      </Carousel>

      <div class="o4o4ot">
        <div class="f6t99k">
          <p class="pqkind">{{ description }}</p>
          <h6 class="s8gdus t9yvn3">دیدن جزئیات</h6>
        </div>
      </div>
    </section> -->

    <section class="n5vidf p3 py10 flex justify-center">
      <div class="max-w-420px">
        <div text-white space-y3>
          <h1 class="s8b33g !tracking-2px ">درخواست تماس</h1>
          <p text-xs>{{ description }}</p>
        </div>

        <form @submit.prevent="validation" class="mt5">
          <div class="flex">
            <div class="space-y-2.8">
              <div>
                <input v-model="form.username" type="text" placeholder="نام *"
                  class="bg-gray/80 text-xs text-white p1.5 outline-none placeholder-white">
                <XyzTransition mode="out-in" xyz="fade right">
                  <p v-if="form.usernameErr" class="text-xs text-red mt1 -tracking-0.5px">{{ form.usernameErr }}</p>
                </XyzTransition>
              </div>
              <div>
                <input v-model="form.email" type="email" placeholder="پست الکترونیک *"
                  class="bg-gray/80 text-xs text-white p1.5 outline-none placeholder-white">
                <XyzTransition mode="out-in" xyz="fade right">
                  <p v-if="form.emailErr" class="text-xs text-red mt1 -tracking-0.5px">{{ form.emailErr }}</p>
                </XyzTransition>
              </div>
              <div>
                <input v-model="form.message" type="text" placeholder="موضوع"
                  class="bg-gray/80 text-xs text-white p1.5 outline-none placeholder-white">
              </div>
            </div>
            <div mr3>
              <textarea v-model="form.content" cols="25" rows="6" placeholder="پیغام *"
                class="bg-gray/80 text-xs text-white p1.5 outline-none placeholder-white"></textarea>
              <XyzTransition xyz="fade up">
                <p v-if="form.contentErr" class="text-xs text-red mt1 -tracking-0.5px">{{ form.contentErr }}</p>
              </XyzTransition>
            </div>
          </div>

          <button class=" text-white mt2 px8 opacity-90 py2 bg-#f26522 duration-250 outline-none hover:bg-#002c60">
            <span v-if="!loading" text-xs>ارسال</span>
            <div v-else class="i-carbon-circle-dash animate-spin text-xl text-center" />
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
.d12e0s {
  background-image: url('../assets/home.jpg');
  background-size: cover;
  background-position: center;
}

.m09a1j {
  padding-top: 1.75rem;
  padding-bottom: 2.5rem;
}

.e3nwjj {
  text-align: center;
}

.b7flb2 {
  position: absolute;
  right: 0rem;
  top: -1.75rem;
  margin-right: 0.75rem;
  display: none;
  width: 320px;
}

.mfavyi {
  font-size: 0.75rem;
  line-height: 1rem;
  --un-text-opacity: 1;
  color: rgba(0, 56, 122, var(--un-text-opacity));
}

.hp0jf0 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  --un-text-opacity: 1;
  color: rgba(0, 56, 122, var(--un-text-opacity));
}

.p6dr7j {
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  font-size: 0.75rem;
  line-height: 1rem;
  line-height: 1.25rem;
}

.mo75vt {
  margin-top: 0.75rem;
  --un-bg-opacity: 1;
  background-color: rgba(242, 101, 34, var(--un-bg-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 10px;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  transition-duration: 250ms;
}

.mo75vt:hover {
  --un-bg-opacity: 1;
  background-color: rgba(0, 72, 122, var(--un-bg-opacity));
}

.qvepdg {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qvepdg>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(1rem * var(--un-space-y-reverse));
}

.b5kzqy {
  width: 80%;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  --un-shadow: var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
}

.tr0gf4 {
  margin-bottom: 0.5rem;
  --un-bg-opacity: 1;
  background-color: rgba(242, 101, 34, var(--un-bg-opacity));
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.e4pavm {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
}

.r8h0aq {
  font-size: 10px;
}

.o62h8i {
  margin-right: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  line-height: 0.25rem;
  letter-spacing: -0.05em;
}

.hernb3 {
  margin-top: 0.75rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.i8ytmr {
  display: none;
  font-size: 0.75rem;
  line-height: 1rem;
}

.t09agt {
  width: 100%;
  padding: 0.75rem;
}

.gh1tfk {
  width: 3.75rem;
}

.hgdohl {
  max-width: 430px;
  --un-bg-opacity: 1;
  background-color: rgba(0, 57, 122, var(--un-bg-opacity));
}

.n23zng {
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.uvai6g {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.mwsi2a {
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0.05em;
}

.osubnz {
  font-size: 0.75rem;
  line-height: 1rem;
}

.ukzif5 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.gsjd7h {
  --un-bg-opacity: 1;
  background-color: rgba(229, 238, 246, var(--un-bg-opacity));
  padding-bottom: 2.5rem;
}

.p94l8e {
  padding: 0.75rem;
}

.gvcdfs {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.s8b33g {
  font-weight: 700;
  letter-spacing: -0.05em;
}

.s8gdus {
  cursor: pointer;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: -0.05em;
  --un-text-opacity: 1;
  color: rgba(231, 76, 60, var(--un-text-opacity));
  transition-duration: 250ms;
}

.s8gdus:hover {
  --un-text-opacity: 1;
  color: rgba(0, 57, 122, var(--un-text-opacity));
}

.mp82t3 {
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}

.mflud3 {
  margin-top: 0.5rem;
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--un-border-opacity));
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.x70p31 {
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

.l7f4sm {
  font-size: 0.75rem;
  line-height: 1rem;
  --un-text-opacity: 1;
  color: rgba(231, 76, 60, var(--un-text-opacity));
  cursor: pointer;
}

.t0x6on {
  width: 100%;
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
}

.b3wgh3 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

.idkkjn {
  width: 100%;
  height: 15rem;
  object-fit: cover;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.o4o4ot {
  padding: 0.75rem;
}

.pqkind {
  font-size: 0.75rem;
  line-height: 1rem;
  line-height: 1.5rem;
}

.t9yvn3 {
  margin-top: 1rem;
  text-align: center;
}

.n5vidf {
  background-image: url('../assets/shape.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 640px) {
  .b5kzqy {
    width: 430px;
  }

  .n23zng {
    display: flex;
    justify-content: center;
  }

  .uvai6g {
    padding-top: 2rem;
  }

  .l4eydi {
    display: flex;
    justify-content: center;
  }

  .p94l8e {
    width: 500px;
  }

  .gvcdfs {
    align-items: flex-start;
  }

  .s8b33g {
    width: 70%;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .mflud3 {
    width: 420px;
  }

  .o4o4ot {
    display: flex;
    justify-content: center;
  }

  .f6t99k {
    width: 500px;
  }
}

@media (min-width: 768px) {
  .d12e0s {
    display: flex;
    justify-content: center;
  }

  .m09a1j {
    width: 768px;
  }

  .e3nwjj {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .b7flb2 {
    display: block;
  }

  .b5kzqy {
    width: 100%;
  }

  .ep8ome {
    width: 60%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2.5rem;
    padding-right: 1.25rem;
  }

  .hp0jf0 {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-size: 1.6rem;
  }

  .p6dr7j {
    padding-right: 0rem;
    text-align: right;
  }

  .mo75vt {
    margin-top: 2.25rem;
    margin-left: 2.5rem;
    align-self: center;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    font-size: 14px;
  }

  .c22jz4 {
    display: flex;
    justify-content: center;
  }

  .qvepdg {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 75%;
    grid-gap: 1rem;
    gap: 1rem;
  }

  .qvepdg>:not([hidden])~:not([hidden]) {
    --un-space-y-reverse: 0;
    margin-top: calc(0rem * calc(1 - var(--un-space-y-reverse)));
    margin-bottom: calc(0rem * var(--un-space-y-reverse));
  }

  .hgdohl {
    min-width: 738px;
  }

  .uvai6g {
    width: 520px;
    padding-bottom: 2.5rem;
  }

  .ykw0m7 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .t09agt {
    padding: 0rem;
  }

  .n23zng {
    padding-top: 0.75rem;
  }

  .osubnz {
    line-height: 1.25rem;
  }

  .fsswvy {
    display: flex;
    justify-content: center;
  }

  .bwup6o {
    width: 768px;
  }

  .p94l8e {
    width: 100%;
    padding: 1.75rem;
  }

  .gvcdfs {
    align-items: center;
  }

  .mp82t3 {
    flex-direction: row;
  }

  .mflud3 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    width: 48%;
  }

  .f6t99k {
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .p6dr7j {
    padding-left: 0rem;
  }

  .b5kzqy {
    width: 100%;
  }

  .r8h0aq {
    font-size: 12px;
  }

  .mp82t3 {
    padding-left: 0rem;
    padding-right: 0rem;
  }
}

@media (min-width: 1280px) {
  .d12e0s {
    position: relative;
  }

  .m09a1j {
    width: 100%;
    height: 670px;
    padding-bottom: 0rem;
  }

  .e3nwjj {
    padding-top: 1.75rem;
  }

  .b7flb2 {
    position: relative;
    margin-right: 3rem;
    width: 482px;
  }

  .p6dr7j {
    margin-left: 5rem;
  }

  .mo75vt {
    margin-top: 1.75rem;
    align-self: flex-start;
  }

  .c22jz4 {
    position: absolute;
    bottom: -6.5rem;
  }

  .qvepdg {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    width: 89%;
  }

  .b5kzqy {
    padding-left: 0rem;
  }

  .ukzif5 {
    margin-bottom: 1.25rem;
  }

  .gh1tfk {
    position: absolute;
    top: -0.75rem;
  }

  .hernb3 {
    position: relative;
    margin-top: 2.5rem;
    flex-direction: column;
    align-items: flex-end;
  }

  .n23zng {
    margin-top: 11.25rem;
  }

  .o62h8i {
    margin-left: 2.5rem;
  }

  .i8ytmr {
    display: block;
  }

  .hgdohl {
    min-width: 91.4%;
    display: flex;
  }

  .uvai6g {
    width: 100%;
    padding-top: 4rem;
    padding-right: 2rem;
    padding-left: 2.5rem;
    padding-bottom: 0rem;
  }

  .mwsi2a {
    letter-spacing: -0.025em;
  }

  .bwup6o {
    width: 100%;
  }

  .p94l8e {
    width: 100%;
    padding-bottom: 0.5rem;
  }

  .mp82t3 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-top: 0;
  }

  .mflud3 {
    width: 32%;
  }

  .mflud3:nth-child(2) {
    margin-top: 5rem;
  }

  .mflud3:nth-child(4) {
    margin-top: -4rem;
  }

  .mflud3:nth-child(6) {
    margin-top: -4rem;
  }

  .f6t99k {
    width: 700px;
    text-align: right;
  }
}
</style>