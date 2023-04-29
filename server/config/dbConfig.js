const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const connection = mongoose.connection;

connection.on('err', () => {
    console.log('error in connecting.');
});

connection.on('connected', () => {
    console.log('connected to database.');
});

module.exports = connection;