<template>
  <div class="container-fluid master_bloc" v-if="auth == true" :class="{bgDark : darkTheme}">
    <div class="row">
      <ul class="liste m-t-2">
        <li @click="disconnect()">Admin </li>
          <li @click="disconnect()">disconnect </li>
        <li @click="lang('cat')"><span><img class="logo_flag" src="../assets/logo/catalonia2.png"></span></li>
        <li @click="lang('es')"><span><img class="logo_flag" src="../assets/logo/spain.png"></span></li>
        <li @click="lang('fr')"> <span><img class="logo_flag" src="../assets/logo/france.png"></span></li>

      </ul>
    </div>
    <div class="row col-12 wrapper-wrap">
      <ul class="liste col-12 m-t-2">
        <li> <router-link to="/portada"> Retour Web Inici</router-link> </li>
        
        <li @click="goToHome()">home</li>
        <li @click="goToBio()">Bio </li>

        <li @click="goToCal()">Calendar </li>
       
        <li @click="goToB()">Bernadette</li>
        <li @click="goToKakos()">Kako's</li>
        <li @click="goToEmperd()">Emperdonadas</li>
        <li @click="goToElvira()">Elvira</li>

        <li @click="goToBlog()">Blog </li>
      

      </ul>
    </div>
    
    <div class="row">

      <div class="display">
        <div v-if="home">
          <Home />
        </div>
      </div>

      <div class="display">
        <div v-if="modalSucces">
          <ModalSucces />
        </div>
      </div>

      <div class="display">
        <div v-if="calUpdate">
          <CalUpdate />
        </div>
      </div>

      <div class="display">
        <div v-if="bernUpdate">
          <bernUpdate />
        </div>
      </div>
      

      <div class="display">
        <div v-if="bioUpdate">
          <bioUpdate />
        </div>
      </div>

      <div class="display">
        <div v-if="EmperUpdate">
          <Emperdonadas />
        </div>
      </div>
      <div class="display">
        <div v-if="Elvira">
          <Elvira />
        </div>
      </div>

      <div class="display">
        <div v-if="kakos">
          <Kakos />
        </div>
      </div>


      

    </div>
  </div>



</template>

<script>
import axios from "axios";
import Home from "../views/Home.vue";
import CalUpdate from "../views/cal_update.vue";
import bioUpdate from "../views/bio_update.vue";
import bernUpdate from "../views/bernadette_update.vue"

import Emperdonadas from "../views/emperdonadas_update.vue"
import Elvira from "../views/elvira_update.vue"
import Kakos from "../views/kakosUpdate.vue"

import ModalSucces from "../components/ModalSucces.vue";
import ModalError from "../components/ModalError.vue";

import { mapGetters, mapState, mapMutations } from "vuex";

import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();



export default {
  name: "pageAdmin",


  data: function () {
    return {
      pageName: "",
      home: false,

      calUpdate: false,
      // auth:true,
      bioUpdate: false,
      bernUpdate: false,
      EmperUpdate: false,
      Elvira: false,
      kakos:false,
    }
  },
  beforeMount: function() {
    this.getAdminAuth()
  },
  created:function(){
    this.$store.commit("NamePage","adminPage")
  },
  computed: {
    ...mapState({
      modal: "modal",
      modalMessage: "modalMessage",
      modalError: "modalError",
      modalSucces: "modalSucces",
      user: "user",
      pageData: "pageData",
      imgData: "imgData",
      auth: "auth",
      darkTheme:"darkTheme"


    }),
    ...mapMutations(["NamePage"]),
  },

  components: {
    Home,
   
    CalUpdate,
    ModalSucces,
    bioUpdate,
    bernUpdate,
    Emperdonadas,
    Elvira,
    Kakos,
  },

  methods: {

    updateImg(p) {
            console.log("ID IMG", p);
          },
    getAdminAuth: function () {
      this.$store.dispatch("getAdminAuth").then((res) => console.log("ADMINAUTH OK"))
    },
    disconnect() {
      this.$store.dispatch("disconnect")
      .then((res)=>{
this.$router.push("/portada")
      })
    

      // this.$router.push("/");
    },

    preview_close: function (x) {
      console.log("PREVIEW IMAGE DB COMPONENT", x);

      this.preview_component = false;
    },
    dateClick: function () {
      console.log("DATE CLICK");
      this.datePicker = true
    },
    goToHome: function () {
      console.log("GO TO HOME");
      this.getPageData("portada")
    },

    goToCal: function () {
      console.log("GO TO CAL");
      this.getPageData("calendar")
    },
    goToBio: function () {
      console.log("GO TO BIO");
      this.getPageData("bio")
    },
    goToB: function () {
      console.log("GO TO Bernadette");
      this.getPageData("bernadette")
    },
    goToEmperd: function () {
      console.log("GO TO Emperdonadas");
      this.getPageData("emperdonadas")
    },
    goToElvira: function () {
      console.log("GO TO Elvira");
      this.getPageData("elvira")
    },
    goToKakos: function () {
      console.log("GO TO Kakos");
      this.getPageData("kakos")
    },
    goToBlog: function () {
      this.$router.push("/blog")
    },

    lang(l) {


      cookies.set("lang", JSON.stringify({ "lang": l }));
      location.reload();
      console.log("LANGUE---->", l);
    },
    getPageData(x) {


      this.$store.dispatch("getPageData", x)
        .then((response) => {
          console.log("RESPONSE HOME", response);
          if (response && x == "portada") {

            this.$store.dispatch("getImgData", x)

            this.home = true;
            this.calUpdate = false;
            this.bioUpdate = false;
            this.bernUpdate = false;
            this.EmperUpdate = false
            this.kakos = false;
            this.Elvira = false;
            console.log("RES BLOC IF ADMIN PAGE");

          } else if (response && x == "calendar") {
            this.calUpdate = true;
            this.home = false;
            this.bioUpdate = false;
            this.bernUpdate = false;
            this.EmperUpdate = false
            this.kakos = false;
            this.Elvira = false;
          } else if (response && x == "bio") {
            this.$store.dispatch("getImgData", x)
            this.bioUpdate = true;
            this.home = false;
            this.calUpdate = false;
            this.bernUpdate = false;
            this.EmperUpdate = false
            this.kakos = false;
            this.Elvira = false;
          } else if (response && x == "bernadette") {
            this.bioUpdate = false;
            this.home = false;
            this.calUpdate = false;
            this.bernUpdate = true;
            this.EmperUpdate = false
            this.kakos = false;
            this.Elvira = false;
          
          } else if (response && x == "emperdonadas") {
            this.bioUpdate = false;
            this.home = false;
            this.calUpdate = false;
            this.bernUpdate = false;
            this.EmperUpdate = true
            this.kakos = false;
            this.Elvira = false;

          } else if (response && x == "elvira") {
            this.bioUpdate = false;
            this.home = false;
            this.calUpdate = false;
            this.bernUpdate = false;
            this.EmperUpdate = false
            this.Elvira = true;
            this.kakos = false;

          } else if (response && x == "kakos") {
            this.$store.dispatch("getImgData", x)
            this.bioUpdate = false;
            this.home = false;
            this.calUpdate = false;
            this.bernUpdate = false;
            this.EmperUpdate = false
            this.Elvira = false;
            this.kakos = true;
          }
        }).catch((err) => {
          console.log("RESPONSE ADMIN GET PAGEDATA", err);
        })

      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", x);
    },

  }
}


</script>

<style scoped>
@import url("../styles/theme.css");
.container-fluid {
  /* background-color: rgba(255, 191, 0, .3); */
  height: auto;
  min-height: 100vh;

}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.logo_flag {
  width: 20px;
  height: 20px;
  border-radius: 50%;

}

li {
  /* border:1px solid black; */
  width:auto;
  
  padding: 5px 10px;
  border-radius: 5px;
  background: rgb(255, 143, 0);
  background: linear-gradient(90deg, rgba(255, 143, 0, 1) 43%, rgba(240, 96, 96, 0.8981967787114846) 100%);
  color: white;
  font-weight: 800;
}

li:hover {
  background: rgb(240, 96, 96);
  background: linear-gradient(90deg, rgba(240, 96, 96, 0.8981967787114846) 1%, rgba(255, 143, 0, 1) 57%);
  box-shadow: 1px 1px 10px 5px rgb(226, 113, 0);

}

.liste {
  display: flex;
  width: 80%;
  margin: 20px auto;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 2px solid #ffbf00;
  padding: 5px;
  gap:10px;
  background-color: #ffbf00;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 3px rgb(226, 113, 0);
}
@media screen and ( max-width:576px) {
 li {
margin-bottom: 5px;
  }
 .liste{
margin:10px 0;
width: 100%;
 }
}
</style>
