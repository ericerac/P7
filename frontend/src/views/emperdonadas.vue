<template>
  <div class="container master">
    <div class="bloc_nav" v-if="navbarOk">
      <navbar />
    </div>
    <div class="row img_thumb col-12">
      <img :src="pageData[0].imageUrl" alt="" width="640" height="360"/>
    </div>
    <div class="row title">
      <h1>{{ pageData[0].title_1 }}</h1>
    </div>
    <div class="bloc_text">
      <div class="bloc_clown">
        <h5>{{ pageData[0].p_1 }}</h5> <p>
        {{ pageData[0].p_2 }}, {{ pageData[0].p_3 }} y {{ pageData[0].p_4 }}
      </p>
    </div>
    <div class="bloc_actrices">
        <h5>{{ pageData[0].p_5 }}</h5> 
        <p>
        {{ pageData[0].p_6 }}, {{ pageData[0].p_7 }}, {{ pageData[0].p_8 }}
      </p>
    </div>
      <div class="synopsis">
        <h5>Synopsis</h5>
        <div class="text_desc" :class="{ text_open: open_text }" @click="open_text = !open_text">
          <p>{{ pageData[0].synopsis_1 }}</p>
        </div>
        <p class="suite" @click="open_text = !open_text">
          <em><small>lire la suite</small></em>
        </p>
      </div>

    </div>
    <div class="footer">
      <foot />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

// import { delire } from "../modules/script";
// delire("PATATE FROIDE");

import navbar from "../components/nav_bar.vue";
import foot from "../components/footer.vue";

export default {
  name: "emperdonadas",
  data() {
    return {
      open_text: false,
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
      navData: "navData",
    }),
  },
  created: function () {
    this.getNavData();
    this.getPageData();
  },
  methods: {
    getPageData() {
      const n = "emperdonadas";
      this.$store.dispatch("getPageData", n).then((res) => {
        if (res) {
          // let p = res.data[0].name
          //    this.$store.dispatch("getImgData", p)
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.master {
  height: 100vh;
}

.img_thumb {
  width:100%;
  height: auto;
  max-width: 900px;
  margin:0 auto
  
}

.title {
  margin-top: 30px;
}
.bloc_clown{
  margin-top:30px;
}
p {
  margin: 10px 10px 30px;
}

.synopsis {
  margin-bottom: 20px;
  
}
.text_desc {
  /* height: 50px;
  overflow: hidden;
  margin:0 20px;
  white-space:nowrap;
  
  text-overflow: ellipsis;
  border:1px solid black;
  -webkit-line-clamp: 3; */
  position: relative;
  width: 80%;
  margin: 0 auto;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
.text_desc > p{
  margin-top:10px;
}
.suite {
  margin: 0;
  margin-left: 20px;
  text-align: left;
  text-decoration: underline;
}

.text_open {
  display: block;
  width: 80%;
  margin: 0 auto;
}


@media screen and (min-width:576px) {
  .master{
    width:100vw;
    margin:0 auto
  }
  .bloc_nav{
    position:relative;
    z-index: 123;
  }
}
@media screen and (min-width:756px) {
  .master{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.footer {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>