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
    <section>
      <div class="max-w-420px m-auto bg-white pt10 pb5 px5 space-y10 grid grid-cols-1">
        <div space-y-5>
          <h1><strong text-2xl>کار خاص ما</strong></h1>
          <p text="xs gray-600">{{ main.description }}{{ main.description }}</p>
          <p text="xs gray-600">{{ main.description }}{{ main.description }}</p>
        </div>

        <div>
          <h3><strong text-xl>فرآیند ما</strong></h3>

          <div v-for="step in steps" :key="step" class="flex fw-bold items-center mt4">
            <h6 :class="step.color">{{ step.step }}:</h6>
            <h6 class="mr2 fw-100 text-sm tracking-.5px">{{ step.title }}</h6>
          </div>
        </div>

        <div>
          <h4><strong text-xl>نمودارهای تجزیه و تحلیل و آمار</strong></h4>

          <div class="bg-#a092b3 pt5 pr2 mt5">
            <ChartBar :height="400" />
          </div>
        </div>

        <div space-y-5>
          <h4><strong text-lg>آن چه که تو گرفتی ؟​​​​​​​</strong></h4>
          <p text="xs gray-600">{{ main.description }}{{ main.description }}</p>
        </div>
      </div>
    </section>

    <section>
      <div class="max-w-420px m-auto bg-#00387a p10 mt8">
        <div space-y3 text-white mb5>
          <h6 mb7><strong tracking-1px>آیا به پشتیبانی نیاز دارید !​​​​​​​</strong></h6>

          <div class="flex items-center">
            <h6 text="gray sm" ml2>تلفن:</h6>
            <h6 text="#f26522 sm">۰۲۱۵۵۵۱۸۰۶۷</h6>
          </div>
          <div class="flex items-center">
            <h6 text="gray sm" ml2>دفتر لندن:</h6>
            <p text="sm white">لطفا آدرس خود را وارد کنید.</p>
          </div>
          <div class="flex items-center">
            <h6 text="gray sm" ml2>ایمیل:</h6>
            <h6 text="#f26522 sm">omiddellcash@gmail.com</h6>
          </div>
        </div>

        <form @submit.prevent="form.validation">
          <div mt10>
            <div class="space-y-3">
              <div>
                <input v-model="form.form.username" type="text" placeholder="نام *"
                  class="wfull text-black py1.5 px2 focus:outline-none">
                <XyzTransition xyz="fade right">
                  <p v-if="form.form.usernameErr" class="text-red text-sm mt1">{{ form.form.usernameErr }}</p>
                </XyzTransition>
              </div>
              <div>
                <input v-model="form.form.email" type="email" placeholder="پست الکترونیک *"
                  class="wfull text-black py1.5 px2 focus:outline-none">
                <XyzTransition xyz="fade right">
                  <p v-if="form.form.emailErr" class="text-red text-sm mt1">{{ form.form.emailErr }}</p>
                </XyzTransition>
              </div>
              <div>
                <input v-model="form.form.message" type="text" placeholder="موضوع"
                  class="wfull text-black py1.5 px2 focus:outline-none">
              </div>
            </div>
            <div mt3>
              <textarea v-model="form.form.content" rows="6" placeholder="پیغام *"
                class="wfull text-black py1.5 px2 focus:outline-none"></textarea>
              <XyzTransition xyz="fade up">
                <p v-if="form.form.contentErr" class="text-red text-sm mt1">{{ form.form.contentErr }}</p>
              </XyzTransition>
            </div>
          </div>

          <button class="wfull bg-#f26522 text-white text-center py3 mt5 focus:outline-none flex justify-center">
            <span v-if="!form.loading" text-xs>ارسال</span>
            <div v-else i-carbon-circle-dash animate-spin class="self-center text-7 " />
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  --un-bg-opacity: 1;
  background-color: rgba(229, 238, 246, var(--un-bg-opacity));
  padding: 1.25rem;
}
</style>