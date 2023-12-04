const express = require("express");
const saucesRouter = express.Router();
const { Sauce } = require("../models/index");

// GET /sauce
saucesRouter.get("/", async (req, res, next) => {
  try {
    const sauces = await Sauce.findAll();
    res.send(sauces);
  } catch (error) {
    next(error);
  }
});

module.exports = saucesRouter;
