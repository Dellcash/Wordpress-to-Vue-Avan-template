<script setup>
import { useMain } from '@/stores/main';
import { useRouter } from 'vue-router';

const main = useMain()
const router = useRouter()

const code = ref(main.toFarsiNumber(Math.floor(Math.random() * 100)))
onMounted(() => {
  setTimeout(() => {
    router.push('/')
  }, 3000);
})
</script>

<template>
  <main>
    <section>
      <div>
        <div i-carbon-checkmark-outline />
        <p>سفارش شما با موفقیت ثبت شد.</p>
        <p>کد رهگیری سفارش شما: {{ code }}#</p>
        <p>در صورتی که عضو سایت هستید، شما می توانید تاریخچه سفارش خود را با رفتن به صفحه ی حساب کاربری خود
          مشاهده نمایید.</p>
        <p>از خرید آنلاین شما سپاسگزاریم!</p>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  section {
    margin: auto;
    max-width: 420px;

    @screen md {
      max-width: 768px;
    }

    div {
      >:not([hidden])~:not([hidden]) {
        --un-space-y-reverse: 0;
        margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
        margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
      }

      display:flex;
      flex-direction:column;
      align-items:center;
      padding-left:1rem;
      padding-right:1rem;
      padding-top:3.75rem;
      padding-bottom:3.75rem;
      text-align:center;

      div {
        width: 6.25rem;
        height: 6.25rem;
        --un-text-opacity: 1;
        color: rgba(96, 165, 250, var(--un-text-opacity));
      }

      p {
        font-size: 0.875rem;
        line-height: 1.25rem;

        &:nth-child(2) {
          --un-text-opacity: 1;
          color: rgba(96, 165, 250, var(--un-text-opacity));
          font-size: 1.5rem;
          line-height: 2rem;
        }
      }
    }
  }
}
</style>