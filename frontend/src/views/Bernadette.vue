<template>
  <div>
    <div class="container text-center">
      <div class="bloc_nav " v-if="navbarOk" >
        <navbar />
      </div>
      <div class="row">
        <div class="bloc_page col-12">
          <h1>{{ pageData[0].title_1 }}</h1>
          <div class="img_left col-lg-12 col-xl-12">
            <img class="img_principale col-lg-12" :src="pageData[0].imageUrl" alt="">
          </div>
          <div class="bloc_text col-12 col-lg-12 col-xl-12 text-center">

            <!-- <div class="line"></div> -->
            <div class="arabesc"><img src="../assets/design/arabesc_1.png" alt=""> </div>
            <div class="sous_titre ">
              <h4 class="fw-light "><i>{{ pageData[0].subTitle_1 }}</i> </h4>
            </div>
            <div class="synopsis col-10 col-sm-6">
              <p v-if="pageData[0].synopsis"> {{ pageData[0].synopsis }} </p>
              <p v-if="!pageData[0].synopsis"> {{ pageData[0].synopsis_1 }} {{ pageData[0].synopsis_2 }}</p>
            </div>
            <!-- <div class="line"></div> -->
            <div class="arabesc"><img src="../assets/design/arabesc_1.png" alt=""> </div>
            <div class="bloc_down mb-3">
              <div class="video col-12 col-sm-6">

                <iframe class=" video_frame col-12 col-lg-12" src="https://player.vimeo.com/video/354194975"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""></iframe>
              </div>

              <div class="bloc_reverse col-12 col-sm-6">
                <!-- <div class="line"></div> -->
                <div class="fiches col-12">
                  <div class="fiche_art col-12 col-md-8 col-lg-7 col-xl-6 text-center">
                    <h6><strong>- Fiche artistique -</strong></h6>
                    <ul>
                      <li>Creation et interprétation: Marta Renyer</li>
                      <li>Direction: Christophe Thellier</li>
                      <li>Accompagnement choréographique: Janna Grulichova i Muriel Deville</li>
                      <li>Scénographie et accessoires: Eric Rieu</li>
                      <li>Costume: Marta Renyer</li>
                      <li>Production: Marta Renyer i Cia. Toc Toc Théâtre</li>
                      <li>Suport: Centre Cívic Sarrià</li>
                      <li>Première 2018</li>
                    </ul>>
                  </div>

                  <div class="fiche_basic col-12 col-md-4 col-lg-5 col-xl-6 text-center">
                    <h6><strong>- Info basique -</strong></h6>
                    <ul>
                      <li>Número gala</li>
                      <li>Clown gestuel</li>
                      <li>Sans text</li>
                      <li>7 mn</li>
                      <li>Tout public</li>
                    </ul>
                    <!-- <a class="btn_dossier" href="./assets/files/Fitxes KAKOS.pdf" download>
            Descarregar fitxa tècnica >
          </a> -->
                    <button class="btn_dossier">Dossier</button>
                  </div>
                </div>

              </div>

              <div class="line"></div>

              <button v-on:click="changeWidth()">Change</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cadre" v-bind:style="{ background: 'url(' + background + ')' }"> </div>
    </div>
    <foot />
  </div>
</template>

<script>
const FormData = require("form-data");

// import { axios } from "axios";
import { mapState } from "vuex";

import { delire } from "../modules/script";
delire("PATATE FROIDE");

import navbar from "../components/nav_bar.vue"
import foot from "../components/footer.vue"



// const viewWidth = ()=>{
//   if(window.innerWidth < 576){
//     console.log("VIEWPORT",window.innerWidth );
//   }else {
//     console.log("VIEWPORT LARGE",window.innerWidth );
//   }
// }
// viewWidth();

export default {
  name: "Bernadette",
  data() {
    return {
      background: "",
      navbarOk: false,
     
    }
  },
  created: function () {

    this.getNavData();
    this.getPageData();

  },

  computed: {
    ...mapState({
      accueilData: "accueilData",
      pageData: "pageData",
      navData:"navData"
    }),
    computedBack: function () {
      this.background = this.pageData[0].imageUrl;
      console.log("CHANGE WIDTH", this.background);
    }
  },
  components: {
    navbar,
    foot,
  },
  methods: {

    changeWidth (event) {
      // this.background = this.pageData[0].imageUrl;
      // console.log("CHANGE WIDTH", this.background);
    },

    getPageData() {
      const n = "bernadette";
      this.$store.dispatch("getPageData", n)
        .then((res) => {
          if (res) {

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
};
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');

.bloc_nav {

position: sticky;
top: 20px;
z-index: 1000;

}
.cadre {
  width: 200px;
  height: 200px;
  border: 2px solid red;
}

h1 {
  font-family: 'Amatic SC', cursive;
  font-weight: bold;
  margin-top: 0;
}

h6 {
  color: rgba(0, 0, 0, .5)
}

.container-fluid {
  width: auto;
}

iframe {
  width: 540px;
  height: 315px;
}

.video_frame {
  margin: 0 auto;
}

.bloc_page {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
}

.bloc_down {
  display: flex;
  flex-direction: row;

}

.img_left {
  display: flex;
  justify-content: center;
  object-fit: cover;
  overflow: hidden;
}

.img_principale {
  width: 1000px;
  height: auto;
  /* margin-left: 70px; */
}


.arabesc {
  margin: 2rem auto
}

.line {
  width: 25%;
  height: 4px;
  background-color: rgb(249, 4, 4);
  margin: 2rem auto;
}

.fiches {
  display: flex;
  flex-direction: row;
  /* text-align: center; */
  /* padding-left: 2rem; */
  margin: 1rem 1rem;


}

.synopsis {
  margin: 2rem 1rem;
  /* text-align: left; */
  margin: 0 auto;
}

.fiche_basic {
  display: flex;
  flex-direction: column;
  align-items: center;

}

ul {
  margin: 0 auto;
  padding: 0;
  font-weight: 100;


}

li {
  color: rgba(0, 0, 0, .6)
}

.video {
  margin: 0 auto;
  padding: 0;
  align-items: center;
  text-align: center;
}

.btn_doss {
  display: flex;
  flex-direction: row;
  justify-content: left;
  /* width: auto;
  align-items: flex-start; */
}

.btn_dossier {
  width: 20%;
  max-width: 200px;
  min-width: 100px;
  height: 55px;
  background-color: #e02b20;
  color: white;
  border: none;
  font-size: 26px;
  margin: 20px;
  box-shadow: 2px 2px 3px #e02b20;
}

.btn_dossier:hover {
  background-color: rgba(224, 43, 32, .7);

  transition: 200ms;
  box-shadow: 2px 2px 3px #ac0b03;
}

@media screen and (max-width:576px) {
  .img_left {
    display: none;
  }

  .bloc_nav {
    position: absolute;
    top: 20px;
    right: 20px;
  }
.bloc_down{
  flex-direction: column;
}
  .fiches {

    flex-direction: column-reverse;
    text-align: center;
    /* padding-left: 2rem; */
    margin: 1rem 1rem;

    justify-content: space-evenly;
  }

  .synopsis {
    margin: 2rem auto;
    text-align: justify;

  }
  

  .bloc_text {
    margin: 0;
    width: 100%;
  }

  iframe {
    width: 340px;
    height: 215px;
  }

  .bloc_reverse {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
}

@media screen and (max-width:990px) {
  .img_left {
    display: none;
  }
}

@media screen and (max-width:1200px) {
  .video_frame {
    margin: 0 auto;
    /* width: 400px; */
    height: 300px
  }
}
</style>