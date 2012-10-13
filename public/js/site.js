$(function() {
    var mySnake = {
        width: 60,
        height: 60
    };
    var myArena = {
        width: 16,
        height: 12
    };
    $(document).keydown(function(e) {
        var snake = $('.snake').first();
        var pos;
                
        switch (e.which) {
            case 38: //up
                pos = parseInt(snake.css('top'), 10) - mySnake.height;
                if (pos < 0) pos = 0;
                snake.css('top', pos);
                break;

            case 40: //down
                pos = parseInt(snake.css('top'), 10) + parseInt(mySnake.height, 10);
                if(pos > (mySnake.height * (myArena.height-1))) {
                    pos = mySnake.height * (myArena.height-1);
                }
                snake.css('top', pos);
                break;

            case 37: //left
                pos = parseInt(snake.css('left'), 10) - mySnake.width;
                if (pos < 0) pos = 0;
                snake.css('left', pos);
                break;

            case 39: //right
                pos = parseInt(snake.css('left'), 10) + parseInt(mySnake.width, 10);
                if(pos > mySnake.height * (myArena.width-1)) {
                    pos = mySnake.height * (myArena.width-1);
                }
                snake.css('left', pos);
                break;

            default:
                return;
        }

        return false;
    });
});