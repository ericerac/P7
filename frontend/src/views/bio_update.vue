<template>
    <div class="container p-0 text-center">
        <div class="row">
            <span class="form-title">
                Vous êtes sur la page:
                <strong>{{ pageData[0].name }}.{{ pageData[0].lang }}</strong></span>
            <div class="header_bio">
                <div class="bloc_header">
                    <img class="img" :src="pageData[0].imageUrl" alt="" />
                </div>
            </div>
            <label for="image1" class="btn_upload">
                <input type="file" name="image" id="image1" ref="file" @change="FileUpload"
                    accept="image/png, image/jpeg, image/jpg" hidden />
                Choisir une image : {{ OnefileSelected }}</label>
        </div>

        <div class="row col-12">
            <div class="bloc_left  col-12 text-center">
                <label for="p1" class="label_area">Paragraphe 1</label>
                <textarea rows="10" cols="50" name="p1" type="text" class="description_bio" v-model="pageData[0].p_1">
        </textarea>
                <label for="p1">Paragraphe 2</label>
                <textarea rows="10" cols="50" name="p2" type="text" class="description_bio" v-model="pageData[0].p_2">
        </textarea>
                <label for="p1">Paragraphe 3</label>
                <textarea rows="10" cols="50" name="p3" type="text" class="description_bio" v-model="pageData[0].p_3">
        </textarea>
                <label for="p1">Paragraphe 4</label>
                <textarea rows="10" cols="50" name="p4" type="text" class="description_bio" v-model="pageData[0].p_4">
        </textarea>
                <div class="bloc_tilte_2">
                    <h2>{{ pageData[0].title_2 }}</h2>
                    <label for="img_text">titre rubrique
                        <input type="text" name="img_text" v-model="pageData[0].title_2" />
                    </label>
                </div>
                <button @click="updateBio(pageData[0]._id)">Update</button>
            </div>
        </div>

        <div class="row bloc_img_spectacles">
            <div class="otherShows">
                <div class="bloc_loop_otherShows col-12">
                    <div class="bloc_img" v-for="i in imgData" :key="i._id">
                        <div class="img_card">
                            <img class="img_display" :src="i.imageUrl" alt="" />
<div class="bloc_btn">
                            <div class="group_btn_img">
                                <div>
                                    <label for="image1" class="btn_upload">
                                        <input type="file" name="image" id="image1" ref="file" @change="FileUpload"
                                            accept="image/png, image/jpeg, image/jpg" hidden />
                                        Choisir une image</label>
                                </div>
                                <span>{{ fileName }}</span>
                            </div>
                            <div class="label">
                                <label for="img_text">{{ i.showName }}
                                    <input type="text" name="img_text" v-model="i.showName" />
                                </label>
                            </div>

                            <!-- <span>{{ i._id }}</span>  info only -->
                            <div class="btn-action">
                                <button @click="updateImg(i._id)">Update</button>
                                <button @click="delCard(i._id)">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "ad1920384756ytrdehdk",
    data: function () {
        return {
            OnefileSelected: "OnefileSelected",
            fileName: "",
            textVal: document.getElementsByClassName("description_bio").value,
        };
    },

    computed: {
        ...mapState({
            pageData: "pageData",
            imgData: "imgData",
        }),

        
    },
    


    methods: {
        FileUpload(event) {
            this.fileSelected = event.target.files[0];
            this.OnefileSelected = this.fileSelected.name;
            this.fileName = this.fileSelected.name;
        },
        cancelFileSelected(event) {
            this.fileSelected = "";
            this.fileName = "";
            console.log(
                "CANCEL FILE IMAGE SELECTED",
                this.fileSelected,
                this.fileName
            );
        },
        getPageData() {
            const n = "bio";
            this.$store.dispatch("getPageData", n).then((res) => {
                if (res) {
                    console.log("RES GET BIO", res.data[0].name);
                    let p = res.data[0].name;
                    this.$store.dispatch("getImgData", p);
                }
            });
            console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
        },

        change(x) {
            console.log("CHANGE BUTTON", x);
        },
        //  ******************* UPDATE  *******************

        updateBio(x) {
            let bodyFormData = new FormData();

            console.log("ID  BIO", x); // ID bon

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
                bodyFormData.append("title_1", cardUp[0].title_1);
                bodyFormData.append("color_title_1", cardUp[0].color_title_1);
                bodyFormData.append("subTitle_1", cardUp[0].subTitle_1);
                bodyFormData.append("color_subTitle_1", cardUp[0].color_subTitle_1);
                bodyFormData.append("title_2", cardUp[0].title_2);
                bodyFormData.append("color_title_2", cardUp[0].color_title_2);
                bodyFormData.append("subTitle_2", cardUp[0].subTitle_2);
                bodyFormData.append("color_subTitle_2", cardUp[0].color_subTitle_2);
                bodyFormData.append("p_1", cardUp[0].p_1);
                bodyFormData.append("p_2", cardUp[0].p_2);
                bodyFormData.append("p_3", cardUp[0].p_3);
                bodyFormData.append("p_4", cardUp[0].p_4);
                bodyFormData.append("p_5", cardUp[0].p_5);

                bodyFormData.append("name", "bio");
            } else {
                bodyFormData.append("id", cardUp[0]._id);
                bodyFormData.append("title_1", cardUp[0].title_1);
                bodyFormData.append("color_title_1", cardUp[0].color_title_1);
                bodyFormData.append("subTitle_1", cardUp[0].subTitle_1);
                bodyFormData.append("color_subTitle_1", cardUp[0].color_subTitle_1);
                bodyFormData.append("title_2", cardUp[0].title_2);
                bodyFormData.append("color_title_2", cardUp[0].color_title_2);
                bodyFormData.append("subTitle_2", cardUp[0].subTitle_2);
                bodyFormData.append("color_subTitle_2", cardUp[0].color_subTitle_2);
                bodyFormData.append("p_1", cardUp[0].p_1);
                bodyFormData.append("p_2", cardUp[0].p_2);
                bodyFormData.append("p_3", cardUp[0].p_3);
                bodyFormData.append("p_4", cardUp[0].p_4);
                bodyFormData.append("p_5", cardUp[0].p_5);

                bodyFormData.append("name", "bio");
            }

            //             console.log("BODY FORM DATA CALUPDATE", bodyFormData.entries());
            //             for(var pair of bodyFormData.entries()) {
            //    console.log(pair[0]+ ', '+ pair[1]);
            // }

            this.$store
                .dispatch("updatePage", {
                    data: bodyFormData,
                    page: "bio",
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
                    page: "img",
                })

                .then((response) => {
                    if (response.status == 200) {
                        // console.log("RESPONSE CALUPDATE 2", response);
                        //     location.reload();
                        file = null;
                    }
                })
                .catch((response) => { });
        },
    }, //fin actions
};
</script>

<style scoped>
.row {
    border: 2px solid black;
    margin: 5px 0;
    padding: 10px 0;
}

.form-title {
    margin: 20px auto;
    font-size: 20px;
    background-color: bisque;
}

.img {
    width: 200px;
    height: auto;
}

textarea {
    width: 400px;
    margin: 10px auto 2rem;
}

.bloc_loop_otherShows {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.bloc_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.bloc_tilte_2 {
    margin-bottom: 30px;
}

.bloc_img {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 5px auto;
    background: rgba(rgb(249, 87, 87), rgb(120, 250, 120), rgb(3, 3, 246), .3);
}

.img_card {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;  
    border: 1px solid red;
    border-radius: 0 0 10px 10px;
    box-shadow: 3px 3px 10px;
   
   
}
.bloc_btn > div{
    background: transparent;
}
.bloc_btn{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap:5px;
    height:33%;
    
    margin-bottom: 5px;
}

.btn_upload {
    width: auto;
    margin: 20px auto;
    border: 1px solid black;
    border-radius: 5px;
}

.label_area {}

@media screen and (max-width: 576px) {
    textarea {
        width: 100%;
    }
}

@media screen and (min-width: 992px) {
    .img_card {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .bloc_img {
        display: flex;
        flex-direction: row;
        width: 32%;
    }
}

@media screen and (min-width: 1040px) {
    .img_card {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .bloc_img {
        display: flex;
        flex-direction: row;
        width: 25%;
    }

    .label {
        margin: 10px 0;
    }
}
</style>
