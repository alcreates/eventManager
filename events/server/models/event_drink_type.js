module.exports = (sequelize, DataTypes) => {
    const Event_Drink_Type = sequelize.define('event_drink_type', {
        name: {
            type: DataTypes.STRING          
        }
       
        
      })

      return Event_Drink_Type;
    }