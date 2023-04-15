<template >
  <loader v-if="loading" />


  <div class="bloc_nav" v-if="navbarOk && namePage != 'post' && namePage != 'adminPage' ">
    <navbar :namePage="namePage" :dark="dark" @theme="dark = ($event)" />
  </div>

  <routerView />
  <div class="container-fluid-footer">
    <foot :dark="dark" />
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
      siteDat:"site data test description"
    };
  },

  components: {
    loader,
    navbar,
    foot,

  },

//   setup()
//   {
// const siteData = reactive({
//   title:"WwbSite test meta",
//   description:" description test page mais ne fonctionne pas avec les data",
// })

// useHead({
//   title:"web test meta title",
//   meta:[{
//     name:'description',
//     //  content:" web test description"
//     content:computed(()=> siteData.description)
//   }]
// })
//   },

  // beforeCreate(){
  // // adding title for current view/page using vue-i18n
  // let title = document.createElement(`title`)
  // title.innerText = (`something`)

  // document.querySelector(`head`).appendChild(title)
  // },

  created: function () {
    this.getNavData();
    this.getLocation()
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
        console.log("WATCH DARK TRUE", n);
        this.dark = true
        this.backGround = "rgb(22, 23, 29)"
        this.$store.commit("Theme", this.dark);
      }
      else if (n == false) {
        this.dark = false;
        this.backGround = "white"
        this.$store.commit("Theme", this.dark);
      }
      console.log("WATCH DARK APP", n, o);
    },
    langPage(n,o){
      console.log("LANG PAGE APP NEW",n);
      console.log("LANG PAGE APP OLD",o);
    }

  },
  methods: {
    getNavData() {
      const n = "navbar";
      this.$store.dispatch("getNavData", n).then((res) => {
        if (res) {
          console.log("RES GET NAV BAR APP");
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

html {
  /* background-color: rgb(252, 217, 164); */
}

html {}

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
  /* background-color: transparent; */
  margin-top: 0px;
  background-attachment: fixed;
  margin: auto;
  background-color: v-bind(backGround);
  /* background-color:rgb(22, 23, 29); */
  /* background: black; */
}

.container-fluid-footer {
  width: 100vw;
  margin: 0 auto
}

/* .nav{
  position:fixed;
  top:20px;
  right:30px;
  left:30px;
  z-index:1222;
} */
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
