
const mongoose = require('mongoose');
// just for refference
const Records = new mongoose.Schema({
    key: {type: String, required: true},
    value: {type: String, required: true},
    createdAt: {type:Date},
    counts: {type: Array},
});

module.exports = mongoose.model('records', Records, 'records');