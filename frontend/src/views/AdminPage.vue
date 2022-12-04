<template>
  <div class="container">
    <ul class="liste">
      <li @click="goToHome()">home</li>
      <li @click="goToHome()"> p1 </li>
      <li @click="goToHome()">p2 </li>
      <li @click="goToHome()">p3 </li>
      <li @click="goToCal()">Calendar </li>


    </ul>

  </div>
  

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
</template>

<script>
import axios from "axios";
import Home from "../views/Home.vue";
import CalUpdate from "../views/cal_update.vue";
import ModalSucces from "../components/ModalSucces.vue";
import ModalError from "../components/ModalError.vue";
import DatePicker from "../components/datePicker.vue";
import { mapGetters, mapState } from "vuex";


export default {
  name: "pageAdmin",


  data: function () {
    return {
      pageName: "",
      home: false,
      datePicker: false,
      calUpdate:false,
      // preview_component:"",
    }
  },
  computed: {
    ...mapState({
      modal: "modal",
      modalMessage: "modalMessage",
      modalError: "modalError",
      modalSucces:"modalSucces",
      user: "user",
      pageData: "pageData",
      preview_component:"preview_component",

    }),
  },

  components: {
    Home,
    DatePicker,
    CalUpdate,
    ModalSucces,
  },

  methods: {

    preview_close:function (x) {
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

    getPageData(x) {
//       let n = "";
//       if (x == "calendar") {
// n = "calendar"
//       } else {
//         n = "portada"
//       }
      
      this.$store.dispatch("getPageData", x).then((response) => {
        console.log("RESPONSE HOME", response);
        if (response && x == "portada") {
          this.home = true;
          this.calUpdate = false;
        }else if(response && x == "calendar"){
          this.calUpdate = true;
          this.home = false;
        }
      })

      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", x);
    },

  }
}


</script>

<style scoped>
.liste {
  display: flex;
  width: 80%;
  margin: 20px auto;
  flex-direction: row;
  justify-content: space-around;
}


</style>
