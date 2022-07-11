<script setup>
import { useMain } from '../stores/main'
const main = useMain()
const socials = ref(['i-carbon-media-cast', 'i-carbon-logo-linkedin', 'i-carbon-logo-twitter', 'i-carbon-logo-instagram'])
</script>

<template>
  <header>
    <!-- top section -->
    <section class="ajhxwp">
      <div class="tvp50m">
        <div v-for="social in socials" :key="social" :class="social" class="i5g084" />
      </div>
      <p class="bpjgu8">ساعات پاسخگویی : شنبه تا جمعه - ساعت 8 صبح تا 9 بعد از ظهر</p>
    </section>

    <!-- 2nd section -->
    <section class="xmzt27">
      <div class="p7v3cs">
        <button class="htu87x" @click="main.toggled = !main.toggled">
          <div i-carbon-menu text-6 />
        </button>
        <img src="../assets/logo.png" alt="logo" class="h6769e">
        <h1 text-white>نام شرکت</h1>
      </div>

      <div class="n9s3hs">
        <div class="x1bevm" />
        <span class="r26vfk">۱</span>
      </div>

      <div class="p7v3cs">
        <div class="wpsxhe">
          <div class="h42dqj" />
          <p class="sy0wyc">آدرس خود را وارد کنید.</p>
        </div>
        <div class="l93a3n"></div>
        <h4 class="j9wffy">۰۲۱۵۵۵۱۸۰۶۷</h4>
        <div class="hjar0q" />
        <button class="ynha62" @click="main.toggled = !main.toggled">
          <div class="jk1yzi" />
        </button>
      </div>
    </section>

    <!-- 3td seciton on md screen -->
    <section class="uwojri">
      <div class="juxset">

        <!-- menu links on xl screen -->
        <div class="xfz0mb">
          <div space-x-5>
            <button v-for="link in main.links.part1" :key="link" first:ml5>
              <RouterLink :to="link.link" class="ndjxbp">
                {{
                    link.title
                }}
              </RouterLink>
            </button>
          </div>

          <div relative>
            <div class="j1e5hu" @mouseover="main.servicesBtn = true">
              <button class="m9zpfl">خدمات</button>
              <div class="o2mnln" />
            </div>

            <XyzTransition>
              <div v-if="main.servicesBtn" @mouseleave="main.servicesBtn = false" class="e3v947" xyz="fade">
                <button v-for="service in main.links.services" :key="service">
                  <RouterLink :to="service.link" class="e1q20h">{{
                      service.title
                  }}</RouterLink>
                </button>
              </div>
            </XyzTransition>
          </div>

          <div class="space-x-5">
            <button v-for="link in main.links.part2" :key="link" first:mx5>
              <RouterLink :to="link.link" class="ndjxbp">
                {{
                    link.title
                }}
              </RouterLink>
            </button>
          </div>
        </div>

        <div relative ml5>
          <div class="x1bevm" />
          <span class="fmdpc7">۱</span>
        </div>

        <div class="o92dur">
          <input type="text" placeholder="متن مورده نظر شما ..." class="fn034f">
          <button class="akukbe">جستجو</button>
        </div>
      </div>
    </section>
  </header>

  <Sidebar />
</template>

<style scoped>
.ajhxwp {
  --un-bg-opacity: 1;
  background-color: rgba(0, 44, 96, var(--un-bg-opacity));
  padding: 1rem;
  text-align: center;
  letter-spacing: -0.05em;
  --un-text-opacity: 1;
  color: rgba(243, 244, 246, var(--un-text-opacity));
}

.tvp50m {
  display: none;
}

.tvp50m> :not([hidden])~ :not([hidden]) {
  --un-space-x-reverse: 0;
  margin-left: calc(1.25rem * calc(1 - var(--un-space-x-reverse)));
  margin-right: calc(1.25rem * var(--un-space-x-reverse));
}

.bpjgu8 {
  font-size: 0.75rem;
  line-height: 1rem;
}

.i5g084 {
  font-size: 1.25rem;
}

.i5g084:first-child {
  margin-left: 1.25rem;
}

.xmzt27 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(0, 56, 122, var(--un-border-opacity));
  --un-bg-opacity: 1;
  background-color: rgba(0, 56, 122, var(--un-bg-opacity));
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 1rem;
  padding-right: 0.25rem;
}

.p7v3cs {
  display: flex;
  align-items: center;
}

.htu87x {
  margin-left: 1.25rem;
  display: none;
  --un-bg-opacity: 1;
  background-color: rgba(242, 101, 34, var(--un-bg-opacity));
  padding: 0.375rem;
  font-weight: 700;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.h6769e {
  margin-left: 0.5rem;
  width: 2.5rem;
}

.n9s3hs {
  position: relative;
}

.x1bevm {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Ccircle cx='10' cy='28' r='2' fill='currentColor'/%3E%3Ccircle cx='24' cy='28' r='2' fill='currentColor'/%3E%3Cpath fill='currentColor' d='M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z'/%3E%3Cpath fill='currentColor' d='M18 6V2h-2v4h-4v2h4v4h2V8h4V6h-4z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1em;
  height: 1em;
  cursor: pointer;
  font-size: 1.5rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.r26vfk {
  position: absolute;
  top: 0.5rem;
  left: 1.25rem;
  border-radius: 9999px;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding-left: 5px;
  padding-right: 0.3rem;
  padding-top: 1px;
  font-size: 9px;
}

.wpsxhe {
  margin-left: 5rem;
  display: none;
  align-items: flex-end;
}

.h42dqj {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z'/%3E%3Ccircle cx='16' cy='13' r='4' fill='none'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1em;
  height: 1em;
  margin-left: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  --un-text-opacity: 1;
  color: rgba(242, 101, 34, var(--un-text-opacity));
}

.sy0wyc {
  font-size: 0.75rem;
  line-height: 1rem;
  --un-text-opacity: 1;
  color: rgba(209, 213, 219, var(--un-text-opacity));
}

.l93a3n {
  position: absolute;
  top: 2.25rem;
  left: 12.5rem;
  display: none;
  height: 4.05rem;
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(75, 85, 99, var(--un-border-opacity));
  opacity: 0.5;
}

.j9wffy {
  font-size: 0.75rem;
  line-height: 1rem;
  --un-text-opacity: 1;
  color: rgba(229, 231, 235, var(--un-text-opacity));
}

.hjar0q {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M24 13h-2a3.003 3.003 0 0 0-3-3V8a5.006 5.006 0 0 1 5 5Z'/%3E%3Cpath fill='currentColor' d='M28 13h-2a7.008 7.008 0 0 0-7-7V4a9.01 9.01 0 0 1 9 9zm-7.667 8.482l2.24-2.24a2.167 2.167 0 0 1 2.337-.48l2.728 1.092A2.167 2.167 0 0 1 29 21.866v4.961a2.167 2.167 0 0 1-2.284 2.169C7.594 27.806 3.732 11.61 3.015 5.408A2.162 2.162 0 0 1 5.169 3h4.873a2.167 2.167 0 0 1 2.012 1.362l1.091 2.728a2.167 2.167 0 0 1-.48 2.337l-2.24 2.24s1.242 8.732 9.908 9.815z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1em;
  height: 1em;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  --un-text-opacity: 1;
  color: rgba(242, 101, 34, var(--un-text-opacity));
}

.ynha62 {
  --un-bg-opacity: 1;
  background-color: rgba(242, 101, 34, var(--un-bg-opacity));
  padding: 0.375rem;
  padding-right: 0.4rem;
  font-weight: 700;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.jk1yzi {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 6h24v2H4zm0 18h24v2H4zm0-12h24v2H4zm0 6h24v2H4z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1em;
  height: 1em;
  font-size: 1.5rem;
}

.uwojri {
  display: none;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(0, 56, 122, var(--un-border-opacity));
  --un-bg-opacity: 1;
  background-color: rgba(0, 56, 122, var(--un-bg-opacity));
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.juxset {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top-width: 1px;
  border-top-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(75, 85, 99, var(--un-border-opacity));
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.xfz0mb {
  display: none;
  flex: 1 1 0%;
  align-items: center;
  padding-right: 0.5rem;
}

.ndjxbp {
  font-size: 12px;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  transition-duration: 250ms;
}

.ndjxbp:hover {
  --un-text-opacity: 1;
  color: rgba(242, 101, 34, var(--un-text-opacity));
}

.j1e5hu {
  display: flex;
  align-items: flex-end;
}

.m9zpfl {
  font-size: 13px;
  font-weight: 500;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  transition-duration: 250ms;
}

.m9zpfl:hover {
  --un-text-opacity: 1;
  color: rgba(242, 101, 34, var(--un-text-opacity));
}

.o2mnln {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m16 28l-7-7l1.4-1.4l5.6 5.6l5.6-5.6L23 21z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1em;
  height: 1em;
  margin-bottom: 2px;
  margin-right: 4px;
  cursor: pointer;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  transition-duration: 250ms;
}

.o2mnln:hover {
  --un-text-opacity: 1;
  color: rgba(242, 101, 34, var(--un-text-opacity));
}

.e3v947 {
  position: absolute;
  top: 1.875rem;
  left: -3.75rem;
  width: 7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  padding-top: 0.25rem;
  --un-shadow: var(--un-shadow-inset) 0 25px 50px -12px var(--un-shadow-color, rgba(0, 0, 0, 0.25));
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
}

.e1q20h {
  font-size: 12px;
  font-weight: 700;
  transition-duration: 250ms;
}

.e1q20h:hover {
  --un-text-opacity: 1;
  color: rgba(242, 101, 34, var(--un-text-opacity));
}

.ndjxbp {
  font-size: 12px;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  transition-duration: 250ms;
}

.ndjxbp:hover {
  --un-text-opacity: 1;
  color: rgba(242, 101, 34, var(--un-text-opacity));
}

.x1bevm {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Ccircle cx='10' cy='28' r='2' fill='currentColor'/%3E%3Ccircle cx='24' cy='28' r='2' fill='currentColor'/%3E%3Cpath fill='currentColor' d='M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z'/%3E%3Cpath fill='currentColor' d='M18 6V2h-2v4h-4v2h4v4h2V8h4V6h-4z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1em;
  height: 1em;
  cursor: pointer;
  font-size: 1.5rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.fmdpc7 {
  position: absolute;
  top: 0.5rem;
  left: 1.25rem;
  border-radius: 9999px;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding-left: 5px;
  padding-right: 0.3rem;
  padding-top: 1px;
  font-size: 9px;
}

.o92dur {
  display: flex;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(75, 85, 99, var(--un-border-opacity));
}

.fn034f {
  width: 11.25rem;
  border-style: none;
  background-color: transparent;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.675rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.fn034f:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.fn034f::placeholder {
  --un-placeholder-opacity: 1;
  color: rgba(107, 114, 128, var(--un-placeholder-opacity));
}

.akukbe {
  --un-bg-opacity: 1;
  background-color: rgba(242, 101, 34, var(--un-bg-opacity));
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

@media (min-width: 640px) {
  .ajhxwp {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .xmzt27 {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media (min-width: 768px) {
  .ajhxwp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .tvp50m {
    display: flex;
  }

  .xmzt27 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
  }

  .htu87x {
    display: block;
  }

  .n9s3hs {
    display: none;
  }

  .wpsxhe {
    display: flex;
  }

  .hjar0q {
    margin-left: 0rem;
  }

  .ynha62 {
    display: none;
  }

  .uwojri {
    display: block;
  }
}

@media (min-width: 1024px) {
  .ajhxwp {
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .bpjgu8 {
    font-size: 14px;
  }

  .xmzt27 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .uwojri {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media (min-width: 1280px) {
  .ajhxwp {
    padding-left: 4.25rem;
    padding-right: 4.25rem;
  }

  .xmzt27 {
    padding-left: 4.25rem;
    padding-right: 4.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .htu87x {
    display: none;
  }

  .sy0wyc {
    font-size: 12px;
  }

  .l93a3n {
    display: block;
  }

  .uwojri {
    padding-left: 4.25rem;
    padding-right: 4.25rem;
  }

  .juxset {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .xfz0mb {
    display: flex;
  }

  .fmdpc7 {
    padding-right: 0.25rem;
    padding-right: 0.3rem !important;
    padding-left: 7px;
    font-size: 12px;
  }

  .fn034f {
    font-size: 0.5rem;
  }

  .akukbe {
    padding-top: 0.35rem;
    padding-bottom: 0.35rem;
    font-size: 0.5rem;
  }
}
</style>