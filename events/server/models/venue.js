'use strict';
module.exports = (sequelize, DataTypes) => {
  var Venue = sequelize.define('Venue', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    venueName: {
      type: DataTypes.STRING
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
      type:DataTypes.STRING
    },
    password:{
      type: DataTypes.STRING
    },
    googleId:{
      type: DataTypes.STRING
    },
    linkedInId:{
      type: DataTypes.STRING
    },
    image:{
      type: DataTypes.STRING
    },
    email:{
      type: DataTypes.STRING
    }
  

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
       
      }
    }
  });

 
  return Venue;
};