<script setup>
import { useShop } from '../../stores/shop';
import { useMain } from '../../stores/main';

const shop = useShop()
const main = useMain()
</script>

<template>
  <main>

    <table class="table-auto table border-collapse m5">
      <thead class="text-right">
        <tr>
          <th class="border-g p4 wfull">کالا</th>
          <th class="border-g p4 wfull">تعداد</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items in shop.cart" :key="items.id">
          <td class="border-g p4 wfull">
            <div class="flex">
              <img :src="items.img" :alt="items.title" w8 ml2>
              <div pr2>
                <h6 class="text-xs mb1">{{ items.title }}</h6>
                <button @click="shop.removeItem(items.id)" class="text-xs text-red duration-250 hover:text-red-7"> حذف
                </button>
              </div>
            </div>
          </td>
          <td class="text-center border-g p4 wfull">
            <div class="v258m3">
              <button @click="shop.increment(items.id)" class="p7278t border-g">+</button>
              <span class="iauyep border-g">{{ main.toFarsiNumber(items.quantity) }}</span>
              <button @click="shop.decrement(items.id)" class="p7278t border-g">-</button>
            </div>
          </td>
        </tr>
        <tr class="table-row border-g !border-b-0">
          <td p4 pb0>جمع کل خرید شما</td>
          <td p4 pb0><span>{{ main.toFarsiNumber(main.numberWithCommas(shop.totalAmount)) }}</span><span
              mr1>تومان</span>
          </td>
        </tr>

        <tr class="table-row border-g !border-t-0">
          <td p4 pt2>مبلغ قابل پرداخت</td>
          <td class="p4 pt2 text-green"><span>{{ main.toFarsiNumber(main.numberWithCommas(shop.totalAmount))
          }}</span><span mr1>تومان</span>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style lang="scss" scoped>
.border-g {
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--un-border-opacity));
}

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
</style>