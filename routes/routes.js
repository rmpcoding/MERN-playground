const User = require('../models/User')
const Router = require('express').Router()

Router.get('/test', async (req, res) => {
    console.log('Backend Hit: Open!');
    let name = {
        name: 'robert',
        email: 'something',
        password: 'unique',
    };
    const user = new User(name);
    try {
        await user.save();
        res.json(user)
    } catch {
        res.send('Hello, World!');
    }
});

module.exports = Router;