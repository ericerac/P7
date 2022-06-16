<template>
  <div class="container  d-flex justify-content-center align-items-center">

    <div class="row col-12 col-lg-10 col-xl-10">
    <div class="fond_bg">
      <div class="navBar mb-3 pd-3 d-flex justify-content-between align-items-center">
        <img class="logoTop" src="../assets/icon-left-font-monochrome-white.svg" alt="logo groupomania">
        <div .class="powerOff">
          <fa :icon="['fas', 'power-off']" @click="disconnect()" />
        </div>
      </div>
      <div class="card  ">
        <div class=" col-md-12 mt-2 text-center">
          <div class="user text-center">

          </div>
          <div class="user text-center">
            <span v-if="userData.role == 'admin'">
              <button class="btn btn-sm follow mt-0" @click="goToUsersData">
                Liste Des utilsateurs
              </button>
            </span>

            <span>
              <button class="btn btn-sm follow mt-0" @click="goToUpdateProfil">Modifier mon profil</button>
            </span>
            <span>
              <button class="btn btn-sm follow mt-0" @click="goToFilActu">
                Allez au fil d'actualité
              </button>
            </span>
            <span>
              <button class="btn btn-danger btn-sm follow mt-0" @click="deleteUser(userData.id)">
                Effacer mon compte
              </button>
            </span>
          </div>

        </div>

        <div class="upper">
          <div class="profile">
            <img v-if="!userData.media" id="userImg" src="../assets/icon.svg " class="rounded-circle" width="80"
              alt="logo groupomania" />

            <img v-if="userData.media" id="userImg" v-bind:src="userData.media" class="rounded-circle" width="80"
              alt="Photo de profil" />

          </div>
        </div>

        <!-- <div><ModalMessage/></div> -->

        <div class="avis-media mt-1 mb-0 ">
        <p class="bienvenue" v-if="status">Bienvenue sur votre reseau social</p>
          <p v-if="!userData.media" @click="goToUpdateProfil">Completez votre profil</p>
        </div>
        <div class="mt-1 text-center">

          <h4 class="mt-3">{{ userData.firstName }} {{ userData.lastName }}</h4>

          <p id="adminUser" v-if="userData.role == 'admin'">Compte administrateur</p>
          

          <div class="d-flex list-Foot justify-content-evently align-items-center px-1">
            <div class="stats">
              <h6 class="mt-3">Articles</h6>
              <span class="stat">{{ CountArticle }}</span>
            </div>

            <div class="stats">
              <h6 class="mt-3">Commentaires</h6>
              <span class="stat">{{ CountComment }}</span>
            </div>

            <div class="stats">
              <h6 class="mt-3">Inscrit le:</h6>
              <span class="stat">{{ dateTime(userData.createdAt) }}</span>
            </div>

          </div>
        </div>
      </div>

      <div class="navBar mt-3  d-flex justify-content-between ">
        <img class="logoTop" src="../assets/icon-left-font-monochrome-white.svg" alt="logo groupomania">

        <ul class="footerList">
          <li><a class="contact" href="mailto:contact@groupomania.com">Contact</a></li>
          <li>Avis légal</li>

        </ul>
</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const FormData = require("form-data");
import { axios } from "axios";
import moment from "moment";
let userId = "";
let token = "";
let data = {};
import ModalMessage from "@/components/ModalMessage.vue";






export default {
  name: "profil",

  beforeMount: function () {
    console.log("BEFORE MOUNT");
    if($cookies.get("user")){

      let userCookies = $cookies.get("user");
    console.log("USER COOKIES", userCookies);
    this.userId = userCookies.userId;
    // this.token = userCookies.token;
    data = {
      userId: this.userId,
      // token: this.token
    }
    console.log("USER-DATA-->", data, userId,);
    this.getUserData(userId);
      }else{
        this.$router.push("/");
      }
  },

  
  created: function () {
    console.log("CREATED");
    console.log("USER-DATA-->", this.userData);


  },

  components: {

    ModalMessage
  },


  data: () => {
    return {
      mode: "profil",
      fileSelected: null,
      name: "",

      ModalMessage: true,

      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",

      
    };
  },
  props: {},
  computed: {
    ...mapState({
      userData: "userData",
      CountArticle: "articles",
      CountComment: "comments",
      UpdateData: "formData",
      usersId: "userId",
      
      status: "status",
    }),
    
  },
  methods: {
    goToProfil: function () {
      this.mode = "profil";
    },
    goToFilActu: function () {
      this.$router.push("/postPage");
    },

    goToUpdateProfil: function () {
      this.$router.push("/updateProfil");
    },
goToLogin(){
      this.$router.push("/");
    },
    
    goToUsersData: function () {
      this.$store.dispatch("getAllUsersData")

       this.$router.push("/UserList");
    },
    //----------------DISCONNECT-----------------//
    disconnect() {
      console.log("DISCONNECT");
      $cookies.remove("user");
      userId = "";
      token = "";
      this.$router.push("/");
    },

    FileUpload(event) {
      console.log("EVENT", event);
      this.fileSelected = event.target.files[0];

      console.log("fichier Image", this.fileSelected);
    },
    dateTime(value) {
      return moment(value).format("DD-MM-YYYY");
    },

    //-----------------GET USER DATA-----------------------//
    getUserData() {
      const data = this.userId;
console.log("DATA GET-USER",data);
      this.$store
        .dispatch("getUserData", data)
        .then((response) => {
          console.log("REPONSE USER DATA Profil", response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //--------------------UPDATE-USER 1---------------------//

    onSubmit() {
      // upload file
      var bodyFormData = new FormData();
      bodyFormData.append("media", this.fileSelected, this.fileSelected.name);
      bodyFormData.append("firstName", this.firstName);
      bodyFormData.append("lastName", this.lastName);
      bodyFormData.append("email", this.email);
      bodyFormData.append("userId", userId);

      console.table("this.firstName ", ...bodyFormData.entries());
      this.$store
        .dispatch("updateUser", bodyFormData)

        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    },

    //--------------------DELETE USER-------------------------//

    deleteUser(data) {
      const result = window.confirm("Voulez-vous vraiment supprimer votre compte ?")
      if (!result) {
        return
      }
      console.log("USER-ID PROFIL DELETE", data);
      this.$store
        .dispatch("deleteUser", data)
        .then((res) => {
          if (res) {
            console.log("RES PROFIL PAGE DELETE ------>", res.data.message);
           

            this.disconnect()
          }
        }).catch((err) => {
          console.log("ERREUR REQUETE PROFIL DELETE USER------>", err);

        })
    }

  },
};
</script>

<style scoped>
body {
  background-color: #545454;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  
}

#app {
  /* background-image: url("../assets/fondNavRed.png"); */
  background-repeat: repeat;
  background-position: center;
  background-attachment: fixed;

}


.container {
  height: 100vh;
  
  
}

.container {
  background-color: rgb(252, 217, 164);
  max-width: 1200px;
  min-width: none;

}

.fond_bg{
/* background-image: url("../assets/fondNavRed.png"); */
background-image:url("../assets/Fondnav.png ");
padding: 5% ;
border-radius: 20px ;
height: auto;

}


.navBar {
  display: flex;
  justify-content: space-between;
  /* border: 1px solid black; */
  width: 100%;
  height: 50px;
  box-shadow: 1px 1px 5px 1px white;
  background-image: url("../assets/Fondnav.png ");
  border-radius: .7rem;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;

}

.logoTop {
  width: 20%;
  height: auto;
  box-shadow: 2px 2px 20px solid black;
}

.card {
  /* width: 380px; */
  border: none;
  border-radius: 15px;
  padding: 8px;
  background-color: #fff;
  position: relative;
  height: auto;

}

.upper {
  height: 70px;
}



.user {
  position: relative;
}

.profile img {
  height: 80px;
  width: 80px;
  margin: 2px auto;
}

.profile {

  height: 90px;
  width: 90px;
  border: 3px solid #fff;
  margin: 2px auto;

  border-radius: 50%;
}

.avis-media {

  width: 100%;

  text-align: center;

}

.follow {
  border-radius: 15px;
  padding-left: 20px;
  padding-right: 20px;
  height: 35px;
}
.bienvenue{
  font-size: 25px;
  color:green;
}


.footerList {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;

}

.ul {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.list-Foot {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

ul li {
  margin-left: 2rem;
  font-size: 1rem;
  margin-top: 1rem;
}

.contact {

  color: white;
  font-weight: bold;
  right: 2rem;
}
</style>
