'use strict';
module.exports = (sequelize, DataTypes) => {
  var VenueDetail = sequelize.define('VenueDetail', {
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
    }

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        VenueDetail.belongsTo(models.Venue,{
          foreignKey: 'VenueDetailId',
          onDelete: 'CASCADE'
        });
        
      }
    }
  });
  // VenueDetail.associate = function(models){
      
  // }
  return VenueDetail;
};