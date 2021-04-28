const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/my_practice_database', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(console.log(`🛢  Database Now Connected 🛢`))
    .catch((e) => console.log(e));
