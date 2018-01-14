'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Admin_Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName:{
        type: Sequelize.STRING
      },
      streetAddress:{
        type: Sequelize.STRING
      },
      zipCode:{
        type: Sequelize.STRING
      },
      phoneNumber:{
        type: Sequelize.STRING
      },
      password:{
        type: Sequelize.STRING
      },
      image:{
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Admin_Users');
  }
};