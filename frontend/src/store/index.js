//---------------------------------------//
//---------------------------------------//
//---------------------------------------//
//---------------------------------------//
//---------------------------------------//
import { createApp } from "vue";
import { createStore } from "vuex";
const commit = require("vuex");

import { router } from "../router";
import Vuex from "vuex";

import Vue from "vue";

import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

import axios from "axios";

// let userId = "";
// let userToken = "";

// // --------------------------------------------------------------//
// // -----------------*** INSTANCE ***----------------//
// // --------------------------------------------------------------//

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

// // --------------------------------------------------------//
// // -----------*** INTERCEPTORS REQUEST "2" ***-----------------//
// // --------------------------------------------------------//

instance.interceptors.request.use(
  function (config) {
    console.log(" INTER REQ CONFIG", config);
    console.log(" INTER REQ CONFIG", config.data);

    // if(!config.data){
    //   console.log(" INTER REQ config data ----> ","FALSE");
    //   store.commit("ModalMessage", "C'est ici qu'il faut arreter la requete en cas de body");
    //   throw new axios.Cancel('Operation canceled by the user.');
    // }

    if ($cookies.get("user")) {
      const AuthUser = $cookies.get("user");
      const token = AuthUser.token;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

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
    console.log("RESPONSE STATUS", response.status);

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
      console.log("RESP 200", response);
    }else if (response.status == 200 && response.data.message == "OK"){
      store.commit("AuthAdmin",true)
    }

    return response;
  },

  //---------------___  ERREURS  ___-------------------

  (error) => {
    console.log("ERROR INTER", error);
    // console.log("ERROR INTER", error.response.data.error);
    // store.commit("ModalError", true);

    if (error.response.status == 401) {
      store.commit("ModalMessage", error.response.data.error);
      store.commit("ModalError", true);
      // console.log("MODAL MESSAGE", error.response.data.error);
    } else if (error.response.status == 429) {
      //trop de requetes trop vite
      store.commit(
        "ModalMessage",
        "Nombre de requetes excessives, réessayer dans un instant "
      );
    } else if (error.response.status == 404) {
      store.commit("ModalMessage", "page not found");
    } else if (error.response.data.error) {
      store.commit("ModalMessage", error.response.data.error.text);
    } else if ((res.status = 404)) {
      store.commit("ModalMessage", "Ça marche pas");
    }

    // ----------------------------------------------//

    return Promise.reject(error);
  }
);

// // --------------------------------------------------------------//

const store = createStore({
  state: {
    status: false,
    loading: false,
    pageData: "",
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
    lang:"",
  },
  modules: {},
  //----------------------------------------------------------------------------------//
  //----------------------------------*** MUTATION ***---------------------------------//
  //----------------------------------------------------------------------------------//
  mutations: {
    
    AuthAdmin: (state, val) => {
      console.log("MUT ADMIN AUTH", val);
      state.auth = val;
      // eslint-disable-next-line no-undef
    },
    loading: (state, val) => {
      console.log("MUT USER loading", val);
      state.loading = val;
      // eslint-disable-next-line no-undef
    },
    logUser: (state, val) => {
      console.log("MUT USER LOG USER", val);
      state.user = val;
      // eslint-disable-next-line no-undef
      $cookies.set("user", JSON.stringify(val), "1h");
    },
    logToken: (state, val) => {
      console.log("MUT USER LOG TOKEN", val);
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
    ModalError: (state, val) => {
      console.log("ModalError", val);
      state.modalError = val;
    },
    ModalMessage: (state, val) => {
      console.log("ModalMessage", val);
      state.modalMessage = val;
    },
    ModalSucces: (state, val) => {
      console.log("ModalSucces", val);
      state.modalSucces = val;
    },
    PreviewClose: (state, val) => {
      console.log("PREVIEW CLOSE INDEX MUT", val);
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
  },

  computed: {},

  //----------------------------------------------------------------------------------//
  //----------------------------------*** ACTIONS ***---------------------------------//
  //----------------------------------------------------------------------------------//

  actions: {
    //----------------UTILITIES---------------//

    disconnect() {
      $cookies.remove("user");

      // this.$router.push("/");
    },

    PreviewClose: ({ commit }, val) => {
      console.log("PREVIEW CLOSE INDEX", val);
      commit("PreviewClose", val);
    },

    FileUpload(event) {
      this.fileSelected = event.target.files[0];
    },

    //----------------* GET ADMIN AUTH *----------------//
    getAdminAuth:({commit}) =>{
      let that = this;
      return new Promise((resolve, reject) => {
        instance
          .get(`inici/ver/AdminAuth`)
          .then((res) => {
          
             commit("AuthAdmin", true);
            resolve(res);
            console.log("RESPONSE GET STORE ADMIN AUTH", res);
return
          })
          .catch((err) => {
            console.log("ERROR AUTH ADMIN INDEX ",err.response.status);
            if(err.response.status == 401){
              window.location.href = "http://localhost:8080/portada"
              //  that.$router.Push("/login");
            }
           
            reject(err);
          });
      });
    },
    //----------------* GET PAGE DATA 2 *---------------//
    getPageData: async({ commit }, n) => {

      let lang = "";
commit("loading",true)
      if ($cookies.get("lang")) {
        let l = $cookies.get("lang");
        lang = l.lang;
        console.log("COOKIES LANG GET PAGE INDEX---->", lang);
      } else {
        lang = "cat";
      }
      
      
      return new Promise((resolve, reject) => {
        instance
          .get(`inici?name=${n}&lang=${lang}`)
          .then((res) => {
            commit("loading",false)
            commit("PageData", res.data);
      
            console.log("RESPONSE GET STORE", res.data);
            let ahora = Date.now();
            console.log("HEURE DU CHARGEMENT DATE NOW +18---->", ahora);
            return resolve(res);

          })
          .catch((err) => {
            reject(err);
          });
       
      });

        
      
    },
    //----------------* GET NAV DATA *---------------//
    getNavData: ({ commit },l ) => {
      let lang = l;
      let n =   "navbar"
      if ($cookies.get("lang")) {
        let l = $cookies.get("lang");
        lang = l.lang;
        console.log("COOKIES LANG---->", lang);
      } else {
        lang = "cat";
      }
      
        console.log("Retardée de 3 seconde.");
      
      return new Promise((resolve, reject) => {
        console.log("GET NAV DATA", n);
        instance
          .get(`inici/nav?name=${n}&lang=${lang}`)
          .then((res) => {
            commit("NavData", res.data);
            resolve(res);

            console.log("RESPONSE NAV DATA STORE", res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
   
    },
    //----------------* GET IMG DATA *---------------//

    getImgData: ({ commit }, n) => {
      return new Promise((resolve, reject) => {
        console.log("GET IMG DATA", n);
        instance
          .get(`inici/img?name=${n}`)
          .then((res) => {
            commit("ImgData", res.data);
            resolve(res);

            console.log("RESPONSE IMG DATA STORE", res.data);
          })
          .catch((err) => {
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

            console.log("REPONSE", res);
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
          .post("/inici/forgot-password",
          {
            email:email,
          })
          .then((res) => {
            console.log("RES FORGOT",res);
           
            console.log("REPONSE", res);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },


    loginPost: ({ commit }, userData) => {
      console.log("LOGIN POST STORE");
      return new Promise((resolve, reject) => {
        instance
          .post("/inici/coconexion", userData)
          .then((response) => {
            //  setHeaders(response.data.token)
            console.log("RESP LOGIN INDEX", response.data);
            commit("logUser", response.data);
            commit("logToken", response.data.token);
            // commit("Logon", response.data.userLogon);
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    //------------- UPDATE------------------_//

    updatePage: ({ commit }, data) => {
      const page = data.page;
      console.log("INDEX UPDATE PAGE DATA", data);
      let lang = "";
      if ($cookies.get("lang")) {
        let l = $cookies.get("lang");
        lang = l.lang;
        console.log("COOKIES LANG---->", lang);
      } else {
        lang = "cat";
      }
      return new Promise((resolve, reject) => {
        instance
          .put(`/inici/update?name=${page}`, data.data, {})
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    //------------- CREATE-------------------_//

    createDate: ({ commit }, data) => {
      return new Promise((resolve, reject) => {
        instance
          .post("/inici/cal/create?page=cal", data, {})
          .then((response) => {
            commit("ArtData", response.data);
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
