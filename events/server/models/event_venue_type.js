module.exports = (sequelize, DataTypes) => {
    const Event_Venue_Type = sequelize.define('event_venue_type', {
        name: {
            type: DataTypes.STRING          
        }
       
        
      })

      return Event_Venue_Type;
    }