const express = require('express');
const expense = require('../controllers/expense');

const router = express.Router();


router.get('/all/:year', expense.getAll);
router.get('/get/:id', expense.getOne);
router.get('/get/yearly/:year', expense.getByYear);

router.post('/add', expense.create);
router.put('/update/:id', expense.update);
router.post('/delete/:id', expense.remove);

module.exports = router;