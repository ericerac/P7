<template>
  <h1>Bien le bonjour doc ! Home</h1>
  <div class="container-fluid text-center">
    <div class="col-lg-8 col-xl-8 bloc-page">
      <!-- //----------------------- EDITION PAGE-------------------------// -->
      <div class="col-lg-12 col-xl-12 articlePost bg-white mb-3 pb-2 pt-1">
        <form class="updateProfil-form">
          <div class="fond-form">
            <span class="form-title">
              Vous êtes sur la page {{ pData.name }}</span
            >
            <div class="form-group"></div>
            <div class="form-group">
              <label>Nom de la page </label>
              <input
                v-model="pData.name"
                type="text"
                name="nom"
                class="form-control"
                placeholder="pageData.name"
              />
            </div>
            <div class="form-group">
              <label>Titre 1</label>
              <input
                v-model="pData.title_1"
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
                v-model="pData.subTitle_1"
                class="form-control"
                placeholder="pageData.name"
              />
            </div>
            <label>paragraphe 1</label>
            <textarea
              v-model="pData.p_1"
              class="mt-3 form-control"
              col="6"
              rows="2"
              type="text"
              size="6"
              placeholder="pageData.p_1"
              maxlength="1000"
            ></textarea>

            <div class="form-group">
              <label>image 1{{pData.imageUrl}}</label>
              <img
                class=""
                :src= "pData.imageUrl"
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

            <!-- <div class="form-group">
            <label class="btn-action" for="submit"></label>
            <input type="button" name="submit" class="btn btn-primary mt-1 btn-lg btn-block" keyUp="enter"
              value="Modifier" @click="updateUser(userId)">
            <label class="btn-action" for="retour"></label>
            <input type="button" name="retour" class="btn btn-primary mt-1 btn-lg btn-block" keyUp="enter"
              value="Annuler" @click="goToProfil">
          </div> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000/",
});



const def = () => console.log("HOME : VUE");
def();

let pageData = {};

export default {
  name: "ad1920384756ytrdehdk",

  data: function () {
    return {
      mode: "login",
      content: "",

      pData: [],
    };
  },

  mounted: function () {
    console.log(" MOUNTED HOME ");

    const getPageData = () => {
      console.log("getPageData____");
      const n = "INICIO 1";
  const tech = this;
      instance
        .get(`inici?name=INICIO 1`)
        .then(function (res) {
          console.table("RESPONSE GET STORE", res.data);
          console.table("RES DATA NAME ----->", res.data.name);
          tech.pData = res.data;
        })
        .catch(function (err) {
          console.log("ERREUR GET STORE", err);
        });
      
    };
    getPageData();
  },

  components: {
    // ModalMessage,
  },
  watch: {},

  computed: {
    ...mapState({
      modal: "modal",
      modalMessage: "modalMessage",
      // pageData: "pageData",
    }),
  },

  methods: {
    FileUpload(event) {
      this.fileSelected = event.target.files[0];
    },
  },
};
</script>

<style scoped>
#app {
  width: 60%;
}
.bloc-page {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
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
</style>