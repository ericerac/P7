<template lang="cat">
    <div class="container-fluid col-12 text-center justify-content-center">
        <header class="row col-12">
            
            <navbar class="nav_bar" v-if="isActive" >
                <ul class="navbare  col-12"  >
                    
                    <li> <img class="logo rounded-circle" src="../assets/logo/logo.png" alt="logo"></li>
                    <li> <router-link to="/portada">{{navData[0].l_1}}</router-link></li>
                    <li><router-link to="/bio"> {{navData[0].l_2}}</router-link></li>
                    <li class="show-nav"> <a href="#spectacle"> {{navData[0].l_3}}</a>
                    <ul class="show-list">
                      <li class="item-show-list"><router-link to="/kakos"> Kakofonikas</router-link></li>
                      <li class="item-show-list"><router-link to="/emperdonadas">Emperdonadas</router-link></li>
                      <li class="item-show-list"><router-link to="/bernadette">Bernadette</router-link></li>
                      <li class="item-show-list"><router-link to="/creation">Creation</router-link></li>
                    </ul>
                    </li>
                    <li><router-link to="/portada"> {{navData[0].l_4}}</router-link></li>
                    <li><router-link to="/cal"> {{navData[0].l_5}}</router-link></li>
                    <li><router-link to="/portada"> {{navData[0].l_6}}</router-link></li>
                    <li class="idiomes"><span class="idioma" @click="lang('cat')" >Cat</span>
            <span class="idioma" @click="lang('es')">Es</span>
            <span class="idioma" @click="lang('fr')">Fr</span></li>
                    <!-- <li><span><img @click="lang('cat')" class="logo_flag" src="../assets/logo/catalonia2.png"></span>
            <span><img @click="lang('es')" class="logo_flag" src="../assets/logo/spain.png"></span>
            <span><img @click="lang('fr')" class="logo_flag" src="../assets/logo/france.png"></span></li> -->
                </ul>
           


            </navbar>

            <button type="button"  @click="isActive = !isActive" class="btn_nav" :class="{ active: isActive }" >
               <span class="lineN l1"></span>
               <span class="lineN l2"></span>
               <span class="lineN l3"></span>
            </button>
    

        </header>
    </div>
</template>



<script>


import {mapState} from "vuex";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();



export default {
  name: "navBar",

  data() {
    return {
      isActive: "",

    };
  },
  beforeMount: function () {
    //     if ($cookies.get("admin")) {

    //       let userCookies = $cookies.get("admin");

    //       this.userId = userCookies.userId;
    //       let logon = userCookies.userLogon;

    //       data = {
    //         userId: this.userId,

    //       }

      this.viewWidth();


    //       this.getNewArticle(logon);
    //     } else {
    //       this.$router.push("/");
    //     }
    // console.log("ENV VAIABLES",VUE_APP_PAGE1_NAME);
  },
  computed:{
...mapState({
      
      navData: "navData",
      // lang:"lang",
      

    }),

//     viewWidth(){
//   if(window.innerWidth < 576){
//     console.log("VIEWPORT",window.innerWidth );
//     this.isActive = false
//   }else {
//     console.log("VIEWPORT LARGE",window.innerWidth );
//     this.isActive = true
//   }
// },


  },
  
  modules: {
    navDisplay: "navDisplay",
  },
  methods: {

    viewWidth(){
  if(window.innerWidth < 576){
    console.log("VIEWPORT",window.innerWidth );
    this.isActive = false
  }else {
    console.log("VIEWPORT LARGE",window.innerWidth );
    this.isActive = true
  }
},
    // getNavData() {
    //   const n = "navbar";
    //   this.$store.dispatch("getNavData", n)
    //     .then((res) => {
    //       if (res) {
    //         console.log("RES GET NAV BAR", res.data[0].name);
    //         let p = res.data[0].name
           
    //       }
    //     });
    //   console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
    // },

    
    
    lang (l) {
      console.log("LANGUE---->",l);
      cookies.set("lang", JSON.stringify({"lang":l}));
     
      location.reload();
    },
  },

};
</script>


<style scoped>

 @import url('https://fonts.googleapis.com/css2?family=Unna&display=swap'); 
 @import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap');
.container-fluid {
  scroll-behavior: smooth;
  z-index: 12;
}
.btn_nav{
  border:none
}
.nav_bar {
  /* position: relative; */
}

ul {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: white;
}

a:active {
  color: red;
}

.row {
  position: relative;
  margin: 0 ;
}

.logo {
  width: 40px;
  height: 40px;
  transform: scale(1.3);
}

.logo_flag{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left:10px
}

li {
  text-decoration: none;
  list-style-type: none;
  /* font-family: 'Sawarabi Mincho', serif; */
  font-family: 'Unna', serif;
  font-size: 22px;
  font-weight: 700;
  padding-top: 5px;
}

.idiomes{
  
  font-size: 15px;
  align-items: center;
  line-height: 40px;
}

.idioma{
  margin:0 10px
}

.navbare {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 50px;
  margin-top: 20px;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  animation: apparition 900ms ease-in-out forwards;
}
.show-nav{
  position: relative;
}
.show-list{
  position:absolute;
  top:50px;
  left:-13%;
  display:none;
  background-color: rgba(0, 0, 0, 0.6); 
  width: inherit;
}
.item-show-list{
  border-bottom: 2px solid rgba(149, 149, 149, 0.6);
  padding:  5px;
  font-size: 18px;
}
.item-show-list:hover{
  background-color: rgba(149, 149, 149, 0.6);
}
.show-nav:hover > ul{
display: block;
transition: 200ms;
}
.menu {
  display: flex;
  flex-direction: column;
  background-color: brown;
  height: 200px;
}

@media screen and (max-width: 576px) {
  .logo{
    display:none;
  }
  .navbare {
    flex-direction: column;
    animation: apparition 200ms ease-in-out forwards;
    height: auto;
  }
  .show-list{
  position:absolute;
  top:10px;
  left:-87%;
  display:none;
  background-color: rgba(0, 0, 0, 0.6); 
  width: inherit;
}
.row{
  width: 100%;
  margin: 0 ;
}
  .l1 {
    width: 20px;
    height: 2px;
    background-color: rgb(248, 9, 9);
    position: absolute;
    top: 15px;
    right: 20px;
  }

  .l2 {
    width: 20px;
    height: 2px;
    background-color: rgb(248, 9, 9);
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .l3 {
    width: 20px;
    height: 2px;
    background-color: rgb(248, 9, 9);
    position: absolute;
    top: 25px;
    right: 20px;
  }
}

@media screen and (min-width: 600px) {
  .btn_nav {
    display: none;
  }
}

@keyframes apparition {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
