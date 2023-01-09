<template>
  <div class="container background">
    <div class="bloc_nav " v-if="navbarOk">
      <navbar />
    </div>
    <div class="row g-0">
      <div class="slider">
        <!-- <Carousel /> -->


        <div class="loop" v-for="(img, index) in imgData" :key="`item-${index}`">
          <transition name="slider-in">
            <img v-if="index === currentSlide" class="img_diapo" :src="img.imageUrl" alt="">

          </transition>
        </div>
      </div>

      <div class="bloc_loop col-12" v-for="(i, index) in pageData" :key="i._id">


        <!-- <div class="back col-12" v-bind:style="{ backgroundImage: 'url(' + i.imageUrl + ')' }">

      </div> -->

        <div class="header col-12">
          <!-- <img class="header_img col-12" :src="i.imageUrl" alt=""> -->
          <div class="header_title">
            <h1>{{ i.title_1 }}</h1>
          </div>

        </div>
        <div class="bloc_thumb ">
          <div class=" bloc_info col-12">
            <div class="bloc_sinopsis">
              <h6 class="title_info_sinopsis col-2"><strong>Sinopsis</strong> 
                </h6>
              <p class="sinopsis">{{ i.synopsis_1 }}
              </p>
            </div>
            <div class="bloc_fiche_art">
              <h6 class="title_info "><strong>{{ i.p_1 }}</strong> </h6>
              <p>{{ i.p_2 }}
              </p>
              <p>{{ i.p_3 }}
              </p>
              <p>{{ i.p_4 }}</p>
              <p>{{ i.p_5 }}</p>
              <p>{{ i.p_6 }}
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    <foot />
  </div>
</template>

<script>

import { mapGetters, mapState } from "vuex";


export default {
name:"kakosUp",

data(){
    return{

    }
},
computed:{
    ...mapState({
      
    //   pageData: "pageData",
      
    }),
},
created:{

}

}
</script>

<style>

</style>