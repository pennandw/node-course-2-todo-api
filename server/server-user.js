var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');


// Create a mongoose model

var User = mongoose.model('Users',{
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

var newUser = new User({
name: "  DWP",
age: false,
email: "me@dwane.ca"
});

newUser.save().then((doc) => {
console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save to Todo collection', e);
});

