import { createApp } from "vue";
import Vue from 'vue'
import App from "./App.vue";
//import component from 'src/components/font-awesome-icon'
import router from "./router";
import store from "./store";

import VueCookies from "vue-cookies";
import cookie from './plugins/cookie'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';





// Vue.use(BootstrapVue)


createApp(App).use(cookie).use(router).use(store).use(VueCookies).use(SetupCalendar,{}).mount('#app');




