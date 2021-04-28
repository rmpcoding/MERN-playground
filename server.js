const express = require('express');
require('./db/mongoose');
const User = require('./models/User');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/test', async (req, res) => {
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

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
