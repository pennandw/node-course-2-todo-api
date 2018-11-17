const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');
// ///findByIdAndRemove

// Todo.findByIdAndRemove("5bf06468f609af981c7f5620").then((todo) => {
//   console.log(todo);
// });

/// todo.remove
// Todo.remove({}).then((results)=> {
//   console.log(results);
// });



/// findOneAndRemove
Todo.findOneAndRemove({"_id": "5bf0683d5b7d311812a03bcd"}).then((todo) => {
  console.log(todo);
});