<script setup>
const steps = reactive({
  first: true,
  sec: false,
  third: false,
  fourth: false
})
</script>

<template>
  <main mb5>
    <section class="p5 space-y-4 text-black/90">
      <div>
        <div class="flex items-center justify-between border-b border-black/50">
          <h2 class="text-sm py2">قدم اول: اطلاعات شما</h2>
          <button @click="steps.first = true, steps.sec = false, steps.third = false, steps.fourth = false"
            v-if="steps.sec || steps.third || steps.fourth" class="text-xs">ویرایش</button>
        </div>
        <div v-if="steps.first" class="my6">
          <h4 text-xs>مشتری جدید هستید؟</h4>
          <button @click="steps.first = false, steps.sec = true" class="bg-gray-600 text-white">ادامه</button>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between border-b border-black/50">
          <h2 class="text-sm py2">قدم دوم: آدرس شما</h2>
          <button @click="steps.sec = true, steps.first = false, steps.third = false, steps.fourth = false"
            v-if="steps.third || steps.fourth" class="text-xs">ویرایش</button>
        </div>
        <div v-if="steps.sec" class="my6">
          <input type="text" placeholder="نام" border>
          <button @click="steps.sec = false, steps.third = true" class="bg-gray-600 text-white">ادامه</button>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between border-b border-black/50">
          <h2 class="text-sm py2">قدم سوم: روش ارسال</h2>
          <button @click="steps.third = true, steps.sec = false, steps.first = false, steps.fourth = false"
            v-if="steps.fourth" class="text-xs">ویرایش</button>
        </div>
        <div v-if="steps.third" class="my6">
          <h4>با پست</h4>
          <button @click="steps.third = false, steps.fourth = true" class="bg-gray-600 text-white">ادامه</button>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between border-b border-black/50">
          <h2 class="text-sm py2">قدم چهارم: روش پرداخت</h2>
          <!-- <button @click="steps.fourth = true, steps.sec = false, steps.third = false, steps.first = false"
            v-if="steps.fourth" class="text-xs">ویرایش</button> -->
        </div>
        <div v-if="steps.fourth" class="my6">
          <h4>کارت به کارت</h4>
          <button class="bg-gray-600 text-white">ادامه</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
</style>