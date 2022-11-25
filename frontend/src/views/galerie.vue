<template >
  <div>
    <div class="container bloc">
      <div class="row col-12">
        <div class="nav-bar">
          <!-- <nav>
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
                    </nav> -->
          <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container-fluid">
              <!-- Navbar brand -->

              <!-- LOGO -->
              <!-- <a class="navbar-brand" target="_blank" href="https://mdbootstrap.com/docs/standard/">
                                <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="16"
                                    alt="" loading="lazy" style="margin-top: -3px;" />
                            </a> -->
              <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarExample01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item active">
                    <a class="nav-link" aria-current="page" href="#intro"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                      rel="nofollow"
                      target="_blank"
                      >Learn Bootstrap 5</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://mdbootstrap.com/docs/standard/"
                      target="_blank"
                      >Download MDB UI KIT</a
                    >
                  </li>
                </ul>

                <ul class="navbar-nav d-flex flex-row">
                  <!-- Icons -->
                  <li class="nav-item me-3 me-lg-0">
                    <a
                      class="nav-link"
                      href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li class="nav-item me-3 me-lg-0">
                    <a
                      class="nav-link"
                      href="https://www.facebook.com/mdbootstrap"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="nav-item me-3 me-lg-0">
                    <a
                      class="nav-link"
                      href="https://twitter.com/MDBootstrap"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="nav-item me-3 me-lg-0">
                    <a
                      class="nav-link"
                      href="https://github.com/mdbootstrap/mdb-ui-kit"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- Gallery -->
      <div class="row">
        <!-- <div class="loop"> -->
        <section class="border-bottom mb-4 pb-4">
          <div class="row">
            <div class="col-3">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                class="img-fluid shadow-1-strong rounded-5"
                alt=""
              />
            </div>

            <div class="col-9">
              <p class="mb-2"><strong>Anna Maria Doe</strong></p>
              <a href="" class="text-dark"
                ><i class="fab fa-facebook-f me-1"></i
              ></a>
              <a href="" class="text-dark"
                ><i class="fab fa-twitter me-1"></i
              ></a>
              <a href="" class="text-dark"
                ><i class="fab fa-linkedin me-1"></i
              ></a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio est ab iure inventore dolorum consectetur? Molestiae
                aperiam atque quasi consequatur aut? Repellendus alias dolor ad
                nam, soluta distinctio quis accusantium!
              </p>
            </div>
          </div>
        </section>

        <!-- DETAILS -->
        <div class="bloc-expend">
          <details>
            <summary>Lire la sub</summary>
            <p class="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              veniam nobis ea commodi voluptatibus ut. Quidem ipsam ipsum
              ducimus impedit est repudiandae mollitia error esse.
            </p>
          </details>
        </div>
        <!-- FIN DETAILS -->
        <div class="line"></div>
        <!-- CALENDAR LINE  1 -->
        <div class="card-calendar">
          <div class="date-lieu">
            <span calss="date-day">10 /</span>
            <span calss="date-month">09/</span>
            <span calss="date-year">2022 </span>
            <p class="description">Festival du machin bidule</p>
          </div>
          <p class="detail">Place du marcher aux riches</p>
        </div>

        <div class="line"></div>
        <!-- CALENDAR LINE  2 -->

        <div class="list-item" data-id="7">
          <div class="flex">
            <a href="#" class="item-author text-color" data-abc="true"
              >Kinley Adolf</a
            >
            <div class="item-except text-muted text-sm h-1x">
              For what reason would it be advisable for me to think about
              business content?
            </div>
          </div>
          <div class="no-wrap">
            <div class="item-date text-muted text-sm d-none d-md-block">
              21 July
            </div>
          </div>
        </div>

        <div class="containe-fluid">
          <div class="row col-12">
            <div class="line"></div>
            <!-- CALENDAR LINE  3 -->
            <div class="tribe-common-g-row card-cal3">
              <div
                class="
                  tribe-events-calendar-latest-past__event-date-tag
                  tribe-common-g-col
                "
              >
                <time
                  class="
                    tribe-events-calendar-latest-past__event-date-tag-datetime
                  "
                  datetime="2022-10-29"
                  aria-hidden="true"
                >
                  <span
                    class="
                      tribe-events-calendar-latest-past__event-date-tag-month
                    "
                  >
                    Oct
                  </span>
                  <span
                    class="
                      tribe-events-calendar-latest-past__event-date-tag-daynum
                      tribe-common-h5
                      tribe-common-h4--min-medium
                    "
                  >
                    29
                  </span>
                  <span
                    class="
                      tribe-events-calendar-latest-past__event-date-tag-year
                    "
                  >
                    2022
                  </span>
                </time>
              </div>

              <div
                class="
                  tribe-events-calendar-latest-past__event-wrapper
                  tribe-common-g-col
                "
              >
                <article
                  class="
                    tribe-events-calendar-latest-past__event
                    tribe-common-g-row tribe-common-g-row--gutters
                    post-4313
                    tribe_events
                    type-tribe_events
                    status-publish
                    hentry
                    tribe_events_cat-mdr-es
                    cat_mdr-es
                  "
                >
                  <div
                    class="
                      tribe-events-calendar-latest-past__event-details
                      tribe-common-g-col
                    "
                  >
                    <header
                      class="tribe-events-calendar-latest-past__event-header"
                    >
                      <div
                        class="
                          tribe-events-calendar-latest-past__event-datetime-wrapper
                          tribe-common-b2
                        "
                      >
                        <time class="time" datetime="2022-10-29">
                          <!-- <span class="tribe-event-date-start">29 octubre</span>	 -->
                        </time>
                      </div>
                      <h3
                        class="
                          tribe-events-calendar-latest-past__event-title
                          tribe-common-h6
                          tribe-common-h4--min-medium
                        "
                      >
                        <a
                          href="https://losgalindos.net/es/esdeveniment/ateneu-sant-jaume-premia-de-dalt-mdr/"
                          title="Ateneu Sant Jaume – Premià de dalt / MDR"
                          rel="bookmark"
                          class="title_lloc"
                        >
                          Ateneu Sant Jaume – Premià de dalt / MDR
                        </a>
                      </h3>
                    </header>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <!--  FIN CALENDAR LINE  2-->
        <div class="line"></div>

        <!-- CALENDAR   4-->

        <div class="containe-fluid">
          <div class="row col-sm-12 col-md-6">
            <div class="card-cal4">

              <div class="w-calendar">
                <div class="date-month">Dic</div>
                <div class="date-day"><strong> 28 </strong></div>
                <div class="date-week-day">Mié</div>
              </div>

              <div class="text-calendar">
                <div
                  
                >
                  <a
                    href="#"
                    class="event-link"
                    data-original-title=""
                    title="enllaç esdeveniment"
                  >
                    <span class="event-hour"> 
                       <strong>
                        18H00
                       </strong>  </span>
<div class="text-cal4">


    <span class="event-title">
      <strong>

          Festival La Mercé
      </strong>
    </span>
    <span class="event-place">
      Plaça del mercat <i> (Barcelona)</i>

    </span>
</div>
                  </a>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- FIN CALENDAR   4-->
        <div class="line"></div>
        <!-- CALENDAR LINE  5-->

        <div class="container card-cal-5">
          <div class="row row-striped">
            <div class="col-2 text-right">
              <h1 class="display-4">
                <span class="badge" style="color: black">23</span>
              </h1>
              <h2>OCT</h2>
            </div>
            <div class="col-10">
              <h3 class="text-uppercase"><strong>Ice Cream Social</strong></h3>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i> Monday
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-clock-o" aria-hidden="true"></i> 12:30 PM -
                  2:00 PM
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-location-arrow" aria-hidden="true"></i> Cafe
                </li>
              </ul>
              <p>
                Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <!-- FIN AGENDA 5 -->
        <div class="line"></div>
        <!--  CARTE 6-->
        <div class="container">
          <div class="row">
            <div class="col-md-1">
              <br />
              <p class="calendar">15<em>March</em></p>
            </div>
            <div class="col-md-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2948.2793897849465!2d-71.0596334!3d42.3578847!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1394254234525"
                width="400"
                height="400"
                style="border: 0"
              ></iframe>
            </div>
          </div>
        </div>

        <!--  FIN CARTE 6-->

        <div class="line"></div>

        <!-- LOADER -->
        <div class="container">
          <div class="row">

        <div id="preloader">
          <div id="loader"></div>
        </div>
        </div>
        </div>
        <!-- FIN LOADER -->
      </div>
    </div>
    <!-- Gallery -->
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "galerie",

  data: function () {
    return {};
  },
};
</script>

<style scoped>
a{
    text-decoration: none;
}
.container{
    margin-top: 50px;
}
.line {
  width: 80%;
  height: 3px;
  border: 2px solid red;
  margin: 20px 0;
}
#intro {
  /* Margin to fix overlapping fixed navbar */
  margin-top: 58px;
}

@media (max-width: 991px) {
  #intro {
    /* Margin to fix overlapping fixed navbar */
    margin-top: 45px;
  }
}
details {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}
summary {
  width: 300px;
  list-style: none;
}
text {
  width: 300px;
}
details {
  background: rgb(111, 111, 111, 0.2);
  width: 300px;
}

details summary::before {
  content: "😱";
  padding-right: 10px;

  /* INLINE-BLOCK condition pour etre animé */
  display: inline-block;
  transition: transform 0.4s ease-out;
}
details[open] summary::before {
  transform: rotate(360deg);
}

.card-calendar {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.date-lieu {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
}

.card-cal3 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.title_lloc {
  font-size: 20px;
}

/* CALENDAR 4 */

.card-cal4 {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items:center;
}
.w-calendar {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  height: max-content;
  width: 3rem;
  padding: 0 5px;
  margin: 0 auto;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
}

.date-month {
  background: rgb(250, 21, 21, 0.8);
  border-radius: 3px 3px 0 0;
  margin: 0 -5px;
  color: aliceblue;
}
.date-day {
  background: rgb(252, 250, 250);
  border-radius: 3px 3px 0 0;
  margin: 0 -5px;
  
}
.date-week-day {
  font-size: 12px;
}
a{
  color: black;
}

.text-cal4{
    display: flex;
    flex-direction: column;
    color:black,
}

/* CALENDAR 5 */
.card-cal-5 {
  height: auto;
}

/* LOADER */

#preloader {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #9370db;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
#loader:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #ba55d3;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}
#loader:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #ff00ff;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/* FIN LOADER */

.container {
  background-color: transparent;
  height: auto;
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
  height: 100%;
}

.list_nav {
  display: flex;
  flex-direction: row;
}

.txt {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  bottom: 0px;
  left: 0;
  color: black;
}
</style>