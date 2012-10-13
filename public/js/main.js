var pulse = Pulsar.createClient();
var room = pulse.channel('main');

//Add code to get image url
room.emit('join', 'my image url');

room.on('join', function(img){
  //Add snake of ID img
});

room.on('move', function(img, x, y){
  //Move other persons snake of ID img
});

room.on('leave', function(img){
  //Delete snake of ID img
});