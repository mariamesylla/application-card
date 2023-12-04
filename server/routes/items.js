const express = require("express");
const router = express.Router();
const { Item } = require("../models/Item");

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// Get /:id
router.get('/:id', async (req, res, next) => {
    try {
      const item = await Item.findByPk(req.params.id)
      if (!item) return res.sendStatus(404)
      res.send(item)
    } catch (err) {
      next(err);
    }
  })

module.exports = router;