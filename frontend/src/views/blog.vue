<template>
    <div class="fond">

        <div class="container">
            <div class="header">

            </div>
            <div class="row">

            </div>
            <div class="row">

                <article>
                    <div class="post_card" v-for="post in pageData" :key="post._id">


                        <div class="img_post">
                            <img :src="post.imageUrl" alt="">

                        </div>
                        <div class="bloc_text">
                            <h2>{{ post.title_1 }}</h2>
                            <div class="text_post">
                                <p>
                                    {{ post.p_1 }}
                                </p>
                            </div>
                            <div class="date">
                                <span :data-text="contentText(post._id)"> </span>
                            </div>
                        </div>
                    </div>

                </article>

            </div>

        </div>

    </div>
</template>



<script>

import { mapState } from "vuex";
import  moment  from "moment";



// import navbar from "../components/nav_bar.vue"
// import foot from "../components/footer.vue"


export default {
    data: function () {
        return {
            content: "",
        }
    },
    created: function () {

        // this.getNavData();
        this.getPageData();

    },

    computed: {
        ...mapState({

            pageData: "pageData",
            navData: "navData"
        }),


    },
    methods: {

        date(value) {
            return moment(value).format("DD/MM/YYYY");
        },
        contentText(id) {
            if (this.pageData) {

                const stringi = JSON.stringify(this.pageData);
                const parsi = JSON.parse(stringi);

                for (let x of parsi) {

                    if (x._id == id) {
                        console.log("PARSI ID", x.createdAt);
                    let date_post =  x.createdAt
                    const maDate = date_post.split("T")
                    console.log("MA DATE", maDate);
                    const [year, month, day, ] = maDate[0].split('-');
                    const day_post =  day.concat(month).concat(year)
                    console.log("MA DATE", day_post);
                    // let day_post = maDate.toLocaleDateString("fr")
                  

                        return  x.createdAt;
                    }

                }
            }
        },

        changeWidth(event) {
            // this.background = this.pageData[0].imageUrl;
            // console.log("CHANGE WIDTH", this.background);
        },

        getPageData() {
            const n = "post";
            this.$store.dispatch("getPageData", n)
                .then((res) => {
                    if (res) {

                    }
                })
            console.log("REQUET GET ACCUEIL PAGE DATA-----> ", n);
        },
        getNavData() {
            const n = "navbar";
            this.$store.dispatch("getNavData", n)
                .then((res) => {
                    if (res) {
                        this.navbarOk = true
                    }
                });
            console.log("REQUET GET NAV BAR PAGE DATA-----> ", n);
        },

    },
}
</script>

<style scoped>
*,
:before,
:after {
    box-sizing: border-box;
}

:root {}

.fond {
    color: white;
    background: black;
    width: 100vw;
    height: auto;
    min-height: 110vh;
}

.container {
    width: 100%;
    align-items: center;
}

.header {
    display: flex;
    width: 100%;
    height: 200px;
    border: 1px solid rgb(255, 55, 55);
}

.post_card {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    margin: 30px auto;
    align-items: center;
}

.img_post {
    width: 100%;
    height: auto;
    max-height: 350px;
    overflow: hidden;
    border: 1px solid white;
    margin: 10px auto;
    align-items: center;
    vertical-align: middle;

}

.img_post>img {
    width: 100%;
    height: auto;
    margin: auto;
}

.bloc_text {
    width: 100%;
}

.bloc_text>h2 {
    margin: 20px auto;
    width: 100%;
    flex-wrap: wrap;
}

.text_post>p {

    width: 100%;
    overflow: hidden;
    margin: 0 auto;

}

.text_post {
    width: 100%;
    overflow: hidden;
    text-align: justify;
    padding: 10px;
    text-indent: 40px;

}

.date>span::after {
    content: attr(data-text);

    position: absolute;
    right: 10px;
    top: 10px;
    width: 50px;
    height: 50px;
    border: 1px solid blue;
    color: white;
}
</style>