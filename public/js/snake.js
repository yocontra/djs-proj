var myVars = {
    snake: {
        width: 60,
        height: 60
    },
    arena: {
        width: 20,
        height: 8
    }
};

moveUp = function(snake) {
    room.emit('move', window.mySnake, snake.position());
    pos = parseInt(snake.css('top'), 10) - myVars.snake.height;
    if (pos < 0) pos = 0;
    snake.css('top', pos);
};

moveDown = function(snake) {
    room.emit('move', window.mySnake, snake.position());
    pos = parseInt(snake.css('top'), 10) + parseInt(myVars.snake.height, 10);
    if(pos > (myVars.snake.height * (myVars.arena.height-1))) {
        pos = myVars.snake.height * (myVars.arena.height-1);
    }
    snake.css('top', pos);
};

moveLeft = function(snake) {
    room.emit('move', window.mySnake, snake.position());
    pos = parseInt(snake.css('left'), 10) - myVars.snake.width;
    if (pos < 0) pos = 0;
    snake.css('left', pos);
};

moveRight = function(snake) {
    room.emit('move', window.mySnake, snake.position());
    pos = parseInt(snake.css('left'), 10) + parseInt(myVars.snake.width, 10);
    if(pos > myVars.snake.height * (myVars.arena.width-1)) {
        pos = myVars.snake.height * (myVars.arena.width-1);
    }
    snake.css('left', pos);
};

// var pulse = Pulsar.createClient();
// channel = pulse.channel('test');
// channel.emit('ping', 2);

    
$(function() { //on dom ready
    $(document).keydown(function(e) {
        var snake = window.snakeObj;
        var pos;
        console.log('press', snake);
                
        switch (e.which) {
            case 38: //up
                moveUp(snake);
                break;

            case 40: //down
                moveDown(snake);
                break;

            case 37: //left
                moveLeft(snake);
                break;

            case 39: //right
                moveRight(snake);
                break;

            default:
                return;
        }

        return false;
    });
});

