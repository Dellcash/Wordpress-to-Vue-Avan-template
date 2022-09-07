<script setup>
import { useBlog } from '@/stores/blog';
import { useArrayFilter } from '@vueuse/shared';

const blogs = useBlog()

const loadBusiness = ref(false)
const business = () => {
  loadBusiness.value = true
  setTimeout(() => {
    loadBusiness.value = false
  }, 2000);
  return useArrayFilter(blogs.blogs, blog => blog.folder === 'تجارت')
}
</script>

<template>
  <main class="bg-#e5eef6 px5 py10 xl:pt13">
    <div v-if="loadBusiness">. . .</div>
    <section v-else class=" layout xl:grid xl:grid-cols-8 xl:gap5 xl:items-start">
      <div space-y-5 col-span-6>
        <div v-for="blog in blogs.blogs" :key="blog" class="bg-white p3 md:p5">
          <router-link :to="`/blogs/${blog.id}`" font-bold text-lg md:tracking-1px>{{ blog.title }}</router-link>

          <div class="flex space-x-reverse space-x3 items-start mt2 [&_h6]:text-xs">
            <div flex items-center space-x-reverse space-x-2 class="hocus:bg-red">
              <div i-carbon-calendar-heat-map w5 h5 />
              <h6>{{ blog.date }}</h6>
            </div>

            <div flex flex-none items-center space-x-reverse space-x-2>
              <div i-carbon-folder w5 h5 />
              <h6>{{ blog.folder }}</h6>
            </div>

            <div class="flex items-center space-x-reverse space-x-2 overflow-scroll sm:overflow-unset">
              <div i-carbon-tag text-black w5 h5 />
              <h6 v-for="tag in blog.tags" :key="tag">{{ tag }}٬</h6>
            </div>
          </div>

          <router-link :to="`/blogs/${blog.id}`">
            <img :src="blog.img" :alt="blog.title" mt5 mb3 md:wfull>
          </router-link>
          <p text-xs mb5>{{ blogs.description }}{{ blogs.description }}</p>
          <router-link :to="`/blogs/${blog.id}`"
            class="text-white bg-#f26522 px10 py2 text-xs duration-250 hover:bg-#00387a">ادامه
            مطلب</router-link>
        </div>
      </div>

      <aside class="hidden xl:block bg-white col-span-2 py3 px2 space-y-7">
        <div space-y-7>
          <h1 text-sm tracking-1px>نوشته‌های اخیر</h1>

          <div space-y-3 border-t-4 border-stone-500 pt2>
            <div v-for="blog in blogs.blogs" :key="blog" flex space-x-reverse space-x3>
              <router-link :to="`/blogs/${blog.id}`">
                <img :src="blog.img" :alt="blog.title" w30 object-cover h-3rem>
              </router-link>

              <div class="[&_h6]:text-12px wfull">
                <h6>{{ blog.title }}</h6>
                <h6>{{ blog.date }}</h6>
              </div>
            </div>
          </div>
        </div>

        <div space-y-7>
          <h1 text-sm tracking-1px>دسته بندی‌ها</h1>

          <div space-y-3 border-t-4 border-stone-500 pt2>
            <button @click="blogs.blogs = business()" text-xs>تجارت</button>
          </div>
        </div>
      </aside>
    </section>
  </main>
</template>

<style lang="scss" scoped>
</style>