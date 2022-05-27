<template>
  <div class="modal-nou">
    <div class="mod">
      <img class="check" src="" alt="" />
      <h6>Erreur</h6>
      <p>{{}}</p>
      <button>fermer</button>
    </div>
    <div class="close">
      <img class="close-img" src="" alt="" />
    </div>
  </div>
</template>


    
    <script>
        export default {
            name:'ModalMessage'
        };
    </script>
    
    
    <style lang="css" scoped>


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

    