<script setup>
import { useTitle, useToggle } from '@vueuse/core';
import { useShop } from '@/stores/shop';
import { useMain } from '@/stores/main';
import { useForm } from '@/stores/form';

const route = useRoute()
const shop = useShop()
const title = useTitle()
const main = useMain()
const [value, toggle] = useToggle()
const { form, validation, loading } = useForm()

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

// rating star function
const rating = ref(0);
const ratingStar = (star) => {
  rating.value = star;
};
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
          <button @click="toggle()"
            class="text-xs bg-blue-500 rounded-xl px-8 py2.5 text-white duration-250 hover:opacity-60">ثبت
            نظر</button>
        </div>
      </div>

      <!-- MODAL -->
      <div v-if="value">
        <XyzTransition appear xyz="fade" class="fixed block top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.8)] z-9999">
          <div v-if="value" @click="toggle()" />
        </XyzTransition>

        <XyzTransition appear xyz="fade small">
          <div v-if="value"
            class="bg-white fixed overflow-scroll inset-x-8 inset-y-17 shadow z-9999 rounded-sm sm:mt-15">
            <div class="flex items-center justify-between p-2 sm:mb-2">
              <p text-10px sm:text-14px>نظر شما راجب این محصول چیست؟</p>
              <button @click="toggle()">
                <span sm:text-20px>&#9747;</span>
              </button>
            </div>

            <div class="flex items-start p-3">
              <img :src="item.img" :alt="item.title" class="w-20 border p-1 border-gray-200 sm:w-25" />
              <div pr3 space-y-2>
                <h6>{{ item.title }}</h6>
                <p text="xs gray-400">چه امتیازی به این محصول می‌دهید؟</p>

                <!-- RATING -->
                <div class="flex">
                  <div class="cursor-pointer text-yellow-500 mx0.5" v-for="(star, index) in 5" :key="index"
                    @click="ratingStar(index + 1)">
                    <span v-if="rating >= index + 1" text-3xl>&#9733;</span>
                    <span v-else text-3xl>&#9734;</span>
                  </div>
                </div>
              </div>
            </div>

            <form @submit.prevent="validation" class="p-3 space-y-3 sm:space-y-5 mt-5">
              <div>
                <input v-model="form.username" :class="form.usernameErr ? '!border-red' : ''"
                  class="w-full text-xs p3 border border-gray-200 rounded-sm outline-none mb-1 !focus:border-gray-200 sm:p-3"
                  type="text" placeholder="نام شما" />
                <XyzTransition appear mode="out-in" xyz="fade">
                  <p v-if="form.usernameErr" text="red xs">{{ form.usernameErr }}</p>
                </XyzTransition>
              </div>
              <div>
                <input v-model="form.content" :class="form.contentErr ? '!border-red' : ''"
                  class="w-full text-xs p3 border border-gray-200 rounded-sm outline-none mb-1 !focus:border-gray-200 sm:p-3"
                  type="text" placeholder="عنوان نظر شما" />
                <XyzTransition appear mode="out-in" xyz="fade">
                  <p v-if="form.contentErr" text="red xs">{{ form.contentErr }}</p>
                </XyzTransition>
              </div>
              <div>
                <textarea v-model="form.email" o :class="form.emailErr ? '!border-red' : ''"
                  class="w-full text-xs p3 border border-gray-200 rounded-sm outline-none mb-1 !focus:border-gray-200 sm:p-3 sm:p-3 -mb-9px"
                  rows="8" placeholder="متن نظر شما"></textarea>
                <XyzTransition appear mode="out-in" xyz="fade">
                  <p v-if="form.emailErr" text="red xs">متن مورده نظر خود را وارد کنید!</p>
                </XyzTransition>
              </div>
              <div class="flex items-center justify-between pt-7 sm:pb-5">
                <button
                  class="text-xs px-9 py-3 bg-gray-400 text-white rounded-full duration-250 hover:opacity-80 focus:outline-none sm:px-11.5 sm:py-2.8">ذخیره</button>
                <button @click="toggle()"
                  class="border-b-2 border-gray-300 text-gray-500 text-xs px-3 py-2 duration-250 hover:font-bold focus:outline-none sm:py-2.8">انصراف</button>
              </div>
            </form>
          </div>
        </XyzTransition>

      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
</style>