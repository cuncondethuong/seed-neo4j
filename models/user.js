const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  UserName: {
    type: String,
  },
  FullName: {
    type: String,
  },
  Password: {
    type: String,
  },
  Gmail: {
    type: String,
  },
  Image: {
    Public_Id: {
      type: String,
      id: false,
    },
    ImageUrl: {
      type: String,
      id: false,
    },
  },
  AboutYourSelf: {
    type: String,
  },
}, { collection: 'User' });

const Users = mongoose.model('User', schema);
module.exports = Users;