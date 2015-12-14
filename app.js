// Create a new Express server
// Create routes to: Create a dog, get dogs, and get a dog
//
// Stretch
// Create routes for Update and Delete
// Make a route to display a JOIN between owners and dogs
// Create a route to PATCH a change to a single dog column
// Connect to someone else’s Postgres database (you will have to modify postgres config files)

var Express = require('express');
var app = Express();
var bodyParser = require('body-parser');
var api = require('./api');

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res){
  res.redirect('/dogs');
});

// ---READ--- //
app.get('/dogs', function(req, res){
  api.dogs.read()
  .then(function(results){
    res.json(results);
  });
});

app.get('/dogs/:id', function(req, res){
  api.dog.read(req.params.id)
  .then(function(results){
    res.json(results);
  });
});

// ---CREATE--- //
app.post('/dogs/new', function(req, res){
  api.dog.create(req.body.name, req.body.breed)
  .then(function(results){
    res.json(results);
  });
});

// ---UPDATE--- //
app.put('/dogs/:id', function(req,res){
  api.dog.update(req.params.id, req.body.name, req.body.breed)
  .then(function(results){
    res.json(results);
  });
});

// ---DELETE--- //

app.delete('/dogs/:id', function(req,res){
  api.dog.delete(req.params.id)
  .then(function(results){
    res.json(results);
  })
})






app.listen(8000, function(){
  console.log('App listening on port 8000');
})
