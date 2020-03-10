const express = require('express');
const expenseCategories = require('../controllers/expense-categories');

const router = express.Router();

router.get('/all', expenseCategories.getAll);
router.post('/create', expenseCategories.create);

module.exports = router;