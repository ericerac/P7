<template>
  <div class="container-fluid master_bloc" v-if="auth == true" :class="{ bgDark: darkTheme }">
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
        <li> <router-link to="/"> Retour Web Inici</router-link> </li>
        <li @click="goTo('portada')">home</li>
        <li @click="goTo('bio')">Bio </li>
        <li @click="goTo('calendar')">Calendar </li>
        <li @click="goTo('bernadette')">Bernadette</li>
        <li @click="goTo('kakos')">Kako's</li>
        <li @click="goTo('emperdonadas')">Emperdonadas</li>
        <li @click="goTo('elvira')">Elvira</li>
        <!-- <li @click="goToBlog()">Blog </li> -->


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
          <BioUpdate />
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
import BioUpdate from "../views/bio_update.vue";
import bernUpdate from "../views/bernadette_update.vue"

import Emperdonadas from "../views/emperdonadas_update.vue"
import Elvira from "../views/elvira_update.vue"
import Kakos from "../views/kakosUpdate.vue"

import ModalSucces from "../components/ModalSucces.vue";
import ModalError from "../components/ModalError.vue";

import { mapGetters, mapState, mapMutations } from "vuex";
import { ref } from "vue"
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();



export default {
  name: "pageAdmin",


  data: function () {
    return {
      pageName: "",
      home: ref(false),
      calUpdate: ref(false),
      bioUpdate: ref(false),
      bernUpdate: ref(false),
      EmperUpdate: ref(false),
      Elvira: ref(false),
      kakos: ref(false),
    }
  },
  beforeMount: function () {
    this.getAdminAuth()
  },
  created: function () {
    this.$store.commit("NamePage", "adminPage")
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
      darkTheme: "darkTheme"
    }),
    ...mapMutations(["NamePage"]),
  },

  components: {
    Home,
    CalUpdate,
    ModalSucces,
    BioUpdate,
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
        .then((res) => {
          this.$router.push("/portada")
        })
    },

    preview_close: function (x) {
      console.log("PREVIEW IMAGE DB COMPONENT", x);

      this.preview_component = false;
    },
    dateClick: function () {
      console.log("DATE CLICK");
      this.datePicker = true
    },
    goTo:function (x) {
      console.log("GO TO");
      this.shutDownComponent();
          this.getPageData(x)
    },

    goToBlog: function () {
      this.$router.push("/blog")
    },

    lang(l) {
      cookies.set("lang", JSON.stringify({ "lang": l }));
      location.reload();
      console.log("LANGUE---->", l);
    },
shutDownComponent(){
            this.home = false;
            this.calUpdate = false;
            this.bioUpdate = false;
            this.bernUpdate = false;
            this.EmperUpdate = false
            this.kakos = false;
            this.Elvira = false;
          
},
    async getPageData(x) {

      this.$store.dispatch("getPageData", x)
        .then((response) => {
          // console.log("RESPONSE ADMIN PAGE", response);
          if (response && x == "portada") {
            this.$store.dispatch("getImgData", x)
            this.home = true;
            // console.log("RES BLOC IF ADMIN PAGE");
          } else if (response && x == "calendar") {
            this.calUpdate = true;
          } else if (response && x == "bio") {
            this.$store.dispatch("getImgData", x).then((res) => {
              if (res) {
                console.log("RESPONSE IMG BIO");
                this.bioUpdate = true;
              }
            })
            // console.log("RES BLOC IF BIO UPDATE ADMIN PAGE");
          } else if (response && x == "bernadette") {
            this.bernUpdate = true;
          } else if (response && x == "emperdonadas") {
            this.EmperUpdate = true
          } else if (response && x == "elvira") {
            this.Elvira = true;
          } else if (response && x == "kakos") {
            this.$store.dispatch("getImgData", x)
            this.kakos = true;
          }
        }).catch((err) => {
          console.log("RESPONSE ADMIN GET PAGEDATA", err);
        })

      // console.log("REQUET GET ACCUEIL PAGE DATA-----> ", x);
    },

  }
}


</script>

<style scoped>
@import url("../styles/theme.css");

.container-fluid {
  height: auto;
  min-height: 100vh;
}

.row {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  z-index: 100;
}

.logo_flag {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

li {
  /* border:1px solid black; */
  width: auto;
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
  gap: 10px;
  background-color: #ffbf00;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 3px rgb(226, 113, 0);
}

@media screen and (max-width:576px) {
  li {
    margin-bottom: 5px;
  }

  .liste {
    margin: 10px 0;
    width: 100%;
  }
}
</style>
