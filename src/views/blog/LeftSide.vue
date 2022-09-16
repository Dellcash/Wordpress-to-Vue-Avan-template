<script setup>
import { useBlog } from '@/stores/blog';
import { useArrayFilter } from '@vueuse/shared';

const blogs = useBlog()

const categories = reactive({
    title: ['آگهی', 'مالی', 'صدمه شخصی', 'تجارت'],
    activeCategory: '',
    function: (title) => {
        categories.activeCategory = title
        return blogs.blogs = useArrayFilter(blogs.blogs, blog => blog.folder === title)
    }
})

const archive = reactive({
    date: useArrayFilter(blogs.blogs, blog => blog),
    function: (date) => {
        archive.date = date
        return blogs.blogs = useArrayFilter(blogs.blogs, blog => blog.date === archive.date)
    }
})
</script>

<template>
    <aside>
        <div class="first">
            <h1>نوشته‌های اخیر</h1>

            <div class="o3uvcn">
                <div v-for="blog in blogs.blogs" :key="blog" class="luw9ly">
                    <router-link :to="`/blogs/${blog.id}`">
                        <img :src="blog.img" :alt="blog.title" w30 object-cover h-3rem>
                    </router-link>

                    <div>
                        <h6>{{ blog.title }}</h6>
                        <h6>{{ blog.date }}</h6>
                    </div>
                </div>
            </div>
        </div>

        <div class="second">
            <h1>دسته بندی‌ها</h1>

            <div>
                <button v-for="(category, index) in categories.title" :key="index"
                    @click="categories.function(category)"
                    :class="{ 'font-bold': category === categories.activeCategory }" text-xs>{{ category }}</button>
            </div>
        </div>

        <div class="third">
            <h1>بایگانی</h1>

            <div>
                <button v-for="date in blogs.blogs" :key="date" @click="blogs.blogs=archive.function(date)" disabed
                    text-xs opacity-50>{{date.date}}</button>
            </div>
        </div>

        <div>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
aside {
    grid-column: span 2/span 2;
    display: none;
    --un-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--un-bg-opacity));
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;

    &>:not([hidden])~:not([hidden]) {
        --un-space-y-reverse: 0;
        margin-top: calc(1.75rem * calc(1 - var(--un-space-y-reverse)));
        margin-bottom: calc(1.75rem * var(--un-space-y-reverse));
    }

    @screen xl {
        display: block
    }

    .first {
        h1 {
            margin-bottom: 1.75rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
            letter-spacing: 1px;
        }

        .o3uvcn {
            border-top-width: 4px;
            border-top-style: solid;
            --un-border-opacity: 1;
            border-color: rgba(120, 113, 108, var(--un-border-opacity));
            padding-top: 0.5rem;

            &>:not([hidden])~:not([hidden]) {
                --un-space-y-reverse: 0;
                margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
                margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
            }

            .luw9ly {
                display: flex;

                &>:not([hidden])~:not([hidden]) {
                    --un-space-x-reverse: 0;
                    margin-left: calc(0.75rem * calc(1 - var(--un-space-x-reverse)));
                    margin-right: calc(0.75rem * var(--un-space-x-reverse));
                    --un-space-x-reverse: 1;
                }

                div {
                    width: 100%;

                    h6 {
                        font-size: 12px;
                    }
                }
            }
        }
    }

    .second {
        h1 {
            margin-bottom: 1.75rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
            letter-spacing: 1px;
        }

        div {
            margin-top: 1.75rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            border-top-width: 4px;
            border-top-style: solid;
            --un-border-opacity: 1;
            border-color: rgba(68, 64, 60, var(--un-border-opacity));
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }
    }

    .third {
        h1 {
            margin-bottom: 1.75rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
            letter-spacing: 1px;
        }

        div {
            margin-top: 1.75rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            border-top-width: 4px;
            border-top-style: solid;
            --un-border-opacity: 1;
            border-color: rgba(68, 64, 60, var(--un-border-opacity));
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }
    }
}
</style>