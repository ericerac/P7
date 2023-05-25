<template>
  <div class="container-fluid fond texte" :class="{ bgDark: darkTheme }">

    <div class="row g-0">
      <div class="bloc_loop col-12" v-for="(i) in pageData" :key="i._id">
        <div class="header col-12">
          <div class="header_title bgTitleClT">
            <h1 class="text title_1_1" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.title_1 }}</h1>
          </div>
        </div>
        <div class="bloc_vid_img">
          <div class="vid">
            <iframe width="560" height="315" :src="i.linkVideo" title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
          <div class="img_grid">
            <div class="loop_bloc_image" v-for="(img, index) in imgData" :key="`item-${index}`">
              <img class="img_loop" :src="img.imageUrl" alt="">

            </div>
          </div>
        </div>
        <div class="bloc_thumb ">
          <div class=" bloc_info col-12">
            <div class="bloc_sinopsis">
              <h6 class="title_info_sinopsis col-2 text" :class="darkTheme ? 'txtDark' : 'txtDay'">
                <strong>Sinopsis</strong>
              </h6>
              <div class="bloc_text_synopsis">
                <div>
                  <img class="guillemet_start guillemet" src="../assets/design/Guiillemet_Start.webp"
                    alt="guillemet_start">
                </div>
                <p class="sinopsis text" :class="darkTheme ? 'txtDark' : 'txtDay'">
                  {{ i.synopsis_1 }}
                </p>
                <div>
                  <img class="guillemet_end guillemet " src="../assets/design/Guiillemet_End.png" alt="guillemet_end">
                </div>
              </div>
            </div>
            <div class="bloc_fiche_art">
              <h6 class="title_info text" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>{{ i.p_1 }}</strong> </h6>
              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.p_2 }}
              </p>
              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.p_3 }}
              </p>
              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.p_4 }}</p>
              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.p_5 }}</p>
              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.p_6 }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class=" container-fluid fiches">
        <div class="row">
          <div class="fiche_art col-10">
            <span class="title_fiche text" type="button" @click="open_fiche = !open_fiche"
              :class="darkTheme ? 'txtDark' : 'txtDay'">Fitxa artística
            </span>
            <div class="bloc_text_fiche" id="fiche" v-if="open_fiche">

              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'"> <strong>Creació i interpretació:</strong> Emma
                Bassas, Marta Renyer i La Maria Rosa
              </p>
              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>Direcció:</strong> Sergi Estebanell
              </p>
              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>Assessors creatius:</strong> Marta Sitjà,
                Adrian Schvarzstein I Judit Martin
              </p>
              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>Escenografía:</strong> Eric Rieu i Las
                Kakofónikas
              </p>
              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>Vestuari:</strong> Lluna Albert i Las
                Kakofónikas
              </p>
              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>Disseny i Assessoría de
                  peluquería:</strong> Fafá Franco
              </p>
              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>Producció:</strong> Las Kakofonias</p>
              <p class="text" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>Suport a la Creació:</strong> Circ Cric,
                Festival Internacional Pallasses
                Circ Cric, Fundació la
                Plana, La Farinera del Clot, Centre Cultural Sant Jaume Premià de Dalt, Centre Civic
                Can Felipa.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ref } from 'vue';




export default {
  name: "kakofonikas",


  data() {
    return {

      open_fiche: false,
      navbarOk: false,
      dark: ref(""),
    }
  },

  created: function () {
    this.getPageData();
    this.getImgData();
  },
  computed: {
    ...mapState({
      pageData: "pageData",
      imgData: "imgData",
      darkTheme: "darkTheme"
    }),
  },
  methods: {
    getPageData() {
      const n = "kakos";
      this.$store.dispatch("getPageData", n)
        .then((res) => {
          if (res) {
            console.log("RERURN GETPAGE-----> ")
          }
        })
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },

    getImgData() {
      const n = "kakos";
      this.$store.dispatch("getImgData", n)
        .then((res) => {
          if (res) {
            console.log("RERURN GETIMG-----> ")
            // this.timeSlide();
          }
        })
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },

  },
}
</script>

<style scoped>
@import "../styles/font.css";
@import "../styles/theme.css";

@import url("../styles/bloc_nav.css");
@import url("../styles/bloc-nav-c.css");


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --fontSizeTitle: calc(30px + 3vw);
  --colorTexte: v-bind(color);
}

.container-fluid {
  position: relative;
  margin: 0 auto;

}

.header {
  position: relative;
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  height: auto;
  align-items: center;
}

.bloc_loop {
  background: transparent;
}

/* .header_title h1 {

  font-family: 'Sawarabi Mincho', serif;
  font-size: var (--fontSizeTitle);
  width: min-content;
  height: auto;
} */
.bgTitleClT{
  width:350px;
 height:170px;

}
.bgTitleClT{
  position:relative;
  clip-path: polygon(0% 0%, 100% 15%, 100% 100%, 0% 85%);
  background: var(--bgTitle);
  z-index:2;
  
}
.title_1_1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  font-size:50px;
  color:white
 
}
h6>strong {
  border-bottom: 1px solid black;
}

/* *********** BLOC VIDEO IMG*********** */

iframe {
  width: 350px;
  height: 300px;
}

.img_grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: auto;
  gap: 10px;
  width: 100%;

}

.img_loop {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.img_loop:hover {
  border: 2px solid white;
  border-radius: 5px;
  transform: scale(1.5) rotate(1turn);
  transition: 300ms;

}

/* *********  BLOC TEXTE  ********** */
.bloc_info {
  text-align: left;
}

.bloc_sinopsis {
  margin: 30px;
}

.bloc_text_synopsis>div {
  width: 100%;
  height: 33px;


}

.bloc_text_synopsis :first-child {
  text-align: start;
  margin-bottom: -20px;
  margin-top: 10px;
}

.bloc_text_synopsis :last-child {
  text-align: end;
  margin-top: -10px;
}

.sinopsis {
  display: flex;
  flex-wrap: wrap;
  text-align: justify;
  text-indent: 50px;
}

.guillemet {
  width: 30px;
  height: 30px
}

.guillemet_end {
  margin-right: 0;
}

.title_info {
  margin-bottom: 30px;
}

.bloc_fiche_art {
  margin: 30px;
}


/* ***********  FICHE  *********** */
.fiche_art {
  text-align: left;
  margin: 30px;
  font-family: 'Sawarabi Mincho', serif;
  font-size: 14px;
}

.title_fiche {
  margin-bottom: 30px;
  padding: 5px 20px;
  border: 1px solid black;
  box-shadow: 2px 2px black;
  outline: 1px solid white;

}

.title_fiche:active {

  box-shadow: inset 2px 2px black;

}
@media screen and (min-width:768px) and (max-height:500px) {
  .header {
    align-items: baseline;
margin-top:50px;
    margin-bottom: 50px
  }


}

@media screen and (min-width:768px) {

  .bloc_loop {
    margin-top: 100px
  }

  .header {
    height: auto;
    align-items: baseline;
    margin-bottom: 30px;
  }

  .bloc_vid_img {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    height: auto;

    align-items: center;

  }

  .img_grid {
    display: flex;
    width: 100%;
    margin-top: 40px;
    padding: 100px 10px;
    background-color: chocolate;
    clip-path: polygon(0 12%, 100% 0, 100% 88%, 0 100%)
  }

  .img_loop {
    width: 200px;
    height: 200px;

  }

  .vid {
    width: 100%;
  }

  iframe {
    width: 80%;
  }

  .bloc_sinopsis {
    width: 70%;
    margin: 50px auto;
  }

  .bloc_fiche_art {
    text-align: center;
  }

  .fiche_art {
    margin: 0 auto;
    text-align: center;
  }
}



@media screen and (min-width:992px) {
  .bloc_vid_img {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    clip-path: polygon(0 0, 50% 12%, 100% 0, 100% 88%, 50% 100%, 0 88%);
    background-color: chocolate;
  }
  
  .vid {
    height: 510px;
    padding: 100px 0px;
  }

  .img_grid {
    height: 510px;
    margin-top: 0;
    background: none;
  }

  iframe {
    width: 80%
  }

  .img_loop {
    width: 150px;
    height: 150px;
  }

  .bloc_info {
    text-align: center;
    margin: 50px auto;
  }

  .bloc_sinopsis,
  .bloc_fiche_art,
  .fiche_art {
    margin: 30px auto;
    width: 60%;
  }

  .title_info_sinopsis {
    width: 100%;
    text-align: center;
  }

  .fiche_art {
    text-align: center;
  }
}

@media screen and (min-width:1140px) and (min-height:800px) and (max-height:900px) {
  .bloc_info {
    background-color: rgba(110, 110, 110, .2);
    padding: 10px 0;
    margin-top: 20px;
    border-radius: 30px 0 30px 0;
    width: 70%;
    box-shadow: 5px 5px 20px;
    margin: 50px auto;
  }

  .bloc_text_fiche {
    background-color: rgba(110, 110, 110, .2);
    padding: 30px 60px;
    margin-top: 20px;
    border-radius: 30px 0 30px 0;
    width: 90%;
    box-shadow: 5px 5px 20px;
    margin: 50px auto;
    text-align: start;
    line-height: 30px;
  }
  
  iframe {
    width: 70%
  }
}

@media screen and (min-width:1200px) {
  
}


@media screen and (min-width:1440px) {
  
  .bloc_vid_img {
    justify-content: center;
  }

  .vid {
    width: 45%;
    max-width: 600px;

  }

  .img_grid {
    width: 45%;
    max-width: 600px;
  }

}

@media screen and (min-width:1660px) {
  .header{
    margin-top:50px;
  }

  .bloc_sinopsis {
    max-width: 1000px;
  }
}</style>