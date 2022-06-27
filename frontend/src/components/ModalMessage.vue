<template>
<transition name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-nou">
          <div class="mod">
            <img class="check" src="" alt="" />
            <h6 v-if="modalMessage ==  'Votre temps de session à expiré. Reconnectez-vous.' ">Désolé</h6>
            <h6 v-else ></h6>
            <p>{{ modalMessage }}</p>
            <button v-if="modalMessage ==  'Votre temps de session à expiré. Reconnectez-vous.' " @click="goToLogin">Login</button>
            <button v-else @click="modalClose()">fermer</button>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</transition>

  
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
    
    
    <style lang="css" scoped>
body {
  z-index: 111;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-nou {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  background-color: #8f8d8dda;
}

.mod {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 250px;
  width: 250px;
  margin: auto;
  padding: 0px 0;
  border-radius: 20px;
  border: 2px solid black;
}





.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}



</style>

    