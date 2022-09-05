<script setup>
import { useBlog } from '@/stores/blog';

const blog = useBlog()
</script>

<template>
  <main class="bg-#e5eef6">
    <section space-y-5 p5 container>
      <div v-for="blog in blog.blogs" :key="blog" class="bg-white p3">
        <h1 font-bold text-lg>{{blog.title}}</h1>

        <div class="flex space-x-reverse space-x3 items-start mt1 [&_h6]:text-xs">
          <div flex items-center space-x-reverse space-x-2 class="hocus:bg-red">
            <div i-carbon-calendar-heat-map w5 h5 />
            <h6>{{blog.date}}</h6>
          </div>

          <div flex flex-none items-center space-x-reverse space-x-2>
            <div i-carbon-folder w5 h5 />
            <h6>{{blog.folder}}</h6>
          </div>

          <div flex items-center overflow-scroll space-x-reverse space-x-2>
            <div i-carbon-tag text-black w5 h5 />
            <h6 v-for="tag in blog.tags" :key="tag">{{tag}}٬</h6>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
</style>