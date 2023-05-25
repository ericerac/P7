<template>
    <div class="fond " :class="darkTheme ? 'bgDark' : 'bgDay'">
        <div class="bloc_master">
            <div class="header">
                <div class="text_info">
                    <a >Page en création</a>
                    <a>Page en création</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import { mapState, mapMutations } from "vuex";
import { ref } from "vue";


export default {
    name: "creation",

    data: function () {
        return {
            // navbarOk: false,
            dark: ref(""),
            // bgTheme:ref("")
        };
    },
    components: {
        // navbar,
        // foot,
    },

    computed: {
        ...mapState({
            darkTheme:"darkTheme"
            //   pageData: "pageData",
            //   imgData: "imgData",
        }),
        ...mapMutations(["NamePage"]),

    },
    created: function () {
        this.$store.commit("NamePage","creation")
        // this.getPageData();
        // this.getLocation()
        // this.getNavData();
    },
    mounted: function () {
        // this.BgTheme()
    },
    watch: {

        // darkTheme(){
        //     if(this.darkTheme == true){
        //     this.bgTheme = "rgb( 100,100,100)"}
        //     else{
        //         console.log("MOUNTED CREATION DARKTHEME FALSE");
        //         this.bgTheme = "blue"
        //     }
        // }
    },

    methods: {
        // BgTheme() {
        //     console.log("MOUNTED CREATION BG THEME");
        //     if(this.darkTheme == true){
        //         console.log("MOUNTED CREATION DARKTHEME TRUE");
        //         this.bgTheme = "rgb( 100,100,100)"
        //     }else{
        //         console.log("MOUNTED CREATION DARKTHEME FALSE");
        //         this.bgTheme = "blue"
        //     }
        // }
    },

}
</script>

<style scoped>

@import url("../styles/theme.css");

p{
    padding:0;
    margin:0;
    color:transparent
}
.bloc_master {
    /* background: white; */
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    /* background: #040404; */
}
.header {
    width: 300px;
    height: auto;
    margin: 0 auto;
}

.text_info > a {
   color: #8f0000;
}
.text_info > p {
   color: #8f0000;
}

/* BLOC ANIMATION */
@keyframes tipsy {
    0% {
        transform: translateX(-50%) translateY(-50%) rotate(0deg),
    }

    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
}
@keyframes tipsy_text {
    0% {
        transform: translateX(-50%) translateY(-50%) rotate(0deg),
    }

    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
}


.bloc_master {
    font-family: helvetica, arial, sans-serif;
    /* background-color: #fbfbfc; */
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
p:before,
p:after {
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
    animation: 9s infinite alternate ease-in-out tipsy_text;
}

p:before {
    border-color: #d9524a #d9524a rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    z-index: -1;
}

p:after {
    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #d9524a #d9524a;
    box-shadow: 25px 25px 25px rgba(46, 46, 49, .8);
}

/* ANIMATION SHADOW */
.bloc_master {
    font-family: "Archivo Black", sans-serif;
    /* background: #f4d03f; */
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.word-1 {
    margin-top: 200px;
}


.words span {
    font-size: 5rem;
    display: inline-block;
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