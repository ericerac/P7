<template>
  <div class="fond">
    <div class="container text-center sticky_bloc">
      <div class="bloc_nav" v-if="navbarOk">
        <navbar />
      </div>

      <div class="row bloc_thumb pt-5 pb-5">
        <div class="  col-lg-6 col-xl-6 left-bloc">
          <div class="title_name item1 texte">
            <h1 class="titles">{{ pageData[0].title_1 }}</h1>
          </div>
          <div class="subTitle_name item2 texte">
            <p>{{ pageData[0].subTitle_1 }}</p>
          </div>
          <div class="line item3"></div>
          
        </div>

        <div class="col-12 col-md-6 col-lg-6 right_bloc">
          <div class="img_back ">

            <img class="img_principale" :src="pageData[0].imageUrl" alt="image" />

          </div>
        </div>
      </div>
    </div>

    <!-- SWITCH -->

    <div class="container switch_dynamic">


    </div>

    <!-- ------------- BLOC ESPECTACLE ------------ -->
    <div class="container  text-center
    ">

      <div class="row txt-espectacle texte ">
        <h2  class="titles">Espectacles</h2>
      </div>
      <div class="row  col-12 " id="spectacle" v-motion-slide-visible-once-bottom>

        <div class="espectacle-bloc col-12 col-md-6 col-lg-4 col-xl-3" v-for="(i, index) in imgData" :key="i._id">



          <div class="bloc-img-spect col-12 col-md-6" v-motion-slide-visible-once-bottom>
            <span class="span1"></span>
            <span class="span2"></span>

            <router-link v-if="index == 0" to="/kakos">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName texte">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 1" to="/emperdonadas">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName texte">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 2" to="/bernadette">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName texte">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 3" to="/creation">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName texte">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 4" to="/elvira">
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


      <foot />


    </div>
  </div>
</template>

 <!-- ************* SCRIPT ************* -->
<script>
import { mapGetters, mapState } from "vuex";
import navbar from "../components/nav_bar.vue"
import foot from "../components/footer.vue"
import vIntersect from "vue-intersection-observer"


export default {
  name: "portada",

  data: function () {
    return {
      home: false,
      navbarOk: false,
    
    };
  },
  created: function () {

    this.getPageData();
    this.getNavData();

  },


  computed: {
    ...mapState({
      pageData: "pageData",
      imgData: "imgData",
      auth: "auth"
    }),


    

  },
  components: {
    navbar,
    foot,
    vIntersect,
   
  },



  methods: {
    


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

              .then((res) => {
                if (res) {
                  console.log("RES GET PORTADA IMG DATA");


                }
              })
          }
          ;

        })
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
@import url("../styles/bloc_nav.css");



.titles {
  color: white;
  text-shadow:0 0 30px #f92424,0px 0px 50px rgba(251, 41, 41, 0.5), 0 0 150px #EC637B,0 0 30px #f92424;
}

html {
  scroll-behavior: smooth;
  --res: 25vw;
}

a {
  
  color: rgb(7, 8, 9);
  text-decoration: none;

}
.sticky_bloc{
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.left-bloc{
height:15vh;
display:flex;
flex-direction: column;
justify-content: space-between;
}
.title_name {
  display:flex;
  width:50%;
  justify-content: center;
  margin:0 auto;

}
.title_name > h1 {
  text-shadow:0 0 30px #f92424,0px 0px 50px rgba(251, 41, 41, 0.5), 0 0 150px #EC637B,0 0 30px #f92424;
  color:#f2eeee;

}
h1{

  display:flex;
  text-align: center;
 

}
.texte {
  color: rgb(253, 251, 251);
  
}


.fond {
  background-color: #030303;
  /* background-image: url("../assets/design/white-texture.webp"); */
}

.container-fluid {
 
  background: transparent;
 
  position: relative;
}





.copyright {
  color: white;

  text-align: right;
}

.footer {
  margin: 0 auto;
}

.img_back {
  
  width: auto;
  height: auto;
  margin-top: 0;
  margin-right: 0;


}

.img_principale {
  width: 100%
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

/* .left-bloc {
  text-align: center;
  align-items: center;
  color: white;
} */

.bloc_thumb {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
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
  .bloc-img-spect {
    position: relative;
    display: flex;
    justify-content: center;
    width: 300px;
    /* border: 1px solid red; */
    box-shadow: 0 0 10px rgba(252, 48, 48,.3), 0 0 15px rgba(252, 48, 48,.3), 0 0 30px rgba(252, 48, 48,.3);
    background-color: rgba(252, 48, 48,.3);
    box-shadow: 0 0 10px rgba(251, 250, 250, 0.3), 0 0 15px rgba(251, 250, 250, 0.3), 0 0 30px rgba(251, 250, 250, 0.3);
    margin: 20px auto;
    padding-top: 20px;
    border-radius: 10px;
  }
  .bloc-img-spect::before {
    content:"";
    position:absolute;
    top:10px;
    left:10px;
    width:15px;
    height:15px;
    border-radius: 50%;
    background-color: #f2eeee;
    box-shadow: 2px 2px  rgb(7, 7, 7), 4px 4px  rgb(7, 7, 7);
  }
  .bloc-img-spect::after {
    content:"";
    position:absolute;
    top:10px;
    right:10px;
    width:15px;
    height:15px;
    border-radius: 50%;
    background-color: #f2eeee;
    box-shadow: 2px 2px  rgb(7, 7, 7), 4px 4px  rgb(7, 7, 7);
  }
  .span1{
    
    position:absolute;
    bottom:10px;
    right:10px;
    width:15px;
    height:15px;
    border-radius: 50%;
    background-color: #f2eeee;
    box-shadow: 2px 2px  rgb(7, 7, 7), 4px 4px  rgb(7, 7, 7);
  }
  .span2{
    
    position:absolute;
    bottom:10px;
    left:10px;
    width:15px;
    height:15px;
    border-radius: 50%;
    background-color: #f2eeee;
    box-shadow: 2px 2px  rgb(7, 7, 7), 4px 4px  rgb(7, 7, 7);
  }
  .img-spectacle {
    width: 240px;
    height: 240px;
    margin: 0 auto;
    object-fit: cover;
  
  padding: 0px;
  /* box-shadow: 0 0 10px rgb(252, 48, 48,.5), 0 0 15px rgb(252, 48, 48,.5), 0 0 30px rgb(252, 48, 48,.5) ; */

  }
  
  .img-spectacle:hover{
  box-shadow: 0 0 10px rgb(252, 48, 48,.5), 0 0 50px rgb(252, 48, 48,.5), 0 0 50px rgb(252, 48, 48,.5);
  transition:.25s 
}
  
/* .espectacle-bloc {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}
.copyright {
  margin: 2rem auto 1rem;
}
.img-spectacle {
  border-radius: 50%;
  width: 300px;
  height: 300px;
  object-fit: cover;
  
  padding: 0px;
  box-shadow: 0 0 10px rgb(85, 84, 84);

} */

.txt-espectacle {
  color: rgb(13, 15, 15);
  margin: 30px auto;
}
.showName {
    padding: 1rem;
    margin: 0 auto;
    text-shadow: 2px 2px 10px  white ;
  }

  .txt-espectacle {

margin: 10px auto;
}


/* BLOC_THUMB  */




@media screen and (min-width:576px) {
  .bloc_nav {
    position: sticky;
    top: 20px;
    z-index: 123;
  }
}
@media screen and (min-width:768px) and (max-height:440px){
  
  .img_principale {
  width: 100%
}
.bloc_thumb{
  height:auto;
  display:flex;
  flex-direction: row;
}
.img_back{
    width: 100%;
  
  }
  .left-bloc{
width:50%;
  }
  .espectacle-bloc {
    flex-direction: row;
    width: 300px;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
}
@media screen and (min-width:768px) {
  .espectacle-bloc {
    flex-direction: row;
    width: 300px;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }

  /* .bloc-img-spect {
    
    width: 100%;

  } */
  .bloc_thumb{
  height:auto;
  display:flex;
  flex-direction: row;
}
  .img-spectacle {
    width: 230px;
    height: 230px;
    box-shadow: 1px 1px 10px 1px white;

  }
}

@media screen and (min-width:1024px) {

  .img-spectacle {
    width: 230px;
    height: 230px;
  }

  .espectacle-bloc {
    padding: 0;
    flex-direction: row;
    flex-wrap: wrap;
    width: 300px;
  }

  .container {
    max-width: 1000px;
  }
}

@media screen and (min-width:1200px) {
  .right_bloc{
    position:relative;
   
  }
  .img_back{
    position: relative;
    background-color: #f60404;
   
  
  }
  .img_principale{
    position: relative;
    top:-20px;
    left:-20px;
  
    z-index: 2;
  }

  .img-spectacle {
    width: 230px;
    height: 230px;
  }

  .espectacle-bloc {
    padding: 0
  }

  .container {
    max-width: 1100px;
  }
}
@media screen and (min-width:1440px) {
  #spectacle{
    padding:50px 30px 30px 30px;
   justify-content: center;
    border-radius: 20px 0;
    box-shadow:  
     white 0.006em 0.006em 0.007em,
    rgba(251, 36, 36,.3) 1px 1px 1px,
    rgba(251, 36, 36,.3)  2px 2px 1px,
    rgba(251, 36, 36,.3) 3px 3px 1px,
    rgba(251, 36, 36,.3)  4px 4px 1px,
    rgba(251, 36, 36,.3) 5px 5px 1px,
    rgba(251, 36, 36,.3)  6px 6px 1px,
    rgba(251, 36, 36,.3)  7px 7px 1px,
    rgba(251, 36, 36,.3)  8px 8px 1px,
    rgba(251, 36, 36,.3) 9px 9px 1px,
    rgba(251, 36, 36,.3)  10px 10px 1px,
    rgba(251, 36, 36,.3)11px 11px 1px,
    rgba(251, 36, 36,.3) 12px 12px 1px;
    color:#fff;
background-color:rgba(113, 130, 141,.3);
 ;
  }
  .espectacle-bloc{
    margin: 30px;
  }
  .container{
  max-width: 1300px;}
}
@media screen and (min-width:1920px) {
  
 
  .bloc_thumb {
    margin-top: 40px;
    margin-bottom: 100px;

  }
}

/* ************************ ANIM ************************* */

/* ************  anim__navBar */
.line {
  width: 60%;
  border: solid 2px rgb(255, 0, 8);
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
