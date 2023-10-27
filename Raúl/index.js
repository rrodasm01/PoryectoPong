const myCanvas = document.querySelector("#myCanvas");

myCanvas.width = 800;
myCanvas.height = 500;

let context = myCanvas.getContext("2d");

//Posicionamiento del pincel
context.beginPath();

context.stroke();

context.closePath();

//Para dibujar un rectángulo

context.fillStyle = "black";

context.fillRect(0, 0, myCanvas.width, myCanvas.height);