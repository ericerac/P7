
import { useCookies } from "vue3-cookies";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

const { cookies } = useCookies();

const dataPageModul = {
    namespaced:true,

state:{
  loading: false,
    pageData: [],
    namePage:"",
},
getters:{

},
mutations:{
    PageData: (state, val) => {
      console.log("PAGE DATA MODUL");
        state.pageData = val;
      },
      loading: (state, val) => {
        // console.log("MUT USER loading", val);
        state.loading = val;
        // eslint-disable-next-line no-undef
      },
      NamePage: (state, val) => {
        state.namePage = val;
      },
},
actions:{
    getPageData: ({ commit }, n) => {
console.log("GET PAGE DATA MODUL");
        let lang = "";
        commit("loading", true);
        if (n == "post") {
          lang = "cat";
        } else if (n == "calendar") {
          lang = "free";
        }else if ($cookies.get("lang")) {
          let l = $cookies.get("lang");
          lang = l.lang;
        } else {
          lang = "cat";
        }
  
        return new Promise((resolve, reject) => {
          instance
            .get(`inici?name=${n}&lang=${lang}`)
            .then((res) => {
              commit("loading", false);
              commit("PageData", res.data);
              if(n == "blog"){
                commit("BlogData", res.data);
              }
              commit("NamePage", n);
              let ahora = Date.now();
              return resolve(res);
            })
            .catch((err) => {
              reject(err);
            });
        });
      },
}
}
export default dataPageModul