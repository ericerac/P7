<template>
  <div>
    <div class="container px-4 py-4 text-center">

      <div class="row card_calendar_row">

        <!-- <div class="switcher">
          <div class="switcher_line"></div>
          <div class="switcher_logo"><img class="logo" src="assets/logo/LOGO KAKOS.png" alt="..." /></div>
          <div class="switcher_line"></div>
        </div> -->
<div class="img_top">
  <img src="" alt="">
</div>
        <div class="month_date">
          <h3>Calendari</h3>
        </div>

        <div class="boucle"></div>


        <div class="col-lg-4 col-12 col-sm-6 col-xl-3 col-xxl-3 bloc_card_calendar" v-for="d in pageData" :key="d.id">

          <transition name="slide-fade" v-if="show">
            <!-- no funcciona
         -->
            <div class="meeting-item card-date g-0 m-0" >
              <div class="thumb">
                <div class="price info">
                  <span>{{ d.info_top }}</span>
                </div>
                <a :href="d.link_event">
                  <!-- <img class="img_thumb" :src="d.imageUrl" alt="affiche Event" /> -->
                  <img
                v-if="d.imageUrl"
                alt="affiche Event"
                :src="(d.imageUrl)"
                
              />
                </a>
              </div>
              <div class="down-content">
                <div class="date">
                  <h6>{{ d.month }} <span>{{ d.day }}</span></h6>
                </div>
                <div>
                  <a href="https://www.firatarrega.cat/">
                    <h4>{{ d.event }}</h4>
                  </a>
                  <p>{{ d.detail }}<br />{{ d.hour }}</p>
                </div>
              </div>
            </div>
          
          </transition>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "axios";
import { mapGetters, mapState } from "vuex";
const store = require("../store/index");

export default {
  name: "test",

data: function () {
  return{
show:true
  }
},
  beforeMount: function () {
    console.log("BEFORE MOUNT");
    this.getPageData();
    //    this.$store.dispatch("calendar");
  },

  computed: {
    ...mapState({
      accueilData: "accueilData",
      pageData: "pageData",
    }),
  },
  methods: {
    getPageData() {
      const n = "calendar";
      this.$store.dispatch("getPageData", n);
      console.log("REQUET GET CALENDAR PAGE DATA-----> ", n);
    },
    getters: {
      pageData(state, val) {
        return console.log("RETURN GETTERS PAGE-DATA----->", val);
      },
    },
  },
};
</script>

<style scoped>
body {
  margin-top: 200px;
}

#main {
  position: relative;
}

.img_top{
  width:100%;
  height: 500px;
  border: 2px solid blue;
  border-radius: 20px;
  margin: 0 auto 2rem;
}
/* ________________________________________________________ */
.head_mid {
  display: flex;
  flex-direction: column;
}

.img_calendar {
  max-width: 1280px;
  margin: 0 auto;
}

/* ________________________________________________________ */
/* ________________________________________________________ */

body {
  max-width: 1440px;
  margin: 0 auto;
}

.bloc_card_calendar {
  margin: 1rem auto;
  display: flex;
  justify-content: space-around;
}

.section-subheading {
  margin: -2.6rem 2rem 2rem 2rem;
  color: #000;
}


.meeting-item {
  width: 90%;
  position: relative;
  border-radius: 1rem;

  margin: 0 auto;
  margin-bottom: 2rem;
  /* border: 1px solid black; */
  box-shadow: 1px 1px 16px 0px rgba(7, 7, 7, 0.6);
  height: 230px;
}

.meeting-item:hover {
  box-shadow: 1px 1px 26px 0px rgb(116, 116, 116);
  transform: scale(1.02);
  transition: 200ms;
}

.meeting-item .thumb {
  position: relative;
}

.meeting-item .thumb img {
  border-radius: 20px;
  width: 100%;
  height: 200px;
}

/* .img_thumb {
   max-height:
     120px; 
} */

.meeting-item .thumb .price {
  position: absolute;
  left: -20px;
  top: -15px;
}

.meeting-item .thumb .price span {
  font-size: 16px;
  color: #1f272b;
  color: #ffffff;
  font-weight: 600;
  background-color: rgba(250, 250, 250, 0.9);
  background: rgba(211, 2, 23, 0.8);
  padding: 7px 12px;
  border-radius: 10px;
}

.meeting-item .down-content {
  padding: 0px;
  position: absolute;
  bottom: 0;
  left: 0;
  /* border: 2px solid red; */
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 100%;
  padding: 3px 10px;
  background: rgb(253, 252, 252);
}

.down-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.date {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 2rem;
  /* width: 30%; */
}

.meeting-item .down-content .date h6 {
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
  color: #a12c2f;
}

.meeting-item .down-content .date span {
  display: block;
  color: #1f272b;
  font-size: 22px;
  margin-top: 7px;
}

.meeting-item .down-content h4 {
  font-size: 18px;
  color: #1f272b;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 5px;
  margin-top: 5px;
}

.meeting-item .down-content p {
  /* margin: auto; */
  color: #1f272b;
  font-size: 14px;
  margin-bottom: 0;
}

.down-content {
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin-bottom: 0;
  /* width: 30%; */
}

/* -----------------NOU  */
/* .head_mid{
  width: 100%;
  height: 50px;
  border: 1px solid blueviolet;
  } */

.month_date h3 {
  margin-bottom: 2.5rem;

  border-radius: 10px;

  box-shadow: 1px 1px 26px 0px rgba(116, 116, 116, 0.6);
}

.titre_foto_home {
  z-index: 111;
}

.card_calendar {
  margin: 3rem auto;
  padding: 0 1rem;
  width: 100%;
  align-content: center;
  height: auto;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;

}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}



</style>