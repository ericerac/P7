<template>
    <div class="fond" :class="{ bgDark: darkTheme }">
        <div class="containe text-center">
            <div class="row card_calendar_row text-center">
                <div class="img_top">
                    <img src="../assets/images/vintage-alt-illustration.png" alt="">
                </div>
                <div class="contain_info">
                    <div class="box"><span>Next Show</span></div>
                    <div class="box2">
                        <span>{{ dayShow }} </span>
                        <span> {{ dateShow }} </span>
                        <span> de {{ monthShow }} </span>
                    </div>
                </div>
                <div class="Title">
                    <h3 class="text" :class="{ txtDark: darkTheme }">Calendari</h3>
                </div>
                <div class="bloc col-12 p-lg-3 p-xl-5 text-center">
                    <div class="legende col-12 m-auto">
                        <div class="date col-3 col-lg-2 item headCard text" :class="{ txtDark: darkTheme }">Date</div>
                        <div class="spectacle col-3 item headCard text" :class="{ txtDark: darkTheme }">Espectacle</div>
                        <div class="date col-3 col-lg-3 item headCard text" :class="{ txtDark: darkTheme }">Esdeveniment
                        </div>
                        <div class="lloc col-3 col-lg-4 item headCard text" :class="{ txtDark: darkTheme }">Lloc</div>
                        <div class="info_add item"></div>
                    </div>
                    <div v-for="d in filterDate" :key="d.id">
                        <div class="bloc_date  mt-1 mb-1" :title=d.info_top>
                            <a class="date_cal mt-2 mb-2 col-12 g-0" :href=d.link_event target="_blank"
                                :style="getClassStyle(d.day)">
                                <div class="date_date col-3 col-lg-2 item  text" :class="darkTheme ? 'txtDark' : 'txtDay'">
                                    {{ dayWeek(d.day) }} {{ date(d.day) }} <br>
                                    {{
                                        hourDefined(d.hour) }}
                                </div>
                                <div class="spectacle_name col-3 col-lg-2 item text"
                                    :class="darkTheme ? 'txtDark' : 'txtDay'">{{ d.show_name }}</div>
                                <div class="date col-3 col-lg-3 item text" :class="darkTheme ? 'txtDark' : 'txtDay'">{{
                                    d.event }}</div>
                                <div class="lloc_lloc col-3 col-lg-4 flex-wrap item text"
                                    :class="darkTheme ? 'txtDark' : 'txtDay'">{{ d.detail }}</div>
                                <div class="info_top item  text"></div>
                            </a>
                        </div>
                    </div>
                    <button v-if="admin" type="action" class="btn_create col-12 text"> New Date</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

import { mapGetters, mapState, mapActions } from "vuex";
import { ref, reactive } from "vue";
import moment from 'moment';
import calCompo from "../components/cal_component.vue"
import Script from "../js/script.js"

export default {
    name: "calendar",

    data: function () {
        return {
            show: true,
            admin: false,
            cardId: "",
            calComp: false,
            dateNow: ref(""),
            navbarOk: false,

            dayShow: "",
            dateShow: "",
            monthShow: "",
            whereShow: "",

            dark: ref(false),

            bdDark: "rgba(11, 19, 19, 1) ",

            dateData: "",
        }
    },

    created: function () {
        this.dateToday();
        this.getPageData();

    },
    
    computed: {
        ...mapState(

            {
                pageData: "pageData",
                cardCalSelect: "cardCalSelect",
                darkTheme: "darkTheme"
            }),

        filterDate() {

            if (this.pageData) {
                this.dateData = true;
                let PageDat = this.pageData;
                let date = "";
                for (let d of PageDat) {
                    date = new Date(d.day);
                    let day = date.getDay()
                }

                return this.pageData.sort((a, b) => (a.day > b.day ? 1 : -1)).reverse();

            }

        },
        theme() {
            // if(darkTheme == false || darkTheme.dark == false){
            //     this.dark == false
            // }
        },
        nextShow() {
            if (this.pageData) {
                let nextS = this.pageData.map(function (day, index) {
                    return (day)
                })
            }
        },
    },

    components: {
        calCompo,
    },
    watch: {
        dataPageModul(n, o) {
            this.infoShow()
        },

    },

    methods: {

        ...mapActions('dataPageModul', ['getPageData']),

        scroller(x) {
            Script(x)
        },

        infoShow() { // selection date content info badge
            if (this.pageData) {
                let nextS = this.pageData.map(function (day, index) {
                    return (day.day)
                })
                let hoy = new Date()
                let bolos = moment(hoy).format("YYYY-MM-DD");
                let next = this.pageData.filter(d => d.day > bolos)
                let bolo = next.reverse()[0].day
                this.monthShow = moment(bolo).format('MMM', 'ca')
                this.dayShow = this.dayWeek(bolo)
                this.dateShow = moment(bolo).format('DD', 'ca')
                this.whereShow = next[0].detail;
            } else {
            }

        },

        getClassStyle(d) {
            if (this.dateTimestamp(d) < this.dateNow) {
                console.log("GET CLASS DARK ");
                if (this.darkTheme == true) {
                    console.log("GET CLASS DARK TRUE");
                    return {
                        background: 'transparent'
                    }
                } else {
                    return {
                        background: 'rgba(250, 19, 99, 0.3)',
                      
                    }
                }
            } else if (this.dateTimestamp(d) > this.dateNow) {
                if (this.darkTheme == true) {
                    console.log("GET CLASS DARK TRUE");
                    return {
                        // background: 'rgba(250, 19, 99, 0.4)'
                        background: 'rgba(250, 19, 99, 0.2)'
                    }
                } else {
                    return {
                        background: 'white',
                     
                    }
                }
            }
        },
        hourDefined(h) {
            if (h != "undefined") {
                return h
            } else {
                return "por definir"
            }
        },

        dateToday() {
            //******* UTIL *********

            let ahora = Date.now();
            let date = new Date(ahora)
            const timestamp = date.getTime();
            this.dateNow = timestamp
        },

        dateTimestamp(val) {

            const ddate = new Date(val);
            const timestamp = ddate.getTime();
            return timestamp;
        },
        // ****************************************
        getPageData() {
            const n = "calendar";
            this.$store.dispatch("getPageData", n)
                .then((res) => {
                    if (res) {
                        this.infoShow()
                    }
                })
        },

        dayWeek(value) {
            let d = new Date(value);
            const dd = d.getDay();
            let jour = "";
            switch (dd) {
                case 0:
                    jour = "Dg ";
                    break
                case 1:
                    jour = "Dl ";
                    break
                case 2:
                    jour = "Dt ";
                    break
                case 3:
                    jour = "Dc ";
                    break
                case 4:
                    jour = "Dj ";
                    break
                case 5:
                    jour = "Dv ";
                    break
                case 6:
                    jour = "Ds ";
                    break
            }
            return jour
        },

        dateDay(value) {
            return value.getDay()
        },

        dateMonth(value) {
            return moment(value).format('MMM', 'ca')
        },

        date(value) {
            return moment(value).format("DD/MM/YYYY");
        },

        updateCal(x) {
            let ad = this.pageData;
            let dat = ad.filter(d => d._id == x);
            this.$store.commit("CardCalSelect", dat);
            this.calComp = true;
        },

    },
};
</script>

<style scoped>
@import url("../styles/bloc-nav-c.css");
@import url("../styles/bloc_nav.css");
@import url("../styles/theme.css");
@import url("../styles/font.css");
@import url("../styles/anim.css");

a {
    list-style: none;

    text-decoration: none;
}

/* ********** TEST CLASS BG ************* */
.classPassDark {
    background-color: rgba(250, 19, 99, 0.2);
}


/* ********** CONTAIN INFO ************* */

.contain_info {
    width: 100px;
    margin: 2em auto;
    position: fixed;
    top: calc(40px + 10vh);
    top: 40px;
    left: calc(20px + 10vw);
    left: 20px;
    -webkit-perspective: 800px;
    z-index: 100;

}

.box,
.box2 {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 100px;
    height: 100px;
    background: #222;
    -webkit-backface-visibility: hidden;
    -webkit-animation-fill-mode: forwards;
    text-align: center;
    font-size: 25px;
    background: rgb(165, 42, 42, 1);
    border-radius: 20px;
}

.box2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.box2 span {
    font-size: 20px;
    font-weight: 700;
}

.box span {
    line-height: 50px;
}

.box {
    animation: test 3s linear 1s infinite;
    z-index: 10;
}

.box2 {
    animation: test2 3s linear 1s infinite;
    z-index: 5;
}

@keyframes test {
    100% {
        transform: rotateY(-360deg);
        z-index: 5;
    }
}

@keyframes test2 {
    0% {
        transform: rotateY(-180deg);
    }

    100% {
        transform: rotateY(-540deg);
        z-index: 10;
    }
}


/* ********** END CONTAIN INFO ************* */

.fond {
    position: relative;
}

.card_calendar_row {

    margin-top: 0px
}

.img_top {
    margin: auto
}

.img_top img {

    width: 350px;
    width: calc(300px + 8vw);
    height: auto;
    object-fit: cover;
    overflow: hidden;
    z-index: -1;
    margin-top: 70px;
}
.bloc {
    /* position:relative; */
    min-height: 600px;
    padding: 0
}

a {
    list-style: none;
    /* color: black; */
    text-decoration: none;
}

.bloc_date {

    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
}

.legende {
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 80px;
    top: 10%;
    justify-content: space-evenly;
    background-color: rgb(251, 118, 118);
    border: 1px solid red;
    box-shadow: 2px 2px 5px solid rgba(255, 0, 0, .9);
    padding: 10px 0;
    color:white;
    font-weight: 700;
}
.date_cal {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    box-shadow: 1px 2px 3px grey;
    /* background-color: rgba(245, 245, 220, .7); */
    background-color: v-bind(bgColor);
    /* border-top: 1px solid rgba(128, 128, 128, .3);
    border-left: 1px solid rgba(128, 128, 128, .3); */
    align-items: center;
    padding: 5px 0;
}

.date_cal:hover {
    transform: scaleY(1.1) scaleX(1.05);
    box-shadow: 1px 2px 13px grey;
    transition: .2s;
}

.datePass {
    background-color: v-bind(bgPassColor);
}
.btn_edit {
    padding: 0 5px;
    margin-left: 5px;
    border: none;
    box-shadow: 1px 2px 3px black;
}
.btn_create {
    border: none;
    box-shadow: 1px 2px 3px black;
    background-color: rgba(165, 42, 42, .4);
}
.container-fluid-footer {
    width: 100vw;
    margin: 0 auto
}

@media screen and (min-width:768px) and (max-height:500px) {
    .img_top img {
        height: auto;
        object-fit: cover;
        overflow: hidden;
    }
    .legende {
        position: relative;
        top: 0;
    }
}

@media screen and (min-width:768px) and (min-height:500px) {
    .bloc {
        width: 90%;
        margin: 0 auto;
    }
}

@media screen and (min-width:1024px) {
    .legende {
        top: 80px;
    }

    .img_top>img {

        width: 600px
    }
}

@media screen and (min-width:1440px) {
    .bloc {
        width: 70%;
        margin: 0 auto;
    }
    .contain_info {
        top: 100px;
        left: 12%;
    }
    .img_top {

        margin-top: 70px;
    }

    .legende {
        top: 110px;
        font-weight: 700;
        font-size: 20px;
    }
}

@media screen and (min-width:1980px) {}
</style>