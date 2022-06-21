const router = require("express").Router();
const Sequelize = require("sequelize");
const ArtModel = require("../models/article");
const multer = require("multer");
const fs = require("fs");

const db = require("../models");
const Comment = db.comment;
const articles = db.article;
const User = db.users;
const Dislike = db.disLike;


const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.USER_NAME}`,
  `${process.env.PASSWORD_DB}`,
  {
   
    host: "localhost",
    dialect: "mysql",
  }
);

const article = ArtModel(sequelize, Sequelize);

//--------------GET ARTICLES--------------------OK--//
exports.published = async (req, res, next) => {
  
  const allArticle = await articles.findAll({
      include: [
        {
          model: Comment,
          as: "comment",
          require: true,

         include: {
           model: User,
           as: "user",
           require: true,
         },
        },
       {
         model: User,
         as: "user",
         require: true,
       },
       {
         model: Dislike,
         as: "dislike",
         require: true,
       },
      ],
  });
  res.json(allArticle);
  
};

//--------------GET ONE ARTICLE--------------------OK--//

exports.OnePublished = async (req, res, next) => {
  
  const params = req.query.id;
  const oneArticle = await articles.findAll({
    where: { userId: `${params}` },
    include: [
      {
        model: Comment,
        as: "comment",
        require: true,

        include: {
          model: User,
          as: "user",
          require: true,
        },
      },
      {
        model: User,
        as: "user",
        require: true,
      },
    ],
  });
  res.json(oneArticle);
};

//------------PUBLISH-----------------------OK--//

exports.publish = async (req, res, next) => {
  
  let artPost = "";

  if (req.file) {
    
    artPost = {
      userId: req.body.userId,
      content: req.body.content,

      media: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    };
  } else {
   
    artPost = { ...req.body };
  }
  const publish = await article.create({
    ...artPost,
  });
  ;
  if (publish) {
    res.status(200).json(publish);
  } else {
    res.json({ message: "erreur 404" });
  }
};



//---------------UPDATEPOST---------------------//

exports.updatePost = async (req, res) => {
 
  const form = "";
  form.toString(req.body).valueOf(req.body);
  
  const formData = req.body;
 
  const id = formData.articleId;

 

  const response = await article.update(
    {
      formData,
      content: formData.content,
     
      media: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
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
//---------------DELETE POST-------------------- OK--//
exports.destroyArt = async (req, res) => {
  const params = req.body.id;
 
  const oneArticle = await articles.findOne({
    where: { id: `${params}` },
  });

  let data = oneArticle.media;

  

  if (data) {
    const filename = data.split("/images/")[1];
    
    fs.unlink(`images/${filename}`, () => {});
  }
  const suprimmer = await article.destroy({ where: { id: params } });

  if (suprimmer) {
    res.json({ message: "Article supprimé" });
  } else {
    res.json({ message: "erreur 404" });
  }
};
