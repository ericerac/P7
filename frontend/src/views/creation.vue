<template>
    <div class="fond">
        <div class="bloc_nav" v-if="navbarOk">
            <navbar namePage="creation" :dark="dark" @theme="dark = ($event)" />
        </div>
        <div class="bloc_master">
            <div class="header">
                <div class="text_info">

                    <a href="http://www.martarenyer.com" target="_blank">En creation</a>
                    <!-- <img src="../assets/logo/download.gif"> -->
                </div>

            </div>
            <div class="main">
                <div class="words word-1">
                    <span>P</span>
                    <span>A</span>
                    <span>G</span>
                    <span>I</span>
                    <span>N</span>
                    <span>E</span>

                </div>

                <div class="words word-2">
                    <span>E</span>
                    <span>N</span>
                </div>

                <div class="words word-3">
                    <span>C</span>
                    <span>R</span>
                    <span>E</span>
                    <span>A</span>
                    <span>C</span>
                    <span>I</span>
                    <span>Ó</span>
                </div>
            </div>
        </div>
        <div class="container-fluid-footer">
            <foot />
        </div>
    </div>
</template>

<script>

import navbar from "../components/nav_bar.vue";
import foot from "../components/footer.vue";
import { mapState } from "vuex";
import { ref } from "vue";
import dataCookies from "../js/cookies"

export default {
    name: "creation",

    data: function () {
        return {
            navbarOk: false,
            dark: ref(""),
        };
    },
    components: {
        navbar,
        foot,
    },

    computed: {
        ...mapState({
            //   pageData: "pageData",
            //   imgData: "imgData",
        }),
    },
    created: function () {
        // this.getPageData();
        this.getLocation()
        this.getNavData();
    },

    methods: {
        getNavData() {
            const n = "navbar";
            this.$store.dispatch("getNavData", n).then((res) => {
                if (res) {
                    if (res) {
                        this.navbarOk = true;
                    }
                }
            });
            console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
        },
        getLocation() {
            this.$store.dispatch("getLoc")
                .then((res) => {
                    this.DataCookies()
                })
        },

        async DataCookies() {
            let dataTheme = await dataCookies();
            console.log("DATATHEME CALENDAR", dataTheme);
            this.theme = dataTheme.theme
            // this.bgColor = dataTheme.bgColor
            this.bgColor = dataTheme.bgColor
            this.dark = dataTheme.dark

        },
    },

}
</script>

<style scoped>
@import url("../styles/bloc_nav.css");
@import url("../styles/theme.css");
@import url("../styles/bloc-nav-c.css");

.fond {
    background: #f4d03f;
    
}
.bloc_master {
    background: white;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
}




.header {
    width: 300px;
    height: auto;
    margin: 0 auto;
}

.text_info {}

/* BLOC ANIMATION */
@keyframes tipsy {
    0 {
        transform: translateX(-50%) translateY(-50%) rotate(0deg);
    }

    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
}

.bloc_master {
    font-family: helvetica, arial, sans-serif;
    background-color: #fbfbfc;
}

a {
    color: #fffbf1;
    text-shadow: 0 20px 25px #2e2e31, 0 40px 60px #2e2e31;
    font-size: 80px;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: -3px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

a:before,
a:after {
    content: '';
    padding: .9em .4em;
    position: absolute;
    left: 50%;
    width: 100%;
    top: 50%;
    display: block;
    border: 15px solid red;
    border-radius: 20px;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    animation: 10s infinite alternate ease-in-out tipsy;
}

a:before {
    border-color: #d9524a #d9524a rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    z-index: -1;
}

a:after {
    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #d9524a #d9524a;
    box-shadow: 25px 25px 25px rgba(46, 46, 49, .8);
}

/* ANIMATION SHADOW */
.bloc_master {
    font-family: "Archivo Black", sans-serif;
    background: #f4d03f;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.word-1 {
    margin-top: 200px;
}

.words {
    color: #f4d03f;
    font-size: 0;
    line-height: 1.5;
}

.words span {
    font-size: 5rem;
    display: inline-block;
    /* animation: move 3s ease-in-out infinite; */
}

@keyframes move {
    0% {
        transform: translate(0%, 0);
    }

    50% {
        text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);
    }

    100% {
        transform: translate(0%, 0);
    }
}

.words span:nth-child(2) {
    animation-delay: 0.5s;
}

.words span:nth-child(3) {
    animation-delay: 1s;
}

.words span:nth-child(4) {
    animation-delay: 1.5s;
}

.words span:nth-child(5) {
    animation-delay: 2s;
}

.words span:nth-child(6) {
    animation-delay: 2.5s;
}

.words span:nth-child(7) {
    animation-delay: 3s;
}</style>