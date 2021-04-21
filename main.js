function preload(){

}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video, 100, 90, 435, 300)

    fill(0, 0 , 255);
    stroke(245, 0 ,0);
    circle(50, 50, 70);
    circle(50, 430, 70);
    circle(588, 50, 70);
    circle(588, 430, 70);

    fill(255, 0 , 0);
    stroke(0, 0 , 255 );
    rect(85, 40, 468, 20)
    rect(40, 85, 20, 310)
    rect(85, 420, 468, 20)
    rect(580, 85, 20, 310)

}

function takeSnapshot(){
    save("Snapshot.png");
}