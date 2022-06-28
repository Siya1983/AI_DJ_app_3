song_1="";
song_2="";


leftWristX=0;
leftWristY=0;

rightWrightX=0;
rightWrightY=0;

function setup(){
    canvas= createCanvas(550, 400);
    canvas.position(370, 180)

    video= createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload(){
song_1= loadsound("music.mp3");
song_2= loadsound("music2.mp3");
}


function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);

leftWristX=results[0].pose.leftWrist.X;
leftWristY=results[0].pose.leftWrist.Y;


rightWristX=results[0].pose.rightWrist.X;
rightWristY=results[0].pose.rightWrist.Y;

console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}