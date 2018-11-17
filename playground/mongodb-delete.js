//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('cant login');
    }
    console.log('Connected to the server');

    // detele many
// db.collection('Todos').deleteMany({text: "lunch"}).then((result) => {
//     console.log(result);

// });



    // delete one
// db.collection('Todos').deleteOne({text: "lunch"}).then((result) => {
//     console.log(result);

// });

    // find one and delete
    db.collection('Todos').findOneAndDelete({text: "lunch"}).then((result) => {
        console.log(result);
    });
    //db.close();
});