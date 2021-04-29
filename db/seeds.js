const User = require('../models/User');
require('./mongoose');

const users = [
    {
        name: 'Robert Lemon',
        email: 'email1@email.com',
        password: 'password',
    },
    {
        name: 'Jon Smith',
        email: 'email2@email.com',
        password: 'password',
    },
    {
        name: 'Jon1 Smith',
        email: 'email3@email.com',
        password: 'password1',
    },
];

User.deleteMany({}).then(() => {
    User.insertMany(users).then((data) => {
        console.log(data + ' records inserted!');
    });
});
