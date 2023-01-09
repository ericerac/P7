<template>
  <div class="container background">
    <div class="bloc_nav " v-if="navbarOk">
      <navbar />
    </div>
    <div class="row g-0">
      <div class="slider">
        <!-- <Carousel /> -->


        <div class="loop" v-for="(img, index) in imgData" :key="`item-${index}`">
          <transition name="slider-in">
            <img v-if="index === currentSlide" class="img_diapo" :src="img.imageUrl" alt="">

          </transition>
        </div>
      </div>

      <div class="bloc_loop col-12" v-for="(i, index) in pageData" :key="i._id">


        <!-- <div class="back col-12" v-bind:style="{ backgroundImage: 'url(' + i.imageUrl + ')' }">

      </div> -->

        <div class="header col-12">
          <!-- <img class="header_img col-12" :src="i.imageUrl" alt=""> -->
          <div class="header_title">
            <h1>{{ i.title_1 }}</h1>
          </div>

        </div>
        <div class="bloc_thumb ">
          <div class=" bloc_info col-12">
            <div class="bloc_sinopsis">
              <h6 class="title_info_sinopsis col-2"><strong>Sinopsis</strong> 
                </h6>
                <div class="bloc_text_synopsis">
                  <div>
                  <img class="guillemet_start" src="../assets/design/Guiillemet_Start.png" alt="guillemet_start"> </div>
                <p class="sinopsis">
              {{ i.synopsis_1 }}
            </p>
            <div>
            <img class="guillemet_end" src="../assets/design/Guiillemet_End.png" alt="guillemet_end"></div>
            </div>
            </div>
            <div class="bloc_fiche_art">
              <h6 class="title_info "><strong>{{ i.p_1 }}</strong> </h6>
              <p>{{ i.p_2 }}
              </p>
              <p>{{ i.p_3 }}
              </p>
              <p>{{ i.p_4 }}</p>
              <p>{{ i.p_5 }}</p>
              <p>{{ i.p_6 }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class=" container fiches">
        <div class="row">
          <div class="fiche_art col-10">
            <span class="title_fiche" type="button" @click="open_fiche = !open_fiche">Fitxa artística
            </span>
            <div class="bloc_text_fiche" id="fiche" v-if="open_fiche">
             
              <p> <strong>Creació i interpretació:</strong> Emma Bassas, Marta Renyer i La Maria Rosa
              </p>
              <p><strong>Direcció:</strong> Sergi Estebanell
              </p>
              <p><strong>Assessors creatius:</strong> Marta Sitjà, Adrian Schvarzstein I Judit Martin
              </p>
              <p><strong>Escenografía:</strong> Eric Rieu i Las Kakofónikas
              </p>
              <p><strong>Vestuari:</strong> Lluna Albert i Las Kakofónikas
              </p>
              <p><strong>Disseny i Assessoría de peluquería:</strong> Fafá Franco
              </p>
              <p><strong>Producció:</strong>Producció: Las Kakofonias</p>
              <p><strong>Suport a la Creació:</strong>Suport a la Creació: Circ Cric, Festival Internacional Pallasses
                Circ Cric, Fundació la
                Plana, La Farinera del Clot, Centre Cultural Sant Jaume Premià de Dalt, Centre Civic
                Can Felipa.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="footer">
    <foot />
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import navbar from "../components/nav_bar.vue"
import foot from "../components/footer.vue"
import Carousel from "../components/diapo.vue"



export default {
  name: "kakofonikas",
  props: ['slide'],

  data() {
    return {

      open_fiche: false,
      navbarOk: false,
      background: "",
      slideInterval: null,
      currentSlide: 0,
timing:"",
    }
  },
  created: function () {

    this.getNavData();
    this.getPageData();
    this.getImgData();

  },
  mounted() {

  },
  beforeUnmount() {
    clearInterval(this.timing);
  },
  computed: {
    ...mapState({
      pageData: "pageData",
      navData: "navData",
      imgData: "imgData"
    }),

  },
  components: {
    navbar,
    foot,
    Carousel,
  },
  methods: {
    timeSlide(val) {
if(val == "off"){

}else{
      console.log("COMPUTED TIMESLIDE", this.imgData);

      const stringi = JSON.stringify(this.imgData);

      const parsi = JSON.parse(stringi);
      const listIndex = parsi.length;

      let i = "";
 
     this.timing = setInterval(() => {
        if (this.currentSlide == listIndex - 1) {
          console.log("EGAL LIST LENGTH");
          this.currentSlide = this.currentSlide - listIndex + 1;

        } else {
          this.currentSlide = this.currentSlide + 1;
        }


      }, 3000)
    }
    
    },

    getPageData() {
      const n = "kakos";
      this.$store.dispatch("getPageData", n)
        .then((res) => {
          if (res) {

          }
        })
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },

    getImgData() {
      const n = "kakos";
      this.$store.dispatch("getImgData", n)
        .then((res) => {
          if (res) {
              this.timeSlide();
          }
        })
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },
    getNavData() {
      const n = "navbar";
      this.$store.dispatch("getNavData", n)
        .then((res) => {
          if (res) {
            this.navbarOk = true
          }
        });
      console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
    },
  },
}
</script>

<style scoped>

@import "../styles/font.css";
@import "../styles/bloc_nav.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  position: relative;
  margin: 0 auto;
 
}

/* .bloc_nav {
  position: absolute;
  top: 20px;
  width:100vw;
  z-index: 1000;
} */

.slider {
  position: relative;
 
}
h6 > strong{
  border-bottom:1px solid black;
}
.img_diapo {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 30vh;
  object-fit: contain;

}

.bloc_loop {
  margin-top: 70%
}
.img_diapo{
  /* background-color:rgb(254, 196, 145); */
}
.header_title h1 {
  /* font-family: 'Source Serif Pro', serif;
  font-family: 'Sawarabi Mincho', serif;
   font-family: 'Noto Serif', serif; 
  font-family: 'Unna', serif; */
}

.bloc_info {
  text-align: left;
}

.bloc_sinopsis {
  margin: 30px;
}

.bloc_text_synopsis > div{
 width:100%;
 height: 33px;


}
.bloc_text_synopsis :first-child{
  text-align: start;
  margin-bottom: -20px;
  margin-top:10px;
}
.bloc_text_synopsis :last-child{
  text-align: end;
  margin-top:-10px;
}
.sinopsis {
  display:flex;
  flex-wrap: wrap;
  /* margin-top: 20px; */
  text-align:justify;
  text-indent: 50px;
  font-size: 14px;
}
.guillemet_end{
margin-right: 0;
}
.title_info{
  margin-bottom:30px;
}


.bloc_fiche_art {
  margin: 30px;
  

}

.fiche_art {
  text-align: left;
  margin: 30px;
  /* margin-left:30px */
  font-family: 'Sawarabi Mincho', serif;
  font-size: 14px;
}

.title_fiche {
  margin-bottom: 30px;
  padding: 5px 20px;
  border: 1px solid black;
  box-shadow: 2px 2px black;

}

.title_fiche:active {

  box-shadow: inset 2px 2px black;

}

.footer{
  position:relative;
  bottom:0;
  width:100%;
}
@media screen and (min-width:576px) {
  /* .bloc_nav {
    position: fixed;
    top: 20px;
    right: 0px;
    width: 100%;
    margin: 0 auto;
    align-items: center;
  } */
.bloc_nav{
  position:absolute;
  width:100%;
  z-index:100
}
  .row_galerie {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .img_card {
    object-fit: contain;
    width: 350px;
    height: 350px;
    object-fit: contain;
    border: 5px solid white;
    outline: 1px solid black;
  }
  .img_diapo {
  position: absolute;
  top: 70px;
  left:0;
  width: 100%;
  height: 30vh;
  object-fit: contain;

}
.bloc_loop {
  margin-top: 60%
}
.background{
 
  background-image: url("../assets/design/paper-1980_1238.webp");
  background-repeat: repeat-y;
}
}
@media screen and (min-width:768px) and (max-height:440px) {
  
  .img_diapo {
  position: absolute;
  top: 70px;
  left:0;
  width: 100%;
  height: 50vh;
  object-fit: contain;

}
.bloc_loop[data-v-11114c4f] {
    margin-top: 39%;
}
}
@media screen and (min-width:992px) {
  .img_diapo {
  position: absolute;
  top: 70px;
  left:0;
  width: 100%;
  height: 50vh;
  object-fit: contain;

}
.bloc_loop[data-v-11114c4f] {
    margin-top: 40%;
}
.bloc_info{
  text-align: center;
}
.bloc_sinopsis, .bloc_fiche_art, .fiche_art {
  margin: 30px auto;
  width: 60%;
}
.title_info_sinopsis{
  width: 100%;
  text-align: center;
}
.fiche_art{
  text-align: center;
}
}
@media screen and (min-width:1140px) and (min-height:800px) and (max-height:900px) {
  .bloc_info{
  background-color: rgba(0, 0, 0,.2);
  padding: 10px 0 ;
  margin-top:20px;
  border-radius:30px 0 30px 0;
  
  box-shadow: 5px 5px 20px;
}
.bloc_loop[data-v-11114c4f] {
    margin-top: 52%;
}
}
@media screen and (min-width:1200px) {
  .bloc_loop[data-v-11114c4f] {
    margin-top: 47%;
}
}
@media screen and (min-width:1440px) {
  .bloc_loop[data-v-11114c4f] {
    margin-top: 53%;
}
}
/* ********* ANIMATION CAROUSSEL  ********** */

.slider-in-enter-active,
.slider-in-leave-active {
  transition: all 1s ease-in-out;
}

.slider-in-enter-from {
  transform: translateX(-100%);

}

.slider-in-leave-to {
  transform: translateX(100%);

}
</style>