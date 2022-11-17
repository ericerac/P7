import { createRouter, createWebHistory } from "vue-router";

//  import login from "../components/Login.vue";
  //  const login = require("../components/Login .vue")
// import accueil from "@/views/Accueil.vue";
// import profil from "@/views/Profil.vue";



const routes = [
  {
    name: "accueil",
    path: "/accueil",
    component: () => import("../views/Accueil.vue"),
  },

  {
    name: "login",
    path: "/login",
    
    component: () => import("../components/Login .vue"),
    
  },
  {
    name: "test",
    path: "/test",
    
    component: () => import("../views/test.vue"),
    
  },


  {
    name: "ad1920384756ytrdehdk",
    path: "/ad1920384756ytrdehdk",
    component: () => import("@/views/AdminPage.vue"),
  },
  {
    name: "calentar",
    path: "/cal",
    component: () => import("../views/test.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
