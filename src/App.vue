<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<style>
@font-face {
  font-family: "IRANSans";
  src: url("./fonts/FontsFree-Net-ir_sans.ttf");
}

* {
  font-family: "IRANSans";
  font-size: calc(12px + (24 - 14) * ((100vw - 300px) / (1600 - 300)));
}

input[type=checkbox] {
  zoom: 1.2;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(https://api.iconify.design/carbon:chevron-down.svg);
  background-position: 2%;
  background-repeat: no-repeat;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button:focus {
  outline: 0;
}

a:focus {
  outline: 0
}
</style>