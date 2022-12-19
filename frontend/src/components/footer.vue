<template>
  <div class="container-fluid">
<div class="row col-12">
<div class="foot justify-content-around mb-2">
    <div ><img class="logo col-2 " src="../assets/logo/marta_renyer_transp_blanc-1.png" alt="logo"></div>
    <div class="listes col-10">
    <div class="list col-12">
        <ul>
            <li class="col-4">Écris moi</li>
            <li class="col-4">Appelle moi</li>
            <li class="col-4">Suis moi</li>
        </ul>
    </div>
    <div class=" contact col-12">
        <ul>
            <li class="col-4">info@martarenyer.com</li>
            <li class="col-4">+34 628920670</li>
            <ul class="col-4 justify-content-center social_media">
            <li class="col-3 social"><a href="https://www.facebook.com/CiaMartaRenyer/"  title="Suivez sur Facebook" target="_blank"><img class="icon " src="../assets/logo/facebook_White.png" alt=""></a></li>
            <li class="col-3 social"><a href="https://www.instagram.com/martarenyer/"  title="Suivez sur Instagram" target="_blank"><img class="icon " src="../assets/logo/instagram_white.png" alt=""></a></li>
            <li class="col-3 social"><a href="https://vimeo.com/335715002?utm_source=email&amp;utm_medium=vimeo-cliptranscode-201504&amp;utm_campaign=28749"  title="Suivez sur Vimeo" target="_blank"><img class="icon " src="../assets/logo/vimeo_white.png" alt=""></a></li>
            
        </ul>
        </ul>
    </div>
</div>
</div>

</div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.foot{
    background-color: rgb(250, 8, 8);
    width: 100%;
    height: 100px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display:flex;
    flex-direction: row;
    align-items: center;
    color:white;

}
.logo{
width: 60px;
height: 60px;

}
ul{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
}
.listes{
    display: block;
}
.list{
    font-size: 22px;
    font-weight: 600;
}
.icon{
    width: 30px;
    height: 30px;
}
@media screen and (max-width:576px){
.list{display:none}
.contact{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
ul {
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: flex-end;
}
li{
    width: 100%;
}
.social_media{
    flex-direction: row;
   justify-content: center;  
}
.social{
    width: 30%;
}
}


</style>