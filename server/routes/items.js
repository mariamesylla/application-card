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

// Post /items 
itemRouter.post('/', async (req, res, next) => {
  try {
    const item = await Item.create(req.body)
    res.json(item)
  } catch (err) {
    res.sendStatus(500)
    next(err);
  }
})
// Update item
// itemRouter.put("/:id", async (req, res, next) => {
//   try {
//     let item = await Item.findByPk(req.params.id)
//     if (!item) return res.sendStatus(404)
//     item= await item.update(req.body)
//     await item.save()
//     res.send(item)
//   } catch (err) {
//     //res.sendStatus(500)
//     next(err);
//   }
// });

// Update item second

itemRouter.put("/:id", async (req, res, next) => {
  try {
   const item = await Item.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(item)
    //res.send(item)
    res.sendStatus(200);
  } 
  catch (error) {
    next(error);
  }
});

// Update /:id
itemRouter.put('/:id', async (req, res, next) => {
  try {
    let item = await Item.findByPk(req.params.id)
    if (!item) return res.sendStatus(404)
    item = await item.update({ ...item, ...req.body })
    res.send(item)
  } catch (err) {
    res.sendStatus(500)
    next(err);
  }
})

//Delete /:id
itemRouter.delete('/:id', async (req, res, next) => {
  try {
    let item = await Item.findByPk(req.params.id)
    if (!item) return res.sendStatus(404)
    item = await item.destroy()
    res.send(item)
  } catch (err) {
    res.sendStatus(500)
    next(err);
  }
})
module.exports = itemRouter;