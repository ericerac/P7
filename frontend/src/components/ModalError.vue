<template>
  <div class="bloc">
  <div>
    <p v-on:click="modalClose">{{ modalMessage }} X</p>
  </div>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-nou">
          <div class="mod">
            
      
            <p>{{ modalMessage }}</p>
            <button @click="ModalError(false)">fermer</button>
          </div>
          <!-- <div class="close">
            <img class="close-img" src="" alt="" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</div>
</template>
  
<script>

import { mapState } from 'vuex';


export default {
  name: 'Modal',

  computed: {
    ...mapState({ modalMessage: "modalMessage" })
  },
  methods: {
    modalClose: function () {
      this.$store.dispatch("modalErrorClose");

    },
    ModalError: function (val) {
      this.$store.commit("ModalError", val);
    },
    goToLogin() {

      this.modalClose();
      this.$store.dispatch("disconnect")
      this.$router.push("/");
    }
  }

};

</script>
  
<style scoped>
.modal-mask{
  display: flex;
  /* width: 100vw;
  height: 100vh; */
  border:1px solid blue;
  position:absolute;
  top:50%;left:50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 100;
  align-items: center;
  background: rgba(0,0,0,.3);

}
.modal-container{
  width:300px;
  height: 300px;
  margin:auto
}
.modal-nou{
  display: flex;
  width:300px;
  height: 300px;
  border:1px solid red;
  border-radius: 10px;
 justify-content: space-around;
 background: rgb(252, 38, 38,.5);
 
}
.mod{
  margin:auto
}
p{
  font-size: 25px;
  color:white
}
</style>