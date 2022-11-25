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
  <div class="btn">
    <button @click="dateClick()" >clic Date</button>

  </div>

  <div class="display">
    <div v-if="home">
      <Home />
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
    }
  },
  computed: {
    ...mapState({
      modal: "modal",
      modalMessage: "modalMessage",
      modalError: "modalError",
      user: "user",
      pageData: "pageData"

    }),
  },

  components: {
    Home,
    DatePicker,
    CalUpdate,
  },

  methods: {


    dateClick: function () {
      console.log("DATE CLICK");
      this.datePicker = true
    },
    goToHome: function () {
      console.log("GO TO HOME");
      this.getPageData()
    },
    goToCal: function () {
      console.log("GO TO CAL");
      this.getPageData("calendar")
    },

    getPageData(x) {
      let n = "";
      if (x == "calendar") {
n = "calendar"
      } else {
        n = "portada"
      }
      

      this.$store.dispatch("getPageData", n).then((response) => {
        console.log("RESPONSE HOME", response);
        if (response && n == "portada") {
          this.home = true;
        }else if(response && n == "calendar"){
          this.calUpdate = true;
        }
      })

      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
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
