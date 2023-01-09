<template>


<!-- <loader v-if="loading"/> -->
<!-- <div v-if="modal">
<ModalMessageVue />
</div> -->
<routerView/>
<!-- <router-view class="view"> </router-view> -->
 
</template>

<script>
import { mapState } from 'vuex';
import loader from './components/loader.vue';


export default {
  name: 'App',
   data: function () {
        return {
            // detailUser: "",
            // modalMessageVue: "modalMessage",
        };
    },
  components: {
loader
  },

  computed:{
    ...mapState({
      loading:"loading",
      time:"time"

    })
  }


}
</script>

<style >

.view{
  margin: auto;
  background-color: black;
  height: 100%;
}
html {
  /* background-color: rgb(252, 217, 164); */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: transparent;
  margin-top: 0px;
  background-attachment: fixed;
  margin:auto;

}
li{
  list-style: none;
}
</style>
