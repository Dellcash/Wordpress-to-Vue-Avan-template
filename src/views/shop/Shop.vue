<script setup>
import { useOffsetPagination, useArrayFilter } from '@vueuse/core'
import { useMain } from '@/stores/main'
import { useShop } from '@/stores/shop';
import Slider from '@vueform/slider'

const main = useMain()
const shop = useShop()
const data = ref([])
const database = shop.database
const page = ref(1)
const pageSize = ref(4)

function fetch(page, pageSize) {
  return new Promise((resolve, reject) => {
    const start = (page - 1) * pageSize
    const end = start + pageSize
    resolve(shop.database.slice(start, end))
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
  total: database.length,
  page: 1,
  pageSize,
  onPageChange: fetchData,
  onPageSizeChange: fetchData,
})

const paginate = ref(true)
const activeCategory = ref('')
function setClass(title) {
  activeCategory.value = title
}
const byCategory = ref([
  {
    title: 'همه',
    function: () => {
      const byCategory = useArrayFilter(shop.database.slice(1, 5), i => i.category)
      paginate.value = true
      return byCategory.value
    },
  },
  {
    title: 'مالی',
    function: () => {
      const byCategory = useArrayFilter(shop.database, i => i.category === 'مالی')
      paginate.value = false
      return byCategory.value
    },
  },
  {
    title: 'سفر و کشف',
    function: () => {
      const byCategory = useArrayFilter(shop.database, i => i.category === 'سفر و کشف')
      paginate.value = false
      return byCategory.value
    },
  },
  {
    title: 'کتاب‌های اقتصاد',
    function: () => {
      const byCategory = useArrayFilter(shop.database, i => i.category === 'اقتصاد')
      paginate.value = false
      return byCategory.value
    }
  },
])

// const byCat = reactive({
//   title: ['مالی', 'سفر و کشف', 'اقتصاد'],
//   function: (title) => {
//     const byCategory = useArrayFilter(shop.database, i => i.category === title)
//     paginate.value = false
//     return byCategory.value
//   }
// })

const search = ref([0, 66500])
const filterProducts = useArrayFilter(search, item => item.price)

const sortType = ref('')
const sortingTitle = ref(['جدیدترین', 'پرفروش‌ترین', 'پربیننده‌ترین'])
const byLabel = (sortKey) => {
  return shop.database.filter(item => item.label === sortKey)
}

const langEn = ref('')
const langFa = ref('')
const byLang = reactive({
  byEn: () => {
    return shop.database.filter(item => item.lang === 'انگلیسی')
  },
  byFa: () => {
    return shop.database.filter(item => item.lang === 'فارسی')
  }
})
</script>

<template>
  <main>
    <section>
      <aside>
        <XyzTransition appear xyz="fade up-100%">
          <h1 class="t5kl3f">دسته بندی</h1>
        </XyzTransition>

        <XyzTransitionGroup appear xyz="fade right-100% appear-stagger" class="o7zpzw">
          <button v-for="(category, index) in byCategory" :key="index"
            @click="data = category.function(), setClass(category.title)"
            :class="{ 'font-bold': category.title === activeCategory }">
            {{ category.title }}
          </button>

          <div :key="5" class="p27hws">
            <Slider id="search" :lazy="false" v-model="search" :min="100" :max="200000" showTooltip="drag"
              :disabled="true" direction="rtl" />
          </div>
          <div :key="6" class="o36jn2">
            <label for="search" v-for="price in search" :key="price" text="xs gray-600">{{
            main.toFarsiNumber(main.numberWithCommas((price)))
            }}
              تومان <span>-</span></label>
          </div>

          <h1 :key="7" class="yscz1y">زبان</h1>
          <div :key="8" class="d6eub1">
            <input v-model="langEn" @change="data = byLang.byEn()" type="checkbox" id="en">
            <label for="en">انگلیسی</label>
          </div>
          <div :key="9" class="p7v3cs">
            <input v-model="langFa" @change="data = byLang.byFa()" type="checkbox" id="ir">
            <label for="ir">فارسی</label>
          </div>
        </XyzTransitionGroup>
      </aside>

      <div class="x43pgy">
        <XyzTransitionGroup appear xyz="fade right-100% appear-stagger" class="k19zgp">
          <h5 :key="1" class="sdiqwf">مرتب‌‌‌سازی بر اساس</h5>
          <select :key="2" v-model="sortType" @change="data = byLabel(sortType)" name="sorting" id="sort">
            <option value="" disabled selected hidden>طبقه بندی</option>
            <option v-for="title in sortingTitle" :value="title">{{ title }}</option>
          </select>
        </XyzTransitionGroup>

        <div class="vk7q89">
          <div v-for="item in data" :key="item.id">
            <router-link :to="`/shop/${item.id}`">
              <img :src="item.img" :alt="item.title">
            </router-link>
            <div class="u8jwx5">
              <h6 text="sm md:text-base">{{ item.title }}</h6>
              <h6 class="qbpzm0">{{ main.toFarsiNumber(main.numberWithCommas(item.price)) }} تومان</h6>
              <router-link :to="`/shop/${item.id}`" class="m561bo">مشاهده جزئیات</router-link>
            </div>
          </div>
        </div>

        <div v-if="paginate" class="ryfz1k">
          <button v-if="!isFirstPage" :disabled="isFirstPage" @click="prev">
            قبلی
          </button>
          <button v-for="item in pageCount" :key="item" :disabled="currentPage === item" @click="currentPage = item"
            :class="currentPage === item ? 'v812d1' : ''">
            {{ main.toFarsiNumber(item) }}
          </button>
          <button v-if="!isLastPage" :disabled="isLastPage" @click="next">
            بعدی
          </button>
        </div>
      </div>
    </section>
  </main>
</template> 

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  --un-bg-opacity: 1;
  background-color: rgba(229, 238, 246, var(--un-bg-opacity));

  section {
    height: 100%;
    max-width: 420px;
    padding: 1.25rem;

    @media (min-width: 768px) {
      max-width: 768px;
    }

    @media (min-width: 1280px) {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      max-width: 85%;
      padding: 0rem;
      padding-top: 4.5rem;
      padding-bottom: 4.5rem;
    }

    aside {
      grid-column: span 3/span 3;
      display: none;

      @media (min-width: 1280px) {
        display: block;
      }

      .t5kl3f {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 700;
      }

      .o7zpzw {
        margin-top: 0.75rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        >:not([hidden])~:not([hidden]) {
          --un-space-y-reverse: 0;
          margin-top: calc(0.25rem * calc(1 - var(--un-space-y-reverse)));
          margin-bottom: calc(0.25rem * var(--un-space-y-reverse));
        }

        button {
          font-size: 0.75rem;
          line-height: 1rem;
          letter-spacing: -1px;
          --un-text-opacity: 1;
          color: rgba(75, 85, 99, var(--un-text-opacity));
          transition-duration: 250ms;

          &:hover {
            --un-text-opacity: 1;
            color: rgba(156, 163, 175, var(--un-text-opacity));
          }
        }

        .p27hws {
          margin-top: 2rem !important;
          margin-left: 1.25rem;
          width: 90%;
        }

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

        .yscz1y {
          margin-top: 1.25rem !important;
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 700;
        }

        .d6eub1 {
          margin-top: 0.25rem !important;
          margin-bottom: 0.25rem !important;
          margin-top: 0.75rem !important;
          display: flex;
          align-items: center;

          label {
            margin-right: 0.5rem;
            font-size: 0.75rem;
            line-height: 1rem;
            --un-text-opacity: 1;
            color: rgba(75, 85, 99, var(--un-text-opacity));
          }
        }

        .p7v3cs {
          display: flex;
          align-items: center;

          label {
            margin-right: 0.5rem;
            font-size: 0.75rem;
            line-height: 1rem;
            --un-text-opacity: 1;
            color: rgba(75, 85, 99, var(--un-text-opacity));
          }
        }

      }
    }

    .x43pgy {
      @media (min-width: 1280px) {
        grid-column-start: 4;
        grid-column-end: 13;
      }

      .vk7q89 {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 1.25rem;
        gap: 1.25rem;

        img {
          width: 100%;
          transition-duration: 250ms;
          cursor: pointer;

          &:hover {
            --un-invert: invert(0.1);
            filter: var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia);
          }

          @media (min-width: 768px) {
            width: 25rem;
            height: 20rem;
          }
        }

        .u8jwx5 {
          --un-bg-opacity: 1;
          background-color: rgba(255, 255, 255, var(--un-bg-opacity));
          padding: 1rem;
          text-align: center;

          .qbpzm0 {
            margin-top: 0.75rem;
            margin-bottom: 0.75rem;
            font-size: 0.75rem;
            line-height: 1rem;
            letter-spacing: 1px;
          }

          .m561bo {
            --un-bg-opacity: 1;
            background-color: rgba(242, 101, 34, var(--un-bg-opacity));
            padding-left: 1.7rem;
            padding-right: 1.7rem;
            padding-top: 0.475rem;
            padding-bottom: 0.475rem;
            font-size: 0.75rem;
            line-height: 1rem;
            --un-text-opacity: 1;
            color: rgba(255, 255, 255, var(--un-text-opacity));
            transition-duration: 250ms;

            &:hover {
              --un-bg-opacity: 1;
              background-color: rgba(0, 56, 122, var(--un-bg-opacity));
            }

            @media(min-width: 768px) {
              letter-spacing: 1px;
            }
          }
        }
      }

      .k19zgp {
        margin-bottom: 1.25rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media (min-width: 1280px) {
          flex-direction: row;
          align-items: center;
        }

        .sdiqwf {
          margin-bottom: 0.5rem;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          --un-text-opacity: 1;
          color: rgba(75, 85, 99, var(--un-text-opacity));

          @media (min-width: 1280px) {
            margin-bottom: 0rem;
          }
        }

        select {
          width: 100%;
          border-width: 1px;
          border-style: solid;
          padding: 0.25rem;
          font-size: 12px;
          --un-text-opacity: 1;
          color: rgba(107, 114, 128, var(--un-text-opacity));

          &:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
          }

          @media (min-width: 768px) {
            width: 48%;
          }

          @media (min-width: 1280px) {
            margin-right: 0.75rem;
            width: 25%;
          }

          option {
            font-size: 12px;
            --un-text-opacity: 1;
            color: rgba(31, 41, 55, var(--un-text-opacity));
          }
        }
      }

      .ryfz1k {
        margin-top: 1.25rem;
        text-align: center;
        font-size: 0.75rem;
        line-height: 1rem;
        --un-text-opacity: 1;
        color: rgba(153, 153, 153, var(--un-text-opacity));

        button {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          border-width: 1px;
          border-style: solid;
          border-width: 3px;
          --un-border-opacity: 1;
          border-color: rgba(153, 153, 153, var(--un-border-opacity));
          padding-left: 0.625rem;
          padding-right: 0.625rem;
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
          transition-duration: 250ms;

          &:hover {
            --un-bg-opacity: 1;
            background-color: rgba(153, 153, 153, var(--un-bg-opacity));
            --un-text-opacity: 1;
            color: rgba(255, 255, 255, var(--un-text-opacity));
          }
        }

        .v812d1 {
          opacity: 0.5;

          &:hover {
            background-color: transparent !important;
            --un-text-opacity: 1 !important;
            color: rgba(153, 153, 153, var(--un-text-opacity)) !important;
          }
        }

      }
    }
  }
}
</style>

<style src="@vueform/slider/themes/default.css">

</style>