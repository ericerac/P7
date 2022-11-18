<template>
    <div class="container">
<ul class ="liste">
  <li @click="goToHome()">home</li>
  <li  @click="goToHome()"> p1 </li>
  <li @click="goToHome()">p2 </li>
  <li @click="goToHome()">p3 </li>
  <li @click="goToCal()">Calendar </li>
  

</ul>

    </div>
    <div class="display">
      <div v-if="home">
<Home/>
</div>
    </div>
</template>

<script>
import axios from "axios";
import Home from "../views/Home.vue";
import { mapGetters, mapState } from "vuex";


export default {
  name: "pageAdmin",
  

  data: function () {
    return{
pageName:"",
home:false,

    }
  },
  computed: {
        ...mapState({
            modal:"modal",
      modalMessage:"modalMessage",
      modalError:"modalError",
      user:"user",
       pageData:"pageData"

        }),
      },
  
  components: {
     Home,
    
    
},
  methods:{

goToHome: function () {
  console.log("GO TO HOME");
    this.getPageData()
      // this.$router.push("/ad1920384756ytrdehdk");
this.home = true;
    },

    getPageData() {
      const n = "INICIO 1";
      this.$store.dispatch("getPageData", n) .then( (response)=>{
        console.log("RESPONSE HOME",response);
        if(response){
          this.home = true;
        }
      })
      
      console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    },

  }
}


</script>

<style scoped>
.liste{
  display:flex;
  width: 80%;
  margin: 20px auto;
  flex-direction: row;
  justify-content: space-around;
}
</style>
