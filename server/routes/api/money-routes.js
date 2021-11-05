const router = require('express').Router();
const addMoneyController = require('../../controllers/moneyController')

router.put('/add', addMoneyController);


module.exports = router;