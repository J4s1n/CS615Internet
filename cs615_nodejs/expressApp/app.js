var express = require('express');
var app = express();
//
// We will handle requests here
//
app.listen(3000);

// respond to different HTTP requests:
app.get('/', function(req, res){
    res.send('This is the homepage.');
   });

// code responds to the root route
app.get('/contact', function(req, res){
    res.send('This is the contact page.');
   });

// code responds to the /contact route
app.get('/profile/:id', function(req, res){
    res.send('You requested to see profile with the id of ' +
   req.params.id);
   });