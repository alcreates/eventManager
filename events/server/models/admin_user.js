'use strict';
module.exports = (sequelize, DataTypes) => {
  var Admin_User = sequelize.define('Admin_User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName:{
      type: DataTypes.STRING
    },
    streetAddress:{
      type: DataTypes.STRING
    },
    zipCode:{
      type: DataTypes.STRING
    },
    phoneNumber:{
      type: DataTypes.STRING
    },
    password:{
      type: DataTypes.STRING
    },
    image:{
      type: DataTypes.STRING
    },
    email:{
      type:DataTypes.STRING
    },
    type:{
      type:DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Admin_User;
};