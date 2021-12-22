const User = require('../models/User');
const faker = require('faker');
require('./mongoose');

let example = []

function generateFakeData(arr, num) {
    for(let i = 0; i < num; i++) {
        arr.push({
            name: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.lorem.word(),
        })
    }
    return arr;
}

User.deleteMany({}).then(() => {
    User.insertMany(generateFakeData(example, 15))
});
