var express = require('express');
var path = require('path');
var Pulsar = require('pulsar');
var app = express();

app.use(express.static(path.join(__dirname, "/public")));

var httpServer = app.listen(8080);


var world = {};
var pulse = Pulsar.createServer({server:httpServer});
var room = pulse.channel('main');

room.on('join', function(img){
  var x = 0;
  var y = 0;
  world[img] = [x,y];
  room.emit('join', img, x, y);
});

room.on('move', function(img, x, y){
  world[img] = [x,y];
  room.emit('move', img, x, y);
});

room.on('leave', function(img){
  delete world[img];
  room.emit('leave', img);
});

console.log("Server running on 8080");