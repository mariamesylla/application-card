const express = require("express");
const app = express()
const itemRouter = require('./items.js')
const saucesRouter = require('./sauces.js')

// different model routers
app.use('/sauces',saucesRouter);
app.use('/items', itemRouter);

module.exports = app;
