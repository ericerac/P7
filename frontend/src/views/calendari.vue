<template>
<div class="fond">

    <div class="container text-center">
        <div class="bloc_nav" v-if="navbarOk">

            <navbar namePage="cal"/>
        </div>
        <div class="row card_calendar_row text-center">


            <div class="img_top">
                <img src="../assets/images/vintage-alt-illustration.png" alt="">
            </div>
            <div class="Title">
                <h3 >Calendari</h3>
            </div>
            <div class="bloc col-12 p-lg-3 p-xl-5 text-center">
                <div class="legende col-12 m-auto">
                    <div class="date col-3 col-lg-2 item headCard">Date</div>
                    <div class="spectacle col-3 item headCard">Espectacle</div>
                    <div class="date col-3 col-lg-3 item headCard">Esdeveniment</div>
                    <div class="lloc col-3 col-lg-4 item headCard">Lloc</div>
                    <div class="info_add item"></div>


                </div>


                <div v-for="d in filterDate" :key="d.id">

                    <div class="bloc_date mt-1 mb-1" :title=d.info_top>

                        <a class="date_cal mt-2 mb-2 col-12 g-0" :href=d.link_event target="_blank"
                            :class="dateTimestamp(d.day) < dateNow ? 'datePass' : ''">
                            <div class="date_date col-3 col-lg-2 item ">{{ dayWeek(d.day) }} {{ date(d.day) }} <br> {{ hourDefined(d.hour) }}
                            </div>
                            <div class="spectacle_name col-3 col-lg-2 item">{{ d.show_name }}</div>
                            <div class="date col-3 col-lg-3 item">{{ d.event }}</div>
                            <div class="lloc_lloc col-3 col-lg-4 flex-wrap item">{{ d.detail }}</div>
                            <div class="info_top item "></div>
                        </a>

                        <button v-if="admin" type="action" @click="updateCal(d._id)" class="btn_edit"> edit</button>
                        <button v-if="admin && calComp && cardCalSelect[0]._id == d._id" type="action"
                            @click="calComp = false" class="btn_edit"> close</button>
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


                <button v-if="admin" type="action" class="btn_create col-12"> New Date</button>

            </div>




        </div>


        <foot />

    </div>
</div>

</template>
  
<script>
import { axios } from "axios";
import { mapGetters, mapState } from "vuex";
import moment from 'moment';
import navbar from "../components/nav_bar.vue"
import foot from "../components/footer.vue"
import calCompo from "../components/cal_component.vue"




export default {
    name: "test",

    data: function () {
        return {
            show: true,
            admin: false,
            cardId: "",
            calComp: false,
            dateNow: "",
            navbarOk: false,
        }
    },
    beforeMount: function () {
        console.log("BEFORE MOUNT");
        this.dateToday();
        // this.getPageData();
        // this.getNavData();
        //    this.$store.dispatch("calendar");
    },
    created: function () {
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
        


},
components: {
    navbar,
        foot,
        calCompo,
    },
watch: {
    pageData(n, o) {

        console.log("WATCH CAL", o, n);
    }
},
modules: {

},
methods: {
    hourDefined(h) {
        
            if (h  != "undefined") {
                return h
            } else  {
return "por definir"
            }
    },
    dateToday() {
        let ahora = Date.now();
        console.log("HEURE DU CHARGEMENT DATE NOW +18---->", ahora);
        let date = new Date(ahora)
        console.log("NEW DATE", date);



        const timestamp = date.getTime();

        this.dateNow = timestamp


    },
    dateTimestamp(val) {
        const date = val;
        const ddate = new Date(date);
        const timestamp = ddate.getTime();
        console.log("TIMESTAMP CALENDAR DATE", val);
        console.log("TIMESTAMP CALENDAR DATE", timestamp);
        return timestamp;
    },


    getPageData() {
        const n = "calendar";
        this.$store.dispatch("getPageData", n)

        console.log("REQUET GET CALENDAR PAGE DATA-----> ", n);
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
        console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
    },
    dayWeek(value) {
        let d = new Date(value);
        const dd = d.getDay();
        let jour = "";
        switch (dd) {
            case 0:
                jour = "Dg :";
                break
            case 1:
                jour = "Dl :";
                break
            case 2:
                jour = "Dt :";
                break
            case 3:
                jour = "Dc :";
                break
            case 4:
                jour = "Dj :";
                break
            case 5:
                jour = "Dv :";
                break
            case 6:
                jour = "Ds :";
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
        console.log("MONTH DATEMONTH", month);
        return month;
    },
    date(value) {
        return moment(value).format("DD/MM/YYYY");
    },

    updateCal(x) {
        console.log("ID SELECT CARD", x);
        let ad = this.pageData;
        let dat = ad.filter(d => d._id == x);
        console.log("card SELECT ----->", dat);
        this.$store.commit("CardCalSelect", dat);
        this.calComp = true;

    },

},
};
</script>

<style scoped>
#app {
    background-color: rgba(0, 0, 0, .3);
}
.fond{
    /* background: black; */
}
.bloc_nav{
    position: fixed;
    top:0;
   
    right:0;
    
z-index: 1000;
}


.card_calendar_row {
    margin-top: 50px
}
.img_top img{
    width:350px;
     height:auto;
     object-fit: cover;
     overflow: hidden;
     z-index:-1
}
.bloc {
    min-height: 600px;
}

a {
    list-style: none;
    color: black;
    text-decoration: none;
}

.bloc_date {
    display: flex;
    flex-direction: row;
    align-items: center;
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
    justify-content: space-evenly;
    background-color: rgb(255, 176, 176);
    border: 1px solid red;
    box-shadow: 2px 2px 5px solid rgba(255, 0, 0, .9);

}

.item {
    /* border:1px solid blue; */

}

.date_cal {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    box-shadow: 1px 2px 3px grey;
    background-color: rgba(245, 245, 220, .7);
    border-top: 1px solid rgba(128, 128, 128, .3);
    border-left: 1px solid rgba(128, 128, 128, .3);
    align-items: center;

}

.datePass {

    background-color: rgba(0, 0, 0, .2);
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

@media (max-width:500px) {
    .item{
        font-size: 14px;
    }
    .date.cal {
        display: flex;
        flex-direction: column;
        
    }
    
    
    .spectacle_name {
        display: flex;
        flex-direction: column;
        height: inherit;
      


    }
    .col-3{
padding:0 3px;
overflow:hidden;
flex-wrap: wrap;
    }
}
@media screen and (min-width:768px) {
    .img_top img{
        width:100%;
    max-width:600px;
     height:auto;
     object-fit: cover;
     overflow: hidden;
}
.bloc_nav{
    position: fixed;
    top:0;
    width:100%;
    right:0;
    
z-index: 1000;
}
}
</style>