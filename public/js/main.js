var pulse = Pulsar.createClient();
var room = pulse.channel('main');

//Add code to get image url
// room.emit('join', prompt('Enter your name'));

room.on('join', function(img, x, y){
  //Add snake of ID img and set pos
  var snake_div = $("<div id=\"" + img + "\" class=\"snake\"></div>");
  snake_div.css("top", x + "px");
  snake_div.css("left", y + "px");
  $("#main").append(snake_div);
});

room.on('move', function(img, x, y){
  //Move other persons snake of ID img
  var existing_snake = $("#" + img);
  if (existing_snake.length) {
	existing_snake.css("top", x + "px");
	existing_snake.css("left", y + "px");
  }
});

room.on('leave', function(img){
  //Delete snake of ID img
  $("#" + img).remove();
});

