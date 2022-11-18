<template>
    <div class="fond">

        <div class="container text-center">
            <div class="row bloc_thumb">


                <div class=" col-6 left-bloc">
                    <div class="title_name item1">
                        <h1> Marta Renyer
                        </h1>
                    </div>
                    <div class="subTitle_name item2">
                        <p> The life is a clown party</p>
                    </div>
                    <div class="line item3"></div>
                    <nav>
                        <ul class="list_nav item4">
                            <li class="list_item">
                                <router-link to="/portada">Home</router-link>
                            </li>
                            <li class="list_item">
                                <router-link to="/accueil">Espectacle</router-link>
                            </li>
                            <li class="list_item">
                                <router-link to="/accueil">Qui soc</router-link>
                            </li>
                            <li class="list_item">
                                <router-link to="/login">Admin</router-link>
                            </li>
                            <li class="list_item">
                                <router-link to="/cal">Calendar</router-link>
                            </li>


                        </ul>
                    </nav>

                </div>


                <div class="col-6 right_bloc">
                    <div class="img_back ">
                        <img src="../assets/images/mg_9636-2-2.jpg" alt="">
                    </div>
                </div>


                <div class="copyright">
                    <a href="#">@j'veuxecrireautablo.fr</a>
                   
                </div>

            </div>


        </div>


    </div>
</template>

<script>



export default {
    name: "portada",

    data: function () {
        return {

        }

    }
}
</script>

<style scoped>
a {
    color: aliceblue;
    text-decoration: none;

}

.fond {
    background: #000;
    width: 100%;
    height: 1000px;
}

body {
    background-image: url("../assets/images/mg_9636-2-2.jpg");
    background-repeat: no-repeat;
}

.container {
    /* background-image: url("../assets/images/mg_9636-2-2.jpg"); */

}

.copyright {
    color: white;
    
    text-align: right;
}

.img_back {
    /* background-image: url("../assets/images/mg_9636-2-2.jpg");
    background-repeat: no-repeat; */
    width: 100%;
    height: auto;
    margin-top: 0;
    margin-right: 0;
}

ul {
    list-style-type: none;
    margin-top: 1rem;
}

li {
    list-style-type: none;
}

.list_nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    justify-content: space-around;

}

.left-bloc {
    text-align: center;
    align-items: center;
    color: white
}

.bloc_thumb {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.line {
    width: 60%;
    border: solid 2px blue;
    margin: 0 auto;
    animation-name: item3;
    animation-duration: .6s;
}

.item1 {
    animation-name: item1;
    animation-duration: .6s;
}
.item2 {
    animation-name: item2;
    animation-duration: .6s;
}
.item4 {
    animation-name: item4;
    animation-duration: .6s;
}



@keyframes item1 {
    0% {
        transform: translateY(70px);
        opacity: 0;
    }

    100% {
        transform: translateY(0px);
        opacity: 1;
    }
}
@keyframes item2 {
    0% {
        transform: translateY(35px);
        opacity: 0;
    }

    100% {
        transform: translateY(0px);
        opacity: 1;
    }
}

@keyframes item3 {
    from {
        width: 0
    }

    ;

    to {
        width: 100%
    }
}

@keyframes item4 {
    0% {
        transform: translateY(-35px);
        opacity: 0;
    }

    100% {
        transform: translateY(0px);
        opacity: 1;
    }
}
</style>