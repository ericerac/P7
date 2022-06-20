

export default {
  namespaced: true,
  state: {

    articles:"",
    comments:"",
    message:"",

  },


  mutations: {

    Articles: (state, count) => {
      state.articles = count;
    },
    Comments: (state, count) => {
      state.comments = count;
    },
    UserData: (state, userData) => {
      state.userData = userData;
    },
    Message: (state, message) => {
      state.message = message;
    },

  },


  getters: {


  },


  actions: {
    //-----------------GET ONE USER DATA----------------(())
    getUserData: async ({ commit }, data) => {
      const userId = data;
      console.log("DATA", data); // version UserList

      console.log("DATA", data, userId);

      await instance
        .get(`/user?id=${userId}`, {})
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
  }, // fin ACTIONS
};
