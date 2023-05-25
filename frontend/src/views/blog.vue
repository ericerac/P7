<template>
    <div class="fond" id="start" :class="{ bgDark: darkTheme }">
        <div class="compo" v-if="compo == true">
            <blog_post @changeCompo="CompoDisplay" />
        </div>
        <div class="container">
            <div class="header">
                <!-- <img class="imgHeader" src="../assets/images/furgoAutopista.jpg"
                    alt="imagen de fondo sombra de furgoneta en la carretera"> -->
                <div class="text_intro">
                    <p>{{ blogData[0].p_1 }}<br>
                        "Marta Renyer"
                    </p>
                    <button @click="goToP">Home</button>
                </div>
            </div>
            <div class="row">
            </div>
            <div class="row post">
                <article>
                    <div class="post_card" v-for="(post, index) in displayPost" :key="post._id">
                        <div class="blocImgText">
                            <div class="imgBloc">
                                <img class="imgPost" :src="post.imageUrl" alt="">
                            </div>
                            <div class="textBloc">
                                <a href="post.link">
                                    <h2 class="titleDesktop">{{ post.title_1 }} </h2>
                                </a>
                                <div v-if="dPost(post.p_1) == true" class="text_desc " :class="{ text_open: open_text }"
                                    @click="open_text = !open_text">
                                    <p class="txtDay" :class="dark ? 'txtDark' : 'txtDay'"> {{ post.p_1 }} {{
                                        post.p_1.length }}</p>
                                </div>
                                <p v-if="dPost(post.p_1) == true" class="suite text paragraf"
                                    @click="open_text = !open_text">
                                    <em><small>lire la suite</small></em>
                                </p>
                                <p v-else class="paragraf">
                                    {{ post.p_1 }}
                                </p>
                            </div>
                        </div>
                        <div class="date">

                            <span :data-text="dateCreated(post.createdAt)"> </span>
                        </div>
                        <div class="admin_icon" v-if="admin">
                            <span @click="del_post(post._id)">&#128465</span>
                            <span @click="update_post(post._id)">&#128394</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <span @click="compo = !compo" v-if="admin" class="editPost">&#128394</span>
    </div>
</template>



<script>

import { mapState, mapMutations } from "vuex";
import moment from "moment";
import blog_post from "../components/blog_post.vue"
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();


// import navbar from "../components/nav_bar.vue"
// import foot from "../components/footer.vue"
import { ref } from "vue";

export default {
    data: function () {
        return {
            content: "",
            compo: false,
            dataPage: false,
            admin: false,
            postPage: "",
            open_text: false,
            dark: ref(false),

        }
    },

    beforeMount: function () {
    },
    created: function () {
        this.getCookies();
        this.getPageData();
    },

    computed: {
        ...mapState({
            auth: "auth",
            pageData: "pageData",
            navData: "navData",
            newPost: "newPost",
            blogData: "blogData",
            darkTheme: "darkTheme",
        }),
        ...mapMutations(["PageData", "PostSelected", "PostUpdate"]),

        // //       displayNewPost(){
        // // if(this.newPost){
        // //     let np = newPost.data
        // // this.pageData = {
        // //     ...this.pageData,np
        // // }
        // // console.log("displayNewPost----->",this.pageData);

        // // }
        //       },

        displayPost(np) {
            if (this.pageData) {
                console.log("displayPost PAGEDATA----->", this.pageData);
                return this.pageData.reverse();
            }

            // if(this.pageData && this.newPost){
            //     console.log("displayPost NEWPOST PAGEDATA----->",this.pageData);
            //     let np = this.newPost.data
            //     return this.pageData = {...this.pageData,data}
            // }

        },
        displayParaf() {

            if (this.pageData) {

                let page = JSON.parse(JSON.stringify(this.pageData))
                console.log("PAGE PARSE", page);

                for (let p of page) {
                    return (p.p_1.length > 100)
                }
                // console.log("PAGE PARSE",paraf);
            }
        }


    },


    components: {
        blog_post
    },

    methods: {
        // *******  ROUTAGE COMPONENT **********
        goToP() {
            this.$router.push("/portada")
        },
        CompoDisplay() {
            this.compo = false
        },

        dPost(x) {

            // if (this.pageData) {
            //     let page = JSON.parse(JSON.stringify(this.pageData))
            //     console.log("PAGE PARSE", page);
            //     for (let p of page) {
            //         return (p.p_1.length > 200)
            //     }
            // }
            // if (x.length > 200) {

            //     return true
            // } else {
            //     return false
            // }
        },

        // ******* FIN ROUTAGE COMPONENT**********

        //********** FIN  UTILITIES ***********

        getCookies: function () {
            if ($cookies.get("user")) {
                const c = $cookies.get("user")
                console.log("COOKIES", c.userId);
                if (c.userId == "63737b4daf9df497efcd5767") {
                    this.admin = true;
                }
            }
        },
        dateCreated(x) {
            let date_post = new Date(x)
            return date_post.toLocaleDateString("cat", { day: 'numeric', month: 'short' })
        },

        changeWidth(event) {
            // this.background = this.pageData[0].imageUrl;
            // console.log("CHANGE WIDTH", this.background);
        },

        //********** FIN  UTILITIES ***********
        getPageData() {
         
            this.$store.dispatch("getPageData", "blog")
                // .then((res) => {
                //     if (res) {
                //         // this.$store.dispatch("getPageData", "post")
                //         this.dataPage = true;
                //     }
                // })
            console.log("REQUET GET ACCUEIL PAGE DATA-----> ", "blog");
        },



        del_post(x) {
            let data = {
                idCard: x,
                page: "post"
            }
            this.$store.dispatch("delCard", data)
                .then((res) => {
                    let dataPost = this.displayPost;
                    let rest = dataPost.filter(x => x._id != data.idCard)
                    console.log("REST UPDATE", rest);
                    this.$store.commit("PageData", rest.reverse())

                })
        },


        update_post(x) {
            let postUp = this.displayPost.filter(i => i._id == x)
            this.compo = true;
            let postDataUpdate = JSON.parse(JSON.stringify(postUp))
            console.log("UPDATE POST ----->", postDataUpdate);
            this.$store.commit("PostSelected", postDataUpdate)
            this.$store.commit("PostUpdate", true)
        }

    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import url("../styles/theme.css");

/* <!-- HTML !-->

:root {
    --c: red;
}


/* CSS */
.btn_header {
    appearance: none;
    background-color: #FFFFFF;
    border-radius: 40em;
    border-style: none;
    box-shadow: #ADCFFF 0 -7px 6px inset;

    box-sizing: border-box;
    color: #000000;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -.24px;
    margin: 0;
    outline: none;
    padding: 5px 1.3rem;
    quotes: auto;
    text-align: center;
    text-decoration: none;
    transition: all .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.btn_header:hover {
    background-color: #FFC229;
    box-shadow: #FF6314 0 -6px 8px inset;
    transform: scale(1.125);
}

.btn_header:active {
    transform: scale(1.025);
}

.bloc_nav {
    display: none
}

.imgHeader {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: auto;
}

@media (min-width: 768px) {
    .btn_header {
        font-size: 1.5rem;
        padding: .75rem 2rem;
    }
}

/* *********** HEADER ************* */

*,
*:before,
*:after {
    box-sizing: border-box;
}

.text_intro {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 200px;
    margin: auto;
    background: #FF6314;

}

.text_intro>button {

    content: "retour";
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: white;
    color: black;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;

    cursor: pointer;

}

.text_intro>button:hover {
    box-shadow: 3px 3px 10px rgb(154, 0, 0);
}

.text_intro>button:active {
    box-shadow: inset 1px 1px 5px red;
}

.text_intro>p {
    padding: 0 20px
}

.btn_head {
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 10px;

}

*,
:before,
:after {
    box-sizing: border-box;
}

:root {}

.compo {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}



.fond {
    position: relative;
    color: white;
    width: 100vw;
    height: auto;
    min-height: 110vh;

}

.container {
    width: 100%;
    align-items: center;
}

.editPost {
    cursor: pointer;
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    z-index: 100;
    background: rgba(138, 43, 226, .9);
    border-radius: 50%;

}

.header {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding-top: 70px;
    background-repeat: no-repeat;
    background-position: center;
}

article {
    width: 100%;
    position: relative;
    margin: 30px 0;
    padding: 0
}

/* ************ POST CARD **************/
.post {
    width: 100%;
}

.post_card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    border-style: none;
    width: 100%;
    color: #000000;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: -.24px;
    margin: 20px auto;
    padding: 10px;
    user-select: none;

}

.admin_icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100px;
    margin: 0 0 auto;
}

.admin_icon span {
    font-size: 30px;
}

.oval {
    width: 250px;
    height: 250px;
    background: MediumPurple;
    color: #111;
    border-radius: 50%;
    text-align: center;
    font-size: 90px;
    float: left;
    margin: 30px 10px;
    shape-outside: circle();
    object-fit: cover;
    object-position: center;
}

.blocImg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
    align-items: center;
}

h2 {
    padding-top: 20px;
    display: inline-block;
    color: black;
    margin-bottom: 10px;
}

.inter_line {
    position: relative;
    width: 50%;
    height: 1px;
    background-color: red;
    margin: 10px auto;
}

.paragraf {
    text-indent: 30px;
    margin: 0 auto
}

.paragraf::first-letter {
    font-size: 30px;
    font-family: 'Sacramento', cursive;
    font-family: 'Playfair Display', serif;
    text-transform: capitalize;

}

.paraf {
    width: 95%;
    margin: 10px auto;
    text-align: justify;
    padding: 20px 0;
    text-indent: 30px;
    border-radius: 10px;


}

.text_open {
    display: block;
    width: 80%;
    margin: 0 auto;
}

.suite {
    margin: 0;
    margin-left: 20px;
    text-align: left;
    text-decoration: underline;
}

.img_post {
    width: 300px;
    height: 300px;
    max-height: 350px;
    overflow: hidden;
    border: 1px solid white;
    margin: 10px;

    vertical-align: middle;
    /* clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%); */
    clip-path: circle(50% at 50% 50%);
    shape-outside:
        circle(50% at 50% 50%);
    /* display: none; */

}


.date>span::after {
    content: attr(data-text);
    position: absolute;
    right: -7px;
    top: -7px;
    width: 50px;
    height: auto;
    color: white;
    font-size: 14px;
    overflow: hidden;
    text-align: center;
    box-shadow: 2px 2px 5px white;
    border-radius: 5px;
    padding: 5px;
    text-shadow: 0px 0px 13px;
    z-index: 12;
    background-color: rgba(138, 43, 226, .9);

}

/* TEST SVG */
.shapedividers_com-6722 {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 120px;
}

.shapedividers_com-6722::before {
    content: '';
    font-family: 'shape divider from ShapeDividers.com';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    top: 0;
    z-index: 3;

    pointer-events: none;
    background-repeat: no-repeat;
    background-size: 108% 125px;
    background-position: 50% 0%;
    background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 669.4 133.88"><path fill="%23fa5a00" d="M0 0c0 133.88 334.7 0 334.7 133.88C334.7 0 669.4 133.88 669.4 0z"/></svg>');
}

@media screen and (min-width:768px) {


    .post_card {
        flex-direction: column;
        align-items: center;
    }

    .blocImg {
        display: block;
        min-width: 100%;
        float: left;
        margin-bottom: 30px;

    }

    .paragraf {
        width: 95%;
        margin: 10px auto 30px;
        text-align: justify;
        padding: 20px 0;
        text-indent: 30px;
        border-radius: 10px;

    }

    .textBloc {
        max-width: 550px;
        margin: 10px auto 10px;
    }

    .titleDesktop {
        margin-left: 30px
    }

    .imgPost {
        width: 100%;
        max-height: 400px;
        object-fit: contain;
    }
}

@media screen and (min-width:768px) and (max-height:550px) {
    .blocImg {
        display: block;
        min-width: 90%;
        max-width: 90%;
        float: left;
        margin-bottom: 30px;

    }
}

@media (min-width:1024px) {
    .text_intro {
        width: 80%;
    }

    .post_card {
        width: 80%;
    }

    .paragraf {
        padding-top: 10px;
    }
}

@media (min-width:1220px) {}

@media (min-width:1440px) {}

@media (min-width:1920px) {}

/* "2E VERSION" */

.blocImgText {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.titleDesktop {
    font-size: calc(25px + 1.5vh);
    margin-bottom: 0px;
    font-family: 'Playfair Display', serif;
}

.paragraf,
.text_desc {
    font-weight: 400;
}

.text_desc {
    position: relative;

    margin: 0 auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
}

.text_open {
    display: block;
    width: 100%;
    margin: 0 auto;
}

.suite {

    width: 80%;
    margin: 0 auto;

    text-align: left;
    padding-left: 20px;
    text-decoration: underline;
}

.imgBloc {
    display: flex;
    align-items: center;
    width: 90%;
    height: auto;
    margin: auto;
    overflow: hidden;
    object-fit: cover;

}

.textBloc {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    text-align: left;
    padding: 0px 10px
}

.imgPost {
    width: 100%;
    height: auto;
}

@media screen and (min-width:768px) and (max-height:450px) {
    .blocImgText {

        flex-direction: row;
        justify-content: flex-start;
        width: 100%
    }

    .textBloc {
        width: 65%;
        height: auto;
        padding-left: 30px;
    }

    .imgBloc {
        display: flex;
        width: 35%;
        height: 300px;

        align-items: center;
    }

    .imgPost {
        margin: auto;
    }
}

@media screen and (min-width:992px) {
    .blocImgText {
        flex-direction: row;
        justify-content: flex-start;
        width: 100%
    }

    .textBloc {
        width: auto;
        height: auto;
    }

    .imgBloc {
        width: 300px;
        min-width: 300px;
        height: auto;
        max-height: 300px;

    }
}

@media screen and (min-width:1024px) {}

@media screen and (min-width:1220px) {}

@media screen and (min-width:1440px) {}

@media screen and (min-width:1680px) {
    .post_card {
        width: 70%
    }

    .blocImgText {
        flex-direction: row;
        justify-content: flex-start;
        width: 100%
    }

    .textBloc {
        width: auto;
        height: auto;
    }

    .imgBloc {
        width: 300px;
        min-width: 300px;
        height: 300px;

    }
}

@media screen and (min-width:1920px) {}</style>