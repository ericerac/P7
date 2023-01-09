<template lang="cat">
    <div class="container col-12 text-center justify-content-center">
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
                      <li class="item-show-list"><router-link to="/elvira">Elvira</router-link></li>
                      <li class="item-show-list"><router-link to="/creation">Creation</router-link></li>
                    </ul>
                    </li>
                    <li><router-link to="/portada"> {{navData[0].l_4}}</router-link></li>
                    <li><router-link to="/cal"> {{navData[0].l_5}}</router-link></li>
                    <li><router-link to="/portada"> {{navData[0].l_6}}</router-link></li>
                    <li class="idiomes"><span class="idioma" @click="lang('cat')" >Cat</span>
            <span class="idioma" @click="lang('es')">Es</span>
            <span class="idioma" @click="lang('fr')">Fr</span></li>
                    
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


import { mapState } from "vuex";
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

    this.viewWidth();

  },
  computed: {
    ...mapState({

      navData: "navData",
      // lang:"lang",

    }),

  },

  modules: {
    navDisplay: "navDisplay",
  },
  methods: {

    viewWidth() {
      if (window.innerWidth < 576) {
        console.log("VIEWPORT", window.innerWidth);
        this.isActive = false
      } else {
        console.log("VIEWPORT LARGE", window.innerWidth);
        this.isActive = true
      }
    },

    lang(l) {
      console.log("LANGUE---->", l);
      cookies.set("lang", JSON.stringify({ "lang": l }));

      location.reload();
    },
  },

};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Unna&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap');
@import url('../styles/bloc_nav.css');
</style>
