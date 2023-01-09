<template>
    <div class="container master">
        <div class="  bloc_nav " v-if="navbarOk" >
        <navbar />
      </div>
        <div class="row">
            <div class="bloc_thumb">
                <div class="bloc_img">
                <img src="../assets/images/elvira3.jpg" alt="" class="img_thumb">
            </div>
                <div class="bloc_text_thumb ">
                    <h1>{{ pageData[0].title_1 }}</h1>
                    <span class="line"></span>
                    <div class="bloc_synopsis">
                        <h2>{{ pageData[0].subTitle_1 }}</h2>
                        <div class="bloc_sinopsis_text">
                        <h3 class="title_sinopsis">Sinopsis</h3>
                        <p class="sinopsis">{{ pageData[0].synopsis_1 }}</p>
                        <p>{{ pageData[0].synopsis_2 }}</p>
                    </div>
                </div>
                    <div class="bloc_text_video">
                    <div class="fiches">
                        <div class="fiche_art fiche">
                            <h4>– {{ pageData[0].p_0 }}</h4>
                            <p><strong>{{ pageData[0].p_1 }} </strong> {{ pageData[0].p_2 }}</p>
                            <p><strong>{{ pageData[0].p_3 }}</strong> {{ pageData[0].p_4 }}</p>
                            <p><strong>{{ pageData[0].p_5 }} </strong> {{ pageData[0].p_6 }}</p>
                            <p><strong>{{ pageData[0].p_7 }} </strong> {{ pageData[0].p_8 }}</p>
                            <p><strong>{{ pageData[0].p_9 }}</strong> {{ pageData[0].p_10 }}</p>
                            <p><strong>{{ pageData[0].p_11 }} </strong> {{ pageData[0].p_12 }}</p>
                            <p><strong>{{ pageData[0].p_13}} </strong> {{ pageData[0].p_14 }} </p>
                            <p>{{ pageData[0].p_15 }}</p>
                            <p>{{ pageData[0].p_16 }}</p>
                        </div>
                        <div class="info_basic fiche">
                            <h4>{{ pageData[0].p_17 }}</h4>
                            <p>{{ pageData[0].p_18 }}</p>
                            <p>{{ pageData[0].p_19 }}</p>
                            <p>{{ pageData[0].p_20 }}</p>
                            <p>{{ pageData[0].p_21 }}</p>
                        </div>

                    </div>
                    <div class="bloc_video">
                        <div class="video">
                            <iframe src="https://player.vimeo.com/video/373748069?h=6c3a2ef9d5" width="620" height="460"
                                frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                                allowfullscreen></iframe>
                            <!-- <p><a href="https://vimeo.com/373748069">EL GRAN CABARET ELVIRA_MARTA RENYER</a> from <a
                                    href="https://vimeo.com/martaaa">MartaRenyer</a> on <a
                                    href="https://vimeo.com">Vimeo</a>.</p> -->
                        </div>
                        <button>{{ pageData[0].file}}</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <foot/>
    </div>
</template>

<script>
import {mapState} from'vuex'
import navbar from "../components/nav_bar.vue"
import foot from "../components/footer.vue"

export default {
  name: "Elvira",
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
      imgData:"imgData",
      pageData: "pageData",
      navData:"navData"
    }),
    // computedBack: function () {
    //   this.background = this.pageData[0].imageUrl;
    //   console.log("CHANGE WIDTH", this.background);
    // }
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
      const n = "elvira";
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

<style scoped>
@import url("../styles/bloc_nav.css");
@import url("../styles/font.css");

*, ::after, ::before{
    box-sizing: border-box;
    margin:0;
    padding:0;
}
.master{
    position:relative;
}
.bloc_nav{
position:fixed;
width:100%;
align-items: center;

    z-index: 1230;
}
.bloc_thumb{
margin:30px auto;
}

.bloc_text_video{
    display:flex;
    flex-direction: column-reverse;
}
.fiches{
    display:flex;
    flex-direction: column-reverse;
}
.fiche{
    margin:20px auto
}
.img_thumb{
    width:100%;
    height: 60vh;
}
h1{
    margin-top: 25px;
    font-size: 24px;
}
h2{
    font-size: 18px;
    margin:30px auto 20px
}
p{
    text-align: justify;
    text-indent: 30px;
    padding:20px;
    line-height: auto;
}
.title_sinopsis{
    margin:10px auto;
    padding-bottom: 0;
    text-decoration: underline;
    font-weight: 800;
    font-size: 15px;
    text-align: left;
    padding-left: 20px;
}
.sinopsis{
    padding-top:0;
   
}
h4{
    margin:20px auto 10px
}
.fiches > div > p{
text-align: center;
padding:5px 15px;
text-indent: 0px;
}

/* .video{
    width:320px;
    height:260px;
    margin:0 auto;
   
} */
iframe{
    width: 100%;
    height: 260px;
    margin:0 auto;
    padding-top:-260px
}


@media screen and (min-width:576px) {
    .container{
        margin:0 auto;
    }
    .bloc_thumb{
margin:10px auto 20px;
}
.bloc_img{
    width:60%;
    margin:0 auto;
    
}
h1{
    margin:20px
}
.img_thumb{
    width:100%;
   margin:0 auto;
    object-fit: cover;
    object-position:0px -130px;
}
}

@media screen and (min-width:768px) and (min-height:1000px) {
    .bloc_img{
    width:50%;
    margin:0 auto;
    
}
.img_thumb{
    width:100%;
    height:auto;
   margin:0 auto;
    object-fit: cover; 
    object-position:center;
    
}
.bloc_sinopsis_text{
    width:80%;
    margin: 30px auto;
}
.fiches{
    flex-direction: row-reverse;
}
.bloc_video{
    margin:30px 0
}

}
@media screen and (min-width:992px) and (max-height:650px) {
    .fiches{
    flex-direction: row-reverse;
}
.bloc_sinopsis_text{
    width:70%;
    margin: 30px auto;
}

}

@media screen and (min-width:992px) and (max-height:768px) {
    .bloc_thumb{
margin-top:70px
    }
    .fiches{
    flex-direction: row-reverse;
}
.bloc_sinopsis_text{
    width:70%;
    margin: 30px auto;
}
.bloc_text_video{
display:flex;
flex-direction: row-reverse
    }
.bloc_video{
    width:33%
}

}
@media screen and (min-width:1140px) and (max-height:1000px) {
    .fiches{
    flex-direction: row-reverse;
}
}
@media screen and (min-width:1200px)  {
    h1{
        margin:50px auto;
        font-size: 40px;
    }
    .bloc_text_video{
display:flex;
flex-direction: row-reverse
    }
.bloc_video{
    width:33%
}
    
    .fiches{
    flex-direction: row-reverse;
}
.bloc_sinopsis_text{
    width:70%;
    margin: 30px auto;
}
}

</style>