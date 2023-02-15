<template>
    <div class="container">
        <div class="row ">
            <div class="bloc_post">
                <div class="bloc_img_text">

                    <div class="img_ulpoaded">


                        <template v-if="preview">
                            <!-- <p class="mb-0 img_preview">file name: {{ image.name }}</p> -->
                            <img :src="preview" class="img_previewed" />


                        </template>
                        <span class="fileName"> {{ this.fileName }}</span>

                    </div>
                    <div class="bloc_btn_img">
                        <div class="btn_up">
                            <label for="image" class="btn_upload">
                                <input type="file" name="image" id="image" ref="file" @change="FileUpload"
                                    accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" hidden />Upload
                                image
                            </label>

                        </div>
                        <div class="btn_cancel"  @click="cancelFileSelected()">

                           Cancel
                        </div>
                    </div>

                    <div class="bloc_text">
                        <div class="title">
                            <label for="title">Titùl
                                <input class="input_title" name="title" type="text" v-model="Title"
                                    placeholder="Titúl" />
                            </label>
                        </div>

                        <div>
                            <label for="p1" class="label_area">Paragraphe 1</label>
                            <textarea rows="6" cols="50" name="p1" type="text" class="description_bio" v-model="Texte1"
                                placeholder="texte...">
                         </textarea>
                        </div>

                    </div>
                </div>
                <div class="btn_Publish">
                <button @click="sendPost()">Publish</button>
                <button @click="$emit('changeCompo')">Cancel</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

import fileUpload from "../js/fileUpload.js";

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
            fileSelected:"",
            OnefileSelected:"",

        }
    },
    computed: {
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
            console.log("EVENT ",event);
          
            // const data = await fileUpload(event)
            // console.log("RESPONSE DU MODULE POST PAGE", data.fileSelected.name);
            // this.fileSelected = data.fileSelected;
            // this.fileName = data.fileSelected.name;
            // this.OnefileSelected = data.fileSelected.name;
            // const fileBlobPreview = data.fileSelected.filePreview;
            // console.log("PREVIEW POST PAGE",data.fileSelected.filePreview);
            // this.preview = fileBlobPreview;
        
        

            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                }
                this.image = input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
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
                this.fileName,
                this.preview = null
            );
        },


        sendPost(x) {
            let bodyFormData = new FormData();


            let file = this.fileSelected;

            console.log("file ---->", file);


          
    if(!this.fileSelected && !this.Texte1 && !this.Title ){
        alert("Un post vide n'a pas beaucoup d'intéret, non?")
        return
   }
  else{}



if(!this.Title ){
   const pub =  window.confirm("il vous manque un titre ! Publier sans le titre")
   if(pub){
    this.$store
                .dispatch("createPost", 
                    bodyFormData,
                )
   }
   else{ return}
}
if(!this.Texte1 ){
   const pub =  window.confirm("Il n'y a pas de texte ? ! Publier sans texte")
   if(pub){
    this.$store
                .dispatch("createPost", 
                    bodyFormData,
                )
   }
   else{return}
}
if(!this.fileSelected ){
   const pub =  window.confirm("Il n'y a pas d'image' ? ! Publier sans image")
   if(pub){
    this.$store
                .dispatch("createPost", 
                    bodyFormData,
                )
   }
   else{return}
}


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

            //             console.log("BODY FORM DATA CALUPDATE", bodyFormData.entries());
            //             for(var pair of bodyFormData.entries()) {
            //    console.log(pair[0]+ ', '+ pair[1]);
            // }

            this.$store
                .dispatch("createPost", 
                    bodyFormData,
                )

                .then((response) => {
                    if (response.status == 200) {
                        console.log("RESPONSE BLOG POST SEND 2", response);
                        //     location.reload();
                        file = null;
                    }
                })
                .catch((response) => { });
        },
    },
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
    width:100%
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

.bloc_img_text {
    position: relative;
    width: 100%;
    height: 60vh;
    min-height: 500px;
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

    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.btn_up,.btn_cancel {
    background-color: rgb(255, 147, 39);
    width: 45%;
    border-radius: 10px;
    height: 90%;
    line-height: 35px;
}

.img_ulpoaded {
    position: absolute;
    width: 100%;
    height: 200px;
    top: 0;
    left: 0;
    right: 0;
    object-fit: contain;
    overflow: hidden;
    padding-top:10px
    /* border: 1px solid violet */
}
.fileName{
    position:absolute;
    top:10px;
    left:10px;
    background: rgb(10,10,10);
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
.btn_Publish{
    width:80%;
    margin:0 auto;
    box-shadow: 2px 2px 10px;
}
.btn_Publish > button{
    width:70px;
    padding:5px;
    border:none;
    border-radius: 5px;
    box-shadow: 2px 2px 10px;
    box-shadow: 2px 2px 10px white;


}
</style>