const User = require('../models/user');

module.exports = {
  getOne(_id) {
    return User.findOne({ _id })
  },
  getAll() {
    return User.find({});
  }
}