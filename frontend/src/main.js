import { createApp } from "vue";
import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import navBar from "./components/nav_bar.vue";
import VueCookies from "vue-cookies";
import cookie from './plugins/cookie'
import vIntersection from "vue-intersection-observer"
import { MotionPlugin } from '@vueuse/motion'

import { createHead } from '@vueuse/head'
const Head = createHead()


createApp(App).use(cookie).use(Head).use(router).use(store).use(VueCookies).use(MotionPlugin).use(vIntersection).component('navBar',navBar).mount('#app');




