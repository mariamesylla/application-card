const { sequelize, DataTypes } = require('../db.js');

const Sauce = sequelize.define("Sauces", {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  module.exports = { 
    Sauce
  }