'use strict';
module.exports = (sequelize, DataTypes) => {
  var Venue = sequelize.define('Venue', {
    venueName: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
       
      }
    }
  });

  Venue.associate = function(models){
    Venue.belongsTo(models.VenueDetail);
  }
  return Venue;
};