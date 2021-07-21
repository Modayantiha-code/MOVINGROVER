var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=90;
var rover_xposition=10;
var rover_yposition=10;
var background_image="mars.jpg";
var rover_image="rover.png";
function add(){
var background_image_load=new Image();
background_image_load.onload=uploadbackground;
var rover_image_load=new Image();
rover_image_load.onload=uploadrover;
}
function uploadbackground(){
ctx.drawImage("mars.jpg", 0, 0, 800, 600);
}
function uploadrover(){
ctx.drawImage(rover_image, rover_xposition, rover_yposition, rover_width, rover_height);
}
window.addEventListener("keydown",keydownfunction)
function keydownfunction(e){
    var keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
}
function up(){
if(rover_yposition>0){
    rover_yposition=rover_yposition-10;
    console.log("Up Arrow Pressed: X=" +rover_xposition + "Y=" +rover_yposition);
    uploadbackground();
    uploadrover();
}
}
function down(){
    if(rover_yposition<600){
        rover_yposition=rover_yposition+10;
        console.log("Down Arrow Pressed: X=" +rover_xposition + "Y=" +rover_yposition);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_xposition>0){
        rover_xposition=rover_xposition-10;
        console.log("Left Arrow Pressed: X=" +rover_xposition + "Y=" +rover_yposition);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_xposition<800){
        rover_xposition=rover_xposition+10;
        console.log("Right Arrow Pressed: X=" +rover_xposition + "Y=" +rover_yposition);
        uploadbackground();
        uploadrover();
    }
}