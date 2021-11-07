const mongoose = require('mongoose');

//Connects to db 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/drinksmachine');

module.exports = mongoose.connection;
