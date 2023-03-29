<template>
  <div class="container-fluid bloc">


    <button v-if="!newDate" class="btn_display" @click="newDate = !newDate">Open New Date</button>
    <button v-else class="btn_display" @click="newDate = !newDate">Close New Date</button>
    <!-- ********************  CREATE ********************  -->

    <div class="row bloc_newDate g-0" id="createDate">


      <div class="card_calendar" id="card_calendar" v-if="newDate">

        
        <span class="mode">Mode Create</span>
        <label for="name">Show Name
          <input name="name" type="text" v-model="pageData.show_name" class="form-control"
            placeholder="pageData.show_name" />
        </label>

        <div class="bloc_date">
          
            

          <label for="name">Date
            <input name="name" type="date" v-model="pageData.day" class="form-control" placeholder="pageData.day"
              min="1" max="31" />
          </label>
          <label for="date_time">Hour
            <input name="name" type="time" v-model="pageData.hour" class="form-control" placeholder="pageData.hour" />
          </label>
          
          



      
        </div>
        <label for="event">
          Event
          <input name="event" type="text" v-model="pageData.event" class="form-control" placeholder="pageData.name" />
        </label>
        <label for="name">Lloc
          <input name="name" type="text" v-model="pageData.detail" class="form-control" placeholder="pageData.name" />
        </label>
        <label for="Badge">
          Badge Info
          <input name="Badge" type="text" v-model="pageData.info_top" class="form-control"
            placeholder="pageData.name" />
        </label>

        <label for="name">link_event
          <input name="name" type="text" v-model="pageData.link_event" class="form-control"
            placeholder="pageData.name" />
        </label>
        
        <label for="name">link_show
          <input name="name" type="text" v-model="pageData.link_show" class="form-control"
            placeholder="pageData.name" />
        </label>
        <!-- <label for="name">Name
                  <input name="name" type="text" v-model="pageData[0].name" class="form-control"
                      placeholder="pageData.name">
              </label> -->
        <label for="name">image
          <input name="name" type="text" v-model="pageData.image" class="form-control" placeholder="pageData.name" />
        </label>
        <form action="/uploadmultiple">
          <label for="image">
            <input type="file" name="image" id="PhotoPerfilChange" ref="file" @change="FileUpload"
              accept="image/png,image/jpeg , image/jpg" multiple /></label>
        </form>
        <button class="btn" @click="createDate()">Enregistrer</button>
      </div>
    </div>

    <!-- ******************** UPDATE DATE ********************  -->

    <div class="row bloc_update col-12 ">

      <div class="bloc_loop  col-sm-5 mx-sm-1 col-lg-4 col-xl-3   " v-for="(data, index) in pageData" :key="data._id">
        <div class="card_calendar">
          <span class="mode ">Mode Update</span>
          <label for="showName">
            Show Name
            <input name="showName" type="text" v-model="data.show_name" class="form-control"
              placeholder="pageData.name" />{{ index }}
          </label>

          <!-- *******   BLOC DATE ******* -->

          <div class="bloc_date col-12">
            <label for="name">Date
              <input name="name" type="date" v-model="data.day" class="form-control" placeholder="data.day" />
            </label>

          
            <label for="name">Hour
              <input name="name" type="time" class="form-control" v-model="data.hour" placeholder="jeudi" />
            </label>
          </div>

          <!-- *******    BLOC INFO ******* -->
          <label for="event">
          Event
          <input name="event" type="text" v-model="data.event" class="form-control" placeholder="pageData.name" />
        </label>
          <div class="bloc_event col-12">
            <label for="detail">
              Lloc Place (max 50 caractères)
              <input name="detail" type="text" v-model="data.detail" class="form-control" placeholder="index.name" />
            </label>
          </div>

          <label for="Badge">Badge Info (max 20 caractères)
            <input name="Badge" type="text" v-model="data.info_top" class="form-control" placeholder="pageData.name" maxlength="20" />
          </label>


          <!-- *******    BLOC LINK ******* -->

          <div class="bloc_link col-12">
            <label for="linkEvent">Link event
              <input name="linkEvent" type="text" v-model="data.link_event" class="form-control"
                placeholder="no link" />
            </label>

            <!-- <label for="linkShow">Link Show personal webSite page
              <input name="linkShow" type="text" v-model="pageData.imageUrl" class="form-control"
                placeholder="pageData.imageUrl" />
            </label> -->
          </div>

          <!-- *******    BLOC IMAGE ******* -->

          <!-- <label for="imgName">Actual name pic (function)
           
            <span class="span" @click="previewImg = !previewImg"><strong>(Preview)</strong></span>
            
            <input name="imgName" type="text" class="form-control" placeholder="" v-model="data.imgageUrl" />
          </label>
          <div class="previewImg" v-if="previewImg"><img class="" :src="data.imageUrl" alt="image" width="200"
              height="160" /></div>
          <label for="image">
            <input type="file" name="image" id="Img_new" ref="file" @change="FileUpload"
              accept="image/png, image/jpeg, image/jpg "/></label> -->
              
          <div class="btn-action">
            
            <button @click="updatePage(data._id, index)">Update</button>
            <button @click="delCard(data._id)">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ******************** COMPONENTS ********************  -->
    <div class="display">
      <div v-if="preview_component">
        <prev />
      </div>
    </div>


    <!-- END BLOC-->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ref } from "vue";

// const prev = require ("../components/img_preview.vue")
// import prev from "../components/img_preview.vue";



// import ModalSucces from "../components/ModalSucces.vue";
let ahora = "";

if (new Date().getHours() < 18) {

  ahora = Date.now();
  console.log("HEURE DU CHARGEMENT DATE NOW---->", ahora);
  let date = new Date(ahora)
  console.log("NEW DATE",date);
  // 1669720999459


  let ms = Date.parse("Octubre 27, 1970");
  console.log("mil de ma Naissance---->", ms);

} else {
  ahora = Date.now();
  console.log("HEURE DU CHARGEMENT DATE NOW +18---->", ahora);
  let date = new Date(ahora)
  console.log("NEW DATE",date);
}



export default {
  name: "ad1920384756ytrdehdk",

  data: function () {
    return {
      mode: "login",
      content: "",
      newDate: false,
      detail: "",
      previewImg: "",
      DateShow: null,
      Preview_imgUrl: "",
      value: "",
      date:"",
      

    };
  },
  setup(){
      const dateSelected = new Date()
      return {
        dateSelected
      }
    },
  created: function () {
    console.log(" MOUNTED CALUPDATE ");


    // this.getPageData();
  },

  components: {
    // ModalMessage,
    // prev,
  
   
    // ModalSucces,
   
  },
  watch: {
   pageData(newValue, oldValue) {
    this.pageData = newValue;
    console.log("NEW PAGEDATA",newValue);
  }
  },

  computed: {
    ...mapState({
      modal: "modal",
      modalMessage: "modalMessage",
      // modalSucces:"modalSucces",
      pageData:"pageData",
      preview_component: "preview_component",
    }),
    page(){

  return this.pageData

    },
  },
  watcher: {

  },
  props: {
    item: { type: Object }
  },

  methods: {

    // vueDatePicker(){
    //   this.vueCtkDateTimePicker = true;
    // },

    preview_img(x) {
      // console.log("PREVIEW IMAGE DB", x);
      // console.log("PREVIEW IMAGE DB", this.pageData);
      const stringi = JSON.stringify(this.pageData);
      //  console.log("STRINGiFY ---->", stringi );
      const parsi = JSON.parse(stringi);
      //  console.log("PARSI ---->", parsi );
      const img = parsi.filter(i => i._id = x)
      // console.log("RETOUR FILTER IMAGE", img);



    },
    previewClose() {
      console.log("PREVIEW IMAGE DB");

      this.preview_component = false;
    },

    FileUpload(event) {
      this.fileSelected = event.target.files[0];
    },

    updatePage(x, ind) {
      let bodyFormData = new FormData();
      let n = ind;
      console.log("ID , INDEX CALENDAR CARD", x, ind); // ID bon

      let file = this.fileSelected;

      console.log("file ---->", file);

      const stringi = JSON.stringify(this.pageData);
      //  console.log("STRINGiFY ---->", stringi );
      const parsi = JSON.parse(stringi);
      //  console.log("PARSI ---->", parsi );

      const cardUp = parsi.filter((i) => i._id == x);

      console.log("cardUp ----->", cardUp);

      if (this.fileSelected) {
        bodyFormData.append("image", this.fileSelected, this.fileSelected.name);
        bodyFormData.append("id", cardUp[0]._id);
        bodyFormData.append("info_top", cardUp[0].info_top);
        bodyFormData.append("day", cardUp[0].day);
        bodyFormData.append("month", cardUp[0].month);
        bodyFormData.append("event", cardUp[0].event);
        bodyFormData.append("detail", cardUp[0].detail);
        bodyFormData.append("hour", cardUp[0].hour);
        bodyFormData.append("link_event", cardUp[0].link_event);
        bodyFormData.append("link_show", cardUp[0].link_show);
        bodyFormData.append("name", "calendar");
        bodyFormData.append("show_name", cardUp[0].show_name);
      } else {
        bodyFormData.append("id", cardUp[0]._id);
        bodyFormData.append("info_top", cardUp[0].info_top);
        bodyFormData.append("day", cardUp[0].day);
        bodyFormData.append("month", cardUp[0].month);
        bodyFormData.append("event", cardUp[0].event);
        bodyFormData.append("detail", cardUp[0].detail);
        bodyFormData.append("hour", cardUp[0].hour);
        bodyFormData.append("link_event", cardUp[0].link_event);
        bodyFormData.append("link_show", cardUp[0].link_show);
        bodyFormData.append("name", "calendar");
        bodyFormData.append("show_name", cardUp[0].show_name);
      }

      //             console.log("BODY FORM DATA CALUPDATE", bodyFormData.entries());
      //             for(var pair of bodyFormData.entries()) {
      //    console.log(pair[0]+ ', '+ pair[1]);
      // }

      this.$store
        .dispatch("updatePage", {
          data: bodyFormData,
          page: "calendar",
        })

        .then((response) => {
          
          if (response.status == 200) {
            console.log("RESPONSE CALUPDATE 2", response);
           //     location.reload();
          file = null;
        
          }
        })
        .catch((response) => { });
    },

    createDate: function () {
      // if (this.fileSelected == "" && this.content == "") {
      //     alert(" Votre article est vide");
      //     return;
      // }
      console.log("this.fileSelected---->", this.fileSelected);
    

      let bodyFormData = new FormData();

      if (this.fileSelected) {
        //  bodyFormData.append('files', file)

        bodyFormData.append("image", this.fileSelected, this.fileSelected.name);
        // bodyFormData.append("id", this.pageData._id);
        bodyFormData.append("info_top", this.pageData.info_top);
        bodyFormData.append("day", this.pageData.day);
        bodyFormData.append("month", this.pageData.month);
        // bodyFormData.append("month", this.pageData.year);
        bodyFormData.append("event", this.pageData.event);
        bodyFormData.append("detail", this.pageData.detail);
        bodyFormData.append("hour", this.pageData.hour);
        bodyFormData.append("link_event", this.pageData.link_event);
        bodyFormData.append("link_show", this.pageData.link_show);
        bodyFormData.append("name", "calendar");
        bodyFormData.append("show_name", this.pageData.show_name);
      } else {
        // bodyFormData.append("id", this.pageData._id);
        bodyFormData.append("info_top", this.pageData.info_top);
        bodyFormData.append("day", this.pageData.day);
        bodyFormData.append("month", this.pageData.month);
        // bodyFormData.append("month", this.pageData.year);
        bodyFormData.append("event", this.pageData.event);
        bodyFormData.append("detail", this.pageData.detail);
        bodyFormData.append("hour", this.pageData.hour);
        bodyFormData.append("link_event", this.pageData.link_event);
        bodyFormData.append("link_show", this.pageData.link_show);
        bodyFormData.append("name", "calendar");
        bodyFormData.append("show_name", this.pageData.show_name);
      }
      this.$store
        .dispatch("createDate", bodyFormData)

        .then(function (response) {
          console.log("REPONSE CREA CAL UPDATE--->", response);
          //     location.reload();
        })
        .catch(function (response) {
          console.log(response);
        });
    },

    delCard: function (x) {
      window.confirm("Quel dommage ! Supprimer ? sur? ");
      console.log("ID CARD");
      this.$store
        .dispatch("delCard", {
          idCard: x,
          page: "calCard",
        })

        .then((response) => {
          if (response.status == 200) {

            let newCal = this.pageData.filter(item => item._id != x);

            console.log("FILTER", newCal);
            this.pageData = newCal
            // console.log("RESPONSE DEL CARD", response);
            alert("Votre Date a bien été modifié");
            //  this.$router.push("/profil")
          }
        })
        .catch((response) => { });
    },
  }, // FIN METHODS
};
</script>

<style scoped>
.bloc {
  width: 90%;

  /* 
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;*/
}

.container-fluid {
  width: 100%;
  padding: 0;
}

.bloc_update {
  width: 100%;

}

.bloc_newDate {
  margin: 0 auto;
  max-width: 500px;
}

.bloc_loop {
  /* border: 1px solid blue; */
  margin: 0rem auto;
  width:100%
  
}
.col-12{
width:100%;
}
.col-xl-4{
  width: 24%;
}

.card_calendar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  border: 1px solid red;
  border-radius: 5px;
  background: rgb(122, 197, 247);
  margin: 1rem auto;
  padding: 0.5rem;
}
/* START daqtepicker */
input[type="date"],[type="time"]{
    background-color: #0080ff;
    padding: 5px;
    appearance: none;
    
    
    font-family: "Roboto Mono",monospace;
    color: #ffffff;
    font-size: 18px;
    border: 1px solid white;
   
    outline: 1px solid rgb(3, 26, 232);
    border-radius: 5px;
    box-shadow: 2px 2px 2px 0.2rem rgba(1, 32, 65, 0.25);
}

::-webkit-calendar-picker-indicator{
    background-color: #ecedf8;
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;
    color: #ffffff;
   
  
}
::-webkit-inner-spin-button {
  display:block;
}
/* END daqtepicker */
.bloc_date {
  display: flex;
  flex-direction: column;
}

.bloc_event .bloc_link {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bloc_date .bloc_event {
  /* width: 30%; */

  justify-content: space-around;
  border: 1px solid rgb(38, 48, 248);
  border-radius: 10px;
}

.btn {
  margin: 0.3rem;
  background: rgb(251, 243, 243);
  box-shadow: 2px 2px 2px;
}

.btn:hover {
  background: rgb(251, 197, 197);
}

.btn_display {
  padding: rem;
  margin: 3rem auto;
  border: 2px solid blue;
  width: 80%;
  max-width: 200px;
}

.btn-action {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem;
}

.btn-action button {
  width: 80px;
  border: 1px solid rgba(255, 0, 0, 0.6);
  border-radius: 8px;
  box-shadow: 3px 3px 3px;
  padding: 3px;
}

label {
  font-size: 12px;
  text-align: left;
  padding: 0.2rem;
  width: 100%;
}

.mode {
  font-size: 12px;
  text-align: end;
}
@media screen and (max-width:576px) {
  .bloc_update{
 justify-content: space-between;
 
  }
  .bloc {
  width: 100%;
}

}
@media screen and (min-width:992px) {
  .col-lg-4{
  width:32%;
}
  
}
@media screen and (min-width:1024px) {
  .col-lg-4{
  width:30%;
}
.bloc_update{
 justify-content: center;
 
  }
}
@media screen and (min-width:1280px) {
  .col-lg-4{
  width:25%;
}

}
</style>