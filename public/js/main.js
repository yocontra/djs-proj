var pulse = Pulsar.createClient();
var room = pulse.channel('main');

//Add code to get image url
room.emit('join', 'my image url');

room.on('join', function(img){
  //Add snake
});