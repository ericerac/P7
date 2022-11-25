<template>
  <div>
    <h1>ELVIRA</h1>
    </div>
</template>

<script>
const FormData = require("form-data");

// import { axios } from "axios";
import {  mapState } from "vuex";
import {  lire } from "../js/script";
lire("PATATE FROIDE");


export default {
  name: "Accueil",

  beforeMount: function () {
    //     if ($cookies.get("admin")) {

    //       let userCookies = $cookies.get("admin");

    //       this.userId = userCookies.userId;
    //       let logon = userCookies.userLogon;

    //       data = {
    //         userId: this.userId,

    //       }

    this.getPageData();
    //       this.getNewArticle(logon);
    //     } else {
    //       this.$router.push("/");
    //     }
  },

  computed: {
    ...mapState({
      accueilData: "accueilData",
      pageData: "pageData",
    }),
  },
  methods: {
    getPageData() {
      const n = "INICIO 1";
      this.$store.dispatch("getPageData", n);
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },
    getters: {
      pageData(state, val) {
        return console.log("RETURN GETTERS PAGE-DATA----->", val);
      },
    },
  },
};
</script>

<style  scoped>
h1 {
  color: red;
}
p {
  margin: 0 50px;
  text-align: left;

  padding: 5px;
  word-wrap: break-word;
  border: 1px solid black;
  overflow: scroll;
}
.card {
  border: 1px solid black;
}
.card-body {
  width: auto;
}
.card-text {
  width: 100%;
  margin: 0 auto 1rem;
  padding: 0;
}
.card-img-top {
  width: 95%;
  height: 200px;
}
.collapse {
  width: 100%;
  margin: 0 auto 1rem;
  padding: 0;
}
.container-fluid {
  border: 2px solid greenyellow;
}
.row {
  border: 2px solid skyblue;
}
.col-xl-4 {
  margin: 2rem 3rem;
}
img {
  width:max-content;
 
  height: 400px;
  overflow: hidden;
  
}
image{
  width: 200px;
}
</style>