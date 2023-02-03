<template>
  <div class="newPassForm">
    <div class="bloc_form">
      <div class="inputP ">
        <label for="password1"> Entrez votre nouveau mot de passe
        <input type="password" name="password1" v-model="password1">
       <span class="valid_icon" v-if="password1"><i v-if="password1Valid == true" class="validet"></i> <i v-if="password1Valid == false" class="unvalidet"></i> </span>
       
    </label>
  </div>
  <div class="inputP I2">
    <div class="pass2">
        <label  for="password1"> Comfirmez votre mot de passe
        <input v-model="password2" class="normal_input" type="password" name="password1">
        <span class="valid_icon" v-if="password2"><i v-if="password2Valid == true" class="validet"></i> <i v-if="password2Valid == false" class="unvalidet"></i> </span>
      </label>
    </div>
    </div>
  
    </div>
    <button>Envoyer</button>
  </div>
</template>

<script>

export default {
name:"resetEmail",
data() {
    return {
      same_password:false,
      password1Valid:false,
      password2Valid :false,
password1:"",
password2:"",
    };
  },
  watch: {
    password1(newValue, oldValue) {
      this.checkForm(newValue)
      console.log("WATCH PASSWORD1",newValue)
  },
  password2(newValue, oldValue){
if(this.password1 === newValue){
  console.log("PASSWORD IDENTHIQUE");
  this.password2Valid=true
}else{
  console.log("PASSWORD DIFFERENT");
}
  }
},
  methods:{
    checkForm: function (p) {
      if (!this.validPassword(p)) {
                
                console.log("THIS:PASSWORD", this.password1Valid = false);
                this.messagePassword = '* Mot de passe doit contenir entre 8 a 20 caractères dont 1 majuscule et 1 chiffre * ';
                
                return false
            }
            else{
              console.log("THIS:PASSWORD", this.password1Valid = true);
              this.password1Valid = true
            }
  },
  validPassword: function (p) {
           console.log("VALIDATION PASS",p);
           var re = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;
           return re.test(p);
       },
}
}
</script>

<style scoped>
.newPassForm{
  display:flex;
  flex-direction: column;
  justify-content: center;
border:1px solid black;
width:300px;
height:300px;
position:absolute;
top:50%;
left:50%;
transform: translateX(50%) translateY(-50%);
align-items: center;
vertical-align: middle;
}
.bloc_form{
  display:flex;
  flex-direction: column;
  /* justify-content: space-around; */
 height:200px;
  border: 1px solid rgb(8, 85, 241);
  
}
label{
  margin:15px
}
.inputP{
  display:flex;
  flex-direction: column;
  border:1px solid rgb(159, 250, 23);
  height: 50%;
}
.I2{
  position:relative;
  /* border:1px solid red */
  
}
.normal_input{
  border-color:black;
  
}
.invalid_input_2{
  border-color:red
}
.valid_input_2{
  border-color:rgb(1, 173, 4);
  
}
.pass2::after{
content:" mots de passe non identhiques";
position: absolute;
bottom:0;
left:50%;
width:100%;
transform:translateX(-50%);
padding-top:5px
}
.valid_icon{
  position: relative;
  width:24px;
  height: 24px;
  margin-left:10px;
}
.unvalidet::before{
  content:"";
  position: absolute;
  top:0;
  left:0;
  background-image: url("../assets/icons/checkmark-24\ \(1\).png");
  width:24px;
  height:24px;

}
.validet::after{
  content:"";
  position: absolute;
  top:0;
  left:0;
  background-image: url("../assets/icons/checkmark-24.png");
  width:24px;
  height:24px;

}
</style>