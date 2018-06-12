const mongoose = require('mongoose');
const config = require('../../common/config');

mongoose.connect(config.mongo.uri);

const db = mongoose.connection;

db.once('connected', () => {
    console.log('mongodb connect to', config.mongo.uri);
})

db.on('disconnected', () => {
    console.log('mongodb disconnected from', config.mongo.uri); 
})

db.on('error', (err) => {
    console.error('mongodb connect error', err);
})