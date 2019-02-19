'use strict'

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
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/assets/images/placeholder.jpg'
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 500
  }
});

module.exports = Product;
