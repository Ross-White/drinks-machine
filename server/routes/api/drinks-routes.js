const router = require('express').Router();
const { sellDrinkController, getDrinkController } = require('../../controllers/drinkControllers')

router.get('/', getDrinkController);
router.put('/:id', sellDrinkController);

module.exports = router;