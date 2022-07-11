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
    <section p="t7 b10">
      <div class="text-center">
        <h6 class="text-#00387a text-xs">ما مشاوران هستیم</h6>
        <h1 class="text-#00387a text-2xl font-bold my4">مشاوره مالی برای کار شما</h1>
        <p class="text-xs px7 leading-5">{{ description }}</p>
        <button class="text-white text-10px px4 py3 bg-#f26522 mt3 duration-250 hover:bg-#00487a">دریافت نوبت</button>
      </div>

      <div class="flex flex-col items-center mt10 space-y-4">
        <div v-for="service in services" :key="service" class="bg-white py5 px4 shadow w80%">
          <div :class="service.icon" class="bg-#f26522 text-4xl mb2" />
          <h6 class="font-bold text-sm py3">{{ service.title }}</h6>
          <p class="text-10px">{{ description }}</p>
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