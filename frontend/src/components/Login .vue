<template>
  <div class="page">
    <div v-if="modalError">
      <ModalError />
    </div>
    <div class="wrapper ">
      <div class="container ">
        
        <form class="login-form" autocomplete="on">
          
          <span class="form-title"
            >Accés administration</span
          >

          
          <div class="form-group" v-if="mode == 'signup'">
            <label for="nom">Nom</label>
            <input
              v-model="firstName"
              type="text"
              name="nom"
              class="form-control"
              placeholder="Nom"
              required
            />
            <p class="ErrorInput" v-if="messageNom">{{ messageNom }}</p>
          </div>

          

          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="Email"
              type="email"
              name="email"
              class="form-control"
              placeholder="Email"
              required
            />
            <p class="ErrorInput" v-if="messageEmail">{{ messageEmail }}</p>
          </div>

          <div class="form-group">
            <label for="password">Mot de passe</label>

            <input
              v-model="password"
              type="password"
              name="password"
              class="form-control"
              placeholder=" Votre mot de passe"
              required
              />
              <p @click="enterEmail()">
                  Mot de passe oublié ?
                </p>
            <p class="ErrorInput" v-if="messagePassword">
              {{ messagePassword }}
            </p>
          </div>

          <div class="form-group ">
            <label for="submit" class="btn-label"></label>
            <input
              v-if="mode == 'login'"
              type="button"
              name="submit"
              class="btn btn-primary btn-lg btn-block"
              :keyUp="enter"
              value="Connection"
              @click="loginPost()"
            />
            
          </div>
          
          
        </form>
      </div>
    </div>
  </div>
</template>


<script>

import { mapState } from "vuex";
import { router } from "../router";

 import ModalError from "./ModalError.vue";
 

export default {

    name: "login",
    props: {},
    data: function () {
        return {
            mode: "login",
           
           
            Email: "",
            password: "",

            

            message:"",
           
            messageEmail:"",
            messagePassword:"",

            resSignup:[],
        };
    },
    components: {
     ModalError,
   
    
    
},
watch: {
    
},
    
    computed: {
        ...mapState({
            modal:"modal",
      modalMessage:"modalMessage",
      modalError:"modalError",
      auth:"auth"

        }),
        


    },
    
    methods: {
        
        goToSignup: function () {
            this.mode = "signup";
        },

        goToLogin: function () {
            this.mode = "login";
        },
        enterEmail: function (){
this.$router.push("9876545678hgh87yhju87")
        },

        
        
        // --------------- VALIDATION FORM-------------------//
        checkForm: function () {
            
            if (!this.firstName) {
                this.messageNom = "* Le nom doit être renseigné."
                
               
                return false
            } else if (!this.validFirstName(this.firstName)) {
               this.messageNom = ' * Le nom ne doit pas contenir de caractères spéciaux';
                return false
            }

            if (!this.lastName) {
                this.messagePrenom = " * Le prénom doit être renseigné.";
                return false
            } else if (!this.validLastName(this.lastName)) {
                this.messagePrenom = '* Le prénom ne doit pas contenir de caractères spéciaux';
                return false
            }
            
            if (!this.Email) {
                this.messageEmail = "* l'adresse Email doit être renseignée.";
                return false
            } else if (!this.validEmail(this.Email)) {
                console.log("THIS:EMAIL", this.Email);
                this.messageEmail ='* Adresse email non valide';
                return false
            }
            if (!this.password) {
               this.messagePassword = "* l'adresse Email doit être renseignée.";
                return false
            } else if (!this.validPassword(this.password)) {
                
                console.log("THIS:PASSWORD", this.password);
                this.messagePassword = '* Mot de passe doit contenir entre 8 a 20 caractères dont 1 majuscule et 1 chiffre * ';
                
                return false
            }

            
            this.signupPost();

        },
        validFirstName: function (firstName) {
           
            var re = /^[a-zA-Z-._àâéèêô´`¨ ñÑî'ùûïÏäëüöÖÄçÀÂÉÈÔÙÛÇ]*$/;
            return re.test(firstName);
        },
        validLastName: function (lastName) {
           
            var re = /^[a-zA-Z-._àâéèêô´`¨ ñÑî'ùûïÏäëüöÖÄçÀÂÉÈÔÙÛÇ]*$/;
            return re.test(lastName);
        },
        validEmail: function (email) {
           
            var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            return re.test(email);
        },
        validPassword: function (password) {
           
            var re = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;
            return re.test(password);
        },

        //-------------SIGNUP----------------------//

        signupPost: function () {
            const self = this;

            this.$store
                .dispatch("signupPost", {   
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.Email,
                    password: this.password,
                })
                .then(function (response) {
                 console.log("RES SIGNUP",response)
                   
                     self.loginPost();
                })
                .catch((err) => {
                   console.log(err);
                });
        },

        //-------------LOGIN-----------------------//

        loginPost: function () {
            const self = this;
           console.log("LOGIN login.vue----->");
            this.$store
                .dispatch("loginPost", {
                    email: this.Email,
                    password: this.password,
                })
                .then((response) => { 
                  console.log("RESPONSE LOGIN",response);
                   self.$router.push("ad1920384756ytrdehdk");

                })
                .catch((err) => {
                  console.log("ERREUR",err);
                });
        },
    },
};


</script>


<style scoped>

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 300;
}

/* body {
  
    font-family: 'Lato', sans-serif;
    color: #FFF;
    font-weight: 300;
    background-color: white;
       height: 100%;
        
} */

.wrapper {
    position: relative;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    /* min-height: 750px; */
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
   
    background-color: #bebdbd;
}
.page{
 
}
.container {
    -webkit-box-shadow: 10px 0px 30px 5px rgba(0, 0, 0, 0.27);
    -moz-box-shadow: 10px 0px 30px 5px rgba(0, 0, 0, 0.27);
    box-shadow: 5px 0px 30px 5px rgba(0, 0, 0, 0.27);
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    flex-direction: column;
    padding: 0px;
    width: 300px;
    height: auto;
    border-radius: 15px;
    

}
.login-form {
  position: relative;
    width: 100%;
    height: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    background-color: #f4f3f3;
}


.form-title {
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    width: 100%;
    display: block;
    padding-bottom: 25px;
    padding-top: 25px;
}
.form-control {
    display: block;
    width: 80%;
    height: calc(1.5em + .75rem + 10px);
    margin: .7rem auto;    
    padding: 1rem ;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    /* background-clip: padding-box; */
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.form-group{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:0 auto;
padding:1rem;
}

.error{
width: 100%;
height: 50px;
padding:3px;
color:red;
background-color: white;
}
.enterEmailComponent{
  position: absolute;
  top:0;
  left:0;
  right: 0;
  bottom: 0;

}
@media screen and (min-width: 576px) and (max-height: 440px){
  .container{
    width: 100%;
  }
}
@media screen and (min-width: 768px) and (min-height: 440px){
  .container{
    width: 400px;
  }
}

</style>
