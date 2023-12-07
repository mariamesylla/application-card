const express = require("express");
const app = express()
const itemRouter = require('./items.js')
const saucesRouter = require('./sauces.js')
const userRouter = require('./user.js')

// different model routers
app.use('/sauces',saucesRouter);
app.use('/items', itemRouter);
app.use('/users', userRouter);

module.exports = app;
