<template>
  <Header />
  <RouterView />
</template>

<style>
@font-face {
  font-family: "IRANSans";
  src: url("./fonts/FontsFree-Net-ir_sans.ttf");
}

* {
  font-family: "IRANSans";
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
</style>