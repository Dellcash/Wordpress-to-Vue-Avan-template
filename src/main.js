import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueAnimXyz from '@animxyz/vue3'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@animxyz/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAnimXyz)

app.mount('#app')
