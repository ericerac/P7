






 export default {
     data:  {
         return:{

         }
     },
namespaced : true,
//-----------------GET ONE USER DATA----------------(())
getUserData: async ({ commit }, data) => {
    // const token = userToken;
    //  const token = this.token;
    // console.log("TOKEN", token);
    const userId = data;
    console.log("DATA", data); // version UserList
    //const userId = data.userId;

    console.log("DATA", data, userId);

    await instance
      .get(`/user?id=${userId}`, {
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

 }