
// const instance = require ("./instance")


const loginPost= ({ commit }, userData) => {
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
  }

export{loginPost}