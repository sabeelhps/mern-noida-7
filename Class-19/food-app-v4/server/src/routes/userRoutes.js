const express = require('express');
const catchAsync = require('../core/catchAsync');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Register the fake user
router.get('/fake-user', catchAsync(async (req, res) => {
    const plainPassword = '12345';
    const hash = await bcrypt.hash(plainPassword, 12);
    const user = await User.create({ username: 'ajay', password: hash, email: 'ajay@gmail.com' });
    res.status(200).json(user);
}));


module.exports = router;