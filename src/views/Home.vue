<script setup>
const description = ref('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.')

const services = ref([
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
            <p class="p6dr7j">{{ description }}</p>
            <button class="mo75vt">دریافت نوبت</button>
          </div>
        </div>

        <div class="c22jz4">
          <div class="qvepdg">
            <div v-for="service in services" :key="service" class="b5kzqy">
              <div :class="service.icon" class="tr0gf4" />
              <h6 class="e4pavm">{{ service.title }}</h6>
              <p class="r8h0aq">{{ description }}</p>
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
            <h2 class="ukzif5"><strong class=":uno: text-2xl tracking-wider xl:tracking-tight">ماموریت ما،
                ارزشها و
                شعور</strong></h2>
            <p class=":uno: text-xs md:leading-5">{{ description }} {{ description }}</p>
            <div class=":uno: flex items-start justify-center mt3 xl:items-end xl:flex-col xl:mt10 xl:relative">
              <img src="../assets/sign.png" alt="sing" class=":uno: w-15 xl:absolute xl:-top-3">
              <h6 class=":uno: text-xs tracking-tighter mr2 leading-1 xl:ml10"><span
                  class=":uno: hidden xl:block text-xs">نام</span> <br>موسس
                و مدیرعامل</h6>
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

.uno-62oh8i {
  margin-right: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  line-height: 0.25rem;
  letter-spacing: -0.05em;
}

.uno-hernb3 {
  margin-top: 0.75rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.uno-8iytmr {
  display: none;
  font-size: 0.75rem;
  line-height: 1rem;
}

.t09agt {
  width: 100%;
  padding: 0.75rem;
}

.uno-gh1tfk {
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

.uno-mwsi2a {
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0.05em;
}

.uno-osubnz {
  font-size: 0.75rem;
  line-height: 1rem;
}

.ukzif5 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
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

  .uno-osubnz {
    line-height: 1.25rem;
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

  .uno-gh1tfk {
    position: absolute;
    top: -0.75rem;
  }

  .uno-hernb3 {
    position: relative;
    margin-top: 2.5rem;
    flex-direction: column;
    align-items: flex-end;
  }

  .n23zng {
    margin-top: 11.25rem;
  }

  .uno-62oh8i {
    margin-left: 2.5rem;
  }

  .uno-8iytmr {
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

  .uno-mwsi2a {
    letter-spacing: -0.025em;
  }
}
</style>