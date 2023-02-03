<template>
  <div class="bloc_form">
    
    <form action="" class="form">
<label for="email" class="item"> Entrez votre adresse mail 
        <input type="email" name="email" v-model="email">
    </label>

      <button class="item" @click="sendRequest($event)" >Send</button>
      <router-link to="/login" ><span class="texte">Cancel</span></router-link>
        
    </form>
    <div v-if="resetPassW">

      <ResetPassW />
    </div>
  </div>
</template>

<script>

import ResetPassW from "./ResetPassW";

export default {
  data(){
    return{
      resetPassW:true,
      link:"",
email:"",
    }
  },
  components:{
    ResetPassW
  },
methods:{
  cancel(){
    this.$router.push("")
  },
    sendRequest(event){
      if (event) {
    event.preventDefault()
  }
       this.$store.dispatch("forgotPassword",{email:this.email})
       .then((res)=>{
if(res){
  console.log("RES FORGOT EMAIL ENTER EMAIL COMPONENET ---->",res);
  // this.$router.push("/ResetEmail")
  this.link=res
  this.resetPassW = true

}else{}
       })
        
        console.log("SEND REQUET DEFAULT");
    }
}
}
</script>

<style scoped>
.bloc_form{
   
width: 100%;
height: 100%;
align-items: center;
margin:auto;
padding:20px;
border:2px solid blue;
background-color: aliceblue;

}
.form{
    display: flex;
    flex-direction: column;
}
.item{
    margin:10px auto
}
</style>