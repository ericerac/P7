<template>
    <div>
  <p v-on:click="modalClose">{{modalMessage}} X</p> 
    </div>
    <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-nou">
          <div class="mod">
            <img class="check" src="" alt="" />
            <h6>Succés</h6>
            <p>{{ modalMessage }}</p>
            <button @click="ModalError(false)">fermer</button>
          </div>
          <div class="close">
            <img class="close-img" src="" alt="" />
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
      this.$store.commit("ModalError",val);
    },
    goToLogin(){

      this.modalClose();
      this.$store.dispatch("disconnect")
      this.$router.push("/");
    }
  }

};

  </script>
  
  <style scoped>

  div{
    width: 100%;

  }
  </style>