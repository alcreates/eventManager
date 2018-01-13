module.exports = (sequelize, DataTypes) => {
    const Event_Location = sequelize.define('event_location', {
        name: {
            type: DataTypes.STRING          
        },
        zipCode: {
            type: DataTypes.INTEGER   
        }
       
        
      })

      return Event_Location;
    }