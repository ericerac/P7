<template>
  <div class="bloc_form">
    
    <form action="" class="form">
<label for="email" class="item"> Entrez votre adresse mail 
        <input type="email" name="email" v-model="email">
    </label>

      <button class="item" @click="sendRequest" >Send</button>
      <router-link to="/login" target="_blank"><span class="texte">Cancel</span></router-link>
        
    </form>
    <div v-if="resetEmail">

      <ResetEmail />
    </div>
  </div>
</template>

<script>

import ResetEmail from "./ResetEmail"
export default {
  data(){
    return{
resetEmail:false,
email:"",
    }
  },
  components:{
    ResetEmail
  },
methods:{
  cancel(){
    this.$router.push("")
  },
    sendRequest(){
      
       this.$store.dispatch("forgotPassword",this.email)
       .then((res)=>{
if(res){
  console.log("RES FORGOT EMAIL ENTER EMAIL COMPONENET ---->",res);
  this.resetEmail= true;
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