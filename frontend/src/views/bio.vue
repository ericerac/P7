<template>
    <div class="bloc ">
        <div class="container p-0 mt-0 text-center">

            <div class="bloc_nav " v-if="navbarOk">
                <navbar />
            </div>

            <!-- <div class="row ">
                <div class="header_bio">
                    <div class="bloc_header">
                        <img :src="pageData[0].imageUrl" alt="">
                    </div>
                </div>
            </div> -->

            <div class="row col-12 bloc_img_text   ">
                <div class="bloc_header_2 col-12 col-lg-6  m-0 m-lg-auto">
                        <img class=" img_thumb col-12 p-3" :src="pageData[0].imageUrl" alt="">
                       

                    </div>

                <div class="bloc_left p-2 col-12 col-lg-6 text-center ">
                    <!-- <span class="switch_line" v-if="pageData[0].p_1"></span> -->

                    <p class="description_bio">{{pageData[0].p_1}}
                    </p>

                    <span class="switch_line" v-if="pageData[0].p_2"></span>

                    <p class="description_bio"> {{pageData[0].p_2}}</p>

                    <span class="switch_line" v-if="pageData[0].p_3"></span>

                    <p class="description_bio">{{pageData[0].p_3}}</p>

                    <span
                        class="switch_line" v-if="pageData[0].p_4"></span>

                    <p class="description_bio">{{pageData[0].p_4}}</p>

                    <span
                        class="switch_line" v-if="pageData[0].p_5"></span>

                    <p class="description_bio">{{pageData[0].p_5}}</p>

                    <span
                        class="switch_line"></span>

                </div>


                <div class="bloc_right m-2">
                    <!-- <img class=" img_1 col-12" src="../assets/images/BIO-M_3.png "
                        alt="Image bio Marta Renyer robe rouge"> -->
                </div>

            </div>
            <foot />
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
            navbarOk:false,
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
                // .then((res) => {
                //     if (res) {
                //         console.log("RES GET BIO", res.data[0].name);
                //         let p = res.data[0].name
                //         // this.$store.dispatch("getImgData", p)
                //     }
                // });
            console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
        },
        getNavData() {
      const n = "navbar";
      this.$store.dispatch("getNavData", n)
        .then((res) => {
          if (res) {
            if(res){
                this.navbarOk = true
            }
          }
        });
      console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
    },
        
    },

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Unna&display=swap'); 
.header_bio {
    height: 150px;
  
}
.bloc_header {
    
    height: 150px;
    overflow: hidden;
    align-items: baseline;

    }
    .bloc_nav {

  position: sticky;
  top: 20px;
  z-index: 1000;
  
}
.bloc_img_text{
    display: flex;
    flex-direction: row;
    margin:50px auto
   
}
.bloc_header_2{
    display: flex;
    flex-direction: column;
    object-fit: cover;
}
.bloc_left {
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    
}
.description_bio{
    text-align: center;
    /* font-family: 'Sawarabi Mincho', serif; */
    font-family: 'Unna', serif;
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
    margin: .5rem auto;
}
.img_1 {

    position: fixed;
    top: 200px;
    left: 6px;
    opacity: .5;

}
@media screen and (max-width:576px) {
    .bloc_header_2{
        
    }
    .bloc_nav{
        position: absolute;
        top:-20px;
        right: 20px;
    }
    .img_thumb{
        position: fixed;
        top:50px;
        margin: 0 -13px;
   
    }
    .bloc_img_text{
        
}
    .bloc_left{
        z-index:2;
        margin-top:555px;
        background-color: rgba(255, 255, 255,.6);
    }
}
</style>