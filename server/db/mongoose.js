var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(proccess.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
};