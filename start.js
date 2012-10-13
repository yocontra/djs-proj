var express = require('express');
var path = require('path');
var Pulsar = require('pulsar');
var app = express();

app.use(express.static(path.join(__dirname, "/public")));

var httpServer = app.listen(8080);

var tiles_wide = 16;
var tiles_high = 12;

function randLoc() {
	return [Math.floor(Math.random() * tiles_wide), Math.floor(Math.random() * tiles_high)];
}

var world = {};
var pulse = Pulsar.createServer({server:httpServer});
var room = pulse.channel('main');
var coin_counts = {};

function addCoin() {
  world['coin'] = randLoc();
  room.emit('coin', world['coin']);
}
addCoin();

room.on('coin', function(img){
  if (!coin_counts[img]) {
	coin_counts[img] = 1;
  }
  else {
	coin_counts[img]++;
  }
  addCoin();
});

room.on('join', function(img){
  var loc = randLoc();
  world[img] = [loc[0], loc[1]];
  room.emit('join', img, loc[0], loc[1]);
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
