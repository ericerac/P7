<template>
    <div>
      <div class="container">
  
        <h1 class="fw-light text-center text-lg-start mt-4 mb-0">Thumbnail Gallery</h1>
  
  
  
  
  
      </div>
  
  
      <!-- ********* GALERIE ***********-->
      <div class="container">
  
        <h1 class="fw-light text-center text-lg-start mt-4 mb-0">Galerie</h1>
  
  
  
        <div class="row text-center ">
  
          <div class="card_bloc" v-for="d in pageData" :key="d.id">
  
  
            <div class="col-lg-12 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img " :src="d.imageUrl" alt="">
              </a>
            </div>
  
  
            <div class="text_bloc col-lg-12">
              <div class="price col-lg-3">
                {{ d.prix }} € 
              </div>
              <div class="description_bloc col-lg-9">
                <span>{{ d.name }}</span>
                <span>{{ d.description }}</span>
  
                
              </div>
              
            </div>
            <div class="info">
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
    methods: {
      FileUpload(event) {
        this.fileSelected = event.target.files[0];
      },
  
      getPageData() {
        const n = "galerie";
        this.$store.dispatch("getPageData", n);
        console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
      },
    },
  }
  
  </script>
  
  <style scoped>
  .card_bloc {
    position: relative;
    display: flex;
    width: 300px;
    height: 250px;
    border: 1px solid blue;
    margin: 1rem 2rem;
    padding: 0;
    border-radius: 10px;
    overflow: hidden;
    object-fit: contain;
  }
  
  .img {
    width: 300px;
    height: 250px;
  
  }
  .text_bloc{
    position: absolute;
    left:0;
    bottom:0;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 20%;
    background: rgb(223, 222, 222);
    
  }
  .price{
   display: flex;
   height: 100%;
   justify-content: center;
    border:1px solid red;
    font-size: 12px;
   align-items: center;
   vertical-align: middle;
    
  }
  .price p{
    margin: auto;
  }
  .description_bloc{
  line-height: 1;
  font-size: 12px;
  }
  </style>