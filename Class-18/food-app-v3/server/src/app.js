const express = require('express');
const app = express();

// This is used to parse json data coming in request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes 
const foodRoutes = require('./routes/foodRoutes');

app.get('/echo', (req, res) => {
    res.send('Recived Echo!');
});

app.use(foodRoutes);

module.exports = app;