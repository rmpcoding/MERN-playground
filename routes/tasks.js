const Router = require('express').Router();

Router.get('/tasks', (req, res) => {
    res.json({
        tasks: 'something',
        tasks1: 'something',
        tasks2: 'something',
        tasks3: 'something',
    });
});

module.exports = Router;
