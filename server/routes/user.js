const User = require('../models/User')
const router = require('express').Router()

router.get('/user', async (req, res) => {
    console.log('Backend Hit: Open!');
    let name = {
        name: 'robert',
        email: 'something',
        password: 'unique',
    };
    const user = new User(name);
    
    try {
        const everyone = await User.find()

        res.json(everyone)
    } catch(e) {
        throw new Error(e)
    }
});

module.exports = router;