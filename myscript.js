var step = 20;
var rect = {x:0,y:0,dx:step,dy:step}
var gKeyCode = 39;
document.body.onkeydown = function(event){KeyDown(event);}
setInterval(move, 100)

function paintRect()
{
	var canvas = document.getElementById("canvasId");
	var ctx = canvas.getContext("2d");

	/*ctx.moveTo(rect.x,rect.y);
	ctx.lineTo(rect.x + rect.dx, rect.y);
	ctx.lineTo(rect.x + rect.dx, rect.y + rect.dy);
	ctx.lineTo(rect.x, rect.y + rect.dy);
	ctx.lineTo(rect.x, rect.y);*/
	ctx.fillStyle="#FF0000";
	ctx.fillRect(rect.x,rect.y,rect.dx,rect.dy);	
	ctx.stroke();
}

function move()
{
	var canvas = document.getElementById("canvasId");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(rect.x-1, rect.y-1, rect.dx+2, rect.dy+2);
	switch (gKeyCode)
	{
			case 37: // left
				rect.x -= step;
				break;
				
			case 38: // up
				rect.y -= step;
				break;
				
			case 39: // right
				rect.x += step;
				break;
				
			case 40: // down
				rect.y += step;
				break;
	}
	
	paintRect();
}

function KeyDown(event)
{
	var canvas = document.getElementById("canvasId");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(rect.x-1, rect.y-1, rect.dx+2, rect.dy+2);
	gKeyCode = event.keyCode;
	switch (gKeyCode)
	{
			case 37: // left
				rect.x -= step;
				break;
				
			case 38: // up
				rect.y -= step;
				break;
				
			case 39: // right
				rect.x += step;
				break;
				
			case 40: // down
				rect.y += step;
				break;
	}
	
	paintRect();
}