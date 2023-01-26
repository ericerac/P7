<template>
  <div class="container background">

    <div class="row g-0">
      <span class="form-title" v-if="pageData[0].name">
        Vous êtes sur la page: <strong>{{ pageData[0].name }}.{{ pageData[0].lang }}</strong></span>
      <div class="slider">


        <h1>Images Slider</h1>
        <p class="info_slider">Valider la mise à jour à chaque changement d'image du slider</p>
        <div class="bloc_img_slider">
          <div class="loop" v-for="(img, index) in imgData" :key="`item-${index}`">

            <div class="img_slider_card">

              <img class="img_diapo" :src="img.imageUrl" alt="">
              <p> image{{ index + 1 }}</p>

              <label for="image" class="btn_upload">
                <input class="btn_upload_file" type="file" name="image" id="image" ref="file" @change="FileUpload"
                  accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" />
              </label>

              <div class="btn_action">
                <div class="btn_update">

                  <label for="submit"></label>
                  <input type="button" name="submit" class="btn-show btn-primary  butt " keyUp="enter" value="Update"
                    @click="updateImg(i._id)">
                </div>
                <div class="btn_update">
                  <label for="retour"></label>
                  <input type="button" name="retour" class="btn-show btn-danger butt  " keyUp="enter" value="Cancel"
                    @click="cancelFileSelected()">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bloc_loop col-12">




        <div class="header col-12">
          <!-- <img class="header_img col-12" :src="i.imageUrl" alt=""> -->
          <div class="header_title">
            <h2> {{ pageData[0].title_1 }}</h2>
            <label for="title_1">Titre:
              <input type="text" class="title_1" placeholder="pageData.title_1" v-model="pageData[0].title_1">
            </label>

          </div>

        </div>
        <div class="bloc_thumb ">
          <div class=" bloc_info col-12">
            <div class="bloc_sinopsis">
              <h6 class="title_info_sinopsis col-2"><strong>Sinopsis</strong>
              </h6>
              <textarea name="synopsis_1" id="synopsis_1" cols="30" rows="10" v-model="pageData[0].synopsis_1"
                placeholder="pageData[0].synopsis_1">  </textarea>


            </div>
            <div class="title_fiche">
              <h6 class="title_info "><strong> Titre: {{ pageData[0].p_1 }}</strong> </h6>
            </div>
            <div class="bloc_fiche_art">

              <label for="title">{{ pageData[0].p_1 }}
                <input type="text" name="title" v-model="pageData[0].p_1" placeholder="pageData[0].p_1">
              </label>
              <label for="title">{{ pageData[0].p_2 }}
                <input type="text" name="title" v-model="pageData[0].p_2" placeholder="pageData[0].p_2">
              </label>
              <label for="title">{{ pageData[0].p_3 }}
                <input type="text" name="title" v-model="pageData[0].p_3" placeholder="pageData[0].p_3">
              </label>
              <label for="title">{{ pageData[0].p_4 }}
                <input type="text" name="title" v-model="pageData[0].p_4" placeholder="pageData[0].p_4">
              </label>
              <label for="title">{{ pageData[0].p_5 }}
                <input type="text" name="title" v-model="pageData[0].p_5" placeholder="pageData[0].p_5">
              </label>
              <label for="title">{{ pageData[0].p_6 }}
                <input type="text" name="title" v-model="pageData[0].p_6" placeholder="pageData[0].p_6">
              </label>
            </div>
          </div>
        </div>
        <button class="btn_update" @click="updateKakos(pageData[0]._id)">Update</button>
      </div>


    </div>

  </div>
</template>

<script>

import { mapGetters, mapState } from "vuex";


export default {
  name: "kakos",

  data() {
    return {
      fileName: "",
    }
  },

  computed: {
    ...mapState({

      pageData: "pageData",
      imgData: "imgData"

    }),
  },
  methods: {
    FileUpload(event) {
      this.fileSelected = event.target.files[0];
      this.fileName = this.fileSelected.name
    },
    cancelFileSelected(event) {
      this.fileSelected = "";
      this.fileName = "";
      console.log("CANCEL FILE IMAGE SELECTED", this.fileSelected, this.fileName);
    },

    updateKakos(p) {
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
        bodyFormData.append("p_2", this.pageData[0].p_2);
        bodyFormData.append("p_3", this.pageData[0].p_3);
        bodyFormData.append("p_4", this.pageData[0].p_4);
        bodyFormData.append("p_5", this.pageData[0].p_5);
        bodyFormData.append("p_6", this.pageData[0].p_6);



      }

      this.$store
        .dispatch("updatePage", {
          data: bodyFormData,
          // page: `${process.env.VUE_APP_PAGE1_NAME}`
          page: "kakos"
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
.container {
  width: 100%;
  height: auto;
}
.form-title{
  margin:20px auto;
  font-size: 20px;
}
.row {
  padding-bottom: 50px;
}

.slider {
  border: 1px solid black;
  padding-bottom: 10px;
  background-color: #f0f0f0;
}

.info_slider {
  color: red;
}

.img_slider_card {
  background-color: rgba(251, 224, 149, .7);
  overflow:hidden;
}

.header_title {
  display: flex;
  flex-direction: column;

}

.bloc_loop {
  border: 1px solid black;
  margin-top: 20px
}

.bloc_sinopsis {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 30px auto;


}

.bloc_fiche_art {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: stretch;
  width: 50%;
  margin: 0 auto;

  text-align: left;

}

input {
  border: none;
  margin: 5px;
  box-shadow: 1px 1px 2px 1px;
}

.btn_action {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
}

button {
  width: 50%;
  margin: 3px auto
}

.btn_update {
  margin: 20px auto
}

@media screen and (min-width:1140px) {

  .bloc_img_slider {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .loop {
    display: flex;
    flex-direction: row;
    width: 200px;
    border: 1px solid black;
  }

  .img_slider_card {
    display: flex;
    flex-direction: column;

  }

  .img_diapo {
    width: 200px;
    height: 200px
  }

  .header {
    margin-top: 30px
  }
}
</style>