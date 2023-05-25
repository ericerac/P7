<template>
    <div class="container">
        <div class="row ">
            <div class="bloc_post">
                <div class="bloc_img_text">
<div class="prevSpace">
                    <div class="img_ulpoaded">

                        <template v-if="preview">
                            <!-- <p class="mb-0 img_preview">file name: {{ image.name }}</p> -->
                            <img :src="preview" class="img_previewed" />

                        </template>
                        <template v-if="postUpdate">
                            <!-- <p class="mb-0 img_preview">file name: {{ image.name }}</p> -->
                            <img :src="postSelected[0].imageUrl" class="img_previewed" />

                        </template>
                        <span class="fileName"> {{ this.fileName }}</span>
                    </div>
                    </div>
                    <div class="bloc_btn_img">
                        <div class="btn_upL btn_Publish">
                            <label for="image" class="">
                                <input type="file" name="image" id="image" ref="file" @change="FileUpload"
                                    accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" hidden />Upload
                                image
                            </label>

                        </div>
                        <div class="btn_cancel btn_Publish" @click="cancelFileSelected()">

                            Cancel
                        </div>
                    </div>

                    <div class="bloc_text" v-if="postUpdate">
                        <div class="title">
                            <label for="title">Titùl
                                <input class="input_title" name="title" type="text" v-model="postSelected[0].title_1" />
                            </label>
                        </div>

                        <div>
                            <label for="p1" class="label_area">Paragraphe 1</label>
                            <textarea rows="6" cols="50" name="p1" type="text" class="description_bio"
                                v-model="postSelected[0].p_1">
                                 </textarea>
                        </div>

                    </div>
                    <div class="bloc_text" v-else>
                        <div class="title">
                            <label for="title">Titùl
                                <input class="input_title" name="title" type="text" v-model="Title" placeholder="Titúl" />
                            </label>
                        </div>

                        <div>
                            <label for="p1" class="label_area">Paragraphe 1</label>
                            <textarea rows="6" cols="50" name="p1" type="text" class="description_bio" v-model="Texte1"
                                placeholder="texte...">
                                 </textarea>
                        </div>
                        <div class="title">
                            <label for="link">Link
                                <input class="input_title" name="link" type="text" v-model="Link" placeholder="Link" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="btn_Publish">
                    <button @click="updatePost(postSelected[0]._id)" v-if="postUpdate">Update</button>
                    <button @click="sendPost()" v-else>Publish</button>
                    <button @click="$emit('changeCompo')">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import fileUpload from "../js/fileUpload.js";
import { mapState } from "vuex";
import Compressor from 'compressorjs';
export default {
    data() {
        return {
            Texte1: "",
            Texte2: "",
            Texte3: "",
            Title: "",
            ColorTitle: "",
            subTitle: "",
            ColorSubTitle: "",
            Link: "",
            fileName: "",
            preview: null,
            image: null,
            fileSelected: "",
            OnefileSelected: "",
        }
    },
    computed: {
        ...mapState({
            postSelected: "postSelected",
            postUpdate: "postUpdate"
        }),
        //     previewImage:function(event) {
        //   var input = event.target;
        //   if (input.files) {
        //     console.log("INPUT FILE");
        //     var reader = new FileReader();
        //     reader.onload = (e) => {
        //       this.preview = e.target.result;
        //     }
        //     this.image=input.files[0];
        //     reader.readAsDataURL(input.files[0]);
        //   }
        // },
    },
    methods: {

        async FileUpload(event) {
      let that = this
      let inp = document.querySelectorAll('input[type=file]');

      // let inp1 = document.querySelector('input[type=file]').files[0];

      let iR = inp.forEach((input, index) => {
        let files = input.files[0];

        if (files) {
          this.inputSelected = index;
          console.log(" INPUT SELECTED", index);
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

      let File = event.target.files[0];
      this.fileName = File.name
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
      console.log("FILECANCEL");
    },

        filterInput(x) {

            if (!this.fileSelected && !this.Texte1 && !this.Title) {
                alert("Un post vide n'a pas beaucoup d'intéret, non?")
                return
            }
            else { }

            if (this.fileSelected && !this.Title && !this.Texte1) {
                const pub = window.confirm("il vous manque un titre et un texte! Publier également ?")
                if (pub) {
                    return
                }
                else { return }
            }

            if (!this.fileSelected && this.Title && !this.Texte1) {
                const pub = window.confirm("il vous manque une image et un texte! Publier également ?")
                if (pub) {
                    return
                }
                else { return }
            }
            if (!this.fileSelected && !this.Title && this.Texte1) {
                const pub = window.confirm("il vous manque une image et un titre! Publier que le texte ?")
                if (pub) {
                    return
                }
                else { return }
            }
            if (this.fileSelected && this.Title && !this.Texte1) {
                const pub = window.confirm("il vous manque  un texte! Publier sans le texte ?")
                if (pub) {
                    return
                }
                else { return }
            }

            if (this.fileSelected && !this.Title && this.Texte1) {
                const pub = window.confirm("il vous manque  un titre! Publier sans le titre ?")
                if (pub) {
                    return
                }
                else { return }
            }
            if (!this.fileSelected && this.Title && this.Texte1) {
                const pub = window.confirm("il vous manque  une image! Publier sans l'image' ?")
                if (pub) {
                    return
                }
                else { return }
            }

        },

        sendPost(x) {
            let bodyFormData = new FormData();
            let file = this.fileSelected;
            console.log("file ---->", file);
            const filter = this.filterInput()

            if (this.fileSelected) {
                bodyFormData.append("image", this.fileSelected, this.fileSelected.name);
                bodyFormData.append("title_1", this.Title);
                bodyFormData.append("color_title_1", this.ColorTitle);
                bodyFormData.append("subTitle_1", this.subTitle);
                bodyFormData.append("color_subTitle_1", this.ColorSubTitle);
                bodyFormData.append("p_1", this.Texte1);
                bodyFormData.append("p_2", this.Texte2);
                bodyFormData.append("p_3", this.Texte3);
                bodyFormData.append("link", this.Link);
                bodyFormData.append("name", "post");
            } else {
                bodyFormData.append("title_1", this.Title);
                bodyFormData.append("color_title_1", this.ColorTitle);
                bodyFormData.append("subTitle_1", this.subTitle);
                bodyFormData.append("color_subTitle_1", this.ColorSubTitle);
                bodyFormData.append("p_1", this.Texte1);
                bodyFormData.append("p_2", this.Texte2);
                bodyFormData.append("p_3", this.Texte3);
                bodyFormData.append("link", this.Link);
                bodyFormData.append("name", "post");
            }
            this.$store
                .dispatch("createPost",
                    bodyFormData,
                )
                .then((response) => {
                    if (response.status == 201) {
                        console.log("RESPONSE BLOG POST SEND 2", response);
                        file = null;
                        this.$emit('changeCompo');
                        location.reload();
                    }
                })
                .catch((response) => { });
        },

        updatePost() {
            let bodyFormData = new FormData();
            let file = this.fileSelected;
            // console.log("file ---->", file);

            if (this.fileSelected) {
                bodyFormData.append("image", this.fileSelected, this.fileSelected.name);
                bodyFormData.append("id", this.postSelected[0]._id);
                bodyFormData.append("title_1", this.postSelected[0].title_1);
                bodyFormData.append("color_title_1", this.ColorTitle);
                bodyFormData.append("subTitle_1", this.subTitle);
                bodyFormData.append("color_subTitle_1", this.ColorSubTitle);
                bodyFormData.append("p_1", this.postSelected[0].p_1);
                bodyFormData.append("p_2", this.Texte2);
                bodyFormData.append("p_3", this.Texte3);
                bodyFormData.append("link", this.Link);
                bodyFormData.append("name", "post");
            } else {
                bodyFormData.append("id", this.postSelected[0]._id);
                bodyFormData.append("title_1", this.postSelected[0].title_1);
                bodyFormData.append("color_title_1", this.ColorTitle);
                bodyFormData.append("subTitle_1", this.subTitle);
                bodyFormData.append("color_subTitle_1", this.ColorSubTitle);
                bodyFormData.append("p_1", this.postSelected[0].p_1);
                bodyFormData.append("p_2", this.Texte2);
                bodyFormData.append("p_3", this.Texte3);
                bodyFormData.append("link", this.Link);
                bodyFormData.append("name", "post");
            }
            //             console.log("BODY FORM DATA CALUPDATE", bodyFormData.entries());
            //             for(var pair of bodyFormData.entries()) {
            //    console.log(pair[0]+ ', '+ pair[1]);
            // }
            // const json = JSON.stringify(Object.fromEntries(bodyFormData));
            // console.log("FORMDATA",json);
            let data = {
                data: bodyFormData,
                page: "blog",
                lang: "cat",
                id: this.postSelected[0]._id
            }
            this.$store
                .dispatch("updatePage",
                    data
                )
                .then((response) => {
                    if (response.status == 200) {
                        console.log("RESPONSE BLOG POST SEND 2", response);
                        //     location.reload();
                        file = null;
                        this.$emit('changeCompo');
                    }
                })
                .catch((response) => { });
        },
    },// FIN ACTIONS

}
</script>

<style scoped>
button {
    margin: 20px
}

.container {
    /* background-color: black; */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100%
}

.bloc_post {
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    width: 350px;
    /* height: 100vh; */
    margin: 10px auto;
    background-color: rgba(1, 1, 1, 0.9);
    border-radius: 10px;
}

textarea {
    width: 90%
}

.img_preview {
    width: 90%;
    height: 200px;
    object-fit: contain;
    overflow: hidden;
}

.img_previewed {
    width: 90%;
    height: 200px;
}
.prevSpace{
    position: relative;
    width:100%;
    height:220px;
    border:1px solid blue;
}
.bloc_img_text {
    
    width: 100%;
    /* height: 60vh; */
    min-height: auto;
    margin-top: 0;
    /* border: 1px solid blue; */
    box-shadow: 2px 2px 10px white;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
}

.bloc_btn_img {
    width: 100%;
    height: 5vh;
    /* border: 1px solid red; */
    border-radius: 10px;

   
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.btn_upL,
.btn_cancel {
    background-color: rgb(255, 147, 39);
    width: 45%;
    border-radius: 10px;
    height: 90%;
    line-height: 35px;
}

.img_ulpoaded {
    position: absolute;
    width: 100%;
    height:auto;
    max-height: 200px;
    top: 0;
    left: 0;
    right: 0;
    object-fit: contain;
    overflow: hidden;
    padding-top: 10px
        /* border: 1px solid violet */
}

.fileName {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgb(10, 10, 10);
}

.bloc_text {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* border: 1px solid rgb(62, 17, 241); */
}

.bloc_text>div {
    margin: 10px
}

.btn_Publish {
    width: 80%;
    margin: 0 auto;
    box-shadow: 2px 2px 10px;
}

.btn_Publish>button {
    width: 70px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 10px;
    box-shadow: 2px 2px 10px white;


}
@media screen and (min-width:768px) and (max-height:500px) {
    .bloc_post{
        flex-direction: row;
        width:650px;
        margin:20px auto
    }
    .bloc_img_text {
        flex-direction: row;
    }
    .btn_Publish{
        width:50px
    }
    .bloc_btn_img{
        display:flex;
        flex-direction: column;
        width:100px;
        justify-content: space-around;
        height:100%
    }
    .btn_Publish>button{
        border:1px solid black;
       
    }
}
</style>