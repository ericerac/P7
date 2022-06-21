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


//_____________________________________________
// _______________  AUTH _______________

module.exports = async (req, res, next) => {
  console.log("HEADERS------>>>", req.headers);
  //
  console.log("BODY----->>>", req.body);

  if (req.headers.authorization == undefined || !req.headers.authorization) {
    console.log("HEADERS AUTH------>>>", req.headers.authorization);

    res.status(401).json({
      error: new Error(),
      message: "Requete Non authorisée",
    });
    return;
  }
  const token = req.headers.authorization.split(" ")[1]; // récupère le token dans le header
  console.log("-----token-----", token);
  const decodedToken = jwt.verify(token, `${process.env.TOKEN}`,function(err, user) {
    if (err) { 
    console.log("ERREUR",err);
     res.json(err);
     return 
  } else {
    next();
    
  }
  });
  if(decodedToken){

    
  
  const userIdTok = decodedToken.id; // récupère l'id du token

  // console.log("-----verify token-------", decodedToken);
  console.log("-----userId-------", userIdTok);
  console.log("-----req.query.id-------", req.query.id); // **+* changer a body  ****
  console.log("-----req.query.id-------", req.body.id); 

  const oneUser = await user
    .findOne({
      where: { id: `${userIdTok}` },
    })
    .then((res) => {
      // console.log("RES", res.role);
      let role = res.role;
      let admin = "admin";
      console.log("ONE USER ROLE", role);

      if (role === admin) {
        // reponse si UserId  correspond a l'admin
        console.log(" ADMIN");
       
      } else {
        console.log(" NON ADMIN");
      
      }
    });

  try {
    console.log("on est là try auth");
    //console.log(userId);

    console.log("oneUser", oneUser);
    console.log("REQ.BODY.ID", req.body.id);

    if ((req.body.id && req.body.id === userIdTok) || oneUser == true) {
      // compare l'id du token avec l'id utilisateur
      console.log("REQ:BODY === USER-ID TOK");

      next(); // si Id identhique ça continu " la route est protégée"
    } else if (req.query.id && req.query.id === userIdTok) {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error(),
      message: "Erreur: Requete non autorisée",
    });
  }
}
};
