
import { createStore } from "vuex";
const axios = require("axios");
import setHeaders from "../utils/setHaeaders";
const mapState = require("vuex");
import Vue from "vue";
import VueCookies from "vue-cookies";



let userId="";
let userToken="";

// let userCookies = $cookies.get("user");
// if(!userCookies){
  
// }else{
// console.log("USER COOKIES", userCookies);
//  userId = userCookies.userId;
//  userToken = userCookies.token;}

 const instance = axios.create({
   
  baseURL: "http://localhost:3000/",
  //  headers: {
  //    Authorization: `Bearer ${userToken}`,
  //  },
});
// console.log(userId, userToken);

// ----------- INTERCEPTORS REquest -----------------//

instance.interceptors.request.use(function (config) {
  
   
    console.log("INTER REQ CONFIG",config);

  if($cookies.get("user")){

    const AuthUser = $cookies.get("user");
    const token = AuthUser.token;

    console.log("INTER REQ TOKEN",token);
   if (token) {
       config.headers.Authorization = `Bearer ${token}`;
   }
  }
 
 return config;
 
},  (error) => {
  console.log("INTER REQ ERREUR",error);
 
  return Promise.reject(error);
});

// ----------- INTERCEPTORS RESPONSE -----------------//

instance.interceptors.response.use(function (response) {
  console.log("INTER RESP OK",response);
  console.log("INTER RESP OK DATA",response.data);
  console.log("INTER RESP OK DATA MESSAGE",response.data.message);
  const supp = response.data.message
  // console.log("INTER RESP OK",response);
  // console.log("INTER RESP OK",response);
  if(supp == "jwt expired"){
    console.log("JWT EXPIRED");
// store.commit("SuccesMessage",supp),
// store.commit("ModalSucces",true)
store.commit("ModalMessage","Votre temps de session à expiré. Reconnectez-vous.",response.data.message);
store.commit("ModalError",true)


  }
  return response;
},  (error) =>  {
  // console.log("INTER RESP ERREUR TO-JSON",error.toJSON());
  console.log("INTER RESP ERROR ",error);
  console.log("INTER RESP ERROR ",error.data);

  console.log("INTER RESP ERREUR RESPONSE",error.response);
  console.log("INTER RESP ERREUR RESPONSE.DATA",error.response.data.error); // Txt resp erreur function
  console.log("INTER RESP ERREUR RESPONSE.DATA",error.response.data.message); // Txt resp erreur function
  console.log("INTER RESP ERREUR RESPONSE.STATUS",error.response.status);

  store.commit("ModalError",true)
  if(error.response.data.error){
    store.commit("ModalMessage",error.response.data.error)
  }else if(error.response.data.message){
    store.commit("ModalMessage",error.response.data.message)
  }

  return Promise.reject(error);
});



const store = createStore({
  state: {
    status: "",
    user: "",
    userId: "",
token:"",
logoutErr:"",
detailUser:false,
modal:false,
    modalMessage:"",
    modalSucces:false,
    succesMessage:"",

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
  mutations: {
    
    
    logUser: (state, user) => {
      
      console.log("RESP MUT LOG-USER", user);
      state.user = user;
      $cookies.set("user", JSON.stringify(user));
    },
    logToken: (state, token) => {
      
      console.log("RESP MUT TOKEN LOG-USER", token);
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
    
erreurSignupForm:({commit})=>{
  console.log("ERREUR SIGNUP FORM");
  commit("erreurMessage",true)

},

modalErrorClose:({commit})=>{
  console.log("MODAL-CLOSE");
  commit("ModalError", false)
},
    
OpenDetailUser:({commit})=>{
commit("CloseDetailUser",true)
},

CloseDetailUser:({commit})=>{
commit("CloseDetailUser",false)
},

disconnect() {
  console.log("DISCONNECT");
  $cookies.remove("user");
  userId = "";
  token = "";
  this.$router.push("/");
},


    //------------- SIGNUP LOGIN-------------------_//

    
    
     signupPost: ({ commit }, userData) => {
       
       return new Promise((resolve, reject,response) => {
         instance
           .post("/signup", userData)
           .then((res) => {
        
             console.log("REPONSE",res);
             resolve(res) ;
        
           })
           .catch((err) => {
             commit("logoutErr", err);
             reject(err)
             console.log("ERREUR",err);
           });
       })
     },

    loginPost: ({ commit }, userData) => {
     
      console.log("USER-DATA LOGIN INDEX", userData);
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
           

            console.log("ERREUR", err);
            reject(err);
          });
      });
    },

    //-----------------GET ONE USER DATA----------------(())
    getUserData: async ({ commit }, data) => {
      // const token = userToken;
      //  const token = this.token;
      // console.log("TOKEN", token);
       const userId = data;     
       console.log("DATA", data)     // version UserList
      //const userId = data.userId;
      
      console.log("DATA",data,userId);
      

      await instance
        .get(`/user?id=${userId}`,{
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        })
        .then((res) => {
          console.log("REPONSE USER-DATA INDEX STORE", res.data);

          const countArticle = res.data.article.length;
          commit("Articles", countArticle);
          const countComment = res.data.comment.length;
          console.log("Articles", countComment);
          commit("Comments", countComment);

          if (res) {
            commit("UserData", res.data);
            console.log("REPONSE USER-DATA INDEX STORE IF", res.data);
          } else {
            console.log("pas de data");
          }
        })
        .catch((err) => {
          console.log("reponse err", err);

          //console.log("ça m'énerve encore");
        });
    },

    //-----------------DELETE USER--------------------//

    deleteUser: ({ commit }, data) => {
      // const token = userToken;
      //  const id = userId;
      const userDel = data;
      
      // console.log("INDEX-TOKEN-USER CONNECT------->", token);
      console.log("INDEX-ID-DELETE------>", data);
      console.log("INDEX-ID-USUR CONNECT------>", userId);
      const body = {
        id:data
      }
     
      return new Promise((resolve, reject) => {
        instance
          .put(`/user/delete?id=${data}`,body,{
            
          })
          .then((response) => {
           
            if (response) {
              commit("CloseDetailUser",false)
            }
            resolve(response);
          })
          .catch((err) => {
         
            console.log("ça deconne delete index store");
            reject(err);
          });
      });
    },

    

    //----------UPDATE USER 1------------//

    updateUser: ({ commit }, Data) => {
      const token = userToken;
      console.log("TOKEN", token);
     
      console.log("UPDATE USER INDEX", Data.entries());

      return new Promise((resolve, reject) => {
        instance
          .put("/user/update", Data,{
            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          })
          .then((response) => {
            console.log("RESPONSE INDEX -->", response);

           
            resolve(response);
            console.log("REPONSE UPDATE", response);
          })
          .catch((err) => {
          
            reject(err);
            console.log("ERREUR", err);
            console.log("ça ne fonctionne pas");
          });
      });
    },

    
    //-----------------GET ALL USERS DATA----------------(())
    getAllUsersData: async ({ commit }, usersId) => {
      const token = userToken;
      console.log("TOKEN", token);
      await instance
        .get(`/user/all`, {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        })
        .then((res) => {
          console.log("reponse", res.data);
          commit("AllsUsersData", res.data);
          
          if (res) {
            
            console.log("reponse", res.data);
          } else {
            console.log("erreur data");
          }
        })
        .catch((err) => {
          console.log("reponse err", err);

          
        });
    },
    //-----------UPLOAD POST-----------------//
    uploadPost: ({ commit }, data) => {
      console.log("UPLOAD-POST INDEX", ...data.entries());
     
      const token = userToken;
      console.log("TOKEN", token);
      return new Promise((resolve, reject) => {
        instance
          .post("/article/post", data, {
            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          })
          .then((response) => {
            console.log("RESPONSE INDEX -->", response);

        
            commit("ArtData", response.data);
            resolve(response);
          })
          .catch((err) => {
           
            reject(err);
            console.log("ça ne fonctionne pas");
          });
      });
    },

    //-------------------UPDATEPOST-----------------//

    updatePost: ({ commit }, Data) => {
      const token = userToken;
      console.log("TOKEN", token);
      
      console.log("UPDATE USER INDEX", Data.entries());

      return new Promise((resolve, reject) => {
        instance
          .put("/article/update", Data,{
            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          })
          .then((response) => {
            console.log("RESPONSE INDEX -->", response);

            
            resolve(response);
            console.log("REPONSE UPDATE", response);
          })
          .catch((err) => {
            
            reject(err);
            console.log("ERREUR", err);
            console.log("ça ne fonctionne pas");
          });
      });
    },
    //-----------UPLOAD COMMENT-----------------//uploadComment
    uploadComment: ({ commit }, data) => {
      console.log("UPLOAD-POST INDEX", ...data.entries());
      
      const token = userToken;
      console.log("TOKEN", token);
      return new Promise((resolve, reject) => {
        instance
          .post("/comment/post", data, {
            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          })
          .then((response) => {
            console.log("RESPONSE INDEX -->", response);

            
            resolve(response);
          })
          .catch((err) => {
           
            reject(err);
            console.log("ça ne fonctionne pas");
          });
      });
    },
    //----------------GET ALL ARTICLES---------------//
    getAllArticle: ({ commit }) => {
      const token = userToken;
      const Us = userId;

      console.log("TOKEN", token);
      
     
      console.log("getAllArticle");
      return new Promise((resolve, reject) => {
        instance
          .get(`/article/all`, Us,{
            
          })
          .then((res) => {
            // console.log("ALL ARTICLES INDEX RES", res);
            const usersId = [];
           
            const Artrevers = res.data.reverse();
            commit("ArtData", Artrevers);
            const resData = res.data;
            const art = resData.article;
            // const like = art.like.length;

            // console.log(" LIKE-LENGTH  INDEX");
            const comments = resData.map((a) => a.comment);
            const sommeLike = resData.map((item) => item.dislike);
            
            const liked = sommeLike.map((l) => l.like).reduce((a, b) => a + b);
            commit("Comments", comments);
            // commit("ALL COMMENTS", comments);
            console.log("RESDATA  COMMENTS", res.data);

            
            console.table("RES.DATA LIKE INDEX 1", sommeLike);
            commit
            console.table("RES.DATA LIKE INDEX 2", sommeLike[2]);
            // console.log("BOUCLE INDEX USER-ID", usersId);
            commit("UsersId", usersId);

            resolve(res);
          })

          .catch((err) => {
            
            reject(err);
            console.log("ça ne fonctionne pas post art");
          });
      });
    },

    //---------------DELETE ARTICLE----------------//

    deleteArticle: ({ commit }, data) => {
      const token = userToken;
      // const userId = userId;

      console.log("INDEX-TOKEN-DELETE ARTICLE------->", token);
      console.log("INDEX-ID-DELETE ARTICLE------>", data);
      
      return new Promise((resolve, reject) => {
        instance
          .put(`/article/delete`, data, {
            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          })
          .then((response) => {
          

            resolve(response);
          })
          .catch((err) => {
           
            console.log("ça deconne delete index store");
            reject(err);
          });
      });
    },
    //---------------DELETE COMMENT----------------//

    deleteComment: ({ commit }, data) => {
      const token = userToken;
      // const userId = userId;

      console.log("INDEX-TOKEN-DELETE COMMENT------->", token);
      console.log("INDEX-ID-DELETE COMMENT------>", data);
      
      return new Promise((resolve, reject) => {
        instance
          .put(`/comment/delete`, data,{
            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          })
          .then((response) => {
           

            resolve(response);
          })
          .catch((err) => {
          
            console.log("ça deconne delete index store");
            reject(err);
          });
      });
    },

    //----------------- LIKE POST----------------//

    likePost: ({ commit }, data) => {
      const token = userToken;
      // const userId = userId
      console.log("INDEX-TOKEN-LIKE-POST------->", token);
      console.log("INDEX-ID-LIKE-POST------>", data);
      
      return new Promise((resolve, reject) => {
        instance
          .post(`/like/post`, data, {
            // headers: {
            //   Authorization: `Bearer + ${token}`,
            // },
          })
          .then((response) => {
            
            console.log("RESPONSE LIKE INDEX",response);
            
            
            resolve(response);
          })
          .catch((err) => {
            
           
            console.log("Erreur 401 LIKE-POST index store",err);
            reject(err);
          });
      });
    },

    
  }, // fin actions
});

export default store;
