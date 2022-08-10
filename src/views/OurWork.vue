<script setup>
import { useMain } from '../stores/main';

const main = useMain()

const steps = ref([
  {
    img: main.steps.step1,
    step: 'مرحله ۱',
    title: 'دریافت و ارزیابی',
    color: 'text-#00a651',
  },
  {
    img: main.steps.step2,
    step: 'مرحله ۲',
    title: 'آنالیز و برنامه‌ریزی',
    color: 'text-#f26522',
  },
  {
    img: main.steps.step3,
    step: 'مرحله ۳',
    title: 'پیاده‌سازی',
    color: 'text-#00387a',
  },
])
</script>

<template>
  <main class="koluq6">
    <section class="qvlvpg">
      <div class="hn6l1v">
        <p class="fj34zf">
          “هدف به عنوان یک شرکت این است که خدمات به مشتریان را ارائه دهد نه فقط در باره,
          <br>
          اما افسانه ای.” <span text="#f26522 sm">امید دلکش</span>
        </p>
      </div>

      <div class="bvo7hf">
        <h6 text-xs>​چطور کار میکند</h6>
        <h3><strong text="xl black">چگونه با مشتریان کار می کنیم​​​​​​​</strong></h3>
        <p text-xs>{{ main.description }}{{ main.description }}</p>
      </div>

      <div xl="fjsxo0">
        <div class="s7hvvi">
          <div v-for="step in steps" :key="step" class="b9m3a9">
            <img :src="step.img" alt="steps" class="n7tmlb">
            <div class="vcn5g3">
              <h5 :class="step.color"><strong tracking-1px>{{ step.step }}</strong></h5>
              <h5 :class="step.color"><strong tracking-1px>{{ step.title }}</strong></h5>
              <p text="xs gray-600">{{ main.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cvdjrm">
        <h6 text="gray-500 xs">​ویژگی‌ها</h6>
        <h3><strong text="xl black">چرا باید ما را انتخاب کنید؟​​​​​​​</strong></h3>

        <div class="b599om">
          <div v-for="n in 3" :key="n" class="ydp8rq">
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
.koluq6 {
  display: flex;
  justify-content: center;
  --un-bg-opacity: 1;
  background-color: rgba(229, 238, 246, var(--un-bg-opacity));
  padding: 1.25rem;
}

.qvlvpg {
  max-width: 420px;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
}

.o4aq3e {}

.s7hvvi>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(2.5rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(2.5rem * var(--un-space-y-reverse));
}

.s7hvvi {
  --un-bg-opacity: 1;
  background-color: rgba(249, 245, 240, var(--un-bg-opacity));
  padding: 0.75rem;
  padding-bottom: 2rem;
}

.b9m3a9 {
  display: flex;
  flex-direction: column;
}

.b9m3a9>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(1.75rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(1.75rem * var(--un-space-y-reverse));
}

.n7tmlb {
  width: 100%;
  height: 100%;
}

.vcn5g3>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
}

.cvdjrm>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(1rem * var(--un-space-y-reverse));
}

.cvdjrm {
  padding: 1.75rem;
  padding-bottom: 2.5rem;
}

.b599om {
  padding-top: 0.5rem;
}

.ydp8rq {
  margin: 0.75rem;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(156, 163, 175, 0.3);
  padding: 1.25rem;
  text-align: center;
  line-height: 2.5rem;
}

.hn6l1v {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 2rem;
  padding-bottom: 1.75rem;
  background-image: url('../assets/our_work.jpg');
  background-size: cover;
  background-position: center;
}

.fj34zf {
  font-size: 0.75rem;
  line-height: 1rem;
  line-height: 1.25rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.bvo7hf>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(1rem * var(--un-space-y-reverse));
}

.bvo7hf {
  padding: 1.75rem;
  padding-bottom: 2.5rem;
  --un-text-opacity: 1;
  color: rgba(107, 114, 128, var(--un-text-opacity));
}

@media (min-width: 768px) {
  .s7hvvi {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0rem;
  }

  .b9m3a9 {
    width: 75%;
  }

  .qvlvpg {
    max-width: 820px;
  }

  .hn6l1v {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }

  .fj34zf {
    font-size: 0.875rem;
    line-height: 1.25rem;
    line-height: 1.75rem;
  }

  .bvo7hf {
    padding: 2.5rem;
  }

  .cvdjrm {
    padding: 1.25rem;
  }

  .b599om {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ydp8rq:last-child {
    grid-column: span 2/span 2;
    margin-left: 10rem;
    margin-right: 10rem;
  }

  .ydp8rq {
    margin: 0.5rem;
  }

}

@media (min-width: 1280px) {
  .koluq6 {
    padding: 3.75rem;
  }

  .s7hvvi {
    width: 86%;
    padding: 0rem;
  }

  .s7hvvi>:not([hidden])~:not([hidden]) {
    --un-space-y-reverse: 0;
    margin-top: calc(0rem * calc(1 - var(--un-space-y-reverse)));
    margin-bottom: calc(0rem * var(--un-space-y-reverse));
  }

  .b9m3a9 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
  }

  .s7hvvi .b9m3a9:nth-child(2) img {
    order: -1;
  }

  .qvlvpg {
    max-width: 100%;
  }

  .hn6l1v {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .bvo7hf {
    padding-left: 4.25rem;
    padding-right: 4.25rem;
  }

  [xl~="fjsxo0"] {
    display: flex;
    justify-content: center;
  }

  .n7tmlb {
    order: 9999;
  }

  .vcn5g3 {
    padding: 1.75rem;
  }

  .cvdjrm {
    padding: 4.25rem;
  }

  .b599om {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .ydp8rq:last-child {
    grid-column: span 1/span 1;
    margin-left: 0rem;
    margin-right: 0rem;
  }

}
</style>