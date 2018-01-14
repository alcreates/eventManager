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
        Venue.belongsTo(models.VenueDetail,{
          foreignKey: 'VenueId',
          onDelete: 'CASCADE'
        });
      }
    }
  });

//   Venue.associate = function(models){
   
// }
  return Venue;
};