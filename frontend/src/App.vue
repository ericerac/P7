<template>


  <loader v-if="loading"/>
  <!-- <div v-if="modal">
<ModalMessageVue />
</div> -->
   <!-- <bgKakos/> -->
   <!-- <div class="nav"><navbar /></div> -->
   
<!-- <routerView  v-slot="{ Component }">
  <transition name="route" mode="out-in" appear>
  <component :is="Component">

  </component>

  </transition>
</routerView> -->

<routerView/>
  <!-- <router-view class="view">
    <bgKakos />
  </router-view> -->

</template>

<script>
import { mapState } from 'vuex';
import loader from './components/loader.vue';
import   navbar from './components/nav_bar.vue';
// import bgKakos from './components/bgKakos.vue';


export default {
  name: 'App',
  data: function () {
    return {
      // detailUser: "",
      // modalMessageVue: "modalMessage",
    };
  },
  components: {
     loader,
     navbar ,
    //  bgKakos,
  },
  created: function () {
    this.getNavData();
  },
  computed: {
    ...mapState({
      loading: "loading",
      time: "time",
      bgKakos: "bgKakos"

    })
  },
  methods:{
    getNavData() {
      const n = "navbar";
      this.$store.dispatch("getNavData", n).then((res) => {
        if (res) {
          if (res) {
            this.navbarOk = true;
          }
        }
      });
      console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
    },
   },


}
</script>

<style >
.view {
  margin: auto;
  background-color: black;
  height: 100%;
}

html {
  /* background-color: rgb(252, 217, 164); */
}
html{
  background: black;
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
  background-color: transparent;
  margin-top: 0px;
  background-attachment: fixed;
  margin: auto;

}
.nav{
  position:fixed;
  top:20px;
  right:30px;
  left:30px;
  z-index:1222;
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
  opacity:0;
  transform: translateX(-200px);
}
.route-leave-active {
  transition: all .3s ease-in
}


</style>
