<script setup>
import { useBlog } from '@/stores/blog';
import { useArrayFilter } from '@vueuse/shared';

const blogs = useBlog()

const categories = reactive({
  title: ['آگهی', 'مالی', 'صدمه شخصی', 'تجارت'],
  activeCategory: '',
  function: (title) => {
    categories.activeCategory = title
    return blogs.blogs = useArrayFilter(blogs.blogs, blog => blog.folder === title)
  }
})

const archive = reactive({
  date: blogs.blogs.forEach(dates => {
    return dates.date
  }),
  function: (date) => {
    archive.date = date
    return blogs.blogs = useArrayFilter(blogs.blogs, blog => blog.date === archive.date)
  }
})
const date = blogs.blogs.forEach(dates => {
  dates.date;
})
console.log(date);
</script>

<template>
  <main>

    <section>
      <div class="glxkbp">
        <div v-for="blog in blogs.blogs" :key="blog.id" class="ghz8pt">
          <router-link :to="`/blogs/${blog.id}`" class="fkvnlk">{{ blog.title }}
          </router-link>

          <div class="duyn5k">
            <div>
              <div i-carbon-calendar-heat-map w5 h5 />
              <h6>{{ blog.date }}</h6>
            </div>

            <div>
              <div i-carbon-folder w5 h5 />
              <h6>{{ blog.folder }}</h6>
            </div>

            <div>
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

          <div flex flex-col items-start space-y-1 border-t-4 border-stone-500 pt2>
            <button v-for="(category, index) in categories.title" :key="index" @click="categories.function(category)"
              :class="{ 'font-bold': category === categories.activeCategory }" text-xs>{{ category }}</button>
          </div>
        </div>

        <div space-y-7>
          <h1 text-sm tracking-1px>بایگانی</h1>

          <div flex flex-col items-start space-y-1 border-t-4 border-stone-500 pt2>
            <button v-for="date in blogs.blogs" :key="date" @click="blogs.blogs=archive.function(date)" disabled text-xs
              opacity-50>{{
              date.date
              }}</button>
          </div>
        </div>
      </aside>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  --un-bg-opacity: 1;
  background-color: rgba(229, 238, 246, var(--un-bg-opacity));
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  @screen xl {
    padding-top: 3.25rem;
  }

  section {
    margin-left: auto;
    margin-right: auto;
    max-width: 420px;

    @screen md {
      max-width: 768px;
    }

    @screen xl {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      max-width: 1170px;
      align-items: flex-start;
      grid-gap: 1.25rem;
      gap: 1.25rem;
    }

    .glxkbp {
      grid-column: span 6/span 6;

      >:not([hidden])~:not([hidden]) {
        --un-space-y-reverse: 0;
        margin-top: calc(1.25rem * calc(1 - var(--un-space-y-reverse)));
        margin-bottom: calc(1.25rem * var(--un-space-y-reverse));
      }

      .ghz8pt {
        --un-bg-opacity: 1;
        background-color: rgba(255, 255, 255, var(--un-bg-opacity));
        padding: 0.75rem;

        @screen md {
          padding: 1.25rem;
        }

        .fkvnlk {
          font-size: 1.125rem;
          line-height: 1.75rem;
          font-weight: 700;

          @screen md {
            letter-spacing: 2px;
          }
        }

        .duyn5k {
          margin-top: 0.5rem;
          display: flex;
          align-items: flex-start;

          >:not([hidden])~:not([hidden]) {
            --un-space-x-reverse: 0;
            margin-left: calc(0.75rem * calc(1 - var(--un-space-x-reverse)));
            margin-right: calc(0.75rem * var(--un-space-x-reverse));
            --un-space-x-reverse: 1;
          }

          h6 {
            font-size: 0.75rem;
            line-height: 1rem;

            @screen xl {
              font-size: 12px
            }
          }

          :first-child {
            display: flex;
            align-items: center;

            >:not([hidden])~:not([hidden]) {
              --un-space-x-reverse: 0;
              margin-left: calc(0.5rem * calc(1 - var(--un-space-x-reverse)));
              margin-right: calc(0.5rem * var(--un-space-x-reverse));
              --un-space-x-reverse: 1;
            }
          }

          :nth-child(2) {
            display: flex;
            flex: none;
            align-items: center;

            >:not([hidden])~:not([hidden]) {
              --un-space-x-reverse: 0;
              margin-left: calc(0.5rem * calc(1 - var(--un-space-x-reverse)));
              margin-right: calc(0.5rem * var(--un-space-x-reverse));
              --un-space-x-reverse: 1;
            }
          }

          :nth-child(3) {
            display: flex;
            align-items: center;
            overflow-x: scroll;

            >:not([hidden])~:not([hidden]) {
              --un-space-x-reverse: 0;
              margin-left: calc(0.5rem * calc(1 - var(--un-space-x-reverse)));
              margin-right: calc(0.5rem * var(--un-space-x-reverse));
              --un-space-x-reverse: 1;
            }

            @screen sm {
              overflow: unset;
            }
          }
        }
      }
    }
  }
}
</style>