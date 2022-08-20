<script setup>
import { useShop } from '@/stores/shop';
import { useMain } from '@/stores/main';

const shop = useShop()
const main = useMain()
</script>

<template>
  <main>
    <section>
      <div class="jr4kiy">
        <h1>سبد خرید</h1>
        <router-link to="/shop" class="xet9yo">ادامه
          خرید
        </router-link>
      </div>
      <table>
        <thead>
          <tr>
            <th>کالا</th>
            <th>تعداد</th>
            <th>قیمت</th>
            <th>قیمت کل</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in shop.cart" :key="items.id">
            <td class="wnpr3y">
              <div flex>
                <img :src="items.img" :alt="items.title">
                <div class="g867pr">
                  <h6>{{ items.title }}</h6>
                  <button @click="shop.removeItem(items.id)"> حذف</button>
                </div>
              </div>
            </td>
            <td class="e805ir">
              <div>
                <button @click="shop.increment(items.id)">+</button>
                <span>{{ main.toFarsiNumber(items.quantity) }}</span>
                <button @click="shop.decrement(items.id)">-</button>
              </div>
            </td>

            <td class="e3492f">
              <span text-sm>{{
                  main.toFarsiNumber(main.numberWithCommas(items.price))
              }}</span>
              <span>تومان</span>
            </td>
            <td class="e3492f"><span text-sm>{{
                main.toFarsiNumber(main.numberWithCommas(items.price * items.quantity))
            }}</span>
              <span>تومان</span>
            </td>
          </tr>

          <tr class="x1hf2i">
            <td>
              <h6>جمع کل خرید شما</h6>
              <h6 text-xs>مبلغ قابل پرداخت</h6>
            </td>
            <td>
              <h6>{{
                  main.toFarsiNumber(main.numberWithCommas(shop.totalAmount))
              }} تومان</h6>
              <h6>{{ main.toFarsiNumber(main.numberWithCommas(shop.totalAmount)) }}
                تومان</h6>
            </td>
          </tr>
        </tbody>

        <tbody class="wa75fd">
          <tr>
            <td>
              <form @submit.prevent="">
                <input type="text" placeholder="کد تخفیف خود را وارد کنید">
                <span></span>
                <button>ثبت</button>
              </form>
            </td>

            <td></td>

            <td>
              <h6>جمع کل خرید شما</h6>
              <h6>مبلغ قابل پرداخت</h6>
            </td>
            <td>
              <h6>{{
                  main.toFarsiNumber(main.numberWithCommas(shop.totalAmount))
              }} تومان</h6>
              <h6>{{ main.toFarsiNumber(main.numberWithCommas(shop.totalAmount)) }}
                تومان</h6>
            </td>
          </tr>
        </tbody>
      </table>

      <form @submit.prevent="" class="wofl5p">
        <input type="text" placeholder="کد تخفیف خود را وارد کنید">
        <span></span>
        <button>ثبت</button>
      </form>

      <div class="gjvyt3">
        <router-link to="#" class="zq2vkt">
          پیش
          فاکتور
        </router-link>
        <router-link to="#" class="qfe555">
          ثبت
          سفارش
        </router-link>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
section {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  .jr4kiy {
    width: 100%;
    max-width: 420px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
      max-width: 768px;
    }

    @media (min-width: 1280px) {
      max-width: 1170px;
    }

    h1 {
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: 700;
      letter-spacing: 1px;
      --un-text-opacity: 1;
      color: rgba(86, 86, 86, var(--un-text-opacity));
    }

    .xet9yo {
      --un-bg-opacity: 1;
      background-color: rgba(180, 180, 180, var(--un-bg-opacity));
      padding-left: 3rem;
      padding-right: 3rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 0.75rem;
      line-height: 1.25rem;
      --un-text-opacity: 1;
      color: rgba(255, 255, 255, var(--un-text-opacity));
      transition-duration: 250ms;

      &:hover {
        --un-bg-opacity: 1;
        background-color: rgba(156, 163, 175, var(--un-bg-opacity));
      }
    }
  }

  table {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    max-width: 420px;

    @media (min-width: 768px) {
      max-width: 768px;
    }

    @media (min-width: 1280px) {
      max-width: 1170px;
    }

    thead {
      text-align: center;

      tr {
        th {
          width: 100%;
          padding: 1rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          border-width: 1px;
          border-style: solid;
          --un-border-opacity: 1;
          border-color: rgba(229, 231, 235, var(--un-border-opacity));

          @media (min-width: 768px) {
            padding: 1.5rem;
          }

          &:first-child {
            text-align: right;
          }

          &:nth-child(3) {
            display: none;

            @media(min-width: 768px) {
              display: revert;
            }
          }

          &:nth-child(4) {
            display: none;

            @media(min-width: 768px) {
              display: revert;
            }
          }
        }
      }
    }

    .wnpr3y {
      width: 100%;
      padding: 1rem;
      border-width: 1px;
      border-style: solid;
      --un-border-opacity: 1;
      border-color: rgba(229, 231, 235, var(--un-border-opacity));

      @media (min-width: 768px) {
        padding: 1.5rem;
      }

      img {
        margin-left: 0.5rem;
        width: 2rem;

        @media (min-width: 640px) {
          width: 3rem;
        }

        @media (min-width: 768px) {
          width: 4rem;
        }
      }

      .g867pr {
        padding-right: 0.5rem;

        h6 {
          margin-bottom: 0.25rem;
          font-size: 0.75rem;
          line-height: 1rem;
        }

        button {
          font-size: 0.75rem;
          line-height: 1rem;
          --un-text-opacity: 1;
          color: rgba(248, 113, 113, var(--un-text-opacity));
          transition-duration: 250ms;

          &:hover {
            --un-text-opacity: 1;
            color: rgba(185, 28, 28, var(--un-text-opacity));
          }
        }
      }
    }

    .e805ir {
      width: 100%;
      padding: 1rem;
      text-align: center;
      border-width: 1px;
      border-style: solid;
      --un-border-opacity: 1;
      border-color: rgba(229, 231, 235, var(--un-border-opacity));


      @media (min-width: 768px) {
        padding: 1.5rem;
      }

      div {
        display: flex;
        align-items: center;

        button {
          --un-bg-opacity: 1;
          background-color: rgba(255, 255, 255, var(--un-bg-opacity));
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          border-width: 1px;
          border-style: solid;
          --un-border-opacity: 1;
          border-color: rgba(229, 231, 235, var(--un-border-opacity));
        }

        span {
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
          border-width: 1px;
          border-style: solid;
          --un-border-opacity: 1;
          border-color: rgba(229, 231, 235, var(--un-border-opacity));
        }
      }
    }

    .e3492f {
      display: none;
      width: 100%;
      padding: 1rem;
      border-width: 1px;
      border-style: solid;
      --un-border-opacity: 1;
      border-color: rgba(229, 231, 235, var(--un-border-opacity));


      @media (min-width: 768px) {
        padding: 2.5rem;
        display: revert;
      }

      span {
        &:nth-child(2) {
          margin-right: 0.25rem;
          font-size: 0.75rem;
          line-height: 1rem;
        }
      }
    }

    .x1hf2i {
      width: 100%;
      border-width: 1px;
      border-style: solid;
      --un-border-opacity: 1;
      border-color: rgba(229, 231, 235, var(--un-border-opacity));

      @media (min-width: 768px) {
        display: none;
      }

      td {
        &:first-child {
          padding: 1.25rem;

          h6 {
            &:first-child {
              padding-bottom: 1rem;
              font-size: 0.75rem;
              line-height: 1rem;
            }
          }
        }

        &:nth-child(2) {
          padding: 1.25rem;

          h6 {
            &:first-child {
              padding-bottom: 1rem;
              text-align: left;
              font-size: 0.75rem;
              line-height: 1rem;
              --un-text-opacity: 1;
              color: rgba(74, 222, 128, var(--un-text-opacity));
            }

            &:nth-child(2) {
              text-align: left;
              font-size: 0.75rem;
              line-height: 1rem;
            }
          }
        }
      }
    }

    .wa75fd {
      display: none;

      @media(min-width: 768px) {
        display: revert;
      }

      tr {
        td {
          &:first-child {
            form {
              width: 100%;
              display: flex;
              align-items: center;

              input {
                padding: 0.5rem;
                outline: 2px solid transparent;
                outline-offset: 2px;
                transition-duration: 250ms;
                border-width: 1px;
                border-style: solid;
                --un-border-opacity: 1;
                border-color: rgba(229, 231, 235, var(--un-border-opacity));

                &:hover {
                  --un-border-opacity: 1 !important;
                  border-color: rgba(156, 163, 175, var(--un-border-opacity)) !important;
                }

                &::placeholder {
                  font-size: 0.75rem;
                  line-height: 1rem;
                  --un-text-opacity: 1;
                  color: rgba(180, 180, 180, var(--un-text-opacity));
                }
              }

              span {
                margin-left: 0.25rem;
                margin-right: 0.25rem;
              }

              button {
                --un-bg-opacity: 1;
                background-color: rgba(180, 180, 180, var(--un-bg-opacity));
                padding-top: 0.8rem;
                padding-bottom: 0.8rem;
                padding-left: 1.75rem;
                padding-right: 1.75rem;
                font-size: 0.75rem;
                line-height: 1rem;
                --un-text-opacity: 1;
                color: rgba(255, 255, 255, var(--un-text-opacity));
                transition-duration: 250ms;

                &:hover {
                  --un-bg-opacity: 1;
                  background-color: rgba(156, 163, 175, var(--un-bg-opacity));
                }
              }
            }
          }

          &:nth-child(3) {
            border-width: 1px;
            border-style: solid;
            --un-border-opacity: 1;
            border-color: rgba(229, 231, 235, var(--un-border-opacity));
            border-left-width: 0px !important;
            border-left-style: solid !important;
            padding: 1rem;
            padding-left: 0rem;

            h6 {
              &:first-child {
                padding-bottom: 1rem;
                font-size: 0.75rem;
                line-height: 1rem;
              }

              &:last-child {
                font-size: 0.75rem;
                line-height: 1rem;
              }
            }
          }

          &:nth-child(4) {
            border-width: 1px;
            border-style: solid;
            --un-border-opacity: 1;
            border-color: rgba(229, 231, 235, var(--un-border-opacity));
            border-right-width: 0px !important;
            border-right-style: solid !important;
            padding: 1rem;

            h6 {
              &:first-child {
                padding-bottom: 1rem;
                text-align: left;
                font-size: 0.75rem;
                line-height: 1rem;
                --un-text-opacity: 1;
                color: rgba(74, 222, 128, var(--un-text-opacity));
              }

              &:last-child {
                text-align: left;
                font-size: 0.75rem;
                line-height: 1rem;
              }
            }
          }
        }
      }
    }
  }

  .wofl5p {
    margin-bottom: 1.25rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      display: none;
    }

    input {
      padding: 0.5rem;
      outline: 2px solid transparent;
      outline-offset: 2px;
      transition-duration: 250ms;
      border-width: 1px;
      border-style: solid;
      --un-border-opacity: 1;
      border-color: rgba(229, 231, 235, var(--un-border-opacity));

      &:hover {
        --un-border-opacity: 1 !important;
        border-color: rgba(156, 163, 175, var(--un-border-opacity)) !important;
      }

      &::placeholder {
        font-size: 0.75rem;
        line-height: 1rem;
        --un-text-opacity: 1;
        color: rgba(180, 180, 180, var(--un-text-opacity))
      }

    }

    span {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }

    button {
      --un-bg-opacity: 1;
      background-color: rgba(180, 180, 180, var(--un-bg-opacity));
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
      padding-left: 1.75rem;
      padding-right: 1.75rem;
      font-size: 0.75rem;
      line-height: 1rem;
      --un-text-opacity: 1;
      color: rgba(255, 255, 255, var(--un-text-opacity));
      transition-duration: 250ms;

      &:hover {
        --un-bg-opacity: 1;
        background-color: rgba(156, 163, 175, var(--un-bg-opacity));
      }
    }
  }

  .gjvyt3 {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;

    >:not([hidden])~:not([hidden]) {
      --un-space-y-reverse: 0;
      margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
      margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
    }

    @media (min-width: 768px) {
      max-width: 768px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      >:not([hidden])~:not([hidden]) {
        --un-space-y-reverse: 0;
        margin-top: calc(0rem * calc(1 - var(--un-space-y-reverse)));
        margin-bottom: calc(0rem * var(--un-space-y-reverse));
      }
    }

    @media (min-width: 1280px) {
      max-width: 1170px;
    }

    .zq2vkt {
      --un-bg-opacity: 1;
      background-color: rgba(180, 180, 180, var(--un-bg-opacity));
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      text-align: center;
      font-size: 0.75rem;
      line-height: 1rem;
      --un-text-opacity: 1;
      color: rgba(255, 255, 255, var(--un-text-opacity));
      transition-duration: 250ms;

      &:hover {
        --un-bg-opacity: 1;
        background-color: rgba(156, 163, 175, var(--un-bg-opacity));
      }

      @media (min-width: 768px) {
        padding-left: 5rem;
        padding-right: 5rem;
      }
    }

    .qfe555 {
      --un-bg-opacity: 1;
      background-color: rgba(242, 101, 34, var(--un-bg-opacity));
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      text-align: center;
      font-size: 0.75rem;
      line-height: 1rem;
      --un-text-opacity: 1;
      color: rgba(255, 255, 255, var(--un-text-opacity));
      transition-duration: 250ms;

      &:hover {
        --un-bg-opacity: 1;
        background-color: rgba(0, 56, 122, var(--un-bg-opacity));
      }

      @media (min-width: 768px) {
        padding-left: 5rem;
        padding-right: 5rem;
      }
    }
  }
}
</style>