<script setup>
import { useShop } from '../../stores/shop';
import { useMain } from '../../stores/main';

const shop = useShop()
const main = useMain()
</script>

<template>
  <main>
    <section class="flex flex-col items-center my10 px5">
      <div class="flex items-center justify-between wfull max-w-420px md:max-w-768px xl:md:max-w-1170px">
        <h1 class="text-#565656 text-xl font-bold tracking-1px">سبد خرید</h1>
        <router-link to="/shop" class="bg-#b4b4b4 text-sm px12 py2 text-white duration-250 hover:bg-gray">ادامه خرید
        </router-link>
      </div>
      <table class="my5 max-w-420px md:max-w-768px xl:md:max-w-1170px">
        <thead class="text-right">
          <tr>
            <th class="text-sm border-g p4 md:p6 wfull">کالا</th>
            <th class="text-sm border-g p4 md:p6 wfull text-center">تعداد</th>
            <th class="text-sm border-g p4 md:p6 wfull text-center hidden revert">قیمت</th>
            <th class="text-sm border-g p4 md:p6 wfull text-center hidden revert">قیمت کل</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in shop.cart" :key="items.id">
            <td class="border-g p4 md:p6 wfull">
              <div class="flex">
                <img :src="items.img" :alt="items.title" class="w8 ml2 sm:w-12 md:w-16">
                <div pr2>
                  <h6 class="text-xs mb1">{{ items.title }}</h6>
                  <button @click="shop.removeItem(items.id)" class="text-xs text-red duration-250 hover:text-red-7"> حذف
                  </button>
                </div>
              </div>
            </td>
            <td class="text-center border-g p4 md:p6 wfull">
              <div class="v258m3">
                <button @click="shop.increment(items.id)" class="p7278t border-g">+</button>
                <span class="iauyep border-g">{{ main.toFarsiNumber(items.quantity) }}</span>
                <button @click="shop.decrement(items.id)" class="p7278t border-g">-</button>
              </div>
            </td>

            <td class="hidden revert border-g p4 md:p10 wfull">
              <span text-sm>{{
                  main.toFarsiNumber(main.numberWithCommas(items.price))
              }}</span>
              <span class="text-xs mr1">تومان</span>
            </td>
            <td class="hidden revert border-g p4 md:p10 wfull"><span text-sm>{{
                main.toFarsiNumber(main.numberWithCommas(items.price * items.quantity))
            }}</span>
              <span class="text-xs mr1">تومان</span>
            </td>
          </tr>

          <tr class="wfull border-g md:hidden">
            <td p5>
              <h6 text-xs pb>جمع کل خرید شما</h6>
              <h6 text-xs>مبلغ قابل پرداخت</h6>
            </td>
            <td p5>
              <h6 text="xs left green" pb>{{ main.toFarsiNumber(main.numberWithCommas(shop.totalAmount)) }}</h6>
              <h6 text="xs left">{{ main.toFarsiNumber(main.numberWithCommas(shop.totalAmount)) }}</h6>
            </td>
          </tr>
        </tbody>

        <tbody class="hidden revert">
          <tr>
            <td>
              <form @submit.prevent="" wfull flex items-center>
                <input type="text" placeholder="کد تخفیف خود را وارد کنید"
                  class="border-g outline-none placeholder:text-#b4b4b4 placeholder:text-xs p2 duration-250 !hover:border-gray">
                <span mx1></span>
                <button class="bg-#b4b4b4 text-xs text-white py3.2 px7 duration-250 hover:bg-gray">ثبت</button>
              </form>
            </td>

            <td></td>

            <td class="border-g p4 pl0 !border-l-0">
              <h6 class="text-xs pb">جمع کل خرید شما</h6>
              <h6 text-xs>مبلغ قابل پرداخت</h6>
            </td>
            <td class="border-g !border-r-0 p4">
              <h6 text="xs left green" pb>{{ main.toFarsiNumber(main.numberWithCommas(shop.totalAmount)) }} تومان</h6>
              <h6 text="xs left">{{ main.toFarsiNumber(main.numberWithCommas(shop.totalAmount)) }} تومان</h6>
            </td>
          </tr>
        </tbody>
      </table>

      <form @submit.prevent="" class="wfull flex items-center justify-center mb5 md:hidden">
        <input type="text" placeholder="کد تخفیف خود را وارد کنید"
          class="border-g outline-none placeholder:text-#b4b4b4 placeholder:text-xs p2 duration-250 !hover:border-gray">
        <span mx1></span>
        <button class="bg-#b4b4b4 text-xs text-white py3.2 px7 duration-250 hover:bg-gray">ثبت</button>
      </form>

      <div
        class="flex flex-col space-y3 wfull max-w-420px md:max-w-768px md:flex-row md:items-center md:space-y-0 md:justify-between xl:md:max-w-1170px">
        <router-link to="#" class="bg-#b4b4b4 text-xs py3 md:px20 text-center text-white duration-250 hover:bg-gray">
          پیش
          فاکتور
        </router-link>
        <router-link to="#" class="bg-#f26522 text-xs py3 md:px20 text-center text-white duration-250 hover:bg-#00387a">
          ثبت
          سفارش
        </router-link>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.border-g {
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--un-border-opacity));
}

@media(min-width: 768px) {
  .revert {
    display: revert;
  }
}

.v258m3 {
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

td {
  text-align: right;
  direction: rtl;
}
</style>