'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('address', {
      id: {
        autoIncrement: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      address: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      pincode: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });

    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('address');
  }
};
