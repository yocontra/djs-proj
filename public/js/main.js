var pulse = Pulsar.createClient();
var room = pulse.channel('main');

window.mySnake = prompt('Enter your name');


var addSnake = function(img, pos){
  console.log(img, pos);
  var snake_div = $("<div id=\"" + img + "\" class=\"snake\" title=\"" + img + "\">" + img + "</div>");
  snake_div.css("top", pos.y + "px");
  snake_div.css("left", pos.x + "px");
  $("#arena").append(snake_div);
};

//Add code to get image url
room.emit('newjoin', mySnake);

room.on('sync', function(world){
  var ref = world.players;
  for (var k in ref) {
    addSnake(k, ref[k]);
  }

});

room.on('newsnake', addSnake);

room.on('move', function(img, pos){
  //Move other persons snake of ID img
  var existing_snake = $("#" + img);
  if (existing_snake.length) {
	 existing_snake.css("top", pos.y + "px");
	 existing_snake.css("left", pos.x + "px");
  }
});

room.on('leave', function(img){
  //Delete snake of ID img
  $("#" + img).remove();
});

