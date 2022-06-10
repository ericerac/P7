<template>

    <div class="container pt-2 pb-2 
     d-flex justify-content-center align-items-center">

        <div class="row col-12 col-lg-10 col-xl-10">

            <div class="card  ">
                <div class=" col-md-12 mt-2 text-center">
                    <div class="user text-center">

                    </div>
                    <div class="user text-left">


                        <div class="upper">
                            <div class="profile">
                                <img id="userImg" src="../assets/icon.svg " class="rounded-circle" width="80"
                                    alt="logo groupomania" />

                                <!-- <img  id="userImg"  class="rounded-circle" width="80"
              alt="Photo de profil" /> -->

                            </div>
                        </div>


                        <ul class="list">
                            <li>Nom:{{UserData.firstName}}</li>
                            <li>Prénom:{{UserData.lastName}}</li>
                            <li>Inscrit depuis le:{{dateTime(UserData.createdAt)}}</li>
                            <!-- <li>article publié:{{UserData.article.length}}</li>  -->
                             <li>articles publiés:{{}}</li>
                            <!-- <li>commentaire:{{UserData.comment.length}}</li> -->
                            <li>commentaires:{{}}</li>
                            <li>Dernière connection :{{}}</li>

                        </ul>
                    </div>

                </div>

<div class="button">
                <span>
                    <button  @click="delUser(UserData.id)"  class="btn btn-danger btn-sm follow mt-0">
                        Supprimer ce compte
                    </button>
                    </span>
                    <span>
                    <button class="btn btn-primary btn-sm follow mt-0 " @click="CloseDetailUser">
                        Fermer
                    </button>
                </span>

</div>

            </div>


        </div>
    </div>

</template>


<script>
import { mapState } from 'vuex'
 import moment from "moment";


export default {

    name: "detailUserVue",

methods: {
    CloseDetailUser(){
this.$store.dispatch("CloseDetailUser")
    },

    dateTime(value) {
      return moment(value).format("DD-MM-YYYY à HH-mm");
    },

    delUser(user){
this.$store.dispatch("deleteUser",user)
    }

},
computed:{
    ...mapState({

 UserData: "userData",
    })
}
}

</script>

<style scoped>
body {
    background-color: #545454;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
}

#app {
    background-image: url("../assets/fondNavRed.png");
    background-repeat: repeat;
    background-position: center;
    background-attachment: fixed;

}


.container {
    height: auto;
   
}

.container {
    background-color: rgb(252, 217, 164);
    max-width: 1200px;

}





.card {
    /* width: 380px; */
    border: none;
    border-radius: 15px;
    padding: 8px;
    background-color: #fff;
    position: relative;
    height: auto;

}

.upper {
    height: 70px;
}



.user {
    position: relative;
}

.profile img {
    height: 80px;
    width: 80px;
    margin: 2px auto;
}

.profile {

    height: 90px;
    width: 90px;
    border: 3px solid #fff;
    margin: 2px auto;

    border-radius: 50%;
}

.avis-media {

    width: 100%;

    text-align: center;

}

.follow {
    border-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    height: 35px;
}

ul {
    padding-left: 0;
}

ul li {
    text-align: left;
    list-style-type: none;
    margin-left: 2rem;
    font-size: 1rem;
    margin-top: 1rem;

}
.button{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>