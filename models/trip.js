const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: String, 
    startDate: String,
    endDate: String,

});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;