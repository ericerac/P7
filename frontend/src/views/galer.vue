<template>
  <div>
    <div class="container header mt-0">

      <h1 class="fw-light text-center text-lg-start mt-0 mb-0">A Vendre</h1>
      <h1 class="fw-light text-center text-lg-start mt-0 mb-0">Galerie</h1>

    </div>

<div class="container search">
  <input class="search-input mb-0 mt-1 pb-0" v-model="searchUser" type="search" id="search"
                                placeholder="rechercher" autocomplete="off" />
</div>
    <!-- ********* GALERIE ***********-->
    <div class="container">
      <div class="row text-center ">

        <div @click="(desc(d._id))" class="card_bloc  offset col-md-5  col-lg-3 col-xl-4 col-xxl-5 mb-3"
          v-for="(d,index)  in pageData" :key="index">

          <div class="viewCard" v-if="(viewCard == true && d._id == oneCardData[0]._id)">
            <p class="description_view">{{ oneCardData[0].description }}</p>
          </div>
          <div class="col-12 ">
            <a href="#" class="d-block mb-4 h-100">
              <img class="img " :src="d.imageUrl" alt="">
            </a>
          </div>


          <div class="text_bloc col-12">
            <div class="price col-3">
              {{ d.prix }} €
            </div>
            <div class="description_bloc col-9">
              <span>{{ d.product }} {{ d.index }}</span>
              <!-- <span>{{ d.description }}</span> -->


            </div>

          </div>
          <div class="info fw-bold">
            {{ d.info_top }}
          </div>

        </div>
        <!-- <span>{{ d.credit }}</span> -->
      </div>

    </div>
  </div>
</template>

<script>



import { mapGetters, mapState } from "vuex";


export default {

  name: "galer",
  data: function () {
    return {
      oneCardData: "",
      viewCard: false,
      searchCathegorie:"",
    };


  },
  beforeMount: function () {


    this.getPageData("galerie");

  },
  computed: {
    ...mapState({
      pageData: "pageData",
    }),
  },
  component: {

  },
  compyted:{
    filterUser() {
            if (this.pageData) {


                return this.pageData.filter((a) => {
                    return a.cathegorie.toLowerCase().includes(this.searchCathegorie.toLowerCase());
                })
            }
        },
  },
  methods: {
    FileUpload(event) {
      this.fileSelected = event.target.files[0];
    },

    getPageData() {
      const n = "galerie";
      this.$store.dispatch("getPageData", n);
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },

    desc(x) {
      console.log("ID PRODUCT", x);

      let oneCard = this.pageData.filter(e => e._id == x);

      const stringi = JSON.stringify(oneCard);
      console.log("STRINGiFY ---->", stringi);
      const parsi = JSON.parse(stringi);

      console.log(" PRODUCT", oneCard);
      console.log(" PRODUCT PARSE", parsi);
      this.oneCardData = parsi;


      if (this.viewCard == false) {
        this.viewCard = true;
      } else {
        this.viewCard = false;
      }


    }
  },
}

</script>

<style scoped>
h1 {
  margin-top: 0;
}

.row {
  margin: 0 auto;

}

.header {
  background-color: bisque;
  position: relative;
}

.card_bloc {
  position: relative;
  display: flex;
  /* width: 300px;
  height: 250px; */
  /* border: 1px solid blue; */
  margin: auto;

  padding: 0;
  /* border-radius: 10px; */
  /* overflow: hidden; */
  object-fit: contain;
  max-width: 300px;
  max-height: 250px;
  min-width: 250px;
}

.card_bloc:hover {
  /* transform: scale(1.1); */
  box-shadow: 3px 3px 13px #00000064;
  transition-duration: 250ms;
  opacity: .8
}

.img {
  width: 100%;
  height: 250px;

}

.text_bloc {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 20%;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid black;

}

.price {
  display: flex;
  height: 100%;
  justify-content: center;
  /* border: 1px solid red; */
  font-size: 12px;
  align-items: center;
  /* vertical-align: middle; */
  border-radius: 10px;

}

.price p {
  margin: auto;
}

.description_bloc {
  line-height: 1;
  font-size: 12px;
}
.viewCard{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background-color: rgba(251, 250, 250, 0.7);
  text-align: center;
  font-weight: 800;
  overflow: scroll;
 
}
.description_view {
  margin:  30px auto;
  
}
.info{
  position: absolute;
  top:-10px;
  left:-20px;
  background-color: brown;
  border-radius: 5px;
  z-index: 111;
  padding: 3px 6px;
  color:wheat;

}
</style>