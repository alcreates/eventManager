module.exports = (sequelize, DataTypes) => {
    const Event_Amenitie = sequelize.define('event_amenitie', {
        name: {
            type: DataTypes.STRING          
        }
       
        
      })

      return Event_Amenitie;
    }