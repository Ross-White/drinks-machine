const router = require('express').Router();
const { getAllDrinksController, sellDrinkController, resetDrinksController } = require('../../controllers/drinkControllers')

router.get('/', getAllDrinksController)
router.put('/sell', sellDrinkController);
router.put('/reset', resetDrinksController);

module.exports = router;