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

          <div class="form-group_foto col-6">

            <!-- <label>image 1</label> -->
            <img class="" :src="pageData[0].imageUrl" alt="image" width="200" height="160" />
            <div class=" group_btn_img">


              <label for="image1" class="btn_upload ">
                <input type="file" name="image" id="image1" ref="file" @change="FileUpload"
                  accept="image/png, image/jpeg, image/jpg" hidden /> Choisir une image</label>
                </div>
                <span>{{ fileName }}</span>
          </div>

        </div>
          <div class="form-group_btn col-12">

            <label class="btn-action" for="submit"></label>
            <input  type="button" name="submit" class="btn btn-primary mt-1 btn-lg btn-block butt col-6" keyUp="enter"
              value="Modifier" @click="updatePage()">

            <label class="btn-action" for="retour"></label>
            <input type="button" name="retour" class="btn btn-primary mt-1 btn-lg btn-block butt col-6" keyUp="enter"
              value="Annuler" @click="this.home = false;">
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

                <div class="bouton_del">
                  <!-- <button class="btn_delete_img">Éffacer </button> -->

                  <img class="" :src="i.imageUrl" alt="image" width="200" height="160" />
                </div>

                <div class=" show_img">


                  <label for="image" class="btn_upload">
                    <input class="btn_upload_file" type="file" name="image" id="image" ref="file" @change="FileUpload"
                      accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"  />
                  </label>
                  <!-- <span v-if="i._id ">{{ OnefileSelected }}</span> -->
                </div>
              </div>
            </div>
          </div>
          <div class="btn_show">
            <div class="btn_update">

              <label for="submit"></label>
              <input type="button" name="submit" class="btn-show btn-primary  butt " keyUp="enter" value="Update"
                @click="updateImg(i._id)">
            </div>
            <div class="btn_update">
              <label for="retour"></label>
              <input type="button" name="retour" class="btn-show btn-danger butt  " keyUp="enter" value="Delete"
              @click="FileCancel()">
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";


const def = () => console.log("HOME : VUE");
def();



export default {
  name: "Home",

  data: function () {
    return {
      mode: "login",
      content: "",
      OnefileSelected: "",
      fileName:"",
      fileSelected:"",

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
    FileUpload(event) {
      this.fileSelected = event.target.files[0];
      this.OnefileSelected = this.fileSelected.name
      this.fileName = this.fileSelected.name
    },
    FileCancel(event) {
      this.home = false // #ref
      this.fileSelected = "";
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
  text-align: start;
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
.form-group_btn{
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

  width: 100%;
}

.form-group_foto {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.bouton_del {
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

.btn_show {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;


}
.btn-action{
  width: 0;
}
.btn_upload {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid blue;
  border-radius: 5px;
  
  overflow: hidden;
  /* text-overflow: ellipsis; */
 
}
.btn_upload input{
background-color: rgba(251, 167, 48, 0.3);
}
.btn_action_self{
  margin: 0;
}
.btn_upload:hover {
  border: 1px solid rgb(255, 164, 164);
  background-color: #fff;
  transition: 200ms;
}

.btn_update {
  width: 50%;
  margin: auto;
  align-items: center;

}
.butt{
  width: 50%;
  margin: 0 auto;
}
.butt:hover {

  box-shadow: 2px 2px 5px black;

  transition: 200ms;

}

.btn-show {
  position: relative;
  top: 40%;
  transform: translateY(-30%);
  border-radius: 10px;
  padding: 5px 10px;
  min-width: 80px;
}
@media  screen and (max-width:576px) {
.update-form, .container-fluid, .header_bloc{
padding: 0;
}
.header_bloc{
  flex-direction: column;
  align-items: center
  ;
}
.form-group{
  width: 90%;
  display:block;
  margin: 0 auto;
}
.form-control{
  margin: 0 auto;
}
.show_bloc{
  background-color:transparent
}
.btn_upload{
  overflow: visible;
  border: none;
}
.input_label{
  flex-direction: row;
}
}
</style>