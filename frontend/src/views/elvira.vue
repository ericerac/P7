<template>
     <div class="fond bdDay" :class="{ bgDark: darkTheme }">
    <div class="container master" >
        <!-- <div class="  bloc_nav " v-if="navbarOk">
            <navbar namePage="elvira" :dark = "dark" @theme ="dark=($event)"/>
        </div> -->
        <div class="row">
            <div class="bloc_thumb">
                <div class="bloc_img">
                    <img :src="pageData[0].imageUrl" alt="" class="img_thumb">
                    <div class="title">
                        <h1 id="title_1" :class="darkTheme ? 'txtDark' : 'txtDay'">
                            {{  pageData[0].title_1 }}
                        </h1>
                        <!-- <p class="sub_title_1">Mettre un sous-titre pour remplir l'espace</p> -->
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -100 480.75 200">
<path id="vague" fill="none" stroke="transparent"  d="M.36,90.6c44.09-46,109.57-98.57,182-88.81C257.49,11.92,271,78.85,348.25,90.6c95.57,14.54,119-81.74,230.15-85.82C683.51.93,697.28,86.67,808.54,87.61c109.2.92,119.91-81.46,229.25-86.82,134.34-6.58,155.42,100.19,279.57,89,114.46-10.31,163.52-104.74,260.11-77,37.71,10.82,87.6,58.49,102.89,77" />
<text font size="35px">  
  <textPath id="chemin" href="#vague" startOffset="100">
    {{ pageData[0].title_1 }} {{ pageData[0].title_1 }}
  </textPath>
</text>
</svg> -->
                    </div>
                </div>
                <div class="bloc_text_thumb ">

                    <span class="line"></span>
                    <div class="bloc_synopsis" :class="darkTheme ? 'txtDark' : 'txtDay'">
                        <h2>- {{ pageData[0].subTitle_1 }} -</h2>
                        <div class="bloc_sinopsis_text">
                            <h3 class="title_sinopsis" :class="darkTheme ? 'txtDark' : 'txtDay'">Sinopsis</h3>
                            <p class="sinopsis" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].synopsis_1 }}</p>
                            <p :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].synopsis_2 }}</p>
                        </div>
                    </div>
                    <div class="bloc_text_video">
                        <div class="fiches">
                            <div class="fiche_art fiche" :class="darkTheme ? 'txtDark' : 'txtDay'">
                                <h4> {{ pageData[0].p_0 }}</h4>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>{{ pageData[0].p_1 }} </strong> {{ pageData[0].p_2 }}</p>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>{{ pageData[0].p_3 }}</strong> {{ pageData[0].p_4 }}</p>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>{{ pageData[0].p_5 }} </strong> {{ pageData[0].p_6 }}</p>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>{{ pageData[0].p_7 }} </strong> {{ pageData[0].p_8 }}</p>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>{{ pageData[0].p_9 }}</strong> {{ pageData[0].p_10 }}</p>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>{{ pageData[0].p_11 }} </strong> {{ pageData[0].p_12 }}</p>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>{{ pageData[0].p_13 }} </strong> {{ pageData[0].p_14 }} </p>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_15 }}</p>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_16 }}</p>
                            </div>
                            <div class="info_basic fiche">
                                <h4 :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_17 }}</h4>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_18 }}</p>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_19 }}</p>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_20 }}</p>
                                <p :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_21 }}</p>
                            </div>

                        </div>
                        <div class="bloc_video">
                            <div class="video">
                                <iframe :src="pageData[0].linkVideo" width="620" height="460" frameborder="0"
                                    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                
                            </div>
                            <!-- <button>{{ pageData[0].file }}</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="container-fluid-footer">
        <foot />
    </div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { ref } from 'vue'
// import navbar from "../components/nav_bar.vue"
// import foot from "../components/footer.vue"
// import dataCookies from "../js/cookies"
export default {
    name: "Elvira",
    data() {
        return {
            background: "",
            navbarOk: false,
            color: "red",
            title_shadow: "",
            title_1: "",
            dark:ref("")

        }
    },
    mounted: function () {
        //   console.log("ON MOUNTED");
        //    const tit = document.getElementById('title_1');
        //    console.log("TIT ELEMENT DOM ",tit);
        //  const title = tit.value
        //  console.log("TIT ELEMENT DOM VALUE",title);
        //   const h4 = document.getElementById('phrase');
        //   const typeText = typeEffect({ title: h4, paraf: p }, 75)

        //   const paraf = document.querySelectorAll('.item_display');

        //   const title = document.querySelectorAll('.item_display_title');



    },
    beforeMount: function () {
    console.log("BEFORE MOUNT PORTADA");
    // this.getLocation()
  },
    created: function () {

        // this.getNavData();
        this.getPageData();

    },

    computed: {
        ...mapState({
            imgData: "imgData",
            pageData: "pageData",
            navData: "navData",
            darkTheme:"darkTheme"
        }),

        // Title_1: function () {
        //     console.log("COMPUTED PGAEDAT");
        //     if (this.pageData) {
        //         this.title_1 = this.pageData[0].title_1;
        //         let title = this.pageData[0].title_1;
        //         const titleId = document.getElementById('title_1');
        //         console.log("TIT ELEMENT DOM ", title);
        //         this.typeEffect({ title: titleId, txt: title })
        //     }
        // }
    },
    components: {
        // navbar,
        // foot,
    },
    methods: {
    //     getLocation() {
    //   this.$store.dispatch("getLoc")
    //     .then((res) => {
    //       this.DataCookies()
    //     })
    // },

    // async DataCookies() {
    //   let dataTheme = await dataCookies();
    //   console.log("DATATHEME CALENDAR", dataTheme);
    //   this.theme = dataTheme.theme
    //   this.dark = dataTheme.dark
    // },

        typeEffect(element, speed, next) {

            const title = element.title; // element DOM
            const t = element.txt;  // Data Content
          
            // console.log("ELEMENTS", title, t);
        

            if (element.title) {
                console.log("TYPETEXT TITLE", title);
                var ele = title;
            } else { }

            const text = ele.innerHTML;
            const txt = t.length;
            console.log(" TEXT LENGTH------>", txt);
            ele.innerHTML = "";
            var delay = t.length * 75 + txt;
            console.log("DELAY", delay);
            let i = 0;
            element.title.style.display = "inline-block";
            const timer = setInterval(function () {

                if (i < t.length) {

                    ele.append(t.charAt(i))

                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 75);

            setTimeout(function () {
                element.title.style.display = "inline-block"; // CSS display:none;
                console.log("NEXT FUNCTION T.LENGTH",t.length);


                const BkGtimer = setInterval(function () {
let x = "";
                    if (x < ele.length) {
                        console.log("SET INTERVAL", x);
                        // ele.append(t.charAt(i))

                        x++;
                    } else {
                        clearInterval(BkGtimer);
                    }
                }, 75);


            }, delay);

        },

        changeWidth(event) {
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
        // getNavData() {
        //     const n = "navbar";
        //     this.$store.dispatch("getNavData", n)
        //         .then((res) => {
        //             if (res) {
        //                 this.navbarOk = true
        //             }
        //         });
        //     console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
        // },

    },
};
</script>

<style scoped>
/* @import url("../styles/bloc_nav.css"); */
@import url("../styles/font.css");
@import url("../styles/theme.css");
/* @import url("../styles/bloc-nav-c.css"); */

*,
::after,
::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.master {
    /* position: relative; */
}
.bloc_thumb {
    margin: 30px auto;
}

.title_1 {
    display: none
}

.bloc_text_thumb>h1 {
    text-shadow: 0 0 2px rgb(255, 14, 1), 0 0 30px rgba(255, 14, 1, .5), 0px 0px 5px rgba(255, 14, 1, .5), 0 0 150px rgba(255, 14, 1, .5);
    color: black;

}

.bloc_text_video {
    display: flex;
    flex-direction: column-reverse;
}

.fiches {
    display: flex;
    flex-direction: column-reverse;
}

.fiche {
    margin: 20px auto
}

.img_thumb {
    width: 100%;
    height: 60vh;
}

.title>h1 {
    margin-top: 25px;
    font-size: calc(24px * .3vw);
}

h1::after {
    /* content: "v-bind (this.title_shadow)" ; */
    content: v-bind ("${this.title_shadow}");
    display: block;
    color: rgba(249, 2, 2, 0.65);
    transform: rotate3d(1, 0, 0, 118deg) scale(1, 3) skew(-50deg, 0deg) translateX(13px);
    /* margin: 5px 0 0 3px; */
    margin-top: calc(10px + .3vh);
}

h2 {
    font-size: 18px;
    margin: 30px auto 20px;

}

p {
    text-align: justify;
    text-indent: 30px;
    padding: 20px;
    line-height: auto;
}

.title_sinopsis {
    margin: 10px auto;
    padding-bottom: 0;
    text-decoration: underline;
    font-weight: 800;
    font-size: 15px;
    text-align: left;
    padding-left: 20px;
}

.sinopsis {
    padding-top: 0;
    /* color:rgb(62, 1, 1) */

}

h4 {
    margin: 20px auto 10px
}

.fiches>div>p {
    text-align: center;
    padding: 5px 15px;
    text-indent: 0px;
}

iframe {
    width: 100%;
    height: 260px;
    margin: 0 auto;
    padding-top: -260px
}

.container-fluid-footer {
    width: 100vw;
    margin: 0 auto
}

@media screen and (min-width:576px) {
    .container {
        margin: 0 auto;
    }

    .bloc_thumb {
        margin: 10px auto 20px;
    }

    .bloc_img {
        width: 60%;
        margin: 0 auto;
    }

    h1 {
        margin: 20px
    }

    .img_thumb {
        width: 100%;
        margin: 0 auto;
        object-fit: cover;
        object-position: 0px -130px;
    }

}

@media screen and (min-width:768px) and (max-height:500px) {

    .bloc_thumb {
        margin-top: 20vh;


    }

    .bloc_synopsis {
        width: 80%;

        margin: 0 auto;
    }

    .bloc_video {
        margin-top: 20px
    }

    .fiches {
        flex-direction: row-reverse;
    }
}

@media screen and (min-width:768px) and (min-height:1000px) {
    .bloc_img {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 70px auto;
        align-items: center;

    }

    .img_thumb {
        width: 50%;
        height: auto;
        margin: 0 auto;
        object-fit: cover;
        object-position: center;

    }

    .bloc_sinopsis_text {
        width: 80%;
        margin: 30px auto;
    }

    .fiches {
        flex-direction: row-reverse;
    }

    .bloc_video {
        margin: 30px 0
    }

}

@media screen and (min-width:992px) and (max-height:650px) {

    .fiches {
        flex-direction: row-reverse;
    }

    .bloc_sinopsis_text {
        width: 70%;
        margin: 30px auto;
    }

}

@media screen and (min-width:992px) and (max-height:768px) {
    .bloc_thumb {
        margin-top: 70px
    }

    .fiches {
        flex-direction: row-reverse;
    }

    .bloc_sinopsis_text {
        width: 70%;
        margin: 30px auto;
    }

    .bloc_text_video {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-evenly;
    }

    .bloc_video {
        width: 33%
    }

}

@media screen and (min-width:1140px) and (max-height:1000px) {

    .bloc_thumb {

        margin-top: 50px;
    }

   
    .fiches {
        flex-direction: row-reverse;
    }
}

@media screen and (min-width:1220px) {
    .bloc_img {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100vh;

    }

    .sub_title_1 {
        margin: 0px auto 50px;
        text-align: center;
    }

    h1 {
        margin: 50px auto;
        font-size: 40px;
    }

    .bloc_text_video {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-evenly;
    }

    .bloc_video {
        width: 33%
    }

    .fiches {
        flex-direction: row-reverse;
    }

    .bloc_sinopsis_text {
        width: 70%;
        margin: 30px auto;
    }
}
@media screen and (min-width:1920px) {
.bloc_thumb{
flex-direction: row;
margin-top:-20px;
}
.bloc_synopsis{
    width:70%;
    margin:0 auto 70px
}
h1{
    margin:0
}
.bloc_img {
        display: flex;
        flex-direction: row;
        gap:50px;
        justify-content: space-evenly;
        height: 100vh;
        width:80%;
        align-items:center ;

    }
}
</style>