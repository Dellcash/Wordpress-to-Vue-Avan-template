<script setup>
const toggled = ref(false)
</script>

<template>
  <button class="bg-red p2" @click="toggled = !toggled">
    <div i-carbon-menu />
  </button>

  <Sidebar :toggled="toggled" />
</template>

<style lang="scss" scoped>
</style>