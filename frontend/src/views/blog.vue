<template>
    <div class="fond">
        <div class="compo" v-if="compo == true">
            <blog_post @changeCompo="CompoDisplay"/>
        </div>







        <div class="container">
            <div class="header">
                <button @click="compo = !compo" class="open"></button>
               

                

            </div>
            <div class="row">

            </div>
            <div class="row">

                <article>
                    <div class="post_card" v-for="post in displayPost" :key="post._id">
<!-- <svg "
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns:ns1="http://sozi.baierouge.fr"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    id="svg2"
    sodipodi:docname="New document 1"
    viewBox="0 0 809.78 495.73"
    version="1.1"
    inkscape:version="0.47pre4 r22446"
  >
  <defs
      id="defs4"
    >
    <filter
        id="filter3667"
        inkscape:collect="always"
        color-interpolation-filters="sRGB"
      >
      <feGaussianBlur
          id="feGaussianBlur3669"
          stdDeviation="4.4288687"
          inkscape:collect="always"
      />
    </filter
    >
  </defs
  >
  <sodipodi:namedview
      id="base"
      bordercolor="#666666"
      inkscape:pageshadow="2"
      inkscape:window-y="24"
      pagecolor="#ffffff"
      inkscape:window-height="427"
      inkscape:window-maximized="0"
      inkscape:zoom="0.175"
      inkscape:window-x="628"
      showgrid="false"
      borderopacity="1.0"
      inkscape:current-layer="layer1"
      inkscape:cx="328.57236"
      inkscape:cy="332.09409"
      inkscape:window-width="605"
      inkscape:pageopacity="0.0"
      inkscape:document-units="px"
  />
  <g
      id="layer1"
      inkscape:label="Layer 1"
      inkscape:groupmode="layer"
      transform="translate(94.73 -120.04)"
    >
    <path
        id="rect3600"
        sodipodi:nodetypes="ccccc"
        style="filter:url(#filter3667);fill:#4d4d4d"
        d="m47.735 222.12h554.29l12.122 319.37-566.41-22.223v-297.14z"
    />
    <rect
        id="rect2816"
        style="fill:#ffff6f"
        height="297.14"
        width="554.29"
        y="218.08"
        x="45.714"
    />
    <path
        id="rect2818"
        style="fill-opacity:.58879;fill:#f2f2f2"
        d="m429.03 120.04 15.108 35.795-37.144-11.441 15.087 35.818-37.144-11.441 44.491 40.256 197.03 178.28 44.491 40.256-15.063-35.797 37.121 11.42-15.063-35.797 37.1 11.443-44.491-40.256-197.03-178.28-44.491-40.256z"
    />
    <path
        id="path3596"
        style="fill-opacity:.58879;fill:#f2f2f2"
        d="m-62.97 371.83 22.904 31.383-38.777-2.6295 22.889 31.411-38.777-2.6295 52.528 28.996 232.63 128.41 52.528 28.996-22.862-31.396 38.749 2.6144-22.862-31.396 38.734 2.6418l-52.53-28.98-232.63-128.41-52.53-29z"
    />
  </g
  >
  <metadata
    >
    <rdf:RDF
      >
      <cc:Work
        >
        <dc:format
          >image/svg+xml</dc:format
        >
        <dc:type
            rdf:resource="http://purl.org/dc/dcmitype/StillImage"
        />
        <cc:license
            rdf:resource="http://creativecommons.org/licenses/publicdomain/"
        />
        <dc:publisher
          >
          <cc:Agent
              rdf:about="http://openclipart.org/"
            >
            <dc:title
              >Openclipart</dc:title
            >
          </cc:Agent
          >
        </dc:publisher
        >
        <dc:title
          >Sticky Note</dc:title
        >
        <dc:date
          >2011-02-16T15:45:48</dc:date
        >
        <dc:description
        />
        <dc:source
          >https://openclipart.org/detail/118759/sticky-note-by-ramchand</dc:source
        >
        <dc:creator
          >
          <cc:Agent
            >
            <dc:title
              >Ramchand</dc:title
            >
          </cc:Agent
          >
        </dc:creator
        >
        <dc:subject
          >
          <rdf:Bag
            >
            <rdf:li
              >notes</rdf:li
            >
            <rdf:li
              >paper</rdf:li
            >
            <rdf:li
              >sticky note</rdf:li
            >
          </rdf:Bag
          >
        </dc:subject
        >
      </cc:Work
      >
      <cc:License
          rdf:about="http://creativecommons.org/licenses/publicdomain/"
        >
        <cc:permits
            rdf:resource="http://creativecommons.org/ns#Reproduction"
        />
        <cc:permits
            rdf:resource="http://creativecommons.org/ns#Distribution"
        />
        <cc:permits
            rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
        />
      </cc:License
      >
    </rdf:RDF
    >
  </metadata
  >
</svg
> -->

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
import moment from "moment";
import blog_post from "../components/blog_post.vue"


// import navbar from "../components/nav_bar.vue"
// import foot from "../components/footer.vue"


export default {
    data: function () {
        return {
            content: "",
             compo: false,
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
displayPost(){
if(this.pageData){
    return this.pageData.reverse();
}
},

    },
    components: {
        blog_post
    },
    methods: {

        CompoDisplay(){
            this.compo = false
        },
        contentText(id) {
            if (this.pageData) {

                const stringi = JSON.stringify(this.pageData);
                const parsi = JSON.parse(stringi);

                for (let x of parsi) {

                    if (x._id == id) {
                        console.log("PARSI ID", x.createdAt);
                        let date_post = new Date(x.createdAt)

                        let dates = moment(date_post).format("DD/MM/YY")
                        console.log("MA DATE", dates);
                        let date2 = date_post.toLocaleDateString("cat", { day: 'numeric', month: 'short' })
                        console.log("MA DATE 2", date2);
                        


                        return date2;
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
.test {
    position: relative;
    z-index: -1
}
.svg_title{
    width:300px;
    height:100px;
    margin:0 auto;
}
/* svg {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100vh
} */
.svg_text{
   
    width:300px
}

*,
:before,
:after {
    box-sizing: border-box;
}

:root {}

.compo {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.open {
    width: 100px;
    height: 20px;
    background-color: blanchedalmond;
}

.fond {
    position:relative;
    color: white;
    /* background: black; */
    background-image: url("../assets/design/circle-scatter-haikei\ \(1\).svg");
  
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
    background-image: url("../assets/design/Note.svg");
    background-repeat: no-repeat;
    background-position: center;
}

article {
    position: relative;
    border:2px solid blue
}

.post_card {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid green;
   
    
background-color: blanchedalmond;
    margin: 30px auto;
    align-items: center;
 border-radius: 5px;
}

.img_post {
    width: 100%;
    height: auto;
    max-height: 350px;
    overflow: hidden;
    border: 1px solid white;
    margin: 10px ;
    align-items: center;
    vertical-align: middle;
    /* display: none; */

}

.img_post>img {
    width: 100%;
    height: auto;
    margin: auto;
}

.bloc_text {
    width: 100%;
    height:100%;
    color:black;
    align-items: center;
    /* background-image: url("../assets/design/banner-hands.svg");  
  background-repeat: repeat;
    background-size: contain;
    background-position-x: left;
    background-position-y: top; */
}

.bloc_text>h2 {
    display:flex;
    flex-direction: column;
    margin: 20px auto;
    width: 100%;
    flex-wrap: wrap;

}

.text_post>p {

    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    text-align: justify;
    padding:10px

}

.text_post {
    width: 100%;
    overflow: hidden;
    text-align: justify;
    padding: 10px;
    text-indent: 40px;

}

.date>span::before {
    content: "";
    position: absolute;
    right: 10px;
    top: 20px;
    width: 50px;
    height: 60px;
    background-color: rgb(19, 19, 19);
    border-radius: 5px;
    z-index: 11;
}

.date>span::after {
    content: attr(data-text);
    position: absolute;
    right: 10px;
    top: 20px;
    width: 50px;
    height: 60px;
    /* border: 1px solid blue; */
    color: white;

    overflow: hidden;
    text-align: center;
    box-shadow: 2px 2px 5px white;
    border-radius: 5px;
    padding-top: 5px;
    text-shadow: 0px 0px 13px;
    z-index: 12;
    background-color: rgba(138, 43, 226, .8);

}

/* TEST SVG */
.shapedividers_com-6722 {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 120px;
}

.shapedividers_com-6722::before {
    content: '';
    font-family: 'shape divider from ShapeDividers.com';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    top: 0;
    z-index: 3;

    pointer-events: none;
    background-repeat: no-repeat;
    background-size: 108% 125px;
    background-position: 50% 0%;
    background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 669.4 133.88"><path fill="%23fa5a00" d="M0 0c0 133.88 334.7 0 334.7 133.88C334.7 0 669.4 133.88 669.4 0z"/></svg>');
}

@media (min-width:768px) {
    
}

@media (min-width:1024px) {
    .post_card {
flex-direction:row;
justify-content: space-evenly;
    }
    .img_post{
width:90%;
    }
    .bloc_text {
        
        width:90%;
        height:100%;
        border:1px solid black;
        margin:0 10px;
        align-items: center;
        justify-content: space-between;

    }
    .bloc_text > h2{
       
        text-align: center;
        max-width: 80%;
        margin:auto;
      
       
    }
    .text_post>p {
        padding:20px;
    }
}

@media (min-width:2100px) {
    
}
</style>