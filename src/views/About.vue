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

</script>

<template>
  <main class="c52q3a">
    <section class="eg7bb4">
      <div class="z36mx6">
        <h6 text-xs>درباره ما</h6>
        <h3 class="p60sat">ما مشاوره هستیم​​​​​​​</h3>
        <p text-xs>{{ description }}</p>
      </div>

      <div class="p4bwcv">
        <div v-for="social in socials" :key="social" class="va821j">
          <div :class="social" text-2xl />
        </div>
        <p class="lxjqav">ما را دنبال کنید.</p>
      </div>

      <div p="3 xl:0">
        <Carousel :autoplay="2000" :wrap-around="true">
          <Slide v-for="team in teams" :key="team">
            <img :src="team" alt="team members" class="d2ez9h">
          </Slide>
        </Carousel>
      </div>

      <div class="z36mx6">
        <h6 text-xs>ما چه کاری انجام می دهیم ؟​​​​​​​</h6>
        <h3 class="p60sat">ماموریت ما و هدف ما​​​​​​​</h3>
        <p text-xs>{{ description }}</p>
      </div>

      <div class="u09r8k">
        <img src="../assets/member_1.jpg" alt="team member" class="jn7zwa">
        <div class="uctxor">
          <p class="osubnz">{{ description }}</p>

          <div class="n4i9an">
            <h6 text-xs>نام <br> موسس ومدیرعامل</h6>
            <img src="../assets/sign.png" alt="sign" w17>
          </div>
        </div>
      </div>

      <div class="xn8b6b">
        <h6 text-xs>دستاوردها و آمار​​​​​​​</h6>
        <h3 class="n2xa7s">۲۵ سال عمر ما​​​​​​​​​​​​​</h3>

        <div class="t9h60h">
          <div v-for="n in 3" :key="n" class="ltspg7">
            <div class="zf7hs8">
              <div i-carbon-user class="vwwzw2" />
            </div>

            <span text="#f26522 sm">۵۲ کارشناسان <span text="!black sm">شکل کار ما</span></span>
          </div>
        </div>
      </div>

      <Support />
    </section>
  </main>
</template>

<style>
.c52q3a {
  display: flex;
  justify-content: center;
  --un-bg-opacity: 1;
  background-color: rgba(229, 238, 246, var(--un-bg-opacity));
  padding: 1.25rem;
}

.eg7bb4 {
  max-width: 420px;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
}

.z36mx6>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(1rem * var(--un-space-y-reverse));
}

.z36mx6 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 2rem;
  --un-text-opacity: 1;
  color: rgba(75, 85, 99, var(--un-text-opacity));
}

.p60sat {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  --un-text-opacity: 1;
  color: rgba(0, 0, 0, var(--un-text-opacity));
}

.p4bwcv {
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1.75rem;
}

.va821j {
  margin: 0.25rem;
  border-radius: 9999px;
  --un-bg-opacity: 1;
  background-color: rgba(242, 101, 34, var(--un-bg-opacity));
  padding: 0.375rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.lxjqav {
  margin-right: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

.d2ez9h {
  width: 100%;
  height: 20rem;
  object-fit: cover;
}

.jn7zwa {
  width: 100%;
  height: 17rem;
  object-fit: cover;
  padding: 1.25rem;
  padding-bottom: 0rem;
}

.uctxor {
  --un-bg-opacity: 1;
  background-color: rgba(0, 56, 122, var(--un-bg-opacity));
  padding: 1.25rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.osubnz {
  font-size: 0.75rem;
  line-height: 1rem;
}

.n4i9an {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0.75rem;
}

.xn8b6b {
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

.n2xa7s {
  padding-top: 0.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.t9h60h {
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ltspg7 {
  margin: 0.5rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding: 1.25rem;
}

.zf7hs8 {
  margin-bottom: 1.25rem;
  display: inline-block;
  --un-bg-opacity: 1;
  background-color: rgba(254, 239, 232, var(--un-bg-opacity));
  padding: 0.5rem;
}

.vwwzw2 {
  --un-bg-opacity: 1;
  background-color: rgba(242, 101, 34, var(--un-bg-opacity));
  font-size: 1.875rem;
  line-height: 2.25rem;
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

@media (min-width: 640px) {
  .p4bwcv {
    padding-bottom: 1.25rem;
  }
}

@media (min-width: 768px) {
  .c52q3a {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .eg7bb4 {
    max-width: 768px;
  }

  .u09r8k {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .jn7zwa {
    height: 18rem;
    padding: 0rem;
  }

  .uctxor {
    padding: 2.5rem;
  }

  .osubnz {
    line-height: 1.25rem;
  }

  .n4i9an {
    margin-top: 2.5rem;
    padding: 0rem;
  }

  .xn8b6b>:not([hidden])~:not([hidden]) {
    --un-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--un-space-y-reverse)));
    margin-bottom: calc(1rem * var(--un-space-y-reverse));
  }

  .xn8b6b {
    text-align: center;
  }

  .t9h60h {
    flex-direction: row;
  }

}

@media (min-width: 1280px) {
  .c52q3a {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .eg7bb4 {
    max-width: 100%;
  }

  .z36mx6 {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .p4bwcv {
    padding-left: 5rem;
    padding-right: 5rem;
    padding-bottom: 3.75rem;
  }

  .u09r8k {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .xn8b6b {
    padding-left: 5rem !important;
    padding-right: 5rem !important;
    text-align: right;
  }

  .ltspg7 {
    align-items: flex-start;
  }
}
</style>