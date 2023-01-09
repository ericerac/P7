<template>

  <div class="container text-center">
    <div class="row col-12 col-xl-6">
      <span class="form-title">
            Vous êtes sur la page: <strong>{{ pageData[0].name }}.{{ pageData[0].lang }}</strong></span>
      <div class="bloc_page col-12">
        <div class="title mb-3">
          <h1>{{ pageData[0].title_1 }} </h1>
          <label for="Titre"> Titre
            <input type="text" class="inputVideo" name="Titre" v-model="pageData[0].title_1">
          </label>
        </div>
        <div class="line"></div>

        <div class="img_left col-lg-12 col-xl-12">
          <img class="img_principale col-lg-12" :src="pageData[0].imageUrl" alt="">
        </div>
        <label for="image" class="btn_upload">
                    <input type="file" name="image" id="image" ref="file" @change="FileUpload"
                      accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" hidden/>Choisir une image </label>
                      <span >{{fileName}}</span>

        <div class="bloc_text col-12 col-lg-12 col-xl-12 text-center">

          <div class="line"></div>
          <div class="sous_titre ">
            
            <h4 class="fw-light "><i>{{ pageData[0].subTitle_1 }}</i> </h4>
            <label for="sousTitre"> Sous Titre
              <input type="text" class="inputVideo" name="sousTitre" v-model="pageData[0].subTitle_1">
            </label>
          </div>
          <div class="line"></div>
          <div class="synopsis col-10 ">
            <label for="synopsis" class="label_area">Synopsis </label>
            <textarea class="synopsisArea col-12" name="synopsis" id="" cols="30" rows="5"
              v-model="pageData[0].synopsis"></textarea>
            <label for="synopsis_1" class="label_area">Synopsis 1</label>
            <textarea class="synopsisArea col-12" name="synopsis_1" id="" cols="30" rows="5"
              v-model="pageData[0].synopsis_1"></textarea>
            <label for="synopsis_2" class="label_area">Synopsis 2</label>
            <textarea class="synopsisArea col-12" name="synopsis_2" id="" cols="30" rows="5"
              v-model="pageData[0].synopsis_2"></textarea>

            <!--           
              <p> {{pageData[0].synopsis_1}} {{pageData[0].synopsis_2}}</p>
              <p> {{pageData[0].synopsis}} </p> -->
          </div>
          <div class="line"></div>
          <div class="video col-12">
            <label for="videoLink">Lien Video
              <input type="text" class="inputVideo" name="videoLink" v-model="pageData[0].linkVideo">
            </label>

            <!-- <div class="bloc_reverse">
              <div class="line"></div>
              <div class="fiches col-12">
                <div class="fiche_art col-12 col-md-8 col-lg-7 col-xl-6 text-center">
                  <h6><strong>- Fiche artistique -</strong></h6>
                  <ul>
                    <li>Creation et interprétation: Marta Renyer</li>
                    <li>Direction: Christophe Thellier</li>
                    <li>Accompagnement choréographique: Janna Grulichova i Muriel Deville</li>
                    <li>Scénographie et accessoires: Eric Rieu</li>
                    <li>Costume: Marta Renyer</li>
                    <li>Production: Marta Renyer i Cia. Toc Toc Théâtre</li>
                    <li>Suport: Centre Cívic Sarrià</li>
                    <li>Première 2018</li>
                  </ul>>
                </div>

                <div class="fiche_basic col-md-4 col-lg-5 col-xl-6 text-center">
                  <h6><strong>- Info basique -</strong></h6>
                  <ul>
                    <li>Número gala</li>
                    <li>Clown gestuel</li>
                    <li>Sans text</li>
                    <li>7 mn</li>
                    <li>Tout public</li>
                  </ul>
                </div>
              </div>
              
            </div> -->

          </div> 
          <div class="btn-action">
            
            <button @click="updatePage()">Update</button>
            <button @click="delCard()">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ad1920384756ytrdehd",
  data: function (){
return{
  fileName:"",
  fileSelected:"",
}
  },
  computed: {
    ...mapState({
      pageData: "pageData",
      imgData: "imgData",
    }),
  },
  methods:{
    FileUpload(event) {
      this.fileSelected = event.target.files[0];
      this.fileName = this.fileSelected.name
    },

    updatePage(p) {
      let file = this.fileSelected;
      let bodyFormData = new FormData();


      if (this.fileSelected) {


        bodyFormData.append("image", this.fileSelected, this.fileSelected.name);
        bodyFormData.append("id", this.pageData[0]._id);
        bodyFormData.append("name", this.pageData[0].name);
        bodyFormData.append("title_1", this.pageData[0].title_1);
        bodyFormData.append("subTitle_1", this.pageData[0].subTitle_1);
        bodyFormData.append("color_subTitle_1", this.pageData[0].color_subTitle_1);
        bodyFormData.append("color_title_1", this.pageData[0].color_title_1);
        bodyFormData.append("title_2", this.pageData[0].title_2);
        bodyFormData.append("color_title_2", this.pageData[0].color_title_2);
        bodyFormData.append("subTitle_2", this.pageData[0].subTitle_2);
        bodyFormData.append("color_subTitle_2", this.pageData[0].color_subTitle_2);
        bodyFormData.append("synopsis_1", this.pageData[0].synopsis_1);
        bodyFormData.append("synopsis_2", this.pageData[0].synopsis_2);
        bodyFormData.append("phrase", this.pageData[0].phrase);
        bodyFormData.append("p_2", this.pageData[0].p_2);
        bodyFormData.append("p_3", this.pageData[0].p_3);
        bodyFormData.append("p_4", this.pageData[0].p_4);
        bodyFormData.append("p_5", this.pageData[0].p_5);
        

      } else {
        bodyFormData.append("id", this.pageData[0]._id);
        bodyFormData.append("name", this.pageData[0].name);
        bodyFormData.append("title_1", this.pageData[0].title_1);
        bodyFormData.append("subTitle_1", this.pageData[0].subTitle_1);
        bodyFormData.append("color_subTitle_1", this.pageData[0].color_subTitle_1);
        bodyFormData.append("color_title_1", this.pageData[0].color_title_1);
        bodyFormData.append("title_2", this.pageData[0].title_2);
        bodyFormData.append("color_title_2", this.pageData[0].color_title_2);
        bodyFormData.append("subTitle_2", this.pageData[0].subTitle_2);
        bodyFormData.append("color_subTitle_2", this.pageData[0].color_subTitle_2);
        bodyFormData.append("synopsis_1", this.pageData[0].synopsis_1);
        bodyFormData.append("synopsis_2", this.pageData[0].synopsis_2);
        bodyFormData.append("p_2", this.pageData[0].p_2);
        bodyFormData.append("p_3", this.pageData[0].p_3);
        bodyFormData.append("p_4", this.pageData[0].p_4);
        bodyFormData.append("p_5", this.pageData[0].p_5);
        
        bodyFormData.append("phrase", this.pageData[0].phrase);

      }

      this.$store
        .dispatch("updatePage", {
          data: bodyFormData,
          // page: `${process.env.VUE_APP_PAGE1_NAME}`
          page: "bernadette"
        })

        .then((response) => {
          if (response.status == 200) {
            // console.log("RESPONSE CALUPDATE 2", response);
           //     location.reload();
          file = null;
          

          }
        })
        .catch((response) => {


        });
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');

.bloc {
  width: 500px;
  height: 500px;
  border: 2px solid black
}
.line{
width:200px;
border:2px solid red;
margin: 2rem auto;
}

.row {
  margin: 0 auto;
  text-align: center;
}

.bloc_text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  margin: 0 auto;
}

.title {
  margin: 2ren auto
}
button{
  margin:2rem ;
}
@media screen and (max-width:576px) {
.img_principale{
  width: 80%;
}
.container{
  padding: 0;
}
}
</style>