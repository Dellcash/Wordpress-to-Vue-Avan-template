<script setup>
import { useMain } from '../stores/main'

const main = useMain()

const enter = (el) => {
  el.style.height = 'auto'
  const height = getComputedStyle(el).height
  el.style.height = 0

  getComputedStyle(el)
  setTimeout(() => {
    el.style.height = height
  });
}
const afterEnter = (el) => {
  el.style.height = 'auto'
}
const leave = (el) => {
  el.style.height = getComputedStyle(el).height
  getComputedStyle(el)
  setTimeout(() => {
    el.style.height = 0
  });
}  
</script>

<template>
  <aside relative z-20>
    <XyzTransition>
      <div class="w1msll" xyz="fade" v-if="main.toggled" @click="main.toggled = false"></div>
    </XyzTransition>

    <XyzTransition xyz="flip-right origin-right">
      <div class="ir78cg" v-if="main.toggled">

        <div class="m9c7sb">
          <img src="../assets/logo.png" alt="logo" class="p4im6e">
          <div class="h2oequ" xyz="flip-up-5 delay-2.5 duration-4" @click="main.toggled = false" />
        </div>

        <div space-y-4>
          <div class="ikwtbb">
            <RouterLink :to="link.link" v-for="link in main.links.part1" :key="link" class="rhht62">{{
                link.title
            }}
            </RouterLink>
          </div>

          <!-- services -->
          <div pr2>
            <div class="p7v3cs">
              <div class="wieavw">
                <div class="n4ilpk" @click="main.servicesBtn = !main.servicesBtn"
                  :class="main.servicesBtn == true ? '' : '-rotate-90'" />
              </div>
              <div class="vhazg5">
                <div class="a38mgg" @click="main.servicesBtn = !main.servicesBtn" />
              </div>
              <button class="xth5mc">خدمات</button>
            </div>

            <Transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
              <div v-if="main.servicesBtn" mr-10 flex flex-col>
                <RouterLink :to="service.link" v-for="service in main.links.services" :key="service" class="m1bmsc">{{
                    service.title
                }}
                </RouterLink>
              </div>
            </Transition>
          </div>

          <div class="ikwtbb">
            <RouterLink :to="link.link" v-for="link in main.links.part2" :key="link" class="rhht62">{{ link.title }}
            </RouterLink>
          </div>
        </div>
      </div>
    </XyzTransition>
  </aside>
</template>

<style scoped>
.w1msll {
  position: fixed;
  top: 0rem;
  left: 0rem;
  display: block;
  width: 100%;
  height: 100%;
  --un-bg-opacity: 0.5;
  background-color: rgba(0, 0, 0, var(--un-bg-opacity));
}

.ir78cg {
  position: fixed;
  top: 0rem;
  right: 0rem;
  z-index: 10;
  width: 240px;
  height: 100%;
  overflow: scroll;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding-right: 0.5rem;
  font-size: 12px;
  --un-shadow: var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
}

.m9c7sb {
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.p4im6e {
  width: 2.5rem;
  --un-invert: invert(0.1);
  filter: var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia);
}

.h2oequ {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1em;
  height: 1em;
  cursor: pointer;
  font-size: 1.75rem;
  transition-duration: 250ms;
}

.h2oequ:hover {
  --un-text-opacity: 1;
  color: rgba(156, 163, 175, var(--un-text-opacity));
}

.ikwtbb {
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
}

.ikwtbb>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(1rem * var(--un-space-y-reverse));
}

.rhht62 {
  transition-duration: 250ms;
  font-size: 0.75rem
}

.rhht62:hover {
  color: rgba(156, 163, 175, 1);
}

.p7v3cs {
  display: flex;
  align-items: center;
}

.wieavw {
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(75, 85, 99, var(--un-border-opacity));
  border-radius: 9999px;
}

.expand-enter-active,
.expand-leave-active {
  transition: height .25s ease-in-out;
  overflow: hidden;
}

.n4ilpk {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M8 15h16v2H8z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1em;
  height: 1em;
  cursor: pointer;
  font-size: 14px;
  transition-duration: 250ms;
}

.vhazg5 {
  position: absolute;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(156, 163, 175, 0.1);
  border-radius: 9999px;
}

.a38mgg {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M8 15h16v2H8z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1em;
  height: 1em;
  cursor: pointer;
  font-size: 14px;
}

.xth5mc {
  margin-right: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.m1bmsc {
  margin-top: 1rem;
  transition-duration: 250ms;
  font-size: 0.75rem
}

.m1bmsc:first-child {
  margin-top: 0.5rem;
}

.m1bmsc:hover {
  color: rgba(156, 163, 175, 1);
}

.ikwtbb {
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
}

.ikwtbb>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(1rem * var(--un-space-y-reverse));
}

@media (min-width: 768px) {
  .ir78cg {
    width: 300px;
  }
}
</style>