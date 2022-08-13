<script setup>
import { useTitle } from '@vueuse/core';
import { useShop } from '@/stores/shop';
import { useMain } from '@/stores/main';
import { useForm } from '@/stores/form';

const route = useRoute()
const shop = useShop()
const title = useTitle()
const main = useMain()
const form = useForm()

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
    <section class="li805m">
      <div class="bd9ot1">
        <img :src="item.img" :alt="item.title" class="n90pig">

        <div class="enajqv">
          <div class="b21l7b">
            <h1 text-2xl>{{ item.title }}</h1>
            <h6 text="xl #f26522">{{ price }} تومان</h6>
            <p class="w573pd">{{ main.description }}</p>
          </div>

          <button @click="shop.addToCart(item)" class="lgd4wg">
            <span v-if="!shop.addLoading">افزودن به سبد خرید</span>
            <span v-else>. . .</span>
          </button>
        </div>
      </div>
      <div p="5 t0 b10 xl:10 xl:t0">
        <div>
          <button @click="descBtn" :class="{ 'g20l2o': description }" p3>مشخصات محصول</button>
          <button @click="commentBtn" :class="{ 'g20l2o': comment }" p3>نظرات</button>

          <!-- CONDITIONS -->
          <div v-if="description" xyz="fade" class="jff1f5">
            <div class="dcxvv7">
              <div v-for="detail in details" :key="detail" class="mbbtw2">
                <h6 class="qbinpu">{{ detail.title }}</h6>
                <h6 class="g1ewzz">{{ detail.sub }}</h6>
              </div>
            </div>
          </div>

          <!-- COMMENT -->
          <div v-if="comment" xyz="fade" class="eeimw5">
            <div i-carbon-chat class="r3b0t0" />
            <div>
              <h6 text-xs>هنوز نظری ثبت نشده</h6>
              <h3 font-bold>اولین نفری باشید که نظر می‌دهید</h3>
            </div>
            <button @click="form.modal = true" class="q9n11e">ثبت نظر</button>
          </div>
        </div>

        <!-- MODAL -->
        <div>
          <XyzTransition appear xyz="fade" class="y526y3">
            <div v-if="form.modal" @click="form.modal = false" />
          </XyzTransition>

          <XyzTransition appear xyz="fade small">
            <div v-if="form.modal" class="h318pe">
              <div class="j15ufo">
                <p text="sm xl:xs">نظر شما راجب این محصول چیست؟</p>
                <button @click="form.modal = false">
                  <span sm:text-20px>&#9747;</span>
                </button>
              </div>

              <div class="p2m9lr">
                <img :src="item.img" :alt="item.title" class="rytwdt" />
                <div pr3 space-y-2>
                  <h6 text-lg>{{ item.title }}</h6>
                  <p text="xs gray-400 xl:12px">چه امتیازی به این محصول می‌دهید؟</p>

                  <!-- RATING -->
                  <div flex>
                    <div class="ebt40d" v-for="(star, index) in 5" :key="index" @click="ratingStar(index + 1)">
                      <span v-if="rating >= index + 1" text="3xl xl:2xl">&#9733;</span>
                      <span v-else text="3xl xl:2xl">&#9734;</span>
                    </div>
                  </div>
                </div>
              </div>

              <form @submit.prevent="form.validation" class="mz9ud4">
                <div>
                  <input v-model="form.form.username" :class="form.form.usernameErr ? '!border-red' : ''" class="h311kx"
                    type="text" placeholder="نام شما" />
                  <XyzTransition appear mode="out-in" xyz="fade">
                    <p v-if="form.form.usernameErr" text="red xs">{{ form.form.usernameErr }}</p>
                  </XyzTransition>
                </div>
                <div>
                  <input v-model="form.form.content" :class="form.form.contentErr ? '!border-red' : ''" class="h311kx"
                    type="text" placeholder="عنوان نظر شما" />
                  <XyzTransition appear mode="out-in" xyz="fade">
                    <p v-if="form.form.contentErr" text="red xs">{{ form.form.contentErr }}</p>
                  </XyzTransition>
                </div>
                <div>
                  <textarea v-model="form.form.email" o :class="form.form.emailErr ? '!border-red' : ''"
                    class="h311kx !sm:p-3 !-mb-2px" rows="8" placeholder="متن نظر شما"></textarea>
                  <XyzTransition appear mode="out-in" xyz="fade">
                    <p v-if="form.form.emailErr" text="red xs">متن مورده نظر خود را وارد کنید!</p>
                  </XyzTransition>
                </div>

                <div class="qri6xt">
                  <button class="k7223i">ذخیره</button>
                  <button @click="form.modal = false" class="bp4mk7">انصراف</button>
                </div>
              </form>
            </div>
          </XyzTransition>

          <!-- formLoading -->
          <div v-if="form.loading" class="ioofc0">
            <XyzTransition appear xyz="fade small">
              <div i-carbon-circle-dash class="bidkyk" />
            </XyzTransition>
          </div>
        </div>

        <!-- SUCCESS -->
        <div v-if="form.success" class="wz3kh2">
          <button @click="form.success = false" m="b-3 l3">
            <span text="xs gray-100">&#9747;</span>
          </button>
          <p text="xs white" m="l-3 r-1">پیام شما بعد از تایید نمایش داده میشود!</p>
          <span class="k07429">&#10003;</span>
        </div>
      </div>
    </section>

    <section class="zbqlih">
      <h1 class="h1k8oe">محصولات مرتبط</h1>
      <div class="vk7q89">
        <div v-for="products in shop.database.slice(1, 4)" :key="products.id">
          <router-link :to="`/shop/${products.id}`">
            <img :src="products.img" :alt="products.title">
          </router-link>
          <div class="u8jwx5">
            <h6 text="sm md:text-base">{{ products.title }}</h6>
            <h6 class="qbpzm0">{{ main.toFarsiNumber(main.numberWithCommas(products.price)) }} تومان</h6>
            <router-link :to="`/shop/${products.id}`" class="m561bo">افزودن به سبد خرید</router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  --un-bg-opacity: 1;
  background-color: rgba(229, 238, 246, var(--un-bg-opacity));

  .li805m {
    max-width: 420px;
    --un-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--un-bg-opacity));

    @media (min-width: 768px) {
      max-width: 768px;
    }

    @media (min-width: 1280px) {
      max-width: 1180px;
    }

    .bd9ot1 {
      padding: 1.25rem;

      @media (min-width: 1280px) {
        display: flex;
        align-items: flex-start;
        padding: 2.5rem;
        padding-top: 3.75rem;
      }

      .n90pig {
        width: 100%;

        @media (min-width: 1280px) {
          width: 50%;
          height: 25rem;
        }
      }

      .enajqv {
        padding-top: 1.25rem;

        @media (min-width: 1280px) {
          padding-top: 0rem;
          padding-right: 1.75rem;
        }

        .b21l7b {
          letter-spacing: 1px;

          >:not([hidden])~:not([hidden]) {
            --un-space-y-reverse: 0;
            margin-top: calc(0.5rem * calc(1 - var(--un-space-y-reverse)));
            margin-bottom: calc(0.5rem * var(--un-space-y-reverse));
          }

          .w573pd {
            margin-top: 0.5rem !important;
            font-size: 0.75rem;
            line-height: 1rem;
            letter-spacing: 0px !important;
          }
        }

        .lgd4wg {
          margin-top: 2.5rem;
          --un-bg-opacity: 1;
          background-color: rgba(242, 101, 34, var(--un-bg-opacity));
          padding-left: 2.5rem;
          padding-right: 2.5rem;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
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

    div {
      .g20l2o {
        border-top-width: 1px;
        border-top-style: solid;
        border-right-width: 1px;
        border-right-style: solid;
        border-left-width: 1px;
        border-left-style: solid;
        --un-border-opacity: 1;
        border-color: rgba(229, 231, 235, var(--un-border-opacity));
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      .jff1f5 {
        border-width: 1px;
        border-style: solid;
        --un-border-opacity: 1;
        border-color: rgba(229, 231, 235, var(--un-border-opacity));
        padding: 1.25rem;

        .dcxvv7 {
          border-width: 2px;
          border-style: solid;
          --un-border-opacity: 1;
          border-color: rgba(229, 231, 235, var(--un-border-opacity));

          >:not([hidden])~:not([hidden]) {
            --un-divide-y-reverse: 0;
            border-top-width: calc(2px * calc(1 - var(--un-divide-y-reverse)));
            border-bottom-width: calc(2px * var(--un-divide-y-reverse));
            border-top-style: solid;
            border-bottom-style: solid;
            --un-divide-opacity: 1;
            border-color: rgba(229, 231, 235, var(--un-divide-opacity));
          }

          .mbbtw2 {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            align-items: center;

            .qbinpu {
              grid-column: span 1/span 1;
              border-left-width: 2px;
              border-left-style: solid;
              --un-border-opacity: 1;
              border-color: rgba(229, 231, 235, var(--un-border-opacity));
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
            }

            .g1ewzz {
              grid-column: span 3/span 3;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
            }
          }
        }

      }

      .eeimw5 {
        border-width: 1px;
        border-style: solid;
        --un-border-opacity: 1;
        border-color: rgba(229, 231, 235, var(--un-border-opacity));
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        text-align: center;

        >:not([hidden])~:not([hidden]) {
          --un-space-y-reverse: 0;
          margin-top: calc(1.25rem * calc(1 - var(--un-space-y-reverse)));
          margin-bottom: calc(1.25rem * var(--un-space-y-reverse));
        }

        .r3b0t0 {
          margin: auto;
          font-size: 3.75rem;
          line-height: 1;
          --un-text-opacity: 1;
          color: rgba(59, 130, 246, var(--un-text-opacity));
        }

        .q9n11e {
          border-radius: 0.75rem;
          --un-bg-opacity: 1;
          background-color: rgba(59, 130, 246, var(--un-bg-opacity));
          padding-left: 2rem;
          padding-right: 2rem;
          padding-top: 0.625rem;
          padding-bottom: 0.625rem;
          font-size: 0.75rem;
          line-height: 1rem;
          --un-text-opacity: 1;
          color: rgba(255, 255, 255, var(--un-text-opacity));
          transition-duration: 250ms;

          &:hover {
            opacity: 0.6;
          }
        }
      }

    }

    div {
      .y526y3 {
        position: fixed;
        top: 0rem;
        left: 0rem;
        z-index: 9999;
        display: block;
        width: 100%;
        height: 100%;
        --un-bg-opacity: 0.8;
        background-color: rgba(0, 0, 0, var(--un-bg-opacity));
      }

      .h318pe {
        position: fixed;
        left: 1.25rem;
        right: 1.25rem;
        top: 4.25rem;
        bottom: 4.25rem;
        z-index: 9999;
        margin: auto;
        max-width: 420px;
        overflow: scroll;
        border-radius: 0.125rem;
        --un-bg-opacity: 1;
        background-color: rgba(255, 255, 255, var(--un-bg-opacity));
        --un-shadow: var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
        box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);

        @media (min-width: 640px) {
          top: 1.25rem;
          bottom: 1.25rem;
        }

        .j15ufo {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem;

          @media (min-width: 640px) {
            margin-bottom: 0.5rem;
          }
        }

        .p2m9lr {
          display: flex;
          align-items: flex-start;
          padding: 0.75rem;

          .rytwdt {
            width: 5rem;
            border-width: 1px;
            border-style: solid;
            --un-border-opacity: 1;
            border-color: rgba(229, 231, 235, var(--un-border-opacity));
            padding: 0.25rem;

            @media (min-width: 768px) {
              width: 8.75rem;
            }
          }

          .ebt40d {
            margin-left: 0.125rem;
            margin-right: 0.125rem;
            cursor: pointer;
            --un-text-opacity: 1;
            color: rgba(234, 179, 8, var(--un-text-opacity));
          }

        }

        .mz9ud4 {
          margin-top: 1.25rem;
          padding: 0.75rem;

          >:not([hidden])~:not([hidden]) {
            --un-space-y-reverse: 0;
            margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
            margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
          }

          @media (min-width: 640px) {
            >:not([hidden])~:not([hidden]) {
              --un-space-y-reverse: 0;
              margin-top: calc(1.25rem * calc(1 - var(--un-space-y-reverse)));
              margin-bottom: calc(1.25rem * var(--un-space-y-reverse));
            }
          }

          .h311kx {
            margin-bottom: 0.25rem;
            width: 100%;
            border-width: 1px;
            border-style: solid;
            --un-border-opacity: 1;
            border-color: rgba(229, 231, 235, var(--un-border-opacity));
            border-radius: 0.125rem;
            padding: 0.75rem;
            font-size: 0.75rem;
            line-height: 1rem;
            outline: 2px solid transparent;
            outline-offset: 2px;

            &:focus {
              border-width: 2px !important;
              border-style: solid !important;
              --un-border-opacity: 1 !important;
              border-color: rgba(229, 231, 235, var(--un-border-opacity)) !important;
            }

            @media (min-width: 640px) {
              padding: 0.75rem;
            }
          }

          .qri6xt {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 1.75rem;

            @media (min-width: 640px) {
              padding-bottom: 1.25rem;
            }

            .k7223i {
              border-radius: 9999px;
              --un-bg-opacity: 1;
              background-color: rgba(156, 163, 175, var(--un-bg-opacity));
              padding-left: 2.25rem;
              padding-right: 2.25rem;
              padding-top: 0.75rem;
              padding-bottom: 0.75rem;
              font-size: 0.75rem;
              line-height: 1rem;
              --un-text-opacity: 1;
              color: rgba(255, 255, 255, var(--un-text-opacity));
              transition-duration: 250ms;

              &:hover {
                opacity: 0.8;
              }

              &:focus {
                outline: 2px solid transparent;
                outline-offset: 2px;
              }

              @media (min-width: 640px) {
                padding-left: 2.875rem;
                padding-right: 2.875rem;
                padding-top: 0.7rem;
                padding-bottom: 0.7rem;
              }
            }

            .bp4mk7 {
              border-bottom-width: 2px;
              border-bottom-style: solid;
              --un-border-opacity: 1;
              border-color: rgba(209, 213, 219, var(--un-border-opacity));
              padding-left: 0.75rem;
              padding-right: 0.75rem;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              font-size: 0.75rem;
              line-height: 1rem;
              --un-text-opacity: 1;
              color: rgba(107, 114, 128, var(--un-text-opacity));
              transition-duration: 250ms;

              &:hover {
                font-weight: 700;
              }

              &:focus {
                outline: 2px solid transparent;
                outline-offset: 2px;
              }

              @media (min-width: 640px) {
                padding-top: 0.7rem;
                padding-bottom: 0.7rem;
              }
            }
          }
        }
      }

      .ioofc0 {
        position: fixed;
        inset: -0.25rem;
        z-index: 9999;
        display: block;
        --un-bg-opacity: 0.8;
        background-color: rgba(0, 0, 0, var(--un-bg-opacity));

        .bidkyk {
          position: absolute;
          left: 0rem;
          right: 0rem;
          top: 22.5rem;
          bottom: 22.5rem;
          margin: auto;
          animation: spin 1s linear infinite;
          font-size: 8rem;
          --un-text-opacity: 1;
          color: rgba(255, 255, 255, var(--un-text-opacity));

          @keyframes spin {
            from {
              transform: rotate(0deg)
            }

            to {
              transform: rotate(360deg)
            }
          }

          @media (min-width: 640px) {
            top: 20rem;
            bottom: 20rem;
          }

          @media (min-width: 1024px) {
            top: 17.5rem;
            bottom: 17.5rem;
          }
        }
      }
    }

    .wz3kh2 {
      position: fixed;
      top: 2.5rem;
      right: 1.25rem;
      display: flex;
      align-items: center;
      --un-bg-opacity: 1;
      background-color: rgba(98, 175, 101, var(--un-bg-opacity));
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;

      .k07429 {
        font-weight: 700;
        --un-text-opacity: 1;
        color: rgba(255, 255, 255, var(--un-text-opacity));
      }
    }
  }

  .zbqlih {
    max-width: 420px;

    @media (min-width: 768px) {
      max-width: 768px;
    }

    @media (min-width: 1280px) {
      max-width: 1180px;
    }

    .h1k8oe {
      padding: 1.25rem;
      padding-top: 2.5rem;
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 700;

      @media (min-width: 1280px) {
        padding-top: 3.75rem;
      }
    }


    .vk7q89 {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      grid-gap: 1.25rem;
      gap: 1.25rem;
      padding: 1.25rem;

      @media (min-width: 640px) {
        padding-right: 0;
        padding-left: 0;
      }

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding-right: 1.25rem;
        padding-left: 1.25rem;
      }


      @media (min-width: 1028px) {
        padding-right: 0;
        padding-left: 0;
      }

      @media (min-width: 1280px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      img {
        width: 100%;
        transition-duration: 250ms;
        cursor: pointer;

        &:hover {
          --un-invert: invert(0.1);
          filter: var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia);
        }

        @media (min-width: 768px) {
          width: 25rem;
          height: 20rem;
        }
      }

      .u8jwx5 {
        --un-bg-opacity: 1;
        background-color: rgba(255, 255, 255, var(--un-bg-opacity));
        padding: 1rem;
        text-align: center;

        .qbpzm0 {
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.75rem;
          line-height: 1rem;
          letter-spacing: 1px;
        }

        .m561bo {
          --un-bg-opacity: 1;
          background-color: rgba(242, 101, 34, var(--un-bg-opacity));
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          padding-top: 0.375rem;
          padding-bottom: 0.375rem;
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