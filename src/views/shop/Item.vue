<script setup>
import { useShop } from '@/stores/shop';
import { useTitle } from '@vueuse/core';
import { useMain } from '@/stores/main';

const route = useRoute()
const shop = useShop()
const title = useTitle()
const main = useMain()

const item = shop.getItem(route.params.id)
title.value = `${item.title} | فروشگاه آوان`;

const price = computed(() => {
  return main.toFarsiNumber(main.numberWithCommas(item.price))
})

const description = ref(true);
const comment = ref(false);
const descBtn = () => {
  description.value = true;
  comment.value = false;
};
const commentBtn = () => {
  comment.value = true;
  description.value = false;
};

const details = ref([
  {
    title: 'صفحات',
    sub: '۱۵۰'
  },
  {
    title: 'طراح جلد',
    sub: 'طراح'
  },
  {
    title: 'منتشر کننده',
    sub: 'شرکت تست'
  },
  {
    title: 'زبان',
    sub: item.lang
  },
  {
    title: 'کد',
    sub: '۷۷۵۹'
  },
])
</script>

<template>
  <main>
    <section p5>
      <img :src="item.img" :alt="item.title" wfull>

      <div pt5>
        <div class="space-y-1 tracking-1px">
          <h1 text-2xl>{{ item.title }}</h1>
          <h6 text="xl #f26522">{{ price }} تومان</h6>
          <p class="text-xs !tracking-0px !mt2">{{ main.description }}</p>
        </div>

        <button class="text-white bg-#f26522 px10 py3 text-xs mt10 duration-250 hover:bg-#00387a">افزودن به سبد
          خرید</button>
      </div>
    </section>
    <section p="5 t0">
      <div>
        <button @click="descBtn" :class="{ 'border-t border-r border-l outline-none border-gray-2': description }" p3>
          مشخصات محصول
        </button>
        <button @click="commentBtn" :class="{ 'border-t border-r border-l outline-none border-gray-2': comment }" p3>
          نظرات
        </button>

        <!-- CONDITIONS -->
        <div v-if="description" class="border border-gray-2 p5">
          <div class="border-2 border-gray-2 divide-y-2 divide-gray-2">
            <div v-for="detail in details" :key="detail" class="grid grid-cols-4 items-center">
              <h6 class="col-span-1 py2 px4 border-l-2 border-gray-2">{{ detail.title }}</h6>
              <h6 class="col-span-3 py2 px4">{{ detail.sub }}</h6>
            </div>
          </div>
        </div>

        <!-- COMMENT -->
        <div v-if="comment" class="border border-gray-2 px5 py8 text-center space-y-5">
          <div i-carbon-chat class="m-auto text-6xl text-blue-500" />
          <div>
            <h6 text-xs>هنوز نظری ثبت نشده</h6>
            <h3 font-bold>اولین نفری باشید که نظر می‌دهید</h3>
          </div>
          <button class="text-xs bg-blue-500 rounded-lg px-8 py2.5 text-white duration-250 hover:opacity-60">ثبت
            نظر</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
</style>