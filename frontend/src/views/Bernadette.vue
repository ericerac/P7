<template>
  <div class="fond texte" :class="{ bgDark: darkTheme }">
    <div class="container-fluid text-center ">
    
      <div class="row">
        <div class="bloc_page col-12 ">
          <div class="bloc_title">
            <span><img src="../assets/design/arabesc_1.png" alt=""></span>
          
          <h1 class="title_text title_texte" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].title_1 }}</h1>
          <span><img src="../assets/design/arabesc_1.png" alt=""></span>
        </div>
          <div class="img_left col-lg-12 col-xl-12">
            <img class="img_principale col-lg-12" :src="pageData[0].imageUrl" alt="">
          </div>
          <div class="bloc_text col-12 col-lg-12 col-xl-12 text-center">

          
            <div class="arabesc"><img src="../assets/design/arabesc_1.png" alt=""> </div>
            <div class="sous_titre ">
              <h4 class="fw-light title_texte" :class=" darkTheme ? 'txtDark' : 'txtDay' "><i>{{ pageData[0].subTitle_1 }}</i> </h4>
            </div>
            <div class="synopsis col-10 col-sm-6">
              <p v-if="pageData[0].synopsis" :class="darkTheme ? 'txtDark' : 'txtDay'"> {{ pageData[0].synopsis }} </p>
              <p v-if="!pageData[0].synopsis" :class="darkTheme ? 'txtDark' : 'txtDay'"> {{ pageData[0].synopsis_1 }} {{ pageData[0].synopsis_2 }}</p>
            </div>
       
            <div class="arabesc"><img src="../assets/design/arabesc_1.png" alt=""> </div>
            <div class="bloc_down mb-3 texte">
              <div class="video ">

                <iframe class=" video_frame " src="https://player.vimeo.com/video/354194975"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""></iframe>
              </div>

              <div class="bloc_reverse texte">
            
                <div class="fiches col-12 col-xxl-8">
                  <div class="fiche_art col-12 col-md-8 col-lg-7 col-xl-6 text-center">
                    <h6 class="title_texte " :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>- Fiche artistique -</strong></h6>
                    <ul class="li">
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'" ><strong>Creation et interprétation: </strong> Marta Renyer</li>
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>Direction: </strong> Christophe Thellier</li>
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'"> <strong>Accompagnement choréographique: </strong> Janna Grulichova i Muriel Deville</li>
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'"> <strong>Scénographie et accessoires: </strong>  Eric Rieu</li>
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>Costume: </strong>  Marta Renyer</li>
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>Production: </strong>  Marta Renyer i Cia. Toc Toc Théâtre</li>
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>Suport: </strong>  Centre Cívic Sarrià</li>
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'">Première 2018</li>
                    </ul>
                  </div>

                  <div class="fiche_basic col-12 col-md-4 col-lg-5 col-xl-6 text-center">
                    <h6 class="title_texte" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>- Info basique -</strong></h6>
                    <ul>
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'">Número gala</li>
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'">Clown gestuel</li>
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'">Sans text</li>
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'">7 mn</li>
                      <li class="li_fiche" :class="darkTheme ? 'txtDark' : 'txtDay'">Tout public</li>
                    </ul>
                    <!-- <a class="btn_dossier" href="./assets/files/Fitxes KAKOS.pdf" download>
            Descarregar fitxa tècnica >
          </a> -->
                    <button class="btn_dossier">Dossier</button>
                  </div>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
const FormData = require("form-data");

import { mapState } from "vuex";
import { ref } from "vue";


export default {
  name: "Bernadette",
  data() {
    return {
      background: "",
      navbarOk: false,
      dark:ref("")
     
    }
  },

  created: function () {
   
    this.getPageData();
  },

  beforeMount: function () {
    console.log("BEFORE MOUNT BERNADETTE");
   
  },

  computed: {
    ...mapState({
      pageData: "pageData",
      darkTheme:"darkTheme"
    }),
  },
  methods: {

    getPageData() {
      const n = "bernadette";
      this.$store.dispatch("getPageData", n)
        .then((res) => {
          if (res) {

          }
        })
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },

  },
}
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap');
@import url('../styles/theme.css');
@import url('../styles/font.css');

h1 {
  
  font-weight: bold;
  margin-bottom: 20px;
}

.container-fluid {
  width: auto;
}

.container-fluid-footer {
    width: 100vw;
    margin: 0 auto
}

.video_frame {
  margin: 0 auto;
}

.bloc_page {
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 100%;
}
.bloc_title > span{
display:none;
position:relative;
}

.bloc_down {
  display: flex;
  flex-direction: column;

}
.video{
  width: 100%;
  height: auto;
}
.arabesc{

}
iframe {
  width: 340px;
  height: 215px;
  border:1px solid white
}
.img_left {
  display: flex;
  justify-content: center;
  object-fit: cover;
  overflow: hidden;
}

.img_principale {
  width: 100%;
  height: auto;
  max-width: 800px;
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
  flex-direction: column-reverse;
  margin-top:20px;

}
.li_fiche{
width:auto;

}
.synopsis {
  margin: 2rem 1rem;
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
text-align: left;
line-height: 26px;

}

li {
  display:flex;
  flex-wrap: wrap;
  font-size: 14px;
  font-family: 'Sawarabi Mincho', serif;
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
  box-shadow: 2px 2px 5px #9d1b14;
}

.btn_dossier:hover {
  background-color: rgba(224, 43, 32, .7);

  transition: 200ms;
  box-shadow: 2px 2px 3px #ac0b03;
}

@media screen and (min-width:768px) and (max-height:440px) {

  

  .bloc_page {
  display: flex;
  flex-direction: column;
  margin-top:70px;
  width: 100%;
}

.bloc_down {
  display: flex;
}
.fiches{
flex-direction: row;
width: 100%;
}

}
@media screen and (min-width:768px) and (min-height:500px){
 .img_principale{
  width:70%
 }
  .fiches{
    flex-direction: row;
  }
  .bloc_page {
    margin-top:60px
  }
  .bloc_title > span{
display:block;
opacity: .6;
}
  .bloc_title > h1{
margin:0;
font-size: 40px;
}
.bloc_title{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  margin:20px auto 30px
}
.bloc_reverse{
  margin-top:50px
}
}
@media screen and (min-width :1024px) {

  .fiche_art{
    padding-left:50px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
  }
  .bloc_title > h1{
margin-top:30px;
font-size: 40px;
}
}
@media screen and (min-width :1280px) {
  .bloc_reverse{
    display:flex;
  justify-content: center;
}
  .img_principale{
    width:60%;
  }
  .bloc_title{
    margin:40px auto 30px
  }
}
</style>