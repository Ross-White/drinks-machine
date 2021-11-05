const router = require('express').Router();
const drinksRoutes = require('./drinks-routes');
const moneyRoutes = require('./money-routes')

router.use('/drinks', drinksRoutes);
router.use('/money', moneyRoutes)

module.exports = router;