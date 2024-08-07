'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      id: {
        autoIncrement: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      brand_id: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      quantity: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      stock: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: true
      },
      shop_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'shop_details',
          key: 'id'
        }
      }
    });

   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};
