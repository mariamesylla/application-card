const {sauces, items, users} = require('./seedData.js');

const {sequelize} = require('./db');
const {Sauce} = require('./models/Sauce.js');
const {Item} = require('./models/index');
const {User} = require('./models/index')

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(sauces.map(sauce => Sauce.create(sauce)));

        await Promise.all(items.map(item => Item.create(item)));

        await Promise.all(users.map(user => User.create(user)));

        // await Promise.all(
        //     users.map((user, index) => user.createItem({ name: 'Test Item with User'}))
        // )

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
