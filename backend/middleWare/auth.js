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
  

  if (req.headers.authorization == undefined || !req.headers.authorization) {
    

    res.status(401).json({
      error: new Error(),
      message: "Requete Non authorisée",
    });
    return;
  }
  const token = req.headers.authorization.split(" ")[1]; // récupère le token dans le header
  // console.log("-----token-----", token);
  const decodedToken = jwt.verify(token, `${process.env.TOKEN}`,function(err, user) {
    if (err) { 
    // console.log("ERREUR",err);
     res.json(err);
     return 
  } else {
    next();
    
  }
  });
  if(decodedToken){

  const userIdTok = decodedToken.id; // récupère l'id du token


  const oneUser = await user
    .findOne({
      where: { id: `${userIdTok}` },
    })
    .then((res) => {
   
      let role = res.role;
      
      if (role === "admin") {
       
        return true;
       
      } else {
       
      
      }
    });

  try {
    

    if ((req.body.id && req.body.id === userIdTok) || oneUser == true) {
      

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
