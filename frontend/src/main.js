import { createApp } from "vue";
import Vue from 'vue'
import App from "./App.vue";
//import component from 'src/components/font-awesome-icon'
import router from "./router";
import store from "./store";

import VueCookies from "vue-cookies";
import cookie from './plugins/cookie'



createApp(App).use(cookie).use(router).use(store).use(VueCookies).mount("#app");
