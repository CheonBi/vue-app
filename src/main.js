
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import '@/assets/scss/global.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.axios=axios;



app.mount('#app')
