const multer = require("multer");

const MIME_TYPES = {
  // dico des extensions images possibles
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
};



const storage = multer.diskStorage({
  
  destination: (req, file, callback) => {
   
    callback(null, "images");
  },
  filename: (req, file, callback) => {
   
    let name = file.originalname.split(" ").join("_");
    name = name.split(".")[0];
    const extension = MIME_TYPES[file.mimetype];
  
    callback(null, name + Date.now() + "." + extension);
  },
});


module.exports = multer({ storage }).single("media");

