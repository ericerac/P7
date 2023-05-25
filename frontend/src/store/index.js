//---------------------------------------//
//---------------------------------------//
//---------------------------------------//
//---------------------------------------//
//---------------------------------------//

import { createStore } from "vuex";
const commit = require("vuex");
import { useRouter, useRoute } from "vue-router";
const myRouter = useRouter();
import { router } from "../../src/router";
import Vuex from "vuex";

import dataPageModul from "./modules/dataPageModul.js";

import Vue from "vue";


import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

import axios from "axios";

// // --------------------------------------------------------------//
// // -----------------*** INSTANCE ***----------------//
// // --------------------------------------------------------------//

const instance = axios.create({
    baseURL: "http://49.13.3.226/",
   
  // baseURL: "http://localhost:3000/",
});

// // --------------------------------------------------------//
// // -----------*** INTERCEPTORS REQUEST "2" ***-----------------//
// // --------------------------------------------------------//

instance.interceptors.request.use(
  function (config) {
    
     console.log("INTER REQUEST CONFIG",config);

    if ($cookies.get("user")) {
      const AuthUser = $cookies.get("user");
      const token = AuthUser.token;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } else{}

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// // --------------------------------------------------------------//
// // -----------------*** INTERCEPTORS RESPONSE ***----------------//
// // --------------------------------------------------------------//

instance.interceptors.response.use(
  function (response) {
    const supp = response.data.message;
     console.log("RESPONSE", response);
    // console.log("RESPONSE STATUS", response.status);

    // console.log("RESPONSE INTER", supp);

    if (supp == "jwt expired") {
      // console.log("JWT EXPIRED");

      store.commit(
        "ModalMessage",
        "Votre temps de session à expiré. Reconnectez-vous.",
        response.data.message
      );
      store.commit("ModalError", true);
    } else if (supp == "Compte utilisateur supprimé") {
      store.commit(
        "ModalMessage",
        "Le compte a bien été supprimé.",
        response.data.message
      );
      store.commit("ModalError", true);
    } else if (supp == "l'utilisateur n'existe pas") {
      store.commit("ModalMessage", response.data.message);
      store.commit("ModalError", true);
    } else if (supp == "Mise à jour réussie") {
      store.commit("ModalSucces", true);
      store.commit("ModalMessage", response.data.message);
    } else if (response.status == 201) {
      store.commit("ModalSucces", true);
      store.commit("ModalMessage", response.data.message);
    } else if (response.status == 200) {
      // console.log("RESP 200", response);
      if(response.data.message == "Card effacé"){
        store.commit("ModalSucces", true);
        store.commit("ModalMessage", response.data.message);
      }
    } else if (response.status == 200 && response.data.message == "OK") {
      store.commit("AuthAdmin", true);
    }

    return response;
  },

  //---------------___  ERREURS  ___-------------------

  (error) => {
    // console.log("ERROR INTER", error);
    // console.log("ERROR INTER", error.response.data.error);
    // store.commit("ModalError", true);

    if (error.response.status == 401 || error.error == 401) {
      store.commit("ModalMessage", "Accés non autorisé");
      store.commit("ModalError", true);
      // console.log("MODAL MESSAGE", error.response.data.error);
    } else if (error.response.status == 429) {
      //trop de requetes trop vite
      store.commit("ModalError", true);
      store.commit(
        "ModalMessage",
        "Nombre de requetes excessives, réessayer dans un instant "
      );
    } else if (error.response.status == 404) {
      store.commit("ModalError", true);
      store.commit("ModalMessage", "page not found");
    } else if (error.response.data.error) {
      console.log("ERREUR");
      store.commit("ModalError", true);
      store.commit("ModalMessage", error.response.data.error.text);
    } 

    // ----------------------------------------------//

    return Promise.reject(error);
  }
);

// // --------------------------------------------------------------//

const store = createStore({
  setup() {
    const router = useRouter();
    const route = useRoute();
  },
  state: {
    status: false,
    loading: false,
    pageData: [],
    blogData:"",
    token: "",
    doLogin: "",
    dologout: "",
    userName: "",

    auth: "",

    modalMessage: "",
    modalError: false,
    modalSucces: false,
    preview_component: "",
    calUpdate: false,
    imgData: "",
    auth: false,
    cardCalSelect: "",
    navData: "",
    lang: "",
    linkNewPassword: "",
    namePage: "",
    newPost: "",
    postSelected: "",
    postUpdate: "",
    geoLoc: "",

    langPage:"",
    light: "",
    userTime: "",
    userLocalHour: "",
    dataUser: "",

    darkTheme:"",
  },
  modules: {
    // dataPageModul : dataPageModul

  },
  //----------------------------------------------------------------------------------//
  //----------------------------------*** MUTATION ***---------------------------------//
  //----------------------------------------------------------------------------------//
  mutations: {
    AuthAdmin: (state, val) => {
      // console.log("MUT ADMIN AUTH", val);
      state.auth = val;
      // eslint-disable-next-line no-undef
    },
    loading: (state, val) => {
      //  console.log("MUT USER loading", val);
      state.loading = val;
      // eslint-disable-next-line no-undef
    },
    logUser: (state, val) => {
      // console.log("MUT USER LOG USER", val);
      state.user = val;
      // eslint-disable-next-line no-undef
      $cookies.set("user", JSON.stringify(val), "1h");
    },
    logToken: (state, val) => {
      // console.log("MUT USER LOG TOKEN", val);
      state.token = val;
      state.auth = true;
      // $cookies.set("user", JSON.stringify(val.token)), "1h";
    },
    DoLogin(state, username) {
      state.auth = true;
      state.username = username;
    },
    DoLogout(state) {
      state.auth = false;
      state.username = null;
    },
    PageData: (state, val) => {
      state.pageData = val;
    },
    BlogData: (state, val) => {
      state.blogData = val;
    },
    NewPost: (state, val) => {
      state.newPost = val;
    },
    PostSelected: (state, val) => {
      // console.log("POST SELECTED MUTATION POst", val);
      state.postSelected = val;
    },
    PostUpdate: (state, val) => {
      // console.log("POST SELECTED MUTATION Update", val);
      state.postUpdate = val;
    },
    ModalError: (state, val) => {
      // console.log("ModalError", val);
      state.modalError = val;
    },
    ModalMessage: (state, val) => {
     
      state.modalMessage = val;
    },
    ModalSucces: (state, val) => {
      // console.log("ModalSucces", val);
      state.modalSucces = val;
    },
    PreviewClose: (state, val) => {
      // console.log("PREVIEW CLOSE INDEX MUT", val);
      state.preview_component = val;
    },
    CalUpdate: (state, val) => {
      state.calUpdate = val;
    },
    ImgData: (state, val) => {
      state.imgData = val;
    },
    NavData: (state, val) => {
      state.navData = val;
    },
    CardCalSelect: (state, val) => {
      state.cardCalSelect = val;
    },
    LinkNewPassword: (state, val) => {
      state.linkNewPassword = val;
    },
    NamePage: (state, val) => {
      state.namePage = val;
    },
    LangPage: (state, val) => {
      state.langPage = val;
    },
    GeoLocation: (state, val) => {
      state.geoLoc = val;
      $cookies.set("userIp", JSON.stringify(val));
    },
    LocalUserHour: (state, val) => {
      state.userLocalHour = val;
      $cookies.set("userHour", JSON.stringify(val));
    },
    Theme: (state, val) => {
      //  console.log(" MUT THEME_1-----> ", val);
      if ($cookies.get("userTime") === null) {
        // console.log(" MUT THEME_2-----> ", val);
        $cookies.set("userTime", JSON.stringify(val), "1h");
      }
      state.darkTheme = val
    },
  },

  computed: {},

  //----------------------------------------------------------------------------------//
  //----------------------------------*** ACTIONS ***---------------------------------//
  //----------------------------------------------------------------------------------//

  actions: {
    //----------------UTILITIES---------------//

    disconnect({ commit }) {
      $cookies.remove("user"), "userTime";
      commit("AuthAdmin", false);
    },

    viewWidth({ commit }) {
      if (window.navigator) {
        // console.log("NAVIGATOR----->", window);
        // console.log("NAVIGATOR LANGUAGE----->", window.clientInformation.language);
        let dataBrowser = {
          screenHeight: window.innerHeight,
          screenWidth: window.innerWidth,
          browserLanguage: window.navigator.language,
          browser: window.clientInformation.userAgentData.brands[1].brand,
          browserVersion:
            window.clientInformation.userAgentData.brands[1].version,
        };
        // console.log("SCREEN USER", dataBrowser);
        this.dataUser = dataBrowser;
        // this.isActive = false
      } else {
        // console.log("SANS NAVIGATOR");
      }
    },

    getLoc({ commit }) {
      let userTime = $cookies.get("userTime");
      // console.log("USERTIME COOKIES VALUE", userTime);
      if (userTime) {
        //  console.log(" NOT DISPATCH GET LOC");
        let timeZone = $cookies.get("userHour");
        //  commit("Theme",timeZone)
        return;
      }
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://api.bigdatacloud.net/data/ip-geolocation?ip=212.106.239.92&localityLanguage=en&key=bdc_fb0cd78789724292ba4ec846a10c55ed`
          )
          .then((res) => {
            // console.log("RESPONSE GEOLOC DATA----->", res.data.location.timeZone.localTime.split("T")[0]);

            let userData = {
              locality: res.data.location.localityName,
              country: res.data.country.name,
              IpAdress: res.data.ip,
              date: res.data.location.timeZone.localTime.split("T")[0],
              hour: res.data.location.timeZone.localTime
                .split("T")[1]
                .split(".")[0],
            };
            commit("GeoLocation", res.data.ip);
            commit("LocalUserHour", userData.hour);
            let hour = res.data.location.timeZone.localTime
              .split("T")[1]
              .split(".")[0]
              .split(":")[0];
            if (hour >= 18 || hour <= 6) {
              commit("Theme", "dark");
              // console.log("IL FAIT NUIT");
            } else {
              commit("Theme", "day");
              // console.log("------- IL FAIT JOUR ----------");
            }
            let ahora = new Date();

            // console.log("USER DATA ------> ", userData);
            return resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    //----------------* GET ADMIN AUTH *----------------//
    getAdminAuth: ({ commit }, c) => {
      return new Promise((resolve, reject) => {
        instance
          .get(`inici/ver/AdminAuth`)
          .then((res) => {
            // console.log("RES GET AUTH", res);
            commit("AuthAdmin", true);
            resolve(res);
            // console.log("RESPONSE GET STORE ADMIN AUTH", res);
            return;
          })
          .catch((err) => {
            // console.log("ERROR AUTH ADMIN INDEX ", err.response.status);
            if (err.response.status == 401) {
              window.location.href = "http://localhost:8080/portada";
              //  that.$router.Push("/login");
            }
            reject(err);
          });
      });
    },
    //----------------* GET PAGE DATA 2 *---------------//

    getPageData: ({ commit }, n) => {
      
      // console.log(" PAGE GET PAGE DATA", n);

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
            commit("LangPage", lang);

            // console.log("RESPONSE GET PAGE DATA STORE", res.data);
            let ahora = Date.now();
            // console.log("HEURE DU CHARGEMENT DATE NOW +18---->", ahora);
            return resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    //----------------* GET NAV DATA *---------------//
    getNavData: ({ commit }, l) => {
      // console.log("GET NAV BAR INDEX",l);
      commit("loading", true);
      let lang = l;
      let n = "navbar";
      if ($cookies.get("lang")) {
        let l = $cookies.get("lang");
        lang = l.lang;
        // console.log("COOKIES LANG---->", lang);
      } else {
        lang = "cat";
      }

      return new Promise((resolve, reject) => {
        // console.log("GET NAV DATA", n);
        instance
          .get(`inici/nav?name=${n}&lang=${lang}`)
          .then((res) => {
            commit("loading", false);
            commit("NavData", res.data);
            resolve(res);

            // console.log("RESPONSE NAV DATA STORE", res.data);
          })
          .catch((err) => {
            commit("loading", false);
            reject(err);
          });
      });
    },
    //----------------* GET IMG DATA *---------------//

    getImgData: ({ commit }, n) => {
      commit("loading", true);
      return new Promise((resolve, reject) => {
        // console.log("GET IMG DATA", n);
        instance
          .get(`inici/img?name=${n}`)
          .then((res) => {
            commit("ImgData", res.data);
            commit("loading", false);
            resolve(res);

            // console.log("RESPONSE IMG DATA STORE", res.data);
          })
          .catch((err) => {
            commit("loading", false);
            reject(err);
          });
      });
    },
    //------------- SIGNUP LOGIN-------------------_//

    signupPost: ({ commit }, userData) => {
      return new Promise((resolve, reject, response) => {
        instance
          .post("/inici/coconexion", userData)
          .then((res) => {
            commit("Status", true);

            // console.log("REPONSE", res);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    forgotPassword: ({ commit }, data) => {
      const email = data.email;
      // console.log("EMAIL FORGOT PASSWORD STORE", email);
      return new Promise((resolve, reject, res) => {
        instance
          .post("/inici/forgot-password", data)
          .then((res) => {
            if (res) {
              // console.log("RES FORGOT", res);
              commit("LinkNewPassword", res);
            }

            // console.log("REPONSE", res);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    resetPassword: ({ commit }, data) => {
      const email = data.email;
      return new Promise((resolve, reject, res) => {
        instance
          .post("/inici/forgot-password", {
            email: email,
          })
          .then((res) => {
            // console.log("RES FORGOT", res);

            // console.log("REPONSE", res);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    loginPost: ({ commit }, userData) => {
      // console.log("LOGIN POST STORE");
      commit("loading", true);
      return new Promise((resolve, reject) => {
        instance
          .post("/inici/coconexion", userData)
          .then((response) => {
            //  setHeaders(response.data.token)
            // console.log("RESP LOGIN INDEX", response.data);
            commit("logUser", response.data);
            commit("logToken", response.data.token);
            // commit("Logon", response.data.userLogon);
            commit("loading", false);
            resolve(response);
          })
          .catch((err) => {
            commit("loading", false);
            reject(err);
          });
      });
    },

    //------------- UPDATE------------------_//

    updatePage: ({ commit }, data) => {
      commit("loading", true);
      const page = data.page;
      // console.log("INDEX UPDATE PAGE DATA", data);
      let lang = "";
      if ($cookies.get("lang")) {
        let l = $cookies.get("lang");
        lang = l.lang;
        // console.log("COOKIES LANG---->", lang);
      } else {
        lang = "cat";
      }
      return new Promise((resolve, reject) => {
        instance
          .put(`/inici/update?name=${page}`, data.data, {})
          .then((res) => {
            commit("loading", false);
            resolve(res);
          })
          .catch((err) => {
            commit("loading", false);
            reject(err);
          });
      });
    },

    //------------- CREATE DATE-------------------_//

    createDate: ({ commit }, data) => {
      commit("loading", true);
      return new Promise((resolve, reject) => {
        instance
          .post("/inici/cal/create?page=cal", data, {})
          .then((response) => {
            commit("ArtData", response.data);
            commit("loading", false);
            resolve(response);
          })
          .catch((err) => {
            commit("loading", false);
            reject(err);
          });
      });
    },

    //------------- CREATE POST-------------------_//

    createPost: ({ commit }, data) => {
      return new Promise((resolve, reject) => {
        instance
          .post("/inici/create?page=post", data, {})
          .then((response) => {
            commit("NewPost", response.data);
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

 //------------- CREATE IMG-------------------_//

    createImg: ({ commit }, data) => {
// console.log("DATA FORM CREATE IMG",data);
      return new Promise((resolve, reject) => {
        instance
          .post("/inici/cal/create?page=img", data, {})
          .then((response) => {
            // commit("NewImg", response.data);
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    //---------------DELETE CARD CALENDAR----------------//

    delCard: ({ commit }, data) => {
      const id = {
        id: data.idCard,
      };
      const page = data.page;

      return new Promise((resolve, reject) => {
        instance
          .put(`/inici/del?name=${page}`, id, {})
          .then((response) => {
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },


  }, // fin actions
}); // fin Store

export default store;
