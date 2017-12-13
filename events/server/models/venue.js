module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('venue', {
        name: {
          type: DataTypes.STRING          
        },
        phoneNumber: {
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
        }
      })

      return User;
    }