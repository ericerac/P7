<template>
    <div class="container">
<ul class ="liste">
  <li @click="goToHome()">home</li>
  <li  @click="goToHome()"> p1 </li>
  <li @click="goToHome()">p2 </li>
  <li @click="goToHome()">p3 </li>
  <li @click="goToHome()">p4 </li>
  

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

        }),
      },
  
  components: {
     Home,
    
    
},
  methods:{

goToHome: function () {
  console.log("GO TO HOME");
      // this.$router.push("/ad1920384756ytrdehdk");
this.home = true;
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
