import { createRouter, createWebHistory } from "vue-router";

//  import login from "../components/Login.vue";
  //  const login = require("../components/Login .vue")
// import accueil from "@/views/Accueil.vue";
// import profil from "@/views/Profil.vue";



const routes = [
  {
    name: "Elvira",
    path: "/Elvira",
    component: () => import("../views/Elvira.vue"),
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
    name: "portada",
    path: "/portada",
  
    component: () => import("../views/portada.vue"),
    
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
  {
    name: "galerie",
    path: "/gal",
    component: () => import("../views/galerie.vue"),
  },
  {
    name: "galer",
    path: "/galer",
    component: () => import("../views/galer.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
