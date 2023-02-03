<template>
  <div class="bloc">
    <div class="container p-0 mt-0 text-center">
      <div class="bloc_nav" v-if="navbarOk">
        <navbar />
      </div>

      <!-- <div class="row ">
                <div class="header_bio">
                    <div class="bloc_header">
                        <img :src="pageData[0].imageUrl" alt="">
                    </div>
                </div>
            </div> -->
            <div class="header col-lg-12">
            <div class="title"> <h1 class="title_1">{{ pageData[0].title_1 }}</h1></div>

      <div class="row col-12 bloc_img_text">
        <div class="bloc_header_2 col-12 col-lg-5 m-0 m-lg-auto">
          <img
            class="img_thumb col-12 col-md-8 col-lg-10 p-3"
            :src="pageData[0].imageUrl"
            alt=""
          />
          <h1 class="title_1 title_mobile">{{ pageData[0].title_1 }}</h1>
          <span class="switch_line sub_title" ></span>
        </div>
        <span class="switch_line sub_title" ></span>

        <div class="bloc_left p-2 col-12 col-lg-6 text-center" >
          <!-- <span class="switch_line" v-if="pageData[0].p_1"></span> -->

          <p class="description_bio" >{{ pageData[0].p_1 }}</p>

          <span class="switch_line" v-if="pageData[0].p_2"></span>

          <p class="description_bio" >{{ pageData[0].p_2 }}</p>

          <span class="switch_line" v-if="pageData[0].p_3"></span>

          <p class="description_bio" >{{ pageData[0].p_3 }}</p>

          <span class="switch_line" v-if="pageData[0].p_4"></span>

          <p class="description_bio" >{{ pageData[0].p_4 }}</p>

          <span class="switch_line" v-if="pageData[0].p_5"></span>

          <p class="description_bio" >{{ pageData[0].p_5 }}</p>

          <span class="switch_line"></span>
        </div>

        <!-- <div class="bloc_right m-2">
          <img class=" img_1 col-12" src="../assets/images/BIO-M_3.png "
                        alt="Image bio Marta Renyer robe rouge">
        </div> -->
      </div>
    </div>
      <div class="row otherShows">
        <h2 class="title_2" >{{pageData[0].title_2}}</h2> 
        <div class="bloc_loop_otherShows col-12" >
        <div class="bloc_img col-6 col-sm-4" v-for="i in imgData" :key="i._id">
            <img class="img_display" :src="i.imageUrl" alt="" v-motion-slide-visible-once-bottom>
            <p class="img_text"> {{i.showName}}</p>
        </div>
      </div>
    </div>
    <div class="footer" v-motion-slide-visible-once-bottom>

      <foot />
    </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/nav_bar.vue";
import foot from "../components/footer.vue";
import { mapState } from "vuex";

export default {
  name: "bio",

  data: function () {
    return {
      navbarOk: false,
    };
  },

  components: {
    navbar,
    foot,
  },

  computed: {
    ...mapState({
      pageData: "pageData",
      imgData: "imgData",
    }),
  },
  created: function () {
    this.getPageData();
    
    this.getNavData();
  },
  methods: {
    FileUpload(event) {
      this.fileSelected = event.target.files[0];
    },

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
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Unna&display=swap");
@import url("../styles/bloc_nav.css");
@import url("../styles/font.css");
.header_bio {
  height: 150px;
}
.bloc_header {
  height: 150px;
  overflow: hidden;
  align-items: baseline;
}
/* .bloc_nav {
  position: sticky;
  top: 20px;
  z-index: 1000;
} */
.bloc_img_text {
    position:relative;
  display: flex;
  flex-direction: row;
 
  margin: 20px auto 20px;
  /* height:100vh; */
}
.img_text{
  font-size: 16px;
}
.title{
display:none;
}
.title_1{
  
  margin:20px auto;
  text-shadow: /*relieve*/
  0 1px 0 rgb(200, 200, 200), 0 2px 0 rgb(190, 190, 190), 0 3px 0 rgb(180, 180, 180), 0 4px 0 rgb(175, 175, 175), 0 5px 0 rgb(180, 180, 180), 0 6px 0 rgb(190, 190, 190), /*sombra*/
  5px 7px 5px rgba(0, 0, 0, .40), 5px 12px 10px rgba(0, 0, 0, .30), 5px 17px 20px rgba(0, 0, 0, .20), 5px 22px 30px rgba(0, 0, 0, .10);
  color: rgb(246, 244, 244);
 
  font-size: 50px;
}
.title_2{
  margin-bottom:30px;
  text-shadow: /*relieve*/
  0 1px 0 rgb(200, 200, 200), 0 2px 0 rgb(190, 190, 190), 0 3px 0 rgb(180, 180, 180), 0 4px 0 rgb(175, 175, 175), 0 5px 0 rgb(180, 180, 180), 0 6px 0 rgb(190, 190, 190), /*sombra*/
  5px 7px 5px rgba(0, 0, 0, .40), 5px 12px 10px rgba(0, 0, 0, .30), 5px 17px 20px rgba(0, 0, 0, .20), 5px 22px 30px rgba(0, 0, 0, .10);
  color: white;
  font-size: calc(25px + 3vw);
}
.bloc_header_2 {
  display: flex;
  flex-direction: column;
  object-fit: cover;
  height:100vh;
}
.bloc_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}
.description_bio {
  text-align: center;
  
  padding: 0px 30px;
}
.container {
  position: relative;
}

p {
  margin-top: 10px;
  padding: 0 1rem;
  text-align: justify;
  /* pour media mobile*/
  /* text-indent: 40px; */
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
.bloc_loop_otherShows{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
.img_display{
    width:100%;
   
  }
/* @media screen and (max-width: 576px) { */
  
  
  .img_thumb {
    /* position: sticky;
    top: 50px; */
    margin: 40px auto 30px;
  }
  .bloc_loop_otherShows{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .bloc_img {
    object-fit: cover;
    overflow: hidden;
  }
  .img_display{
    width:100%;
    height: auto;
  }
  .bloc_left {
    z-index: 2;
    /* margin-top: 555px; */
    background-color: rgba(255, 255, 255, 0.6);
  }
/* } */
@media screen and (min-width:576px) and (max-height:500px) {
  .bloc_header_2 {
  display: flex;
  flex-direction: row;
  object-fit: cover;
  align-items: center;
}
  .bloc_header_2 > h1 {
  /* margin-left:10%; */
  padding-bottom: 5px;
  border-bottom:2px solid red;
}
.img_thumb{
  height:300px;
  object-fit: cover;
  object-position: top;
}
}
@media screen and (min-width:756px) and (min-height:500px) {
  .title_mobile{
  display: none;
}
.title{
  display:block;
}
.sub_title{
  display: none;
}
.bloc_img_text{
display:flex;
flex-direction: row;

}
  .bloc_header_2 {
  display: flex;
  flex-direction: row;
  object-fit: cover;
  align-items: center;
  /* width:50%; */
  height: auto;
}
  .bloc_header_2 > h1 {
  margin:0 auto;
  padding-bottom: 5px;
  border-bottom:2px solid red;
}
}
@media screen and (min-width:992px)  {
  .bloc_header_2 {
  display: flex;
  flex-direction: column-reverse;
  width: 50%;
  object-fit: cover;
  align-items: center;
}
.bloc_header_2 > h1{
  margin-bottom:30px
}
.bloc_img_text{
display:flex;
flex-direction: row;
}
}
@media screen and (min-width:1280px)  {
  .header{
    height: 100vh;
  }
  .bloc_header_2 > h1{
   
  padding-top:20px
}
.img_thumb{
  height:60vh;
  object-fit: cover;
  object-position: top;;
  
}

.title_1{
 
  margin:50px auto
}
}
</style>