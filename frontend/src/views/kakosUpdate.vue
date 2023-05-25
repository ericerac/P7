<template>
  <div class="container-fluid background">

    <div class="row g-0">
      <span class="form-title" v-if="pageData[0].name" :class="darkTheme ? 'txtDark' : 'txtDay'">
        Vous êtes sur la page: <strong>{{ pageData[0].name }}.{{ pageData[0].lang }}</strong></span>
      <div class="slider">

        <h1>Images </h1>
        <!-- <button @click="addImg" >Add Image</button> -->
        <button @click="addKakosC = true">Add Image</button>

        <div class="img_card" v-if="addKakosC">
          <template v-if="preview && addKakosC">
            <!-- <p class="mb-0 img_preview">file name: {{ fileName }}</p> -->
            <img :src="preview" class="img_diapo" />

          </template>
          <!-- <img v-else class="img_diapo" :src="img.imageUrl" alt=""> -->
          <!-- <p> image{{ index + 1 }} </p> -->

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
            <span class="fileName" v-if="fileName && addKakosC">{{ fileName }}</span>
          </label>


          <div class="btn_action">
            <div class="btn_update">

              <label for="submit"></label>
              <input type="button" name="submit" class="btn btn_up btn_all" keyUp="enter" value="Create"
                @click="createImg()">
            </div>
            <div class="btn_update">
              <label for="retour"></label>
              <input type="button" name="retour" class="btn btn_del btn_all" keyUp="enter" value="Cancel File"
                @click="cancelFileSelected()">
            </div>
            <div class="btn_update">
              <label for="retour"></label>
              <input type="button" name="retour" class="btn btn_del btn_all" keyUp="enter" value="Close"
                @click="cancelFileSelected(), addKakosC = false">
              <!-- @click="$emit('close',false)"> -->
            </div>
          </div>
        </div>

        <p class="info_slider">Valider la mise à jour à chaque changement d'image,<br> Cambia l'imatge per les 3 idiomes a
          l'hora. </p>
        <div class="bloc_img_slider">
          <div class="loop" v-for="(img, index) in imgData" :key="`item-${index}`">

            <div class="img_slider_card">
              <template v-if="preview && index === inputSelected && addKakosC == false">
                <!-- <p class="mb-0 img_preview">file name: {{ image.name }}</p> -->
                <img :src="preview" class="img_diapo" />

              </template>
              <img v-else class="img_diapo" :src="img.imageUrl" alt="">
              <p> image{{ index + 1 }} </p>

              <label for="image" class="btn_upload">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                    <path
                      d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
                    </path>
                  </svg>
                </figure>
                <input class="btn_upload_file" type="file" name="image" id="image" ref="file" @click="letInput"
                  @change="FileUpload" accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" />
                <span class="fileName" v-if="fileName && index === inputSelected && addKakosC == false">{{ fileName
                }}</span>
              </label>


              <!-- <BtnUpDelCan @updateImg="updateImg(img._id)" @cancelFileSelected="cancelFileSelected()" @delImg="delImg(img._id)"/>
              -->
              <div class="btn_action">


                <button class="btn btn_up btn_all" @click="updateImg(img._id)">Update</button>
                <button class="btn btn_cancel btn_all" @click="cancelFileSelected()">Cancel</button>
                <button class="btn btn_del btn_all" @click="delImg(img._id)">Delete</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="bloc_loop col-12">

        <div class="header col-12">
          <!-- <img class="header_img col-12" :src="i.imageUrl" alt=""> -->
          <div class="header_title">
            <h2 :class="darkTheme ? 'txtDark' : 'txtDay'"> {{ pageData[0].title_1 }}</h2>
            <label for="title_1">Titre:
              <input type="text" class="title_1" placeholder="pageData.title_1" v-model="pageData[0].title_1">
            </label>

          </div>

          <!-- ************************************* -->

          <!-- ************************************* -->
        </div>
        <div class="bloc_thumb ">
          <div class="bloc_video">
            <div class="video">

              <iframe :src="pageData[0].linkVideo" width="620" height="460" frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
              </iframe>
              <p class="linkVideo" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].linkVideo }}
              </p>
              <label for="linkVideo" class="link_video">
                <input type="text" name="linkVideo" v-model="pageData[0].linkVideo" />
              </label>
            </div>

          </div>
          <div class=" bloc_info col-12">
            <div class="bloc_sinopsis">
              <h6 class="title_info_sinopsis col-2" :class="darkTheme ? 'txtDark' : 'txtDay'"><strong>Sinopsis</strong>
              </h6>
              <textarea name="synopsis_1" id="synopsis_1" cols="30" rows="10" v-model="pageData[0].synopsis_1"
                placeholder="pageData[0].synopsis_1">  </textarea>


            </div>
            <div class="title_fiche">
              <h6 class="title_info " :class="darkTheme ? 'txtDark' : 'txtDay'"><strong> Titre: {{ pageData[0].p_1
              }}</strong> </h6>
            </div>
            <div class="bloc_fiche_art">

              <label for="title" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_1 }}
                <input type="text" name="title" v-model="pageData[0].p_1" placeholder="pageData[0].p_1">
              </label>
              <label for="title" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_2 }}
                <input type="text" name="title" v-model="pageData[0].p_2" placeholder="pageData[0].p_2">
              </label>
              <label for="title" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_3 }}
                <input type="text" name="title" v-model="pageData[0].p_3" placeholder="pageData[0].p_3">
              </label>
              <label for="title" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_4 }}
                <input type="text" name="title" v-model="pageData[0].p_4" placeholder="pageData[0].p_4">
              </label>
              <label for="title" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_5 }}
                <input type="text" name="title" v-model="pageData[0].p_5" placeholder="pageData[0].p_5">
              </label>
              <label for="title" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_6 }}
                <input type="text" name="title" v-model="pageData[0].p_6" placeholder="pageData[0].p_6">
              </label>
            </div>
          </div>
        </div>
        <div class="btn_up_">
          <button class="btn btn_up btn_all" @click="updateKakos(pageData[0]._id)">Update</button>
        </div>
      </div>


    </div>
    <!-- <div class="AddKakosComponent" v-if="addKakosC ">
<ImgKakos :preview="preview" @close="addKakosC = $event" @fileUpload="FileUpload($event)"/>
</div> -->
  </div>
</template>

<script>

import { mapGetters, mapState } from "vuex";
import { ref } from "vue";
import FileUpload from "../js/fileUpload";
import Compressor from 'compressorjs';

import ImgKakos from '../components/ImgKakos.vue';
import BtnUpDelCan from '../components/btnUpDelCan.vue';

export default {
  name: "kakos",

  data() {
    return {
      fileName: "",
      preview: null,
      fileSelected: "",
      inputSelected: ref(""),
      addKakosC: ref(false),
      inputFile: ref(""),
      tabInput: [],
    }
  },

  computed: {
    ...mapState({
      darkTheme: "darkTheme",
      pageData: "pageData",
      imgData: "imgData"

    }),
  },
  components: {
    ImgKakos,
    BtnUpDelCan
  },
  methods: {


    async FileUpload(event) {
      let that = this;
      let inp = document.querySelectorAll('input[type=file]');

      let File = event.target.files[0];
      this.fileName = File.name

      let tabInput = []

      let iR = inp.forEach((input, index) => {
        let files = input.files[0];

        tabInput.push(files)

        if (files == File) {
          this.inputFile = files.name;
          this.inputSelected = index;
        }
      });

      if (event.target.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }

      // ************ DONE **********************************

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

    cancelFileSelected(event) {
      this.fileSelected = "";
      this.fileName = "";
      this.preview = "";
      this.tabInput = [];
      console.log("CANCEL FILE IMAGE SELECTED", this.fileSelected, this.fileName);
    },

    updateKakos(p) {
     
      let bodyFormData = new FormData();

      let videoNew = this.pageData[0].linkVideo;
      if (videoNew.include("embed")) {
        console.log("EMBED VIDEO");
      } else if (videoNew.include("watch")) {
        console.log("WATCH VIDEO");
      }

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
        bodyFormData.append("linkVideo", this.pageData[0].linkVideo);
        bodyFormData.append("p_2", this.pageData[0].p_2);
        bodyFormData.append("p_3", this.pageData[0].p_3);
        bodyFormData.append("p_4", this.pageData[0].p_4);
        bodyFormData.append("p_5", this.pageData[0].p_5);
        bodyFormData.append("p_p", this.pageData[0].p_6);


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
        bodyFormData.append("phrase", this.pageData[0].phrase);
        bodyFormData.append("linkVideo", this.pageData[0].linkVideo);
        bodyFormData.append("p_2", this.pageData[0].p_2);
        bodyFormData.append("p_3", this.pageData[0].p_3);
        bodyFormData.append("p_4", this.pageData[0].p_4);
        bodyFormData.append("p_5", this.pageData[0].p_5);
        bodyFormData.append("p_6", this.pageData[0].p_6);



      }

      this.$store
        .dispatch("updatePage", {
          data: bodyFormData,

          page: "kakos"
        })

        .then((response) => {
          // if (response.status == 200) {
          console.log("RESPONSE BioUPDATE IMG");
          //     location.reload();
          file = null;
          cancelFileSelected()
        })
        .catch((response) => {

        });
    },

    // *****************  UPDATE IMAGE KAKOS  ******************
    updateImg(p) {
      console.log("ID IMG", p);

      const stringi = JSON.stringify(this.imgData);
      // console.log("STRINGiFY ---->", stringi );
      const parsi = JSON.parse(stringi);
      // console.log("PARSI ---->", parsi );

      const imgUp = parsi.filter((i) => i._id == p);

      console.log("imgUp ----->", imgUp);
      let file = this.fileSelected;
      let bodyFormData = new FormData();


      if (this.fileSelected) {


        bodyFormData.append("image", this.fileSelected, this.fileSelected.name);
        bodyFormData.append("id", imgUp[0]._id);
        bodyFormData.append("name", imgUp[0].name);
        bodyFormData.append("showName", imgUp[0].showName);
        bodyFormData.append("img", imgUp[0].img);
        bodyFormData.append("page", imgUp[0].page);
        bodyFormData.append("link", imgUp[0].link);



      } else {
        bodyFormData.append("id", imgUp[0]._id);
        bodyFormData.append("name", imgUp[0].name);
        bodyFormData.append("showName", imgUp[0].showName);
        bodyFormData.append("img", imgUp[0].img);
        bodyFormData.append("page", imgUp[0].page);
        bodyFormData.append("link", imgUp[0].link);

      }

      this.$store
        .dispatch("updatePage", {
          data: bodyFormData,
          // page: `${process.env.VUE_APP_PAGE1_NAME}`
          page: "img"
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

    createImg() {
      let bodyFormData = new FormData();
      let imgNumber = this.imgData.length + 1;
      if (this.fileSelected) {
        bodyFormData.append("image", this.fileSelected, this.fileSelected.name);
        bodyFormData.append("img", imgNumber);
        bodyFormData.append("page", "kakos");
      } else {
        window.alert("Selectionne une image, non ?")
        return
      }
      this.$store
        .dispatch(
          "createImg",
          bodyFormData,
        )
        .then((response) => {
          if (response) {
            console.log("RETURM RESPONSE ", response);

            this.addKakosC = false

          }

        })
        .catch((response) => {


        });
    },

    delImg(x) {
      let del = window.confirm("Quel dommage ! Supprimer ? sur? ");
      if (!del) {
        return
      }

      this.$store
        .dispatch("delCard", {
          idCard: x,
          page: "img",
        })

        .then((response) => {
          if (response.status == 200) {

            file = null;

          }

        })
        .catch((response) => {


        });
    }

  },
}
</script>

<style scoped>
@import url("../styles/btn.css");
@import url("../styles/theme.css");

.AddKakosComponent {

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.img_card {
  margin: 0 auto;
  width: 350px;
  height: auto;
  border: 1px solid blue;
  background-color: rgb(253, 165, 59);
}

.btn_up_ {
  display: flex;
  justify-content: center;
}

.container-fluid {
  width: 100%;
  height: auto;
  padding: 0
}

.form-title {
  margin: 20px auto;
  font-size: 20px;
}

.row {
  padding-bottom: 50px;
}

.loop {
  width: 100%;
  height: auto;
  margin: 20px auto;
  border: 1px solid red;
}

.img_diapo {
  width: 90%;
  max-height: 250px;
  object-fit: contain;
}

.slider {
  width: 100%;
  padding-bottom: 10px;
  background-color: #f0f0f0;
  border: 2px dashed blue;
}

.info_slider {
  color: red;
}

.img_slider_card {
  background-color: rgba(251, 224, 149, .7);
  overflow: hidden;
}

.header_title {
  display: flex;
  flex-direction: column;

}

iframe{
  width:100%;
  height:250px;
}
.video{
  width:100%;
  height:auto;
}
.bloc_loop {
  border: 2px dashed black;
  margin-top: 20px
}

.bloc_sinopsis {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 30px auto;


}

.bloc_fiche_art {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  text-align: left;

}

input {
  border: none;
  margin: 5px;
  box-shadow: 1px 1px 2px 1px;
  border: 1px solid red;
  width: max-content;
  padding: 5px;
}

/* input[type=file] {
  opacity: 0;
}

.btn_upload {
  position: relative;
  border: 1px solid black;
  width: 60%;
  border-radius: 10px;
  background-color: bisque;
  box-shadow: 3px 3px 3px grey;
  overflow: hidden;
}

.btn_upload:active {
  box-shadow: inset 3px 3px 3px grey;
}

.bloc_fiche_art>input {}

label {
 
  width: 100%;
  text-align: center;

}

.fileName {

  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  width: 95%;
  transform: translate(-50%, -30%);
  font-size: 14px;
}

.btn_action {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 80px;
  align-items: center;

} */


/* .btn_update {
  display: flex;
  align-items: center;

} */

@media screen and (min-width:768px) and (max-height:500px) {
  .bloc_img_slider {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px
  }

  .loop {
    width: 45%
  }
}

@media screen and (min-width:768px) and (min-height:500px) {
  .loop {
    width: 45%
  }
}

@media screen and (min-width:1024px) {

  .bloc_img_slider {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .loop {
    display: flex;
    flex-direction: row;
    width: 250px;
    border: 1px solid black;
  }

  .img_slider_card {
    display: flex;
    flex-direction: column;

  }

  .img_diapo {

    width: 100%;
    height: 250px;
    object-fit: contain;
  }

  .header {
    margin-top: 30px
  }
}
</style>