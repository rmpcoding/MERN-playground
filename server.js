const express = require('express');
const cors = require('cors');
const user = require('./routes/user');
const tasks = require('./routes/tasks');
require('./db/mongoose');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(user);
app.use(tasks);

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
