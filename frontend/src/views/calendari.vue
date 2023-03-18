<template>
    <div class="fond" :class="{ bgDark: dark }">

        <div class="containe text-center">
            <div class="bloc_nav" v-if="navbarOk">
                <navbar namePage="cal" :dark = "dark" @theme ="dark=($event)" />
              
            </div>
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
                    <h3 class="text">Calendari</h3>
                </div>
                <div class="bloc col-12 p-lg-3 p-xl-5 text-center">
                    <div class="legende col-12 m-auto">
                        <div class="date col-3 col-lg-2 item headCard text" :class="{ txtDark: dark }">Date</div>
                        <div class="spectacle col-3 item headCard text" :class="{ txtDark: dark }">Espectacle</div>
                        <div class="date col-3 col-lg-3 item headCard text" :class="{ txtDark: dark }">Esdeveniment</div>
                        <div class="lloc col-3 col-lg-4 item headCard text" :class="{ txtDark: dark }">Lloc</div>
                        <div class="info_add item"></div>
                    </div>


                    <div v-for="d in filterDate" :key="d.id">

                        <div class="bloc_date mt-1 mb-1" :title=d.info_top>

                            <a class="date_cal mt-2 mb-2 col-12 g-0" :href=d.link_event target="_blank"
                                :class="dateTimestamp(d.day) < dateNow ? 'datePass' : ''">
                                <div class="date_date col-3 col-lg-2 item  text" :class="{ txtDark: dark }">{{ dayWeek(d.day) }} {{ date(d.day) }} <br>
                                    {{
                                        hourDefined(d.hour) }}
                                </div>
                                <div class="spectacle_name col-3 col-lg-2 item text" :class="{ txtDark: dark }">{{ d.show_name }}</div>
                                <div class="date col-3 col-lg-3 item text" :class="{ txtDark: dark }">{{ d.event }}</div>
                                <div class="lloc_lloc col-3 col-lg-4 flex-wrap item text" :class="{ txtDark: dark }">{{ d.detail }}</div>
                                <div class="info_top item  text"></div>
                            </a>

                            <button v-if="admin" type="action" @click="updateCal(d._id)" class="btn_edit text">
                                edit</button>
                            <button v-if="admin && calComp && cardCalSelect[0]._id == d._id" type="action"
                                @click="calComp = false" class="btn_edit text"> close</button>
                        </div>
                        <calCompo v-if="calComp && cardCalSelect[0]._id == d._id" />

                    </div>

                    <!-- "  2e VERSION   " -->
                    <!-- "  2e VERSION   " -->
                    <!-- "  2e VERSION   " -->

                    <!-- <table>
                    <tr>
                        <th>Date</th>
                        <th>Espectacle</th>
                        <th>Esdeveniment</th>
                        <th>Lloc</th>
                    </tr>
                    <tr :class="dateTimestamp(d.day) < dateNow ? 'datePass' : ''" v-for="d in filterDate" :key="d.id">
                        <td>{{ dayWeek(d.day) }} {{ date(d.day) }} - {{ d.hour }}</td>
                        <td>{{ d.show_name }}</td>
                        <td>{{ d.event }}</td>
                        <td>{{ d.detail }}</td>

                    </tr>


                </table> -->


                    <button v-if="admin" type="action" class="btn_create col-12 text"> New Date</button>

                </div>

            </div>
            <div class="footer" v-motion-slide-visible-once-bottom>
                <div class="container-fluid-footer">
                    <foot />
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import { axios } from "axios";
import { mapGetters, mapState } from "vuex";
import { ref, reactive } from "vue";
import moment from 'moment';
import navbar from "../components/nav_bar.vue";
import foot from "../components/footer.vue"
import calCompo from "../components/cal_component.vue"
import dataCookies from "../js/cookies"





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

            dark: "",
            bgColor: "rgba(245, 245, 220, .7)",
            bgPassColor: "rgba(250, 139, 139, 0.4)",
        }
    },
//     setup(){
   
//     const dateNow = reactive({
//       dayDate:"",
      
//     })
    
//     return { ...toRefs(dateNow), dayDate }
//   },

    beforeMount: function () {
        // console.log("BEFORE MOUNT");
        this.getLocation()
    },
    created: function () {
        console.log("CREATED");
       this.dateToday();
        this.getNavData();
        this.getPageData();
      
    },
    props: {

    },
    computed: {
        ...mapState({
            accueilData: "accueilData",
            pageData: "pageData",
            cardCalSelect: "cardCalSelect"
        }),

        filterDate() {
            if (this.pageData) {
                let PageDat = this.pageData;
                let date = "";
                for (let d of PageDat) {
                    date = new Date(d.day);
                    let day = date.getDay()
                    // console.log("BOUCLE FOR IN", date);
                }


                return this.pageData.sort((a, b) => (a.day > b.day ? 1 : -1)).reverse();

            }
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
        navbar,
        foot,
        calCompo,
    },
    watch: {
        pageData(n, o) { // selection date content info badge
            if(this.pageData){
                console.log("NEXT DAY",this.pageData);
                let nextS = this.pageData.map(function (day, index) {
                    return (day.day)
                })
                let hoy = new Date()
                let bolos = moment(hoy).format("YYYY-MM-DD");
                let next = this.pageData.find(d => d.day > bolos)
                let bolo = next.day
                this.monthShow = moment(bolo).format('MMM', 'ca')
                this.dayShow = this.dayWeek(bolo)
                this.dateShow = moment(bolo).format('DD', 'ca')
                this.whereShow = next.detail;
            } else {
                console.log("NOT DATA FROM PAGE");
            }

        }
    },
    modules: {

    },
    methods: {
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
            // console.log("HEURE DU CHARGEMENT DATE NOW +18---->", ahora);
            let date = new Date(ahora)
        //    console.log("NEW DATE NOW", date);
            const timestamp = date.getTime();
            this.dateNow = timestamp
        },

        dateTimestamp(val) {
            
            const ddate = new Date(val);
            const timestamp = ddate.getTime();
            // console.log("TIMESTAMP CALENDAR DATE", val);
            // console.log("TIMESTAMP CALENDAR DATE", timestamp);
            return timestamp;
        },
        getLocation(){
            this.$store.dispatch("getLoc")
            .then((res)=>{
               
              this.DataCookies()
            })
        },

        async DataCookies() {

            let dataTheme = await dataCookies();
        //    console.log("DATATHEME CALENDAR",dataTheme);
            this.dark = dataTheme.dark
            if(this.theme = true){

                //   this.bgColor =  "rgba(250, 139, 139, 0.7)"
                  this.bgColor =  "rgba(250, 109, 99, 0.6)"
                //  this.bgPassColor = "#fa8b8b66";
                  this.bgPassColor = "rgba(250, 19, 99, 0.3) ";
            }

        },
        // ****************************************


        getPageData() {
            const n = "calendar";
           
            this.$store.dispatch("getPageData", n)
            .then((res)=>{
                if(res){
                   
                }
            })

            // console.log("REQUET GET CALENDAR PAGE DATA-----> ", n);
        },
        getNavData() {
            const n = "navbar";
            this.$store.dispatch("getNavData", n)
                .then((res) => {
                    if (res) {
                        this.navbarOk = true
                        return
                    }
                });
            // console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
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
            // console.log("JOUR ", jour, dd, value);
            return jour
        },

        dateDay(value) {
            return value.getDay()
        },

        dateMonth(value) {

            return moment(value).format('MMM', 'ca')
            return moment(value).format("MM");
            // console.log("MONTH DATEMONTH", month);
            return month;
        },
        date(value) {
            return moment(value).format("DD/MM/YYYY");
        },

        updateCal(x) {
            // console.log("ID SELECT CARD", x);
            let ad = this.pageData;
            let dat = ad.filter(d => d._id == x);
            // console.log("card SELECT ----->", dat);
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

a {
    list-style: none;
    /* color: black; */
    text-decoration: none;
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
    background: red;
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


#app {
    background-color: rgba(125, 2, 187, 0.318);
}

.fond {
    position: relative;
    /* background: v-bind(bgColor); */
}

.text {
    /* color: v-bind(texteColor) */
}

.card_calendar_row {

    margin-top: 0px
}

.img_top img {
    width: 350px;
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

table {
    margin-bottom: 0 auto 2rem;
    width: 100%;
    max-width: 1100px;
}

td,
th {
    border-bottom: 1px solid black;
    padding: 5px 0;
    background-color: rgba(250, 235, 215, .6);
    font-size: 16px;
    margin-bottom: 3px;
}

.legende {
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 80px;
    top: 10%;
    justify-content: space-evenly;
    background-color: rgb(255, 176, 176);
    border: 1px solid red;
    box-shadow: 2px 2px 5px solid rgba(255, 0, 0, .9);
    padding: 10px 0;
}

.item {
    /* border:1px solid blue; */

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

.datePass {
    /* background-color: #fa8b8b66; */
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

.footer {
    /* position:relative;
    bottom:0;
    left:0;
    right:0; */
    /* margin-left: 0;
    width: 100%; */
} 

@media screen and (min-width:768px) and (max-height:500px) {
    .img_top img {
        width: 100%;
        max-width: 600px;
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

    /* .bloc_date{
        width:90%;
        margin:0 auto;
    } */
    .bloc {
        width: 90%;
        margin: 0 auto;
    }
}

@media screen and (min-width:1024px) {
    .legende {
        top: 80px;
    }
}

@media screen and (min-width:1440px) {

    /* .bloc_date{
        width:90%;
        margin:0 auto;
    } */
    .bloc {
        width: 70%;
        margin: 0 auto;
    }

    .contain_info {
        top: 100px;
        left: 12%;
    }
    .img_top{
       
        margin-top:70px;
    }
    .img_top > img{
       
       width:400px
    }
    .legende {
        top: 110px
    }
}

@media screen and (min-width:1980px) {
    .legende {}
    
}</style>