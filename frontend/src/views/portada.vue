<template>
  <div class="fond bdDay" :class="{ bgDark: darkTheme }">
 
    <div class="container text-center sticky_bloc">
      <!-- <div class="bloc_nav" v-if="navbarOk">
        <navbar namePage="portada" :dark = "dark" @theme ="dark=($event)"/>
      </div> -->

      <div class="row bloc_thumb pt-5 pb-5">
        <div class="  col-lg-6 col-xl-6 left-bloc">
          <div class="title_name item1 texte">
            <!-- <h1 class="titles">{{ pageData[0].title_1 }}</h1> -->
            <!-- <div class="nameTitleC">  -->
            <svg viewBox="0 0 1020 400" id="title_1" class="txtDay">
	<text x="50%" y="50%" dy=".35em" text-anchor="middle">
		Marta Renyer
	</text>
</svg>	
            <!-- </div> -->
            <!-- <img src="../assets/logo/download.gif"> -->
          </div>
          <div class="subTitle_name item2 text " :class="darkTheme ? 'txtDark' : 'txtDay'">
            <p>{{ pageData[0].subTitle_1 }}</p>
          </div>
          <div class="line item3"></div>

        </div>

        <div class="col-12 col-md-6 col-lg-6 right_bloc">
          <div class="img_back ">

            <img width="457" height="600" class="img_principale" :src="pageData[0].imageUrl" alt="image" />

          </div>
        </div>
      </div>
    </div>

    <!-- SWITCH -->

    <div class="container switch_dynamic">

      <!-- <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" stroke="red" stroke-width="3" fill="none"></path></svg></div>
    -->

      <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 600 100"><path d="M592.1466064453125,72.25131225585938C497.7748832702637,68.06283124287923,95.15706952412923,51.439791997273765,6.282722473144531,46.335079193115234C-82.59162457784016,41.2303663889567,43.062828063964844,41.49214553833008,58.9005241394043,41.6230354309082C74.73822021484375,41.75392532348633,86.78010241190593,44.371726989746094,101.30889892578125,47.120418548583984C115.83769543965657,49.869110107421875,129.97382609049478,54.973822911580406,146.07330322265625,58.11518478393555C162.17278035481772,61.25654665629069,184.0314178466797,65.83769989013672,197.90576171875,65.96858978271484C211.7801055908203,66.09947967529297,219.3717244466146,61.51832580566406,229.31936645507812,58.9005241394043C239.26700846354166,56.28272247314453,247.1204071044922,53.403141021728516,257.59161376953125,50.26177978515625C268.0628204345703,47.120418548583984,282.32984924316406,40.18324661254883,292.1466064453125,40.0523567199707C301.96336364746094,39.92146682739258,305.3665059407552,45.54973920186361,316.4921569824219,49.4764404296875C327.61780802408856,53.40314165751139,347.38219197591144,63.48167419433594,358.9005126953125,63.61256408691406C370.41883341471356,63.74345397949219,376.3088836669922,51.70156987508138,385.6020812988281,50.26177978515625C394.89527893066406,48.82198969523112,404.05760192871094,53.40314292907715,414.6596984863281,54.97382354736328C425.2617950439453,56.544504165649414,438.2198994954427,58.11518351236979,449.21466064453125,59.68586349487305C460.2094217936198,61.256543477376304,470.28795369466144,63.219892501831055,480.6282653808594,64.39790344238281C490.9685770670573,65.57591438293457,503.0104522705078,67.2774887084961,511.25653076171875,66.7539291381836C519.5026092529297,66.2303695678711,522.9057820638021,61.649216969807945,530.104736328125,61.25654602050781C537.3036905924479,60.86387507120768,547.3822021484375,62.69633356730143,554.4502563476562,64.39790344238281C561.518310546875,66.09947331746419,566.2303365071615,70.15706380208333,572.5130615234375,71.4659652709961C578.7957865397135,72.77486673990886,686.5183296203613,76.43979326883952,592.1466064453125,72.25131225585938C497.7748832702637,68.06283124287923,95.15706952412923,51.439791997273765,6.282722473144531,46.335079193115234" fill="hsl(353, 98%, 41%)" fill-opacity="1"></path><defs><linearGradient id="SvgjsLinearGradient1003"><stop stop-color="hsl(340, 45%, 50%)" offset="0"></stop><stop stop-color="hsl(340, 45%, 80%)" offset="1"></stop></linearGradient><radialGradient id="SvgjsRadialGradient1004"><stop stop-color="hsl(340, 45%, 50%)" offset="0"></stop><stop stop-color="hsl(340, 45%, 80%)" offset="1"></stop></radialGradient></defs></svg>
    -->
    </div>

    <!-- ------------- BLOC ESPECTACLE ------------ -->
    <div class="container  text-center
      ">
     
      <div class="row txt-espectacle text bgTitleClT">
        <h2 class="titles">ESPECTACLES</h2>
      </div>
      <div class="row  col-12 bloc_img_especatcle" id="spectacle" v-motion-slide-visible-once-bottom>

        <div class="espectacle-bloc col-12 col-md-6 col-lg-4 col-xl-3" v-for="(i, index) in imgData" :key="i._id">



          <div class="bloc-img-spect col-12 col-md-6" v-motion-slide-visible-once-bottom>
            <span class="span1"></span>
            <span class="span2"></span>

            <router-link v-if="index == 0" to="/kakos">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="i.showName" />
              <h3 class="showName text " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 1" to="/emperdonadas">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName text " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 2" to="/bernadette">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName text " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 3" to="/creation">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName text " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 4" to="/elvira">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName text txtDay" :class="{ txtDark: darkTheme }">{{ i.showName }} </h3>
            </router-link>
          </div>

        </div>

      </div>
    </div>
    <div class="container">
      <div class="row col-12 mt-5">
        <!-- <div class="copyright">
          <router-link to="/login" target="_blank"><span class="text txtDay" :class="{ txtDark: dark }">@WistitiWeb.com</span></router-link>

        </div> -->
      </div>
      <!-- <p id="demo"></p> -->
    </div>
    <!-- <div class="container-fluid-footer">
      <foot />
    </div> -->
  </div>
</template>

 <!-- ************* SCRIPT ************* -->
<script>
import { mapGetters, mapState } from "vuex";
import {ref, toRef, reactive, computed} from "vue"
// import navbar from "../components/nav_bar.vue"
// import foot from "../components/footer.vue"
import NameTitle from "../components/name_title.vue"
import vIntersect from "vue-intersection-observer";
 import dataCookies from "../js/cookies"
 import { useHead } from '@vueuse/head'
// LOCALISATION UTILISATEUR
// console.log("Welcome to our visitors from "+ geoplugin_city() +", "+geoplugin_countryName()) 

export default {
  name: "portada",

  data: function () {
    return {
      home: false,
      navbarOk: false,
      dark:ref(""),
     descriptionPage:ref("Pagina amb lliste d'espectacles i accesos als espectacles i les seves desciptcions i imatges"),
    };
  },
  
setup()
  {
const siteData = reactive({
  title:"WwbSite test meta",
  description:" Pagina amb lliste i accesos als espectacles de Marta Renyer actriu i pallassa, i les seves desciptcions i imatges",
})

useHead({
  title:"Martas Renyer Inici web",
  meta:[{
    name:'description',
    content:computed(()=> siteData.description)
  }]
})
  },

  mounted: () => {
    // console.log(" MOUNT");
    // window.addEventListener('scroll', this.handleScroll);
   
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    

  beforeMount: function () {
    // console.log("BEFORE MOUNT PORTADA");
    
  },

  created: function () {
    // this.viewWidth();
    // this.getIpClient();
     this.getLocation()
    this. viewWidth()
    this.getPageData();
    //  this.getNavData();


  },


  computed: {
    ...mapState({
      pageData: "pageData",
      imgData: "imgData",
      auth: "auth",
      namePage: "namePage",
      geoLoc: "geoloc",
      status: "status",
      userLocalHour: "userLocalHour",
     loading:"loading",
     darkTheme:"darkTheme"
      
    }),
  },

  watch: {
    darkTheme(n, o) {
      console.log("WATCH THEME ", n);
    }
    // namePage(n, o) {
    //   if (n != o) {
    //     this.getImgData(n);
    //   }
    // }
  },

  components: {
    // navbar,
    // foot,
    vIntersect,
    NameTitle,

  },

  methods: {

    // handleScroll() {
    //         console.log('scroll');
    //         const { scrollTop, scrollHeight, clientHeight } =
    //             document.documentElement;
    //         const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    //         this.scrollPosition = Math.round(scrolled);
    //     },

    

    getLocation() {
      this.$store.dispatch("getLoc")
        .then((res) => {
          this.DataCookies()
        })
    },

    async DataCookies() {
      let dataTheme = await dataCookies();
      // console.log("DATATHEME CALENDAR", dataTheme);
      // this.darkTheme = dataTheme.theme
      // this.dark = dataTheme.dark
    },

    getPageData() {

      console.log("NAME  GET PAGE DATA");
      const n = "portada";
      this.$store.dispatch("getPageData", n)
        .then((res) => {
          if (res) {
            this.$store.dispatch("getImgData", n)
          }
        })
    },

    // getImgData(np) {
    //    console.log("NAME PAGE GET IMG DATA", np);
    //   this.$store.dispatch("getImgData", np)
    // },

    // getNavData() {
    //   const n = "navbar";
    //   this.$store.dispatch("getNavData", n)
    //     .then((res) => {
    //       if (res) {

    //         this.navbarOk = true


    //       }
    //     });
    //   // console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
    // },

    // ******** INFORMATION FUNCTION.......

    // viewWidth() {
    //   // console.log("NAVIGATOR----->", window);
    //   if (window.navigator) {
    //     console.log("NAVIGATOR----->", window);
    //     console.log("NAVIGATOR LANGUAGE----->", window.clientInformation.language);
       
    //   } else {
    //     // console.log("SANS NAVIGATOR");
    //   }
    // },
    viewWidth() {
      if (window.navigator) {
        console.log("NAVIGATOR----->", window);
        // console.log("NAVIGATOR LANGUAGE----->", window.clientInformation.language);
        let dataBrowser = {
          screenHeight: window.innerHeight,
          screenWidth: window.innerWidth,
          browserLanguage: window.navigator.language,
          browserMobile: window.clientInformation.userAgentData.mobile,

          browserVendor:
            window.navigator.vendor,
        };
        console.log("SCREEN USER", dataBrowser);
        // this.dataUser = dataBrowser;
        // this.isActive = false
      } else {
        console.log("SANS NAVIGATOR");
      }
    },

    // getLoc() {
    //   this.$store.dispatch("getLoc")
    // },
    // getIpClient() {
    //   this.$store.dispatch("getIpClient")
    // },


  }, // fin METHODS
};
</script>

<style scoped>

@import url("../styles/theme.css");
@import url("../styles/font.css");


.nameTitleC {
  width: 300px;
}

svg {
  /* font-family: 'Russo One', sans-serif; */
  /* position: absolute; 
  top:0; */
  
   width:auto;
  stroke-width: 18;
}
#title_1{
 
  text-shadow: 0px 3px 3px rgb(251, 93, 93),0px 5px 23px rgb(251, 93, 93), 5px 0px 23px rgb(254, 102, 102);
 
}
.bgTitleClT{
  position:relative;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -0%); */
  clip-path: polygon(0% 0%, 100% 15%, 100% 100%, 0% 85%);
  background: var(--bgTitle);
  /* background: rgba(165, 42, 42, 1); */
  z-index:2;
 
}
.bgTitleClT{
  margin:0 auto;
  width:calc( 300px + 3vw);
  height:100px
}

svg text {
  /* text-transform: uppercase; */
  animation: stroke 2s forwards;
  stroke-width: 16;
  stroke: rgb(62, 1, 1);
  font-size: 140px;
  width:300px;
}

@keyframes stroke {
  0% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(62, 1, 1);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 40%;
    stroke-width: 5;
  }
  

  70% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(62, 1, 1);
  }

  80% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(62, 1, 1);
    stroke-width: 6;
  }

  100% {
    fill: rgb(62, 1, 1);
    fill: rgb(250, 250, 251);
    stroke: rgba(251, 252, 253, .3);
    stroke: rgb(62, 1, 1);;
    stroke-dashoffset: -25%;
    stroke-dasharray: 100% 0%;
    stroke-width: 2;
  }
}

/* .texte {
  color: v-bind(bide);

} */
/*
.fond {
  background-color: v-bind(backLight);

} */

.switch_dynamic {
  margin-top: -10px;
  z-index: -1;
}

.svg_trans {}

.titles {
  position:absolute;
 top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size:var(--fontSizeTitleH2);
  color: white;
  text-shadow: 0 0 30px #f92424, 0px 0px 50px rgba(251, 41, 41, 0.5), 0 0 150px #EC637B, 0 0 30px #f92424;
}

html {
  scroll-behavior: smooth;
  --res: 25vw;
}

a {

  color: rgb(7, 8, 9);
  text-decoration: none;

}

.sticky_bloc {
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.left-bloc {
  position: relative;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title_name {
  display: flex;
  width: 50%;
  justify-content: center;
  margin: 0 auto;

}

.title_name>h1 {
  text-shadow: 0 0 30px #f92424, 0px 0px 50px rgba(251, 41, 41, 0.5), 0 0 150px #EC637B, 0 0 30px #f92424;
  color: #f2eeee;
 
}

h1 {

  display: flex;
  text-align: center;
}

.container-fluid {

  background: transparent;

  position: relative;
}





.copyright {
  color: white;

  text-align: right;
}

/* .container-fluid-footer {
  width: 100vw;
  margin: 0 auto
} */

.img_back {

  width: auto;
  height: auto;
  margin-top: 0;
  margin-right: 0;


}

.img_principale {
  width: 100%;
  height:auto;
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
.bloc_img_especatcle{
  display: flex;
  width:100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.espectacle-bloc {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
  /* box-shadow: 0 0 10px rgba(252, 48, 48,.3), 0 0 15px rgba(252, 48, 48,.3), 0 0 30px rgba(252, 48, 48,.3);
    background-color: rgba(252, 48, 48,.3);
    box-shadow: 0 0 10px rgba(251, 250, 250, 0.3), 0 0 15px rgba(251, 250, 250, 0.3), 0 0 30px rgba(251, 250, 250, 0.3); */
  margin: 20px auto;
  padding-top: 20px;
  border-radius: 10px;
}

/* .bloc-img-spect::before {
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
  } */
/* .span1{
    
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
  } */
.img-spectacle {
  width: 240px;
  height: 240px;
  margin: 0 auto;
  object-fit: cover;
border-radius: 50%;
  padding: 0px;
  /* box-shadow: 0 0 10px rgb(252, 48, 48,.5), 0 0 15px rgb(252, 48, 48,.5), 0 0 30px rgb(252, 48, 48,.5) ; */
  border: 3px solid red;

}

.img-spectacle:hover {
  transform: rotate3d(0, 1, 0, 360deg);
  ;
  transition: .5s
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
  /* text-shadow: 2px 2px 10px  white ; */
}

.txt-espectacle {

  margin: 10px auto;
}


/* BLOC_THUMB  */






@media screen and (min-width:768px) and (max-height:440px) {

  .img_principale {
    width: 100%
  }

  .bloc_thumb {
    height: auto;
    display: flex;
    flex-direction: row;
  }

  .img_back {
    width: 100%;

  }

  .left-bloc {
    width: 50%;
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
  .bloc_thumb {
    height: auto;
    display: flex;
    flex-direction: row;
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
  .right_bloc {
    position: relative;

  }

  .img_back {
    position: relative;
    /* background-color: #f60404;
    padding-top:20px; */


  }

  .img_principale {
    position: relative;
    /* top: -20px;
    left: -20px; */

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
  .right_bloc {
    margin-top:100px

  }
  #spectacle {
    padding: 50px 30px 30px 30px;
    justify-content: center;
    border-radius: 20px 0;
    /* box-shadow:
      white 0.006em 0.006em 0.007em,
      rgba(251, 36, 36, .3) 1px 1px 1px,
      rgba(251, 36, 36, .3) 2px 2px 1px,
      rgba(251, 36, 36, .3) 3px 3px 1px,
      rgba(251, 36, 36, .3) 4px 4px 1px,
      rgba(251, 36, 36, .3) 5px 5px 1px,
      rgba(251, 36, 36, .3) 6px 6px 1px,
      rgba(251, 36, 36, .3) 7px 7px 1px,
      rgba(251, 36, 36, .3) 8px 8px 1px,
      rgba(251, 36, 36, .3) 9px 9px 1px,
      rgba(251, 36, 36, .3) 10px 10px 1px,
      rgba(251, 36, 36, .3)11px 11px 1px,
      rgba(251, 36, 36, .3) 12px 12px 1px;
    color: #fff;
    background-color: rgba(113, 130, 141, .3); */
    ;
  }

  .espectacle-bloc {
    margin: 30px;
  }

  .container {
    max-width: 1300px;
  }
}

@media screen and (min-width:1920px) {


  .bloc_thumb {
    margin-top: 0px;
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

/* ************  FIN anim__navBar */</style>
