import { createStore } from "vuex";
const axios = require("axios");
import setHeaders from "../utils/setHaeaders";
const mapState = require("vuex");
import Vue from "vue";
import VueCookies from "vue-cookies";
import users from "./users";

let userId = "";
let userToken = "";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

// ----------- INTERCEPTORS REQUEST -----------------//

instance.interceptors.request.use(
  function (config) {
  

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

// ----------- INTERCEPTORS RESPONSE -----------------//

instance.interceptors.response.use(
  function (response) {
    const supp = response.data.message;

    if (supp == "jwt expired") {
      console.log("JWT EXPIRED");

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
    store.commit("ModalError", true);
    if (error.response.status == 401) {
      store.commit("ModalMessage", error.response.data.message);
    } else if (error.response.data.error == "Ce compte n'existe pas") {
      store.commit("ModalMessage", error.response.data.error);
    } else if (error.response.data.error == "Mot de passe incorrect !") {
      store.commit("ModalMessage", error.response.data.error);
    } else if (error.response.data.message) {
      store.commit("ModalMessage", error.response.data.message);
    } else if (error.response.status == 429) {
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

const store = createStore({
  state: {
    status: false,

    user: "",
    userId: "",

    token: "",
    logoutErr: "",
    detailUser: false,
    modal: false,
    modalMessage: "",
    modalSucces: false,
    succesMessage: "",

    PostData: {},

    articles: "",

    updateUser: {
      firstName: "",
      lastName: "",
      email: "",
      userId: "",
      token: "",
      media: "",
    },
    userToken: "",
    formData: {
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      media: "",
    },
    useData: "",
    allsUsersData: "",
    userData: "", // data user connected
    alldata: "",
    artData: "", // contenu des articles
  },
  modules: {
    users,
  },
  mutations: {
    logUser: (state, user) => {
      state.user = user;
      $cookies.set("user", JSON.stringify(user));
    },

    logToken: (state, token) => {
      state.token = token;
    },

    ModalError: (state, val) => {
      state.modal = val;
    },

    ModalMessage: (state, val) => {
      state.modalMessage = val;
    },

    CloseDetailUser: (state, val) => {
      state.detailUser = val;
    },

    OpenDetailUser: (state, val) => {
      state.detailUser = val;
    },

    ModalSucces: (state, val) => {
      state.modalSucces = val;
    },

    OpenModalSucces: (state, val) => {
      state.modalSucces = val;
    },

    SuccesMessage: (state, val) => {
      state.succesMessage = val;
    },
    Status: (state, val) => {
      state.status = val;
    },

    UserData: (state, userData) => {
      state.userData = userData;
    },
    AllsUsersData: (state, allsUsersData) => {
      state.allsUsersData = allsUsersData;
    },
    ArtData: (state, artData) => {
      state.artData = artData;
    },
    UseData: (state, useData) => {
      state.useData = useData;
    },

    AllData: (state, alldata) => {
      state.alldata = alldata;
    },

    logoutErr: (state, logoutErr) => {
      state.logoutErr = logoutErr;
    },

    FormData: (state, formData) => {
      state.formData = formData;
    },
    Articles: (state, articles) => {
      state.articles = articles;
    },
    Comments: (state, comments) => {
      state.comments = comments;
    },
    UsersId: (state, usersId) => {
      state.usersId = usersId;
    },
  },

  computed: {},

  actions: {
    erreurSignupForm: ({ commit }) => {
      commit("erreurMessage", true);
    },

    modalErrorClose: ({ commit }) => {
      commit("ModalError", false);
      window.location.reload();
    },

    OpenDetailUser: ({ commit }) => {
      commit("CloseDetailUser", true);
    },

    CloseDetailUser: ({ commit }) => {
      commit("CloseDetailUser", false);
    },

    disconnect() {
      $cookies.remove("user");
      userId = "";

      this.$router.push("/");
    },

    //------------- SIGNUP LOGIN-------------------_//

    signupPost: ({ commit }, userData) => {
      return new Promise((resolve, reject, response) => {
        instance
          .post("/signup", userData)
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
      return new Promise((resolve, reject) => {
        instance
          .post("/login", userData)
          .then((response) => {
            //  setHeaders(response.data.token)
            console.log("RESP LOGIN INDEX", response.data);
            commit("logUser", response.data);
            commit("logToken", response.data.token);
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    //-----------------GET ONE USER DATA----------------(())
    getUserData: async ({ commit }, data) => {
      const userId = data;

      await instance
        .get(`/user?id=${userId}`, {})
        .then((res) => {
          const countArticle = res.data.article.length;
          commit("Articles", countArticle);
          const countComment = res.data.comment.length;

          commit("Comments", countComment);

          if (res) {
            commit("UserData", res.data);
          } else {
          }
        })
        .catch((err) => {});
    },

    //-----------------DELETE USER--------------------//

    deleteUser: ({ commit }, data) => {
      const userDel = data;

      const body = {
        id: data,
      };

      return new Promise((resolve, reject) => {
        instance
          .put(`/user/delete?id=${data}`, body, {})
          .then((response) => {
            if (response) {
              commit("CloseDetailUser", false);
            }
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    //----------UPDATE USER 1------------//

    updateUser: ({ commit }, Data) => {
      const token = userToken;

      return new Promise((resolve, reject) => {
        instance
          .put("/user/update", Data, {})
          .then((response) => {
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    //-----------------GET ALL USERS DATA----------------(())
    getAllUsersData: async ({ commit }, usersId) => {
      const token = userToken;

      await instance
        .get(`/user/all`, {})
        .then((res) => {
          commit("AllsUsersData", res.data);
        })
        .catch((err) => {});
    },
    //-----------UPLOAD POST-----------------//
    uploadPost: ({ commit }, data) => {
      const token = userToken;

      return new Promise((resolve, reject) => {
        instance
          .post("/article/post", data, {})
          .then((response) => {
            commit("ArtData", response.data);
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    //-------------------UPDATEPOST-----------------//

    updatePost: ({ commit }, Data) => {
      const token = userToken;

      return new Promise((resolve, reject) => {
        instance
          .put("/article/update", Data, {})
          .then((response) => {
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    //-----------UPLOAD COMMENT-----------------//uploadComment
    uploadComment: ({ commit }, data) => {
      const token = userToken;

      return new Promise((resolve, reject) => {
        instance
          .post("/comment/post", data, {})
          .then((response) => {
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    //----------------GET ALL ARTICLES---------------//
    getAllArticle: ({ commit }) => {
      const token = userToken;
      const Us = userId;

      return new Promise((resolve, reject) => {
        instance
          .get(`/article/all`, Us, {})
          .then((res) => {
            const usersId = [];

            const Artrevers = res.data.reverse();
            commit("ArtData", Artrevers);
            const resData = res.data;
            const art = resData.article;

            const comments = resData.map((a) => a.comment);
            const sommeLike = resData.map((item) => item.dislike);

            const liked = sommeLike.map((l) => l.like).reduce((a, b) => a + b);
            commit("Comments", comments);

            commit;

            commit("UsersId", usersId);

            resolve(res);
          })

          .catch((err) => {
            reject(err);
          });
      });
    },

    //---------------DELETE ARTICLE----------------//

    deleteArticle: ({ commit }, data) => {
      const token = userToken;

      return new Promise((resolve, reject) => {
        instance
          .put(`/article/delete`, data, {})
          .then((response) => {
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    //---------------DELETE COMMENT----------------//

    deleteComment: ({ commit }, data) => {
      const token = userToken;

      return new Promise((resolve, reject) => {
        instance
          .put(`/comment/delete`, data, {})
          .then((response) => {
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    //----------------- LIKE POST----------------//

    // likePost: ({ commit }, data) => {
    //   const token = userToken;

    //   return new Promise((resolve, reject) => {
    //     instance
    //       .post(`/like/post`, data, {

    //       })
    //       .then((response) => {

    //         resolve(response);
    //       })
    //       .catch((err) => {

    //         reject(err);
    //       });
    //   });
    // },
  }, // fin actions
});

export default store;
