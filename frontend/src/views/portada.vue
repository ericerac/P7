<template>
  <div class="fond">
    <div class="container-fluid text-center">
      <div class="row bloc_thumb">
        <div class="col-6 left-bloc">
          <div class="title_name item1">
            <h1>{{ pageData[0].title_1 }}</h1>
          </div>
          <div class="subTitle_name item2">
            <p>{{ pageData[0].subTitle_1 }}</p>
          </div>
          <div class="line item3"></div>
          <nav>
            <ul class="list_nav item4">
              <li class="list_item">
                <router-link to="/portada">{{ pageData[0].nav_1 }}</router-link>
              </li>
              <li class="list_item">
                <a href="#spectacle">{{ pageData[0].nav_2 }}</a>
              </li>
              <li class="list_item">
                <router-link to="/accueil">{{ pageData[0].nav_3 }}</router-link>
              </li>
              <li class="list_item">
                <router-link to="/login" target="_blank">{{
                  pageData[0].nav_4
                }}</router-link>
              </li>
              <li class="list_item">
                <router-link to="/cal">{{ pageData[0].nav_5 }}</router-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-6 right_bloc">
          <div class="img_back">
            <!-- <img src="../assets/images/mg_9636-2-2.jpg" alt=""> -->
            <img :src="pageData[0].imageUrl" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
        <div class="row txt-espectacle">
            <h2>Espectacles</h2>
        </div>
      <div class="row col-12" id="spectacle">
        <div class="espectacle-bloc">
          <div class="bloc-img-spect">
            <router-link to="/portada" >
            <img  class=" img-spectacle" src="../assets/images/img_325.jpg" alt="" />
            <p>spectacle1 </p>
        </router-link>
          </div>
          <div class="bloc-img-spect">
            <router-link to="/portada" >
            <img  class=" img-spectacle" src="../assets/images/img_325.jpg" alt="" />
            <p>spectacle1 </p>
        </router-link>
          </div>
          <div class="bloc-img-spect">
            <router-link to="/portada" >
            <img  class=" img-spectacle" src="../assets/images/img_325.jpg" alt="" />
            <p>spectacle1 </p>
        </router-link>
          </div>
        
          
        </div>
      </div>
    </div>
    <div class="container">
    <div class="row">
      <div class="copyright">
        <a href="#">@j'veuxecrireautablo.fr</a>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "portada",

  data: function () {
    return {};
  },
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
      pageData: "pageData",
    }),
  },
  methods: {
    FileUpload(event) {
      this.fileSelected = event.target.files[0];
    },

    getPageData() {
      const n = "portada";
      this.$store.dispatch("getPageData", n);
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },
  },
};
</script>

<style scoped>
a {
  color: aliceblue;
  text-decoration: none;
}


.fond{
    background: #000;
}
.container-fluid{
    background: #000;
    height: auto;
    
}
/* body {
    background-image: url("../assets/images/mg_9636-2-2.jpg");
    background-repeat: no-repeat;
} */

.container-fluid {
  /* background-image: url("../assets/images/mg_9636-2-2.jpg"); */
  /* padding-top: 100px; */
}

.copyright {
  color: white;

  text-align: right;
}

.img_back {
  /* background-image: url("../assets/images/mg_9636-2-2.jpg");
    background-repeat: no-repeat; */
  width: 100%;
  height: auto;
  margin-top: 0;
  margin-right: 0;
}
.right_bloc{
  height: 600px;
  overflow: hidden;
}
ul {
  list-style-type: none;
  margin-top: 1rem;
}

li {
  list-style-type: none;
}

.list_nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: space-around;
}

.left-bloc {
  text-align: center;
  align-items: center;
  color: white;
}

.bloc_thumb {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}


.txt-espectacle{
    color: azure;
    margin: 30px auto;
}
.espectacle-bloc {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}

.img-spectacle {
  border-radius: 50%;
}
.line {
  width: 60%;
  border: solid 2px blue;
  margin: 0 auto;
  animation-name: item3;
  animation-duration: 0.6s;
}

.item1 {
  animation-name: item1;
  animation-duration: 0.6s;
}
.item2 {
  animation-name: item2;
  animation-duration: 0.6s;
}
.item4 {
  animation-name: item4;
  animation-duration: 0.6s;
}

@keyframes item1 {
  0% {
    transform: translateY(70px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes item2 {
  0% {
    transform: translateY(35px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes item3 {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes item4 {
  0% {
    transform: translateY(-35px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
