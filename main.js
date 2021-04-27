var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

bgimage="racing.jpg";
car1image="car1.png";
car2image="car2.png"
function add(){
    backgroung_img=new Image();
    backgroung_img.onload=uploadBackground;
    backgroung_img.src=bgimage;

    car1_img=new Image();
    car1_img.onload=uploadcar1;
    car1_img.src=car1image;

    car2_img=new Image();
    car2_img.onload=uploadcar2;
    car2_img.src=car2image;
} 
function uploadBackground(){
ctx.drawImage(backgroung_img,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_img,10,10,100,100);
    }
    
function uploadcar2(){
    ctx.drawImage(car2_img,10,20,100,100);
    }