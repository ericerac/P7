<template>
    <div class="container p-0 text-center">
        <div class="row">
            <span class="form-title">
                Vous êtes sur la page:
                <strong>{{ pageData[0].name }}.{{ pageData[0].lang }}</strong></span>
            <div class="header_bio">
                <div class="bloc_header">
                    <template v-if="preview && 0 === inputSelected">

                        <img :src="preview" class="img" />

                    </template>
                    <img v-else class="img" :src="pageData[0].imageUrl" alt="" />
                </div>
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
            <div class="btn-action">

                <div class="btn_update">
                    <label for="retour"></label>
                    <input type="button" name="retour" class="btn btn_del btn_all" keyUp="enter" value="Cancel"
                        @click="FileCancel">
                </div>
            </div>

        </div>

        <div class="row col-12">
            <div class="bloc_left  col-12 text-center">
                <div class="title_subTitlte">

                    <h1 :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].title_1 }} </h1>
                    <label for="Titre"> Titre
                        <input type="text" class="inputVideo" name="Titre" v-model="pageData[0].title_1">
                    </label>
                    <h2 :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].subTitle_1 }} </h2>
                    <label for="Titre"> Titre
                        <input type="text" class="inputVideo" name="Titre" v-model="pageData[0].subTitle_1">
                    </label>

                </div>
                <label for="p1" class="label_area" :class="darkTheme ? 'txtDark' : 'txtDay'">Paragraphe 1 <em>(330
                        caractères)</em> </label>
                <textarea rows="10" cols="50" name="p1" type="text" class="description_bio p" v-model="pageData[0].p_1">
                                    </textarea>
                <!-- <textarea rows="10" cols="50" name="p1" type="text" class="description_bio p" v-model="pageData[0].p_1">
                                    </textarea> -->
                {{ p1 }}
                <label for="p2" :class="darkTheme ? 'txtDark' : 'txtDay'">Paragraphe 2</label>
                <textarea rows="10" cols="50" name="p2" type="text" class="description_bio p" v-model="pageData[0].p_2">
                                    </textarea>
                <label for="p3" :class="darkTheme ? 'txtDark' : 'txtDay'">Paragraphe 3</label>
                <textarea rows="10" cols="50" name="p3" type="text" class="description_bio p" v-model="pageData[0].p_3">
                                    </textarea>
                <label for="p4" :class="darkTheme ? 'txtDark' : 'txtDay'">Paragraphe 4</label>
                <textarea rows="10" cols="50" name="p4" type="text" class="description_bio p" v-model="pageData[0].p_4">
                                    </textarea>
                <div class="bloc_tilte_2">
                    <h2 :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].title_2 }}</h2>
                    <label for="img_text">titre rubrique
                        <input type="text" name="img_text" v-model="pageData[0].title_2" />
                    </label>
                </div>

                <div class="btn_action">
                    <div class="btn_update">

                        <label for="submit"></label>
                        <input type="button" name="submit" class="btn btn_up btn_all" keyUp="enter" value="Update"
                            @click="updateBio(pageData[0]._id)">
                    </div>
                </div>
            </div>
        </div>

        <div class="row bloc_img_spectacles">
            <div class="otherShows">
                <div class="bloc_loop_otherShows col-12">
                    <div class="bloc_img" v-for=" (i, index) in imgData" :key="i._id">
                        <div class="img_card">
                            <template v-if="preview && index + 1 === inputSelected">

                                <img :src="preview" class="img_display" />

                            </template>
                            <img v-else class="img_display" :src="i.imageUrl" alt="" />
                            <div class="bloc_btn">
                                <div class="group_btn_img">
                                    <div>

                                        <label for="image" class="btn_upload">
                                            <figure>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"
                                                    viewBox="0 0 20 17">
                                                    <path
                                                        d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
                                                    </path>
                                                </svg>
                                            </figure>
                                            <input class="btn_upload_file" type="file" name="image" id="image" ref="file"
                                                @change="FileUpload"
                                                accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" />
                                            <p class="fileName" v-if="fileName && index === inputSelected - 1">{{ fileName
                                            }}
                                            </p>
                                        </label>
                                    </div>

                                </div>
                                <div class="label">
                                    <label for="img_text" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.showName }} {{
                                        index }}
                                        <input type="text" name="img_text" v-model="i.showName" />
                                    </label>
                                </div>


                                <div class="btn-action">


                                    <button class="btn btn_up btn_all" @click="updateImg(i._id)">Update</button>
                                    <button class="btn btn_cancel btn_all" @click="FileCancel">Cancel</button>
                                    <button class="btn btn_del btn_all" @click="delCardImg(i._id)">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- NEW CARD -->
                    <div class="btn_new_card">
                        <button v-if="!newCard" @click="newCard = true">
                            new Card
                        </button>
                        <button v-if="newCard" @click="newCard = false">
                            Close
                        </button>
                        <div class="bloc_new_card" v-if="newCard">
                            <div class="img_card">
                                <div class="bloc_img">
                                    <template v-if="preview && inputSelected == imgLength + 1">

                                        <img :src="preview" class="img_display_create" />

                                    </template>
                                </div>
                                <div class="bloc_btn">
                                    <div class="group_btn_img">
                                        <div>

                                            <label for="NewImage" class="btn_upload">
                                                <figure>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"
                                                        viewBox="0 0 20 17">
                                                        <path
                                                            d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
                                                        </path>
                                                    </svg>
                                                </figure>
                                                <input class="btn_upload_file" type="file" name="NewImage" id="image"
                                                    ref="file" @change="FileUpload"
                                                    accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" />
                                                <p class="fileName" v-if="fileName && inputSelected == imgLength + 1">{{
                                                    fileName }}
                                                </p>
                                            </label>
                                        </div>

                                    </div>
                                    <div class="label">
                                        <label for="img_text">Nom Espectacle
                                        </label>
                                        <input type="text" name="img_text" v-model="NewShowName" />
                                    </div>


                                    <div class="btn-action">


                                        <button class="btn btn_up btn_all" @click="CreateImg()">Create</button>
                                        <button class="btn btn_cancel btn_all" @click="FileCancel">Cancel</button>

                                    </div>
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
import { defineComponent, ref } from "vue"
import Compressor from 'compressorjs';
import FilterId from '../utils/jsonStringParse.js';
import compressFile from '../js/compressImg.js';

export default defineComponent({

    // name: "ad1920384756ytrdehdk",
    name: "bio",
    data: function () {
        return {
            newCard: false,
            imgLength: "",
            OnefileSelected: "Image Name",
            fileName: "",
            textVal: document.getElementsByClassName("description_bio").value,
            p1: "",
            p1Q: ref(""),
            inputSelected: ref(""),
            preview: ref(""),
            fileSelected: "",
            NewShowName: "",
            paraf: [],
            paraf: "",
        };
    },

    mounted: function () {
        // let paraf = document.getElementsByClassName("p")
        // for (let i of paraf) {
        //     this.paraf.push(i)
        //     console.log("PARAF", i);
        // }
    },
    computed: {
        ...mapState({
            pageData: "pageData",
            imgData: "imgData",

            darkTheme: "darkTheme"
        }),

        PageSate() {
            if (this.pageData) {
                this.p1Q = this.pageData[0].p_1;
                console.log("COMPUTED");
            }
        },
        imgState() {
            if (this.imgData) {
                console.log("COMPUTED IMGDATA", this.imgData);
                this.imgLength = this.imgData.length;
            }
        },
        changeData() {
            if (this.p1Q == undefined) {

                console.log("COMPUTED PQ1 undefined");
            } else {
                console.log("COMPUTED PQ1 ", p1Q);
            }
        }


    },

    watch: {
        pageData: {
            deep: true,
            handler(n, o) {
                for (let i in this.pageData[0]) {
                    // console.log(i);
                }
                // flag that the user made changes
                console.log("WATCH PAGEDATA NEW", n);
                console.log("WATCH PAGEDATA OLD", o[0]);
                this.calcLength()
            }
        },

        // pageData: {
        //     deep: true,
        //     handler(n, o) {
        //         for (let i in this.pageData[0]) {
        //             // console.log(i);
        //         }
        //         // flag that the user made changes
        //         console.log("WATCH PAGEDATA NEW", n);
        //         console.log("WATCH PAGEDATA OLD", o[0]);
        //         this.calcLength()
        //     }
        // },

        // p1Q() {

        //     console.log("WATCH PQ1",n,o);
        //     if (this.pQ1.length > 280) {
        //         let text = this.p1.length;
        //         let font = 255 - text;
        //         console.log("PQ1 LENGTH");
        //         // alert(` Il ne vous reste plus que  ${font}   caractères`);
        //     }

        // },
    },


    methods: {
        imgState(iData) {
            return iData.length;
        },

        calcLength() {
            let parafChanged = (() => {
                for (let i of this.paraf) {
                    i.addEventListener('change', (e) => {
                        let paraf = document.getElementsByName(`${e.target.name}`)
                        parafChanged = e.target.name;
                        console.log(e)
                        e.target.classList.add('border')
                        console.log(paraf[0].value)
                        let dataParafChanged = {
                            name: e.target.name,
                            value: paraf[0].value
                        }
                        this.testParaf(dataParafChanged)
                    }
                    )
                }
            })
            parafChanged();
        },

        testParaf(x) {
            let paraff = x.name.split("").join("_")
            let ParafChanged = x.value
            let parafOrigin = "";
            console.log("parafCHANGED", paraff);


            for (let i in this.pageData[0]) {
                if (i == paraff) {
                    parafOrigin = this.pageData[0][i]
                };
            }
            console.log("PARAF ORIGIN", parafOrigin);
            if (parafOrigin.length == ParafChanged.length) {
                alert("tout va bien")
            }


        },
        async FileUpload(event) {
            let that = this
            let inp = document.querySelectorAll('input[type=file]');

            let File = event.target.files[0];
            this.fileName = File.name
            // let inp1 = document.querySelector('input[type=file]').files[0];

            let tabInput = []

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
            console.log("FILECANCEL");
        },


        //  ******************* UPDATE  *******************

        updateBio(x) {
            let bodyFormData = new FormData();

            let cardUp = FilterId(x, this.pageData)

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

            let imgUp = FilterId(p, this.imgData)

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

        delCardImg(id) {

            this.$store
                .dispatch("delCard", {
                    idCard: id,
                    page: "img",
                })

                .then((response) => {
                    if (response.status == 200) {


                        alert("l'image a bien été supprimé");

                    }
                })
                .catch((response) => { });
        },

        CreateImg() {
            let bodyFormData = new FormData();

            let imgNumber = this.imgLength + 1;
            console.log("IMG NUMBER CREATE", imgNumber);
            if (this.fileSelected) {
                bodyFormData.append("image", this.fileSelected, this.fileSelected.name);

                bodyFormData.append("name", "img");
                bodyFormData.append("showName", this.NewShowName);
                bodyFormData.append("img", imgNumber);
                bodyFormData.append("page", "bio");
                bodyFormData.append("link", "");
            } else {

                alert("il n'y a pas d'image!")
                return
            }

            this.$store
                .dispatch("createImg", bodyFormData, {})

                .then((response) => {
                    if (response.status == 200) {
                        console.log("CREATED ", response);

                        file = null;
                    }
                })
                .catch((response) => { });
        },

    }, //fin actions
});
</script>

<style scoped>
@import url("../styles/btn.css");
@import url("../styles/theme.css");

.border {
    outline: 2px solid red
}

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

.title_subTitlte {
    margin: 30px auto
}

textarea {
    width: 400px;
    margin: 10px auto 2rem;
    padding:5px;
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

.bloc_img .img_card {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid red;
    border-radius: 0 0 10px 10px;
    box-shadow: 3px 3px 10px;


}

.img_display_create {
    width: 100%;
    height: auto;
    max-height: 300px
}

.bloc_btn>div {
    background: transparent;
}

.bloc_btn {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 5px;
    height: 33%;

    margin-bottom: 5px;
}

/* .btn_upload {
    width: auto;
    margin: 20px auto;
    border: 1px solid black;
    border-radius: 5px;
} */

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
        margin: 20px;
    }

    .bloc_img {
        display: flex;
        flex-direction: row;
        width: 25%;
        margin: 20px
    }

    .label {
        margin: 10px 0;
    }

}

@media screen and (min-width: 1400px) {}
</style>
