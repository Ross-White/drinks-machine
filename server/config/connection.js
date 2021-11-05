const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/drinksmachine');

module.exports = mongoose.connection;
