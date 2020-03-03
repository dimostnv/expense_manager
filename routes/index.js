const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const expensesRouter = require('./expenses');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello');
});

module.exports = {
  router,
  usersRouter,
  expensesRouter
};