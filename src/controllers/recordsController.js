const mongoose = require('mongoose');
const recordsModel = mongoose.model('records');

const getAllRecords = (req, res) => {
  const records = recordsModel.find({});
  return records;
};


module.exports = {
  getAllRecords,
};
