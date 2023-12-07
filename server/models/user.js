const { sequelize, DataTypes } = require('../db.js');

const User = sequelize.define('User',{
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
})


module.exports = {
    User
};