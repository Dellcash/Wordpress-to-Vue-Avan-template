<script setup>
import { useMain } from '../stores/main';
import { useForm } from '../stores/form';

const main = useMain()
const form = useForm()

const links = ref([
  {
    title: 'بلاگ',
    link: '#'
  },
  {
    title: 'ارتباط با ما',
    link: '#'
  },
  {
    title: 'خانه',
    link: '#'
  },
  {
    title: 'درباره ما',
    link: '#'
  },
  {
    title: 'ما چگونه کار می‌کنیم',
    link: '#'
  },
  {
    title: 'مشاوره مالی',
    link: '#'
  },
  {
    title: 'فروشگاه',
    link: '#'
  },
  {
    title: 'مشاغل جهانی',
    link: '#'
  }
])
</script>

<template>
  <footer class="dbzu14">
    <section class="jla703">
      <div class="g2zege">
        <div class="xap1v2">
          <div class="p7v3cs">
            <img src="../assets/logo.png" alt="logo" class="sr59zz">
            <h5 text-lg>نام شرکت</h5>
          </div>
          <div p3>
            <p class="z609p0">{{ main.description }}</p>
            <routerLink to="#" class="t0gzsu">درباره ما</routerLink>
          </div>
        </div>

        <div class="hidden md:block">
          <h3 class="h9h5ks">خدمات</h3>

          <div class="i87qry">
            <routerLink v-for="link in links" :key="link" :to="link.link" class="e72srp">{{
                link.title
            }}
            </routerLink>
          </div>
        </div>

        <div class="hidden md:block">
          <h3 class="h9h5ks">شرکت</h3>

          <div class="i87qry">
            <routerLink v-for="link in links" :key="link" :to="link.link" class="e72srp">{{
                link.title
            }}
            </routerLink>
          </div>
        </div>

        <div class="grid grid-cols-2 md:hidden">
          <div text-center>
            <h3 class="h9h5ks">خدمات</h3>

            <div class="i87qry">
              <routerLink v-for="link in links" :key="link" :to="link.link" class="e72srp">{{
                  link.title
              }}
              </routerLink>
            </div>
          </div>

          <div text-center>
            <h3 class="h9h5ks">شرکت</h3>

            <div class="i87qry">
              <routerLink v-for="link in links" :key="link" :to="link.link" class="e72srp">{{
                  link.title
              }}
              </routerLink>
            </div>
          </div>
        </div>

        <div class="pa3v2u">
          <h3 class="h9h5ks">اشتراک</h3>

          <form @submit.prevent="form.validation">
            <div space-y1>
              <div>
                <input v-model="form.form.username" type="text" placeholder="نام *" class="q1hwzp">
                <XyzTransition xyz="fade up">
                  <p v-if="form.form.usernameErr" class="w20xet ">{{ form.form.usernameErr }}</p>
                </XyzTransition>
              </div>
              <div>
                <input v-model="form.form.email" type="email" placeholder="پست الکترونیک *" class="q1hwzp">
                <XyzTransition xyz="fade up">
                  <p v-if="form.form.emailErr" class="w20xet">{{ form.form.emailErr }}</p>
                </XyzTransition>
              </div>
              <div>
                <input v-model="form.form.message" type="text" placeholder="موضوع" class="q1hwzp">
              </div>
              <div>
                <textarea v-model="form.form.content" cols="25" rows="3" placeholder="پیغام *"
                  class="q1hwzp"></textarea>
                <XyzTransition xyz="fade up">
                  <p v-if="form.form.contentErr" class="w20xet !mt0">{{ form.form.contentErr }}</p>
                </XyzTransition>
              </div>
            </div>

            <button class="ev29ll">
              <span v-if="!form.loading" text-xs>ارسال</span>
              <div v-else i-carbon-circle-dash animate-spin class="hjn312" />
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="l62nxb">
      <p class="g18nft">© ۲۰۲۲ تمامی حقوق برای این قالب محفوظ است​​​​​​​.</p>
    </section>
  </footer>
</template>

<style scoped>
.dbzu14 {
  --un-bg-opacity: 1;
  background-color: rgba(0, 56, 122, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.jla703 {
  display: flex;
  justify-content: center;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1.75rem;
  padding-bottom: 2.5rem;
}

.g2zege {
  max-width: 420px;
}

.g2zege>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(2.5rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(2.5rem * var(--un-space-y-reverse));
}

.p7v3cs {
  display: flex;
  align-items: center;
}

.sr59zz {
  margin-left: 1rem;
  width: 3.75rem;
}

.t0gzsu {
  --un-text-opacity: 1;
  color: rgba(156, 163, 175, var(--un-text-opacity));
  text-decoration-line: underline;
}

.z609p0 {
  padding-bottom: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.ev29ll {
  margin-top: 0.5rem;
  --un-bg-opacity: 1;
  background-color: rgba(242, 101, 34, var(--un-bg-opacity));
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  opacity: 0.9;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition-duration: 250ms;
}

.ev29ll:hover {
  --un-bg-opacity: 1;
  background-color: rgba(0, 44, 96, var(--un-bg-opacity));
}

.hjn312 {
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.h9h5ks {
  margin-bottom: 1.25rem;
  display: inline-block;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  font-size: .85rem;
  line-height: 1.75rem;
}

.i87qry {
  display: flex;
  flex-direction: column;
}

.i87qry>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(0.50rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(0.50rem * var(--un-space-y-reverse));
}

.e72srp {
  font-size: 0.65rem;
  line-height: 1rem;
  --un-text-opacity: 1;
  color: rgba(243, 244, 246, var(--un-text-opacity));
  text-decoration-line: underline;
  -webkit-text-decoration-color: rgba(156, 163, 175, var(--un-line-opacity));
  --un-line-opacity: 1;
  text-decoration-color: rgba(156, 163, 175, var(--un-line-opacity));
}

.q1hwzp {
  width: 100%;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  padding-left: .75rem;
  padding-right: .75rem;
  --un-text-opacity: 1;
  color: rgba(0, 0, 0, var(--un-text-opacity));
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.q1hwzp::placeholder {
  font-size: 0.55rem;
  line-height: 1rem;
}

.w20xet {
  margin-top: 0.25rem;
  font-size: 0.55rem;
  line-height: 1rem;
  --un-text-opacity: 1;
  color: rgba(248, 113, 113, var(--un-text-opacity));
}

.l62nxb {
  --un-bg-opacity: 1;
  background-color: rgba(0, 44, 96, var(--un-bg-opacity));
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.g18nft {
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --un-text-opacity: 1;
  color: rgba(243, 244, 246, var(--un-text-opacity));
}

@media (min-width: 768px) {
  .g2zege {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 640px;
    grid-gap: 2.5rem;
    gap: 2.5rem;
  }

  .g2zege>:not([hidden])~:not([hidden]) {
    --un-space-y-reverse: 0;
    margin-top: calc(0rem * calc(1 - var(--un-space-y-reverse)));
    margin-bottom: calc(0rem * var(--un-space-y-reverse));
  }
}

@media (min-width: 1280px) {
  .jla703 {
    padding-left: 5rem !important;
    padding-right: 5rem !important;
  }

  .g2zege {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    max-width: 100%;
  }

  .xap1v2 {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .pa3v2u {
    grid-column-start: 5;
    grid-column-end: 7;
  }

}
</style>