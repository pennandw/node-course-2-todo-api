//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('cant login');
    }
    console.log('Connected to the server');
/* 
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todo count: ${count}`);
    }, (err, result) => {
        if (err) {
            return console.log('Unable to fetch todos', err);
        }
    }); */

    
/*     db.collection('Todos').find({
        _id: new ObjectID('5bef4d047d7f9d9a3b995353')
    }).toArray().then((docs) => {
        console.log('TODOS:')
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err, result) => {
        if (err) {
            return console.log('Unable to fetch todos', err);
        }
    }); */
    
    db.collection('Users').find({name: "Dwane"}).toArray().then((docs) => {
        console.log('NAME:')
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err, result) => {
        if (err) {
            return console.log('Unable to fetch todos', err);
        }
    });

    
 /*    db.collection('Todos').find().toArray().then((docs) => {
        console.log('TODOS:')
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err, result) => {
        if (err) {
            return console.log('Unable to fetch todos', err);
        }
    }); */

/*     db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */

    //db.close();
});