const mongoose = require('mongoose')
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
const APP_ENV = process.env.APP_ENV;


// Load all the models
const modelsPath = path.resolve(__dirname)
fs.readdirSync(modelsPath).forEach(file => {
    if (file !== 'index') {
        require(modelsPath + '/' + file);
    }
})

mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async ()=>{
  console.log('Database is connected!');
});