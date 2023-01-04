<template>
  <div class="container background">
    <div class="bloc_nav " v-if="navbarOk">
      <navbar />
    </div>
    <div class="row g-0">

      <div class="bloc_loop col-12" v-for="(i, index) in pageData" :key="i._id">

        
        <!-- <div class="back col-12" v-bind:style="{ backgroundImage: 'url(' + i.imageUrl + ')' }">

      </div> -->
      
      <div class="header col-12">
        <img class="header_img col-12" :src="i.imageUrl" alt="">
        <div class="header_title">
          <h1>{{i.title_1}}</h1>
        </div>

      </div>
      <div class="bloc_thumb ">
        <div class=" bloc_info col-12">
          <span class="title_info ">Sinopsis</span>
          <p class="sinopsis">{{i.synopsis_1}}
          </p>
          <span class="title_info ">{{i.p_1}}</span>
          <p>{{i.p_2}}
          </p>
          <p>{{i.p_3}}
          </p>
          <p>{{i.p_4}}</p>
          <p>{{i.p_5}}</p>
          <p>{{i.p_6}}
          </p>

        </div>
      </div>
    </div>
      <div class="bloc_img">
        <div class="loop_img col-12 " v-for="i in imgData" :key="i._id">
          <img class="img_card" :src="i.imageUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import navbar from "../components/nav_bar.vue"
import foot from "../components/footer.vue"

export default {
  name: "kakofonikas",
  data() {
    return {

      navbarOk: false,
      background: "",

    }
  },
  created: function () {

    this.getNavData();
    this.getPageData();
    this.getImgData();

  },
  computed: {
    ...mapState({
      pageData: "pageData",
      navData: "navData",
      imgData: "imgData"
    }),
    computedBack: function () {
      this.background = this.imgData[0].imageUrl;
      console.log("CHANGE WIDTH", this.background);
    }
  },
  components: {
    navbar,
    foot,
  },
  methods: {
    getPageData() {
      const n = "kakos";
      this.$store.dispatch("getPageData", n)
        .then((res) => {
          if (res) {

          }
        })
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },
    getImgData() {
      const n = "kakos";
      this.$store.dispatch("getImgData", n)
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
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.bloc_nav {

  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 1000;

}

.header_img {}

.sinopsis {
  padding: 10px 30px;
}

.loop_img {
  overflow: hidden;

}

.img_card {
  object-fit: contain;
  width: 100vw;
}
</style>