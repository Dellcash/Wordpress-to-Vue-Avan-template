<script setup>
import { useTitle } from '@vueuse/core';
import { useRoute } from 'vue-router';
import { useBlog } from '../../stores/blog';

const route = useRoute()
const blog = useBlog()
const title = useTitle()

const item = blog.getBlog(route.params.id)
onMounted(() => {
    title.value = `${item.title} | فروشگاه آوان`
})
</script>

<template>
    <div>{{ item.title }}</div>
</template>

<style lang="scss" scoped>

</style>










