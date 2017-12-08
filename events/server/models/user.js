
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false
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
        type: {
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