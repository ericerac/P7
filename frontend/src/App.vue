<template >
  <div  :class="{ bgDark: dark }" @click="logClick(false)">
  <loader v-if="loading" />

  
  <div class="bloc_nav" v-if=" href == '/ad1920384756ytrdehdk' ">
    
  </div>
  <div class="bloc_nav" v-else>
    <navbar :namePage="namePage" :dark="dark" @theme="dark = ($event)" 
    :isActive="isActive" @active="isActive = ($event)"
    />
  </div>
  <routerView />
  <div class="container-fluid-footer">
    <foot :dark="dark" />
  </div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import loader from './components/loader.vue';
import navbar from './components/nav_bar.vue';
import foot from './components/footer.vue';
import dataCookies from "./js/cookies"
import { ref, toRef, reactive, computed } from "vue"
import { useHead } from '@vueuse/head'


export default {
  name: 'App',
  data: function () {
    return {
      navbarOk: false,
      dark: ref(""),
      backGround: ref(""),
      siteDat:"site data test description",
      isActive:ref(""),
    };
  },

  components: {
    loader,
    navbar,
    foot,

  },

  created: function () {
    this.getNavData();
    this.getLocation();
   
  },
  computed: {
    ...mapState({
      loading: "loading",
      time: "time",
      namePage: "namePage",
      darkTheme: "darkTheme",
      langPage:"langPage"
    }),
    ...mapMutations(["Theme"]),
  },

  watch: {
    dark(n, o) {
      if (n == true) {
        // console.log("WATCH DARK TRUE", n);
        this.dark = true
        this.backGround = "rgb(22, 23, 29)"
        this.$store.commit("Theme", this.dark);
      }
      else if (n == false) {
        this.dark = false;
        this.backGround = "white"
        this.$store.commit("Theme", this.dark);
      }
      // console.log("WATCH DARK APP", n, o);
    },
    namePage(n,o){
       console.log("NAME PAGE APP NEW",n);
     if(n == "adminPage"){
      console.log("namePage");
     }
    }

  },
  methods: {
    logClick(x){
console.log("CLICK APP");
if (this.isActive == true){
  console.log("CLICK APP TRUE ACTIVE");
  this.isActive = x;
}
    },
    getNavData() {
      const n = "navbar";
      this.$store.dispatch("getNavData", n).then((res) => {
        if (res) {
          // console.log("RES GET NAV BAR APP");
            this.navbarOk = true;
          
        }
      });
    },
   
    getLocation() {
      this.$store.dispatch("getLoc")
        .then((res) => {
          this.DataCookies()
        })
    },

    async DataCookies() {
      let dataTheme = await dataCookies();
       this.dark = dataTheme.dark
      this.$store.commit("Theme", dataTheme.dark);

    },
  },
}
</script>

<style >
@import url("./styles/bloc_nav.css");
@import url("./styles/bloc-nav-c.css");
@import url("./styles/theme.css");

.view {
  margin: auto;
  background-color: black;
  height: 100%;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
  background-attachment: fixed;
  margin: auto;
  background-color: v-bind(backGround);
}

.container-fluid-footer {
  width: 100vw;
  margin: 0 auto
}


li {
  list-style: none;
}

/* TARNSITION  */

.route-enter-from {
  opacity: 0;
  transform: translateX(200px)
}

.route-enter-active {
  transition: all .3s ease-out
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}

.route-leave-active {
  transition: all .3s ease-in
}
</style>
