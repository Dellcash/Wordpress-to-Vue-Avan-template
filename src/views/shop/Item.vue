<script setup>
import { useShop } from '@/stores/shop';
import { useTitle } from '@vueuse/core'

const route = useRoute()
const shop = useShop()
const item = shop.getItem(route.params.id)
const title = useTitle()
title.value = `${item.title} | فروشگاه آوان`;
</script>

<template>
  <div>scr__nshot</div>
</template>

<style lang="scss" scoped>
</style>