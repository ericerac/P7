<template>

  <div class="container-fluid master fond bgDay" :class="darkTheme ? 'bgDark' : 'bgDay'">

    <!-- <div class="bloc_nav" v-if="navbarOk">
      <navbar namePage="emperdonadas" :dark = "dark" @theme ="dark=($event)"/>
    </div> -->

    <div class="row img_thumb col-12">
      <img :src="pageData[0].imageUrl" alt="retrato les emperdonadas con Marta Renyer" width="640" height="360" />
    </div>

    <div class="row title text" >
      <h1 class="txtDay" 
      :class="darkTheme ? 'txtDark' : 'txtDay'"
      >{{ pageData[0].title_1 }}</h1>
    </div>

    <div class="bloc_text">
      <div class="bloc_clown text">
        <div class="bgTitleCl  ">
          <h5>{{ pageData[0].p_1 }}</h5>
        </div>
        <p class="txtDay" :class="darkTheme ? 'txtDark' : 'txtDay'">
          {{ pageData[0].p_2 }}, {{ pageData[0].p_3 }} y {{ pageData[0].p_4 }}
        </p>
      </div>

      <div class="bloc_actrices bloc_text text">
        <div class="bgTitleAct">
          <h5>{{ pageData[0].p_5 }}</h5>
        </div>
        <p class="txtDay" :class="darkTheme ? 'txtDark' : 'txtDay'">
          {{ pageData[0].p_6 }}, {{ pageData[0].p_7 }}, {{ pageData[0].p_8 }}
        </p>
      </div>

      <div class="synopsis  bloc_text text">
        <div class="bgTitleSyn">
          <h5>Synopsis</h5>
        </div>
        <div class="text_desc texte" :class="{ text_open: open_text }" @click="open_text = !open_text">
          <p class="txtDay" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].synopsis_1 }}</p>
        </div>
        <p class="suite text txtDay" @click="open_text = !open_text" :class="darkTheme ? 'txtDark' : 'txtDay'">
          <em><small>lire la suite</small></em>
        </p>
      </div>

    </div>

    
  </div>
</template>

<script>
import { mapState } from "vuex";

// import { delire } from "../modules/script";
// delire("PATATE FROIDE");

// import navbar from "../components/nav_bar.vue";
// import foot from "../components/footer.vue";
// import dataCookies from "../js/cookies"

export default {
  name: "emperdonadas",
  data() {
    return {
      open_text: false,
      navbarOk: false,
      dark: false,
    };

  },
  components: {
    
  },
  computed: {
    ...mapState({
      pageData: "pageData",
      navData: "navData",
      darkTheme:"darkTheme"
    }),
    // themeStyle() {
    //   return {
    //     bgDark: this.fondo,
    //     textDark: this.fondo,
    //   }

    // }
  },

  beforeMount: function () {
    console.log("BEFORE MOUNT");
  },

  created: function () {
    console.log("CREATED");
    // this.getLocation()
    // this.getNavData();
    this.getPageData();
  },

  methods: {

    // getLocation() {
    //   this.$store.dispatch("getLoc")
    //     .then((res) => {
    //       this.DataCookies()
    //     })
    // },

    // DataCookies() {
    //   let dataTheme = dataCookies();
    //   console.log("DATATHEME CALENDAR", dataTheme);
    //   this.theme = dataTheme.theme
    //   this.dark = dataTheme.dark
    //   // this.bgColor = dataTheme.bgColor
    //   // this.texteColor = dataTheme.textColor
      
    // },
    getPageData() {
      const n = "emperdonadas";
      this.$store.dispatch("getPageData", n).then((res) => {
        if (res) {

        }
      });
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },
    getNavData() {
      const n = "navbar";
      this.$store.dispatch("getNavData", n).then((res) => {
        if (res) {
          this.navbarOk = true;
        }
      });
      console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
    },
  },
};
</script>

<style scoped>
@import url("../styles/bloc_nav.css");
@import url("../styles/font.css");
@import url("../styles/theme.css");
@import url("../styles/bloc-nav-c.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


/* TEST BG TITLE */

.bgTitleCl,
.bgTitleSyn,
.bgTitleAct {
  position: relative;
  margin: auto;
  width: 200px;
  height: 70px;
  background-color: var(--bgTitle);
}

.bgTitleCl,
.bgTitleSyn {
  clip-path: polygon(0% 0%, 100% 15%, 100% 100%, 0% 85%);
}

.bgTitleAct {
  clip-path: polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%);
}

.bgTitleAct>h5,
.bgTitleCl>h5,
.bgTitleSyn>h5 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:white;
}

.master {
  /* height: 100vh; */
}

.img_thumb {
  width: 100%;
  height: auto;
  max-width: 900px;
  margin: 0 auto
}

.title {
  margin-top: 30px;
}

.bloc_clown {
  margin-top: 30px;
}

p {
  margin: 10px 10px 30px;
}

.synopsis {
  padding-bottom: 20px;
  text-align: center;

}

.text_desc {
  position: relative;
  width: 80%;
  margin: 0 auto;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}

.text_desc>p {
  margin-top: 10px;
}

.suite {

  width: 80%;
  margin: 0 auto;

  text-align: left;
  padding-left: 20px;
  text-decoration: underline;
}

.text_open {
  display: block;
  width: 80%;
  margin: 0 auto;
}

.container-fluid-footer {
  width: 100vw;
  margin: 0 auto
}

@media screen and (min-width:576px) {
  .master {
    width: 100vw;
    margin: 0 auto
  }

  /* .bloc_nav{
    position:relative;
    z-index: 123;
  } */
}

@media screen and (min-width:756px) {

  .master {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .img_thumb{
    padding-top:70px;
  }
}
@media screen and (min-width:992px) {
  
}

@media screen and (min-width:1220px) {
  .img_thumb{
    padding-top:80px
  }
  .bloc_text {
    margin: 50px auto;
  }

  .text_desc {
    width: 70%;
  }

  .text_open {
    display: block;
    width: 70%;
    margin: 0 auto;
  }
}

@media screen and (min-width:1440px) {
  .img_thumb {
    margin:  auto;
  }

  .text_desc {
    width: 50%;
    text-indent: 50px;
  }
  .master{
    padding-top:80px
  }
  .text_open {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
}

@media screen and (min-width:1980px) {
  
  .text_desc {
    width: 50%;
    text-indent: 50px;
  }

  .text_open {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
}</style>