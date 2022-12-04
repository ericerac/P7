<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-nou">
                    <div class="mod">
                        <!-- <img class="check" src="" alt="" /> -->
                        <h6>Succés</h6>
                        <div class="img_prev">
                            {{ Preview_imgUrl }}
                        </div>
                        <button @click="previewClose()">fermer</button>
                    </div>
                    <div class="close">
                        <img class="close-img" src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="img_prev">
        {{ Preview_imgUrl }}
    </div>
</template>

<style scoped>
.img_prev {
    width: max-content;
    height: auto;
    margin: 50vw 50vh;

}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}
</style>



<script>

import { mapState } from "vuex";


export default {
    name: "view_img",
    data: function () {
        return {
            pageName: "",
            home: false,
            datePicker: false,
            calUpdate: false,
            // preview_component:"",
            Preview_imgUrl: "",
        }
    },
prop:{
    preview_component:"",
},

    computed: {
        ...mapState({
            modal: "modal",
            modalMessage: "modalMessage",
            pageData: "pageData",
            preview_component: "preview_component",
        })
    },

    methods: {

        previewClose: function () {
           this.$store.dispatch("PreviewClose",false)
        }
    },
}


</script>