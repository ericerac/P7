<template>
  <div class="container-fluid text-center">
    <div class=" row col-12 col-lg-10 col-xl-10 bloc-page">

      <!-- //----------------------- EDITION HEADER------------------------// -->

      <!-- <div class="col-lg-12 col-xl-12 card-component bg-white mb-3 pb-2 pt-1"> -->

      <form class="update-form col-12">
        <span class="form-title">
          Vous êtes sur la page: <strong>{{ pageData[0].name }}.{{ pageData[0].lang }}</strong></span>
        <div class="fond-form header_bloc col-12">
          <div class="bloc_info col-12 col-md-6">


            <div class="form-group">
              <label>Titre 1</label>
              <input v-model="pageData[0].title_1" type="text" name="prenom" class="form-control"
                placeholder="pageData.title_1" required />
            </div>
            <div class="form-group">
              <label>Sous-titre 1</label>
              <input v-model="pageData[0].subTitle_1" class="form-control" placeholder="pageData.name" />
            </div>
            <div class="form-group">
              <label>Phrase du jour</label>
              <input v-model="pageData[0].phrase" class="form-control" placeholder="phrase" />
            </div>
          </div>

          <div class="form-group_foto">
            <template v-if="preview && 0 === inputSelected">

              <img :src="preview" class="" width="200" height="160" />

            </template>
            <!-- <label>image 1</label> -->
            <img v-else class="" :src="pageData[0].imageUrl" alt="image" width="200" height="160" />
            <!-- <div class=" group_btn_img"> -->


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
              <!-- <span class>{{ fileName }}</span> -->
            </label>
            <!-- </div> -->
          </div>

          <div class="btn-action homeBtn">

            <label class="home" for="submit">
              <input type="button" name="submit" class="btn btn_up btn_all" keyUp="enter" value="Update"
                @click="updatePage()">
            </label>
            <label class="home" for="retour">
              <input type="button" name="retour" class="btn btn_cancel btn_all" keyUp="enter" value="Cancel"
                @click="FileCancel">
            </label>
          </div>
        </div>

      </form>

      <!-- //----------------------- END EDITION HEADER------------------------// -->
      <!-- //-----------------------                    ------------------------// -->
      <!-- //----------------------- START EDITION SHOW------------------------// -->

      <div class=" row col-12 show_bloc gx-1">
        <div class="bloc_loop col-lg-4 col-xl-3  col-xxl-4 " v-for=" (i, index) in imgData" :key="i._id">
          <div class="show_info">
            <span>bloc Show nº {{ indexCard(index) }}</span>
            <div class="bloc_info col-12">

              <div class="input_label">
                <label for="showName">Show Name</label>
                <input type="text" name="showName" placeholder="i.showName" v-model="i.showName">
              </div>


              <div class="show_img">

                <div class="bloc_img">
                  <!-- <button class="btn_delete_img">Éffacer </button> -->
                  <template v-if="preview && indexCard(index) === inputSelected">

                    <img :src="preview" class="" width="200" height="160" />

                  </template>
                  <img v-else class="" :src="i.imageUrl" alt="image" width="200" height="160" />
                </div>

                <div class=" show_img">


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
                    <p class="fileName" v-if="fileName && index === inputSelected - 1">{{ fileName }}</p>
                  </label>
                  <!-- <span v-if="i._id ">{{ OnefileSelected }}</span> -->
                </div>
              </div>
            </div>
          </div>
          <div class="btn-action ">

            <label class="" for="submit">
              <input type="button" name="submit" class="btn btn_up btn_all" keyUp="enter" value="Update"
                @click="updateImg(i._id)">
            </label>
            <label class="" for="retour">
              <input type="button" name="retour" class="btn btn_cancel btn_all" keyUp="enter" value="Cancel"
                @click="FileCancel">
            </label>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { ref } from "vue";
import Compressor from 'compressorjs';
import CompressFile from '../js/compressImg.js';

const def = () => console.log("HOME : VUE");
def();



export default {
  name: "Home",

  data: function () {
    return {
      mode: "login",
      content: "",
      OnefileSelected: "",
      fileName: "",
      fileSelected: "",
      newFile: "",
      inputSelected: ref(""),
      preview: ref(""),

    };
  },

  computed: {
    ...mapState({
      modal: "modal",
      modalMessage: "modalMessage",
      pageData: "pageData",
      imgData: "imgData"

    }),
  },

  methods: {
    inputSelectedChange() {
      console.log("INPUT CAHNGE");
      this.inputSelected = "";
    },

    FileUpload(event) {
      let that = this;
      this.inputSelected = "";
      console.log("INPUT DESELECTED-->", this.inputSelected);
      let inp = document.querySelectorAll('input[type=file]');

      let File = event.target.files[0];
      this.fileName = File.name
      // let inp1 = document.querySelector('input[type=file]').files[0];

      let tabInput=[]

      let iR = inp.forEach((input, index) => {
        let files = input.files[0];

         tabInput.push(files)

        if (files == File) {

          this.inputFile = files.name;

          // console.log("INPUT SELECTED", index, files);

          this.inputSelected = index;
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
      this.inputSelected = "",
        console.log("FILECANCEL");
    },

    indexCard(x) {
      return x += 1
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

        bodyFormData.append("phrase", this.pageData[0].phrase);


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

        bodyFormData.append("phrase", this.pageData[0].phrase);

      }

      this.$store
        .dispatch("updatePage", {
          data: bodyFormData,
          // page: `${process.env.VUE_APP_PAGE1_NAME}`
          page: "portada"
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

    // *****************  UPDATE IMAGE PORTADA  ******************
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


  }, // FIN METHODS
};
</script>

<style scoped>
@import url("../styles/btn.css");

#app {
  width: 60%;
}

input {
  max-width: max-content;
}

/* START HEADER */
.header_bloc {
  /* border: 2px solid black; */
  display: flex;
  flex-direction: row;
  padding: 2rem;
  background-color: rgb(246, 140, 11, .5);
  border-radius: 10px;
  box-shadow: 3px 3px 10px;
}

label {
  width: 200px;

}
.homeBtn{
  display: flex;
  flex-direction: column;
}
.home{
  width:100px
}
.bloc-page {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0;
  /* border: 2px solid blue; */
}

.form-group {
  padding: 1rem;
  display: flex;
}

.btn_action {
  display: flex;
  flex-direction: row;
  justify-content: space-between;


}

/* .btn_delete_img {
  width: 15%;
  height: 30px;
} */

.group_btn_img {
  display: flex;
  flex-direction: row;
  align-items: center;
}

/* .text-start{
width: 20%;
} */

.card-component {
  width: 100%;
  border: 2px solid red;
}

/* END HEADER */
.show_info {}

.show_bloc {
  margin: 1rem auto;
  /* border: 2px solid green; */
  padding: 0rem;
  border-radius: 10px;
  background-color: rgba(250, 148, 31, .6);

}

.bloc_loop {

  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  border: 1px solid rgb(38, 61, 242);
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(252, 143, 35, 0.6);
  box-shadow: 3px 3px 10px;
}

.bloc_info {
  display: flex;
  flex-direction: column;

}

.show_img {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.form-group_foto {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.bloc_img {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
}

.input_label {
  display: flex;
  flex-direction: column;

}






/* .btn_upload {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid blue;
  border-radius: 5px;

  overflow: hidden;
 

} */

/* .btn_upload input {
  background-color: rgba(251, 167, 48, 0.3);
} */



/* .btn_upload:hover {
  border: 1px solid rgb(255, 164, 164);
  background-color: #fff;
  transition: 200ms;
} */







/* .btn-show {
  position: relative;
  top: 40%;
  transform: translateY(-30%);
  border-radius: 10px;
  padding: 5px 10px;
  min-width: 80px;
} */

@media screen and (max-width:576px) {

  .update-form,
  .container-fluid,
  .header_bloc {
    padding: 0;
  }

  .header_bloc {
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    width: 90%;
    display: block;
    margin: 0 auto;
  }

  .form-control {
    margin: 0 auto;
  }

  .show_bloc {
    background-color: transparent
  }

  /* .btn_upload {
    overflow: visible;
    border: none;
  } */
  .homeBtn{
  display: flex;
  flex-direction: row;
}
  .input_label {
    flex-direction: row;
  }
}
</style>