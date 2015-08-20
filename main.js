/**
 * Created by Administrator on 2015/8/19.
 */
(function(){
    drawSquare();
    drawFillSquare();
    drawTriangle();
    drawFillRightTriangle();
    drawArc();
    drawFillArc();
    pacMan();
    wall();
})()

function drawSquare(){
    var draw = document.getElementById("myCanvas");
    var square = draw.getContext("2d");
    square.strokeStyle="red";
    square.rect(10,10,10,10);
    square.stroke();
}

function drawFillSquare(){
    var draw = document.getElementById("myCanvas");
    var fillSquare =draw.getContext("2d");
    fillSquare.fillRect(30,10,30,30);
    fillSquare.fillStyle = "black";
}

function drawTriangle () {
    var draw = document.getElementById("myCanvas");
    var triangle = draw.getContext("2d");
    triangle.beginPath();
    triangle.lineWidth = "1";
    triangle.strokeStyle = "purple";
    triangle.moveTo(80,40);
    triangle.lineTo(110,40);
    triangle.lineTo(95,10);
    triangle.closePath();
    triangle.stroke();
}

function drawFillRightTriangle(){
    var draw = document.getElementById("myCanvas");
    var rightTriangle = draw.getContext("2d");
    rightTriangle.lineWidth = "1";
    rightTriangle.strokeStyle = "black";
    rightTriangle.beginPath();
    rightTriangle.moveTo(130,40);
    rightTriangle.lineTo(130,10);
    rightTriangle.lineTo(190,40);
    rightTriangle.fillStyle = "yellow";
    rightTriangle.fill();
    rightTriangle.closePath();
    rightTriangle.stroke();
}

function drawArc() {
    var draw = document.getElementById("myCanvas");
    var arc = draw.getContext("2d");
    arc.beginPath();
    arc.arc(230,40,15,Math.PI*0.25,Math.PI*1.75,false);
    arc.lineTo(230,40);
    arc.closePath();
    arc.stroke();
}

function drawFillArc() {
    var draw = document.getElementById("myCanvas");
    var fillArc = draw.getContext("2d");
    fillArc.beginPath();
    fillArc.arc(60,100,30,Math.PI*0,Math.PI*1.8,true);
    fillArc.lineTo(60,100);
    fillArc.closePath();
    fillArc.fillStyle = "green";
    fillArc.fill();
    fillArc.stroke();
}

function pacMan() {
   var draw = document.getElementById("myCanvas");
   var pacMan = draw.getContext("2d");
   pacMan.beginPath();
   pacMan.arc(150,100,25,Math.PI*1.8,Math.PI*0.2,true);
   pacMan.lineTo(150,100);
   pacMan.closePath();
   pacMan.fillStyle = "yellow";
   pacMan.fill();
   pacMan.stroke();
}

function wall(){
   var draw1 = document.getElementById("myCanvas");
   var wall = draw1.getContext("2d");
   wall.fillStyle = "red";
   wall.fillRect(180,70,50,50);
}
