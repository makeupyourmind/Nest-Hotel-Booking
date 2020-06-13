const mongoose = require('mongoose');
const config = require('../key')

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true
});

const Schema = mongoose.Schema;
const UserDetail = new Schema({
      role: String,
      email: String,
      password: String
});

const UserDetails = mongoose.model('users', UserDetail);

module.exports = UserDetails;
