<template>
  <div class="container text-center">
    <div class="row col-12 col-xl-6">
      <span class="form-title">
        Vous êtes sur la page: <strong>{{ pageData[0].name }}.{{ pageData[0].lang }}</strong></span>
      <div class="bloc_page col-12">
        <div class="title mb-3">
          <h1 :class="{bgDark : darkTheme}">{{ pageData[0].title_1 }} </h1>
          <label for="Titre"> Titre
            <input type="text" class="inputVideo" name="Titre" v-model="pageData[0].title_1">
          </label>
        </div>
        <div class="line"></div>

        <div class="img_left col-lg-12 col-xl-12">
          <template v-if="preview && 0 === inputSelected">

            <img :src="preview" class="img_principale" />

          </template>
          <img v-else class="img_principale col-lg-12" :src="pageData[0].imageUrl" alt="">
        </div>
        <label for="image" class="btn_upload">
          <figure>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
              <path
                d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
              </path>
            </svg>
          </figure>
          <input class="btn_upload_file" type="file" name="image" id="image" ref="file" @change="FileUpload"
            accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" />
          <p class="fileName" v-if="fileName && 0 === inputSelected">{{ fileName }}</p>
        </label>
        <div class="btn_update">
          <label for="retour"></label>
          <input type="button" name="retour" class="btn btn_del btn_all" keyUp="enter" value="Cancel" @click="FileCancel">
        </div>

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
          <div class="btn_action">
            <div class="btn_update">

              <label for="submit"></label>
              <input type="button" name="submit" class="btn btn_up btn_all" keyUp="enter" value="Update"
                @click="updatePage(pageData[0]._id)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Compressor from 'compressorjs';

export default {
  name: "ad1920384756ytrdehd",
  data: function () {
    return {
      fileName: "",
      fileSelected: "",
      preview: "",
    }
  },
  computed: {
    ...mapState({
      pageData: "pageData",
      imgData: "imgData",
    }),
  },
  methods: {
    async FileUpload(event) {
      let that = this
      let inp = document.querySelectorAll('input[type=file]');

      // let inp1 = document.querySelector('input[type=file]').files[0];

      let iR = inp.forEach((input, index) => {
        let files = input.files[0];

        if (files) {
          this.inputSelected = index;
          console.log(" INPUT SELECTED", index);
        }

      });

      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }


      // ************ DONE **********************************

      let File = event.target.files[0];
      this.fileName = File.name
      new Compressor(File, {
        quality: 0.6,
        success(result) {
          console.log("SUCCESS COMPRESSOR", result);
          that.fileSelected = result
        },
        error(err) {
          console.log(err.message);
        },
      });

    },


    FileCancel(event) {

      this.fileSelected = "";
      this.fileName = "";
      this.preview = "";
      console.log("FILECANCEL");
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

.line {
  width: 200px;
  border: 2px solid red;
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

button {
  margin: 2rem;
}

@media screen and (max-width:576px) {
  .img_principale {
    width: 80%;
  }

  .container {
    padding: 0;
  }
}
</style>