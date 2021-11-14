canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1="car1.png";
car1_x=10;
car1_y=10;

car1_width=120;
car1_height=70;

car2="car1(1).png";
car2_x=10;
car2_y=100;

car2_width=120;
car2_height=70;

background_image = "racing.jpg"

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;
    car1_image=new Image();
    car1_image.onload=uploadcar1;
    car1_image.src=car1;
    car2_image=new Image();
    car2_image.onload=uploadcar2;
    car2_image.src=car2;
}
function uploadbackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_image,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2() {
    ctx.drawImage(car2_image,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",myKeydown);
function myKeydown(e) {
    keypress=e.keyCode;
    if(keypress == "37") {
    left();
        console.log("left")
    }
    if(keypress == "38") {
    up();
        console.log("up");
    }
    if(keypress == "39") {
    right();
        console.log("right");
    }
    if(keypress == "40") {
    down();
        console.log("down");
    }
}
function up() {
if(car1_y>=0){
    car1_y=car1_y-10;
    uploadbackground();
    uploadcar1();
}
}
function down() {
if(car1_y<=500){
    car1_y=car1_y+10;
    uploadbackground();
    uploadcar1();
}
}
function left() {
if(car1_x>=0){
    car1_x=car1_x-10;
    uploadbackground();
    uploadcar1();
}
}
function right() {
    if(car1_x<=500){
        car1_x=car1_x+10;
        uploadbackground();
        uploadcar1();
    }
}