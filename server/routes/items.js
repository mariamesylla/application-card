const express = require("express");
const itemRouter = express.Router();
const { Item } = require("../models/Item.js");


// GET /items
itemRouter.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// Get /:id
itemRouter.get('/:id', async (req, res, next) => {
    try {
      const item = await Item.findByPk(req.params.id)
      if (!item) return res.sendStatus(404)
      res.json(item)
    } catch (err) {
      next(err);
    }
  })

module.exports = itemRouter;