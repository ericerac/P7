const router = require("express").Router();
const Sequelize = require("sequelize");
const CommentModel = require("../models/comment");
const fs = require("fs");
//require('../config/db.config)
const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.USER_NAME}`,
  `${process.env.PASSWORD_DB}`,
  {
    
    host: "localhost",
    dialect: "mysql",
  }
);
// Objet sequelize
const comment = CommentModel(sequelize, Sequelize);







//-----------PUBLISH A COMMENT ---------------//

exports.publish = async (req, res, next) => {
  
  let artPost = "";

  if (req.file) {
    
    artPost = {
      // userId: req.body.userId,
      comment: req.body.comment,
      articleId: req.body.articleId,
      userId: req.body.userId,

      media: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    };
  } else {
    
    artPost = {
      userId: req.body.userId,
      comment: req.body.comment,
      articleId: req.body.articleId,
      userId: req.body.userId,

    };
   
  }
  const publish = await comment.create({
    ...artPost,
  });
 
  if (publish) {
   
    res.json(publish);
  } else {
    res.json({ message: "erreur 404" });
  }
};


//-----------DELETE COMMENT ---------------//

exports.destroyComment = async (req, res) => {
  const params = req.body.id;
 
  const oneComment = await comment.findOne({
    where: { id: `${params}` },
  });

  let data = oneComment.media;

  

  if (data) {
    const filename = data.split("/images/")[1];
    
    fs.unlink(`images/${filename}`, () => {});
  }
  const suprimmer = await comment.destroy({ where: { id: params } });

  if (suprimmer) {
    res.json({ message: "Commentaire supprimé" });
  } else {
    res.json({ message: "erreur 404" });
  }
};