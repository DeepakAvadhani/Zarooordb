const sequelize = require('../config/sequelize');
const DataTypes = require('sequelize').DataTypes;
const _favorites = require('./favorites');
const _cart_item = require('./cart_item');
const _address = require('./address');
const _product = require('./product');
const _shopdetails = require('./shopdetails');
const _users = require('./user');

const cart_item = _cart_item(sequelize, DataTypes);
const favorites = _favorites(sequelize, DataTypes);
const address = _address(sequelize, DataTypes);
const product = _product(sequelize, DataTypes);
const shopdetails = _shopdetails(sequelize, DataTypes);
const users = _users(sequelize, DataTypes);

address.belongsTo(users, { as: 'user', foreignKey: 'user_id' });
users.hasMany(address, { as: 'addresses', foreignKey: 'user_id' });

favorites.belongsTo(users, { as: 'user', foreignKey: 'user_id' });
users.hasMany(favorites, { as: 'favorites', foreignKey: 'user_id' });

favorites.belongsTo(product, { as: 'product', foreignKey: 'product_id' });
product.hasMany(favorites, { as: 'favorites', foreignKey: 'product_id' });

cart_item.belongsTo(users, { as: 'user', foreignKey: 'user_id' });
users.hasMany(cart_item, { as: 'cart_items', foreignKey: 'user_id' });

cart_item.belongsTo(product, { as: 'product', foreignKey: 'product_id' });
product.hasMany(cart_item, { as: 'cart_items', foreignKey: 'product_id' });

cart_item.belongsTo(shopdetails, { as: 'shop', foreignKey: 'shop_id' });
shopdetails.hasMany(cart_item, { as: 'cart_items', foreignKey: 'shop_id' });

module.exports = {
  sequelize,
  favorites,
  cart_item,
  address,
  product,
  shopdetails,
  users
};
