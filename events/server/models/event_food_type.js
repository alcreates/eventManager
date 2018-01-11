module.exports = (sequelize, DataTypes) => {
    const Event_Food_Type = sequelize.define('event_food_type', {
        name: {
            type: DataTypes.STRING          
        }
       
        
      })

      return Event_Food_Type;
    }