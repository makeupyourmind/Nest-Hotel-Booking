const mongoose = require('mongoose');
const config = require('../key')

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true
});

const Schema = mongoose.Schema;
const hallDetail = new Schema({
      title: String,
      description: String,
      imageURL: String
});

const HallDetail = mongoose.model('halls', hallDetail);

module.exports = HallDetail;
