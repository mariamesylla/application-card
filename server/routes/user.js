const express = require("express");
const userRouter = express.Router();
const { User } = require("../models/user.js");
const { Item } = require("../models/index.js");


// GET /items
userRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll(
        {
            include: { 
                model: Item,
            }
        }
    );
    res.json(users)
  } catch (error) {
    next(error);
  }
});

// Get /:id
userRouter.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (!user) return res.sendStatus(404)
    res.json(user)
  } catch (err) {
    next(err);
  }
})

// Post /items 
userRouter.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.json(user)
  } catch (err) {
    res.sendStatus(500)
    next(err);
  }
})

module.exports = userRouter;