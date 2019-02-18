const Sequelize = require('sequelize');
const db = require('../index');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Product;
