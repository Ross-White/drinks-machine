const router = require('express').Router();
const { sellDrinkController, getDrinkController, resetDrinksController } = require('../../controllers/drinkControllers')

router.get('/', getDrinkController);
router.put('/sell', sellDrinkController);
router.put('/reset', resetDrinksController);

module.exports = router;