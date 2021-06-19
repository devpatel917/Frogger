var a;
var Frog = new Image();
var pictX = 337;
var pictY = 645;
Frog.src = "Pictures/Frog.png";
var Car = new Image();
Car.src = "Pictures/Car.png";
var Log = new Image();
Log.src = "Pictures/Log.png";
var Star = new Image();
Star.src = "Pictures/Star.jpg";
var Heart = new Image();
Heart.src = "Pictures/Heart.png";
var CarArray = [];
var CarArray2 = [];
var CarArray3=[];
var CarArray4=[];
var CarArray5=[];
var CarArray6=[];
var CarArray7=[];
var CarArray8=[];
var CarArray9=[];
var LogArray1 = [];
var LogArray2 = [];
var LogArray3 = [];
var LogArray4 = [];
var LogArray5 = [];
var LogArray6=[];
var LogArray7=[];
var width =30;
var height = 30;
var die;
var pictX2=0;
var pictY2=0;
var CarAmount;
var lives =3;
var level=1;
var currentScore=0;
var pictureX=325;

function initialize(){
    document.getElementById("CurrentScore").innerHTML= "current score: " + currentScore;
    document.getElementById("lives").innerHTML="Amount Lives: " + lives;
    document.getElementById("levels").innerHTML="Current Level"+level;
    CarAmount=1;
    drawBackground();
    drawStartRectangle();
    drawMiddleRectangle();
    drawStreet();
    drawWater();
    drawEndPart();
    drawHole1();
    drawHole2();
    drawHole3();
    drawHole4();
    drawHole5();
    drawFrog();
    createImage("Pictures/Frog","Frog",pictX,pictY,30,30);
    LogArray1.push(createImage("Pictures/Log.png","Log",100,315,100,30));
    LogArray1.push(createImage("Pictures/Log.png","Log",325,315,100,30));
    LogArray1.push(createImage("Pictures/Log.png","Log",650,315,100,30));

    LogArray2.push(createImage("Pictures/Log.png","Log",650,285,100,30));
    LogArray2.push(createImage("Pictures/Log.png","Log",325,285,100,30));
    LogArray2.push(createImage("Pictures/Log.png","Log",100,285,100,30));

    LogArray3.push(createImage("Pictures/Log.png","Log",100,255,100,30));
    LogArray3.push(createImage("Pictures/Log.png","Log",325,255,100,30));
    LogArray3.push(createImage("Pictures/Log.png","Log",650,255,100,30));

    LogArray4.push(createImage("Pictures/Log.png","Log",650,225,100,30));
    LogArray4.push(createImage("Pictures/Log.png","Log",325,225,100,30));
    LogArray4.push(createImage("Pictures/Log.png","Log",100,225,100,30));

    LogArray5.push(createImage("Pictures/Log.png","Log",100,195,100,30));
    LogArray5.push(createImage("Pictures/Log.png","Log",325,195,100,30));
    LogArray5.push(createImage("Pictures/Log.png","Log",650,195,100,30));

    LogArray6.push(createImage("Pictures/Log.png","Log",650,165,100,30));
    LogArray6.push(createImage("Pictures/Log.png","Log",325,165,100,30));
    LogArray6.push(createImage("Pictures/Log.png","Log",100,165,100,30));

    LogArray7.push(createImage("Pictures/Log.png","Log",100,135,100,30));
    LogArray7.push(createImage("Pictures/Log.png","Log",325,135,100,30));
    LogArray7.push(createImage("Pictures/Log.png","Log",650,135,100,30));

    CarArray9.push(createImage("Pictures/Car.png","Car",100,375,30,30));
    CarArray9.push(createImage("Pictures/Car.png","Car",325,375,30,30));
    CarArray9.push(createImage("Pictures/Car.png","Car",650,375,30,30));

    CarArray8.push(createImage("Pictures/Car.png","Car",650,405,30,30));
    CarArray8.push(createImage("Pictures/Car.png","Car",325,405,30,30));
    CarArray8.push(createImage("Pictures/Car.png","Car",100,405,30,30));

    CarArray7.push(createImage("Pictures/Car.png","Car",100,435,30,30));
    CarArray7.push(createImage("Pictures/Car.png","Car",325,435,30,30));
    CarArray7.push(createImage("Pictures/Car.png","Car",650,435,30,30));

    CarArray6.push(createImage("Pictures/Car.png","Car",650,465,30,30));
    CarArray6.push(createImage("Pictures/Car.png","Car",325,465,30,30));
    CarArray6.push(createImage("Pictures/Car.png","Car",100,465,30,30));

    CarArray.push(createImage("Pictures/Car.png","Car",100,615,30,30));
    CarArray.push(createImage("Pictures/Car.png","Car",325,615,30,30));
    CarArray.push(createImage("Pictures/Car.png","Car",650,615,30,30));

    CarArray3.push(createImage("Pictures/Car.png","Car",100,555,30,30));
    CarArray3.push(createImage("Pictures/Car.png","Car",325,555,30,30));
    CarArray3.push(createImage("Pictures/Car.png","Car",650,555,30,30));

    CarArray2.push(createImage("Pictures/Car.png","Car",650,585,30,30));
    CarArray2.push(createImage("Pictures/Car.png","Car",325,585,30,30));
    CarArray2.push(createImage("Pictures/Car.png","Car",100,585,30,30));

    CarArray4.push(createImage("Pictures/Car.png","Car",650,525,30,30));
    CarArray4.push(createImage("Pictures/Car.png","Car",325,525,30,30));
    CarArray4.push(createImage("Pictures/Car.png","Car",100,525,30,30));

    CarArray5.push(createImage("Pictures/Car.png","Car",100,495,30,30));
    CarArray5.push(createImage("Pictures/Car.png","Car",325,495,30,30));
    CarArray5.push(createImage("Pictures/Car.png","Car",650,495,30,30));
    drawHeart();



}
function drawStar(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(Star,pictX2,pictY2,75,135);
}
function drawHeart(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(Heart,150,375,30,30);
}
function drawHeart2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(Heart,pictureX,255,30,30);
    pictureX+=CarAmount;
}
var createImage = function(src, title,xcoord,ycoord,wnum,hnum) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.left = xcoord;
    img.top = ycoord;
    img.width = wnum;
    img.height =hnum;
    return img;
};
function drawHole1(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#0000FF";
    ctx.fillRect(0,0,75,135);
}
function drawHole2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#0000FF";
    ctx.fillRect(135,0,75,135);
}
function drawHole3(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#0000FF";
    ctx.fillRect(270,0,75,135);
}
function drawHole4(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#0000FF";
    ctx.fillRect(405,0,75,135);
}
function drawEndPart(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,675,135);
}
function drawHole5(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#0000FF";
    ctx.fillRect(540,0,75,135);
}
function drawWater(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#0000FF";
    ctx.fillRect(0,135,675,210);
}
function drawBackground(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#C0C0C0";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
}
function drawStartRectangle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#00FF00";
    ctx.fillRect(0,645,675,30);
}
function drawMiddleRectangle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#00FF00";
    ctx.fillRect(0,345,675,30);
}
function drawStreet(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#000000";
    ctx.fillRect(0,370,675,280);
}
function drawFrog(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(Frog,pictX,pictY,30,30);
}
function startAnimation(){
    animate();

}
function animate() {
    a = requestAnimationFrame(animate);

    drawBackground();
    drawStartRectangle();
    drawMiddleRectangle();
    drawStreet();
    drawWater();
    drawEndPart();
    drawHole1();
    drawHole2();
    drawHole3();
    drawHole4();
    drawHole5();
    drawHeart();
    drawCars();
    checkWallCollision();
    drawCars2();
    checkWallCollision2();
    drawCars3();
    checkWallCollision3();
    drawCars4();
    checkWallCollision4();
    drawCars5();
    checkWallCollision5();
    drawCars6();
    checkWallCollision6();
    drawCars7();
    checkWallCollision7();
    drawCars8();
    checkWallCollision8();
    drawCars9();
    checkWallCollision9();
    checkCarCollision();
    drawLogs1();
    checkWallCollision10();
    drawLogs2();
    checkWallCollision11();
    drawLogs3();
    checkWallCollision12();
    drawLogs4();
    checkWallCollision13();
    drawLogs5();
    checkWallCollision14();
    drawLogs6();
    checkWallCollision15();
    drawLogs7();
    drawHeart2();
    checkHeartWallCollision();
    checkWallCollision16();
    checkLogCollision();
    checkCompartmentCollision();
    checkHeartCollision();
    drawFrog();


}
function checkHeartCollision(){
    if (pictX>150 && pictX<180 && pictY<405){
        lives=lives+1;
        document.getElementById("lives").innerHTML="Amount Lives: " + lives;
    }
}
function checkHeartWallCollision(){
    if (pictureX>=675){
        pictureX=-100
    }
}
function checkCompartmentCollision(){
    if (pictX>0 && pictX<75 && pictY<135){
        pictX = 337;
        pictY = 645;
        level=level+1;
        document.getElementById("levels").innerHTML="Current Level"+level;
        lives=3;
        document.getElementById("lives").innerHTML="Amount Lives: " + lives;
    }
    if (pictX>135 && pictX<210 && pictY<135){
        pictX = 337;
        pictY = 645;
        level=level+1;
        document.getElementById("levels").innerHTML="Current Level"+level;
        lives=3;
        document.getElementById("lives").innerHTML="Amount Lives: " + lives;
    }
    if (pictX>270 && pictX<345 && pictY<135){
        pictX = 337;
        pictY = 645;
        level=level+1;
        document.getElementById("levels").innerHTML="Current Level"+level;
        lives=3;
        document.getElementById("lives").innerHTML="Amount Lives: " + lives;
    }
    if (pictX>405 && pictX<480 && pictY<135){
        pictX = 337;
        pictY = 645;
        level=level+1;
        document.getElementById("levels").innerHTML="Current Level"+level;
        lives=3;
        document.getElementById("lives").innerHTML="Amount Lives: " + lives;
    }
    if (pictX>540 && pictX<615 && pictY<135){
        pictX = 337;
        pictY = 645;
        level=level+1;
        document.getElementById("levels").innerHTML="Current Level"+level;
        lives=3;
        document.getElementById("lives").innerHTML="Amount Lives: " + lives;
    }

}
//i could've abstracted this part out, i could've made a function called Reset and in that i would have the Xs and Ys for game Reset and call it whenever a reset needs to be done

function checkLogCollision(){
    if (pictY<345 && pictY>135){
        die=true;

    }

    for (i = 0; i < LogArray1.length; i++) {
        if (pictX  > LogArray1[i].left && pictX < LogArray1[i].left + LogArray1[i].width && pictY + height > LogArray1[i].top && pictY < LogArray1[i].top + LogArray1[i].height) {
            if (level==2){
                CarAmount=2;
            }
            if (level==3){
                CarAmount=3;
            }
            pictX += CarAmount;
            die=false;
        }
    }


    for (i = 0; i < LogArray2.length; i++) {
        if (pictX > LogArray2[i].left && pictX < LogArray2[i].left + LogArray2[i].width && pictY + height > LogArray2[i].top && pictY < LogArray2[i].top + LogArray1[i].height) {
            if (level==2){
                CarAmount=2;
            }
            if (level==3){
                CarAmount=3;
            }
            pictX -= CarAmount;
            die=false;

        }

    }
    for (i = 0; i < LogArray3.length; i++) {
        if (pictX > LogArray3[i].left && pictX < LogArray3[i].left + LogArray3[i].width && pictY + height > LogArray3[i].top && pictY < LogArray3[i].top + LogArray3[i].height) {
            if (level==2){
                CarAmount=2;
            }
            if (level==3){
                CarAmount=3;
            }
            pictX += CarAmount;
            die=false;

        }

    }
    for (i = 0; i < LogArray4.length; i++) {
        if (pictX > LogArray4[i].left && pictX < LogArray4[i].left + LogArray4[i].width && pictY + height > LogArray4[i].top && pictY < LogArray4[i].top + LogArray4[i].height) {
            if (level==2){
                CarAmount=2;
            }
            if (level==3){
                CarAmount=3;
            }
            pictX -= CarAmount;
            die=false;

        }

    }
    for (i = 0; i < LogArray5.length; i++) {
        if (pictX > LogArray5[i].left && pictX < LogArray5[i].left + LogArray5[i].width && pictY + height > LogArray5[i].top && pictY < LogArray5[i].top + LogArray5[i].height) {
            if (level==2){
                CarAmount=2;
            }
            if (level==3){
                CarAmount=3;
            }
            pictX += CarAmount;
            die=false;

        }

    }
    for (i = 0; i < LogArray6.length; i++) {
        if (pictX > LogArray6[i].left && pictX < LogArray6[i].left + LogArray6[i].width && pictY + height > LogArray6[i].top && pictY < LogArray6[i].top + LogArray6[i].height) {
            if (level==2){
                CarAmount=2;
            }
            if (level==3){
                CarAmount=3;
            }
            pictX -= CarAmount;
            die=false;

        }

    }


    for (i = 0; i < LogArray7.length; i++) {
        if (pictX > LogArray7[i].left && pictX < LogArray7[i].left + LogArray7[i].width && pictY + height > LogArray7[i].top && pictY < LogArray7[i].top + LogArray7[i].height) {
            if (level==2){
                CarAmount=2;
            }
            if (level==3){
                CarAmount=3;
            }
            pictX += CarAmount;
            die=false;

        }

    }

    if (die==true){
        pictX = 337;
        pictY = 645;

        lives=lives-1;

        document.getElementById("lives").innerHTML="Amount Lives: " + lives;
        if (lives==0){
            level=1;
            document.getElementById("levels").innerHTML="Current Level"+level;
        }
        currentScore=0;
        document.getElementById("CurrentScore").innerHTML= "current score: " + currentScore;

        die=false;
    }



}



function drawLogs6(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<LogArray6.length;i++){
        if (level==2){
            CarAmount=2;
        }
        if (level==3){
            CarAmount=3;
        }
        LogArray6[i].left-=CarAmount;
        ctx.drawImage(LogArray6[i],LogArray6[i].left,LogArray6[i].top,LogArray6[i].width,LogArray6[i].height);
    }
}
function drawLogs7(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<LogArray7.length;i++){
        if (level==2){
            CarAmount=2;
        }
        if (level==3){
            CarAmount=3;
        }
        LogArray7[i].left+=CarAmount;
        ctx.drawImage(LogArray7[i],LogArray7[i].left,LogArray7[i].top,LogArray7[i].width,LogArray7[i].height);
    }
}
function checkWallCollision15(){
    for(i = 0;i<LogArray6.length;i++){
        if(LogArray6[i].left <=-100){
            LogArray6[i].left = 775;
        }
    }
}
function checkWallCollision16(){
    for(i = 0;i<LogArray7.length;i++){
        if(LogArray7[i].left >=675){
            LogArray7[i].left = -100;
        }
    }
}
function checkWallCollision10(){
    for(i = 0;i<LogArray1.length;i++){
        if(LogArray1[i].left >=675){
            LogArray1[i].left = -100;
        }
    }
}
function checkWallCollision11(){
    for(i = 0;i<LogArray2.length;i++){
        if(LogArray2[i].left <=-100){
            LogArray2[i].left = 775;
        }
    }
}
function checkWallCollision12(){
    for(i = 0;i<LogArray3.length;i++){
        if(LogArray3[i].left >=675){
            LogArray3[i].left = -100;
        }
    }
}
function checkWallCollision13(){
    for(i = 0;i<LogArray4.length;i++){
        if(LogArray4[i].left <=-100){
            LogArray4[i].left = 775;
        }
    }
}
function checkWallCollision14(){
    for(i = 0;i<LogArray5.length;i++){
        if(LogArray5[i].left >=675){
            LogArray5[i].left = -100;
        }
    }
}
function drawLogs1(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<LogArray1.length;i++){
        if (level==2){
            CarAmount=2;
        }
        if (level==3){
            CarAmount=3;
        }
        LogArray1[i].left+=CarAmount;
        ctx.drawImage(LogArray1[i],LogArray1[i].left,LogArray1[i].top,LogArray1[i].width,LogArray1[i].height);
    }
}
function drawLogs2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<LogArray2.length;i++){
        if (level==2){
            CarAmount=2;
        }
        if (level==3){
            CarAmount=3;
        }
        LogArray2[i].left-=CarAmount;
        ctx.drawImage(LogArray2[i],LogArray2[i].left,LogArray2[i].top,LogArray2[i].width,LogArray2[i].height);
    }
}
function drawLogs3(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<LogArray3.length;i++){
        if (level==2){
            CarAmount=2;
        }
        if (level==3){
            CarAmount=3;
        }
        LogArray3[i].left+=CarAmount;
        ctx.drawImage(LogArray3[i],LogArray3[i].left,LogArray3[i].top,LogArray3[i].width,LogArray3[i].height);
    }
}
function drawLogs4(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<LogArray4.length;i++){
        if (level==2){
            CarAmount=2;
        }
        if (level==3){
            CarAmount=3;
        }
        LogArray4[i].left-=CarAmount;
        ctx.drawImage(LogArray4[i],LogArray4[i].left,LogArray4[i].top,LogArray4[i].width,LogArray4[i].height);
    }
}
function drawLogs5(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<LogArray5.length;i++){
        if (level==2){
            CarAmount=2;
        }
        if (level==3){
            CarAmount=3;
        }
        LogArray5[i].left+=CarAmount;
        ctx.drawImage(LogArray5[i],LogArray5[i].left,LogArray5[i].top,LogArray5[i].width,LogArray5[i].height);
    }
}
function checkCarCollision(){
    for(i = 0;i<CarArray.length;i++){
        if(pictX +width> CarArray[i].left && pictX< CarArray[i].left+CarArray[i].width && pictY + height >CarArray[i].top && pictY < CarArray[i].top+CarArray[i].height){
            pictX= 337;
            pictY = 645;

            lives=lives-1;
            currentScore=0;
            document.getElementById("CurrentScore").innerHTML= "current score: " + currentScore;
            document.getElementById("lives").innerHTML="Amount Lives: " + lives;
            if (lives==0){
                level=1;
                document.getElementById("levels").innerHTML="Current Level"+level;
            }

        }
    }
    for(i = 0;i<CarArray2.length;i++){
        if(pictX +width> CarArray2[i].left && pictX< CarArray2[i].left+CarArray2[i].width && pictY + height >CarArray2[i].top && pictY < CarArray2[i].top+CarArray2[i].height){
            pictX= 337;
            pictY = 645;

            lives=lives-1;
            currentScore=0;
            document.getElementById("CurrentScore").innerHTML= "current score: " + currentScore;
            document.getElementById("lives").innerHTML="Amount Lives: " + lives;
            if (lives==0){
                level=1;
                document.getElementById("levels").innerHTML="Current Level"+level;
            }
        }
    }
    for(i = 0;i<CarArray3.length;i++){
        if(pictX +width> CarArray3[i].left && pictX< CarArray3[i].left+CarArray3[i].width && pictY + height >CarArray3[i].top && pictY < CarArray3[i].top+CarArray3[i].height){
            pictX= 337;
            pictY = 645;

            lives=lives-1;
            currentScore=0;
            document.getElementById("CurrentScore").innerHTML= "current score: " + currentScore;
            document.getElementById("lives").innerHTML="Amount Lives: " + lives;
            if (lives==0){
                level=1;
                document.getElementById("levels").innerHTML="Current Level"+level;
            }
        }
    }
    for(i = 0;i<CarArray4.length;i++){
        if(pictX +width> CarArray4[i].left && pictX< CarArray4[i].left+CarArray4[i].width && pictY + height >CarArray4[i].top && pictY < CarArray4[i].top+CarArray4[i].height){
            pictX= 337;
            pictY = 645;

            lives=lives-1;
            currentScore=0;
            document.getElementById("CurrentScore").innerHTML= "current score: " + currentScore;
            document.getElementById("lives").innerHTML="Amount Lives: " + lives;
            if (lives==0){
                level=1;
                document.getElementById("levels").innerHTML="Current Level"+level;
            }
        }
    }
    for(i = 0;i<CarArray5.length;i++){
        if(pictX +width> CarArray5[i].left && pictX< CarArray5[i].left+CarArray5[i].width && pictY + height >CarArray5[i].top && pictY < CarArray5[i].top+CarArray5[i].height){
            pictX= 337;
            pictY = 645;

            lives=lives-1;
            currentScore=0;
            document.getElementById("CurrentScore").innerHTML= "current score: " + currentScore;
            document.getElementById("lives").innerHTML="Amount Lives: " + lives;
            if (lives==0){
                level=1;
                document.getElementById("levels").innerHTML="Current Level"+level;
            }
        }
    }
    for(i = 0;i<CarArray6.length;i++){
        if(pictX +width> CarArray6[i].left && pictX< CarArray6[i].left+CarArray6[i].width && pictY + height >CarArray6[i].top && pictY < CarArray6[i].top+CarArray6[i].height){
            pictX= 337;
            pictY = 645;

            lives=lives-1;
            currentScore=0;
            document.getElementById("CurrentScore").innerHTML= "current score: " + currentScore;
            document.getElementById("lives").innerHTML="Amount Lives: " + lives;
            if (lives==0){
                level=1;
                document.getElementById("levels").innerHTML="Current Level"+level;
            }
        }
    }
    for(i = 0;i<CarArray7.length;i++){
        if(pictX +width> CarArray7[i].left && pictX< CarArray7[i].left+CarArray7[i].width && pictY + height >CarArray7[i].top && pictY < CarArray7[i].top+CarArray7[i].height){
            pictX= 337;
            pictY = 645;

            lives=lives-1;
            currentScore=0;
            document.getElementById("CurrentScore").innerHTML= "current score: " + currentScore;
            document.getElementById("lives").innerHTML="Amount Lives: " + lives;
            if (lives==0){
                level=1;
                document.getElementById("levels").innerHTML="Current Level"+level;
            }
        }
    }
    for(i = 0;i<CarArray8.length;i++){
        if(pictX +width> CarArray8[i].left && pictX< CarArray8[i].left+CarArray8[i].width && pictY + height >CarArray8[i].top && pictY < CarArray8[i].top+CarArray8[i].height){
            pictX= 337;
            pictY = 645;

            lives=lives-1;
            currentScore=0;
            document.getElementById("CurrentScore").innerHTML= "current score: " + currentScore;
            document.getElementById("lives").innerHTML="Amount Lives: " + lives;
            if (lives==0){
                level=1;
                document.getElementById("levels").innerHTML="Current Level"+level;
            }
        }
    }
    for(i = 0;i<CarArray9.length;i++){
        if(pictX +width> CarArray9[i].left && pictX< CarArray9[i].left+CarArray9[i].width && pictY + height >CarArray9[i].top && pictY < CarArray9[i].top+CarArray9[i].height){
            pictX= 337;
            pictY = 645;

            lives=lives-1;
            currentScore=0;
            document.getElementById("CurrentScore").innerHTML= "current score: " + currentScore;
            document.getElementById("lives").innerHTML="Amount Lives: " + lives;
            if (lives==0){
                level=1;
                document.getElementById("levels").innerHTML="Current Level"+level;
            }
        }
    }
}
function drawCars9(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<CarArray9.length;i++){
        CarArray9[i].left+=CarAmount;
        ctx.drawImage(CarArray9[i],CarArray9[i].left,CarArray9[i].top,CarArray9[i].width,CarArray9[i].height);
    }
}
function checkWallCollision9(){
    for(i = 0;i<CarArray9.length;i++){
        if(CarArray9[i].left >=675){
            CarArray9[i].left = -100;
        }
    }
}
function drawCars8(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (x=0;x<CarArray8.length;x++){
        CarArray8[x].left-=CarAmount;
        ctx.drawImage(CarArray8[x],CarArray8[x].left,CarArray8[x].top,CarArray8[x].width,CarArray8[x].height);
    }
}
function checkWallCollision8(){
    for(i = 0;i<CarArray8.length;i++){
        if(CarArray8[i].left <=-30){
            CarArray8[i].left = 775;
        }
    }
}
function drawCars7(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<CarArray7.length;i++){
        CarArray7[i].left+=CarAmount;
        ctx.drawImage(CarArray7[i],CarArray7[i].left,CarArray7[i].top,CarArray7[i].width,CarArray7[i].height);
    }
}
function checkWallCollision7(){
    for(i = 0;i<CarArray7.length;i++){
        if(CarArray7[i].left >=675){
            CarArray7[i].left = -100;
        }
    }
}
function drawCars6(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (x=0;x<CarArray6.length;x++){
        CarArray6[x].left-=CarAmount;
        ctx.drawImage(CarArray6[x],CarArray6[x].left,CarArray6[x].top,CarArray6[x].width,CarArray6[x].height);
    }
}
function checkWallCollision6(){
    for(i = 0;i<CarArray6.length;i++){
        if(CarArray6[i].left <=-30){
            CarArray6[i].left = 775;
        }
    }
}
function drawCars5(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<CarArray5.length;i++){
        CarArray5[i].left+=CarAmount;
        ctx.drawImage(CarArray5[i],CarArray5[i].left,CarArray5[i].top,CarArray5[i].width,CarArray5[i].height);
    }
}
function checkWallCollision5(){
    for(i = 0;i<CarArray5.length;i++){
        if(CarArray5[i].left >=675){
            CarArray5[i].left = -100;
        }
    }
}
function drawCars4(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (x=0;x<CarArray4.length;x++){
        CarArray4[x].left-=CarAmount;
        ctx.drawImage(CarArray4[x],CarArray4[x].left,CarArray4[x].top,CarArray4[x].width,CarArray4[x].height);
    }
}
function checkWallCollision4(){
    for(i = 0;i<CarArray4.length;i++){
        if(CarArray4[i].left <=-30){
            CarArray4[i].left = 775;
        }
    }
}
function drawCars3(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<CarArray3.length;i++){
        CarArray3[i].left+=CarAmount;
        ctx.drawImage(CarArray3[i],CarArray3[i].left,CarArray3[i].top,CarArray3[i].width,CarArray3[i].height);
    }
}
function checkWallCollision3(){
    for(i = 0;i<CarArray3.length;i++){
        if(CarArray3[i].left >=675){
            CarArray3[i].left = -100;
        }
    }
}
function checkWallCollision2(){
    for(i = 0;i<CarArray2.length;i++){
        if(CarArray2[i].left <=-30){
            CarArray2[i].left = 775;
        }
    }
}
function drawCars(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<CarArray.length;i++){
        CarArray[i].left+=CarAmount;
        ctx.drawImage(CarArray[i],CarArray[i].left,CarArray[i].top,CarArray[i].width,CarArray[i].height);
    }

}
function drawCars2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (x=0;x<CarArray2.length;x++){
        CarArray2[x].left-=CarAmount;
        ctx.drawImage(CarArray2[x],CarArray2[x].left,CarArray2[x].top,CarArray2[x].width,CarArray2[x].height);
    }
}
function checkWallCollision(){
    for(i = 0;i<CarArray.length;i++){
        if(CarArray[i].left >=675){
            CarArray[i].left = -100;
        }
    }
}
$(document).keydown(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if  (keycode==87){
        pictY-=30;
        currentScore=currentScore+1;
        document.getElementById("CurrentScore").innerHTML= currentScore;

    }
    if (keycode==65){
        pictX-=30;
        document.getElementById("CurrentScore").innerHTML= currentScore;
    }
    if (keycode==68){
        pictX+=30;
        document.getElementById("CurrentScore").innerHTML= currentScore;
    }
    if (keycode==83){
        pictY+=30;
        currentScore=currentScore-1;
        document.getElementById("CurrentScore").innerHTML= currentScore;


    }
});
