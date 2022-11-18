<template >
    <div>
    <div class="container bloc">
        <div class="row col-12">
            <div class="nav-bar">
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
        </div>
        <div class="row col-12 line justify-content-around ">

            <div class="col-6 caption overflow-hidden">
                <img src="../assets/images/1.jpg" class="image-fluid rounded" alt="">

                <div class="txt">
                    <span>Bus dans les arbres</span>
                    <span>credit:jonejon</span>
                </div>
            </div>
            <div class="col-6 caption overflow-hidden">
                <img src="../assets/images/2.jpg" class="image-fluid rounded" alt="">

                <div class="txt">
                    <span>Bus dans les arbres</span>
                    <span>credit:jonejon</span>
                </div>
            </div>
            <div class="col-6 caption overflow-hidden">
                <img src="../assets/images/3.jpg" class="image-fluid rounded" alt="">

                <div class="txt">
                    <span>Bus dans les arbres</span>
                    <span>credit:jonejon</span>
                </div>
            </div>
            <div class="col-6 caption overflow-hidden">
                <img src="../assets/images/4.jpg" class="image-fluid rounded" alt="">
                <div class="txt">
                    <span>Bus dans les arbres</span>
                    <span>credit:jonejon</span>
                </div>
            </div>
            <div class="col-6 caption overflow-hidden">
                <img src="../assets/images/4.jpg" class="image-fluid rounded" alt="">
                <div class="txt">
                    <span>Bus dans les arbres</span>
                    <span>credit:jonejon</span>
                </div>
            </div>
            <div class="col-6 caption overflow-hidden">
                <img src="../assets/images/4.jpg" class="image-fluid rounded" alt="">
                <div class="txt">
                    <span>Bus dans les arbres</span>
                    <span>credit:jonejon</span>
                </div>
            </div>

        </div>

    </div>
    <div class="container">
    <!-- Gallery -->
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
<!-- Gallery -->
    </div>
</div>
</template>

<script>

export default {
    name: "galerie",

    data: function () {
        return {

        }
    },
}
</script>

<style scoped>
.container {
    background-color: transparent;
    height: 1000px;
}

.caption {
    padding: 0;
    width: 19%;
    height: 200px;
    /* border: 2px solid blue; */
    object-fit: cover;
    position: relative;
}

img {
    width: 100%;
    height: 100%
}

.list_nav {
    display: flex;
    flex-direction: row;
    justify-content: ;
}

.txt {
    width: 100%;
    background-color: rgba(255, 255, 255, .3);
    position: absolute;
    bottom: 0px;
    left: 0;
    color: black;
}
</style>