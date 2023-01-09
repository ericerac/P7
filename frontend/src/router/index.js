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
    meta:{
      title:"Marta Renyer Bernadette"
    },
    component: () => import("../views/Bernadette.vue"),
  },
  {
    name: "bio",
    path: "/bio",
    meta:{
      title:"Marta Renyer Biografia"
    },
    component: () => import("../views/bio.vue"),
  },
  {
    name: "kakos",
    path: "/kakos",
    meta:{
      title:"Marta Renyer Las Kakofonikas"
    },
    component: () => import("../views/kakos.vue"),
  },
  {
    name: "emperdonadas",
    path: "/emperdonadas",
    meta:{
      title:"Marta Renyer Las emperdonadas"
    },
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
    meta:{
      title:"Marta Renyer Home",
     
      
      // metaTags: [
      //   {
      //     name: 'description',
      //     content: 'the best spectacle'
      //   },
      //   {
      //     property: 'og:description',
      //     content: 'the best spectacle'
      //   }
      // ],
    },
    component: () => import("../views/portada.vue"),
    
  },
  {
    name: "ad1920384756ytrdehdk",
    path: "/ad1920384756ytrdehdk",
    meta:{
      requireAuth:true,

    },
    component: () => import("@/views/AdminPage.vue"),
  },
  {
    name: "calendar",
    path: "/cal",
    meta:{
      title:"Marta Renyer Calendar",
      
    },
    component: () => import("../views/calendari.vue"),
  },
  {
    name: "elvira",
    path: "/elvira",
    component: () => import("../views/elvira.vue"),
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
  // document.title = to.meta?.title ?? 'Default Title';
  // document.metaTags = to.meta?.metaTags ?? 'default value'
  

});

export default router;
