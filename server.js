const express = require('express');
const path = require('path');
const cors = require('cors');
const user = require('./routes/user');
const tasks = require('./routes/tasks');
require('./db/mongoose');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("client/build"))

if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    })
}

app.use(cors());
app.use(user);
app.use(tasks);

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
