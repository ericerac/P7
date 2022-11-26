<template>
  
  <div class="container-fluid text-center">
    <div class="col-lg-8 col-xl-8 bloc-page">
      <!-- //----------------------- EDITION PAGE-------------------------// -->
      <div class="col-lg-12 col-xl-12 card-component bg-white mb-3 pb-2 pt-1">
        <form class="updateProfil-form">
          <div class="fond-form">
            <span class="form-title">
              Vous êtes sur la page: <strong>{{ pageData[0].name }}</strong></span
            >
            <div class="form-group"></div>
            <div class="form-group">
              <label class="text-start">Nom de la page </label>
              <input
                v-model="pageData[0].name"
                type="text"
                name="nom"
                class="form-control"
                placeholder="pageData.name"
              />
            </div>
            <div class="form-group">
              <label>Titre 1</label>
              <input
                v-model="pageData[0].title_1"
                type="text"
                name="prenom"
                class="form-control"
                placeholder="pageData.title_1"
                required
              />
            </div>
            <div class="form-group">
              <label>Sous-titre 1</label>
              <input
                v-model="pageData[0].subTitle_1"
                class="form-control"
                placeholder="pageData.name"
              />
            </div>
            <label>Barre navigation</label>
            <textarea
              v-model="pageData[0].nav_1"
              class="mt-3 form-control"
              col="6"
              rows="2"
              type="text"
              size="6"
              placeholder="pageData.p_1"
              maxlength="1000"
            ></textarea>
            <label>Barre navigation</label>
            <textarea
              v-model="pageData[0].nav_2"
              class="mt-3 form-control"
              col="6"
              rows="2"
              type="text"
              size="6"
              placeholder="pageData.p_1"
              maxlength="1000"
            ></textarea>
            <label>Barre navigation</label>
            <textarea
              v-model="pageData[0].nav_3"
              class="mt-3 form-control"
              col="6"
              rows="2"
              type="text"
              size="6"
              placeholder="pageData.p_1"
              maxlength="1000"
            ></textarea>
            <label>Barre navigation</label>
            <textarea
              v-model="pageData[0].nav_4"
              class="mt-3 form-control"
              col="6"
              rows="2"
              type="text"
              size="6"
              placeholder="pageData.p_1"
              maxlength="1000"
            ></textarea>

            <div class="form-group">
              <label>image 1{{pageData.imageUrl}}</label>
              <img
                class=""
                :src= "pageData[0].imageUrl"
                alt="image"
                width="200"
                height="160"
              />
              <div class="form-group">
                <label for="image">
                  <input
                    type="file"
                    name="image"
                    id="PhotoPerfilChange"
                    ref="file"
                    @change="FileUpload"
                    accept="image/png, image/jpeg"
                /></label>
              </div>
            </div>

            <div class="form-group">

            <label class="btn-action" for="submit"></label>
            <input type="button" name="submit" class="btn btn-primary mt-1 btn-lg btn-block" keyUp="enter"
              value="Modifier" @click="updatePage()">

            <label class="btn-action" for="retour"></label>
            <input type="button" name="retour" class="btn btn-primary mt-1 btn-lg btn-block" keyUp="enter"
              value="Annuler" @click="goToProfil">
          </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://localhost:3000/",
// });



const def = () => console.log("HOME : VUE");
def();



export default {
  name: "ad1920384756ytrdehdk",

  data: function () {
    return {
      mode: "login",
      content: "",

      
    };
  },

  created: function () {
    console.log(" MOUNTED HOME ");

    // this.getPageData();
      
    },
  

  components: {
    // ModalMessage,
  },
  watch: {},

  computed: {
    ...mapState({
      modal: "modal",
      modalMessage: "modalMessage",
        pageData: "pageData",
    }),
  },

  methods: {
    FileUpload(event) {
      this.fileSelected = event.target.files[0];
    },

    // getPageData() {
    //   const n = "INICIO 1";
    //   this.$store.dispatch("getPageData", n);
    //   console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
    // },

    updatePage() {
     



    let bodyFormData = new FormData();

    
     if (this.fileSelected) {


       bodyFormData.append("imageUrl", this.fileSelected, this.fileSelected.name);
       bodyFormData.append("id", this.pageData[0]._id);
       bodyFormData.append("name", this.pageData[0].name);
       bodyFormData.append("title_1", this.pageData[0].title_1);
       bodyFormData.append("subTitle_1", this.pageData[0].subTitle_1);
       bodyFormData.append("nav_1", this.pageData[0].nav_1);
       bodyFormData.append("nav_2", this.pageData[0].nav_2);
       bodyFormData.append("nav_3", this.pageData[0].nav_3);
       bodyFormData.append("nav_4", this.pageData[0].nav_4);
       bodyFormData.append("nav_5", this.pageData[0].nav_5);
       bodyFormData.append("nav_6", this.pageData[0].nav_6);
       bodyFormData.append("nav_7", this.pageData[0].nav_7);

     } else {
      bodyFormData.append("id", this.pageData[0]._id);
      bodyFormData.append("name", this.pageData[0].name); 
       bodyFormData.append("title_1", this.pageData[0].title_1);
       bodyFormData.append("subTitle_1", this.pageData[0].subTitle_1);
       bodyFormData.append("nav_1", this.pageData[0].nav_1);
       bodyFormData.append("nav_2", this.pageData[0].nav_2);
       bodyFormData.append("nav_3", this.pageData[0].nav_3);
       bodyFormData.append("nav_4", this.pageData[0].nav_4);
       bodyFormData.append("nav_5", this.pageData[0].nav_5);
       bodyFormData.append("nav_6", this.pageData[0].nav_6);
       bodyFormData.append("nav_7", this.pageData[0].nav_7);

     }
     
     this.$store
       .dispatch("updatePage", {
                    data:bodyFormData,
                      // page: `${process.env.VUE_APP_PAGE1_NAME}`
                      page: "portada"
                  })

       .then((response) => {
       
         alert("Votre page a bien été modifié")
        //  this.$router.push("/profil")
       

       })
       .catch((response) => {

         
       });
   },


  }, // FIN METHODS
};
</script>

<style scoped>
#app {
  width: 60%;
}
input{
  max-width: max-content;
}
label{
  width: 200px;
  text-align: start;
}
.bloc-page {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0;
}
.articlePost {
  width: 60%;
  border-radius: 10px;
  background-color: rgb(253, 224, 181);
  height: auto;

  box-shadow: 2px 5px 15px rgba(24, 28, 33, 0.2);
}
#formPost {
  width: 90%;
  margin: 100px auto;
  border: 2 px solid black;
  border-radius: 5px;
  background-color: bisque;
  
}
.form-group{
  
  display: flex;
}
/* .text-start{
width: 20%;
} */

.card-component{
  width: 100%;
}
</style>