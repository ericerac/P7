import { createRouter, createWebHistory } from "vue-router";

//  import login from "../components/Login.vue";
  //  const login = require("../components/Login .vue")
// import accueil from "@/views/Accueil.vue";
// import profil from "@/views/Profil.vue";
import store from "../store/index"


const routes = [
  {
    name: "bernadette",
    path: "/bernadette",
    component: () => import("../views/Bernadette.vue"),
  },
  {
    name: "bio",
    path: "/bio",
    component: () => import("../views/bio.vue"),
  },
  {
    name: "kakos",
    path: "/kakos",
    component: () => import("../views/kakos.vue"),
  },
  {
    name: "emperdonadas",
    path: "/emperdonadas",
    component: () => import("../views/emperdonadas.vue"),
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
    meta:{
      requireAuth:true
    },
    component: () => import("@/views/AdminPage.vue"),
  },
  {
    name: "calendar",
    path: "/cal",
    component: () => import("../views/calendari.vue"),
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

router.beforeEach((to,from,next)=>{
  // console.log("TO",to);
  // console.log("FROM",from);
  if(to.matched.some((record)=> record.meta.requireAuth)){
    if(store.state.auth){
      next();
    } else{
      console.log("NO AUTH");
      // next({name:"login"});
      next();
    }
  
  } else{
    next();
  }
});

export default router;
