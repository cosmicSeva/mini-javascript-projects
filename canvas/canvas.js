let canvas = document.querySelector("#canvas");
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//paint brush to draw on canvas
 let pen = canvas.getContext("2d");
 console.log(pen);
 
 pen.fillStyle = "rgb(192, 6, 6)";
 //used to make filled rectangles 
 // fillRect( x , y , lenght , breadth)
 pen.fillRect(10,10,50,50);
 pen.clearRect();
 pen.strokeRect();

 pen.fillStyle = "rgb(0 0 200 / 50%)";
 pen.fillRect(30,30,50,50);