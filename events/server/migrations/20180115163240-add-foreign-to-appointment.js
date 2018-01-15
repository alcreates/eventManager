'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn( 'Appointments', 'venueId', Sequelize.UUID,  {
      model: 'Venue',
      key: 'id'
    } );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn( 'Appointments', 'venueId' );
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
