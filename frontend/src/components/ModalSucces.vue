<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-nou">
          <div class="mod">
            <img class="check" src="" alt="" />
            <h6>Succés</h6>
            <p>{{ modalMessage }}</p>
            <button @click="ModalSucces(false)">Close</button>
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
  name: 'modalSucces',

  computed: {
    ...mapState({ modalMessage: "modalMessage" })
  },
  methods: {
    ModalSucces: function (val) {
      this.$store.commit("ModalSucces",val);
    }
  }

};
</script>
    
    
    <style  scoped>
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

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
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