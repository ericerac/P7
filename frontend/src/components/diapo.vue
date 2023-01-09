<template>
    <div class="carousel">

        <div class="bloc_diapo carousel-inner">
            <caousel-item  v-for="(img, index ) in imgData" :slide="img" :key="`item-${index}`" ></caousel-item>
        </div>
</div>
</template>

<script>
import diapoItem from "@/components/diapoItem.vue"

export default {
    
props:['imgData'],

components:{
    diapoItem
},

}
</script>

<style>

</style>