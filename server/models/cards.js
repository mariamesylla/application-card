const { sequelize, DataTypes } = require('../db.js');

const Item = sequelize.define('Card',{
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    category: DataTypes.STRING,
    image: DataTypes.STRING
})


module.exports = {
    Card
};