const express = require('express');
const { User } = require('../models/user');
const apiRouter = express.Router();

apiRouter.get('/api/:userId', [], async (req, res) => {
    const foundUser = await User.findOne({ userId: req.params.userId });
    if (foundUser) {
        foundUser.password = undefined;
        console.log(foundUser);
        // console.log(password);

        return res.send(foundUser);
    } else {
        return res.send('User not found!');
    }
});

module.exports = { apiRouter };