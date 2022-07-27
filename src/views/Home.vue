<script setup>
import { useMain } from '../stores/main';
import { useForm } from '../stores/form';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import team1 from '../assets/ppl1.jpg'
import team2 from '../assets/ppl2.jpg'
import team3 from '../assets/ppl3.jpg'
import team4 from '../assets/ppl4.jpg'
import team5 from '../assets/ppl5.jpg'
import blog1 from '../assets/blog_1.jpg'
import blog2 from '../assets/blog_2.jpg'
import blog3 from '../assets/blog_3.jpg'

const main = useMain()
const form = useForm()

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

const blogPosts = ref([
  {
    img: blog1,
    title: 'چرا برای آموزش مالی هزینه کنیم',
    date: '۱۰ دی ۹۸'
  },
  {
    img: blog2,
    title: 'طرح هایی برای رشد کسب و کار شما',
    date: '۱۰ دی ۹۸'
  },
  {
    img: blog3,
    title: 'یک مشاور خوب چه ویژگی هایی دارد ؟',
    date: '۱۲ آذر ۹۷'
  }
])
</script>

<template>
  <main>
    <section class="d12e0s">
      <div class="m09a1j">
        <div class="e3nwjj">
          <img src="../assets/service_man.png" alt="service man" class="b7flb2">
          <div class="ep8ome">
            <h6 class="mfavyi">ما مشاوران هستیم</h6>
            <h1 class="hp0jf0">مشاوره مالی برای کار شما</h1>
            <p class="p6dr7j">{{ main.description }}</p>
            <button class="mo75vt">دریافت نوبت</button>
          </div>
        </div>

        <div class="c22jz4">
          <div class="qvepdg">
            <div v-for="service in services.part1" :key="service" class="b5kzqy">
              <div :class="service.icon" class="tr0gf4" />
              <h6 class="e4pavm">{{ service.title }}</h6>
              <p class="r8h0aq">{{ main.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="n23zng">
      <div class="hgdohl">
        <img src="../assets/corporation.jpg" alt="corporation" class="t09agt">
        <div class="ykw0m7">
          <div class="uvai6g">
            <p text-xs>ما که هستیم</p>
            <h2 class="ukzif5"><strong class="mwsi2a">ماموریت ما،
                ارزشها و
                شعور</strong></h2>
            <p class="osubnz">{{ main.description }} {{ main.description }}</p>
            <div class="hernb3">
              <img src="../assets/sign.png" alt="sing" class="gh1tfk">
              <h6 class="o62h8i"><span class="i8ytmr">نام</span> <br>موسس
                و مدیرعامل</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="gsjd7h">
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
              <p class="x70p31">{{ main.description }}</p>

              <h6 class="l7f4sm">ادامه مطلب</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="t0x6on">
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
          <p class="pqkind">{{ main.description }}</p>
          <h6 class="s8gdus t9yvn3">دیدن جزئیات</h6>
        </div>
      </div>
    </section>

    <section class="n5vidf cwe4jh">
      <div class="dcnsog">
        <div class="h36qhs">
          <h1 class="s8b33g !tracking-2px">درخواست تماس</h1>
          <p text-xs>{{ main.description }}</p>
        </div>

        <form @submit.prevent="form.validation" class="unn7x1">
          <div flex>
            <div class="space-y-2.8">
              <div>
                <input v-model="form.form.username" type="text" placeholder="نام *" class="r35kkr">
                <XyzTransition xyz="fade right">
                  <p v-if="form.form.usernameErr" class="b1v8d3">{{ form.form.usernameErr }}</p>
                </XyzTransition>
              </div>
              <div>
                <input v-model="form.form.email" type="email" placeholder="پست الکترونیک *" class="r35kkr">
                <XyzTransition xyz="fade right">
                  <p v-if="form.form.emailErr" class="b1v8d3">{{ form.form.emailErr }}</p>
                </XyzTransition>
              </div>
              <div>
                <input v-model="form.form.message" type="text" placeholder="موضوع" class="r35kkr">
              </div>
            </div>
            <div mr3>
              <textarea v-model="form.form.content" cols="25" rows="6" placeholder="پیغام *" class="r35kkr"></textarea>
              <XyzTransition xyz="fade up">
                <p v-if="form.form.contentErr" class="b1v8d3">{{ form.form.contentErr }}</p>
              </XyzTransition>
            </div>
          </div>

          <button class="ev29ll">
            <span v-if="!form.loading" text-xs>ارسال</span>
            <div v-else i-carbon-circle-dash animate-spin class="hjn312" />
          </button>
        </form>
      </div>
    </section>

    <section class="h7c728">
      <div class="qr37t9">
        <div class="l4eydi">
          <div class="p94l8e">
            <h6 text-xs>وبلاگ ما</h6>
            <div class="gvcdfs">
              <h4 class="s8b33g !tracking-2px">آخرین خبر ما</h4>
              <h6 class="s8gdus">نمایش تمام پست‌ها</h6>
            </div>
          </div>
        </div>

        <div class="o16yyo">
          <div v-for="posts in blogPosts" :key="posts" class="p3xo7a">
            <img :src="posts.img" alt="blog image" class="wuvabq">
            <div>
              <h5 class="gglewz">{{ posts.title }}</h5>
              <h6 text="xs gray">{{ posts.date }}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="h7c728 bg-#e5eef6">
      <div class="qr37t9">
        <div class="l4eydi">
          <div class="p94l8e">
            <h6 text-xs>​گواهینامه و شریک</h6>
            <div class="gvcdfs">
              <h4 class="s8b33g !tracking-1px">مشتریان ما چه می گوید؟</h4>
            </div>
          </div>
        </div>

        <div class="xxnmvn">
          <div v-for="n in 3" :key="n" class="p3xo7a c0pm8y">
            <div bg-white p4>
              <div class="p7v3cs">
                <img src="../assets/james.svg" alt="user avatar" class="e9u6ee">
                <div text-right>
                  <h5 class="j7egoq">امید دلکش</h5>
                  <h6 text="xs gray">از تهران</h6>
                </div>
              </div>
              <div class="h4fold">
                <div i-carbon-quotes class="qyv099" />
              </div>
              <p class="uuuw82">{{ main.description }}{{ main.description }}
              </p>
            </div>
          </div>
        </div>
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

.cwe4jh {
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.dcnsog {
  max-width: 420px;
}

.h36qhs>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
}

.h36qhs {
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.unn7x1 {
  margin-top: 1.25rem;
}

.r35kkr {
  background-color: rgba(156, 163, 175, 0.8);
  padding: 0.375rem;
  font-size: 0.75rem;
  line-height: 1rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.r35kkr::placeholder {
  --un-placeholder-opacity: 1;
  color: rgba(255, 255, 255, var(--un-placeholder-opacity));
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

.h7c728 {
  display: flex;
  justify-content: center;
  padding-top: 0.75rem;
  padding-bottom: 1.25rem;
}

.qr37t9 {
  width: 420px;
}

.o16yyo>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--un-space-y-reverse));
}

.o16yyo {
  padding: 0.75rem;
}

.p3xo7a>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--un-space-y-reverse));
}

.p3xo7a {
  text-align: center;
}

.wuvabq {
  width: 100%;
  height: 15rem;
  object-fit: cover;
}

.gglewz {
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: -1px;
}

.xxnmvn {
  margin: 1.25rem;
}

.xxnmvn>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--un-space-y-reverse));
}

.p7v3cs {
  display: flex;
  align-items: center;
}

.e9u6ee {
  margin-left: 0.75rem;
  width: 3.75rem;
  border-radius: 9999px;
  background-color: rgba(156, 163, 175, 0.1);
}

.j7egoq {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  letter-spacing: -1px;
}

.h4fold {
  position: relative;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: flex-end;
  border-top-width: 1px;
  border-top-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(252, 224, 211, var(--un-border-opacity));
}

.qyv099 {
  position: absolute;
  top: -0.8rem;
  left: 1.25rem;
  width: 3.5rem;
  height: 3.5rem;
  --un-rotate-x: 0;
  --un-rotate-y: 0;
  --un-rotate-z: 0;
  --un-rotate: 180deg;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));
  --un-text-opacity: 1;
  color: rgba(252, 224, 211, var(--un-text-opacity));
}

.uuuw82 {
  margin-top: 2.75rem;
  text-align: right;
  font-size: 0.75rem;
  line-height: 1rem;
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

  .dcnsog {
    max-width: 100%;
    width: 900px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .h36qhs {
    order: 1;
    margin-top: 1rem;
    margin-right: 1rem;
  }

  .h36qhs>:not([hidden])~:not([hidden]) {
    --un-space-y-reverse: 0;
    margin-top: calc(1.25rem * calc(1 - var(--un-space-y-reverse)));
    margin-bottom: calc(1.25rem * var(--un-space-y-reverse));
  }

  .qr37t9 {
    width: 768px;
  }

  .xxnmvn {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 1.25rem;
    gap: 1.25rem;
  }

  .xxnmvn>:not([hidden])~:not([hidden]) {
    --un-space-y-reverse: 0;
    margin-top: calc(0rem * calc(1 - var(--un-space-y-reverse)));
    margin-bottom: calc(0rem * var(--un-space-y-reverse));
  }

  .c0pm8y:last-child {
    grid-column: span 2/span 2;
    margin-right: 25%;
    width: 50%;
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

  .dcnsog {
    width: 1100px;
  }

  .unn7x1 {
    margin-left: 2.5rem;
  }

  .qr37t9 {
    width: 91.4%;
  }

  .o16yyo {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 0.75rem;
    gap: 0.75rem;
  }

  .o16yyo>:not([hidden])~:not([hidden]) {
    --un-space-y-reverse: 0;
    margin-top: calc(0rem * calc(1 - var(--un-space-y-reverse)));
    margin-bottom: calc(0rem * var(--un-space-y-reverse));
  }

  .xxnmvn {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .c0pm8y:last-child {
    grid-column: span 1/span 1;
    margin-right: 0rem;
    width: 100%;
  }

  .uuuw82 {
    line-height: 1rem;
    letter-spacing: -1px;
  }
}
</style>