<script setup>
import { useBlog } from '@/stores/blog';
import LeftSide from './LeftSide.vue';

const blogs = useBlog()
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
              <div i-carbon-calendar-heat-map />
              <h6>{{ blog.date }}</h6>
            </div>

            <div>
              <div i-carbon-folder />
              <h6>{{ blog.folder }}</h6>
            </div>

            <div>
              <div i-carbon-tag />
              <h6 v-for="tag in blog.tags" :key="tag">{{ tag }}٬</h6>
            </div>
          </div>

          <router-link :to="`/blogs/${blog.id}`">
            <img :src="blog.img" :alt="blog.title" class="rbco7y">
          </router-link>
          <p class="k3agm6">{{ blogs.description }}{{ blogs.description }}</p>
          <router-link :to="`/blogs/${blog.id}`" class="p6ol4n">ادامه
            مطلب</router-link>
        </div>
      </div>

      <LeftSide />
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

            div {
              height: 1.25rem;
              width: 1.25rem;
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

            div {
              height: 1.25rem;
              width: 1.25rem;
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

            div {
              height: 1.25rem;
              width: 1.25rem;
            }
          }
        }

        .rbco7y {
          margin-bottom: 0.75rem;
          margin-top: 1.25rem;

          @screen md {
            width: 100%;
          }
        }

        .k3agm6 {
          margin-bottom: 1.25rem;
          font-size: 0.75rem;
          line-height: 1rem;
        }

        .p6ol4n {
          --un-bg-opacity: 1;
          background-color: rgba(242, 101, 34, var(--un-bg-opacity));
          padding-left: 2.5rem;
          padding-right: 2.5rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          font-size: 0.75rem;
          line-height: 1rem;
          --un-text-opacity: 1;
          color: rgba(255, 255, 255, var(--un-text-opacity));
          transition-duration: 250ms;

          &:hover {
            --un-bg-opacity: 1;
            background-color: rgba(0, 56, 122, var(--un-bg-opacity));
          }
        }
      }
    }
  }
}
</style>

