<template>
    <div class="container-fluid bloc_total">
        <div class="BackGround " :class="{ backFoot: dark }" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150"
                preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C182.28,130.77 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style="stroke: none; fill: rgb(145,1,1);"></path>
            </svg>
            <div class="row col-12">
                <div class="foot justify-content-around mb-2">
                    <div class="col-2"><img class="logo  " src="../assets/logo/marta_renyer_transp_blanc-1_70_42.png"
                            alt="logo"></div>
                    <div class="listes col-10">
                        <!-- <div class="list col-12">
        <ul>
            <li class="col-4">Écris moi</li>
            <li class="col-4">Appelle moi</li>
            <li class="col-4">Suis moi</li>
        </ul>
    </div> -->
                        <div class=" contact col-12">
                            
                                <ul class="col-4 justify-content-center social_media">
                                    <li class="col-2 social"><a href="https://www.facebook.com/CiaMartaRenyer/"
                                            title="Suivez sur Facebook" target="_blank"><img class="icon "
                                                src="../assets/logo/facebook_White.png" alt=""></a></li>
                                    <li class="col-2 social"><a href="https://www.instagram.com/martarenyer/"
                                            title="Suivez sur Instagram" target="_blank"><img class="icon "
                                                src="../assets/logo/instagram_white.png" alt=""></a></li>
                                    <li class="col-2 social"><a
                                            href="https://vimeo.com/335715002?utm_source=email&amp;utm_medium=vimeo-cliptranscode-201504&amp;utm_campaign=28749"
                                            title="Suivez sur Vimeo" target="_blank"><img class="icon "
                                                src="../assets/logo/vimeo_white.png" alt=""></a></li>

                                </ul>
                                <div class="copyright">
          <router-link to="/login" target="_blank"><span class="text txtDark" :class="{ txtDark: dark }">@WistitiWeb.com</span></router-link>

        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"footer",
    props: {
    
    dark: {
      type:Boolean,
      required: true,}
  },

}
</script>

<style scoped>
.foot {
    position: absolute;
    bottom:10px;
    left:0;
    right:0;
    width: 100%;
   
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    /* border-top: 1px solid white; */
    margin: 0 auto;
    
}

.BackGround {
    width: 100%;
    position:relative;
}
.backFoot{
    background:transparent;
}
.bloc_total {
    position:relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding:0;
}
.copyright{
position:absolute;
bottom:-17px;
right:5px;
color:white;
}
.logo {
    width: 50px;
    height: 50px;
}

ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
}

.listes {
    display: block;
}

.list {
    font-size: 22px;
    font-weight: 600;
}

.list_foot {
    letter-spacing: 2px;
    color: red;

}

.icon {
    width: 30px;
    height: 30px;
}

@media screen and (max-width:576px) {
    .list {
        display: none
    }

    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
    }

    li {
        width: 100%;
        font-size: 16px;
        margin: 0;
    }

    .social_media {
        flex-direction: row;
        justify-content: center;
        padding-bottom: 5px;
    }

    .social {
        width: 30%;

    }

    .icon {
        height: 20px;
        width: 20px;
    }

}
</style>