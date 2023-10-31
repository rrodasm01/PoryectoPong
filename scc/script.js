const bolaElement = document.querySelector("#bola");
const myCanvas = document.querySelector("#myCanvas");
let bola = { 
    x:0, y:0,
    direccion:false, //si va a la izq es false si no, true.
    color:"white",
    size:"5px",
    maxAltura:"600px",
    minAltura:"0",
    maxAnho:"1000px",
    minAncho:"0px",
};



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



