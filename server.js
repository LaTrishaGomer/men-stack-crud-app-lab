const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(express.urlencoded({ extended: false }));


// GET 
app.get('/', async (req, res) => {
    res.render('index.ejs');
  });

  app.get('/trips', async (req, res) => {
    const allTrips = await Trip.find();
    res.render('trips/index.ejs', { trips: allTrips });
  });
  

app.get('/trips/new', (req, res) => {
    res.render('trips/new.ejs');
});

app.post('/trips', async (req, res) => {
    console.log(req.body);
    await Trip.create(req.body);
    res.redirect('/trips');
});


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


const Trip = require('./models/trip.js');


app.listen(3000, () => {
  console.log('Listening on port 3000');
});
