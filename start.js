var express = require('express');
var path = require('path');
var Pulsar = require('pulsar');
var app = express();

app.use(express.static(path.join(__dirname, "/public")));

var httpServer = app.listen(8080);

var tiles_wide = 160;
var tiles_high = 120;

function randLoc() {
	return {
    x: Math.floor(Math.random() * tiles_wide),
    y: Math.floor(Math.random() * tiles_high)
  };
}

var world = {
  players: {}
};
var pulse = Pulsar.createServer({server:httpServer});
var room = pulse.channel('main');


room.on('join', function(socket){
  socket.write({
    type: 'emit',
    channel: 'main',
    event: 'sync',
    args: [world]
  });

});

room.on('newjoin', function(img){
  world.players[img] = randLoc();
  room.emit('newsnake', img, world.players[img]);
});

room.on('move', function(img, loc){
  world.players[img] = loc;
});

room.on('leave', function(img){
  delete world.players[img];
  //room.emit('leave', img);
});

console.log("Server running on 8080");