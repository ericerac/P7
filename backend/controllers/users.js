//const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { QueryTypes } = require("@sequelize/core");
const UserModel = require("../models/users");

const Sequelize = require("sequelize");
const fs = require("fs");
const db = require("../models");


//-----------TABLES CONFIG-----------//

const Comment = db.comment;
const articles = db.article;
const user = db.users;
const dislikes = db.disLike;

//-------------------------------------//
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

const User = UserModel(sequelize, Sequelize);
//---------------------------------------------//

// -----------------SIGNUP-----------------------//

exports.signup = async (req, res, next) => {
 
  const hash = await bcrypt.hash(req.body.password, 10);
  const [user, created] = await User.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
    },
  });
  if (created) {
    res.status(201).json(user);
    
  } else {
    res.status(404).json({ message: "Email utilisateur existant" });
  }
};

// -----------------LOGIN----------------------//

exports.login = async (req, res, next) => {
 
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    const password_valid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (password_valid) {
      token = jwt.sign({ id: user.id }, `${process.env.TOKEN}`, {
        expiresIn: `${process.env.TOKEN_VALIDITY}`,
      });
      let userId = user.id;
      await User.update(
        {
          logon: Date.now(),
        },
        {
          where: {
            id: userId,
          },
        }
      );
      res
        .status(200)
        .json({ token: token, userId: user.id, userRole: user.role });
     
    } else {
      res.status(400).json({ error: "Mot de passe incorrect !" });
    }
  } else {
    res.status(404).json({ error: "Ce compte n'existe pas" });
  }
};

// -----------GET ONE USER DATA-------------------//

exports.GetOneUser = async (req, res, next) => {
  
  const params = req.query.id;
  //const params = req.body.id;
  const oneUser = await user.findOne({
    attributes: {
      exclude: ['password']
  },
    where: { id: `${params}` },
    include: [
      {
        model: articles,
        as: "article",
      },
      {
        model: dislikes,
        as: "dislike",
      },
      {
        model: Comment,
        as: "comment",
      },
    ],
    distinct: true,
    col: "articleId",
  });
 
  res.json(oneUser);
};

//---------------GET ALL USERS--------------------//

exports.GetAllUsers = async (req, res, next) => {
  const allUsers = await user.findAll({
    attributes: {
      exclude: ['password']
  },
    include: [
      {
        model: articles,
        as: "article",
      },
      {
        model: Comment,
        as: "comment",
      },
    ],
    distinct: true,
    col: "articleId",
  });
  res.json(allUsers);
};

//---------------GET MULTI USERS--------------------//

exports.GetMultiUsers = async (req, res, next) => {
  const params = req.body.id;
  let AllUsers = [];
 
  for (let i of params) {
    const allUsers = await user.findAll({
      attributes: {
        exclude: ['password']
    },
      where: { id: params },
      include: [
        {
          model: articles,
          as: "article",
        },
        {
          model: Comment,
          as: "comment",
        },
      ],
      distinct: true,
      col: "articleId",
    });
    AllUsers = allUsers;
  }
  if (AllUsers) {
    res.json(AllUsers);
  } else {
    res.status("erreur 404");
  }
};

//------------UPDATE PROFIL USER---------------//

exports.updateUser = async (req, res) => {
  
  const form = "";
  form.toString(req.body).valueOf(req.body);
 
  const formData = req.body;
  
  const id = formData.userId;

  const UserOne = await user.findOne({
    where: { id: `${id}` },
  });

  if (!req.file) {
    Data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
     
      userId: formData.userId,
    };
  } else if (req.file){
    if(UserOne.media){

      const filename = UserOne.media.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {})
    }

    Data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      
      userId: formData.userId,
      media: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    };
  }
  const response = await User.update(
    {
      ...Data,
    },
    {
      where: { id: id },
    }
  )
    .then((data) => {
      
      const res = {
        success: true,
        data: data,
        message: "Mise à jour réussie",
      };
      return res;
    })
    .catch((error) => {
      
      const res = {
        success: false,
        error: error,
        message: "Echec lors de la mise à jour",
      };
      return res;
    });
  res.json(response);
};

exports.destroyUser = async (req, res) => {
  const params = req.query.id;
  const params1 = req.body.id;
  
  const UserTo = await user.findOne({
    where: { id: `${params}` },
  });
  
  if (!UserTo) {
    res.json({ message: "l'utilisateur n'existe pas" });
    return;
  } else {
   

    const UserOne = await user.findOne({
      where: { id: `${params1}` },
    });
    
    
    if (!UserOne.role === "admin" || UserOne.id != UserTo.id) {
      res.status(401).json({ message: " requete non autorisée" });
    } else {
      let supprimer ="";
      if(UserOne.media){
        
        const filename = UserOne.media.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {

           supprimer = User.destroy({ where: { id: params } });
           if (supprimer) {
            res.json({ message: "Compte utilisateur supprimé" });
          }
          
        });
      } else {
         supprimer = User.destroy({ where: { id: params } });

      }
      if (supprimer) {
        res.json({ message: "Compte utilisateur supprimé" });
      }
    }
  }
};
