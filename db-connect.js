const mongoose = require('mongoose');

module.exports = {
    connectDB: function () {
        return mongoose.connect('mongodb://localhost:27017/AuthDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    },
}