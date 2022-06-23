// const router = require("express").Router();
// const Sequelize = require("sequelize");
// const LikeModel = require("../models/like");
// const DislikeModel = require("../models/dislike");
// const {Op} = require("sequelize");
// const db = require("../models");
// const { json } = require("body-parser");
// const Comment = db.comment;
// const article = db.article;
// const User = db.users;
// const Like = db.like;
// const Dislike = db.disLike;

// // --------------------------------------------//

// const sequelize = new Sequelize(
//   `${process.env.DB_NAME}`,
//   `${process.env.USER_NAME}`,
//   `${process.env.PASSWORD_DB}`,
//   {
//     //require('../config/db.config)
//     host: "localhost",
//     dialect: "mysql",
//   }
// );

// // const like = LikeModel(sequelize, Sequelize);
// // const dislike = DislikeModel(sequelize, Sequelize);

// //--------------GET ARTICLES--------------------OK--//
// exports.AllLike = async (req, res, next) => {
//   console.log("-------All Articles--------");
//   console.log("-------req.params-------", req.query);
//   const allLike = await Dislike.findAll({
//     include: [
//       {
//         model: User,
//         as: "user",
//         require: true,
//       },
//     ],
//   });
//   res.json(allLike);
//   console.log(allLike);
// };

// //-----------------POST LIKE---------------------//

// exports.postLike = async (req, res, next) => {
//   console.log("REQ:BODY LIKE BACK", req.body);

//   const params1 = req.body.userId;
//   const params2 = req.body.articleId;
//   const likePost = req.body.like;
//   const dislikePost = req.body.dislike;

  

//   const UserLike = await Dislike.findOne({
//     where: { userId: `${params1}`, articleId: `${params2}`,like:`${likePost}`,dislike:`${dislikePost}` },
//   });

//   if (UserLike) {
//     console.log("DEJA LIKED", UserLike);
//      res.status(401).json({message:" Article déjà liked"});
//      return
    
//   }

//   const createLike = await Dislike.create({
//     like: likePost,
//     dislike:dislikePost,
//     userId: params1,
//     articleId: params2,

//   });
//   console.log("ART-POST","LIKE-->", likePost,"DISLIKE-->", dislikePost);
//   if (createLike) {

//     const countLike = await Dislike.count ({
//       where:{articleId:params2, like:1}
      
//     });
//     const countdisLike = await Dislike.count ({
//       where:{articleId:params2, dislike:1}
      
//     });
// console.log("COUNTLIKE--->",countLike);
// console.log("COUNTLIKE--->",countdisLike);
//      const artLike = await article
//      .update(
//        {
//          likes: countLike,
//          dislikes: countdisLike,
//        },
//        {
//          where: { id:`${params2}`, userId:`${params1}`},
//        }
//      )
// console.log("UPDATE ART PUSH--->","ARTICLE-ID--->",params2,"LIKE--->",likePost,"DISLIKE--->",dislikePost);
//     if(artLike){
//   res.status(201).json({message:"avis enregistré"});
//  return
//     }
   
//   } else {
//   //   const suprimmer = await article.destroy({ where: { id: params } });

//   // if (suprimmer) {
//   //   res.json({ message: "Article supprimé" });
//   // } else {
//   //   res.json({ message: "erreur 404" });
//   // }
//     res.json({ message: "erreur 404" });
//   }
// };




