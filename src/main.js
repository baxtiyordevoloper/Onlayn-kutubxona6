import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router  from "@/plugins/router.js";
import {createPinia} from "pinia";
import i18n from "@/i18n/i18n.js";


createApp(App)
    .use(createPinia())
    .use(i18n)
    .use(router)
    .mount('#app')
