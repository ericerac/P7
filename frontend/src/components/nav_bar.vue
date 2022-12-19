<template lang="cat">
    <div class="container-fluid col-12 text-center justify-content-center">
        <header class="row col-12">
            
            <navbar class="nav_bar" v-if="isActive">
                <ul class="navbare  col-12"  >
                    
                    <li> <img class="logo rounded-circle" src="../assets/logo/logo.png" alt="logo"></li>
                    <li> <router-link to="/portada">{{navData[0].l_1}}</router-link></li>
                    <li><router-link to="/bio"> {{navData[0].l_2}}</router-link></li>
                    <li> <a href="#spectacle"> {{navData[0].l_3}}</a></li>
                    <li><router-link to="/portada"> {{navData[0].l_4}}</router-link></li>
                    <li><router-link to="/cal"> {{navData[0].l_5}}</router-link></li>
                    <li><router-link to="/portada"> {{navData[0].l_6}}</router-link></li>
                    <li><span><img @click="lang('cat')" class="logo_flag" src="../assets/logo/catalonia2.png"></span>
            <span><img @click="lang('es')" class="logo_flag" src="../assets/logo/spain.png"></span>
            <span><img @click="lang('fr')" class="logo_flag" src="../assets/logo/france.png"></span></li>
                </ul>
           


            </navbar>

            <button type="button"  @click="isActive = !isActive" class="btn_nav" :class="{ active: isActive }">
               <span class="lineN l1"></span>
               <span class="lineN l2"></span>
               <span class="lineN l2"></span>
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
      isActive: true,

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

    //  this.getNavData();


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
    
  },
  
  modules: {
    navDisplay: "navDisplay",
  },
  methods: {
    getNavData() {
      const n = "navbar";
      this.$store.dispatch("getNavData", n)
        .then((res) => {
          if (res) {
            console.log("RES GET NAV BAR", res.data[0].name);
            let p = res.data[0].name
           
          }
        });
      console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
    },

    
    
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
}

.nav_bar {
  position: relative;
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

.navbare {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: auto;
  margin-top: 20px;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  animation: apparition 900ms ease-in-out forwards;
}

.menu {
  display: flex;
  flex-direction: column;
  background-color: brown;
  height: 200px;
}

@media screen and (max-width: 600px) {
  .navbare {
    flex-direction: column;
  }

  .l1 {
    width: 20px;
    height: 2px;
    background-color: rgb(248, 9, 9);
    position: absolute;
    top: 20px;
    right: 30px;
  }

  .l2 {
    width: 20px;
    height: 2px;
    background-color: rgb(248, 9, 9);
    position: absolute;
    top: 25px;
    right: 30px;
  }

  .l3 {
    width: 20px;
    height: 2px;
    background-color: rgb(248, 9, 9);
    position: absolute;
    top: 30px;
    right: 30px;
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
