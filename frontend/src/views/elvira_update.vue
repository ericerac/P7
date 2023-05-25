<template>
    <div class="container master">
        <div class="row">
            <span class="form-title" v-if="pageData[0].name" :class="darkTheme ? 'txtDark' : 'txtDay'">
                Vous êtes sur la page:
                <strong>{{ pageData[0].name }}.{{ pageData[0].lang }}</strong></span>
            <div class="bloc_thumb">
                <div class="bloc_img">

                    <template v-if="preview">
                        <!-- <p class="mb-0 img_preview">file name: {{ image.name }}</p> -->
                        <img :src="preview" class="img_thumb" />
                    </template>
                    <img v-else :src="pageData[0].imageUrl" alt="" class="img_thumb" />

                    <div class="bloc_btn_file">
                        <label for="image" class="btn_upload">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                                    <path
                                        d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
                                    </path>
                                </svg>
                            </figure>
                            <input class="btn_upload_file" type="file" name="image" id="image" ref="file"
                                @change="FileUpload" accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" />
                            <span class="fileName" v-if="fileName">{{ fileName }}</span>
                        </label>

                        <input type="button" name="retour" class="btn btn_del btn_all" value="Cancel"
                            @click="FileCancel()" />
                    </div>
                </div>
                <div class="bloc_text_thumb">
                    <h1 :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].title_1 }}</h1>
                    <input class="input_title" name="title" type="text" v-model="pageData[0].title_1"
                        placeholder="pageData[0].title_1" />
                    <span class="line"></span>
                    <div class="bloc_synopsis">
                        <h1 :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].subTitle_1 }}</h1>
                        <input class="input_title" name="subTitle" type="text" v-model="pageData[0].subTitle_1"
                            placeholder="pageData[0].subTitle_1" />
                        <div class="bloc_sinopsis_text">
                            <h3 class="title_sinopsis" :class="darkTheme ? 'txtDark' : 'txtDay'">Sinopsis</h3>
                            <textarea class="synopsisArea col-12" name="synopsis_1" id="" cols="30" rows="5"
                                v-model="pageData[0].synopsis_1"></textarea>
                            <label for="synopsis_2" class="label_area" :class="darkTheme ? 'txtDark' : 'txtDay'">Synopsis 2</label>
                            <textarea class="synopsisArea col-12" name="synopsis_2" id="" cols="30" rows="5"
                                v-model="pageData[0].synopsis_2"></textarea>
                        </div>
                    </div>
                    <div class="bloc_text_video">
                        <div class="fiches">
                            <div class="fiche_art fiche">
                                <h4 :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_0 }}</h4>
                                <input name="p_1" type="text" v-model="pageData[0].p_0" placeholder="pageData[0].p_0" />
                                <span>
                                    <input name="p_1" type="text" v-model="pageData[0].p_1" 
                                    placeholder="pageData[0].p_1" />
                                    <input name="p_1" type="text" v-model="pageData[0].p_2" 
                                    placeholder="pageData[0].p_2" />
                                </span>
                                <span>
                                    <input name="p_1" type="text" v-model="pageData[0].p_3" 
                                    placeholder="pageData[0].p_3" />

                                    <input name="p_1" type="text" v-model="pageData[0].p_4" 
                                    placeholder="pageData[0].p_4" />
                                </span>
                                <span>
                                    <input name="p_1" type="text" v-model="pageData[0].p_5"
                                     placeholder="pageData[0].p_5" />
                                    <input name="p_1" type="text" v-model="pageData[0].p_6" 
                                    placeholder="pageData[0].p_6" />
                                </span>
                                <span>
                                    <input name="p_1" type="text" v-model="pageData[0].p_7" 
                                    placeholder="pageData[0].p_7" />
                                    <input name="p_1" type="text" v-model="pageData[0].p_8" 
                                    placeholder="pageData[0].p_8" />
                                </span>
                                <span>
                                    <input name="p_1" type="text" v-model="pageData[0].p_9" 
                                    placeholder="pageData[0].p_9" />
                                    <input name="p_1" type="text" v-model="pageData[0].p_10"
                                        placeholder="pageData[0].p_10" />
                                </span>
                                <span>
                                    <input name="p_1" type="text" v-model="pageData[0].p_11"
                                        placeholder="pageData[0].p_11" />
                                    <input name="p_1" type="text" v-model="pageData[0].p_12"
                                        placeholder="pageData[0].p_12" />
                                </span>
                                <span>
                                    <input name="p_1" type="text" v-model="pageData[0].p_13"
                                        placeholder="pageData[0].p_13" />
                                    <input name="p_1" type="text" v-model="pageData[0].p_14"
                                        placeholder="pageData[0].p_14" />

                                    <input name="p_1" type="text" v-model="pageData[0].p_15"
                                        placeholder="pageData[0].p_15" />
                                    <input name="p_1" type="text" v-model="pageData[0].p_16"
                                        placeholder="pageData[0].p_16" />
                                </span>
                            </div>
                            <div class="info_basic fiche">
                                <h4 :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].p_17 }}</h4>
                                <input name="p_1" type="text" v-model="pageData[0].p_17" 
                                placeholder="pageData[0].p_17" />
                                <input name="p_1" type="text" v-model="pageData[0].p_18" 
                                placeholder="pageData[0].p_18" />
                                <input name="p_1" type="text" v-model="pageData[0].p_19" 
                                placeholder="pageData[0].p_19" />
                                <input name="p_1" type="text" v-model="pageData[0].p_20" 
                                placeholder="pageData[0].p_20" />
                                <input name="p_1" type="text" v-model="pageData[0].p_21" 
                                placeholder="pageData[0].p_21" />
                            </div>
                        </div>
                        <div class="bloc_video">
                            <div class="video">
                                <!-- <iframe src="https://player.vimeo.com/video/373748069?h=6c3a2ef9d5" width="620" height="460"
                                frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                                allowfullscreen></iframe> -->

                                <iframe :src="pageData[0].linkVideo" width="620" height="460" frameborder="0"
                                    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

                                <!-- <p><a href="https://vimeo.com/373748069">EL GRAN CABARET ELVIRA_MARTA RENYER</a> from <a
                                    href="https://vimeo.com/martaaa">MartaRenyer</a> on <a
                                    href="https://vimeo.com">Vimeo</a>.</p> -->
                                <p class="linkVideo" :class="darkTheme ? 'txtDark' : 'txtDay'">{{ pageData[0].linkVideo }}</p>
                                <label for="linkVideo" class="link_video">
                                    <input type="text" name="linkVideo" v-model="pageData[0].linkVideo" />
                                </label>
                            </div>
                            <button>{{ pageData[0].file }}</button>
                        </div>
                    </div>
                    <div class="btn_action">
                        <div class="btn_update">
                            <label for="submit"></label>
                            <input type="button" name="submit" class="btn btn_up btn_all" keyUp="enter" value="Update"
                                @click="updatePage(pageData[0]._id)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Compressor from "compressorjs";

export default {
    name: "Elvira",
    data() {
        return {
            background: "",
            navbarOk: false,
            fileName: "",
            preview: "",
            fileSelected: "",
        };
    },
    
    created: function () {
        // this.getNavData();
        // this.getPageData();
    },

    computed: {
        ...mapState({
            imgData: "imgData",
             pageData: "pageData",
            navData: "navData",
            darkTheme:"darkTheme"
        }),
        
    },
    components: {},
    methods: {
        async FileUpload(event) {
            let that = this;
            let inp = document.querySelectorAll("input[type=file]");

            // let inp1 = document.querySelector('input[type=file]').files[0];

            let iR = inp.forEach((input, index) => {
                let files = input.files[0];

                if (files) {
                    this.inputSelected = index;
                }
            });

            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                };
                this.image = input.files[0];
                reader.readAsDataURL(input.files[0]);
            }

            // ************ DONE **********************************

            let File = event.target.files[0];
            this.fileName = File.name;

            new Compressor(File, {
                quality: 0.6,
                success(result) {
                    console.log("SUCCESS COMPRESSOR", result);
                    that.fileSelected = result;
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
            console.log(
                "CANCEL FILE IMAGE SELECTED",
                this.fileSelected,
                this.fileName
            );
        },

        changeWidth(event) {
            // this.background = this.pageData[0].imageUrl;
            // console.log("CHANGE WIDTH", this.background);
        },

        // async getPageData() {
        //     const n = "elvira";
        //     this.$store.dispatch("getPageData", n).then((res) => {
        //         if (res) {
        //             console.log("RESPONSE GETPAGEDATA");
        //        }
        //     });
            
        // },
        // getNavData() {
        //     const n = "navbar";
        //     this.$store.dispatch("getNavData", n).then((res) => {
        //         if (res) {
        //             this.navbarOk = true;
        //         }
        //     });
        //     console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
        // },

        updatePage(p) {
            let file = this.fileSelected;
            let bodyFormData = new FormData();

            if (this.fileSelected) {
                bodyFormData.append("image", this.fileSelected, this.fileSelected.name);
                bodyFormData.append("id", this.pageData[0]._id);
                bodyFormData.append("name", this.pageData[0].name);
                bodyFormData.append("title_1", this.pageData[0].title_1);
                bodyFormData.append("subTitle_1", this.pageData[0].subTitle_1);
                bodyFormData.append(
                    "color_subTitle_1",
                    this.pageData[0].color_subTitle_1
                );
                bodyFormData.append("color_title_1", this.pageData[0].color_title_1);
                bodyFormData.append("title_2", this.pageData[0].title_2);
                bodyFormData.append("color_title_2", this.pageData[0].color_title_2);
                bodyFormData.append("subTitle_2", this.pageData[0].subTitle_2);
                bodyFormData.append(
                    "color_subTitle_2",
                    this.pageData[0].color_subTitle_2
                );
                bodyFormData.append("synopsis_1", this.pageData[0].synopsis_1);
                bodyFormData.append("synopsis_2", this.pageData[0].synopsis_2);
                bodyFormData.append("linkVideo", this.pageData[0].linkVideo);

                bodyFormData.append("p_0", this.pageData[0].p_0);
                bodyFormData.append("p_1", this.pageData[0].p_1);
                bodyFormData.append("p_2", this.pageData[0].p_2);
                bodyFormData.append("p_3", this.pageData[0].p_3);
                bodyFormData.append("p_4", this.pageData[0].p_4);
                bodyFormData.append("p_5", this.pageData[0].p_5);
                bodyFormData.append("p_6", this.pageData[0].p_6);
                bodyFormData.append("p_7", this.pageData[0].p_7);
                bodyFormData.append("p_8", this.pageData[0].p_8);
                bodyFormData.append("p_9", this.pageData[0].p_9);
                bodyFormData.append("p_10", this.pageData[0].p_10);
                bodyFormData.append("p_11", this.pageData[0].p_11);
                bodyFormData.append("p_12", this.pageData[0].p_12);
                bodyFormData.append("p_13", this.pageData[0].p_13);
                bodyFormData.append("p_14", this.pageData[0].p_14);
                bodyFormData.append("p_15", this.pageData[0].p_15);
                bodyFormData.append("p_16", this.pageData[0].p_16);
                bodyFormData.append("p_17", this.pageData[0].p_17);
                bodyFormData.append("p_18", this.pageData[0].p_18);
                bodyFormData.append("p_19", this.pageData[0].p_19);
                bodyFormData.append("p_20", this.pageData[0].p_20);
                bodyFormData.append("p_21", this.pageData[0].p_21);
            } else {
                bodyFormData.append("id", this.pageData[0]._id);
                bodyFormData.append("name", this.pageData[0].name);
                bodyFormData.append("title_1", this.pageData[0].title_1);
                bodyFormData.append("subTitle_1", this.pageData[0].subTitle_1);
                bodyFormData.append(
                    "color_subTitle_1",
                    this.pageData[0].color_subTitle_1
                );
                bodyFormData.append("color_title_1", this.pageData[0].color_title_1);
                bodyFormData.append("title_2", this.pageData[0].title_2);
                bodyFormData.append("color_title_2", this.pageData[0].color_title_2);
                bodyFormData.append("subTitle_2", this.pageData[0].subTitle_2);
                bodyFormData.append(
                    "color_subTitle_2",
                    this.pageData[0].color_subTitle_2
                );
                bodyFormData.append("synopsis_1", this.pageData[0].synopsis_1);
                bodyFormData.append("synopsis_2", this.pageData[0].synopsis_2);
                bodyFormData.append("linkVideo", this.pageData[0].linkVideo);
                bodyFormData.append("p_0", this.pageData[0].p_0);
                bodyFormData.append("p_1", this.pageData[0].p_1);
                bodyFormData.append("p_2", this.pageData[0].p_2);
                bodyFormData.append("p_3", this.pageData[0].p_3);
                bodyFormData.append("p_4", this.pageData[0].p_4);
                bodyFormData.append("p_5", this.pageData[0].p_5);
                bodyFormData.append("p_6", this.pageData[0].p_6);
                bodyFormData.append("p_7", this.pageData[0].p_7);
                bodyFormData.append("p_8", this.pageData[0].p_8);
                bodyFormData.append("p_9", this.pageData[0].p_9);
                bodyFormData.append("p_10", this.pageData[0].p_10);
                bodyFormData.append("p_11", this.pageData[0].p_11);
                bodyFormData.append("p_12", this.pageData[0].p_12);
                bodyFormData.append("p_13", this.pageData[0].p_13);
                bodyFormData.append("p_14", this.pageData[0].p_14);
                bodyFormData.append("p_15", this.pageData[0].p_15);
                bodyFormData.append("p_16", this.pageData[0].p_16);
                bodyFormData.append("p_17", this.pageData[0].p_17);
                bodyFormData.append("p_18", this.pageData[0].p_18);
                bodyFormData.append("p_19", this.pageData[0].p_19);
                bodyFormData.append("p_20", this.pageData[0].p_20);
                bodyFormData.append("p_21", this.pageData[0].p_21);
            }

            this.$store
                .dispatch("updatePage", {
                    data: bodyFormData,
                    // page: `${process.env.VUE_APP_PAGE1_NAME}`
                    page: "elvira",
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
    },
};
</script>

<style scoped>
@import url("../styles/bloc_nav.css");
@import url("../styles/font.css");
@import url("../styles/btn.css");
@import url("../styles/theme.css");

*,
::after,
::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.master {
    position: relative;
}
textarea{
    padding:5px;
}
.bloc_nav {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 1230;
}

.bloc_thumb {
    margin: 30px auto;
}

.bloc_btn_file {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.linkVideo {
    padding: 0;
    margin: 0;
}

.bloc_text_video {
    display: flex;
    flex-direction: column-reverse;
}

.input_title {
    width: 250px;
}

.fiches {
    display: flex;
    flex-direction: column-reverse;
}

.fiche {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
}
.fiche >input {
    margin:5px auto
}
.fiche>span {
    margin: 10px auto;
}

span>input {
    width: 80%;
    margin: 3px auto;
}

.img_thumb {
    width: 300px;
    height: auto;
    margin-bottom: 30px;
    margin:20px auto
}

h1 {
    margin-top: 25px;
    font-size: 24px;
}

h2 {
    font-size: 18px;
    margin: 30px auto 20px;
}

p {
    text-align: justify;
    text-indent: 30px;
    padding: 20px;
    line-height: auto;
}

.title_sinopsis {
    margin: 10px auto;
    padding-bottom: 0;
    text-decoration: underline;
    font-weight: 800;
    font-size: 15px;
    text-align: left;
    padding-left: 20px;
}

.sinopsis {
    padding-top: 0;
}

h4 {
    margin: 20px auto 10px;
}

.fiches>div>p {
    text-align: center;
    padding: 5px 15px;
    text-indent: 0px;
}

/* .video{
    width:320px;
    height:260px;
    margin:0 auto;
   
} */

iframe {
    width: 100%;
    height: 260px;
    margin: 0 auto;
    padding-top: -260px;
}

@media screen and (min-width: 576px) {
    .container {
        margin: 0 auto;
    }

    .bloc_thumb {
        margin: 10px auto 20px;
    }

    .bloc_img {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 60%;
        margin: 0 auto;
    }

    h1 {
        margin: 20px;
    }

    .img_thumb {
       
        margin: 0 auto;
        object-fit: cover;
     
    }
}

@media screen and (min-width: 768px) and (max-height: 500px) {
     .bloc_img{
        flex-direction: row;
     }
     .bloc_btn_file{
flex-direction: column;
     }
    .bloc_nav {
        position: fixed;
        margin: 0 auto;
        top: 0px;
        left: 20px;
    }

    .bloc_thumb {
        margin-top: 30vh;
    }

    .bloc_video {
        margin-top: 20px;
    }

    .fiches {
        flex-direction: row-reverse;
    }
}

@media screen and (min-width: 768px) and (min-height: 1000px) {
    .bloc_img {
        flex-direction: row;
        width: 90%;
        margin: 0 auto;
    }

    .img_thumb {
        
        height: auto;
        margin: 0 auto;
        object-fit: cover;
        object-position: center;
    }

    .bloc_sinopsis_text {
        width: 80%;
        margin: 30px auto;
    }

    .fiches {
        flex-direction: row-reverse;
    }

    .bloc_video {
        margin: 30px 0;
    }
}

@media screen and (min-width: 992px) and (max-height: 650px) {
    .fiches {
        flex-direction: row-reverse;
    }
    .bloc_btn_file{
flex-direction: column;
     }
    .bloc_sinopsis_text {
        width: 70%;
        margin: 30px auto;
    }
}

@media screen and (min-width: 992px) and (max-height: 768px) {
    .bloc_img {
        flex-direction: row;
        width: 90%;
        height:auto;
        margin: 0 auto;
    }
    .img_thumb {
        margin:auto
    }
    .bloc_thumb {
        width:80%;
        margin-top: 70px;
        align-items: center;
    }
    .img_bloc{
        height: auto;
        display: flex;
        flex-direction: column;
      justify-content: center;
        align-items: center;
    }

    .fiches {
        flex-direction: row-reverse;
    }

    .bloc_sinopsis_text {
        width: 70%;
        margin: 30px auto;
    }

    .bloc_text_video {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-evenly;
    }

    .bloc_video {
        width: 33%;
    }
}

@media screen and (min-width: 1140px) and (max-height: 1000px) {
    .fiches {
        flex-direction: row-reverse;
    }
}

@media screen and (min-width: 1200px) {
    h1 {
        margin: 50px auto;
        font-size: 40px;
    }

    .bloc_text_video {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-evenly;
        width: 100%;
    }

    .bloc_video {
        width: 33%;
    }

    .fiches {
        flex-direction: row-reverse;
    }

    .bloc_sinopsis_text {
        width: 70%;
        margin: 30px auto;
    }
}
</style>
