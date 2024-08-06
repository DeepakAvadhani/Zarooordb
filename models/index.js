const sequelize = require('../config/sequelize');
const DataTypes = require('sequelize').DataTypes;
const _address = require('./address');
const _product = require('./product');
const _shopdetails = require('./shopdetails');
const _users = require('./users');

const address = _address(sequelize, DataTypes);
const product = _product(sequelize, DataTypes);
const shopdetails = _shopdetails(sequelize, DataTypes);
const users = _users(sequelize, DataTypes);

address.belongsTo(users, { as: 'user', foreignKey: 'user_id' });
users.hasMany(address, { as: 'addresses', foreignKey: 'user_id' });

module.exports = {
  sequelize,
  address,
  product,
  shopdetails,
  users
};
