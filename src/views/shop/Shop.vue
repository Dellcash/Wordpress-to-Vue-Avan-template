<script setup>
import { useOffsetPagination, useArrayFilter } from '@vueuse/core'
import Slider from '@vueform/slider'
import img1 from '@/assets/shop_1.jpg'
import img2 from '@/assets/shop_2.jpg'
import img3 from '@/assets/shop_3.jpg'
import img4 from '@/assets/shop_4.jpg'
import img5 from '@/assets/shop_5.jpg'
import img6 from '@/assets/shop_6.jpg'

const data = ref([])
const database = ref([
  {
    id: 3,
    img: img3,
    title: 'راهنما باشید',
    link: '#',
    price: '23900',
    category: 'مالی',
    lang: 'فارسی',
    label: 'پربیننده‌ترین'
  },
  {
    id: 4,
    img: img4,
    title: 'گزارش سالانه',
    link: '#',
    price: '66500',
    category: 'اقتصاد',
    lang: 'انگلیسی',
    label: 'جدیدترین'
  },
  {
    id: 5,
    img: img5,
    title: 'مثل یک رییس فکر کن',
    link: '#',
    price: '40000',
    category: 'مالی',
    lang: 'انگلیسی',
    label: 'پربیننده‌ترین'
  },
  {
    id: 6,
    img: img6,
    title: 'فکر هوشمندانه سخت نیست',
    link: '#',
    price: '100000',
    category: 'سفر و کشف',
    lang: 'انگلیسی',
    label: 'جدیدترین'
  },
  {
    id: 1,
    img: img1,
    title: 'راه‌اندازی کسب و کار',
    link: '#',
    price: '120000',
    category: 'اقتصاد',
    lang: 'انگلیسی',
    label: 'پرفروش‌ترین'
  },
  {
    id: 2,
    img: img2,
    title: 'مدیریت زمان',
    link: '#',
    price: '35000',
    category: 'سفر و کشف',
    lang: 'انگلیسی',
    label: 'جدیدترین'
  },
])
const page = ref(1)
const pageSize = ref(4)

function fetch(page, pageSize) {
  return new Promise((resolve, reject) => {
    const start = (page - 1) * pageSize
    const end = start + pageSize
    resolve(database.value.slice(start, end))
  })
}

function fetchData({ currentPage, currentPageSize }) {
  fetch(currentPage, currentPageSize).then((responseData) => {
    data.value = responseData
  })
}

fetchData({
  currentPage: page.value,
  currentPageSize: pageSize.value,
})

const {
  currentPage,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total: database.value.length,
  page: 1,
  pageSize,
  onPageChange: fetchData,
  onPageSizeChange: fetchData,
})

const toFarsiNumber = (n) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const paginate = ref(true)
const activeCategory = ref('')
function setClass(title) {
  activeCategory.value = title
}
const byCategory = ref([
  {
    title: 'همه',
    function: () => {
      const byCategory = useArrayFilter(database.value.slice(1, 5), i => i.category)
      paginate.value = true
      return byCategory.value
    },
  },
  {
    title: 'مالی',
    function: () => {
      const byCategory = useArrayFilter(database, i => i.category === 'مالی')
      paginate.value = false
      return byCategory.value
    },
  },
  {
    title: 'سفر و کشف',
    function: () => {
      const byCategory = useArrayFilter(database, i => i.category === 'سفر و کشف')
      paginate.value = false
      return byCategory.value
    },
  },
  {
    title: 'کتاب‌های اقتصاد',
    function: () => {
      const byCategory = useArrayFilter(database, i => i.category === 'اقتصاد')
      paginate.value = false
      return byCategory.value
    }
  },
])

const search = ref([0, 66500])
const filterProducts = useArrayFilter(search, item => item.price)

const selected = ref('')
const sortingTitle = ref(['جدیدترین', 'پرفروش‌ترین', 'پربیننده‌ترین'])
const filteredLabel = () => {
  return database.value.filter(item => item.label === 'پربیننده‌ترین')
}
</script>

<template>
  <main class="bg-#e5eef6 flex justify-center">
    <section class="p5 hfull max-w-420px md:max-w-768px xl:max-w-85% xl:grid xl:grid-cols-12 xl:p0 xl:py18">
      <aside class="hidden xl:block col-span-3">
        <XyzTransition appear xyz="fade up-100%">
          <h1 class="text-lg">دسته بندی</h1>
        </XyzTransition>

        <XyzTransitionGroup appear xyz="fade right-100% appear-stagger" class="flex flex-col items-start mt3 space-y1">
          <button v-for="(category, index) in byCategory" :key="index"
            @click="data = category.function(), setClass(category.title)"
            :class="{ 'font-bold': category.title === activeCategory }"
            class="-tracking-1px text-gray-600 text-xs duration-250 hover:text-gray-400">
            {{ category.title }}
          </button>

          <div :key="5" class="!mt10 ml5 w-90%">
            <Slider id="search" :lazy="false" v-model="search" :min="100" :max="200000" showTooltip="focus"
              :disabled="true" direction="rtl" />
          </div>
          <div :key="6" class="o36jn2">
            <label for="search" v-for="price in search" :key="price" text="xs gray-600">{{
                toFarsiNumber(numberWithCommas((price)))
            }}
              تومان <span>-</span></label>
          </div>

          <h1 :key="7" class="text-base !mt5">زبان</h1>
          <div :key="8" class="!mt3 !my1 flex items-center">
            <input type="checkbox" id="en" p5>
            <label for="en" class="text-gray-600 text-xs mr2">انگلیسی</label>
          </div>
          <div :key="9" flex items-center>
            <input type="checkbox" id="ir">
            <label for="ir" class="text-gray-600 text-xs mr2">فارسی</label>
          </div>
        </XyzTransitionGroup>
      </aside>

      <div xl="col-start-4 col-end-13">
        <div>
          <select v-model="selected" name="sorting" id="sort" @change="data = filteredLabel()">
            <option v-for="sort in sortingTitle" :value="sort">{{
                sort
            }}</option>
          </select>
        </div>
        <XyzTransition appear xyz="fade duration-10">
          <div class="grid grid-cols-2 gap5 md:gap7">
            <div v-for="item in data" :key="item.id">
              <img :src="item.img" :alt="item.title"
                class="wfull md:w-100 md:h-20rem duration-250 hover:filter-invert-10">
              <div class="text-center bg-white p4">
                <h6 class="text-sm md:text-base">{{ item.title }}</h6>
                <h6 class="text-xs tracking-1px my3">{{ toFarsiNumber(numberWithCommas(item.price)) }} تومان</h6>
                <router-link :to="item.link"
                  class="text-xs bg-#f26522 text-white px4 py1.5 duration-250 hover:bg-#00387a">
                  افزودن به سبد خرید</router-link>
              </div>
            </div>
          </div>
        </XyzTransition>

        <div v-if="paginate" class="text-center text-xs text-#999999 mt5">
          <button v-if="!isFirstPage" :disabled="isFirstPage" @click="prev"
            class="mx2 border border-#999999 border-3 px2.5 py1 duration-250 hover:bg-#999999 hover:text-white">
            قبلی
          </button>
          <button v-for="item in pageCount" :key="item" :disabled="currentPage === item" @click="currentPage = item"
            class="mx2 border border-#999999 border-3 px2.5 py1 duration-250 hover:bg-#999999 hover:text-white"
            :class="currentPage === item ? 'opacity-50 hover:bg-transparent !hover:text-#999999' : ''">
            {{ toFarsiNumber(item) }}
          </button>
          <button v-if="!isLastPage" :disabled="isLastPage" @click="next"
            class="mx2 border border-#999999 border-3 px2.5 py1 duration-250 hover:bg-#999999 hover:text-white">
            بعدی
          </button>
        </div>
      </div>
    </section>
  </main>
</template> 

<style lang="scss" scoped>
.o36jn2 {
  margin-top: 0.5rem !important;
  display: flex;
  justify-content: flex-start;

  label:first-child {
    margin-left: 0.5rem;
  }

  label:last-child span {
    color: transparent
  }
}
</style>

<style src="@vueform/slider/themes/default.css">
</style>