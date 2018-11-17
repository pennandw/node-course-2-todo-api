var mongoose = require('mongoose');

var Users = mongoose.model('Users',{
    name: {
        type: String,
        required: true,
        minlenght: 1,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        minlenght: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlenght: 1,
        trim: true
    }
});

module.exports = {
    Users: Users
};