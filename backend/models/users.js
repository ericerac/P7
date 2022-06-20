
const dbConfig = require ('../config/db.config')
var Sequelize = require("sequelize");
var sequelize = new Sequelize(dbConfig);

/*  Models */

module.exports = (sequelize,type) => {
  const User = sequelize.define("user", {
    id: {
      type: type.UUID,
      defaultValue: type.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: type.STRING,
      allowNull: false,
    },
    lastName: {
      type: type.STRING,
      allowNull: false,
    },
    email: {
      type: type.STRING, unique: true,
      allowNull: false,
    },
    password: {
      type: type.STRING,
      allowNull: false,
      validate: {
        len: [8, 20]
      }
    },
    media:{
      type:type.CHAR(255)
    },
    role:{
      type: type.STRING,
      allowNull: false,
      defaultValue: 'user',
    },
   logon:{
      type: type.DATE,
      allowNull: true,
     defaultValue: null,
    }
    
  });
  
  return User;
};
