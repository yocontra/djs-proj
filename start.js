var express = require('express');
var path = require('path');
var Pulsar = require('pulsar');
var app = express();

app.use(express.static(path.join(__dirname, "/public")));

var httpServer = app.listen(8080);

var tiles_wide = 16;
var tiles_high = 12;

function randLoc() {
	return {
    x: Math.floor(Math.random() * tiles_wide),
    y: Math.floor(Math.random() * tiles_high)
  };
}

var world = {
  players: {},
  scores: {},
  coin: {}
};
var pulse = Pulsar.createServer({server:httpServer});
var room = pulse.channel('main');

function addCoin() {
  world.coin = randLoc();
  room.emit('coin', world.coin);
}
addCoin();

room.on('coin', function(img){
  if (!world.scores[img]) {
    world.scores[img] = 1;
  }
  else {
    world.scores[img]++;
  }
  addCoin();
});

room.on('join', function(uname){
  if (uname && ! world.players[uname]) {
    world.players[uname] = randLoc();
    room.emit('join', uname, world[img]);
  } else {
    room.emit('badname');
  }
  
});

room.on('move', function(snake, pos){
  pos = {
    x: pos.left,
    y: pos.top
  }
  world.players[snake] = loc;
  room.emit('move', img, loc);
});

room.on('leave', function(img){
  delete world.players[img];
  room.emit('leave', img);
});

console.log("Server running on 8080");