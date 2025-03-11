const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    destination: String, 
    startDate: Date,
    endDate: Date,

});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;