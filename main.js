canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_img="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_img="car2.png";
car2_x=10;
car2_y=100;
background_img="c1.jpg";
function add()
{
    background_imgTag= new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src= background_img;

    car1_imgTag= new Image();
    car1_imgTag.onload= uploadCar1;
    car1_imgTag.src= car1_img;
    car2_imgTag= new Image();
    car2_imgTag.onload= uploadCar2;
    car2_imgTag.src= car2_img;
}
 function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1()
{
ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadCar2()
{
ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38'){
        up1();
    }
    if (keyPressed == '40'){
        down1();
    }    
    if (keyPressed == '37'){
        left1();
    }
    if (keyPressed == '39'){
        right1();
    }
    if (keyPressed == '87'){
        up2();
    }
    if (keyPressed == '83'){
        down2();
    }
    if (keyPressed == '65'){
        left2();
    }
    if (keyPressed == '68'){
        right2();
    }
}