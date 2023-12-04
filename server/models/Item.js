const {sequelize, DataTypes} = require('../db');

const Item = sequelize.define('Item',{
    

    name: DataTypes.STRING,
    
    description: DataTypes.STRING,

    price: DataTypes.FLOAT,

    category: DataTypes.STRING,

    image: DataTypes.STRING
    

})


module.exports = {
    Item
};