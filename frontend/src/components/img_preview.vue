<template>
    <div class="img_prev">
        {{Preview_imgUrl}}
    </div>
</template>

<style scoped>
.img_prev{
    width: max-content;
    height: auto;
    margin: 50vw 50vh;

}
</style>



<script>

import { mapState } from "vuex";


export default {
name: "view_img",
computed: {
        ...mapState({
            modal: "modal",
            modalMessage: "modalMessage",
            pageData: "pageData",
        }),
    },
}

</script>