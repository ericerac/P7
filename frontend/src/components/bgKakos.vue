<template>
    <div class="bg">
        <!-- <img src="../assets/images/KAKOS_SUPREMA_1794_1376_opacicity.jpeg" alt="" class="bgImg"> -->
    </div>
</template>
<style scoped>


.bg{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    width:100%;
    height: 100%;
    background-image: url("../assets/images/KAKOS_SUPREMA_1794_1376_opacicity.webp");
    background-repeat: repeat;
    background-size: contain;
   
    opacity:.5;
}


@media screen and (min-width:1440px) {
    .bg{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    width:100vw;
    height:100%;
    opacity:.5;
}
}
</style>