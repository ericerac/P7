<template>
    <div class="bloc_cal">
        <div class="bloc_date mt-1 mb-1" :title=cardCalSelect[0].info_top>
            <a class="date_cal mt-2 mb-2 col-12"  target="_blank">
                <div class="spectacle_name col-lg-3 item">
                    {{ cardCalSelect[0].show_name }}
                </div>
                <div class="date_date col-lg-2 item">
                    {{ date(cardCalSelect[0].day) }} - {{ cardCalSelect[0].hour }}
                </div>
                <div class="date col-lg-2 item">
                    {{ cardCalSelect[0].event }}
                </div>
                <div class="lloc_lloc col-lg-5 flex-wrap item">
                    {{ cardCalSelect[0].detail }}
                </div>
                <div class="info_top item "></div>
            </a>
            <button  type="action" @click="updateC(d._id)" class="btn_edit">Update</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import moment from 'moment';


export default {
    name: "cal_component",

    data: function () {
        return {
           
        }
    },
    computed: {
        ...mapState({
            pageData: "pageData",
            cardCalSelect:"cardCalSelect"
        }),
        
    },
    methods: {
        
        date(value) {
            return moment(value).format("DD/MM/YYYY");
        },

    },

}
</script>

<style scoped>
a{
    text-decoration: none;
    color: inherit;
}
.bloc_cal{
    width: 100%;
  
    height:auto;
    background-color: rgb(198, 142, 250);
}
.date_cal {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    box-shadow: 1px 2px 3px grey;
    background-color: rgba(245, 245, 220, .7);
    border-top: 1px solid rgba(128, 128, 128, .3);
    border-left: 1px solid rgba(128, 128, 128, .3);

}
</style>