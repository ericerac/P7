<template>
    <div class="container master">
        <div class="row"><span class="form-title">
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
                    <img class="img_principale col-10 col-lg-12" :src="pageData[0].imageUrl" alt="">
                    <span class="fileName">{{ fileName }}</span>
                </div>
                <label for="image" class="btn_upload">
                    <input type="file" name="image" id="image" ref="file" @change="FileUpload"
                        accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" hidden />Choisir une image
                </label>

               
                <button class="annuler" @click="cancelFileSelected()">
                    Annuler
                </button>
                
                <div class="bloc_text col-12 col-lg-12 col-xl-12 text-center">

                    <div class="line"></div>
                    <!-- <div class="sous_titre ">

                        <h4 class="fw-light "><i>{{ pageData[0].subTitle_1 }}</i> </h4>
                        <label for="sousTitre"> Sous Titre
                            <input type="text" class="inputVideo" name="sousTitre" v-model="pageData[0].subTitle_1">
                        </label>
                    </div> -->
                </div>

            </div>
        </div>

        <div class="bloc_text">

            <p>
                {{ pageData[0].p_1 }} <br> {{ pageData[0].p_2 }}, {{ pageData[0].p_3 }} y {{ pageData[0].p_4 }}
            </p>
            <label for="Titre"> P1
                <input type="text" class="inputVideo" name="P1" v-model="pageData[0].p_1">
            </label>
            <label for="Titre"> P1
                <input type="text" class="inputVideo" name="P1" v-model="pageData[0].p_2">
            </label>
            <label for="Titre"> P1
                <input type="text" class="inputVideo" name="P1" v-model="pageData[0].p_3">
            </label>
            <label for="Titre"> P1
                <input type="text" class="inputVideo" name="P1" v-model="pageData[0].p_4">
            </label>
            <p>

                {{ pageData[0].p_5 }} : <br> {{ pageData[0].p_6 }}, {{ pageData[0].p_7 }}, {{ pageData[0].p_8 }}

            </p>
            <div class="bloc_2">
                <label for="Titre"> P1
                    <input type="text" class="inputVideo" name="P1" v-model="pageData[0].p_5">
                </label>
                <label for="Titre"> P1
                    <input type="text" class="inputVideo" name="P1" v-model="pageData[0].p_6">
                </label>
                <label for="Titre"> P1
                    <input type="text" class="inputVideo" name="P1" v-model="pageData[0].p_7">
                </label>
                <label for="Titre"> P1
                    <input type="text" class="inputVideo" name="P1" v-model="pageData[0].p_8">
                </label>
            </div>

            <div class="synopsis">
                <label for="synopsis_1" class="label_area" :class="{ text_open: open_text }"
                    @click="open_text = !open_text">Synopsis 1</label>
                <textarea class="synopsisArea col-12" name="synopsis_1" id="" cols="30" rows="5"
                    v-model="pageData[0].synopsis_1"></textarea>
                <!-- <div class="text_desc" :class="{ text_open: open_text }" @click="open_text = !open_text">
                {{ pageData[0].synopsis_1 }}
            </div> -->
            </div>
            <p class="suite" @click="open_text = !open_text"> <em><small>lire la suite</small></em> </p>
        </div>

        <div class="btn-action">

            <button @click="updatePage()">Update</button>
            <button @click="delCard()">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

// import { delire } from "../modules/script";
// delire("PATATE FROIDE");

import navbar from "../components/nav_bar.vue"
import foot from "../components/footer.vue"


export default {
    name: "emperdonadas",
    data() {
        return {
            open_text: false,
            navbarOk: false,
            fileSelected: "",
            fileName: "",
        }
    },
    components: {
        navbar,
        foot
    },
    computed: {
        ...mapState({

            pageData: "pageData",
            navData: "navData"
        }),
    },
    created: function () {

        this.getNavData();
        this.getPageData();

    },
    methods: {
        getPageData() {
            const n = "emperdonadas";
            this.$store.dispatch("getPageData", n)
                .then((res) => {
                    if (res) {
                        // let p = res.data[0].name
                        //    this.$store.dispatch("getImgData", p)
                    }
                })
            console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
        },
        getNavData() {
            const n = "navbar";
            this.$store.dispatch("getNavData", n)
                .then((res) => {
                    if (res) {
                        this.navbarOk = true
                    }
                });
            console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
        },
        FileUpload(event) {
            this.fileSelected = event.target.files[0];
            this.fileName = this.fileSelected.name;
            console.log("FILE IMAGE SELECTED", this.fileSelected);
        },
        cancelFileSelected(event) {
            this.fileSelected = "";
            this.fileName = "";
            console.log("CANCEL FILE IMAGE SELECTED", this.fileSelected, this.fileName);
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
                bodyFormData.append("p_1", this.pageData[0].p_1);
                bodyFormData.append("p_2", this.pageData[0].p_2);
                bodyFormData.append("p_3", this.pageData[0].p_3);
                bodyFormData.append("p_4", this.pageData[0].p_4);
                bodyFormData.append("p_5", this.pageData[0].p_5);
                bodyFormData.append("p_6", this.pageData[0].p_6);
                bodyFormData.append("p_7", this.pageData[0].p_7);
                bodyFormData.append("p_8", this.pageData[0].p_8);


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
                bodyFormData.append("p_1", this.pageData[0].p_1);
                bodyFormData.append("p_2", this.pageData[0].p_2);
                bodyFormData.append("p_3", this.pageData[0].p_3);
                bodyFormData.append("p_4", this.pageData[0].p_4);
                bodyFormData.append("p_5", this.pageData[0].p_5);
                bodyFormData.append("p_6", this.pageData[0].p_6);
                bodyFormData.append("p_7", this.pageData[0].p_7);
                bodyFormData.append("p_8", this.pageData[0].p_8);



            }

            this.$store
                .dispatch("updatePage", {
                    data: bodyFormData,
                    // page: `${process.env.VUE_APP_PAGE1_NAME}`
                    page: "emperdonadas"
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.img_principale {
    width: 200px;
    margin:0 auto;

}
.img_left{
    display:flex;
    flex-direction: column;
}
.fileName{
    height:30px;
    
}
textarea {
    resize: vertical;
    min-height: auto;

}

label {
    margin: 5px
}

.master {
    height: 100vh;
}

/* .img_principale{
    width
} */
.img_thumb {
    margin-top: 40px
}

.title {
    margin-top: 30px
}

p {
    margin: 30px 10px
}

.text_desc {
    /* height: 50px;
  overflow: hidden;
  margin:0 20px;
  white-space:nowrap;
  
  text-overflow: ellipsis;
  border:1px solid black;
  -webkit-line-clamp: 3; */
    position: relative;
    width: 80%;
    margin: 0 auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;

}

.suite {
    margin: 0;
    margin-left: 20px;
    text-align: left;
    text-decoration: underline;
}

.text_open {
    display: block;
    width: 80%;
    margin: 0 auto;
}
</style>