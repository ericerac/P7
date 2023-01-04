<template>
  <div class="fond">
    <div class="container text-center sticky_bloc">
      <div class="bloc_nav" v-if="navbarOk">
        <navbar />
      </div>
      <!-- <div class="display">
        <div v-if="home">
          <Home />
        </div>
      </div> -->
      <div class="row bloc_thumb pt-5 pb-5">
        <div class="col-12 col-xl-6 left-bloc">
          <div class="title_name item1 texte">
            <h1>{{ pageData[0].title_1 }}</h1>
          </div>
          <div class="subTitle_name item2 texte">
            <p>{{ pageData[0].subTitle_1 }}</p>
          </div>
          <div class="line item3"></div>
          <span class="admin" v-if="auth = true" @click="goToHome() " >XXX</span>
        </div>

        <div class="col-6 right_bloc">
          <div class="img_back">
            <!-- <img src="../assets/images/mg_9636-2-2.jpg" alt=""> -->
            <img class="img_principale" :src="pageData[0].imageUrl" alt="image" />
            
          </div>
        </div>
      </div>
    </div>
    
    <!-- SWITCH -->

    <div class="container switch_dynamic">

      <!-- <div class="row col-12 item6 ">
       <span class="col-2">___________</span>
        <span class="randow_data col-8  ">{{pageData[0].phrase}} </span>
        <span class="col-2">___________</span>
      </div> -->

    </div>

    <!-- ------------- BLOC ESPECTACLE ------------ -->
    <div class="container  text-center
    ">

      <div class="row txt-espectacle texte meeting-item">
        <h2>Espectacles</h2>
      </div>
      <div class="row  col-12 " id="spectacle">

        <div class="espectacle-bloc col-12 col-md-6 col-lg-3 col-xl-3" v-for="(i, index) in imgData" :key="i._id">
          <div class="bloc-img-spect col-12 col-md-6">
            
            <router-link v-if="index == 0 " to= "/kakos">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName texte">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 1 " to= "/emperdonadas">           
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName texte">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 2 " to= "/bernadette">           
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName texte">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 3 " to= "/creation">            
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName texte">{{ i.showName }} </h3>
            </router-link>
          </div>
        </div>

      </div>
    </div>
    <div class="container">
      <div class="row col-12 mt-5">
        <div class="copyright">
          <router-link to="/login" target="_blank"><span class="texte">@WistitiWeb.com</span></router-link>
          
        </div>
      </div>

    </div>
    <div class="footer">

      <foot/>
    </div>
  </div>
</template>

 <!-- ************* SCRIPT ************* -->
<script>
import { mapGetters, mapState } from "vuex";
import navbar from "../components/nav_bar.vue"
import foot from "../components/footer.vue"
import Home from "../views/Home.vue";
export default {
  name: "portada",

  data: function () {
    return {
home:false,
navbarOk:false,
// route:"",
    };
  },
  created: function () {
    //     if ($cookies.get("admin")) {

    //       let userCookies = $cookies.get("admin");

    //       this.userId = userCookies.userId;
    //       let logon = userCookies.userLogon;

    //       data = {
    //         userId: this.userId,

    //       }

    this.getPageData();
     this.getNavData();
   
    //       this.getNewArticle(logon);
    //     } else {
    //       this.$router.push("/");
    //     }
    // console.log("ENV VAIABLES",VUE_APP_PAGE1_NAME);
  },
  computed: {
    ...mapState({
      pageData: "pageData",
      imgData: "imgData",
      auth:"auth"
    }),
// //     routeLink(lk){
// //       const routing = this.route;
// // switch(lk){
// //   case 1:{
// //     routing = "bernadette"
// //     break;
// //   }
// }
//     },
  },
  components: {
    navbar,
    foot,
    // Home
  },
  methods: {
    // goToHome () {
    //   console.log("GO TO HOME");
    //   this.home = true;
    // },
    FileUpload(event) {
      this.fileSelected = event.target.files[0];
    },

    getPageData() {
      const n = "portada";
      this.$store.dispatch("getPageData", n)
        .then((res) => {
          if (res) {
            console.log("RES GET PORTADA PAGE DATA", res.data[0].name);
            let p = res.data[0].name
             this.$store.dispatch("getImgData", p)
          }
        });
      
    },

    getNavData() {
            const n = "navbar";
            this.$store.dispatch("getNavData", n)
                .then((res) => {
                    if (res) {
                        this.navbarOk = true
                        return
                    }
                });
            console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
        },
   
  },
};
</script>

<style scoped>
.admin{
  color:white
}
html{
  scroll-behavior: smooth;
  --res:25vw;
}
a {
  /* color: aliceblue; */
  color: rgb(7, 8, 9);
  text-decoration: none;
 
}
.texte{
  color:black;
  text-shadow: 2px 2px 10px rgba(0, 0, 0,.5);
}
.bloc_nav {
  position: sticky;
  top: 20px
}

.fond {
  /* background: #000; */
  /* background-image: url("../assets/images/tableau_noir_lueur_centre.webp"); */
  background-image: url("../assets/design/white-texture.webp");
}

.container-fluid {
  /* background: #000; */
  background: transparent;
  /* height: 1000px; */
  position: relative;
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
.footer{
  margin: 0 auto;
}
.img_back {
  /* background-image: url("../assets/images/mg_9636-2-2.jpg");
    background-repeat: no-repeat; */
  width: 100%;
  height: auto;
  margin-top: 0;
  margin-right: 0;
 
  
}
.img_principale{
 width:100%
}
.randow_data {
  color: azure;
  font-size: 18px;
  margin-bottom: 2rem;
}

.right_bloc {
  height: auto;
  overflow: hidden;
  object-fit: contain;
}

ul {
  list-style-type: none;
  margin-top: 1rem;
  padding: 0;
  align-items: center;
}

li {
  list-style-type: none;
}

.list_nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: space-evenly;
  padding-left: 1rem;
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

.espectacle-bloc {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}

.img-spectacle {
  border-radius: 50%;
  width: 300px;
   height: 300px; 
  object-fit: cover;
  /* border: 2px solid rgba(251, 95, 95,.6);
  padding: 15px;
  box-shadow: inset 0 0 20px rgb(251, 95, 95); */
  /* border: 2px solid rgb(250, 248, 248); */
  padding: 0px;
  box-shadow: 0 0  10px rgb(85, 84, 84);

}

.txt-espectacle {
  color: rgb(13, 15, 15);
  margin: 30px auto;
}

.showName {
  padding: 1rem 0;
  margin: 30px auto;
}




/* BLOC_THUMB  */

@media screen and (max-width: 576px) {
  .bloc_thumb {
    display: flex;
    flex-direction: column;
  }
.row{
  margin: 0 auto;
}
.bloc_nav {
  position: fixed;
  top: 20px;
  right: 10px;
}
  .list_nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    justify-content: space-around;
  }

  .espectacle-bloc {
    display: flex;
    flex-direction: column;
    justify-content: center;
padding: 0;
    width: 100%; 
    height: auto; 
    margin: 0 auto;
  }

  .img-spectacle {
    width: 240px;
    height: 240px;
    margin: 0 auto;
  }

  .txt-espectacle {
   
    margin: 10px auto;
  }

  .showName {
    padding: 1rem;
    margin: 0 auto;
  }

  .bloc-img-spect {
    display: flex;
    justify-content: center;
   margin: 20px auto;
  }
.col-12{
 
}
.container{

}
}

.copyright {
  margin: 2rem auto 1rem;
}
@media screen and (min-width:768px) {
  .espectacle-bloc {
    flex-direction: row;
    padding:0;
    justify-content:center;
    flex-wrap: wrap;
    align-items: center;
  }
  .bloc-img-spect {
    /* display: flex;
    justify-content: center; */
  width: 100%;
  
  }
  .img-spectacle {
    width: 230px;
    height: 230px;
   
  }
}

@media screen and (min-width:1024px) {

  .img-spectacle {
    width: 230px;
    height: 230px;
  }
   .espectacle-bloc {
    padding:0
  }
  .container{
    max-width: 1000px;
  }
}

@media screen and (min-width:1200px) {

  .img-spectacle {
    width: 230px;
    height: 230px;
  }
   .espectacle-bloc {
    padding:0
  }
  .container{
    max-width: 1100px;
  }
}
@media screen and (min-width:1920px) {

  .bloc_thumb {
  margin-top: 140px;
  margin-bottom: 100px;
  
}
}

/* ************************ ANIM ************************* */

/* ************  anim__navBar */
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

.item6 {
  animation-name: item6;
  animation-delay: 1s;
  animation-duration: 0.6s;
  animation: item6 .6s cubic-bezier(0, 1.32, 1, 1.14) 1s backwards;
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
    width: 60%;
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

@keyframes item6 {
  0% {
    transform: translatex(550px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

/* ************  FIN anim__navBar */
</style>
