<template>
  <div class="fond">
    <div class="container-fluid bloc_page">
      <!-- <div class="bloc_nav " v-if="navbarOk">
        <navbar namePage="contact"/>
      </div> -->
      <div class="row col-12 bloc_header">
        <div class="bloc_img">
          <img src="../assets/images/terrasse.jpg" alt="Image d'une terrasse de café foto de Natishia">
          <caption class="caption">Foto de Nati</caption>
        </div>
        <div class="bloc_text">
          <div class="b_mail">
            <div class="icon">

              <span></span>
            </div>
            <p class="mail_contact"><a href="mailto:contact@martarenyer.com"> info@martarenyer.com</a></p>
          </div>
          <div class="b_mail">
            <div class="icon icon_phone">

              <span></span>
            </div>
            <p class="mail_contact"> +34 692 920 670</p>
          </div>
        </div>
      </div>
      <!-- <div class="container-fluid-footer">
        <foot />
    </div> -->
    </div>
  </div>
</template>

<script>

// import navbar from "../components/nav_bar.vue"
// import foot from "../components/footer.vue"

export default {
  name: "contact",
  data: () => {
    return {
      navbarOk: true,
    }
  },
  components: {
    // navbar,
    // foot,
  },
  created: function () {

    // this.getNavData();
    this.getPageData();

  },
  methods: {

    changeWidth(event) {
      // this.background = this.pageData[0].imageUrl;
      // console.log("CHANGE WIDTH", this.background);
    },

    getPageData() {
      const n = "bernadette";
      this.$store.dispatch("getPageData", n)
        .then((res) => {
          if (res) {

          }
        })
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },
    // getNavData() {
    //   const n = "navbar";
    //   this.$store.dispatch("getNavData", n)
    //     .then((res) => {
    //       if (res) {
    //         this.navbarOk = true
    //       }
    //     });
    //   console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
    // },

  },
}
</script>

<style scoped>
/* @import url("../styles/bloc-nav-c.css");
@import url("../styles/bloc_nav.css"); */
p {
  margin: 0;
  padding: 0;
}

.fond {
  position: relative;
  background-color: black;
  height: 100vh;
  /* background-image: url("../assets/images/abstrait-fond-d-ecra.png"); */
}

.bloc_page {
  height:100vh;
 
}
.bloc_header {

  width: 100%;
  /* height:90vh; */
  /* border: 1px solid rgb(60, 167, 255); */
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
}

.bloc_img {
  width: 100%;
  height: auto;
  /* border: 1px solid rgb(245, 103, 103); */
  overflow: hidden;
  padding: 0;
}

img {
  object-fit: cover;
}
#text{
  color:white;
}
.bloc_text {
  width: 80%;
  margin: 70px auto 30px;
 
}

.b_mail {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-around; */
  
}

.icon {
  width: 32px;
  height: 32px;
  width:20%;

  position: relative;
}

.mail_contact {
  color: white;
}

.icon>span::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../assets/icons/letter.png");
  width: 32px;
  height: 32px;

}
.icon_phone>span::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../assets/icons/phone-call.png");
  width: 32px;
  height: 32px;

}

.container-fluid-footer {
  position:absolute;
  bottom:0;
    width: 100vw;
    margin: 0 auto
}

@media screen and (min-width:768px) and (max-height:440px){

.bloc_header {
  flex-direction: row;
  flex-wrap: wrap;
  width:100%;
  justify-content:space-evenly ;
}
.bloc_img {
 object-fit:fill;
 width:40%;
 height:100vh;
  
}
.bloc_text {
  width: 50%;
 margin-top:25%;
}
img {
 
}
}
@media screen and (min-width:992px) {

  .container {
 height:auto;
 align-items: center;
}
.bloc_img {
  width: 50%;
  height: 100%;
  /* border: 1px solid rgb(245, 103, 103); */
  overflow: hidden;
  padding: 0;
}
.bloc_text{
width:50%
}
  .bloc_header{
    flex-direction: row;
    align-items: center;
  }
}
@media screen and (min-width:1220px) {
  .bloc_header{
    height:100vh
}
img{
  width:100%;
  height:auto;
}
.b_mail{
 justify-content: center;
}
}
</style>