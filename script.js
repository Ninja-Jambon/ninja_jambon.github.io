var canvas = null
var pion = null

start = function() {
    canvas = document.getElementById("myCanvas");
    setInterval(timerEvent, 100);
}

var ypion = 0;
var xpion = 0;

keyDown = function(event) {
    xpion++;
}

timerEvent = function() {
    ypion++;
    ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(xpion, ypion, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "pink";
    ctx.fill();
}

drawSalmonCircle = function(x, y) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "salmon";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "pink";
    ctx.stroke();
}

mouseClick = function(event) {
    rec = canvas.getBoundingClientRect();
    var x = 800 * (event.clientX - rec.x) / rec.width;
    var y = 800 * (event.clientY - rec.y) / rec.height;
    drawSalmonCircle(x, y);
}