const { sequelize, DataTypes } = require('../db.js');

const Item = sequelize.define('Form',{
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    category: DataTypes.STRING,
    image: DataTypes.STRING
})


module.exports = {
    Form
};