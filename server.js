const express = require('express');
const Router = express.Router();
require('./db/mongoose');

const app = express();

const PORT = process.env.PORT || 3001;

Router.get('/test')

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
