import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/js/bootstrap.js'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import VeeValidate from 'vee-validate';

const app = createApp(App)
// app.use(BootstrapVue);

app.use(router)

app.mount('#app')
