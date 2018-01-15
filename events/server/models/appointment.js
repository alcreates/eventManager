'use strict';
module.exports = (sequelize, DataTypes) => {
  var Appointment = sequelize.define('Appointment', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    venueId: {
      type: DataTypes.UUID,
      references: {
        model: 'Venue',
        key: 'id'
      }

    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Appointment.associate = function(models){
    Appointment.belongsTo(models.Venue);
  }
  return Appointment;
};