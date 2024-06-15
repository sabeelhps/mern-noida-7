const express = require('express');
const app = express();
const cors = require('cors');

// This is used to parse json data coming in request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
}));

// Routes 
const foodRoutes = require('./routes/foodRoutes');
const userRoutes = require('./routes/userRoutes');

app.get('/echo', (req, res) => {
    res.send('Recived Echo!');
});

app.use("/api/v1/foods", foodRoutes);
app.use("/api/v1/users", userRoutes);


// Error Handler
app.use((err, req, res, next) => {
    const { status = 500, message = 'Internal server error' } = err;
    res.status(status).json({ errMsg: message })
});

module.exports = app;