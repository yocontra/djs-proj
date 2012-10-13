var pulse = Pulsar.createClient();
var room = pulse.channel('main');

//Add code to get image url
room.emit('join', 'my image url');

room.on('join', function(img, x, y){
  //Add snake of ID img and set pos
});

room.on('move', function(img, x, y){
  //Move other persons snake of ID img
});

room.on('leave', function(img){
  //Delete snake of ID img
});

var bright=false;

$(function(){setInterval(function(){if(bright){

$("#sky1, #cloud").css({"z-index":-1});if($.browser.msie)

$("#sky, #base").css({"z-index":0});else
$("#sky, #base").css({opacity:0,"z-index":0}).animate({opacity:1},4000);}
else{
$("#sky, #base").css({"z-index":-1});if($.browser.msie)
$("#sky1, #cloud").css({"z-index":0});else

$("#sky1, #cloud").css({opacity:0,"z-index":0}).animate({opacity:1},4000);}
bright=!bright;},8000);});