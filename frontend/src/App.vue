<template>



<div v-if="modal">
<ModalMessageVue />
</div>
<routerView/>
<!-- <router-view class="view"> </router-view> -->
 
</template>

<script>
import { mapState } from 'vuex';
import ModalMessageVue from './components/ModalMessage.vue'


export default {
  name: 'App',
   data: function () {
        return {
            // detailUser: "",
            // modalMessageVue: "modalMessage",
        };
    },
  components: {
ModalMessageVue
  },

  computed:{
    ...mapState({
      modalMessageVue: "modalMessage",
      modal:"modal",

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
  background-color: rgb(252, 217, 164);
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
  background-color: rgb(252, 217, 164);
  margin-top: 0px;
  background-attachment: fixed;
  margin:auto;

}

</style>
