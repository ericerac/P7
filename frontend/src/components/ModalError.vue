<template>
    <div>
  <p v-on:click="modalClose">{{modalMessage}} X</p> 
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