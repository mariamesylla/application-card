const {User} = require('./user')
const {Item} = require('./Item')

User.hasMany(Item)
Item.belongsTo(User)


module.exports = {
  User, 
  Item
};
