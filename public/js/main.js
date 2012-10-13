var pulse = Pulsar.createClient();
var room = pulse.channel('main');

//Add code to get image url
// room.emit('join', prompt('Enter your name'));

room.on('join', function(img, x, y){
  //Add snake of ID img and set pos
  createSnake();
});

room.on('move', function(img, x, y){
  //Move other persons snake of ID img
});

room.on('leave', function(img){
  //Delete snake of ID img
});