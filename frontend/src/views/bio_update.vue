<template>
    <!-- <div class="bloc "> -->
        <div class="container p-0 text-center">

            <div class="container p-0 text-center">

               

                <div class="row ">
                    <span class="form-title">
            Vous êtes sur la page: <strong>{{ pageData[0].name }}.{{ pageData[0].lang }}</strong></span>
                    <div class="header_bio">
                        <div class="bloc_header">
                            <img class="img" :src="pageData[0].imageUrl" alt="">
                        </div>
                    </div>
                    <label for="image1" class="btn_upload">
                <input type="file" name="image" id="image1" ref="file" @change="FileUpload"
                  accept="image/png, image/jpeg, image/jpg" hidden/> Choisir une image : {{OnefileSelected}}</label>
                </div>

                <div class="row col-12">

                    <div class="bloc_left m-2 col-12 text-center ">
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
                     
                            <button @click="updateBio(pageData[0]._id)">Update</button>
                            
                        
                      
                    </div>



                </div>

            </div>
        </div>
    <!-- </div> -->
</template>

<script>

import { mapState } from 'vuex';
export default {
    name: "ad1920384756ytrdehdk",
    data: function () {
        return {
            OnefileSelected:"OnefileSelected"
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
            this.OnefileSelected = this.fileSelected.name
        },

        getPageData() {
            const n = "bio";
            this.$store.dispatch("getPageData", n)
                .then((res) => {
                    if (res) {
                        console.log("RES GET BIO", res.data[0].name);
                        let p = res.data[0].name
                        this.$store.dispatch("getImgData", p)
                    }
                });
            console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
        },
    

change(x){
    console.log("CHANGE BUTTON",x);
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
},
}
</script>

<style scoped>
.img {
    width: 200px;
    height: auto;
}

textarea {
    width: 400px;
    margin: 10px auto 2rem;

}

.bloc_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.btn_upload{
    width: auto;
    margin: 20px auto;
    border: 1px solid black;
    border-radius: 5px;
}
.label_area{
  
}
@media screen and (max-width:576px) {
    textarea{

        width:100%;
    }

    
}
</style>