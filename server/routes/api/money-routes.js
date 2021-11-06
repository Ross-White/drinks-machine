const router = require('express').Router();
const { addMoneyController, resetMoneyController } = require('../../controllers/moneyController')

router.put('/add', addMoneyController);
router.put('/reset', resetMoneyController);


module.exports = router;