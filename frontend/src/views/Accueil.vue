<template>
  <div>
    <div class="container-fluid py-4 px-4 mx-auto text-center">
      <div class="row g-2 
      justify-content-md-center">
        <div class="col-12">
          Column 1
          <h1>Title: {{ pageData.title_1 }}</h1>
        </div>
        <div class="col-12 col-md-12 col-lg-12">
          Column 1
          <h3>Title: {{ pageData.name }}</h3>
        </div>
        <div class="col-12 col-md-12 col-lg-12">{{ pageData.subTitle_1 }}</div>
        <div class="col"></div>
      </div>
    </div>
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-6 col-sm-1 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
          Column 2
        </div>
        <div class="col-12 col-md-auto">
          <p>{{ pageData.p_1 }}</p>
        </div>

        <div class="col-6 col-sm-1 col-md-3 col-lg-4 col-xl-3 col-xxl-3">
          Column 2
        </div>
      </div>
    </div>
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
          <a
            class="btn"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <div class="card" style="width: 18rem">
              <img src="../assets/logo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div id="collapseExample" class="collapse">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </a>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
          <a
            class="btn"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <div class="card" style="width: 18rem">
              <img src="../assets/logo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div id="collapseExample" class="collapse">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </a>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
          <a
            class="btn"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <div class="card" style="width: 18rem">
              <img src="../assets/logo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div id="collapseExample" class="collapse">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </a>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
          <a
            class="btn"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <div class="card" style="width: 18rem">
              <img src="../assets/logo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Column 3</h5>
                <div id="collapseExample" class="collapse">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </a>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
          <a
            class="btn"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <div class="card" style="width: 18rem">
              <img src="../assets/logo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div id="collapseExample" class="collapse">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- <h1>Bonjour</h1>
  <h1>Title: {{ pageData.title_1 }}</h1>
  <h2>subtitle: {{ pageData.subTitle_1 }}</h2>
  <p>parag: {{ pageData.p_1 }}</p>
  <img
    v-if="pageData.imageUrl"
    alt="photo Profil"
    :src="pageData.imageUrl"
    
    class=""
  /> -->
    <div class="container py-4 px-4 mx-auto text-center">
      <div class="row row-cols-2 justify-content-center
      ">
        <div class="col">
          <!-- <div class="col-4 col-xl-4 justify-content-center"> -->
          Column 1
          <h1>row row-cols-2: {{ pageData.title_1 }}</h1>
        </div>

        <div class="col-auto">
          <!-- <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-3"> -->
          <a
            class="btn"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <div class="card" style="width: 18rem">
              <img src="../assets/logo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div id="collapseExample" class="collapse">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </a>
        </div>

        <div class="col">{{ pageData.subTitle_1 }}</div>
        <!-- <div class="col-4 col-md-12 col-lg-12 col-xl-4">{{ pageData.subTitle_1 }}</div> -->
      </div>
    </div>
    <div class="container overflow-hidden">
      <div class="row  row-cols-xl-2 justify-content-center">
        <div class="col-xl 3 text-center">
          <img src="../assets/images/1.jpg" class="rounded image" alt="..." />
        </div>
        <div class="col-xl 3  text-center">
          <img src="../assets/images/2.jpg" class="rounded image" alt="..." />
        </div>
        <div class="col-xl 3  text-center">
          <img src="../assets/images/3.jpg" class="rounded image" alt="..." />
        </div>
        <div class="col-xl 3  text-center">
          <img src="../assets/images/4.jpg" class="rounded image" alt="..." />
        </div>
        <div class="col-xl 3  text-center">
        <img src="../assets/images/5.jpg" class="rounded image" alt="..." />
      </div>
      <div class="col-xl 3  text-center">
        <img src="../assets/images/6.jpg" class="rounded image" alt="..." />
      </div>
        <div class="col-xl 3  text-center">
        <img src="../assets/images/7.jpg" class="rounded image" alt="..." />
      </div>
      <div class="col-xl 3  text-center">
        <img src="../assets/images/8.jpg" class="rounded image " alt="..." />
      </div>
        
      </div>
    </div>
  </div>
</template>

<script>
const FormData = require("form-data");
import { axios } from "axios";
import { mapGetters, mapState } from "vuex";

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