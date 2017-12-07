
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
          type: DataTypes.STRING,
          allowNull: false
        },
        zipCode: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull:false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type:  DataTypes.STRING
        }
      })

      return User;
    }