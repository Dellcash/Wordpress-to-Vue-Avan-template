<script setup>
import { useMain } from '../stores/main';
import ChartBar from '../components/charBar'
import { useForm } from '../stores/form';

const form = useForm()

const main = useMain()
const steps = ref([
  {
    step: 'مرحله ۱',
    title: 'دریافت و ارزیابی',
    color: 'text-#00a651',
  },
  {
    step: 'مرحله ۲',
    title: 'آنالیز و برنامه‌ریزی',
    color: 'text-#f26522',
  },
  {
    step: 'مرحله ۳',
    title: 'پیاده‌سازی',
    color: 'text-#00387a',
  },
])
</script>

<template>
  <main>
    <section class="tvfmvh">
      <div space-y-5>
        <h1><strong text-2xl>کار خاص ما</strong></h1>
        <p text="xs gray-600">{{ main.description }}{{ main.description }}</p>
        <p text="xs gray-600">{{ main.description }}{{ main.description }}</p>
      </div>

      <div>
        <h3><strong text-xl>فرآیند ما</strong></h3>

        <div v-for="step in steps" :key="step" class="u3louo">
          <h6 :class="step.color">{{ step.step }}:</h6>
          <h6 class="hyldh2">{{ step.title }}</h6>
        </div>
      </div>

      <div>
        <h4><strong text-xl>نمودارهای تجزیه و تحلیل و آمار</strong></h4>

        <div class="c7aoo4">
          <ChartBar :height="400" />
        </div>
      </div>

      <div space-y-5>
        <h4><strong text-lg>آن چه که تو گرفتی ؟​​​​​​​</strong></h4>
        <p text="xs gray-600">{{ main.description }}{{ main.description }}</p>
      </div>
    </section>

    <section class="y1xd0b">
      <div class="i1kpj9">
        <h6 mb7><strong tracking-1px>آیا به پشتیبانی نیاز دارید !​​​​​​​</strong></h6>

        <div>
          <h6 class="w4fbpl">تلفن:</h6>
          <h6 text="#f26522 sm">۰۲۱۵۵۵۱۸۰۶۷</h6>
        </div>
        <div>
          <h6 class="w4fbpl">دفتر لندن:</h6>
          <p text="sm white">لطفا آدرس خود را وارد کنید.</p>
        </div>
        <div>
          <h6 class="w4fbpl">ایمیل:</h6>
          <h6 text="#f26522 sm">omiddellcash@gmail.com</h6>
        </div>
      </div>

      <form @submit.prevent="form.validation">
        <div class="rgnj1h">
          <div class="space-y-3">
            <div>
              <input v-model="form.form.username" type="text" placeholder="نام *" class="uqierm">
              <XyzTransition xyz="fade right">
                <p v-if="form.form.usernameErr">{{ form.form.usernameErr }}</p>
              </XyzTransition>
            </div>
            <div>
              <input v-model="form.form.email" type="email" placeholder="پست الکترونیک *" class="uqierm">
              <XyzTransition xyz="fade right">
                <p v-if="form.form.emailErr">{{ form.form.emailErr }}</p>
              </XyzTransition>
            </div>
            <div md:pb2 xl:pb3>
              <input v-model="form.form.message" type="text" placeholder="موضوع" class="uqierm">
            </div>
          </div>
          <div class="h41nnp">
            <textarea v-model="form.form.content" rows="6" placeholder="پیغام *" class="uqierm"></textarea>
            <XyzTransition xyz="fade up">
              <p v-if="form.form.contentErr">{{ form.form.contentErr }}</p>
            </XyzTransition>
          </div>
        </div>

        <button>
          <span v-if="!form.loading" text-xs>ارسال</span>
          <div v-else i-carbon-circle-dash />
        </button>
      </form>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  --un-bg-opacity: 1;
  background-color: rgba(229, 238, 246, var(--un-bg-opacity));
  padding: 1.25rem;

  @media (min-width: 768px) {
    padding: 2.5rem !important;

  }

  @media (min-width: 1280px) {
    display: flex;
    align-items: flex-start;
  }

  .tvfmvh {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin: auto;
    max-width: 420px;
    --un-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--un-bg-opacity));
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 2.5rem;
    padding-bottom: 1.25rem;

    >:not([hidden])~:not([hidden]) {
      --un-space-y-reverse: 0;
      margin-top: calc(2.5rem * calc(1 - var(--un-space-y-reverse)));
      margin-bottom: calc(2.5rem * var(--un-space-y-reverse));
    }

    @media (min-width: 768px) {
      max-width: 768px;
    }

    .u3louo {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      font-weight: 700;

      .hyldh2 {
        margin-right: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 100;
        letter-spacing: 0.5px;
      }
    }

    .c7aoo4 {
      margin-top: 1.25rem;
      --un-bg-opacity: 1;
      background-color: rgba(160, 146, 179, var(--un-bg-opacity));
      padding-top: 1.25rem;
      padding-right: 0.5rem;
    }

  }

  .y1xd0b {
    margin: auto;
    margin-top: 2rem;
    max-width: 420px;
    --un-bg-opacity: 1;
    background-color: rgba(0, 56, 122, var(--un-bg-opacity));
    padding: 2.5rem;

    @media (min-width: 768px) {
      max-width: 768px;
      display: flex;
      align-items: center;
    }

    @media (min-width: 1280px) {
      max-width: 100%;
      margin-top: 0rem;
      display: block;
    }

    .i1kpj9 {
      margin-bottom: 1.25rem;
      --un-text-opacity: 1;
      color: rgba(255, 255, 255, var(--un-text-opacity));

      >:not([hidden])~:not([hidden]) {
        --un-space-y-reverse: 0;
        margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
        margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
      }

      div {
        display: flex;
        align-items: center;

        .w4fbpl {
          margin-left: 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          --un-text-opacity: 1;
          color: rgba(156, 163, 175, var(--un-text-opacity));
        }

      }
    }

    .rgnj1h {
      margin-top: 2.5rem;

      @media (min-width: 768px) {
        margin-top: 0rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      @media (min-width: 1280px) {
        display: block;
      }

      .uqierm {
        width: 100%;
        padding-top: 0.375rem;
        padding-bottom: 0.375rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        --un-text-opacity: 1;
        color: rgba(0, 0, 0, var(--un-text-opacity));

        &::placeholder {
          font-size: 0.75rem;
          line-height: 1rem;
        }

        &:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
      }

      p {
        margin-top: 0.25rem;
        font-size: 0.75rem;
        line-height: 1.25rem;
        --un-text-opacity: 1;
        color: rgba(248, 113, 113, var(--un-text-opacity));
      }

      .h41nnp {
        margin-top: 0.75rem;

        @media (min-width: 768px) {
          margin-top: 0rem;
          margin-right: 0.75rem;
        }

        @media (min-width: 1280px) {
          margin-right: 0rem;
        }

      }
    }

    button {
      margin-top: 1.25rem;
      width: 100%;
      display: flex;
      justify-content: center;
      --un-bg-opacity: 1;
      background-color: rgba(242, 101, 34, var(--un-bg-opacity));
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      text-align: center;
      --un-text-opacity: 1;
      color: rgba(255, 255, 255, var(--un-text-opacity));

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      div {
        animation: spin 1s linear infinite;
        align-self: center;
        font-size: 1.75rem;

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
}
</style>