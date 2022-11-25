

//---------------------------------------//
//---------------------------------------//
//---------------------------------------//
//---------------------------------------//
//---------------------------------------//
import { createApp } from 'vue'
import { createStore } from "vuex";
const commit = require("vuex");

import {loginPost} from "./user"
import Vuex from "vuex";
// const mapState = require("vuex");
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

    console.log(" INTER REQ CONFIG",config);

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

// // // --------------------------------------------------------//
// // // -----------*** INTERCEPTORS REQUEST 1 ***-----------------//
// // // --------------------------------------------------------//

// instance.interceptors.request.use(
//   function (config) {
//     if ($cookies.get("user")) {
//       const AuthUser = $cookies.get("user");
//       const token = AuthUser.token;

//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }
// console.log(" INTER REQ",config);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );




// // --------------------------------------------------------------//
// // -----------------*** INTERCEPTORS RESPONSE ***----------------//
// // --------------------------------------------------------------//

instance.interceptors.response.use(
  function (response) {
    const supp = response.data.message;
    //  console.log("RESPONSE",response);
    console.log("RESPONSE INTER", supp);
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
    }

    return response;
  },
  (error) => {
    console.log("ERROR INTER", error);
    // console.log("ERROR INTER", error.response.data.error);
    store.commit("ModalError", true);
    if (error.response.status == 401) {
      store.commit("ModalMessage", error.response.data.error);
      store.commit("ModalError", true);
      // console.log("MODAL MESSAGE", error.response.data.error);
    }
    //else if (error.response.data.error == "Ce compte n'existe pas") {
    //   store.commit("ModalMessage", error.response.data.error);
    // } else if (error.response.data.error == "Mot de passe incorrect !") {
    //   store.commit("ModalMessage", error.response.data.error);
    // } else if (error.response.data.message) {
    //   store.commit("ModalMessage", error.response.data.message);

    // } 
    //  else if (error.response.data.error == "Compte utilisateur non trouvé !") {
    //   this.store.commit("ModalMessage", error.response.data.error);
    //   console.log("error.response.data.message",error.response.data.message);

    // } 
    else if (error.response.status == 429) { //trop de requetes trop vite
      store.commit(
        "ModalMessage",
        "Nombre de requetes excessives, réessayer dans un instant "
      );
    } else if (error.response.data.error.text) {
      store.commit("ModalMessage", error.response.data.error.text);
    }

    // ----------------------------------------------//

    return Promise.reject(error);
  }
);

// // --------------------------------------------------------------//


const store = createStore({
  state: {
    status: false,
    user:"",
    pageData: "",
    token: "",
    doLogin: "",
    dologout: "",
    userName: "",
    auth: "",
    modalMessage: "",
    modalError: false,
  },
  modules: {},

  mutations: {
    logUser: (state, val) => {
      console.log("MUT USER LOG USER", val);
      state.user = val;
       // eslint-disable-next-line no-undef
       $cookies.set("user", JSON.stringify(val), "1h");
    },
    logToken: (state, val) => {
      console.log("MUT USER LOG TOKEN", val);
      state.token = val;
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
    }
    ,
    ModalMessage: (state, val) => {
      console.log("ModalMessage", val);
      state.modalMessage = val;
    }
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

    modalErrorClose:
      ({
        commit,
      }) => {
        commit("ModalError", false)

      },
    

    //----------------* GET PAGE DATA 2*---------------//
    getPageData:
      ({
        commit,
      },
        n) => {
        return new Promise((resolve, reject) => {
          instance
            .get(`inici?name=${n}`)
            .then((res) => {
              commit("PageData", res.data);

              console.log("RESPONSE GET STORE", res.data);
              resolve(res);
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

 //----------------* UTILITIES *---------------//

    FileUpload(event) {
     
      this.fileSelected = event.target.files[0];

    },


    updatePage: ( { commit },data) => {
      
      
      console.log("INDEX UPDATE PAGE DATA",data);
      
      return new Promise((resolve, reject) => {
        instance
          .put(`/inici/update?name=calendar`, data, {})
          .then((response) => {
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // ************* UPDATE 2 *****************

    // updatePage:({ commit }, Data) => {
    //   const id = Data.id

    //   return new Promise((resolve, reject) => {
    //     instance
    //       .put(`/user/update?_id=${id}`, Data, {})
    //       .then((response) => {
    //         resolve(response);
    //       })
    //       .catch((err) => {
    //         reject(err);
    //       });
    //   });
    // },

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
  }, // fin actions
}); // fin Store

export default store;
