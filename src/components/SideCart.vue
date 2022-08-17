<script setup>
import { useShop } from '../stores/shop';
import { useMain } from '../stores/main';

const shop = useShop()
const main = useMain()

const items = computed(() => shop.allItems)
const price = (item) => main.toFarsiNumber(main.numberWithCommas(item))
const totalPrice = () => main.toFarsiNumber(main.numberWithCommas(shop.totalAmount))
</script>

<template>
  <aside>
    <XyzTransition appear xyz="fade" mode="in-out">
      <div @click="shop.sideCart = false" class="dhp3zq" />
    </XyzTransition>

    <XyzTransition appear xyz="fade right">
      <div class="yyy544">
        <header>
          <h3 text="center white lg">سبد خرید</h3>
          <span @click="shop.sideCart = flase" xyz="short front stagger" class="lx3bg9 xyz-nested">&#10005;</span>
        </header>

        <section relative>
          <div v-if="shop.cart.length === 0" class="absolute inset-y-50% inset-10 text-center lg:inset-y-45%">
            <div i-carbon-shopping-bag class="text-10 text-blue/70 m-auto mb2" />
            <h4 class="text-sm tracking-1px font-bold">سبد خرید خالی است!</h4>
          </div>

          <ul>
            <li v-for="item in items" :key="item.id">
              <div class="v66j61">
                <img :src="item.img" :alt="item.title">
              </div>
              <div>
                <h4 text="#5d5d5d xs" class="!w-90%">{{ item.title }}</h4>

                <div class="d8qlkv">
                  <span text-xs>تعداد:</span>
                  <div class="v258m3">
                    <button @click="shop.increment(item.id)" class="p7278t">+</button>
                    <span class="iauyep">{{ main.toFarsiNumber(item.quantity) }}</span>
                    <button @click="shop.decrement(item.id)" class="p7278t">-</button>
                  </div>
                </div>

                <h6 class="we3mbs">{{ price(item.price) }} تومان</h6>
              </div>
              <span @click="shop.removeItem(item.id)" class="gvxfr2">&#10005;</span>
            </li>
          </ul>
        </section>

        <footer>
          <div class="nw17e7">
            <label text-xs>جمع کل</label>
            <span class="uhlai6">{{ totalPrice() }} تومان</span>
          </div>
          <div class="q36rnj">
            <button>مشاهده سبد خرید</button>
            <span mx1></span>
            <button>تسویه حساب</button>
          </div>
        </footer>
      </div>
    </XyzTransition>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  position: fixed;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  z-index: 100;
  height: 100%;
  width: 100%;

  .dhp3zq {
    position: fixed;
    top: 0rem;
    left: 0rem;
    z-index: 9999;
    display: block;
    width: 100%;
    height: 100%;
    --un-bg-opacity: 0.5;
    background-color: rgba(0, 0, 0, var(--un-bg-opacity));
  }

  .yyy544 {
    position: absolute;
    top: 0rem;
    right: 0rem;
    z-index: 99999;
    width: 240px;
    height: 100%;

    @media (min-width: 640px) {
      width: 350px;
    }

    header {
      position: relative;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      --un-bg-opacity: 1;
      background-color: rgba(0, 0, 0, var(--un-bg-opacity));

      @media (min-width: 768px) {
        height: 80px;
      }

      .lx3bg9 {
        position: absolute;
        left: 20px;
        cursor: pointer;
        font-size: 1.5rem;
        line-height: 2rem;
        --un-text-opacity: 1;
        color: rgba(255, 255, 255, var(--un-text-opacity));
      }
    }

    section {
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: auto;
      --un-bg-opacity: 1;
      background-color: rgba(237, 239, 240, var(--un-bg-opacity));
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 30px;
      padding-bottom: 30px;
      height: calc(95% - 80px - 98px);

      ul {
        flex: 1 1 0%;
        list-style-type: none;

        li {
          position: relative;
          margin-bottom: 30px;
          display: flex;
          align-items: flex-start;
          border-bottom-width: 1px;
          border-bottom-style: solid;
          --un-border-opacity: 1;
          border-color: rgba(214, 214, 214, var(--un-border-opacity));
          padding-bottom: 30px;

          &:last-child {
            margin-bottom: 0rem;
            border-bottom-style: none;
            padding-bottom: 0rem;

            @media (min-width: 640px) {
              margin-bottom: 30px;
            }

            @media (min-width: 768px) {
              margin-bottom: 30px;
            }

            @media (min-width: 1024px) {
              margin-bottom: 0rem;
            }

            @media (min-width: 1280px) {
              margin-bottom: 30px;
              padding-bottom: 30px
            }
          }

          .v66j61 {
            position: relative;
            margin-left: 10px;
            display: inline-block;
            width: 80px;
            height: 80px;
            align-self: flex-start;

            img {
              display: inline-block;
              width: 100%;
              height: 100%;

              @media (min-width: 1280px) {
                height: 5.5rem;
              }
            }
          }

          .d8qlkv {
            display: flex;
            align-items: center;
            padding-top: 0.625rem;
            padding-bottom: 0.625rem;

            .v258m3 {
              margin-right: 0.5rem;
              display: flex;
              align-items: center;

              .p7278t {
                --un-bg-opacity: 1;
                background-color: rgba(255, 255, 255, var(--un-bg-opacity));
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                padding-left: 0.5rem;
                padding-right: 0.5rem;
              }

              .iauyep {
                margin-left: 0.125rem;
                margin-right: 0.125rem;
                --un-bg-opacity: 1;
                background-color: rgba(255, 255, 255, var(--un-bg-opacity));
                padding-left: 0.75rem;
                padding-right: 0.75rem;
                padding-top: 0.625rem;
                padding-bottom: 0.625rem;
                font-size: 0.75rem;
                line-height: 1rem;
              }

            }
          }

          .we3mbs {
            font-size: 0.75rem;
            line-height: 1rem;
            font-weight: 700;
            letter-spacing: 1px;
          }

          .gvxfr2 {
            position: absolute;
            top: -0.5rem;
            left: -0.25rem;
            cursor: pointer;
            border-width: 1px;
            border-style: solid;
            --un-border-opacity: 1;
            border-color: rgba(229, 231, 235, var(--un-border-opacity));
            border-radius: 9999px;
            padding-left: 0.25rem;
            padding-right: 0.25rem;
            padding-top: 0.125rem;
            font-size: 8px;
            font-weight: 700;
            --un-text-opacity: 1;
            color: rgba(17, 24, 39, var(--un-text-opacity));
            transition-duration: 250ms;

            &:hover {
              --un-text-opacity: 1;
              color: rgba(248, 113, 113, var(--un-text-opacity));
            }
          }
        }
      }
    }

    footer {
      position: fixed;
      bottom: 0rem;
      right: 0rem;
      width: 240px;
      --un-bg-opacity: 1;
      background-color: rgba(237, 239, 240, var(--un-bg-opacity));

      @media (min-width: 640px) {
        width: 350px;
      }

      .nw17e7 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px;
        --un-text-opacity: 1;
        color: rgba(47, 47, 47, var(--un-text-opacity));

        .uhlai6 {
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 700;
        }
      }

      .q36rnj {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top-width: 1px;
        border-top-style: solid;
        --un-border-opacity: 1;
        --un-border-top-opacity: var(--un-border-opacity);
        border-top-color: rgba(214, 214, 214, var(--un-border-top-opacity));
        padding: 30px;
        padding-left: 20px;
        padding-right: 20px;

        @media (min-width: 640px) {
          padding-left: 30px;
          padding-right: 30px;
        }

        button {
          width: 100%;
          border-radius: 0.5rem;
          --un-bg-opacity: 1;
          padding: 0.75rem;
          font-size: 8px;
          --un-text-opacity: 1;
          color: rgba(255, 255, 255, var(--un-text-opacity));
          transition-duration: 250ms;

          @media (min-width: 640px) {
            font-size: 12px;
          }

          &:first-child {
            --un-bg-opacity: 1;
            background-color: rgba(156, 163, 175, var(--un-bg-opacity));

            &:hover {
              --un-bg-opacity: 1;
              background-color: rgba(107, 114, 128, var(--un-bg-opacity));
            }
          }

          &:last-child {
            --un-bg-opacity: 1;
            background-color: rgba(34, 197, 94, var(--un-bg-opacity));

            &:hover {
              --un-bg-opacity: 1;
              background-color: rgba(22, 163, 74, var(--un-bg-opacity));
            }
          }
        }
      }
    }
  }
}
</style>