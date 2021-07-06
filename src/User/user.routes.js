const { Router } = require('express');
const { getUser } = require('./user.controlers');
const { user } = require('./user/model');
const userRouter = Router();

userRouter.get('/user', auth, getUser);
userRouter.post('/user')

module.exports = {
    userRouter
};