<template>
  <div class="bloc fond" :class="{ bgDark: darkTheme }">
    <div class="containe p-0 mt-0 text-center">

      <div class="anim"></div>

      <div class="header col-lg-12">
        <div class="title">

          <div class="bgTitleClT  ">
          <h1 class="title_1_1  " :class=" [darkTheme ? txtDark : txtDay] ">{{ pageData[0].title_1 }}</h1>
        </div>
        <h1 class="title_1_2  " :class=" [darkTheme ? txtDark : txtDay] ">{{ pageData[0].title_1 }}</h1>
        </div>

        <div class="row col-12 bloc_img_text">

          <div class="bloc_header_2 col-12 col-lg-5 m-0 m-lg-auto">

            <div class="img_head">
              <img class="img_thumb col-12 col-md-8 col-lg-10 p-3" :src="pageData[0].imageUrl" alt="" />
            </div>
<div class="bloc_right">
            <div class="bgTitleCl dif2">
              <h1 class="title_1_mobile texte " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].title_1 }}</h1>
            </div>

            <div class="phrase text ">
              <p :class="darkTheme ? 'txtDark' : 'txtDay'">
                 <i>{{ pageData[0].subTitle_1 }}</i>
              </p>
            </div>
          </div>
          </div>

          <span class="switch_line sub_title"></span>

          <div class="bloc_left p-2 col-12 col-lg-6 text-center">

            <p class="description_bio text_p  dif3" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_1 }}</p>

            <p class="description_bio text_p " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_2 }}</p>

            <p class="description_bio text_p " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_3 }}</p>


            <p class="description_bio text_p " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_4 }}</p>


            <p class="description_bio text_p " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_5 }}</p>

          </div>

        </div>
      </div>

      <div class="row otherShows">
        <div class="bgTitleSCl">
        <h2 class="title_2" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].title_2 }}</h2>
      </div>
        <div class="bloc_loop_otherShows col-12">
          <div class="bloc_img col-6 col-sm-4" v-for="i in imgData" :key="i._id">
            
            <img class="img_display" :src="i.imageUrl" alt="" v-motion-slide-visible-once-bottom>
            <div class="bgTitleShow">
            <p class="img_text text txtDark" > {{ i.showName }}</p>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import {ref} from "vue";

export default {
  name: "bio",

  data: function () {
    return {
      navbarOk: false,
      dark:ref(""),
    };
  },

  computed: {
    ...mapState({
      pageData: "pageData",
      imgData: "imgData",
      darkTheme:"darkTheme"
    }),
    
  },
  created: function () {
    this.getPageData();
  },

  methods: {

    getPageData() {
      const n = "bio";
      this.$store.dispatch("getPageData", n)
        .then((res) => {
          if (res) {
            console.log("RES GET BIO", res.data[0].name);
            let p = res.data[0].name
            this.$store.dispatch("getImgData", p)
          }
        });
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },

  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Unna&display=swap");
@import url("../styles/font.css");
@import url("../styles/theme.css");
@import url('https://fonts.googleapis.com/css2?family=Philosopher&display=swap');


svg {
  display: none;
  position: relative;
  margin: 150px auto;
  z-index: -1;

}

.header_bio {
  height: 150px;
}

.bloc_header {
  height: 150px;
  overflow: hidden;
  align-items: baseline;
}

.bloc_header_2 {
  display: flex;
  width: 90%;
  height: auto;
  flex-direction: column;
  object-fit: cover;
  position: relative;

}

.bloc_img_text {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:80px;
}
.bloc_right{
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.dif1 {
  position: relative;
  top: 30%;
}
.bgTitleCl,
.bgTitleSCl,
.bgTitleSyn,
.bgTitleShow,
.bgTitleAct {
  position: relative;
  margin: auto;
  width: 250px;
  height: 80px;
  background-color: var(--bgTitle);
}


.bgTitleCl
,.bgTitleShow

{ 
  clip-path: polygon(0% 0%, 100% 15%, 100% 100%, 0% 85%);
}

.bgTitleAct,
.bgTitleSCl {
  clip-path: polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%);
}
.bgTitleAct>h1,
.bgTitleCl>h1,
.bgTitleSCl>h2,
.bgTitleSyn>h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:white;
}
.bgTitleSCl {
  width:70%;
  height:90px
}
.bgTitleShow{
  display:flex;
  position:relative;
  width:70%;
  height:40px;
  margin-top:10px;
  align-items: center;
}
.bgTitleShow > p{
  width:max-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:white;
  margin:0px 
}

.bgTitleAct{

}
.img_text {
  font-size: 16px;
}

.title {
  display: none;

}
.phrase {
  display:flex;
  margin-top: 20px;
  color:rgb(62, 1, 1);
  align-items: center;
}
.title_1_mobile {
  position: absolute;
  width:auto;
  height:auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
}

.title_1 {
  position: absolute;
  width:auto;
  height:auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 20px auto;
  font-size: 50px;
  background-color: transparent;
}
.title_2 {
  margin-bottom: 30px;
  font-size: calc(25px + 2vw);
}

.switch_svg {
  height: 50px;
  margin: 30px;
}
.switch_dynamic {
  position: relative;
  height: 50px;
  background: url("../assets/design/ssshape\ \(1\).svg");
  background-repeat: no-repeat;
  background-size: contain;
}
.bloc_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}
.bloc_left > p::first-letter{
  font-size: 25px;
  font-family: 'Philosopher', sans-serif;
}
.description_bio {
  text-align: center;
  padding: 0px 30px;
}
.container-fluid {
  position: relative;
}

p {
  margin-top: 10px;
  padding: 0 1rem;
  text-align: justify;
}

.switch_line {
  width: 30%;
  height: 2px;
  background-color: rgb(254, 73, 73);
  margin: 0.5rem auto;
}

.img_1 {
  position: fixed;
  top: 200px;
  left: 6px;
  opacity: 0.5;
}

.bloc_loop_otherShows {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.img_display {
  width: 100%;
  position:relative;
  z-index: 1;

}



.img_thumb {
  width: 100%;
  border-radius: 10%;
  background-color: white;
  margin: 40px auto 30px;
}

.bloc_loop_otherShows {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
}

.bloc_img {
  object-fit: cover;
  overflow: hidden;
  width:250px;
  height:auto;
  margin:20px auto

}

.img_display {
  width: 100%;
  height: auto;
}

.bloc_left {
  z-index: 2;
}

.container-fluid-footer {
  width: 100vw;
  margin: 0 auto
}
@media screen and (min-width:576px) and (max-height:500px) {
  .phrase {
    display: block;
  }

  .bloc_header_2 {
    width:100%;
    display: flex;
    flex-direction: row;
    object-fit: cover;
    align-items: center;
    justify-content: space-evenly;

  }

  .img_head {
    width: 50%;

  }
  .bloc_right{
  display: flex;
  flex-direction: column;
  align-items: center;
  width:40%;
}
  .bloc_header_2>h1 {
    padding-bottom: 5px;
    border-bottom: 2px solid red;
  }

  .img_thumb {
    height: 300px;
    object-fit: cover;
    object-position: top;
  }

  .title_1_mobile, .title {
    width:auto;
    height:auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  .bloc_loop_otherShows {
    flex-direction:row;
  }
  .bgTitleSCl {
  width:500px;
  height:110px
}
}

@media screen and (min-width:768px) and (min-height:500px) {
  .header{
    padding-top:50px;
  }
  .bloc_header_2 {
    width: 100%;
  }

  svg {
    position: relative;
    margin: -0px auto;
    z-index: -1;
    height: 60vh;

  }
.dif2{
  display:none;
}
  .svg_title {
    margin-top: 50px;
    transform: scale(.7, .5)
  }

  .title {
    display: flex;
    height: auto;
    position: relative;
    width: 100%;
    margin: 50px auto 30px;
    align-items: center;

  }

  .sub_title {
    display: none;
  }
  .bgTitleSCl {
  width:500px;
  height:110px
}
.bgTitleCl{
  width:400px;
 height:120px;
}
.bgTitleClT{
  width:250px;
 height:50px;

}
.bgTitleClT{
  position:relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -0%);
  clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
  background: var(--bgTitle);
  z-index:2;
  
}
.title_1_1,.title_1_2{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  font-size:50px
 
}
.title_1_1{
  
  color:white;
  z-index:2;

}
.title_1_2{
  color:var(--bgTitle);
  z-index:1;
  background-color: azure;
  padding: 0 16px
}
.title_1{
  margin:0;
}

  .bloc_img_text {
   padding-top:50px
  }

  .bloc_header_2 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    object-fit: cover;
    align-items: center;
    height: 80vh;
  }
.phrase{
  margin:0 auto 50px;
  font-size: 30px;
}
.phrase > p{

  font-size: 24px;
}
  .bloc_header_2 > h1 {
    margin: 0 auto;
    padding-bottom: 5px;
    border-bottom: 2px solid red;
  }
.phrase{
  height:auto;
}
.bloc_loop_otherShows {
    flex-direction:row;
    gap:20px;
    margin-top:30px
  }
  .otherShows {}
}

@media screen and (min-width:768px) and (min-height:1000px) {
  .bloc_img_text {
   padding-top:0px
  }
}

@media screen and (min-width:992px) {

  .bloc_img_text {
   padding-top:0px;
   height:auto
  }
  .bloc_header_2 {
    display: flex;
    flex-direction: column-reverse;
    width: 50%;
    
    object-fit: cover;
    align-items: center;
   
  }

  .bloc_header_2>h1 {
    margin-bottom: 30px
  }

  .bloc_img_text {
    display: flex;
    flex-direction: row;
    height: auto;
    margin-top:20px
  }
  .bgTitleSCl {
  width:500px;
  height:130px;
  z-index:0
}
.bgTitleSCl2{
  width:700px;
  height:130px;
}
.img_head{
  width:80%;
  height:max-content;
}
.img_thumb{
  width:85%;
  margin:0 auto;

  
}
}

@media screen and (min-width:1024px) {

  .bloc_header_2 {
    position: relative;
    height: 100%;
  }

  .bloc_header_2>h1 {

    padding-top: 20px
  }

  svg {
    position: relative;

    margin: -100px auto;
    z-index: -1;
    height: 75vh;

  }
  .phrase > p > i {
    display: flex;
    font:25px;
  }

  .title_1 {
    font-size: 40px;
  }
.bloc_left >p{
  padding: 0 60px 0 0;
}
  .otherShows {
    margin-top: 30px;
  }
}

@media screen and (min-width:1220px) {
  .bloc_header_2 {
   width:40%
  }
  .bloc_left{
    width:60%;
   
   
  }
  .bloc_left > p{
  
    padding:0 80px 0 50px
  }
  .otherShows {
    margin-top: 50px;
  }
  .bgTitleSCl {
  width:450px;
  height:170px;
  z-index:0
}
  .bloc_loop_otherShows{
    max-width: 1000px;
    margin:0 auto;
    margin-top:50px
  }

  svg {
    position: relative;

    margin: -100px auto;
    z-index: -1;
    height: 70vh;

  }
}

@media screen and (min-width:1440px) {
  .otherShows {
    margin-top: 0px;
  }

  .bgTitleSCl {
  width:440px;
  height:165px;
  z-index:0
}

  svg {
    position: relative;

    margin: -100px auto;
    z-index: -1;
    height: 55vh;

  }
}
  @media screen and (min-width:1920px) {
.title{
  margin-bottom: 0px;
  margin-top:70px
}
.bloc_img_text {

 margin-top: 20px; 
}
.bloc_left > p{
  
    padding:0 250px 0 170px;
    margin:30px auto
  }
  .bgTitleSCl {
  width:600px;
  height:180px;
  z-index:0
}

}

</style>