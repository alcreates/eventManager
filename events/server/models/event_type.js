module.exports = (sequelize, DataTypes) => {
    const Event_Type = sequelize.define('event_type', {
        name: {
            type: DataTypes.STRING          
        }
       
        
      })

      return Event_Type;
    }