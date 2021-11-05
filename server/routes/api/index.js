const router = require('express').Router();
const drinksRoutes = require('./drinks-routes');
const coinRoutes = require('./coin-routes')

router.use('/drinks', drinksRoutes);
router.use('./coins', coinRoutes)

module.exports = router;