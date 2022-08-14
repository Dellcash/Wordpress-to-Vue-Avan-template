<script setup>
import { useShop } from '../stores/shop';
import { useMain } from '../stores/main';

const shop = useShop()
const main = useMain()

const items = computed(() => shop.allItems)
const cartLength = computed(() => main.toFarsiNumber(shop.cart.length))
const price = (item) => main.toFarsiNumber(main.numberWithCommas(item))
</script>

<template>
  <aside class="fixed top-0 right-0 h-full bottom-0 wfull z-100">
    <div @click="shop.sideCart = false"
      class="fixed block top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] z-9999" />
    <div class="w-240px z99999 absolute top-0 right-0 h-full sm:w-350px">
      <header class="bg-black relative h-60px flex items-center justify-center md:h-80px">
        <h3 text="center white lg" fw-thin>سبد خرید</h3>
        <span @click="shop.sideCart = flase"
          class="absolute text-2xl left-20px text-white cursor-pointer">&#10005;</span>
      </header>

      <section class="bg-#edeff0 overflow-auto px-20px py-30px wfull flex flex-col"
        style="height: calc(100% - 90px - 106px)">
        <ul class="flex-1 list-none">
          <li v-for="item in items" :key="item.id"
            class="pb-30px mb-30px relative !border-b border-#d6d6d6 flex items-start ">
            <div class="ml-10px w-80px h-80px inline-block self-start">
              <img :src="item.img" :alt="item.title" class="inline-block w-full hfull">
            </div>

            <div>
              <h4 text="#5d5d5d xs">{{ item.title }}</h4>

              <div class="py-2.5 flex items-center">
                <span text-xs>تعداد:</span>
                <div class="flex items-center mr2">
                  <button class="bg-white py-1 px2">+</button>
                  <span class="bg-white px3 py2.5 mx-0.5 text-xs">{{ cartLength }}</span>
                  <button class="bg-white py-1 px2">-</button>
                </div>
              </div>

              <h6 class="text-xs tracking-1px font-bold">{{ price(item.price) }} تومان</h6>
            </div>
          </li>
        </ul>
      </section>

      <footer class="border-t-#d6d6d6 h-106px p30px"></footer>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.j1lwie {
  overflow-y: scroll;
  --un-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--un-bg-opacity));
  height: calc(100% - 30px - 106px);

  @media (min-width: 640px) {
    height: calc(100% - 90px - 152px);
  }
}
</style>