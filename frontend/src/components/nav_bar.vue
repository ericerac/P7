<template lang="cat">
    <div class=" master_nav col-12 text-center justify-content-center">
        <header class="row col-12">
            
            <navbar class="nav_bar" v-if="isActive" >
              <!-- <div class="background_svg" style="height: 100px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C182.28,130.77 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: red;"></path></svg> 
                 -->
                <ul class="navbare  col-12"  >
                    
                    <li class="show-nav" v-if="logoOn" > <img class="logo rounded-circle" src="../assets/logo/logo.png" alt="logo"></li>
                    <li class="show-nav " :class="{ nameDisplay: namePage == 'portada'}"  > <router-link to="/portada">{{ navData[0].l_1 }}</router-link></li>
                    <li class="show-nav" :class="{ nameDisplay: namePage == 'bio'}"><router-link to="/bio"> {{ navData[0].l_2 }}</router-link></li>
                    <li class="show-nav" > <a href="#spectacle"> {{ navData[0].l_3 }}</a>
                    <ul class="show-list">
                      <li class="item-show-list" :class="{ nameDisplay: namePage == 'kakos'}"><router-link to="/kakos"> Kakofonikas</router-link></li>
                      <li class="item-show-list" :class="{ nameDisplay: namePage == 'emperdonadas'}"><router-link to="/emperdonadas">Emperdonadas</router-link></li>
                      <li class="item-show-list" :class="{ nameDisplay: namePage == 'bernadette'}"><router-link to="/bernadette">Bernadette</router-link></li>
                      <li class="item-show-list" :class="{ nameDisplay: namePage == 'elvira'}"><router-link to="/elvira">Elvira</router-link></li>
                      <!-- <li class="item-show-list"><router-link to="/creation">Creation</router-link></li> -->
                    </ul>
                    </li>
                    <li class="show-nav" :class="{ nameDisplay: namePage == 'creation'}"><router-link to="/creation"> {{ navData[0].l_7 }}</router-link></li>
                    <li class="show-nav" :class="{ nameDisplay: namePage == 'post'}"><router-link to="/blog"> {{ navData[0].l_4 }}</router-link></li>
                    <li class="show-nav" :class="{ nameDisplay: namePage == 'calendar'}"><router-link to="/cal"> {{ navData[0].l_5 }}</router-link></li>
                    <li class="show-nav" :class="{ nameDisplay: namePage == 'contact'}"><router-link to="/contact"> {{ navData[0].l_6 }}</router-link></li>
                    <li class="idiomes">
                        <span class="idioma"  @click="lang('cat')" >Cat</span>
                        <span class="idioma" @click="lang('es')">Es</span>
                        <span class="idioma"  @click="lang('fr')">Fr</span>
                    </li>
                    <li class="svg_icon">
                      <img  v-if="dark" class="svg_icon" @click="$emit('theme',Boolean(false))" src="../assets/design/sun_white.svg">
                    <img v-else class="svg_icon" @click="$emit('theme',Boolean(true))" src="../assets/design/moon_fill_white.svg">
                    </li>
                    
                </ul>
                <!-- <p style="color:white">{{namePage}}</p> -->
          

              <!-- </div> -->
            </navbar>

            <button type="button"  @click="isActive = !isActive" class="btn_nav" :class="{ active: isActive }" >
               <span class="lineN l1" :class="{ active: isActive }"></span>
               <span class="lineN l2" :class="{ active: isActive }"></span>
               <span class="lineN l3" :class="{ active: isActive }"></span>
            </button>
    

        </header>
    </div>
</template>



<script>


import { mapState } from "vuex";
import { useCookies } from "vue3-cookies";
import { boolean } from "webidl-conversions";
import {ref, toRef} from "vue"
const { cookies } = useCookies();



export default {
  name: "navBar",
  
  
  data() {
    return {
      isActive: "",
      logoOn: false,
     
      dark:ref(""),

    };
  },
  beforeMount: function () {

    this.viewWidth();

  },
  computed: {
    ...mapState({
      navData: "navData",
    }),
  },
  props: {
    namePage: {
      type:String,
      required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
    },
    dark: {
      type:Boolean,
      required: true,}
  },
  modules: {
    // navDisplay: "navDisplay",
  },
  methods: {

    viewWidth() {
      if (window.innerWidth < 576) {
        console.log("VIEWPORT", window.innerWidth);
        this.isActive = false;
        this.logoOn = false;
      } else {
        console.log("VIEWPORT LARGE", window.innerWidth);
        this.isActive = true
        this.logoOn = true;
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


/* .idioma {
      cursor: pointer;
    } */
</style>
