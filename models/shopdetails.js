const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shop_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    shop_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    shop_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pincode: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contact_details: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shop_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
