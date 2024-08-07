'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shop_details', {
      id: {
        autoIncrement: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      shop_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      shop_type: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      pincode: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      contact_details: {
        type: Sequelize.BIGINT,
        allowNull: true
      }
    });

   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('shop_details');
  }
};
