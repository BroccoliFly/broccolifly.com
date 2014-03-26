var pos = 0;

function rotate() {
    pos += 0.04;

    var radius = 20;
    var marginLeft = ($(window).width() / 2) - 160;
    var marginTop = 0;

    var left = Math.floor(marginLeft + (radius * Math.cos(pos)));
    var top = Math.floor(marginTop + (radius * Math.sin(pos)));

    $('.fly').animate({
        "margin-top": top,
        "margin-left": left,
    }, 1, function() {
        rotate();
    });
}

rotate();