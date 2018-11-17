var express = require('express');
var bodyParser = require('body-parser'); 
var {ObjectID} = require('mongodb')

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');
var port = process.env.PORT || 3000

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => { 
  var todo = new Todo({
    text: req.body.text
  });
  
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => { 
    res.status(400).send(e);
  });
}); 

app.listen(port, () => {
  console.log(`Started on port: ${port}`);
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(400).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo){
            return res.status(400).send();
    }

   res.send({todo});

    }).catch((e) => {
        res.status(400).send();
    }); 
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(400).send();
    }

    Todo.findOneAndRemove({"_id": id}).then((todo) => {
        if (!todo){
            return res.status(400).send();
    }

   res.send({todo});

    }).catch((e) => {
        res.status(400).send();
    }); 
});


module.exports = {app};

/* app.post('/todos', (req, res) => { 
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
     res.send(doc);
    }, (e) => {
    res.status(400).send(e);
    }
    );

}); */

/* app.post('/users', (req, res) => { 
    console.log(req.body)
    }); */


