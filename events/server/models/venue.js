module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define('venue', {
        venueName: {
          type: DataTypes.STRING          
        },
        firstName: {
            type: DataTypes.STRING          
        },
        lastName: {
            type: DataTypes.STRING          
        },
        phone: {
          type: DataTypes.STRING  
        },
        streetAddress: {
          type: DataTypes.STRING
        },
        zipCode: {
            type: DataTypes.INTEGER
            
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        image: {
            type: DataTypes.STRING
        },
        password: {
            type:  DataTypes.STRING
        },
        googleId: {
            type:  DataTypes.STRING
        },
        facebookId: {
            type:  DataTypes.STRING
        },
        linkedInId: {
            type:  DataTypes.STRING
        },
        type : {
            type:  DataTypes.STRING
        }
        
      })

      return Venue;
    }