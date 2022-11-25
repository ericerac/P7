<template>
    <div class="container-fluid bloc">

        <!-- ******************** UPDATE ********************  -->
        <div class="row">
            <div class="bloc_loop col-lg-4 " v-for="(data, index) in pageData" :key="data._id">


                <div class="card_calendar">

                    <label for="showName"> Show Name
                        <input name="showName" type="text" v-model="data.name" class="form-control "
                            placeholder="pageData.name">{{ index }}
                    </label>

                    <!-- *******   BLOC DATE ******* -->

                    <div class="bloc_date col-12">

                        <label for="name">Day
                            <input name="name" type="number" v-model="data.day" class="form-control"
                                placeholder="pageData.name">
                        </label>

                        <label for="month">Month
                            <input name="month" type="text" v-model="data.month" class="form-control"
                                placeholder="pageData.name">
                        </label>

                        <label for="name">Hour
                            <input name="name" type="text" class="form-control" v-model="data.hour" placeholder="jeudi">
                        </label>

                    </div>
                    <!-- *******   END BLOC DATE ******* -->
                    <div class="bloc_event col-12">

                        <!-- <label for="event">Event (max 50 caractères)
                            <input name="event" type="text" v-model="data.event" class="form-control "
                                placeholder="event">
                        </label> -->
                        <label for="detail"> description (max 50 caractères)
                            <input name="detail" type="text" v-model="data.detail" class="form-control "
                                placeholder="index.name">
                        </label>
                    </div>

                    <div class="bloc_link col-12">

                        <label for="linkEvent">Link event
                            <input name="linkEvent" type="text" v-model="pageData[0].link_event" class="form-control "
                                placeholder="no link">
                        </label>
                        <label for="linkShow">Link Show personal webSite
                            <input name="linkShow" type="text" v-model="pageData[0].imageUrl" class="form-control "
                                placeholder="pageData.imageUrl">
                        </label>
                    </div>

                    <label for="Badge">Badge Info (max 20 caractères)
                        <input name="Badge" type="text" v-model="data.info_top" class="form-control "
                            placeholder="pageData.name">
                    </label>

                    <label for="imgName">Actual name pic (function) <span class="span"
                            @click="preview_img(data.imageUrl)"><strong>(Preview)</strong></span>
                        <input name="imgName" type="text" class="form-control" placeholder="" v-model="data._id">
                    </label>


                    <label for="image">
                        <input type="file" name="image" id="Img_new" ref="file" @change="FileUpload"
                            accept="image/png, image/jpeg" /></label>

                    <input type="button" name="submit" class="btn btn-primary mt-1 btn-lg btn-block" keyUp="enter"
                        value="Modifier" @click="updatePage(data._id, index)">Modifier

                </div>
            </div>
        </div>
        <div class="display">
    <div v-if="preview_component">
      <prev />
    </div>

  </div>
        <div class="row new_date">
            <button class="btn_display" @click="newDate = !newDate">New Date</button>

            <div class="card_calendar" v-if="newDate">
                <label for="name">Name
                    <input name="name" type="text" v-model="pageData.name" class="form-control"
                        placeholder="pageData.name">
                </label>

                <div class="bloc_date">

                    <label for="name">Day
                        <input name="name" type="number" v-model="pageData.day" class="form-control"
                            placeholder="pageData.name">
                    </label>
                    <label for="date_time">Hour
                        <input name="name" type="number" v-model="pageData.hour" class="form-control"
                            placeholder="">
                    </label>

                    <label for="name">Month
                        <input name="name" type="text" v-model="pageData.month" class="form-control"
                            placeholder="pageData.name">
                    </label>

                    <!-- <label for="name">Year
                        <input name="name" type="text" v-model="pageData.year" class="form-control"
                            placeholder="pageData.name">
                    </label> -->

                </div>

                <label for="Badge"> Badge Info
                    <input name="Badge" type="text" v-model="pageData.info_top" class="form-control"
                        placeholder="pageData.name">
                </label>
                <label for="name">link_event
                    <input name="name" type="text" v-model="pageData.link_event" class="form-control"
                        placeholder="pageData.name">
                </label>
                <label for="name">detail
                    <input name="name" type="text" v-model="pageData.detail" class="form-control"
                        placeholder="pageData.name">
                </label>
                <label for="name">link_show
                    <input name="name" type="text" v-model="pageData.link_show" class="form-control"
                        placeholder="pageData.name">
                </label>
                <!-- <label for="name">Name
                    <input name="name" type="text" v-model="pageData[0].name" class="form-control"
                        placeholder="pageData.name">
                </label> -->
                <label for="name">image
                    <input name="name" type="text" v-model="pageData.image" class="form-control"
                        placeholder="pageData.name">
                </label>

                <label for="image">
                    <input type="file" name="image" id="PhotoPerfilChange" ref="file" @change="FileUpload"
                        accept="image/png, image/jpeg" /></label>

                <button class="btn" @click="createDate()">Modifier</button>


            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from "vuex";
// const prev = require ("../components/img_preview.vue")
import prev from "../components/img_preview.vue"
// const instance = axios.create({
//   baseURL: "http://localhost:3000/",
// });
let ahora = "";

if (new Date().getHours() < 18) {


    ahora = Date.now();
    console.log("HEURE DU CHARGEMENT---->", ahora);

}

const def = () => console.log("CalUpdate : VUE");
def();



export default {
    name: "ad1920384756ytrdehdk",

    data: function () {
        return {
            mode: "login",
            content: "",
            newDate: false,
            detail: "",
            // pageData:[],
            preview_component:false,
            Preview_imgUrl:"",
            
        };
    },

    created: function () {
        console.log(" MOUNTED HOME ");

        // this.getPageData();

    },


    components: {
        // ModalMessage,
        prev,
    },
    watch: {},

    computed: {
        ...mapState({
            modal: "modal",
            modalMessage: "modalMessage",
            pageData: "pageData",
        }),
    },
    watcher: {

    },

    methods: {

        preview_img(x) {
            console.log("PREVIEW IMAGE DB", x);
            this.Preview_imgUrl = x;
            this.preview_component = true;
        },



        FileUpload(event) {
            this.fileSelected = event.target.files[0];
        },

        // getPageData() {
        //   const n = "INICIO 1";
        //   this.$store.dispatch("getPageData", n);
        //   console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
        // },


        
        updatePage(x, ind) {
            let bodyFormData = new FormData();
            let n = ind;
            console.log("ID , INDEX CALENDAR CARD", x, ind); // ID bon
            

let file = this.fileSelected;

console.log("file ---->", file );

const stringi = JSON.stringify(this.pageData)
// console.log("STRINGiFY ---->", stringi );
const parsi = JSON.parse(stringi)
// console.log("PARSI ---->", parsi );


const cardUp = parsi.filter(i => i._id == x)
            
            
 console.log("cardUp ----->", cardUp)







            if (this.fileSelected) {

                
                // bodyFormData.append("imageUrl", this.fileSelected, this.fileSelected.name);
                // bodyFormData.append("id", this.pageData._id);
                // bodyFormData.append("info_top", this.pageData.info_top);
                // bodyFormData.append("day", this.pageData.day);
                // bodyFormData.append("month", this.pageData.month);
                // bodyFormData.append("event", this.pageData.event);
                // bodyFormData.append("detail", this.pageData.detail);
                // bodyFormData.append("hour", this.pageData.hour);
                // bodyFormData.append("link_event", this.pageData.link_event);
                // bodyFormData.append("link_show", this.pageData.link_show);
                // bodyFormData.append("name", this.pageData.name);


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
                bodyFormData.append("name", cardUp[0].name);



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
                bodyFormData.append("name", cardUp[0].name);


            }
            console.log("BODY FORM DATA CALUPDATE", bodyFormData.entries());
            for(var pair of bodyFormData.entries()) {
   console.log(pair[0]+ ', '+ pair[1]); 
}


            this.$store
                .dispatch("updatePage", bodyFormData)

                .then((response) => {

                    alert("Votre page a bien été modifié")
                    //  this.$router.push("/profil")


                })
                .catch((response) => {


                });
        },

        createDate: function () {
            // if (this.fileSelected == "" && this.content == "") {
            //     alert(" Votre article est vide");
            //     return;
            // }
            console.log("this.fileSelected---->",this.fileSelected);
            console.log("this.pageData.info_top---->",this.pageData.info_top);
        
            let bodyFormData = new FormData();

            if (this.fileSelected) {

                //  bodyFormData.append('files', file) 



bodyFormData.append("image", this.fileSelected, this.fileSelected.name);
// bodyFormData.append("id", this.pageData._id);
bodyFormData.append("info_top", this.pageData.info_top);
bodyFormData.append("day", this.pageData.day);
bodyFormData.append("month", this.pageData.month);
bodyFormData.append("event", this.pageData.event);
bodyFormData.append("detail", this.pageData.detail);
bodyFormData.append("hour", this.pageData.hour);
bodyFormData.append("link_event", this.pageData.link_event);
bodyFormData.append("link_show", this.pageData.link_show);
bodyFormData.append("name", this.pageData.name);



} else {
// bodyFormData.append("id", this.pageData._id);
bodyFormData.append("info_top", this.pageData.info_top);
bodyFormData.append("day", this.pageData.day);
bodyFormData.append("month", this.pageData.month);
bodyFormData.append("event", this.pageData.event);
bodyFormData.append("detail", this.pageData.detail);
bodyFormData.append("hour", this.pageData.hour);
bodyFormData.append("link_event", this.pageData.link_event);
bodyFormData.append("link_show", this.pageData.link_show);
bodyFormData.append("name", this.pageData.name);

}
            this.$store
                .dispatch("createDate", bodyFormData)

                .then(function (response) {
                   console.log("REPONSE CREA CAL UPDATE--->",response);
                //     location.reload();
                 })
                .catch(function (response) {
                   
                    console.log(response);
                });
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
    width: 90%;
}

.bloc_loop {
    border: 1px solid blue;

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
    padding: .5rem;
}

.bloc_date {
    display: flex;
    flex-direction: row;
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
    margin: .3rem;
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
    width: 100px;
}

label {
    font-size: 12px;
    text-align: left;
    padding: .2rem;
    width: 100%;
}
</style>