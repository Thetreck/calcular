// JavaScript Document
function line(X1, Y1, X2, Y2){
	X1 = +X1;
	Y1 = +Y1;
	X2 = +X2;
	y2 = +y2;
	
	var canvas = document.getElementById("canvas")
	var context = canvas.getContext("2d");
	
	context.moveTo(X1, Y1);
	context.lineTo(X2, Y2);
	context.stroke();
	document.getElementById('X1').value = "0";
	document.getElementById('Y1').value = "0";
	document.getElementById('X2').value = "0";
	document.getElementById('Y2').value = "0";
}