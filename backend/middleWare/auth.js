const jwt = require("jsonwebtoken");
const admin = require("../controllers/users");
const db = require("../models");
const user = db.users;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.USER_NAME}`,
  `${process.env.PASSWORD_DB}`,
  {
    //require('../config/db.config)
    host: "localhost",
    dialect: "mysql",
  }
);



// module.exports = async (req, res, next) => {
//   console.log("HEADERS------>>>", req.headers );
//   // console.log("HEADERS-AUTHO----->>>", req.headers.authorization );
// const decodedToken ="";
//   //---------------------------TEST------------------------//


// //   if (req.headers.authorization) {
//     console.log("---- IF------>>>", req.headers.authorization );
//     try {
//       // let authorization = req.headers['access-token'].split(' ');
//       const token = req.headers.authorization.split(" ")[1];
//       if (!token) {
//         return res.status(401).json({
//           ok: false,
//           err: " TOKEN ABSENT"
//         });
//       } else {
//         // console.log(token);
//        decodedToken = jwt.verify(token, `${process.env.TOKEN}`);
//        //--------   ---------- ANCIEN  -------------  --------------//
//        const userId = decodedToken.id; // récupère l'id du token

//   console.log("-----verify token-------", decodedToken);
//   console.log("-----userId-------", userId);
//   console.log("-----req.query.id-------", req.query.id); // **+* changer a body  ****

//   const oneUser = await user
//     .findOne({
//       where: { id: `${userId}` },
//     })
//     .then((res) => {
//       console.log("RES", res.role);
//       let role = res.role;
//       let admin = "admin";
//       console.log("RES2", role);

//       if (role === admin) {  // reponse si UserId  correspond a l'admin
//         console.log(" ADMIN");
//         return true;
//       } else {
//         console.log(" NON ADMIN");
//         return false;
//       }
//     });

//   try {
//     console.log("on est là try auth");
//     //console.log(userId);

//     console.log("oneUser", oneUser); 

//     if (req.body.id && req.body.id === userId  ) { // compare l'id du token avec l'id utilisateur
//       if (oneUser = true){
//         next();
//       }
      
//       throw "Id utilisateur invalide";
//     }  else {
      
//       next(); // si Id identhique ça continu " la route est protégée"
//     }
//   } catch {
//     res.status(401).json({
//       error: new Error(),
//       message: "Requete non autorisée",
//     });
//   }
       
//        //--------   ---------- FIN ANCIEN  -------------  --------------//
       
//        return next();

//       }
//     } catch (error) {
//       return res.status(403).json({
//         ok: false,
//         err: "Accés non authorisé -> " + error.message
//       });
//     }
//   } else {
//     return next();
//     // return res.status(401).json({
//     //   ok: false,
//     //   err: "Vous devez avant tout vous connecter ! "
//     // });
//   }



//   //----------************-_______________****************
//   // if(req.headers.authorization == undefined || !req.headers.authorization){
//     // console.log("HEADERS AUTH------>>>", req.headers.authorization );

   
//     // res.status(401).json({
//     //   error: new Error(),
//     //   message: "Requete Non authorisée",
//     // });
//     // return
//   // }
//   const token = req.headers.authorization.split(" ")[1]; // récupère le token dans le header
//   console.log("-----token-----", token);
//   // const decodedToken = jwt.verify(token, `${process.env.TOKEN}`);
//   // if (err){
//   //   return err
//   // } // décrypte le token
//   const userId = decodedToken.id; // récupère l'id du token

//   console.log("-----verify token-------", decodedToken);
//   console.log("-----userId-------", userId);
//   console.log("-----req.query.id-------", req.query.id); // **+* changer a body  ****

//   const oneUser = await user
//     .findOne({
//       where: { id: `${userId}` },
//     })
//     .then((res) => {
//       console.log("RES", res.role);
//       let role = res.role;
//       let admin = "admin";
//       console.log("RES2", role);

//       if (role === admin) {  // reponse si UserId  correspond a l'admin
//         console.log(" ADMIN");
//         return true;
//       } else {
//         console.log(" NON ADMIN");
//         return false;
//       }
//     });

//   try {
//     console.log("on est là try auth");
//     //console.log(userId);

//     console.log("oneUser", oneUser); 

//     if (req.body.id && req.body.id === userId  ) { // compare l'id du token avec l'id utilisateur
//       if (oneUser = true){
//         next();
//       }
      
//       throw "Id utilisateur invalide";
//     }  else {
      
//       next(); // si Id identhique ça continu " la route est protégée"
//     }
//   } catch {
//     res.status(401).json({
//       error: new Error(),
//       message: "Requete non autorisée",
//     });
//   }
// };

//_____________________________________________
// _______________ ANCIEN AUTH _______________

module.exports = async (req, res, next) => {
  console.log("HEADERS------>>>", req.headers );
  //
 console.log("BODY----->>>", req.body );

  if(req.headers.authorization == undefined || !req.headers.authorization){
    console.log("HEADERS AUTH------>>>", req.headers.authorization );

   
    res.status(401).json({
      error: new Error(),
      message: "Requete Non authorisée",
    });
    return
  }
  const token = req.headers.authorization.split(" ")[1]; // récupère le token dans le header
  console.log("-----token-----", token);
  const decodedToken = jwt.verify(token, `${process.env.TOKEN}`); // décrypte le token
  const userIdTok = decodedToken.id; // récupère l'id du token

  console.log("-----verify token-------", decodedToken);
  console.log("-----userId-------", userIdTok);
  console.log("-----req.query.id-------", req.query.id); // **+* changer a body  ****

  const oneUser = await user
    .findOne({
      where: { id: `${userIdTok}` },
    })
    .then((res) => {
      // console.log("RES", res.role);
      let role = res.role;
      let admin = "admin";
      console.log("ONE USER ROLE", role);

      if (role === admin) {  // reponse si UserId  correspond a l'admin
        console.log(" ADMIN");
        return true;
      } else {
        console.log(" NON ADMIN");
        return false;
      }
    });

  try {
    console.log("on est là try auth");
    //console.log(userId);

    console.log("oneUser", oneUser); 

    if (req.body.id && req.body.id === userIdTok  || oneUser == true) { // compare l'id du token avec l'id utilisateur
      console.log("REQ:BODY === USER-ID TOK", ); 
      // if (oneUser = true){
      //   next();
      // }
      
      // throw "Id utilisateur invalide";
    // }  else {
      
      next(); // si Id identhique ça continu " la route est protégée"
    }
  } catch {
    res.status(401).json({
      error: new Error(),
      message: "Erreur: Requete non autorisée",
    });
  }
};

