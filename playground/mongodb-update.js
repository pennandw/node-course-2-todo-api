//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('cant login');
    }
    console.log('Connected to the server');


/*     // find one and update
    db.collection('Todos').findOneAndUpdate({
         _id: new ObjectID("5bef84337d7f9d9a3b9960db")
}, { 
    $set: {
        completed: true
    } 
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }) */

       // find one and update
       db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5bef55137d7f9d9a3b99549c")
}, { 
   $set: {
       name: "Brian"
   } 
   },{
       returnOriginal: false
   }).then((result) => {
       console.log(result);
   })
    //db.close();
});