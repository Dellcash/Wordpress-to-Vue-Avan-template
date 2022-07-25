<script setup>
import { useMain } from '../stores/main';
import step1 from '../assets/step_1.jpg'
import step2 from '../assets/step_2.jpg'
import step3 from '../assets/step_3.jpg'

const main = useMain()

const steps = ref([
  {
    img: step1,
    step: 'مرحله ۱',
    title: 'دریافت و ارزیابی',
    color: 'text-#00a651',
  },
  {
    img: step2,
    step: 'مرحله ۲',
    title: 'آنالیز و برنامه‌ریزی',
    color: 'text-#f26522',
  },
  {
    img: step3,
    step: 'مرحله ۳',
    title: 'پیاده‌سازی',
    color: 'text-#00387a',
  },
])
</script>

<template>
  <main p5 class="bg-#e5eef6">
    <section bg-white>
      <div class="o4aq3e pt8 pb7 px5">
        <p class="text-white text-xs leading-5">
          “هدف به عنوان یک شرکت این است که خدمات به مشتریان را ارائه دهد نه فقط در باره,
          <br>
          اما افسانه ای.” <span text="#f26522 sm">امید دلکش</span>
        </p>
      </div>

      <div class="text-gray-500 space-y-4 p7 pb10">
        <h6 text-xs>​چطور کار میکند</h6>
        <h3><strong text="xl black">چگونه با مشتریان کار می کنیم​​​​​​​</strong></h3>
        <p text-xs>{{ main.description }}{{ main.description }}</p>
      </div>

      <div class="bg-#f9f5f0 p3 space-y-10 pb8">
        <div v-for="step in steps" :key="step" class="flex flex-col space-y7">
          <img :src="step.img" alt="steps" wfull>
          <div space-y3>
            <h5 :class="step.color"><strong tracking-1px>{{ step.step }}</strong></h5>
            <h5 :class="step.color"><strong tracking-1px>{{ step.title }}</strong></h5>
            <p text="xs gray-600">{{ main.description }}</p>
          </div>
        </div>
      </div>

      <div class="space-y-4 p7 pb10">
        <h6 text="gray-500 xs">​ویژگی‌ها</h6>
        <h3><strong text="xl black">چرا باید ما را انتخاب کنید؟​​​​​​​</strong></h3>

        <div pt2>
          <div v-for="n in 3" :key="n" class="border border-gray/30 p5 text-center m3 leading-10">
            <h3><strong text="SM black">کیفیت خدمات</strong></h3>
            <p text="xs gray-600">{{ main.description }}</p>
          </div>
        </div>
      </div>

      <Support />
    </section>
  </main>
</template>

<style scoped>
.o4aq3e {
  background-image: url('../assets/our_work.jpg');
  background-size: cover;
  background-position: center;
}
</style>