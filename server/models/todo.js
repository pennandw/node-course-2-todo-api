// var mongoose = require('mongoose');


// module.exports = {
//     Todo: Todo
// };


// var Todo = mongoose.model('Todo',{
//     text: {
//         type: String,
//         required: true,
//         minlenght: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};





// var newTodo = new Todo({
//     text: "  finsh coding",
//     completed: false,
//     completedAt: 1234
//     });
    
//     newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
//     }, (e) => {
//         console.log('Unable to save to Todo collection', e);
//     });
    
    