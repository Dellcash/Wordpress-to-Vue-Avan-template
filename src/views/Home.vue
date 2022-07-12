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
    <section md="flex justify-center">
      <div p="t7 b10" md="w-768px">
        <div class="text-center md:flex md:justify-end md:items-start md:relative">
          <img src="../assets/service_man.png" alt="service man"
            class="hidden md:block w-320px absolute right-0 -top-7 mr3">
          <div md="w-60% flex flex-col items-start pt10 pr5 h-300px">
            <h6 class="text-#00387a text-xs">ما مشاوران هستیم</h6>
            <h1 class="text-#00387a text-2xl font-bold my4 md:text-1.6rem md:my5">مشاوره مالی برای کار شما</h1>
            <p class="text-xs px7 leading-5 md:pr0 md:text-right lg:pl0">{{ description }}</p>
            <button
              class="text-white text-10px px4 py3 bg-#f26522 mt3 duration-250 hover:bg-#00487a md:self-center md:mt-9 md:text-14px md:px5 md:ml10">دریافت
              نوبت</button>
          </div>
        </div>

        <div md="flex justify-center">
          <div
            class="flex flex-col items-center mt10 space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:gap4 md:z-10 md:relative md:w-75%">
            <div v-for="service in services" :key="service" class="bg-white py5 px4 shadow w80% md:w-full">
              <div :class="service.icon" class="bg-#f26522 text-4xl mb2" />
              <h6 class="font-bold text-sm py3">{{ service.title }}</h6>
              <p class="text-10px">{{ description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
section {
  background-image: url('../assets/home.jpg');
  background-size: cover;
  background-position: center;
}
</style>