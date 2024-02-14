
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import '@/assets/scss/global.scss'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.config.globalProperties.msg = '';

app.provide("$axios", axios);
app.component("VueDatePicker", VueDatePicker);

app.mount('#app')
